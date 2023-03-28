---
slug: /walletwatchasset
id: idwalletwatchasset
sidebar_custom_props:
  cardIcon: 📤
arcana:
  root_rel_path: ../..
---

# Watch Assets

In this guide, you will learn how Web3 apps that integrate with the {{config.extra.arcana.sdk_name}} can use the standard Ethereum JSON RPC calls supported by the {{config.extra.arcana.wallet_name}} and programmatically allow authenticated users to watch crypto assets such as the native and custom tokens associated with a specified wallet address.

## Prerequisites

* Use the [{{config.extra.arcana.dashboard_name}}]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md) to [register the app]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) and obtain a unique {{config.extra.arcana.app_address}} required for integrating the app with the {{config.extra.arcana.sdk_name}}.

* Follow the instructions to [configure authentication providers]({{page.meta.arcana.root_rel_path}}/howto/config_auth/index.md) before integrating the app with the {{config.extra.arcana.sdk_name}}.
  
* Use the appropriate integration method as per the app type and [integrate the app]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) with the {{config.extra.arcana.sdk_name}}.

* Add code in the integrated app to [onboard users]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/index.md). The Web3 wallet operations can be invoked programmatically in an app only in the context of an authenticated user.

## Steps

Make sure you have addressed the prerequisites before adding code to invoke any Web3 wallet operations supported by the {{config.extra.arcana.wallet_name}}. After that, plug in the necessary code to set up requisite hooks for JSON/RPC standard Ethereum calls.

{% include "./code-snippets/auth_json_rpc_setup.md" %}

## Watch Assets

Add code for watching token assets associated with the logged in user's wallet address by calling the `wallet_watchAssets` JSON RPC method as shown in the following code sample:

{% include "./code-snippets/auth_watchasset.md" %}

When a new asset is bought, sold or shared using the authenticated user's wallet address, the app can track the change in asset values and prompt the user to display the wallet with the updated values.

<img src="/img/an_wallet_send_inputs.png" width="300"/>

**That is all!**  :material-party-popper:

*The web3 app is all set to programmatically watch assets associated with the {{config.extra.arcana.wallet_name}}.*

## What's Next?

After registering the app, configuring authentication providers, integrating the {{config.extra.arcana.sdk_name}} with the app and onboarding users, developers can further add code in the app to sign blockchain transactions, send and receive native, ERC20, or custom tokens, and other [Web3 wallet operations]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/web3ops/index.md).

For a complete list of other JSON RPC calls supported by the {{config.extra.arcana.wallet_name}}, see [JSON-RPC Specifications](https://ethereum.github.io/execution-apis/api-documentation/).

## See also

* [{{config.extra.arcana.wallet_name}} capabilities]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md)
* [Configure {{config.extra.arcana.wallet_name}} visibility]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/config_walletvisibility.md)
* [Sign transactions]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/wallet_sign.md)
* [Send transaction]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/wallet_send.md)
* [Check the wallet account balance]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/wallet_balance.md)
* {% include "./text-snippets/authsdkref_url.md" %}
