---
title: 'Arcana wallet blockchain network switching behavior'
description: 'Arcana wallet setting for wallet visibility controls blockchain network switching behavior.'
arcana:
  root_rel_path: ../..
---

# Switching Networks

[{{config.extra.arcana.sdk_name}}]({{page.meta.arcana.root_rel_path}}/concepts/authsdk.md) provides user authentication and blockchain signing functionality via the embedded, non-custodial Web3 wallet - the **{{config.extra.arcana.wallet_name}}**. 

Web3 apps integrating with the {{config.extra.arcana.sdk_name}} can easily enable the [{{config.extra.arcana.wallet_name}} wallet]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md) in the context of the application and allow authenticated users to use the wallet for adding, configuring any supported blockchain networks, or switching networks.

There are two ways in which the network that is displayed in the wallet UI can be switched. An authenticated user can switch to a different network via the wallet UI by selecting one from the dropdown list. Application developers too can programmatically add and switch to a preferred network such that all authenticated app users will see this developer-configured network when they authenticate and access their respective wallets.

## Network Switching Behavior

The `alwaysVisible` [input parameter](https://authsdk-ref-guide.netlify.app/interfaces/constructorparams) configured by the application developer at the time of instantiating the `AuthProvider`, controls the wallet user experience with switching networks.


### Network Switching: `alwaysVisible=true`

By default, `alwaysVisible=true`. If the app developer uses this default setting then the wallet UI shows up right after a user authenticates. The wallet can be minimized by clicking on the 'x' icon in the top right of the wallet screen but the wallet is always visible in the app's context. To switch the network displayed in the wallet UI, a user can simply click on the drop-down list and select an entry from the list to change the network. The app developer can programmatically use [[web-auth-usage-guide#switching-chains | `wallet_addEthereumChain`]] and [[web-auth-usage-guide#switching-chains | `wallet_switchEthereumChain`]] methods to add and switch to a supported blockchain network preferred by the app. When a network addition or switching is initiated by the app developer, it requires the user's approval before the network switch takes effect.

### Network Switching:`alwaysVisible=false`

If the developer has opted for `alwaysVisible=false` while integrating the app with the {{config.extra.arcana.sdk_name}}, then the wallet UI does not show up automatically after a user logs in. It is displayed only if a blockchain transaction is triggered that requires the user's approval. Once the user approves the transaction, the wallet UI disappears. There is no way for an authenticated user to add, configure or switch the network using the wallet UI. Only the developer can programmatically add and switch the network by using the [[web-auth-usage-guide#switching-chains | `wallet_addEthereumChain`]] and [[web-auth-usage-guide#switching-chains | `wallet_switchEthereumChain`]] methods. When a network addition or switching is initiated by the app developer, it requires the user's approval before the network switch takes effect.

{% include "./text-snippets/add_wallet_config_warning.md" %}
