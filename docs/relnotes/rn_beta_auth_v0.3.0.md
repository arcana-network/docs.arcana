---
slug: /rn_beta_auth_0_3_0
id: idrnbetaauth030
sidebar_custom_props:
  cardIcon: 🏁
arcana:
  root_rel_path: ..
---

# Release Notes Arcana Auth (Testnet)

{==

**Version: v{% include "./text-snippets/latest_auth_sdk.md" %}**

**Release Date: December 2022**

==}

## What's New 

<img src="/img/icon_new_light.png#only-light" alt="New icon" width="50" /><img src="/img/icon_new_dark.png#only-dark" alt="New icon" width="50" /><img src="/img/icons/i_an_authsdk_light.png#only-light" alt="Auth SDK icon" width="50"/><img src="/img/icons/i_an_authsdk_dark.png#only-dark" alt="Auth SDK icon" width="50" />

### NFT Support

A new separate wallet screen to manage and view details related to the NFTs owned by the wallet address.

  - View any NFT of the type image, audio or video
  - Transfer NFTs from within the wallet
  - Easily add NFTs to the wallet by searching from list of popular collections on Ethereum Mainnet
  
See [managing NFT Assets]({{page.meta.arcana.root_rel_path}}/howto/wallet_manage_nft.md) guide.

<img src="/img/an_wallet_nft_asset_thumbnail.png" width="200"/>

### Combined notification screen

New UI for blockchain transaction notifications. This combined notification screen in the Arcana wallet lists the following type of blockchain transaction activity:

  - Send transactions for native as well as custom ERC20 tokens
  - Send transactions for NFTs
  - Smart contract deployment
  - Smart contract interaction

See [notifications screen]({{page.meta.arcana.root_rel_path}}/howto/wallet_ui.md#wallet-notifications) for details.

<img src="/img/an_wallet_combined_notify.png" width="200"/>

#### Add Tokens Programmatically

Arcana wallet now supports programmatic addition of custom tokens by application developers via eth_watchAsset JSON RPC function.

## Changes

  - The storage SDK is no longer supported. If you were using Storage SDK in your application, contact the Arcana support team. 

  - The activity tab was earlier located next to the assets tab on the main Arcana wallet screen. All the information in the activity tab earlier can now be accessed via the newly added notifications screen.

## Bug Fixes

  - Logout issue related to the passwordless authentication has been fixed

!!! tip

      If you were using the Arcana Auth SDK v0.2.2 release or earlier, we highly recommend that you refer to the [Auth 0.3.0 Migration Guide]({{page.meta.arcana.root_rel_path}}/migration/beta_auth_v0.3.0_migration.md).

---

## Get Started

{==

*Ready to dive in?* 

==}

See [Auth SDK Quick Start Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_qs.md). 

For step-by-step instructions, see [how to integrate with Auth SDK]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) guide. 

Check out the sample dApp integration example with the Arcana SDKs for [React]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/integrate_wallet_react.md),[Vue](https://github.com/arcana-network/basic-storage-wallet-integration) dApps.

---

## Questions? 

Refer to [FAQ]({{page.meta.arcana.root_rel_path}}/faq/faq_gen.md), [Troubleshooting Guide]({{page.meta.arcana.root_rel_path}}/troubleshooting.md) and other developer resources or contact [Arcana Support]({{page.meta.arcana.root_rel_path}}/support.md).
