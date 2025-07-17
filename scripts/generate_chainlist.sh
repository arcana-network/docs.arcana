#!/bin/zsh

# Check if two input files are provided
if [ $# -ne 2 ]; then
    echo "Usage: $0 file1 file2"
    exit 1
fi

FILE1=$1
FILE2=$2
OUTPUT="output.md"

# Check if input files exist
if [ ! -f "$FILE1" ]; then
    echo "Error: File $FILE1 does not exist"
    exit 1
fi
if [ ! -f "$FILE2" ]; then
    echo "Error: File $FILE2 does not exist"
    exit 1
fi

# Check if FILE2 contains 'const RawData'
if ! grep -q 'const RawData' "$FILE2"; then
    echo "Error: $FILE2 does not contain 'const RawData'"
    exit 1
fi

# Step 1: Create currency mapping from file1
currency_map=$(cat "$FILE1" | grep -A 100 'export enum CurrencyID {' | awk '
    BEGIN { in_enum=0 }
    /export enum CurrencyID {/ { in_enum=1; next }
    in_enum && /}/ { in_enum=0; next }
    in_enum && /=/ {
        if ($0 ~ /[A-Z]+[ ]*=[ ]*(0x[0-9a-fA-F]+|[0-9]+)/) {
            split($0, arr, "=")
            symbol=arr[1]
            id=arr[2]
            gsub(/[ ,]/, "", symbol)
            gsub(/[ ,;]*/, "", id)
            # Convert hex ID to decimal if it starts with 0x
            if (id ~ /^0x/) {
                printf "%d:", ("0x" substr(id, 3))
            } else {
                printf "%s:", id
            }
            print symbol
        }
    }
')

if [ -z "$currency_map" ]; then
    echo "Error: Failed to parse currency mappings from $FILE1"
    exit 1
fi

# Debug: Print currency_map
echo "DEBUG: currency_map:" > /dev/stderr
echo "$currency_map" > /dev/stderr

# Step 2: Process file2 to get chain data
# Capture grep output for debugging
grep_output=$(cat "$FILE2" | grep -A 1000 'const RawData[ ]*=[ ]*\[')
if [ -z "$grep_output" ]; then
    echo "Error: Failed to find 'const RawData = [' in $FILE2"
    exit 1
fi

chain_data=$(echo "$grep_output" | awk '
    BEGIN { in_array=0; in_chain=0; in_currencies=0; currency_list=""; chain_id_hex="" }
    /[ \t]*const RawData[ ]*=[ ]*\[/ { in_array=1; next }
    in_array && /[ \t]*\];/ { in_array=0; next }
    in_array && /[ \t]*ChainID32:/ {
        in_chain=1
        next
    }
    in_array && in_chain && !in_currencies && /[ \t]*"0x[0-9a-fA-F]+"/ {
        chain_id_hex=$1
        gsub(/"/, "", chain_id_hex)
        gsub(/,/, "", chain_id_hex)
        chain_id_short=substr(chain_id_hex, length(chain_id_hex)-7)
        printf "%d|", ("0x" chain_id_short)
        currency_list=""
        next
    }
    in_array && in_chain && /[ \t]*Currencies:[ ]*\[/ {
        in_currencies=1
        next
    }
    in_currencies && /[ \t]*CurrencyID:[ ]*[0-9]+[ ,]*/ {
        if (match($0, /CurrencyID:[ ]*([0-9]+)/)) {
            id=substr($0, RSTART+11, RLENGTH-11)
            if (currency_list == "") {
                currency_list=id
            } else {
                currency_list=currency_list " " id
            }
            print "DEBUG: Matched CurrencyID: " id > "/dev/stderr"
        }
        next
    }
    in_currencies && /[ \t]*\},/ {
        next
    }
    in_currencies && /[ \t]*\]/ {
        in_currencies=0
        in_chain=0
        if (currency_list != "") {
            # Remove extra spaces from currency_list
            gsub(/[ ]+/, " ", currency_list)
            gsub(/^ /, "", currency_list)
            gsub(/ $/, "", currency_list)
            print currency_list
            print "DEBUG: Output currency_list: " currency_list > "/dev/stderr"
        }
        next
    }
')

if [ -z "$chain_data" ]; then
    echo "Error: Failed to parse chain data from $FILE2"
    echo "Debug: First 10 lines of grep output:"
    echo "$grep_output" | head -n 10
    exit 1
fi

# Debug: Print chain_data
echo "DEBUG: chain_data:" > /dev/stderr
echo "$chain_data" > /dev/stderr

# Step 3: Create output file
echo "" > "$OUTPUT"

# Process each chain
echo "$chain_data" | while IFS='|' read chain_id currencies; do
    # Get chain name using curl, targeting the <title> tag
    chain_name=$(curl -s --fail "https://chainlist.org/chain/$chain_id" | grep -o '<title>[^<]*</title>' | sed 's/<title>\([^|]*\) RPC and Chain settings.*/\1/' | head -n 1)
    if [ -z "$chain_name" ]; then
        chain_name="Unknown Chain"
    fi

    # Convert currency IDs to symbols
    currency_symbols=""
    for curr_id in $currencies; do
        # Trim whitespace from curr_id
        curr_id=$(echo "$curr_id" | tr -d '[:space:]')
        echo "DEBUG: Processing curr_id: '$curr_id'" > /dev/stderr
        symbol=$(echo "$currency_map" | grep "^$curr_id:" | cut -d':' -f2)
        echo "DEBUG: grep output for ^$curr_id:: '$symbol'" > /dev/stderr
        if [ -n "$symbol" ]; then
            # Trim whitespace from symbol
            symbol=$(echo "$symbol" | tr -d '[:space:]')
            if [ -z "$currency_symbols" ]; then
                currency_symbols="$symbol"
            else
                currency_symbols="$currency_symbols, $symbol"
            fi
        fi
    done

    # Write to markdown
    {
        echo "# $chain_name"
        echo ""
        echo "| Tokens |"
        echo "|--------|"
        for symbol in ${(s:, :)currency_symbols}; do
            echo "| $symbol |"
        done
        echo ""
    } >> "$OUTPUT"

    # Print to console for verification
    echo "Chain ID: $chain_id - Chain name: $chain_name - Currencies: $currencies Sym: $currency_symbols"
done

exit 0
