---
alias: auth-quick-start
title: 'Arcana Auth Quick Start Guide'
description: 'Get Started quickly using these step-by-step instructions. Register the Web3 app, obtain a ClientID and then integrate the app with the Arcana Auth SDK.'
arcana:
  root_rel_path: .
---

# Quick Start

Developers can use this guide to integrate Web3 apps with the [{{config.extra.arcana.sdk_name}}]({{page.meta.arcana.root_rel_path}}/concepts/authsdk.md) and quickly build the following features:

* [[index-onboard-users|Onboard users]] easily by configuring one or more [authentication mechanisms]({{page.meta.arcana.root_rel_path}}/concepts/authtype/arcanaauth.md#supported-authentication-mechanisms)
* [[index-arcana-wallet|Enable {{config.extra.arcana.wallet_name}}]] and allow authenticated users to sign blockchain transactions, manage crypto assets, and [more]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md).

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
  
      To integrate vanilla HTML/CSS/JS apps with `{{config.extra.arcana.sdk_name}}`, install the `{{config.extra.arcana.auth_sdk_pkg_name}}` package and use the `AuthProvider` to access the standard Ethereum provider exposed for blockchain transactions. For details, see [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]].
      
      Use the **`AuthProvider` wrappers**, namely, `{{config.extra.arcana.react_sdk_pkg_name}}` and `{{config.extra.arcana.wagmi_sdk_pkg_name}}` packages for easily integrating the {{config.extra.arcana.sdk_name}} with Web3 React apps or with the apps that use wallet connectors such as **Wagmi** and **RainbowKit**.  
      
      * To integrate the {{config.extra.arcana.sdk_name}} with a React app, it is recommended that you install and use the `{{config.extra.arcana.auth_sdk_pkg_name}}` as well as the `{{config.extra.arcana.react_sdk_pkg_name}}` packages. For details, see [[react-code-sample|React App Integration Example]].

      * To integrate the {{config.extra.arcana.sdk_name}} with apps that use Wagmi or RainbowKit, use the `ArcanaConnector` by installing and integrating the app with the `{{config.extra.arcana.wagmi_sdk_pkg_name}}` package. You do not need to use the `{{config.extra.arcana.auth_sdk_pkg_name}}` package or instantiate and initialize the `AuthProvider` when using the `{{config.extra.arcana.wagmi_sdk_pkg_name}}` package. For details, see [Wagmi example](https://github.com/arcana-network/auth-wagmi-example) and [RainbowKit Example](https://github.com/arcana-network/auth-wagmi/tree/main/examples/rainbowkit-integration).

## Register & Configure

First, follow the instructions to [[configure-auth|register and configure]] the app using the {{config.extra.arcana.dashboard_name}}. As part of the app registration, a unique value, **{{config.extra.arcana.app_address}}**, is assigned to each app. This is required for integrating the app with the {{config.extra.arcana.sdk_name}}.

During app configuration, developers can enable one or more options to onboard app users.

!!! info "User Onboarding Options"

      Web3 app developers can [[index-configure-auth|configure one or more authentication providers]] to let app users choose one of the available options and log in.
        
      If the app is registered but none of the supported authentication providers are enabled and configured for user onboarding, then by default, only the [[build-password-less-auth|passwordless login]] can be used to onboard app users.

## Install {{config.extra.arcana.sdk_name}}

{% include "./code-snippets/auth_install.md" %}

## Integrate App

Follow these instructions and [[index-integrate-app|integrate the app]] with the  {{config.extra.arcana.sdk_name}}. Manage user experience for signing blockchain transactions with [wallet visibility settings]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/walletuimodes.md). These must be specified during app integration and instantiation of the `AuthProvider`.

