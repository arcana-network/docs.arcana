---
slug: /walletshow
id: idwalletshow
title: Show Wallet
sidebar_custom_props:
  cardIcon: 🔏
arcana:
  root_rel_path: ../..
---

# Show Wallet

In this guide, you will learn how to programmatically display the built-in {{config.extra.arcana.wallet_name}} in the context of an authenticated user, after integrating a Web3 app with the {{config.extra.arcana.sdk_name}}.

## Prerequisites

* Use the [{{config.extra.arcana.dashboard_name}}]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md) to [register the app]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) and obtain a unique {{config.extra.arcana.app_address}} required for integrating the app with the {{config.extra.arcana.sdk_name}}.

* Follow the instructions to [configure authentication providers]({{page.meta.arcana.root_rel_path}}/howto/config_auth/index.md) before integrating the app with the {{config.extra.arcana.sdk_name}}.
  
* Use the appropriate integration method as per the app type and [integrate the app]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) with the {{config.extra.arcana.sdk_name}}.

* Add code in the integrated app to [onboard users]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/index.md). The Web3 wallet operations can be invoked programmatically in an app only in the context of an authenticated user.

## Steps

Make sure you have addressed the prerequisites before adding code to invoke any Web3 wallet operations supported by the {{config.extra.arcana.wallet_name}}. After that, plug in the necessary code to set up requisite hooks for JSON/RPC standard Ethereum calls.

{% include "./code-snippets/auth_json_rpc_setup.md" %}

## Display Wallet

A user must be successfully authenticated before calling the `showWallet()` function in the context of an app that is integrated with the {{config.extra.arcana.sdk_name}}.

{% include "./code-snippets/auth_show_wallet.md" %}

If the {{config.extra.arcana.wallet_name}} is not already displayed in the context of the application, `showWallet()` will bring up the following {{config.extra.arcana.wallet_name}} UI screen. If the {{config.extra.arcana.wallet_name}} is already displayed in the minimized state before the `showWallet``()`` function is called, then it will cause the minimized wallet state to change into the maximized {{config.extra.arcana.wallet_name}} UI.

<img src="/img/an_wallet_balance.png" width="300"/>

**That is all!**  :material-party-popper:

*The Web3 app is all set to display the built-in {{config.extra.arcana.wallet_name}} to authenticated users.*

!!! note

      If the `AuthProvider` is configured with the default `alwaysVisible=true` setting, the built-in {{config.extra.arcana.wallet_name}} will be automatically displayed in the minimized form when the user logs in. If `showWallet()` is called or if the user clicks the minimized wallet UI, then the maximized wallet UI is displayed.

      If the `alwaysVisible=false` setting is selected by the app developer, then the built-in {{config.extra.arcana.wallet_name}} is **not displayed** automatically once the user logs in. It shows up only when a blockchain transaction is triggered. Developers can also bring up the {{config.extra.arcana.wallet_name}} UI for authenticated users by making an explicit call to the `showWallet()` function. Note that the `AuthProvider` must be initialized and the user authenticated before the {{config.extra.arcana.wallet_name}} is displayed.

## What's Next?

After registering the app, configuring authentication providers, integrating the {{config.extra.arcana.sdk_name}} with the app and onboarding users, developers can further add code in the app to sign blockchain transactions, send and receive native, ERC20, or custom tokens, and other [Web3 wallet operations]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/web3ops/index.md).

For a complete list of other JSON RPC calls supported by the {{config.extra.arcana.wallet_name}}, see [JSON-RPC Specifications](https://ethereum.github.io/execution-apis/api-documentation/).

## See also

* [{{config.extra.arcana.wallet_name}} capabilities]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md)
* [Configure {{config.extra.arcana.wallet_name}} visibility]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/config_walletvisibility.md)
* [Send transaction]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/wallet_send.md)
* [Watch crypto assets]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/wallet_watchasset.md)
* [Check the wallet account balance]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/wallet_balance.md)
* {% include "./text-snippets/authsdkref_url.md" %}