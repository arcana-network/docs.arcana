---
alias: vanilla-web-apps-quick-start
title: 'Quick Start: HTML/CSS/JS Apps'
description: 'Get Started quickly with the Arcana Auth product by using these step-by-step instructions for vanilla HTML/CSS/JS apps. Use Arcana Developer Dashboard to register the app, get a client ID and use this client ID to integrate the app with the Arcana Auth SDK.'
arcana:
  root_rel_path: ..
---

# Quick Start: HTML/CSS/JS Apps

!!! note "Already using {{config.extra.arcana.sdk_name}}?"
  
      {% include "./text-snippets/warn_latest_sdk_version.md" %}

## Overview

You can enable Arcana Auth in a vanilla HTML/CSS/JS app easily by first using the {{config.extra.arcana.dashboard_name}} to get a unique {{config.extra.arcana.app_address}} and using this {{config.extra.arcana.app_address}} while integrating the app with the {{config.extra.arcana.sdk_name}}. Before installing and integrating with the {{config.extra.arcana.sdk_name}}, configure {{config.extra.arcana.product_name}} usage through the {{config.extra.arcana.dashboard_name}} and select social providers for user onboarding, preconfigured blockchains displayed in the wallet, transaction signing experience and more. Lastly, deploy the app on Testnet and after validation, replicate the Testnet profile or create a new Mainnet profile to deploy the app on the Mainnet.

<img class="an-screenshots" src="/img/an_auth_usage_overview_light.png#only-light" alt="uth Usage Overview"/>
<img class="an-screenshots" src="/img/an_auth_usage_overview_dark.png#only-dark" alt="Auth Usage Overview"/>

## Step 1: Register & Configure App

Log into the {{config.extra.arcana.dashboard_name}} and register your app by creating a new app entry and obtaining a unique {{config.extra.arcana.app_address}}. Save it for use later during app integration with the {{config.extra.arcana.sdk_name}}. Configure the {{config.extra.arcana.product_name}} product usage by specifying branding, social login provider settings, chain management, wallet visibility and other customizations required for your app.

After [[configure-auth|registering and configuring]] the app through the {{config.extra.arcana.dashboard_name}}, proceed to installing the SDK.

!!! info "Password-less Option"

      If the app is registered without enabling and configuring any supported authentication providers, only the passwordless login option is available by default.

## Step 2: Install SDK

