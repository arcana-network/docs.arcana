---
alias: migration-guide-v1.0.9-rc.1
title: 'Arcana Auth SDK vOct12-23-gasless -> v1.0.9 Migration'
description: 'How to migrate to Arcana Auth Web SDK v1.0.9'
arcana:
  root_rel_path: ..
---

# Arcana Auth SDK v{{config.extra.arcana.previous_version}} -> v1.0.9-rc.1 Migration

This guide is meant for developers who have already integrated apps with v{{config.extra.arcana.previous_version}} release of the {{config.extra.arcana.sdk_name}} and deploy them using {{config.extra.arcana.company_name}} Testnet or Mainnet.

If you are new to Arcana Network, please visit [[auth-quick-start|{{config.extra.arcana.product_name}} Quick Start Guide]] to get started.

## Backward Compatibility

The latest release of the {{config.extra.arcana.product_name}} product does not cause any breaking changes for apps that have already integrated with v{{config.extra.arcana.previous_version}} of the {{config.extra.arcana.sdk_name}}. Simply install the latest version and upgrade your app.

### Same Wallet Address

Apps using {{config.extra.arcana.sdk_name}} v{{config.extra.arcana.previous_version}} should see **no change** in the user wallet address irrespective of whether they continue to use the older version on the upgrade to the latest release. This is true for all types of apps and supported frameworks, irrespective of whether they are using the global or app-specific keys. Apps deployed earlier will continue to work on the Arcana Testnet and Mainnet. 

## What has Changed?

This is a major release of the {{config.extra.arcana.product_name}} product since the last release that included support for gasless transactions.  The updates include:

* {{config.extra.arcana.sdk_name}}
  - Global Keys feature does not require setting up social logins via the social provider's console
  - Enhanced security to block clickjacking
  - New API `_arcana_getPublicKey`

* New {{config.extra.arcana.auth_core_sdk_pkg_name}} SDK allows greater customization flexibility with custom Wallet UI

For details, see [[rn-main-auth-v1.0.9-rc.1|{{config.extra.arcana.product_name}} v1.0.9-rc.1 release notes]].

## How to Migrate to v1.0.9-rc.1?

We highly recommend that Web3 apps that are integrated with v{{config.extra.arcana.previous_version}} of the product migrate to the latest {{config.extra.arcana.sdk_name}} v1.0.9-rc.1 release.

Install the latest {{config.extra.arcana.sdk_name}} v1.0.9-rc.1 and upgrade your app. No other integration code changes are required.

Apps using older versions of the {{config.extra.arcana.sdk_name}} must refer to the [[index-migration-guides|migration guides]] and upgrade to the latest release if they wish to enable Steam of Firebase user onboarding.

### Global Keys

There are no usage changes for applications that use app-specific keys (default).

If the app developer selects [[concept-keyspace-type| global keys]] while configuring the app via the {{config.extra.arcana.dashboard_name}}, the social auth settings for enabling the social login providers are **no longer** required**.

## What's New?

<img src="/img/icon_new_light.png#only-light" alt="New icon" width="3%" /><img src="/img/icon_new_dark.png#only-dark" alt="New icon" width="3%" />

See [[rn-main-auth-v1.0.9-rc.1|{{config.extra.arcana.product_name}} v1.0.9-rc.1 release notes]] and [[state-of-the-arcana-auth|State of the {{config.extra.arcana.product_name}}]].
