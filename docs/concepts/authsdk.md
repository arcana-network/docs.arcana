---
slug: /conceptauthsdk
id: idconceptauthsdk
sidebar_custom_props:
  cardIcon: 💠
arcana:
  root_rel_path: ..
---

# {{config.extra.arcana.sdk_name}}

<img src="/img/icons/i_an_authsdk_light.png#only-light" width="50"/>
<img src="/img/icons/i_an_authsdk_dark.png#only-dark" width="50"/>


The {{config.extra.arcana.sdk_name}} integrates with Web3 apps and allows them to quickly onboard users. It offers an embedded, non-custodial Web3 wallet that enables authenticated users to sign blockchain transactions on any supported blockchain network. 

Developers must first use the [{{config.extra.arcana.dashboard_name}}]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md) and [register, configure apps]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md). Each registered app is assigned a unique **{{config.extra.arcana.app_address}}**. This is used for integrating the app with the {{config.extra.arcana.sdk_name}}. 

<img src="/img/diagrams/d_an_authsdk_light.png#only-light" alt="{{config.extra.arcana.sdk_name}} Diagram" height="20%"/>
<img src="/img/diagrams/d_an_authsdk_dark.png#only-dark" alt="{{config.extra.arcana.sdk_name}} Diagram Dark" height="20%"/>

## Key Features

**User Authentication**

  * Developers can configure user onboarding options and allow users to log in easily with a familiar Web2-like login experience via authentication providers and passwordless login
  * Users can easily onboard Web3 apps without having to manage keys and secrets 
  * Developers have a choice to enable plug-and-play authentication in the application with a single line of code or build customized UI that calls social and passwordless login functions of the {{config.extra.arcana.sdk_name}}

**Web3 Wallet Operations**

  * Developers can configure and manage blockchain transaction signing experience for users by using [{{config.extra.arcana.wakket_name}}visibility modes]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/walletuimodes.md)
  * Authenticated users can securely sign blockchain transactions on any [supported blockchain network]({{page.meta.arcana.root_rel_path}}/state_of_the_ntwk.md#supported-blockchains)
  * Supports Web3 wallet operations and the standard Ethereum JSON-RPC calls
        
    - configure and switch networks and accounts
    - sign blockchain transactions
    - send and receive tokens, NFTs
    - manage NFTs and preview NFT details using the wallet
