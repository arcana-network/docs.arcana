# auth-mkdocs
Arcana Auth Documentation based on Mkdocs, material design

## Prerequisites

1. Install mkdocs, version 1.4.2 or higher
2. Install all packages listed in the requirements.txt file
3. Use python v 3.9.7 or higher

## Environment Variables

`GOOGLE_ANALYTICS_ID=<Use from Arcana Vault - Contact Ajay>`

`DOCS_SITE_URL='https://docs.arcana.network'`

`MARKER_IO_DESTINATION_ID="Use from Arcana Vault - Contact Ajay>"`

`PYTHON_VERSION="3.8"`

## Build

```sh
mkdocs build
```

## Generate Local Site

```sh
mkdocs serve -a localhost:8100

```