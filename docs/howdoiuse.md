---
slug: /howdoiuse
id: idhowdoiuse
title: How do I use it?
sidebar_custom_props:
  cardIcon: 📝
arcana:
  root_rel_path: .
---

# How do I use it?

The {{config.extra.arcana.product_name}} is meant for Web3 app developers. It is really simple to integrate an app with the {{config.extra.arcana.sdk_name}} to quickly onboard users via selected authentication providers and allow authenticated users to sign blockchain transactions.

<mark>Just two steps.</mark>

*That's it!*

## Step 1: Register & Configure

Log in to the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}

Use the {{config.extra.arcana.dashboard_name}} to [register and configure]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) your application as per the [use case]({{page.meta.arcana.root_rel_path}}/use_cases.md). The app registration process assigns a unique **{{config.extra.arcana.app_address}}** to every application. The **{{config.extra.arcana.app_address}}** is required for integrating your application with the {{config.extra.arcana.sdk_name}}.

Enable and configure the requisite [authentication providers]({{page.meta.arcana.root_rel_path}}/howto/config_social/index.md) so that the app users can choose one to easily onboard the app.

See [how to configure app]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) and the [{{config.extra.arcana.dashboard_name}} User Guide]({{page.meta.arcana.root_rel_path}}/db/config_dApp_with_db.md) for details.

## Step 2: Integrate App

After registering and configuring your application using the {{config.extra.arcana.dashboard_name}}, you need to use the unique  **{{config.extra.arcana.app_address}}** assigned to the registered app and [integrate the app with the {{config.extra.arcana.sdk_name}}]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md). Choose the specific instructions depending on the type of the app such as simple HTML/JS app, React/NextJS app or Vue app, apps using the Wagmi, RainbowKit frameworks, etc.

Once integrated, the {{config.extra.arcana.sdk_name}} enables the embedded, non-custodial Web3 wallet called the [{{config.extra.arcana.wallet_name}}]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md) for every authenticated application user.  Users can sign blockchain transactions with the {{config.extra.arcana.wallet_name}} on any [supported blockchain network]({{page.meta.arcana.root_rel_path}}/state_of_the_ntwk.md#supported-blockchains). The authenticated users can use the wallet to view account balances, switch networks, send tokens, manage NFTs, and other Web3 wallet operations. See the [{{config.extra.arcana.sdk_name}} User Guide]({{page.meta.arcana.root_rel_path}}/user_guides/wallet_ui/index.md) for usage details.

{{config.extra.arcana.sdk_name}} allows developers to either use built-in user login UI offered by the {{config.extra.arcana.sdk_name}} or they can build customized UI for user login. See the [onboarding users]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/index.md) guide for details.

Once the user is authenticated, developers can use the standard Ethereum provider interface exposed by the {{config.extra.arcana.sdk_name}}, `AuthProvider` to programmatically enable various Web3 wallet functions for the authenticated users. For example, send transactions, get the account balance, sign messages, and more. For details, see the [{{config.extra.arcana.wallet_name}} Developer's Guide]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md).

## See Also

* [{{config.extra.arcana.product_name}} Quick Start Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_qs.md)
* [{{config.extra.arcana.sdk_name}} Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md)
* {% include "./text-snippets/authsdkref_url.md" %}
