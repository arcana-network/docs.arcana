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

You can enable Arcana Auth in a vanilla HTML/CSS/JS app easily by first using the {{config.extra.arcana.dashboard_name}} to get a unique {{config.extra.arcana.app_address}} and using this {{config.extra.arcana.app_address}} while integrating the app with the {{config.extra.arcana.sdk_name}}. 

Before installing and integrating with the {{config.extra.arcana.sdk_name}}, configure {{config.extra.arcana.product_name}} usage through the {{config.extra.arcana.dashboard_name}} and select social providers for user onboarding, preconfigured blockchains displayed in the wallet, transaction signing experience and more. Lastly, deploy the app on Testnet and after validation, replicate the Testnet profile or create a new Mainnet profile to deploy the app on the Mainnet.

<img class="an-screenshots" src="/img/an_auth_usage_overview_light.png#only-light" alt="uth Usage Overview"/>
<img class="an-screenshots" src="/img/an_auth_usage_overview_dark.png#only-dark" alt="Auth Usage Overview"/>

## Step 1: Register & Configure App

Log into the {{config.extra.arcana.dashboard_name}} and register your app by creating a new app entry and obtaining a unique {{config.extra.arcana.app_address}}. Save it for use later during app integration with the {{config.extra.arcana.sdk_name}}. Configure the {{config.extra.arcana.product_name}} product usage by specifying branding, setting up [[concept-index-auth-type|authentication providers]], managing chains displayed in the wallet, and other optional customizations required as per your app.

After [[configure-auth|registering and configuring]] the app through the {{config.extra.arcana.dashboard_name}}, proceed to installing the SDK.

!!! info "Password-less Option"

      This option to onboard users is always enabled by default. If the app is registered and no authentication provider is configured through the dashboard, only the passwordless login option is available for onboarding users.

## Step 2: Install SDK

