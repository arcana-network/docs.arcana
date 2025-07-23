---
alias: ca-stack
title: 'Supported Chains and Tokens (SDK)'
description: 'List different apps, tokens and chains supported through the Arcana Chain Abstraction feature.'
arcana:
  root_rel_path: ..
---

# Supported Chains and Tokens

The {{config.extra.arcana.ca_sdk_name}} supports [[concept-unified-balance|unified balance]] and [[concept-ca|chain-abstracted transactions]] for the chains and tokens^*^ listed below. 

To execute a chain-abstracted transaction, you need enough unified balance of the token type on the source chain. This balance must cover both the gas fee and the transaction amount on the destination chain.

^*^ *Every chain may not support all tokens. The list of supported chains and tokens may differ for the Coral and the Folly testnet. The chains supported by the SDK and those supported in the standalone, CA wallet used in the demos may not always be the same.*

## Chains and Tokens

{% include "./text-snippets/ca_token_qualifier.md" %}

{% include "./text-snippets/ca/generated_chainlist.md" %}