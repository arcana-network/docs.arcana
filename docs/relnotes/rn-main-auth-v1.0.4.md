---
alias: rn-main-auth-v1.0.4
title: 'Arcana Auth: Release Notes'
description: 'Arcana Auth Release Notes (Latest)'
arcana:
  root_rel_path: ..
---

# Arcana Auth: Release Notes

{==

**Release Date: May 22, 2023**  

The latest release of the {{config.extra.arcana.product_name}} product consists of the following components:

* [{{config.extra.arcana.sdk_name}} v1.0.4](https://www.npmjs.com/package/@arcana/auth/v/1.0.4)
* [{{config.extra.arcana.dashboard_name}}](https://dashboard.arcana.network/)

==}

## New Product Features

---

### Automatically Fetch NFTs

Earlier, {{config.extra.arcana.wallet_name}} did not automatically fetch the NFTs belonging to a user account. The user was required to manually add the NFT information (the contract address, token ID) to display the NFT assets in the Arcana wallet.  In this release, the {{config.extra.arcana.wallet_name}} automatically fetches the NFTs belonging to the wallet address.

!!! note "Auto-fetching NFTs"

      This feature works only for the NFTs that are minted using the supported blockchains. {% include "./text-snippets/supported_nft_autofetch_chains.md" %}
      
      For the NFTs minted on the non-supported blockchains, the {{config.extra.arcana.wallet_name}} user can manually add them. See the [[use-wallet-to-manage-nfts#manage-nfts|{{config.extra.arcana.wallet_name}} User's Guide]] for details.

### Web3-React App Support

The latest release of the {{config.extra.arcana.product_name}} product supports Web3-React apps. 

The newly released `{{config.extra.arcana.web3_react_sdk_pkg_name}}` package can be installed along with the `{{config.extra.arcana.auth_sdk_pkg_name}}` package and Web3-React apps can be integrated easily for onboarding users just like other wallet connector frameworks such as Wagmi and RainbowKit.

Web3-React apps can use either the built-in plug-and-play login UI or build their own custom UI and use {{config.extra.arcana.product_name}} functions to onboard users via the configured authentication providers. For details, see [[index-web3-react-onboard-users|how to onboard users in Web3-React applications]].

## Product Enhancements

### Custom Login UI

In addition to the plug-and-play authentication feature that allows developers to use the built-in login UI to onboard users, now custom login UI support is available in the {{config.extra.arcana.sdk_name}}. App developers can build a custom login UI in their app and it can be easily wired to onboard users through the authentication providers configured via the {{config.extra.arcana.dashboard_name}}. 

Web3 app developers now have more flexibility in how they authenticate and onboard users into their apps. In the {{config.extra.arcana.sdk_name}}, developers can now build a custom login UI instead of using the default, built-in plug-and-play login UI. This allows app developers to design a login interface that matches their app's style and branding. The custom login UI can be used to call the authentication providers set up in the {{config.extra.arcana.dashboard_name}}, making it easy to onboard users through the app's custom login process. 

For details, see [[index-onboard-users| how to onboard users]], select the app type and refer to the instructions for enabling custom login UI.

---

### Chain Management

Now developers can configure the blockchains as per the app requirements and set one of them as the default chain using the {{config.extra.arcana.dashboard_name}}. Once a user authenticates, the wallet is displayed and it shows these app developer-configured chains in the drop-down list with one of them set as the default. 

Previously, the {{config.extra.arcana.sdk_name}} supported a hardcoded set of chains with one of them set as the default chain. The developer could only add and switch chains programmatically [[state-of-the-arcana-auth#supported-blockchains|as long as it was a supported chain]]. The `wallet_addEthereumChain` and `wallet_switchEthereumChain` JSON-RPC calls could be used by devs to add and switch chains. They could  change the default chain through the `chainConfig` option in the `AuthProvider`. In the latest release of the {{config.extra.arcana.sdk_name}}, app developers have more flexibility in specifying the list of chains that are supported for a Web3 app and also set one of them as the default. This can be achieved programmatically as in the earlier releases or through the dashboard. 

The wallet user can also add any new [[state-of-the-arcana-auth#supported-blockchains|supported chain]] through the {{config.extra.arcana.wallet_name}} UI. Only the chains configured by the app developer persist across the user login sessions.

### Transaction Notification Summary

When a blockchain transaction is triggered via the Web3 app for the user's wallet, the {{config.extra.arcana.sdk_name}} brings up a transaction notification in the app's context displaying the transaction details and options for the wallet user to accept or reject it. 

Previously, the transaction notification view provided all the transaction details based on the transaction type. In the latest release, the notification now shows a summary of the transaction by default, with options for the user to accept or reject the transaction. To view more details, the user can click on the '^' symbol in the top right corner of the transaction summary. In certain cases, like 'Send Token' or 'Sign Transaction', the detailed notification also shows the gas fees and allows the user to edit the gas amount before approving the transaction, if needed.

## Bug Fixes

---

* List bug fixes here


## Get Started

---

{==

*Ready to dive in?* 

==}

See [[auth-quick-start|{{config.extra.arcana.product_name}} Quick Start Guide]] in the Getting Started section. 

Check out the sample dApp integration example for apps using [[react-code-sample|React ]], [[nextjs-code-sample|NextJS ]], and [Vue](https://github.com/arcana-network/basic-storage-wallet-integration) frameworks.


## Use Latest {{config.extra.arcana.sdk_name}} 

---

If you have integrated the app with the {{config.extra.arcana.sdk_name}} v1.0.3 package you can continue to use it with the latest {{config.extra.arcana.product_name}} release. To use the new product features and enhancements, we recommend that you follow the [[latest-migration-guide|migration guide]] for a swift upgrade.

Please note, in case are using an older version of the {{config.extra.arcana.sdk_name}} prior to v1.0.4 then refer to the [[index-migration-guides|Migration Guides]] and upgrade to the {{config.extra.arcana.sdk_name}} v1.0.3 first before upgrading to the v{% include "./text-snippets/latest_auth_sdk.md" %}.

## Questions? 

---

Refer to the [[faq-gen| Arcana Auth FAQ]], [Troubleshooting Guide]({{page.meta.arcana.root_rel_path}}/troubleshooting.md), and other developer resources, or contact [Arcana Support]({{page.meta.arcana.root_rel_path}}/support.md).

