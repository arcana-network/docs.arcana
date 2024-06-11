---
alias: migration-guide-v1.0.11
title: 'Arcana Auth SDK v1.0.10 -> v1.0.11 Migration'
description: 'How to migrate to Arcana Auth Web SDK v1.0.11'
arcana:
  root_rel_path: ..
---

# Arcana Auth SDK v{{config.extra.arcana.previous_version}} -> v1.0.11 Migration

New to Arcana Network? Visit [[auth-quick-start|{{config.extra.arcana.sdk_name}} Quick Start Guide]] to get started. 

Using an older version and want to migrate? Read on...

## What has Changed?

There are no usage changes in this release if you are already using the SDK. 

This new release includes support for custom OAuth and wallet UI feature for off-ramping crypto to fiat.

## How to Migrate to v1.0.11?

Install and upgrade to the latest {{config.extra.arcana.sdk_name}} v1.0.11. No integration code updates are required for the features in the previous release.  

If you plan on using the custom OAuth or wallet off-ramping feature, check out the following documentation updates:

* What is [[concept-custom-oauth|custom OAuth]]?
* [[config-custom-oauth|How to configure]] custom OAuth feature usage via the {{config.extra.arcana.dashboard_name}}?
* [[integrate-custom-oauth|How to integrate an app that uses custom user authentication]] and enable {{config.extra.arcana.sdk_name}} and signing of blockchain transactions for authenticated users?
* [[arcana-wallet-user-guide#buysell-crypto|How to buy/sell crypto]] when using {{config.extra.arcana.wallet_name}}? 

That's all!