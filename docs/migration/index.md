---
alias: index-latest-migration-guide
title: 'Arcana Auth SDK v1.0.3 -> v1.0.4 Migration'
description: 'How to migrate to Arcana Auth Web SDK v1.0.4'
arcana:
  root_rel_path: ..
---

# Arcana Auth SDK v1.0.3 -> v1.0.4 Migration

This guide is meant for developers who have already integrated apps with an older version of the {{config.extra.arcana.sdk_name}} and run them using {{config.extra.arcana.company_name}} Testnet. 

If you are new to Arcana Network, please visit [[auth-quick-start|{{config.extra.arcana.product_name}} Quick Start Guide]] to get started.

The following Web3 apps can simply install and upgrade to the latest v1.0.4 release with no breaking changes:  

* Vanilla HTML/CSS/JS Apps
* Simple React/NextJS Apps
* Wagmi / RainbowKit Apps

## What has Changed?

### Wagmi or RainbowKit Apps

Earlier, apps using `{{config.extra.arcana.wagmi_sdk_pkg_name}}` package v0.0.4 were **not** required to install the `{{config.extra.arcana.auth_sdk_pkg_name}}` package v1.0.3 but this has changed in the current release.

Now Wagmi / RainbowKit Apps need to install both the packages and then as part of integrating with the {{config.extra.arcana.product_name}} product, first create `AuthProvider` using the {{config.extra.arcana.app_address}}. Then use the `AuthProvider` to create the `ArcanaConnector`. For details, see how to onboard users in Web3 apps using [[integrate-wagmi-app| Wagmi]] or [[integrate-rainbow-app| RainbowKit]] wallet connectors.

### Chain Management

In this release, developers can configure chains displayed in the {{config.extra.arcana.wallet_name}} by using the {{config.extra.arcana.dashboard_name}}. Earlier, chains could only be programmatically managed via the `chainConfig` option of the `AuthProvider` but now they can also be managed using the dashboard. See [[dashboard-user-guide#configure-application| for details]]. 

### Transaction Summary View

When a blockchain transaction is triggered either by the app programmatically or via a wallet user action, a transaction notification pops up in the wallet context displaying the transaction summary along with the option to approve or reject the request. Only when the user clicks 'v' icon on the top right, the notification details are displayed. Earlier, the notification details were displayed by default.

## How to Migrate to v1.0.4?

For Wagmi or RainbowKit Apps, see how to onboard users in Web3 apps using [[integrate-wagmi-app| Wagmi]] or [[integrate-rainbow-app| RainbowKit]] wallet connectors. All the other apps can simply upgrade the {{config.extra.arcana.sdk_name}} from v1.0.3 to v1.0.4 and re-deploy it.  

## What's New?

<img src="/img/icon_new_light.png#only-light" alt="New icon" width="3%" /><img src="/img/icon_new_dark.png#only-dark" alt="New icon" width="3%" />

See [[index-latest-release-note|{{config.extra.arcana.product_name}} v1.0.4 release notes]] and [[state-of-the-arcana-auth|State of the {{config.extra.arcana.product_name}}]].
