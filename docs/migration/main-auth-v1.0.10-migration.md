---
alias: migration-guide-v1.0.10
title: 'v1.0.9 -> v1.0.10 Migration'
description: 'How to migrate to Arcana Auth Web SDK v1.0.10'
arcana:
  root_rel_path: ..
---

# Arcana Auth SDK v1.0.9 -> v1.0.10 Migration

New to Arcana Network? Visit see {{config.extra.arcana.sdk_name}} Quick Start Guides to get started. 

Using an older version and want to migrate? Read on...

## What has Changed?

There are no usage changes in this release if you are already using the SDK. 

This new release includes support for Web3 gaming apps based on the Unity framework, support for MultiversX chain in the {{config.extra.arcana.wallet_name}}, and minor bug fixes.

## How to Migrate to v1.0.10?

Install the latest {{config.extra.arcana.sdk_name}} v1.0.10. No integration code updates are required for the features in the previous release.  

### MultiversX Support

If you wish to use this new release and add support for MultiversX in your app, there may be some changes related to the [[mvx-dashboard-user-guide|configuration of MultiversX]] as the default chain in the dashboard. Note that the [[mvx-web3-wallet-ops|supported Web3 wallet operations for the MultiversX chain]] are different from those for the EVM-compatible chains. See [[mvx-quick-start| MultiversX Quick Start Guide]] for more details.

That's all!