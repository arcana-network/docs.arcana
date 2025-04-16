---
alias: ca-stack
title: 'Supported Apps, Tokens and Chains'
description: 'List different apps, tokens and chains supported through the Arcana Chain Abstraction feature.'
arcana:
  root_rel_path: ..
---

# Chain Abstraction Scope

[[concept-ca|Chain abstraction]] helps to solve liquidity fragmentation in Web3 and enables [[concept-unified-balance|unified balance]] of assets across chains. The {{config.extra.arcana.company_name}} [[ca-sdk-installation|chain abstraction SDKs]] help Web3 dApps to enable unified balance for app users and let them spend on any chain. Users can sign transactions using any third-party browser-based wallet.

{% include "./text-snippets/warn_ca_mainnet_only.md" %}

!!! an-caution "Supported Chains & Tokens"

    Note that the list of supported chains and tokens for the unified balance feature **may vary** across the {{config.extra.arcana.company_name}} chain abstraction offerings:
    
    * SDKs: {{config.extra.arcana.ca_sdk_name}}, {{config.extra.arcana.ca_wagmi_sdk_name}}
    * {{config.extra.arcana.company_name}} CA wallet.

## {{config.extra.arcana.ca_sdk_name}}

**Any Web3 app** can integrate with the {{config.extra.arcana.ca_sdk_name}} to enable unified balance for users while deploying any third-party browser-based wallet to sign blockchain transactions.

The {{config.extra.arcana.ca_sdk_name}} supports unified balance feature across the following chains and tokens:

### Tokens

{% include "./text-snippets/ca_supported_tokens.md" %}

### Chains

{% include "./text-snippets/ca_supported_chains.md" %}

## {{config.extra.arcana.company_name}} CA Wallet

Web3 wallet users can install the [standalone {{config.extra.arcana.company_name}} CA Wallet]({{config.extra.arcana.ca_wallet_download_url}}) browser extension. This enables unified balance support for the following apps:

### Tokens

{% include "./text-snippets/ca_supported_tokens.md" %}

### Chains
      
{% include "./text-snippets/ca_wallet_supported_chains.md" %}

### Apps

{% include "./text-snippets/ca_wallet_supported_apps.md" %}