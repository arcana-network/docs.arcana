---
slug: /conceptauthsdk
id: idconceptauthsdk
title: Auth SDK
sidebar_custom_props:
  cardIcon: 💠
arcana:
  root_rel_path: ..
---

# Auth SDK

<img src="/img/icons/i_an_authsdk_light.png#only-light" width="50"/>
<img src="/img/icons/i_an_authsdk_dark.png#only-dark" width="50"/>


The Arcana Auth SDK integrates with Web3 applications and allows them to quickly onboard users. It offers an embedded, non-custodial Web3 wallet that enables authenticated users to sign blockchain transactions on any EVM-compatible network. 

Developers must first use the [Arcana Developer Dashboard]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md) and [register, configure]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) their application. Each registered application is assigned a unique **App Address** required for integrating with the Auth SDK. 

<img src="/img/diagrams/d_an_authsdk_light.png#only-light" alt="Auth SDK Diagram" height="20%"/>
<img src="/img/diagrams/d_an_authsdk_dark.png#only-dark" alt="Auth SDK Diagram Dark" height="20%"/>

## Key Features

**User Authentication**

  * Developers can configure user onboarding options and allow users to log in easily with a familiar Web2 experience of social authentication and passwordless login
  * Users can easily onboard Web3 dApps without having to manage keys and secrets 
  * Developers have a choice to enable plug-and-play authentication in the application with a single line of code or build customized UI that calls social and passwordless login functions of the Auth SDK

**Web3 Wallet**

  * Developers can configure and manage blockchain transaction signing experience for users by using [Arcana wallet visibility modes]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/walletuimodes.md)
  * Authenticated users can securely sign blockchain transactions for EVM-compatible networks
  * Supports Web3 wallet operations and the standard Ethereum JSON-RPC calls
        
    - configure and switch networks and accounts
    - sign blockchain transactions
    - send and receive tokens, NFTs
    - manage NFTs and preview NFT details using the wallet
