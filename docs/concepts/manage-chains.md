---
alias: concept-manage-chains
title: 'Manage Chains'
description: 'Learn how developers can control which blockchains are displayed in the Arcana wallet dropdown list and which one is the default chain.'
arcana:
  root_rel_path: ..
---

# Manage Chains

The {{config.extra.arcana.product_name}} product supports all EVM-compatible blockchain networks. By default, the {{config.extra.arcana.sdk_name}} comes pre-configured with a set of EVM-compatible chains. These blockchain networks are displayed in the {{config.extra.arcana.wallet_name}} UI once a user logs in the app.

See [[web3-stack-chains|supported blockchain networks]] for the current list.

App developers can use the chain management feature and add other EVM-compatible chains to this default, pre-configured set. They can also specify a different active chain in the wallet once the user logs in. App users have limited chain management capabilities. 

There are multiple ways to add and automatically switch to newer chains:

**Developers**

1. **Configure Blockchain Networks**: Use the {{config.extra.arcana.dashboard_name}} and add newer EVM-compatible chains via the 'Chain Management' configuration section. The newly added chain becomes the active chain by default. Developers can select another chain from the pre-configured list in the dashboard and make it as the active chain. The active chain is displayed in the wallet UI once the user logs in. You can also specify custom RPC URLs for the newly added chains.

2. **`chainConfig` parameter**: During app integration, use the `chainConfig` input parameter of the `AuthProvider` constructor to specify the active chain and a different RPC url (optional). 

    !!! an-note "`chainConfig` setting"
    
          The `chainConfig` value overrides the active chain configuration setting specified in the dashboard if the chain corresponding to the value is present in the pre-configured list. If not, the dashboard setting is used to show the 'active' chain in the user's wallet.

3. **`wallet_addEthereumChain`**: Use `wallet_addEthereumChain` [EIP-3085 RPC method](https://eips.ethereum.org/EIPS/eip-3085) supported by the {{config.extra.arcana.wallet_name}} to add newer EVM-compatible blockchain networks to the pre-configured list.

4. **Testnet/Mainnet Chain Type**: Use the dashboard to choose whether the newly added chain is a Testnet or Mainnet type blockchain network.

**App Users**

1. Use the {{config.extra.arcana.wallet_name}} UI to add a new blockchain network. The newly added network becomes the 'active' network in the wallet.

2. Use the {{config.extra.arcana.wallet_name}} UI dropdown to select a different chain as the 'active' network.

!!! an-caution "User Settings: Not Persistent"

      Note that any chain addition or changes to the 'active' chain selection made by the app users don't persist across user login sessions.  Only the chain management configurations specified by the developers persist across user logins.

<figure markdown="span">
  <img src="{{config.extra.arcana.img_dir}}/diagrams/d_concept_manage_chains.{{config.extra.arcana.img_png}}#only-light" alt="Manage Chains" class="an-screenshots width_85pc"/>
  <img src="{{config.extra.arcana.img_dir}}/diagrams/d_concept_manage_chains.{{config.extra.arcana.img_png}}#only-dark" alt="Manage Chains" class="an-screenshots width_85pc"/>
  <figcaption>Manage Chains</figcaption>
</figure>

Once configured and the app is deployed, developers can reconfigure the list of chains displayed in the wallet UI. 

{% include "./text-snippets/specify_default_chain_example.md" %}

!!! an-caution "Switching Chains"

      **EVM-compatible Chains**: 
      
      In most cases, switching the 'active' chain displayed in the wallet won't affect the user's wallet address. However, if users log into a blockchain network that is not EVM-compatible but supported by {{config.extra.arcana.product_name}}, a new set of keys is assigned for such chains and the user will see a different wallet address as compared to the EVM-compatible chain.

      **Global/App-specific Keys**

      If an app is configured to use 'Global Keys', then the user will see the same wallet address across all the apps in the {{config.extra.arcana.company_name}} ecosystem. This is true for all the EVM-compatible chains. Otherwise, the user's wallet address will vary across apps for blochains that are not EVM-compatible. 
      
      In the case of 'app-specific' keys (default), the user will be assigned a new set of keys for each app in the {{config.extra.arcana.company_name}} ecosystem. Hence, the user will see a new wallet address across different apps after login. This is true irrespective of the blockchain network type - whether it is EVM-compatible or not.

## 