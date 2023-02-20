---
slug: /migration_to_beta_auth_0_3_0
id: idmigrationtobetaauth030
sidebar_custom_props:
  cardIcon: 📂
arcana:
  root_rel_path: ..
---

# Auth SDK v0.2.x -> v0.3.0 Migration

This guide is meant for developers who have already integrated apps with an older version of the Arcana Auth SDK and run them using Arcana Network Testnet. If you are new to Arcana Network, please visit [Quick Start Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_qs.md) to get started.

When you migrate from an older version of the Arcana Auth SDK to v0.3.0, there are some breaking changes. These changes are mostly related to deploying an app on the Arcana Testnet and the use of Arcana Storage SDK (no longer supported). There are no breaking changes in the Auth SDK usage related to user onboarding or blockchain transaction signing functions.  Also, the Arcana wallet has a revamped, better look in this release.

## What has Changed?

* This release **does not** contain Arcana Storage SDK. 

* Arcana Blockchain is no longer listed in the list of available blockchain networks in the Arcana wallet dropdown.

* Now you can use the Auth SDK and Arcana wallet on any supported EVM-compatible chain for user onboarding and signing of blockchain transactions.

* The blockchain transaction activity is no longer available in the form of a tab in the main Arcana wallet screen. You can see the activity listed in the newly added combined notification screen in the Arcana wallet.

### Developer Dashboard

* There were some breaking changes in the registered application database schema. If you were already using an older version of the Auth SDK, you need to re-register and configure your application again using the latest Arcana Developer Dashboard. The **App Address** assigned to you earlier will not work. You need to re-register and obtain a new one. Make sure you use the new **App Address** while integrating with the Auth SDK.

### Auth SDK

<img src="/img/icons/i_an_authsdk_light.png#only-light" alt="Auth SDK icon" width="50" />
<img src="/img/icons/i_an_authsdk_dark.png#only-dark" alt="Auth SDK icon" width="50" />

* There is no usage change in the Auth SDK in this release. 
* After re-registering your app, the dashboard will assign a new **App Address**. You need to use the new app address during integration with the Auth SDK.

## How to Migrate to v0.3.0

1. You need to re-register your app using the Arcana Developer Dashboard. This is required to obtain a fresh **App Address** and use that for integrating with the Auth SDK. The older **App Address** will **NOT WORK** with the latest v0.3.0 release. Follow the instructions in the [How to Configure App Guide]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) to re-register and configure your app.

2. If you were using the Arcana Storage SDK, it is no longer supported. You need to stop using Storage SDK in your app for the time being until we begin supporting Storage SDK in a future release.

3. You need to [re-integrate your app with the Auth SDK]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) by providing the new **App Address** after re-registering and configuring your application using the developer dashboard.

4. If you had enabled the **Arcana Testnet** blockchain network in Web3 wallet operations, you will need to remove this network altogether as it no longer exists.  The Arcana Network Testnet Blockchain Explorer too is no longer available.  Arcana Network smart contracts are deployed on Polygon now. In this release, Arcana wallet supports all EVM-compatible chains besides the default ones that show in the drop-down.  Use the [Wallet User Guide]({{page.meta.arcana.root_rel_path}}/howto/wallet_ui.md) and the [Wallet Developer Guide]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md) to add and switch networks using the wallet UI or programmatically.

5. The wallet activity tab on the wallet token asset tab is gone. A new 'notification' tab is added to the wallet screen. You can see the list of all activities in the [notification tab]({{page.meta.arcana.root_rel_path}}/howto/wallet_ui.md#wallet-notifications). It lists send tokens, contract deployment, and contract interaction transactions performed by the wallet user.

## What's New?

<img src="/img/icon_new_light.png#only-light" alt="New icon" width="50" /><img src="/img/icon_new_dark.png#only-dark" alt="New icon" width="50" />

The new improved Auth SDK now supports NFT preview, NFT transactions, and management of NFT collections. A new combined notification screen displays blockchain transactions related to smart contracts, tokens as well as NFTs. For details, see [Auth SDK release notes]({{page.meta.arcana.root_rel_path}}/relnotes/rn_beta_auth_v0.3.0.md).
