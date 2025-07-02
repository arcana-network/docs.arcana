# Arcana Documentation

The repository `docs.arcana` contains the documentation sources and scripts for building 
the Arcana Network's SDKs:

* [Chain Abstraction](https://docs.arcana.network/concepts/ca/chain-abstraction/)
* [Auth](https://docs.arcana.network/concepts/authtype/). 

The following documentation tools are used to build a static site generator deployed via Netlify:

* `mkdocs`
* `mkdocs-material`

Follow these instructions to add/update content in this repository.

## Prerequisites

1. Install `mkdocs`, version 1.6.0 or higher
2. Install all packages listed in the requirements.txt file
3. Use `python` version 3.9.7 or higher
4. For Mac build, besides enabling all packages in requirements.txt
   make sure these are installed for meta tags used in social preview of shared links

`brew install cairo freetype libffi libjpeg libpng zlib`

For more details, see dependencies listed in 
[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/setup/dependencies/image-processing/).

If you see build issues on Mac due to `cairo` library path try adding:

`export DYLD_FALLBACK_LIBRARY_PATH=/opt/homebrew/lib`

## Environment Variables

`GOOGLE_ANALYTICS_ID=<Use from Arcana Vault - Contact Ajay>`

`DOCS_SITE_URL='https://docs.arcana.network'`

`PYTHON_VERSION="3.13.0"`

## Build

```sh
mkdocs build
```

## Development

```sh
 mkdocs serve -a localhost:<port num>
```

## Troubleshooting

If you see issue with using liburl3==2.0.3, replace it with v < 1.0

Ref: https://stackoverflow.com/questions/76187256/importerror-urllib3-v2-0-only-supports-openssl-1-1-1-currently-the-ssl-modu

