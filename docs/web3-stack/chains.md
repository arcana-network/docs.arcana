---
alias: web3-stack-chains
title: 'Chains'
description: 'Chains supported in the Arcana Auth SDKs.'
arcana:
  root_rel_path: ..
---
  
# Chains

The {{config.extra.arcana.company_name}} SDKs support EVM as well as non-EVM compatible chains. Note that the chains supported for gasless transactions may be limited to a different, smaller set of chains.

### {{config.extra.arcana.sdk_name}}

The {{config.extra.arcana.sdk_name}} offer a built-in, embedded, non-custodial [{{config.extra.arcana.wallet_name}}]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md) to authenticated app users for signing blockchain transactions. The {{config.extra.arcana.wallet_name}} **supports all EVM-compatible blockchain networks** as well as select **non-EVM** chains.

By default, a *pre-configured list* of chains is enabled for the {{config.extra.arcana.wallet_name}}. App developers can add additional supported chains to this pre-configured list. Once the user authenticates, only the chains in the pre-configured list are displayed in the {{config.extra.arcana.wallet_name}} UI dropdown. Users can add other supported chains through the wallet UI and switch networks if required.

{% include "./text-snippets/wallet_supported_networks.md" %}

!!! an-tip "Updating default pre-configured list"

     To include a new EVM-compatible chain in {{config.extra.arcana.product_name}}'s default pre-configured list, {{config.extra.arcana.company_name}} collaborates strategically with the chain's team/community. While we can add any such chain, our approach aims to increase the {{config.extra.arcana.product_name}} adoption and maximize our reach and engagement within the chain's development community.

### {{config.extra.arcana.gasless_sdk_name}}

The {{config.extra.arcana.gasless_sdk_name}} is powered by Biconomy's gasless infrastructure. It supports the same blockchain networks as Biconomy. Refer to the {% include "./text-snippets/biconomy/gasless_supported_networks.md" %} for gasless transactions. 
 
!!! an-caution "Gasless Transactions"
 
      Note that the supported gasless networks may not be the same as the list of chains supported by the {{config.extra.arcana.wallet_name}} and the {{config.extra.arcana.sdk_name}}.