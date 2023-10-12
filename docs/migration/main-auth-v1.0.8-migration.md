---
alias: migration-guide-v1.0.8
title: 'Arcana Auth SDK v1.0.7 -> v1.0.8 Migration'
description: 'How to migrate to Arcana Auth Web SDK v1.0.8'
arcana:
  root_rel_path: ..
---

# Arcana Auth SDK v1.0.7 -> v1.0.8 Migration

This guide is meant for developers who have already integrated apps with v1.0.7 of the {{config.extra.arcana.sdk_name}} and deploy them using {{config.extra.arcana.company_name}} Testnet or Mainnet.

If you are new to Arcana Network, please visit [[auth-quick-start|{{config.extra.arcana.product_name}} Quick Start Guide]] to get started.

## Backward Compatibility

The latest release of the {{config.extra.arcana.product_name}} product does not cause any breaking changes for apps that have already integrated with v1.0.7 of the {{config.extra.arcana.sdk_name}}. Simply install the latest version and upgrade your app.

### Same Wallet Address

Apps using {{config.extra.arcana.product_name}} v1.0.7 should see **no change** in the user wallet address irrespective of whether they continue to use the older version on the upgrade to the v1.0.8 release. This is true for all types of apps and supported frameworks, irrespective of whether they are using the global or app-specific keys. Apps deployed earlier will continue to work on the Arcana Testnet and Mainnet. 

## New Release: What has Changed?

There are a few enhancements in the {{config.extra.arcana.sdk_name}} and a bug fix for email validation. **No usage changes** in the latest release. For details, see [[rn-main-auth-v1.0.8|{{config.extra.arcana.product_name}} v1.0.8 release notes]].

## How to Migrate to v1.0.8?

We highly recommend that Web3 apps that are integrated with v1.0.7 releases of the {{config.extra.arcana.sdk_name}} migrate to the latest {{config.extra.arcana.sdk_name}} v1.0.8 release.

Install the latest {{config.extra.arcana.sdk_name}} v1.0.8 release and upgrade your app. No other integration code changes are required.

Apps using older versions of the {{config.extra.arcana.sdk_name}} must refer to the [[index-migration-guides|migration guides]] and upgrade to the latest release if they wish to enable Steam of Firebase user onboarding.

## What's New?

<img src="/img/icon_new_light.png#only-light" alt="New icon" width="3%" /><img src="/img/icon_new_dark.png#only-dark" alt="New icon" width="3%" />

See [[rn-main-auth-v{{config.extra.arcana.product_name}}|{{config.extra.arcana.product_name}} v1.0.8 release notes]] and [[state-of-the-arcana-auth|State of the {{config.extra.arcana.product_name}}]].
