---
alias: latest-migration-guide
title: 'Arcana Auth SDK v1.0.3 -> v1.0.4 Migration'
description: 'How to migrate to Arcana Auth Web SDK v1.0.4'
arcana:
  root_rel_path: ..
---

# Arcana Auth SDK v1.0.3 -> v1.0.4 Migration

This guide is meant for developers who have already integrated apps with an older version of the {{config.extra.arcana.sdk_name}} and run them using {{config.extra.arcana.company_name}} Testnet. 

If you are new to Arcana Network, please visit [[auth-quick-start|{{config.extra.arcana.product_name}} Quick Start Guide]] to get started.


## Backwards Compatibility

The latest release of the {{config.extra.arcana.product_name}} product does not cause any breaking changes for Web3 apps that may have integrated with {{config.extra.arcana.sdk_name}} v1.0.3 and should continue to work with no changes to the app code. The only update required is to use the {{config.extra.arcana.dashboard_name}} and make that the chain specified in the `chainConfig` option in the `AuthProvider` exists or is manually added via the [[dashboard-user-guide#configure-application|chain management configuration settings]] in the dashboard. 

There should be **no change** in the user wallet address for all types of supported apps using the global or app-specific keys and they should continue to work on the Arcana Testnet and Mainnet.

We highly recommend that developers migrate their apps to the latest {{config.extra.arcana.sdk_name}} v1.0.4 and it does not require any code changes if your apps are vanilla HTML/CSS/JS apps or simple React apps. Just install and upgrade to the latest v1.0.4 release with no code changes and re-deploy your app.

If your app uses Wagmi or RainbowKit connectors, you may need to additionally install the `{{config.extra.arcana.auth_sdk_pkg_name}}` package and update the integration code before redeploying your app. See the next section for details.

## What has Changed?

### Wagmi or RainbowKit Apps

Earlier, apps using `{{config.extra.arcana.wagmi_sdk_pkg_name}}` package v0.0.4 were **not** required to install the `{{config.extra.arcana.auth_sdk_pkg_name}}` package v1.0.3 but this has changed in the current release.

Now Wagmi / RainbowKit Apps need to install both the packages and then as part of integrating with the {{config.extra.arcana.product_name}} product, first create `AuthProvider` using the {{config.extra.arcana.app_address}}. Then use the `AuthProvider` to create the `ArcanaConnector`. For details, see how to onboard users in Web3 apps using [[integrate-wagmi-app| Wagmi]] or [[integrate-rainbow-app| RainbowKit]] wallet connectors.

### Chain Management

In this release, developers can configure chains displayed in the {{config.extra.arcana.wallet_name}} dropdown list and set the default by using the {{config.extra.arcana.dashboard_name}}. Earlier, chains could only be programmatically managed via the add/switch chain functions and the default chain setting was done via the `chainConfig` option of the `AuthProvider`. Now they can also be managed using the dashboard. See [[dashboard-user-guide#configure-application| for details]]. 

It is possible to use both dashboard chain management configuration and specify a default chain and then override it programmatically using the `chainConfig` parameter. Note that developers can override the dashboard default chain configuration settings with `chainConfig` **only if** the chain listed in the `chainConfig` is also listed as one of the chains configured through the dashboard. If the chain is not listed then only the default chain configured in the dashboard setting is displayed in the wallet. The rest of the dashboard configured ones show in the dropdown list.

??? Example "Chain Configuration"

      **Example I**
      
      Dashboard setting for App A:  `Polygon, Ethereum, Shardeum, Arbitrum (default selection)`

      `chainConfig` option in the `AuthProvider`: `Shardeum`

      In this case, the {{config.extra.arcana.wallet_name}} UI will display `Shardeum` as the default and other chains in the dropdown list as Polygon, Ethereum, and Arbitrum. 

      **Example II**

      Dashboard setting for App A:  `Polygon, Ethereum, Shardeum, Arbitrum (default selection)`

      `chainConfig` option in the `AuthProvider`: `Avalanche`

      In this case, the {{config.extra.arcana.wallet_name}} UI will display `Arbitrum` as the default and other chains in the dropdown list as Polygon, Ethereum, and Shardeum. 


### Transaction Summary View

When a blockchain transaction is triggered either by the app programmatically or via a wallet user action, a transaction notification pops up in the wallet context displaying the transaction summary along with the option to approve or reject the request. Only when the user clicks 'v' icon on the top right, the notification details are displayed. Earlier, the notification details were displayed by default.

## How to Migrate to v1.0.4?

For Wagmi or RainbowKit Apps, see how to onboard users in Web3 apps using [[integrate-wagmi-app| Wagmi]] or [[integrate-rainbow-app| RainbowKit]] wallet connectors. All the other apps can simply upgrade the {{config.extra.arcana.sdk_name}} from v1.0.3 to v1.0.4 and re-deploy it.  

## What's New?

<img src="/img/icon_new_light.png#only-light" alt="New icon" width="3%" /><img src="/img/icon_new_dark.png#only-dark" alt="New icon" width="3%" />

See [[rn-main-auth-v1.0.4|{{config.extra.arcana.product_name}} v1.0.4 release notes]] and [[state-of-the-arcana-auth|State of the {{config.extra.arcana.product_name}}]].
