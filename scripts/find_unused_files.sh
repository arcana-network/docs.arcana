#!/bin/zsh

# Function to display usage
usage() {
    echo "Usage: $0 -s <source_folder1>[,<source_folder2>,...] -r <ref_folder1>[,<ref_folder2>,...]"
    echo "Example: $0 -s /src1,/src2 -r /ref1,/src1"
    exit 1
}

# Initialize arrays for source and reference folders
typeset -a source_folders ref_folders

# Parse command-line options
while getopts "s:r:" opt; do
    case $opt in
        s)
            # Split comma-separated source folders into array
            IFS=',' read -r -A source_folders <<< "$OPTARG"
            ;;
        r)
            # Split comma-separated reference folders into array
            IFS=',' read -r -A ref_folders <<< "$OPTARG"
            ;;
        \?)
            usage
            ;;
    esac
done

# Check if source and reference folders are provided
if [[ ${#source_folders[@]} -eq 0 || ${#ref_folders[@]} -eq 0 ]]; then
    echo "Error: Both -s and -r options must be provided with at least one folder"
    usage
fi

# Validate source folders
for folder in "${source_folders[@]}"; do
    if [[ ! -d "$folder" ]]; then
        echo "Error: Source folder '$folder' does not exist"
        exit 1
    fi
done

# Validate reference folders
for folder in "${ref_folders[@]}"; do
    if [[ ! -d "$folder" ]]; then
        echo "Error: Reference folder '$folder' does not exist"
        exit 1
    fi
done

# Function to check if a file is referenced
check_file_referenced() {
    local source_file="$1"
    local filename=$(basename "$source_file")
    local found=0

    # Iterate through all reference folders
    for ref_folder in "${ref_folders[@]}"; do
        # Iterate through all files in the current reference folder and subfolders
        while IFS= read -r ref_file; do
            # Skip checking the source file against itself
            if [[ "$ref_file" == "$source_file" ]]; then
                continue
            fi
            # Check if the filename is mentioned in the reference file
            if grep -q -- "$filename" "$ref_file" 2>/dev/null; then
                found=1
                break 2  # Exit both loops if found
            fi
        done < <(find "$ref_folder" -type f)
    done

    # If not found in any reference file, print the source file path
    if [[ $found -eq 0 ]]; then
        echo "$source_file"
    fi
}

# Process all files in all source folders and their subfolders
for src_folder in "${source_folders[@]}"; do
    find "$src_folder" -type f | while read -r file; do
        check_file_referenced "$file"
    done
done