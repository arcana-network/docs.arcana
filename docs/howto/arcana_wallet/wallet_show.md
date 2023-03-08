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

[Arcana wallet]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md) is an embedded Web3 wallet available to all the dApps that [integrate]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) with the [Arcana Auth SDK]({{page.meta.arcana.root_rel_path}}/concepts/authsdk.md).

In this guide, you will learn how a dApp can display the built-in Arcana wallet after integrating with the Auth SDK. 

## Prerequisites

Register and configure your application using the Arcana Developer Dashboard. Next, install the `@arcana/auth` package. Integrate the Auth SDK with your dApp. For details, see [Arcana Auth Quick Start Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_qs.md).

{% include "./code-snippets/import_auth.md" %}
{% include "./code-snippets/new_auth.md" %}
{% include "./code-snippets/init_auth.md" %}

Make sure you have created the `AuthProvider` and initialized it before calling the `showWallet()` function in the context of the dApp.

A user must be successfully authenticated before calling the `showWallet()` function in the context of a dApp.

## Display Wallet

After initializing the `AuthProvider` and once the user has authenticated, the application can call `showWallet()` to bring up the built-in wallet UI.

{% include "./code-snippets/auth_show_wallet.md" %}

If the wallet is not already displayed in the context of the application, `showWallet()` will bring up the following wallet UI. If the wallet is displayed in the minimized mode before `showWallet()` function is called, then it will cause the minimized wallet widget to change into the full wallet UI.

<img src="/img/an_wallet_balance.png" width="300"/>

**That is all!**  :material-party-popper:
*You are all set to display the built-in Arcana _wallet to authenticated users._*

!!! note

      If the `AuthProvider` is configured in 'Full UI' mode via `alwaysVisible=true` (default), the built-in Arcana wallet will be automatically displayed in the minimized form when the user logs in. If `showWallet()` is called or if the user clicks the minimized wallet widget, then the full wallet UI is displayed.

      If `alwaysVisible=false` setting is used, then the built-in Arcana wallet is **not** displayed automatically once the user logs in. It shows up only when a blockchain transaction is triggered. Developers can also bring up the wallet UI for authenticated users by making explicit call to the `showWallet()` function. Note that the `AuthProvider` must be initialized and the user authenticated before the wallet is displayed.

## What's Next?

Arcana wallet also supports typical Web3 wallet JSON-RPC calls. For a complete list, see [JSON-RPC Specifications](https://ethereum.github.io/execution-apis/api-documentation/).

## See also

* [Arcana wallet capabilities]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md)
* [Configure Arcana wallet Visibility]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/config_wallet_modes.md)
* [Send transaction]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/wallet_send.md)
* [Watch Token Assets]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/wallet_watchasset.md)
* [Check account balance]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/wallet_balance.md)
* {% include "./text-snippets/authsdkref_url.md" %}