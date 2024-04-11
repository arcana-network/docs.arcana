---
alias: web3-stack-wallets
title: 'Wallets'
description: 'Learn about the wallets supported by the Arcana SDKs.'
arcana:
  root_rel_path: ..
---

# Wallets

{{config.extra.arcana.company_name}} SDKs work with third-party browser-based wallets as well as the built-in, non-custodial, embedded {{config.extra.arcana.wallet_name}}. 

The {{config.extra.arcana.wallet_name}} is automatically accessible to all authenticated app users if the app is integrated with the {{config.extra.arcana.sdk_name}}. Developers can customize the {{config.extra.arcana.wallet_name}} UI and also choose to build and use a custom wallet UI instead of the built-in wallet UI offered by the {{config.extra.arcana.sdk_name}}.

## Supported Third-party Wallets

Any browser-based wallet can be enabled in an app that is integrated with the {{config.extra.arcana.company_name}} SDKs. For example, MetaMask, Brave, Phantom, etc. Note that the wallet must work with the [[web3-stack-chains|supported chains]].

### {{config.extra.arcana.sdk_name}}

When using the {{config.extra.arcana.sdk_name}} for user onboarding and gasless transactions, by default the built-in, embedded, non-custodial {{config.extra.arcana.wallet_name}} is enabled. Developers can use any of the supported wallet connectors and enabled other third-party wallets in the app. The [[concept-wallet-visibility| {{config.extra.arcana.wallet_name}} visibility]] can be managed whereby developers can choose to display the wallet within the app context only when required.

It is possible to totally replace the {{config.extra.arcana.wallet_name}} UI with a [[custom-wallet-ui|custom wallet UI]]. 

In advanced use cases, if the app requires to **only** use the user onboarding feature of the {{config.extra.arcana.sdk_name}} and **no {{config.extra.arcana.wallet_name}}**, but a third-party wallet, then the app must be registered with 'Custom Wallet' setting and {{config.extra.arcana.auth_core_sdk_name}} must be used instead of the {{config.extra.arcana.sdk_name}}.

!!! an-caution "Gasless Transactions"

      In case of the apps integrated with the {{config.extra.arcana.sdk_name}}, the gasless transactions are enabled **only** for the {{config.extra.arcana.wallet_name}}.

      Apps that support multiple wallets in addition to the {{config.extra.arcana.wallet_name}} must also integrate with the {{config.extra.arcana.gasless_sdk_name}} in order to enable gasless transactions in the third-party wallets.

### {{config.extra.arcana.gasless_sdk_name}}

Apps that require to enable gasless transactions in a third-party, browser-based wallets must integrate with the {{config.extra.arcana.gasless_sdk_name}}. Note that the third-party wallet must support the chains where gas tanks can be set up and gasless transactions enabled. See [[web3-stack-chains|supported gasless chains]] for details.