For HTML/CSS/JS app, you need to simply install the [`{{auth_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth) `npm` package.

{% include "./code-snippets/auth_install.md" %}

Next, integrate the app with the {{config.extra.arcana.sdk_name}} by instantiating and using the `AuthProvider`.

## Step 3: Integrate App

In the app, add code to import `{{config.extra.arcana.auth_sdk_pkg_name}}` and create a 'new' `AuthProvider`.

{% include "./code-snippets/import_auth.md" %}

At the time of creating a new `AuthProvider`, specify the unique **{{config.extra.arcana.app_address}}** obtained earlier during to the app registration. Besides this, you can optionally customize the following settings when creating a new `AuthProvider`:

* `alwaysVisible`: [[concept-wallet-visibility|{{config.extra.arcana.wallet_name}} visibility mode]]
* `connectOptions`: 
* `position`:  wallet position within the app context - `left`|`right`
* `theme`: wallet theme - `light`|`dark`
* `setWindowProvider`: set `window.ethereum` in the app context with the standard EIP-1193 Ethereum provider value
* `connectOptions`: built-in login UI compact mode - `true`|`false`

See [`AuthProvider` constructor parameters](https://authsdk-ref-guide.netlify.app/interfaces/constructorparams) for details.

{% include "./code-snippets/new_auth.md" %}

Initialize the newly instantiated `AuthProvider`.

{% include "./code-snippets/init_auth.md" %}

!!! caution "Initialize First!"

    The app must use wait until the `init` call is complete before invoking any of the other {{config.extra.arcana.sdk_name}} functions such as onboarding users by triggering user login, obtaining the standard Ethereum provider, adding/switching networks in the wallet, etc.

After successful initialization, you can use any `AuthProvider` functions in the app code as shown in the example below:

{% include "./code-snippets/provider.md" %}

After integrating with the {{config.extra.arcana.sdk_name}} add code to onboard users.

## Step 4: Onboard Users

## Step 5: Enable Wallet Operations

## Step 6: Deploy App


## Steps

### Register & Configure

First, [[configure-auth|register and configure]] the app using the {{config.extra.arcana.dashboard_name}}. A unique **{{config.extra.arcana.app_address}}**, is assigned to each newly registered app. This is required when integrating the app with the {{config.extra.arcana.sdk_name}}.

Then [[index-configure-auth|configure one or more authentication providers]] for onboarding app users. For configuration setting details, see [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]. 

!!! info "Password-less Option"

      If the app is registered without enabling and configuring any supported authentication providers, only the passwordless login option is available by default.

### Install {{config.extra.arcana.sdk_name}}

{{config.extra.arcana.sdk_name}} supports diverse Web3 apps. Depending upon the type of Web3 app, developers may need to install one or more {{config.extra.arcana.product_name}} packages and integrate the app. See [[sdk-installation| SDK installation guide]] for more details.

### Integrate App

Follow the integration instructions [[index-integrate-app|as per the app type]] and manage blockchain signing user experience with [[concept-wallet-visibility|wallet visibility settings]] during instantiation of the `AuthProvider`.

After integrating with the {{config.extra.arcana.sdk_name}} app developers can use the `AuthProvider` to access the standard Ethereum Web3 provider interface in the context of an authenticated user. Use `AuthProvider` functions to onboard users, and sign blockchain transactions. 

=== "Onboard Users"

    After installing and integrating with the {{config.extra.arcana.sdk_name}}, app developers can add code to [[index-onboard-users|onboard the users]] via one of the two available methods:

    1. Use the [[concept-plug-and-play-auth|plug-and-play login UI]] feature to instantly access the built-in, default user login UI provided by the {{config.extra.arcana.sdk_name}}. Simply [[use-plug-play-auth|call `connect` method of the `AuthProvider`]] to bring up the plug-and-play login UI that displays all the authentication mechanisms configured by the app developer. User can select one and onboard the app.

    2. Build a [[index-custom-ui-onboard-users|custom user login UI]] for the app and call the appropriate {{config.extra.arcana.sdk_name}} functions for onboarding users via the configured social providers and the passwordless login option.

=== "Sign Blockchain Transactions"

    After onboarding users, developers can add code to use the `AuthProvider` in the app and call standard JSON RPC Web3 wallet functions programmatically in the context of an authenticated user. Enable authenticated users to [[sign-transaction|sign blockchain transactions]], send and receive tokens, NFTs, and [[index-arcana-wallet|more ]] using the {{config.extra.arcana.wallet_name}}.

For more insights, see {% include "./text-snippets/authsdkref_url.md" %}, and the [[index-arcana-wallet|{{config.extra.arcana.wallet_name}} Developer's Guide]].

### Deploy App

An app integrated with the {{config.extra.arcana.sdk_name}} can be deployed for use only **after** the developer has completed these steps:

* Register and configure the app via the {{config.extra.arcana.dashboard_name}} 
* Integrate the app with the {{config.extra.arcana.sdk_name}} 
* Implement code to onboard users and interact with necessary contracts based on the app's business logic.

Developers can choose to deploy one instance of the app (say, under active development) on the {{config.extra.arcana.company_name}} Testnet while simultaneously deploying a stable version of their app (say, one validated on Testnet and ready for users) on the {{config.extra.arcana.company_name}} Mainnet.

By default, when an app is registered, a 'Testnet' configuration profile is associated with the app, and a unique **{{config.extra.arcana.app_address}}** is assigned to this 'Testnet' profile. To deploy your app on the {{config.extra.arcana.company_name}} Mainnet, you need to create a corresponding 'Mainnet' configuration profile and update the {{config.extra.arcana.sdk_name}} integration code to use the **new {{config.extra.arcana.app_address}}** assigned to the app's 'Mainnet' configuration profile. For details on how to deploy your app on the {{config.extra.arcana.company_name}} Testnet / Mainnet, see [[deploy-app|App Deployment Guide]].

!!! tip "Testnet -> Mainnet"

      If you have deployed your Web3 app on Arcana Testnet and are looking to migrate it on the Mainnet, see [[migrate-app-testnet-mainnet|Testnet > Mainnet Migration Guide]].

## Examples

Here are some examples of {{config.extra.arcana.sdk_name}} usage.

??? abstract "Enable Google Login"

      Follow the instructions [[google-social-auth|in this guide]] and allow Web3 app users to log in via Google. 

??? abstract "Manage Blockchain Signing Experience"

      Follow the instructions [[sign-transaction|in this guide]] to customize the user experience when signing blockchain transactions using the built-in {{config.extra.arcana.wallet_name}} UI.

??? abstract "Add/Switch Blockchain Networks"

      Follow the instructions in this guide to [[add-switch-network|customize the pre-configured list of blockchain networks]] available to Web3 app users or change the default network when the embedded wallet UI shows up. Refer to the list of [[state-of-the-arcana-auth#supported-blockchains|supported blockchain networks]].

??? abstract "Enable built-in  {{config.extra.arcana.wallet_name}} UI"

      Follow instructions in the [[index-arcana-wallet|{{config.extra.arcana.wallet_name}} Developer's Guide]] to enable authenticated app users to instantly access the wallet UI to check account balance, send or receive ERC-20, ERC-721, and ERC-1155 tokens, deploy smart contracts, interact with smart contracts, switch networks, manage NFTs and more.
  
## See Also

=== "Developer Guides"

    * [[dashboard-user-guide|{{config.extra.arcana.dashboard_name}} User Guide]]
    * [[configure-wallet-visibility|Configuring {{config.extra.arcana.wallet_name}} visibility]]
    * [[dashboard-user-guide#configure-mainnet-keyspace|Using Global vs. Local Keys]]
    * [[configure-gasless|Enabling Gasless Operations in an App]]
    * [[index-video-tutorials|Video Tutorials]]
    * [User Authentication]({{page.meta.arcana.root_rel_path}}/concepts/authtype/arcanaauth.md)
    * [[index-arcana-wallet|Developer's Guide for {{config.extra.arcana.wallet_name}}]]
    * [[web-auth-error-msg|Handling {{config.extra.arcana.sdk_name}} error messages]]
    * [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]
    * {% include "./text-snippets/authsdkref_url.md" %}

=== "User Guides"

    * [[arcana-wallet-user-guide|{{config.extra.arcana.wallet_name}} User Guide]].
    * [[mfa-user-guide|MFA Setup Guide]]

{% include "./text-snippets/prod_version_info.md" %}