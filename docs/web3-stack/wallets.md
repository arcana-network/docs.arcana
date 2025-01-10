---
alias: web3-stack-wallets
title: 'Wallets'
description: 'Learn about the wallets supported by the Arcana SDKs.'
arcana:
  root_rel_path: ..
---

# Supported Wallets

{{config.extra.arcana.company_name}} SDKs works with third-party browser-based wallets as well as the built-in, non-custodial, embedded {{config.extra.arcana.wallet_name}}. 

=== "{{config.extra.arcana.wallet_name}}"

    The {{config.extra.arcana.wallet_name}} is an embedded, built-in wallet available to all apps that integrate with the {{config.extra.arcana.sdk_name}}. 

    ### Built-in Wallet UI

    Developers can choose to use the built-in {{config.extra.arcana.wallet_name}} UI and quickly allow users to sign blockchain transactions via their app.

    ### Custom Wallet UI

    When using the {{config.extra.arcana.sdk_name}} for user onboarding, by default the built-in, embedded, non-custodial {{config.extra.arcana.wallet_name}} UI is enabled.

    It is possible to totally replace the {{config.extra.arcana.wallet_name}} UI with a [[config-custom-wallet-ui|custom wallet UI]]. 

=== "Third-party Wallets"

    Any browser-based wallet can be enabled in an app that is integrated with the {{config.extra.arcana.sdk_name}}. For example, MetaMask, Brave, Phantom, etc. Note that the wallet must work with the [[web3-stack-chains|supported chains]].