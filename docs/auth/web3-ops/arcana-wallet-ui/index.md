---
alias: index-arcana-wallet
title: 'Arcana Wallet UX'
description: 'How to call the Arcana wallet and Web3 wallet operations in an app integrated with the Arcana Auth SDK for performing wallet operations programmatically.'
arcana:
  root_rel_path: ../../..
---

# {{config.extra.arcana.wallet_name}} UX

You can manage the app user experience during signing of the blockchain transactions through the [{{config.extra.arcana.wallet_name}}]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md) by these configuration choices:

* Use the default, built-in, {{config.extra.arcana.wallet_name}} UI 
* Build and use custom wallet UI and manage when and how the wallet UI is displayed  

In addition, developers can also manage whether the wallet UI is displayed at all times in the context of the app or only when the developer chooses to display it and seek user approval. In the case of built-in wallet, this is managed through the [[concept-wallet-visibility|wallet visibility]] parameter specified in the integration code when instantiating the `AuthProvider`.

In this guide you will learn how to manage the wallet user experience when using the default, built-in {{config.extra.arcana.wallet_name}} UI. 

=== "Arcana Wallet UI"

    During app registration, when [[register-app-auth|creating a new app entry using the {{config.extra.arcana.dashboard_name}}]], make sure you use the default setting for the  **Wallet UI Mode** as 'Arcana UI'. Note that this setting **cannot be changed** once the app is registered.

    Developers can alternatively choose to not use the default {{config.extra.arcana.wallet_name}} UI and use a [[custom-wallet-ui|custom wallet UI]]. 

=== "Wallet Visibility"

    To manage the user experience while signing the blockchain transactions, you can specify the wallet visibility parameter when instantiating an `AuthProvider` in the integration code. You can choose to display the wallet at all times within the app context or only when a blockchain transaction requires user approval.

The {{config.extra.arcana.wallet_name}} UI supports the standard JSON/RPC blockchain calls as well as the Web3 wallet operations. You can add appropriate code to plug in blockchain based app operations that use the {{config.extra.arcana.wallet_name}}.

[[configure-wallet-visibility| :material-tools:{ .icon-color } Configure built-in {{config.extra.arcana.wallet_name}} UI Visibility]]{ .md-button }

[[index-web3-wallet-ops| :material-wallet:{ .icon-color } Enabling Web3 Wallet Ops]]{ .md-button }