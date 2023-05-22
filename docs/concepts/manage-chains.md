---
alias: concept-manage-chains
title: 'Manage Chains'
description: 'Learn how developers can control which blockchains are displayed in the Arcana wallet dropdown list and which one is the default chain.'
arcana:
  root_rel_path: ..
---

# Manage Chains

The chain management feature of the {{config.extra.arcana.sdk_name}} allows developers to control which subset of supported blockchain networks should be displayed by default in the {{config.extra.arcana.wallet_name}} once an app user authenticates.  The developers can configure chains using the {{config.extra.arcana.dashboard_name}} and specify the following details:

* List of blockchains that should be displayed in the dropdown list out of the box.
* The default blockchain that shows up in the wallet UI.
* The custom RPC URLs for the configured chains.
* Specify whether a configured chain represents a Testnet or Mainnet.
* Once configured, developers will have a choice to reconfigure the list of chains displayed in the wallet UI.

<img src="/img/diagrams/d_concept_manage_chains.png#only-light" width="80%" height="80%"/>
<img src="/img/diagrams/d_concept_manage_chains.png#only-dark" width="80%" height="80%"/>

The chain management feature is currently supported for EVM-compatible chains. Also, besides configuring these chains via the dashboard, the developers can programmatically add any new supported EVM-compatible chain using the `wallet_addEthereumChain` method supported by the {{config.extra.arcana.wallet_name}}.

!!! caution "Changing Chains"

      If you change the chain list displayed in the wallet for EVM-compatible chains, it won't affect your wallet address. However, if you log into a chain that is not EVM-compatible but supported by {{config.extra.arcana.product_name}}, you will be assigned a new set of keys for that specific chain.

      If an app uses the 'Global Keys' feature, then the user has the same wallet address across all the apps in the {{config.extra.arcana.company_name}} ecosystem for all the EVM-compatible chains. In case of 'app-specific' keys (default), the user will be assigned a new wallet address for every app that a user logs into irrespective of the blockchain type - whether it is EVM-compatible or not.
