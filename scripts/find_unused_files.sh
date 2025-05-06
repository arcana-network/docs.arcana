#!/bin/zsh

# Function to display usage
usage() {
    echo "Usage: $0 -s <source_folder> -d <destination_folder1>[,<destination_folder2>,...]"
    echo "  -s: Source folder containing files to process"
    echo "  -d: One or more destination folders to search for matching strings (comma-separated)"
    exit 1
}

# Parse command line options
while getopts "s:d:" opt; do
    case $opt in
        s) SOURCE_FOLDER="$OPTARG" ;;
        d) DEST_FOLDERS="$OPTARG" ;;
        *) usage ;;
    esac
done

# Check if source and destination folders are provided
if [[ -z "$SOURCE_FOLDER" || -z "$DEST_FOLDERS" ]]; then
    usage
fi

# Check if source folder exists
if [[ ! -d "$SOURCE_FOLDER" ]]; then
    echo "Error: Source folder '$SOURCE_FOLDER' does not exist"
    exit 1
fi

# Split destination folders into an array
IFS=',' read -rA DEST_FOLDER_ARRAY <<< "$DEST_FOLDERS"

# Check if each destination folder exists
for folder in "${DEST_FOLDER_ARRAY[@]}"; do
    if [[ ! -d "$folder" ]]; then
        echo "Error: Destination folder '$folder' does not exist"
        exit 1
    fi
done

# Initialize an associative array to track reference status
typeset -A file_status

# Process each file in the source folder recursively
find "$SOURCE_FOLDER" -type f | while read -r file; do
    # Get the basename (filename without path)
    filename=$(basename "$file")
    
    # Extract name without extension
    if [[ "$filename" =~ ^(.+)\.(.+)$ ]]; then
        string1="${match[1]}"  # Get the part before the extension
    else
        string1="$filename"    # No extension, use whole filename
    fi

    # Mark file as not found initially
    file_status["$file"]="not_found"

    # Search for string1 in all destination folders
    for dest_folder in "${DEST_FOLDER_ARRAY[@]}"; do
        if find "$dest_folder" -type f -exec grep -l "$string1" {} + 2>/dev/null | grep -q .; then
            # If found, mark file as found and break
            file_status["$file"]="found"
            break
        fi
    done
done

# Print files that were not found (full filepath)
for file in "${(k)file_status[@]}"; do
    if [[ "${file_status[$file]}" == "not_found" ]]; then
        echo "$file"
    fi
done

exit 0
