---
alias: ca-stack-wallet
title: 'Supported Apps, Chains and Tokens (CA Wallet)'
description: 'List different apps, tokens and chains supported through the Arcana Chain Abstraction feature.'
arcana:
  root_rel_path: ..
---

# Supported Apps, Chains and Tokens

The standalone {{config.extra.arcana.company_name}} CA wallet used to demonstrate [[concept-unified-balance|unified balance]] and [[concept-ca|chain-abstracted transactions]]. It supports a limited set of chains and tokens^*^ in the context of supported apps listed below.

To execute a chain-abstracted transaction, you need enough unified balance of the token type on the source chain. This balance must cover both the gas fee and the transaction amount on the destination chain.

To try unified balance and chain abstracted transactions, connect the [standalone {{config.extra.arcana.company_name}} CA Wallet]({{config.extra.arcana.ca_wallet_download_url}}) with any of the supported apps. 

^*^ *Every chain may not support all tokens. The list of supported chains and tokens may differ for the Coral and the Folly testnet. The chains supported by the SDK and those supported in the standalone, CA wallet used in the demos may not always be the same.*

## Apps

{% include "./text-snippets/ca_wallet_supported_apps.md" %}

## Chains and Tokens

{% include "./text-snippets/ca_token_qualifier.md" %}

{% include "./text-snippets/ca/generated_chainlist.md" %}