For HTML/CSS/JS app, you need to simply install the [`{{auth_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth) `npm` package.

{% include "./code-snippets/auth_install.md" %}

Next, integrate the app with the {{config.extra.arcana.sdk_name}} by instantiating and calling appropriate `AuthProvider` functions.

## Step 3: Integrate App

In the app, add code to import `{{config.extra.arcana.auth_sdk_pkg_name}}` and create a 'new' `AuthProvider`.

{% include "./code-snippets/import_auth.md" %}

At the time of creating a new `AuthProvider`, specify the unique **{{config.extra.arcana.app_address}}** obtained earlier during to the app registration. Besides this, you can optionally customize the following settings:

* `alwaysVisible`: [[concept-wallet-visibility|{{config.extra.arcana.wallet_name}} visibility mode]] - always visible in the app context or only if a blockchain transaction is triggered by the app
* `chainConfig`: 
   - `chainId`: chain identifier for the active chain in the wallet
   - `rpcUrl`: RPC Url for the specified chain identifier
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

After successful initialization, you can use any `AuthProvider` function. You can also access the standard EIP-1193 Ethereum provider as shown in the example below:

{% include "./code-snippets/provider.md" %}

Next, you can add code to onboard users.

## Step 4: Onboard Users

You have two options to onboard users:

* [[concept-plug-and-play-auth|Plug-and-play authentication]] using the built-in login UI
* [[concept-custom-login-ui|Custom login UI]]

To onboard users through the built-in login UI, just add a single line of code. Call the `connect` function of the `AuthProvider`.

{% include "./code-snippets/auth_plugnplay.md" %}

This will will bring up the login modal displaying with the configured social providers. Passwordless login option is enabled by default.

The figure below shows the built-in login UI plug-and-play pop-up authentication screen for a test app. In this example the app is configured to use Google as the social provider for authentication.

![Plug-and-Play Login UI](/img/an_plug_n_play_auth.png){.an-screenshots-noeffects width="30%"}

!!! tip Compact Login UI

      There is also a **compact** form of the built-in login UI modal available to onboard users. It is not enabled by default. To enable, create the `AuthProvider` with `compact` parameter of `connectOptions` set to `true` as shown below:

            {% include "./code-snippets/auth_plugnplay_compact.md" %}

!!! warning "No plug-and-play support for Firebase authentication."

      {% include "./text-snippets/warn_firebase_no_pnp.md" %}

Instead of using the built-in plug-and-play login UI, you can choose custom login UI option in the app to onboard users. Simply use the following functions instead of `connect`. Note, there are different functions to call depending upon the [[concept-index-auth-typetype of the authentication provider]]:

* Social Providers: `loginWithSocial`
* Custom IAM Providers: `loginWithBearer`
* Passwordless Login:  `loginWithLink`

For sample code and details on how to onboard users in a HTML/CSS/JS app via a custom login UI, see [[index-custom-ui-onboard-users|how to enable configured providers when using a custom login UI]].

Next, let us take a look at how to enable authenticated users to sign blockchain transactions in apps integrated with the {{config.extra.arcana.sdk_name}}.

## Step 5: Enable Wallet Operations

After onboarding users, add code to use the `AuthProvider` and call standard JSON RPC Web3 wallet functions programmatically. The embedded, non-custodial {{config.extra.arcana.wallet_name}} is available in the app's context right after a user logs in. It allows authenticated users to [[sign-transaction|sign blockchain transactions]], send and receive tokens, NFTs, and [[index-arcana-wallet| more]].

By default, the built-in {{config.extra.arcana.wallet_name}} UI is displayed. The decision to choose a custom wallet UI must be made at the time of registering the app. When creating a new app, specify the **Wallet UI Mode** setting as `custom UI` instead of the default `Arcana UI`. See [[custom-wallet-ui|how to enable custom wallet UI]] for details.

For details, see {% include "./text-snippets/authsdkref_url.md" %}, and the [[index-arcana-wallet|{{config.extra.arcana.wallet_name}} Developer's Guide]].

Next, deploy the app on Testnet, validate and then deploy on the Mainnet.

## Step 6: Deploy App

When an app is registered, by default, a 'Testnet' configuration profile is associated with every app, and a unique **{{config.extra.arcana.app_address}}** is assigned to this 'Testnet' profile. To deploy your app on the {{config.extra.arcana.company_name}} Mainnet, you need to create a corresponding 'Mainnet' configuration profile. Also, you must update the {{config.extra.arcana.sdk_name}} integration code in your app to use the **new {{config.extra.arcana.app_address}}** assigned to the app's 'Mainnet' configuration profile before deploying it on the Mainnet.

You can deploy an app instance (say, one under active development) on the Testnet while simultaneously deploying a stable version of their app (say, one validated on Testnet and ready for users) on the Mainnet.

See [[deploy-app|App Deployment Guide]] for details.

!!! tip "Testnet -> Mainnet"

      If you have deployed your Web3 app on Arcana Testnet and are looking to migrate it on the Mainnet, see [[migrate-app-testnet-mainnet|Testnet > Mainnet Migration Guide]].

That is all! :material-party-popper:
Your HTML/CSS/JS app is now powered by {{config.extra.arcana.prodcut_name}}!!!

## Examples

Here are some examples of {{config.extra.arcana.sdk_name}} integration with vanilla HTML/CSS/JS app.

??? abstract "Enable Google Login"

      Integrate a simple HTML/CSS/JS app and [[google-social-auth|onboard users via Google]]. 

??? abstract "Manage Blockchain Signing Experience"

      Integrate app and [[sign-transaction|Customize the user experience for signing blockchain transactions]] via the built-in {{config.extra.arcana.wallet_name}} UI.

??? abstract "Add/Switch Blockchain Networks"

      Integrate app and [[add-switch-network|customize the pre-configured list of blockchain networks]] available to Web3 app users or change the default network in the built-in {{config.extra.arcana.wallet_name}} UI. See [[state-of-the-arcana-auth#supported-blockchains|supported blockchain networks for reference]].

??? abstract "Enable built-in {{config.extra.arcana.wallet_name}} UI"

      Follow instructions in the [[index-arcana-wallet|{{config.extra.arcana.wallet_name}} Developer's Guide]] to enable authenticated app users to instantly access the built-in, {{config.extra.arcana.wallet_name}} UI to check account balance, send or receive ERC-20, ERC-721, and ERC-1155 tokens, deploy smart contracts, interact with smart contracts, switch networks, manage NFTs and more.
  
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