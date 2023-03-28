---
slug: /configwalletmodes
id: idconfigwalletmodes
sidebar_custom_props:
  cardIcon: ⚒️
arcana:
  root_rel_path: ../..
---

# Configure Wallet Visibility

In this tutorial, you will learn how web3 app developers can configure the {{config.extra.arcana.wallet_name}} user experience for signing blockchain transactions. 

Developers can choose to configure the [{{config.extra.arcana.wallet_name}} visibility]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/walletuimodes.md) such that once the user is authenticated, the {{config.extra.arcana.wallet_name}} is instantly displayed in the context of the app. Or they can configure the {{config.extra.arcana.wallet_name}} to show up only when a blockchain transaction is triggered.

## Prerequisites

* Make sure you can access the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}

* Use the [{{config.extra.arcana.dashboard_name}}]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md) to [register and configure the app]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md). Optionally, [configure authentication providers]({{page.meta.arcana.root_rel_path}}/howto/config_auth/index.md).

## Steps

*Managing {{config.extra.arcana.wallet_name}} visibility in a Web3 app that is integrated with the {{config.extra.arcana.sdk_name}} is simple!*

### Step1: Integrate App 

Follow the instructions to [integrate the app]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) with the [{{config.extra.arcana.sdk_name}}]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md). During `AuthProvider` instantiation, make sure you set the `alwaysVisible` input parameter to one of the following values as per the required app user experience for signing blockchain transactions:

* `alwaysVisible = true`(default): The {{config.extra.arcana.wallet_name}} UI is always visible once the user logs in.
* `alwaysVisible = false`: The {{config.extra.arcana.wallet_name}} UI is displayed only when a blockchain transaction requires the user's approval.

Besides the {{config.extra.arcana.wallet_name}} visibility setting, app developers can also tweak other configuration parameters for required user experience:

* `position`: location of the {{config.extra.arcana.wallet_name}} on the application screen.  (default = right)
* `theme`: light or dark theme (default = dark)
* `network`: choose 'testnet' or 'mainnet' (default = 'testnet')
* `chainConfig`: the chainID and RPC URL of the blockchain network selected as the default when the {{config.extra.arcana.wallet_name}} UI shows up

For a complete list of parameters see [{{config.extra.arcana.sdk_name}} Reference Guide](https://authsdk-ref-guide.netlify.app/interfaces/constructorparams).

Here is some sample code that shows how to an app can integrate with the {{config.extra.arcana.sdk_name}} and specify the {{config.extra.arcana.wallet_name}} configuration so that the {{config.extra.arcana.wallet_name}} shows up only when a blockchain transactions is triggered and requires user's approval.

{% include "./code-snippets/auth_install.md" %}
{% include "./code-snippets/import_auth.md" %}
{% include "./code-snippets/new_auth.md" %}
{% include "./code-snippets/init_auth.md" %}

**That's all!** :material-party-popper:

This is how the wallet shows up when configured with the specified settings above in the context of an app:

![Light Theme left-aligned wallet UI](/img/an_wallet_left_light_theme.png){.an-screenshots}

The Web3 app is successfully integrated with the {{config.extra.arcana.sdk_name}} with the requisite the {{config.extra.arcana.wallet_name}} visibility setting to manage the user blockchain signing experience.

## What's Next?

After integrating an app with the {{config.extra.arcana.sdk_name}}, with the requisite wallet visibility setting, the developers can add code to [onboard users]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/index.md) and allow the authenticated users to sign blockchain transactions, and manage crypto assets using the [{{config.extra.arcana.wallet_name}}]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md) UI. Developers can also add code to call other [Web3 wallet operations]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/web3ops/index.md) programmatically in the app.

## See also

* [{{config.extra.arcana.sdk_name}} Errors]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_err.md)
* [{{config.extra.arcana.sdk_name}} Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md)
* {% include "./text-snippets/authsdkref_url.md" %}
