---
alias: migration-guide-vOct12-23-gasless
title: 'Arcana Auth SDK v1.0.8 -> vOct12-23-gasless Migration'
description: 'How to migrate to Arcana Auth Web SDK vOct12-23-gasless'
arcana:
  root_rel_path: ..
---

# Migrating to v{{config.extra.arcana.date_release_tag}}

This guide is meant for developers who have already integrated apps with v{{config.extra.arcana.latest_version}} of the {{config.extra.arcana.sdk_name}} and deploy them using {{config.extra.arcana.company_name}} Testnet or Mainnet.

If you are new to Arcana Network, please visit [[auth-quick-start|{{config.extra.arcana.product_name}} Quick Start Guide]] to get started.

## Backward Compatibility

The latest release of the {{config.extra.arcana.product_name}} product does NOT require any upgrades to the {{config.extra.arcana.sdk_name}} v{{config.extra.arcana.latest_version}}.

### Same Wallet Address

Apps using {{config.extra.arcana.product_name}} v{{config.extra.arcana.latest_version}} should see **no change** in the user wallet address irrespective of whether they continue to use the previous version on the upgrade to the latest product release v{{config.extra.arcana.date_release_tag}}. This is true for all types of apps and supported frameworks, including those using global or app-specific keys.

## New Release: What has Changed?

There is no change in the {{config.extra.arcana.sdk_name}} usage or functionality, and no need to upgrade the SDK or change any integration code.

With the latest release, developers can now choose to use the gasless feature or not. There is no usage change if gasless feature is not used.

**Gasless Feature** 

Gasless enabled apps will not require users to pay any gas fees for any of the whitelisted blockchain operations. Besides zero gas fees, the app users will see a change in their wallet address when gasless is enabled for an app.

Earlier, there was only a single EoA wallet address associated with each authenticated app user. Apps with gasless feature will require to configure gas tank for one or more blockchain networks. For such apps the app user account will be associated with two types of wallet addresses: an EoA address and a SCW address. By default, all gasless transactions happen via the SCW account. Users can switch between EoA and SCW accounts using the wallet UI. For details, see [[rn-main-auth-v{{config.extra.arcana.date_release_tag}}|{{config.extra.arcana.product_name}} v{{config.extra.arcana.date_release_tag}} release notes]].

## How to Migrate to v{{config.extra.arcana.date_release_tag}}?

Apps using older versions of the {{config.extra.arcana.sdk_name}} prior to v{{config.extra.arcana.latest_version}} must refer to the [[index-migration-guides|migration guides]] and upgrade to the latest release.

Apps using v{{config.extra.arcana.latest_version}} **do not need to upgrade** the {{config.extra.arcana.sdk_name}}. There is no change required if apps do not wish to use the gasless feature. Apps that need to enable the [[concept-gasless-transactions|gasless transactions]] must follow these steps:

1. Use the {{config.extra.arcana.dashboard_name}} to:
    * [[configure-gasless|Configure Gas Tanks]] on one or more supported blockchain networks.
    * Add sufficient funds to the gas tank.
    * Whitelist contract functions - only whitelisted operations are gasless, others need to pay gas fees.
2. Gasless does not require any changes in the integration code or {{config.extra.arcana.app_address}}. 
3. Gasless does not require app redeployment.
4. Make sure before issuing the gasless blockchain operations in the app, the blockchain network is same as the one on which gas tank is set up. Also, make sure the SCW wallet address is used for the blockchain transaction. There are two addresses associated with the [[concept-gasless-transactions#gasless-user-accounts|gasless user accounts]] - EoA and SCW. Only SCW transactions qualify as gasless. See [[faq-gasless|gasless FAQ for more usage insights.]]

## Release Details

See [[rn-main-auth-v{{config.extra.arcana.date_release_tag}}|{{config.extra.arcana.product_name}} v{{config.extra.arcana.date_release_tag}} release notes]] and [[state-of-the-arcana-auth|State of the {{config.extra.arcana.product_name}}]].
