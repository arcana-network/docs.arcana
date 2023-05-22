---
alias: migration-guide-v0.3.0
title: 'Arcana Auth Web SDK Migration Guide v0.3.0'
description: 'Instructions on how to migrate a Web3 app to Arcana Auth Web SDK v0.3.0?'
arcana:
  root_rel_path: ..
---

# Arcana Auth SDK v0.2.x -> v0.3.0 Migration

This guide is meant for developers who have already integrated apps with an older version of the Arcana Auth SDK and run them using Arcana Network Testnet. If you are new to Arcana Network, please visit [[auth-quick-start|{{config.extra.arcana.product_name}} Quick Start Guide]] to get started.

When you migrate from an older version of the {{config.extra.arcana.sdk_name}} to v0.3.0, there are some breaking changes. These changes are mostly related to deploying an app on the {{config.extra.arcana.company_name}} Testnet and the use of {{config.extra.arcana.company_name}} Storage SDK (no longer supported). There are no breaking changes in the {{config.extra.arcana.sdk_name}}  usage related to user onboarding or blockchain transaction signing functions.  Also, the Arcana wallet has a revamped, better look in this release.

## What has Changed?

* This release **does not** contain {{config.extra.arcana.company_name}} Storage SDK. 

* Arcana Blockchain is no longer listed in the list of available blockchain networks in the Arcana wallet dropdown.

* Now you can use the {{config.extra.arcana.sdk_name}} and the {{config.extra.arcana.wallet_name}} on any supported EVM-compatible chain for user onboarding and signing of blockchain transactions.

* The blockchain transaction activity is no longer available in the form of a tab in the main {{config.extra.arcana.wallet_name}}. You can see the activity listed in the newly added combined notification screen in the {{config.extra.arcana.wallet_name}} .

### {{config.extra.arcana.dashboard_name}} 

* There were some breaking changes in the registered application database schema. If you were already using an older version of the {{config.extra.arcana.sdk_name}}, you need to re-register and configure your application again using the latest {{config.extra.arcana.dashboard_name}}. The **{{config.extra.arcana.app_address}}** assigned to you earlier will not work. You need to re-register and obtain a new one. Make sure you use the new **{{config.extra.arcana.app_address}}** while integrating with the {{config.extra.arcana.sdk_name}} .

### {{config.extra.arcana.sdk_name}} 

<img src="/img/icons/i_an_authsdk_light.png#only-light" alt="Auth SDK icon" width="50" />
<img src="/img/icons/i_an_authsdk_dark.png#only-dark" alt="Auth SDK icon" width="50" />

* There is no usage change in the {{config.extra.arcana.sdk_name}} in this release. 
* After re-registering your app, the dashboard will assign a new **{{config.extra.arcana.app_address}}**. You need to use the new {{config.extra.arcana.app_address}} during integration with the {{config.extra.arcana.sdk_name}}.

## How to Migrate to v0.3.0

1. You need to re-register your app using the {{config.extra.arcana.dashboard_name}}. This is required to obtain a fresh **{{config.extra.arcana.app_address}}** and use that for integrating with the {{config.extra.arcana.sdk_name}}. The older **{{config.extra.arcana.app_address}}** will **NOT WORK** with the latest {{config.extra.arcana.sdk_name}} v0.3.0 release. Follow the instructions in the [[configure-auth|How to Configure App Guide]] to re-register and configure your app.

2. If you were using the {{config.extra.arcana.company_name}} Storage SDK, that is no longer supported. You need to stop using Storage SDK in your app for the time being until we begin supporting Storage SDK in a future release.

3. You need to [[index-integrate-app|re-integrate your app with the {{config.extra.arcana.sdk_name}}]] by providing the new **{{config.extra.arcana.app_address}}** after re-registering and configuring your application using the developer dashboard.

4. If you had enabled the **{{config.extra.arcana.company_name}}  Testnet** blockchain network in Web3 wallet operations, you will need to remove this network altogether as it no longer exists.  Also, the {{config.extra.arcana.company_name}} Testnet Blockchain Explorer is no longer available.  {{config.extra.arcana.company_name}}  smart contracts are deployed on Polygon now. In this release, the {{config.extra.arcana.wallet_name}} supports all EVM-compatible chains besides the default ones that show in the drop-down.  Use the [[arcana-wallet-user-guide|Wallet User Guide]] and the [[index-arcana-wallet|Wallet Developer Guide]] to add and switch networks using the wallet UI or programmatically.

5. The wallet activity tab on the wallet token asset tab is gone. A new 'notification' tab is available in the wallet. You can see the list of all activities in the [[arcana-wallet-user-guide#wallet-notifications|notification tab]]. It lists send tokens, contract deployment, and contract interaction transactions performed by the wallet user.

## What's New?

<img src="/img/icon_new_light.png#only-light" alt="New icon" width="50" /><img src="/img/icon_new_dark.png#only-dark" alt="New icon" width="50" />

The new improved {{config.extra.arcana.product_name}} now supports NFT preview, NFT transactions, and management of NFT collections. A new combined notification screen displays blockchain transactions related to smart contracts, tokens as well as NFTs. For details, see [[rn-beta-auth-v0.3.0|{{config.extra.arcana.product_name}} release notes]].
