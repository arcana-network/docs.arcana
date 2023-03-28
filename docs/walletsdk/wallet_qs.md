---
slug: /auth_qs
id: idwallet_qs
sidebar_custom_props:
  cardIcon: 🛫
arcana:
  root_rel_path: ..
---

# Quick Start

Developers can use this guide to integrate Web3 apps with the [{{config.extra.arcana.sdk_name}}]({{page.meta.arcana.root_rel_path}}/concepts/authsdk.md) and quickly build the following features:

* [Onboard users]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/index.md) easily by configuring one or more [authentication mechanisms]({{page.meta.arcana.root_rel_path}}/concepts/authtype/arcanaauth.md#supported-authentication-mechanisms)
* [Enable {{config.extra.arcana.wallet_name}}]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md) and allow authenticated users to sign blockchain transactions, manage crypto assets, and [more]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md).

!!! note "Already using Auth?"
  
      {% include "./text-snippets/warn_latest_sdk_version.md" %}

## Overview

Follow these steps to register, configure, integrate, and use the {{config.extra.arcana.sdk_name}} features in Web3 apps:

1. Use the {{config.extra.arcana.dashboard_name}} and register the app; obtain a unique **{{config.extra.arcana.app_address}}**.
2. Set up social providers that will be enabled for onboarding app users.
3. Install and integrate the app with the {{config.extra.arcana.sdk_name}}.
4. Add code in the app for using the built-in plug-and-play UI or build your own login UI that uses user onboarding functions of the {{config.extra.arcana.sdk_name}}. Authenticated users can access the {{config.extra.arcana.wallet_name}}.
5. Add code in the app for programmatically accessing Web3 wallet operations supported by the {{config.extra.arcana.wallet_name}}.

<img class="an-screenshots" src="/img/an_auth_usage_overview_light.png#only-light" alt="uth Usage Overview"/>
<img class="an-screenshots" src="/img/an_auth_usage_overview_dark.png#only-dark" alt="Auth Usage Overview"/>

!!! note "{{config.extra.arcana.sdk_name}}: `{{config.extra.arcana.auth_sdk_pkg_name}}`, `{{config.extra.arcana.react_sdk_pkg_name}}` and `{{config.extra.arcana.wagmi_sdk_pkg_name}}` packages"
  
      To integrate vanilla HTML/CSS/JS apps with `{{config.extra.arcana.sdk_name}}`, install the `{{config.extra.arcana.auth_sdk_pkg_name}}` package and use the `AuthProvider` to access the standard Ethereum provider exposed for blockchain transactions. For details, see [{{config.extra.arcana.sdk_name}} Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md).
      
      Use the **`AuthProvider` wrappers**, namely, `{{config.extra.arcana.react_sdk_pkg_name}}` and `{{config.extra.arcana.wagmi_sdk_pkg_name}}` packages for easily integrating the {{config.extra.arcana.sdk_name}} with Web3 React apps or with the apps that use wallet connectors such as **Wagmi** and **RainbowKit**.  
      
      * To integrate the {{config.extra.arcana.sdk_name}} with a React app, it is recommended that you install and use the `{{config.extra.arcana.auth_sdk_pkg_name}}` as well as the `{{config.extra.arcana.react_sdk_pkg_name}}` packages. For details, see [React App Integration Example]({{page.meta.arcana.root_rel_path}}/tutorials/code_samples/react_code_sample.md).

      * To integrate the {{config.extra.arcana.sdk_name}} with apps that use Wagmi or RainbowKit, use the `ArcanaConnector` by installing and integrating the app with the `{{config.extra.arcana.wagmi_sdk_pkg_name}}` package. You do not need to use the `{{config.extra.arcana.auth_sdk_pkg_name}}` package or instantiate and initialize the `AuthProvider` when using the `{{config.extra.arcana.wagmi_sdk_pkg_name}}` package. For details, see [Wagmi example](https://github.com/arcana-network/auth-wagmi-example) and [RainbowKit Example](https://github.com/arcana-network/auth-wagmi/tree/main/examples/rainbowkit-integration).

## Register & Configure

First, follow the instructions to [register and configure]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) the app using the {{config.extra.arcana.dashboard_name}}. As part of the app registration, a unique value, **{{config.extra.arcana.app_address}}**, is assigned to each app. This is required for integrating the app with the {{config.extra.arcana.sdk_name}}.

During app configuration, developers can enable one or more options to onboard app users.

!!! info "User Onboarding Options"

      Web3 app developers can [configure one or more authentication providers]({{page.meta.arcana.root_rel_path}}/howto/config_auth/index.md) to let app users choose one of the available options and log in.
        
      If the app is registered but none of the supported authentication providers are enabled and configured for user onboarding, then by default, only the [passwordless login]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/wallet_pwdless_login.md) can be used to onboard app users.

## Install {{config.extra.arcana.sdk_name}}

{% include "./code-snippets/auth_install.md" %}

## Integrate App

Follow these instructions and [integrate the app]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) with the  {{config.extra.arcana.sdk_name}}. Manage user experience for signing blockchain transactions with [wallet visibility settings]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/walletuimodes.md). These must be specified during app integration and instantiation of the `AuthProvider`.

