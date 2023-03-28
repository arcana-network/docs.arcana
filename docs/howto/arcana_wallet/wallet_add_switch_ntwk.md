---
slug: /walletaddswitchntwk
id: idwalletaddswitchntwk
title: Add/Switch Network
sidebar_custom_props:
  cardIcon: 🔏
arcana:
  root_rel_path: ../..
---

# Add/Switch Networks

In this guide, you will learn how to programmatically add a blockchain network or switch to a different network when using the {{config.extra.arcana.wallet_name}} in the context of a Web3 app. Developers can add any [supported blockchain networks]({{page.meta.arcana.root_rel_path}}/state_of_the_ntwk.md#supported-blockchains) that are not already part of the default networks displayed in the {{config.extra.arcana.wallet_name}} UI. 

When a network addition or a switch is initiated programmatically, a request for user approval pops up in the wallet screen, asking for permission from the user to allow the app to switch to the requested blockchain network.

## Prerequisites

* Use the [{{config.extra.arcana.dashboard_name}}]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md) to [register the app]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) and obtain a unique {{config.extra.arcana.app_address}} required for integrating the app with the {{config.extra.arcana.sdk_name}}.

* Follow the instructions to [configure authentication providers]({{page.meta.arcana.root_rel_path}}/howto/config_auth/index.md) before integrating the app with the {{config.extra.arcana.sdk_name}}.
  
* Use the appropriate integration method as per the app type and [integrate the app]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) with the {{config.extra.arcana.sdk_name}}.

* Add code in the integrated app to [onboard users]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/index.md). The Web3 wallet operations can be invoked programmatically in an app only in the context of an authenticated user.

## Steps

Make sure you have addressed the prerequisites before adding code to invoke any Web3 wallet operations supported by the {{config.extra.arcana.wallet_name}}. After that, plug in the necessary code to set up requisite hooks for JSON/RPC standard Ethereum calls.

{% include "./code-snippets/auth_json_rpc_setup.md" %}

The following code snippets show how developers can programmatically add code in the app and allow authenticated users to add/switch blockchain network. Note that the developer can call these functions programmatically but the authenticated users must approve the blockchain transaction via the wallet UI request screen before the blockchain network update actually takes effect.

## Add Network

{% include "./code-snippets/auth_add_ntwk.md" %}

## Switch Network

{% include "./code-snippets/auth_switch_ntwk.md" %}

**That is all!**  :material-party-popper:

*The app is all set to programmatically add/switch networks using the {{config.extra.arcana.wallet_name}} .*

## What's Next?

After registering the app, configuring authentication providers, integrating the {{config.extra.arcana.sdk_name}} with the app and onboarding users, developers can further add code in the app to sign blockchain transactions, send and receive native, ERC20, or custom tokens, and other [Web3 wallet operations]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/web3ops/index.md).

For a complete list of other JSON RPC calls supported by the {{config.extra.arcana.wallet_name}}, see [JSON-RPC Specifications](https://ethereum.github.io/execution-apis/api-documentation/). 

## See also

* [{{config.extra.arcana.wallet_name}} capabilities]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md)
* [Configure {{config.extra.arcana.wallet_name}} visibility]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/config_walletvisibility.md)
* [Sign transactions]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/wallet_sign.md)
* [Send transaction]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/wallet_send.md)
* [Check the wallet account balance]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/wallet_balance.md)
* [Watch crypto assets]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/wallet_watchasset.md)
* {% include "./text-snippets/authsdkref_url.md" %}
