---
alias: rn-beta-auth-v0.3.0
title: 'Release Notes Arcana Auth v0.3.0'
description: 'Arcana Auth product release details for v0.3.0. What is new, what features have been added, optimizations and performance changes, and more.'
arcana:
  root_rel_path: ..
---

# Release Notes Arcana Auth (Testnet)

{==

**Version: v0.3.0**

**Release Date: December 2022**

==}

This release of the {{config.extra.arcana.product_name}} product consists of the following components:

* [{{config.extra.arcana.sdk_name}} v0.0.3](https://www.npmjs.com/package/@arcana/auth/v/0.3.0)
* {{config.extra.arcana.dashboard_name}}
* {{config.extra.arcana.wallet_name}} UI

## What's New?

---

<img src="/img/icon_new_light.png#only-light" alt="New icon" width="50" /><img src="/img/icon_new_dark.png#only-dark" alt="New icon" width="50" /><img src="/img/icons/i_an_authsdk_light.png#only-light" alt="Auth SDK icon" width="50"/><img src="/img/icons/i_an_authsdk_dark.png#only-dark" alt="Auth SDK icon" width="50" />

### NFT Support

A new wallet tab is now available to manage and view details related to the NFTs owned by the wallet address.

  - View any NFT of the type image, audio, or video
  - Transfer NFTs from within the wallet
  - Easily add NFTs to the wallet by searching from a list of popular collections on Ethereum Mainnet
  
Refer to the [[use-wallet-to-manage-nfts|documentation on managing NFT Assets]].

<img src="/img/an_wallet_nft_asset_thumbnail.png" width="200"/>

### Combined notification UI

This release has a new UI for blockchain transaction notifications. This combined notification UI in the Arcana wallet lists the following type of blockchain transaction activity:

  - Send transactions for native as well as custom ERC20 tokens
  - Send transactions for NFTs
  - Smart contract deployment
  - Smart contract interaction

See the [[arcana-wallet-user-guide#view-transaction-summary-details|notifications tab]] for details.

<img src="/img/an_wallet_combined_notify.png" width="200"/>

#### Add Tokens Programmatically

{{config.extra.arcana.wallet_name}} now supports the programmatic addition of custom tokens by application developers via the `eth_watchAsset` JSON RPC function.

## Changes

---

  - The {{config.extra.arcana.company_name}} Storage SDK is no longer supported. If you were using the Storage SDK in your application, contact the {{config.extra.arcana.company_name}} support team. 

  - The activity tab was earlier located next to the assets tab in the {{config.extra.arcana.wallet_name}} UI. All the information displayed in the activity tab earlier can now be accessed via the newly added notifications tab.

## Bug Fixes

---

  - The logout issue related to the passwordless authentication has been fixed

!!! an-tip

      If you were using the {{config.extra.arcana.sdk_name}} v0.2.2 release or earlier, we highly recommend that you refer to the [[migration-guide-v0.3.0|{{config.extra.arcana.product_name}} 0.3.0 Migration Guide]].

---

## Get Started

---

{==

*Ready to dive in?* 

==}

See [[auth-quick-start|{{config.extra.arcana.product_name}} Quick Start Guide]] and the [how-to guides]({{page.meta.arcana.root_rel_path}}/auth/index.md) for details. 

Check out the sample dApp integration example for apps using [[react-code-sample|React ]], [[nextjs-code-sample|Next.js ]], and [Vue](https://github.com/arcana-network/basic-storage-wallet-integration) frameworks.

---

## Questions? 

---

Refer to the [[faq-gen|Arcana Auth FAQ]], [Troubleshooting Guide]({{page.meta.arcana.root_rel_path}}/troubleshooting.md), and other developer resources, or contact [Arcana Support]({{page.meta.arcana.root_rel_path}}/support/index.md).