After integrating with the {{config.extra.arcana.sdk_name}} app developers can use the `AuthProvider` to access the standard Ethereum Web3 provider interface in the context of an authenticated user. Use `AuthProvider` functions to onboard users, and sign blockchain transactions. For more information, see [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]] and {% include "./text-snippets/authsdkref_url.md" %}, and the [[index-arcana-wallet|{{config.extra.arcana.wallet_name}} Developer's Guide]].

### Onboard Users

After installing and integrating with the {{config.extra.arcana.sdk_name}}, app developers can add code to onboard the users. There are two ways to build user onboarding in the app:

1. Use the [[use-plug-play-auth|plug-and-play ]] feature of {{config.extra.arcana.sdk_name}} to instantly access the built-in, default pop-up user login interface. No need to build any user login UI in the app. Simply add code asking the user to log in and call the plug-and-play function of the `AuthProvider`. App users can log in by choosing one of the authentication mechanisms configured by the app developer, displayed in the plug-and-play pop-up UI.

2. Build a custom user login UI for the app and call the appropriate {{config.extra.arcana.sdk_name}} functions for onboarding users via the configured [[index-build-social-providers|social providers]] and the [[build-password-less-auth|passwordless login option]].

### Sign Blockchain Transactions

After onboarding users, developers can add code to use the `AuthProvider` in the app and call standard JSON RPC Web3 wallet functions programmatically in the context of an authenticated user. Enable authenticated users to [[sign-transaction|sign blockchain transactions]], send and receive tokens, NFTs, and [[index-arcana-wallet|more ]] using the {{config.extra.arcana.wallet_name}}.

### Deploy App

An app integrated with the {{config.extra.arcana.sdk_name}} must be deployed for use only after the developer has completed the following:

* Register and configure the app via the {{config.extra.arcana.dashboard_name}} 
* Integrate the app with the {{config.extra.arcana.sdk_name}} 
* Add code to onboard users 
* Add code to allow authenticated users to sign the blockchain transactions

Developers can choose to deploy one instance of the app (say, under active development) on the {{config.extra.arcana.company_name}} Testnet while simultaneously deploying a stable version of their app (say, one validated on Testnet and ready for users) on the {{config.extra.arcana.company_name}} Mainnet.

By default, when an app is registered, a 'Testnet' configuration profile is associated with the app, and a unique **{{config.extra.arcana.app_address}}** is assigned to this 'Testnet' profile. To deploy your app on the {{config.extra.arcana.company_name}} Mainnet, you need to create a corresponding 'Mainnet' configuration profile and update the {{config.extra.arcana.sdk_name}} integration code to use the **new {{config.extra.arcana.app_address}}** assigned to the app's 'Mainnet' configuration profile. Also, you need to specify the `network` parameter in the `AuthProvider` constructor as the 'mainnet'. For details on how to deploy your app on the {{config.extra.arcana.company_name}} Testnet / Mainnet, see [[deploy-app|App Deployment Guide]].

## Examples

Here are some examples of {{config.extra.arcana.sdk_name}} usage:

1. See how to integrate an app with the {{config.extra.arcana.sdk_name}} and create a Web2-like familiar user onboarding experience via [[google-social-auth|Google ]], [[build-password-less-auth|passwordless login]].

2. Manage Web3 user experience for signing blockchain transactions with the {{config.extra.arcana.wallet_name}}:

     - Enable authenticated users [[sign-transaction|to sign blockchain transactions]] by setting the {{config.extra.arcana.wallet_name}} visibility parameter while instantiating the `AuthProvider`. 
     - Use pre-configured blockchains or [[add-switch-network|add other supported blockchain networks programmatically]] as per your app requirements. Refer to the list of [[state-of-the-arcana-auth#supported-blockchains|supported blockchain networks]].
     - Allow authenticated app users to use the {{config.extra.arcana.wallet_name}} and check account balances, send or receive ERC-20, ERC-721, and ERC-1155 tokens, deploy smart contracts, interact with smart contracts, switch networks, manage NFTs. See the [[index-arcana-wallet|{{config.extra.arcana.wallet_name}} Developer's Guide]].  
  
## Developer & User Guides

  For more details on how users interact with the {{config.extra.arcana.wallet_name}}, see [[arcana-wallet-user-guide|{{config.extra.arcana.wallet_name}} User Guide]]. 

  Developers can refer to the [[dashboard-user-guide#configure-mainnet-keyspace|{{config.extra.arcana.dashboard_name}} User Guide]] to learn more about how to register and configure the apps. Also, see [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]] and the {% include "./text-snippets/authsdkref_url.md" %} for various functions offered by the {{config.extra.arcana.sdk_name}}. To programmatically access Web3 wallet operations, see [[index-arcana-wallet|{{config.extra.arcana.wallet_name}} Developer's Guide]].

{% include "./text-snippets/sdk_version_info.md" %}

## See also

* [User Authentication]({{page.meta.arcana.root_rel_path}}/concepts/authtype/arcanaauth.md)
* [[index-video-tutorials|Video Tutorials]]
* [[configure-wallet-visibility|Configuring {{config.extra.arcana.wallet_name}} visibility]]
* [[web-auth-error-msg|Handling {{config.extra.arcana.sdk_name}} error messages]]
* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]
* {% include "./text-snippets/authsdkref_url.md" %}
