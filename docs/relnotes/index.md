---
alias: index-latest-release-note
title: 'Arcana Auth: Release Notes'
description: 'Arcana Auth Release Notes (Latest)'
arcana:
  root_rel_path: ..
---

# Arcana Auth: Release Notes

{==

**Release Date: May TBD, 2023**  

The latest release of the {{config.extra.arcana.product_name}} product consists of the following components:

* [{{config.extra.arcana.sdk_name}} v1.0.3](https://www.npmjs.com/package/@arcana/auth/v/1.0.3)
* [{{config.extra.arcana.dashboard_name}}](https://dashboard.arcana.network/)
* {{config.extra.arcana.wallet_name}} UI 

==}

!!! tip "No {{config.extra.arcana.sdk_name}} upgrade required"

      Note, in the latest {{config.extra.arcana.product_name}} product release, there is **no change** in the {{config.extra.arcana.sdk_name}} package. Developers can continue to use {{config.extra.arcana.sdk_name}} v1.0.3 release.

## New Product Features

---

### Automatically Fetch NFTs

Earlier, {{config.extra.arcana.wallet_name}} did not automatically fetch the NFTs belonging to a user account. The user was required to manually add the NFT information (the contract address, token ID) to display the NFT assets in the Arcana wallet.  In this release, the {{config.extra.arcana.wallet_name}} automatically fetches the NFTs belonging to the wallet address.

!!! note "Auto-fetching NFTs"

      This feature works only for the NFTs that are minted using the supported blockchains. {% include "./text-snippets/supported_nft_autofetch_chains.md" %}
      
      For the NFTs minted on the non-supported blockchains, the {{config.extra.arcana.wallet_name}} user can manually add them. See the [[use-wallet-to-manage-nfts#manage-nfts|{{config.extra.arcana.wallet_name}} User's Guide]] for details.

## Product Enhancements

---

### Enhancement A

Details

### Enhancement B

Details

## Bug Fixes

---

* TBD


## Get Started

---

{==

*Ready to dive in?* 

==}

See [[auth-quick-start|{{config.extra.arcana.product_name}} Quick Start Guide]] in the Getting Started section. 

Check out the sample dApp integration example for apps using [[react-code-sample|React ]], [[nextjs-code-sample|NextJS ]], and [Vue](https://github.com/arcana-network/basic-storage-wallet-integration) frameworks.


## Use Latest {{config.extra.arcana.sdk_name}} 

---

If you have integrated the app with the {{config.extra.arcana.sdk_name}} v1.0.3 package already, then **you are all set!**

But if you are using an older version of the {{config.extra.arcana.sdk_name}} prior to v1.0.3 then refer to the [[index-migration-guides|Migration Guides]] and upgrade to the {{config.extra.arcana.sdk_name}} v{% include "./text-snippets/latest_auth_sdk.md" %}.

## Questions? 

---

Refer to the [[faq-gen| Arcana Auth FAQ]], [Troubleshooting Guide]({{page.meta.arcana.root_rel_path}}/troubleshooting.md), and other developer resources, or contact [Arcana Support]({{page.meta.arcana.root_rel_path}}/support.md).

