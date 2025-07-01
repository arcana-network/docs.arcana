#!/bin/zsh

# Check if both arguments are provided
if [[ $# -ne 1 ]]; then
  echo "Usage: $0 <auth/ca-sdk/ca-wagmi>"
  exit 1
fi

# Function to update env vars
update_env_var() {
    local var_name=$1
    local var_value=$2

    if grep -q "^export $var_name=" .env; then
        sed -i "" "s/^export $var_name=.*/export $var_name='$var_value'/" .env
    else
        echo "export $var_name='$var_value'" >> .env
    fi
}

# Read values from command line arguments
sdk_name=$1
echo "SDK name=$sdk_name"

# Get the latest sdk version from the npm registry
npmjs_sdk_url=$(echo "https://www.npmjs.com/package/@arcana/$sdk_name")
sdk_ver=$(curl -s "$npmjs_sdk_url" | \
awk -F'"latest":' '{print $2}' | awk -F'"' '{print $2}' | \
tr -d '\n' | \
sed 's/^[[:space:]]*//;s/[[:space:]]*$//')

echo "version=$sdk_ver"

# Check if the version in 'VERSION' file is different from 'sdk_ver'
if [ ! -f VERSION ] || [ "$(cat VERSION)" != "$sdk_ver" ]; then
    # Write the version to a file named 'VERSION' in the current directory
    echo "$sdk_ver" > VERSION

    # Get the creation time for the specified version, remove any warnings, and format the time
    reldate=$(curl -s "$npmjs_sdk_url" | \
    awk -F'"time":' '{print $2}' | \
   # awk -F'"created"' '{print $2}' | \
   # awk -F"\"$sdk_ver\"" '{print $2}' | \
    awk -F'"' '{print $2}' | \
    tr -d '\n' | \
    sed 's/^[[:space:]]*//;s/[[:space:]]*$//' | \
    ( 
        if [[ "$OSTYPE" == "linux-gnu"* ]]; then 
            xargs -I{} date -u -d {} "+%d %b %Y %H:%M:%S UTC" 
        elif [[ "$OSTYPE" == "darwin"* ]]; then 
            xargs -I{} date -u -j -f "%Y-%m-%dT%H:%M:%S" {} "+%d %b %Y %H:%M:%S UTC" 
        else 
            echo "Unsupported OS: $OSTYPE"
            exit 1
        fi
    ))

    echo "Release date: $reldate"

    # Write the formatted date to a file named '<SDK>_RELEASEDATE' in the current directory
    echo "$reldate" > RELEASEDATE
fi

if [ ! -f .env ]; then
    touch .env
fi

case "$sdk_name" in
    "auth")
         update_env_var "AUTH_SDK_VERSION" "$(cat VERSION)"
         update_env_var "AUTH_SDK_REL_DATE" "$(cat RELEASEDATE)"
         ;;

    "auth-wagmi")
         update_env_var "AUTH_WAGMI_SDK_VERSION" "$(cat VERSION)"
         update_env_var "AUTH_WAGMI_SDK_REL_DATE" "$(cat RELEASEDATE)"
         ;;

    "ca-sdk")
         update_env_var "CA_SDK_VERSION" "$(cat VERSION)"
         update_env_var "CA_SDK_REL_DATE" "$(cat RELEASEDATE)"
         ;;

    "ca-wagmi")
         update_env_var "CA_WAGMI_SDK_VERSION" "$(cat VERSION)"
         update_env_var "CA_WAGMI_SDK_REL_DATE" "$(cat RELEASEDATE)"
         ;;

    *) 
        exit 1
        ;;
esac

if [ -f VERSION ]; then
    rm VERSION
fi

if [ -f  RELEASEDATE ]; then
    rm RELEASEDATE

fi
