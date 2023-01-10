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

Hi there, Web3 developers! It is really simple to integrate your application with the Arcana Network Auth SDK.

<mark>Just two steps.</mark>

*That's it!*

## Step 1: Register & Configure

Log in to Arcana Network Dashboard: {% include "./text-snippets/db_portal_url.md" %}

Use the dashboard to [register and configure]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) your application as per the [use case]({{page.meta.arcana.root_rel_path}}/use_cases.md). Registration process assigns a unique **App Address** to every application. The **App Address** is required for integrating your application with the Auth SDK.

As part of application configuration using the dashboard, make sure you specify the required details for all the[social login providers]({{page.meta.arcana.root_rel_path}}/howto/config_social_providers.md) that you wish to enable for onboarding application users.

See [Arcana Dashboard User Guide]({{page.meta.arcana.root_rel_path}}/db/config_dApp_with_db.md) for details.

## Step 2: Integrate Auth SDK

After registering and configuring your application using the dashboard, you need to use the dashboard assigned **App Address** and [integrate your application with Arcana Auth SDK]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md). Choose the specific instructions depending upon what kind of application (simple HTML/JS, React/NextJS, Wagmi, RainbowKit, etc.) you are trying to integrate.

Once integrated, the Auth SDK enables the embedded Web3 wallet called the [Arcana wallet]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md) for every authenticated application user.  Users can sign blockchain transactions with the Arcana wallet on any EVM-compatible blockchains. They can use the wallet to view account balances, switch networks, send tokens, manage NFTs and other Web3 wallet operations. See [Arcana wallet user guide]({{page.meta.arcana.root_rel_path}}/user_guides/wallet_ui/index.md) for usage details.

Auth SDK allows developers to either use built-in UI for user login or they can build their own customized UI and enable user login by calling social login functions of the Auth SDK. See [developer's guide for onboarding users]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/index.md) for details.

Once user has authenticated, developers can use the standard Ethereum provider interface exposed by the Auth SDK, `AuthProvider` to programmatically enable various Web3 wallet functions for the authenticated users. For example, send transactions, get account balance, sign messages and more. See [developer's guide for Arcana wallet]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md) for details.

## See Also

* [Auth SDK Quick Start Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_qs.md)
* [Auth SDK Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md)
* {% include "./text-snippets/authsdkref_url.md" %}
