---
alias: index-arcana-wallet
title: 'Enable Arcana Wallet'
description: 'How to call the Arcana wallet and Web3 wallet operations in an app integrated with the Arcana Auth SDK for performing wallet operations programmatically.'
arcana:
  root_rel_path: ../..
---

# Enable {{config.extra.arcana.wallet_name}}

Manage the user experience during signing of the blockchain transactions by:

* Selecting the default, built-in, {{config.extra.arcana.wallet_name}} UI or a custom wallet UI
* Specifying the wallet visibility when creating a new `AuthProvider` instance

## Dashboard:  Built-in vs. Custom Wallet UI

By default, Web3 apps integrated with the {{config.extra.arcana.sdk_name}} can enable the authenticated users to instantly access the built-in, embedded {{config.extra.arcana.wallet_name}} UI and perform various Web3 wallet operations such as adding/switching blockchain networks, checking their wallet balance, managing crypto assets, and [more]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md).

Developers can alternatively choose to not use the default {{config.extra.arcana.wallet_name}} UI and use a [[custom-wallet-ui|custom wallet UI]]. This choice is made during the [[configure-auth|app registration]] through **Wallet UI Mode** setting and cannot be reverted.

## `AuthProvider` Wallet Visibility

During app integration, when a new `AuthProvider` is instantiated, you can specify the wallet visibility parameter to manage the user experience for signing blockchain transactions. Also, you can access the standard Ethereum provider, `AuthProvider`, and add code to use various Web3 wallet operations programmatically in the context of the authenticated users.

## {{config.extra.arcana.wallet_name}} Developer Guides

[[configure-wallet-visibility|Configure built-in {{config.extra.arcana.wallet_name}} UI Visibility :material-tools:]]{ .md-button }

[[index-web3-wallet-ops|Enabling Web3 Wallet Ops :material-wallet:]]{ .md-button }