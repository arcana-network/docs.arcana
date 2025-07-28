---
alias: concept-custom-wallet-ui
title: 'Custom Wallet UI'
description: 'Custom Wallet UI'
arcana:
  root_rel_path: ..
---

# Custom Wallet UI

Developers have two options to enable the embedded, non-custodial Arcana Web3 wallet functionality within the app's context:

* You can use the built-in, ready-to-use {{config.extra.arcana.wallet_name}} UI *(default)*

* Alternatively, you have the choice to create a custom wallet user interface

You must decide to implement the custom wallet UI **before** installing and integrating with the {{config.extra.arcana.sdk_name}}. At the time of registering the app through {{config.extra.arcana.dashboard_name}}, enter the app name, default chain and then select *Wallet UI Mode* value as `Custom UI` instead of the `Arcana UI`. In this case, the onus of creating user interface for signing blockchain transaction, displaying the user's account information, Web3 assets such as tokens, NFTs, etc., lies with the developer.

!!! an-warning "One time setting"

      Custom Wallet UI option is selected at the time of registering the app and cannot be reverted later. 

See [[custom-wallet-ui|how to enable custom wallet UI]] during app registration before integrating with the {{config.extra.arcana.sdk_name}}.