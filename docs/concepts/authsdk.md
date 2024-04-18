---
alias: concept-authsdk
title: 'Arcana Auth SDK'
description: 'Arcana Auth SDK key features, kind of authentication supported for Web3 apps and the wallet operations can be accessed by app users.'
arcana:
  root_rel_path: ..
---

# {{config.extra.arcana.sdk_name}}

<img src="{{config.extra.arcana.img_dir}}/icons/i_an_authsdk_light.{{config.extra.arcana.img_png}}#only-light" width="50"/>
<img src="{{config.extra.arcana.img_dir}}/icons/i_an_authsdk_dark.{{config.extra.arcana.img_png}}#only-dark" width="50"/>


{{config.extra.arcana.sdk_name}} enables swift user onboarding in Web3 apps. It embeds an embedded, non-custodial Web3 wallet displayed in the app's context for secure blockchain transaction signing.

Developers start by [[register-app-auth|registering the app]] and [[index-configure-auth|configuring auth settings]] through the [{{config.extra.arcana.dashboard_name}}]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md). Each registered app gets a unique **{{config.extra.arcana.app_address}}** essential for integrating with the {{config.extra.arcana.sdk_name}}. 

<img src="{{config.extra.arcana.img_dir}}/diagrams/d_an_authsdk_light.{{config.extra.arcana.img_png}}#only-light" alt="{{config.extra.arcana.sdk_name}} Diagram" height="20%"/>
<img src="{{config.extra.arcana.img_dir}}/diagrams/d_an_authsdk_dark.{{config.extra.arcana.img_png}}#only-dark" alt="{{config.extra.arcana.sdk_name}} Diagram Dark" height="20%"/>

## Key Features

**User Authentication**

  * Developers customize user onboarding with Web2 login via authentication providers and passwordless access.
  * Developers can choose between plug-and-play or custom login UI for authentication.
  * Seamless user login without key management hassles.

**Web3 Wallet Operations**

  * Developers can customize the blockchain transaction signing experience for users with [[concept-wallet-visibility|{{config.extra.arcana.wallet_name}} visibility]] settings.
  * Authenticated users can securely sign transactions on [[web3-stack-chains|supported blockchain networks]]
  * Supports Web3 wallet operations and standard Ethereum JSON-RPC calls, including:
    - Configure and switch networks and accounts.
    - Sign blockchain transactions.
    - Send and receive tokens and NFTs.
    - Manage NFTs and preview NFT details using the wallet.

{% include "./text-snippets/auth_sdk_flavors.md" %}