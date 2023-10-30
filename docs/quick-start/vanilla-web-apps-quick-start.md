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

To enable Arcana Auth in a vanilla HTML/CSS/JS app, you need to first use the {{config.extra.arcana.dashboard_name}} to register the app and configure usage settings. After that you must install and integrate the {{config.extra.arcana.sdk_name}}. Once integrated, you can add code in your app and call requisite functions to onboard users and enable them to sign blockchain transactions. Lastly, the app must be deployed on the Testnet/Mainnet.

<img class="an-screenshots" src="/img/an_auth_usage_overview_light.png#only-light" alt="uth Usage Overview"/>
<img class="an-screenshots" src="/img/an_auth_usage_overview_dark.png#only-dark" alt="Auth Usage Overview"/>

## Step 1: Register & Configure App

Log into the {{config.extra.arcana.dashboard_name}}. Register your app by creating a new app entry. Save the unique **{{config.extra.arcana.app_address}}** assigned to the app after registration. It will be required when you integrate the app with the {{config.extra.arcana.sdk_name}}. Also, configure the {{config.extra.arcana.product_name}} product usage by specifying branding, setting up [[concept-index-auth-type|authentication providers]], managing blockchains displayed in the wallet, and other settings as required.

See [[configure-auth|how to register and configure app]] using the {{config.extra.arcana.dashboard_name}} for details.

!!! info "Password-less Option"

      This option to onboard users is always enabled by default. If the app is registered and no authentication provider is configured through the dashboard, only the passwordless login option is available for onboarding users.

After registering and configuring the app, install the SDK.

## Step 2: Install SDK

