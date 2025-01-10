---
alias: migration-guide-v1.0.9
title: 'Arcana Auth SDK v1.0.8 -> v1.0.9 Migration'
description: 'How to migrate to Arcana Auth Web SDK v1.0.9'
arcana:
  root_rel_path: ..
---

# Arcana Auth SDK v1.0.8 -> v1.0.9 Migration

New to Arcana Network? see {{config.extra.arcana.product_name}} Quick Start Guides to get started. 

Using an older version and want to migrate? Read on...

## What has Changed?

This is a major release of the {{config.extra.arcana.product_name}} product since the last release.  The updates include:

* {{config.extra.arcana.sdk_name}}
  - Global Keys feature does not require setting up social logins via the social provider's console
  - Enhanced security to block clickjacking

* New {{config.extra.arcana.auth_core_sdk_pkg_name}} SDK allows greater customization flexibility with custom Wallet UI

### Global Keys

There are no usage changes for applications that use **app-specific** keys (default).

If the app developer selects [[concept-keyspace-type| global keys]] while configuring the app via the {{config.extra.arcana.dashboard_name}}, the social auth settings for enabling the social login providers are **no longer** required.

For details, see [[rn-main-auth-v1.0.9|{{config.extra.arcana.product_name}} v1.0.9 release notes]].

## Backward Compatibility

The latest release of the {{config.extra.arcana.product_name}} product does not cause any breaking changes for apps integrated with v{{config.extra.arcana.previous_version}} of the {{config.extra.arcana.sdk_name}}. Simply install the latest version and upgrade. 

Apps using older versions of the {{config.extra.arcana.sdk_name}} must refer to the [[index-migration-guides|migration guides]] and upgrade to the latest release if they wish to enable Steam of Firebase user onboarding.

### Same Wallet Address

Apps migrating to the {{config.extra.arcana.sdk_name}} v{{config.extra.arcana.previous_version}} should see **no change** in the user wallet address, irrespective of whether they continue to use the older version or upgrade to this latest release. This is true for all types of apps and supported frameworks, irrespective of whether they are using the global or app-specific keys. Apps deployed earlier will continue to work on the Arcana Testnet and Mainnet. 

## How to Migrate to v1.0.9?

Install the latest {{config.extra.arcana.sdk_name}} v1.0.9 and upgrade your app with no changes to the integration code.

That's all!