After integrating with the {{config.extra.arcana.sdk_name}} app developers can use the `AuthProvider` to access the standard Ethereum Web3 provider interface in the context of an authenticated user. Use `AuthProvider` functions to onboard users, and sign blockchain transactions. For more information, see [{{config.extra.arcana.sdk_name}} Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md) and {% include "./text-snippets/authsdkref_url.md" %}, and the [{{config.extra.arcana.wallet_name}} Developer's Guide]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md)

### Onboard Users

After installing and integrating with the {{config.extra.arcana.sdk_name}}, app developers can add code to onboard the users. There are two ways to build user onboarding in the app:

1. Use the [plug-and-play]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/wallet_plugnplay.md) feature of {{config.extra.arcana.sdk_name}} to instantly access the built-in, default pop-up user login interface. No need to build any user login UI in the app. Simply add code asking the user to log in and call the plug-and-play function of the `AuthProvider`. App users can log in by choosing one of the authentication mechanisms configured by the app developer, displayed in the plug-and-play pop-up UI.

2. Build a custom user login UI for the app and call the appropriate {{config.extra.arcana.sdk_name}} functions for onboarding users via the configured [social providers]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/build_social/index.md) and the [passwordless login option]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/wallet_pwdless_login.md).

### Sign Blockchain Transactions

After onboarding users, developers can add code to use the `AuthProvider` in the app and call standard JSON RPC Web3 wallet functions programmatically in the context of an authenticated user. Enable authenticated users to [sign blockchain transactions]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/wallet_sign.md), send and receive tokens, NFTs, and [more]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md) using the {{config.extra.arcana.wallet_name}}.

### Deploy App

An app integrated with the {{config.extra.arcana.sdk_name}} must be deployed for use only after the developer has completed the following:

* Register and configure the app via the {{config.extra.arcana.dashboard_name}} 
* Integrate the app with the {{config.extra.arcana.sdk_name}} 
* Add code to onboard users 
* Add code to allow authenticated users to sign the blockchain transactions

Developers can choose to deploy one instance of the app (say, under active development) on the {{config.extra.arcana.company_name}} Testnet while simultaneously deploying a stable version of their app (say, one validated on Testnet and ready for users) on the {{config.extra.arcana.company_name}} Mainnet.

By default, when an app is registered, a 'Testnet' configuration profile is associated with the app, and a unique **{{config.extra.arcana.app_address}}** is assigned to this 'Testnet' profile. To deploy your app on the {{config.extra.arcana.company_name}} Mainnet, you need to create a corresponding 'Mainnet' configuration profile and update the {{config.extra.arcana.sdk_name}} integration code to use the **new {{config.extra.arcana.app_address}}** assigned to the app's 'Mainnet' configuration profile. Also, you need to specify the `network` parameter in the `AuthProvider` constructor as the 'mainnet'. For details on how to deploy your app on the {{config.extra.arcana.company_name}} Testnet / Mainnet, see [App Deployment Guide]({{page.meta.arcana.root_rel_path}}/howto/deploy_app.md).

## Examples

Here are some examples of {{config.extra.arcana.sdk_name}} usage:

1. See how to integrate an app with the {{config.extra.arcana.sdk_name}} and create a Web2-like familiar user onboarding experience via [Google]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/build_social/wallet_google_oauth.md), [passwordless login]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/wallet_pwdless_login.md).

2. Manage Web3 user experience for signing blockchain transactions with the {{config.extra.arcana.wallet_name}}:

     - Enable authenticated users [to sign blockchain transactions]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/wallet_sign.md) by setting the {{config.extra.arcana.wallet_name}} visibility parameter while instantiating the `AuthProvider`. 
     - Use pre-configured blockchains or [add other supported blockchain networks programmatically]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/wallet_add_switch_ntwk.md) as per your app requirements. Refer to the  list of [supported blockchain networks]({{page.meta.arcana.root_rel_path}}/state_of_the_ntwk.md#supported-blockchains).
     - Allow authenticated app users to use the {{config.extra.arcana.wallet_name}} and check account balances, send or receive ERC-20, ERC-721, and ERC-1155 tokens, deploy smart contracts, interact with smart contracts, switch networks, manage NFT collections. See the [{{config.extra.arcana.wallet_name}} Developer's Guide]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md).  
  
## Developer & User Guides

  For more details on how users interact with the {{config.extra.arcana.wallet_name}}, see [{{config.extra.arcana.wallet_name}} User Guide]({{page.meta.arcana.root_rel_path}}/howto/wallet_ui.md). 

  Developers can refer to the [{{config.extra.arcana.dashboard_name}} User Guide]({{page.meta.arcana.root_rel_path}}/db/config_dApp_with_db.md) to learn more about how to register and configure the apps. Also, see [{{config.extra.arcana.sdk_name}} Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md) and the {% include "./text-snippets/authsdkref_url.md" %} for various functions offered by the {{config.extra.arcana.sdk_name}}. To programmatically access Web3 wallet operations, see [{{config.extra.arcana.wallet_name}} Developer's Guide]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md).

{% include "./text-snippets/sdk_version_info.md" %}

## See also

* [User Authentication]({{page.meta.arcana.root_rel_path}}/concepts/authtype/arcanaauth.md)
* [Video Tutorials]({{page.meta.arcana.root_rel_path}}/tutorials/videos/an_academy.md)
* [Configuring {{config.extra.arcana.wallet_name}} visibility]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/config_walletvisibility.md)
* [Handling {{config.extra.arcana.sdk_name}} error messages]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_err.md)
* [{{config.extra.arcana.sdk_name}} Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md)
* {% include "./text-snippets/authsdkref_url.md" %}