For HTML/CSS/JS app, install the [`{{config.extra.arcana.auth_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth) package.

{% include "./code-snippets/auth_install.md" %}

Next, integrate the app with the {{config.extra.arcana.sdk_name}} by instantiating and calling the requisite `AuthProvider` functions.

## Step 3: Integrate App

In the app, add code to import `{{config.extra.arcana.auth_sdk_pkg_name}}` and create a 'new' `AuthProvider`.

{% include "./code-snippets/import_auth.md" %}

At the time of creating a new `AuthProvider`, specify the unique **{{config.extra.arcana.app_address}}** obtained earlier during to the app registration. 

{% include "./code-snippets/new_auth.md" %}

Initialize the newly instantiated `AuthProvider`.

{% include "./code-snippets/init_auth.md" %}

!!! caution "Initialize First!"

    The app must use wait until the `init` call is complete before invoking any of the other {{config.extra.arcana.sdk_name}} functions such as onboarding users by triggering user login, obtaining the standard Ethereum provider, adding/switching networks in the wallet, etc.

Besides specifying the required {{config.extra.arcana.app_address}}, you can optionally customize the following settings in the `AuthProvider` constructor:

---
* `alwaysVisible`: [[concept-wallet-visibility|{{config.extra.arcana.wallet_name}} visibility mode]] - always visible in the app context or only if a blockchain transaction is triggered by the app
* `chainConfig`:
      - `chainId`: chain identifier for the active chain in the wallet
      - `rpcUrl`: RPC Url for the specified chain identifier
* `position`:  wallet position within the app context - `left`|`right`
* `theme`: wallet theme - `light`|`dark`
* `setWindowProvider`: set `window.ethereum` in the app context with the standard EIP-1193 Ethereum provider value
* `connectOptions`: built-in login UI compact mode - `true`|`false`
---

See [`AuthProvider` constructor parameters](https://authsdk-ref-guide.netlify.app/interfaces/constructorparams) for details.

After successful initialization, you can call any `AuthProvider` function. For example, the code below shows how to access the standard EIP-1193 Ethereum provider:

{% include "./code-snippets/provider.md" %}

Next, onboard users in your app.

## Step 4: Onboard Users

You have two options to onboard users:

* Enable [[concept-plug-and-play-auth|plug-and-play authentication]] through the built-in login UI
* Use [[concept-custom-login-ui|custom login UI]]

The built-in login UI is enabled by default. To use it, just add a single line of code, call the `connect` function of the `AuthProvider`.

{% include "./code-snippets/auth_plugnplay.md" %}

This will will bring up the login modal displaying the configured social providers. Passwordless login option is enabled by default.

The figure below shows the built-in login UI plug-and-play pop-up authentication screen for a test app. In this example the app is configured to use Google as the social provider for authentication.

![Plug-and-Play Login UI](/img/an_plug_n_play_auth.png){.an-screenshots-noeffects width="30%"}

You can choose to use a **compact** form of the built-in login UI modal instead of the regular one displayed above. To enable compact login UI modal, you must instantiate the `AuthProvider` with `compact` parameter of `connectOptions` set to `true` as shown below:

{% include "./code-snippets/auth_plugnplay_compact.md" %}

<img src="/img/relnote_1.0.8_compact_login.png" alt="Compact UI login mode" class="an-screenshots-noeffects"/>

!!! warning "No plug-and-play support for Firebase authentication."

      {% include "./text-snippets/warn_firebase_no_pnp.md" %}

Instead of using the built-in plug-and-play login UI, to onboard users via a custom login UI, simply use the following functions instead of `connect`. Note, you need to call different functions depending upon the [[concept-index-auth-type|type of the authentication providers]] that you wish to enable for user onboarding:

* Social Providers: `loginWithSocial`
* Custom IAM Providers: `loginWithBearer`
* Passwordless Login:  `loginWithLink`

For sample code and details on how to onboard users in a HTML/CSS/JS app via a custom login UI, see [[index-custom-ui-onboard-users|how to enable configured providers when using a custom login UI]].

!!! tip "Arcana JWT Token"

      {% include "./text-snippets/jwt_token.md" %}

Next, enable authenticated users to sign blockchain transactions.

## Step 5: Enable Wallet Operations

After adding code to onboard users, you can use the standard JSON RPC Web3 wallet functions supported by the `AuthProvider` to issue blockchain transactions. The embedded, non-custodial {{config.extra.arcana.wallet_name}} is available in the app's context right after a user logs in. It allows authenticated users to [[sign-transaction|sign blockchain transactions]], send and receive tokens, NFTs, and [[index-arcana-wallet| more]].

The {{config.extra.arcana.wallet_name}} appears in a compact form within the app. Clicking on the wallet icon displays the maximized wallet UI.

<img src="/img/an_wallet_min_light_vanilla.gif#only-dark" width="50%"/><img src="/img/an_wallet_min_dark_vanilla.gif#only-light" width="50%"/> 

By default, the built-in {{config.extra.arcana.wallet_name}} UI is displayed in the app's context. It can be replaced by a custom wallet UI if required. The decision to choose a custom wallet UI must be made at the time of registering the app. When creating a new app, specify the **Wallet UI Mode** setting as `custom UI` instead of the default `Arcana UI`. See [[custom-wallet-ui|how to enable custom wallet UI]] for details.

Refer to the {% include "./text-snippets/authsdkref_url.md" %}, and the [[index-arcana-wallet|{{config.extra.arcana.wallet_name}} Developer's Guide]].

After enabling the wallet, deploy the app.

## Step 6: Deploy App

When an app is registered, by default, a 'Testnet' configuration profile is associated with every app, and a unique **{{config.extra.arcana.app_address}}** is assigned to this 'Testnet' profile. So the app can be deployed on the Testnet right away.

However, to deploy your app on the {{config.extra.arcana.company_name}} Mainnet, you need to first create a corresponding 'Mainnet' configuration profile. Also, you must update the {{config.extra.arcana.sdk_name}} integration code in your app to use the **new {{config.extra.arcana.app_address}}** assigned to the app's 'Mainnet' configuration profile before deploying it on the Mainnet.

You can deploy an app instance (say, one under active development) on the Testnet while simultaneously deploying a stable version of their app (say, one validated on Testnet and ready for users) on the Mainnet.

See [[deploy-app|App Deployment Guide]] for details.

!!! tip "Testnet -> Mainnet"

      If you have deployed your Web3 app on Arcana Testnet and are looking to migrate it on the Mainnet, see [[migrate-app-testnet-mainnet|Testnet > Mainnet Migration Guide]].

**That is all!** :material-party-popper:
**Your HTML/CSS/JS app is now powered by {{config.extra.arcana.product_name}}!!!**

## Examples

Here are some examples of {{config.extra.arcana.sdk_name}} integration with vanilla HTML/CSS/JS app.

[[google-social-auth|Onboard Users with Google]]{ .md-button }

[[configure-wallet-visibility|Manage blockchain signing user experience]]{ .md-button }

[[add-switch-network|Add or Switch Blockchain Networks]]{ .md-button }

[[sign-transaction|Sign Blockchain Transactions]]{ .md-button }

[[index-arcana-wallet|{{config.extra.arcana.wallet_name}} Developer's Guide]]{ .md-button }
  
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