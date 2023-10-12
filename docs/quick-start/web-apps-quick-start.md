---
alias: web-apps-quick-start
title: 'Quick Start: Web Apps'
description: 'Get Started quickly using these step-by-step instructions. Register the Web3 app, obtain a ClientID and then integrate the app with the Arcana Auth SDK.'
arcana:
  root_rel_path: ..
---

# Quick Start: Web Apps

!!! note "Already using {{config.extra.arcana.product_name}} product?"
  
      {% include "./text-snippets/warn_latest_sdk_version.md" %}

## Overview

To get started with {{config.extra.arcana.product_name}} product, these are the high level steps for Web3 app developers:

1. Register your app using the {{config.extra.arcana.dashboard_name}} and get a unique {{config.extra.arcana.app_address}} required during integration later. Configure [social providers]({{page.meta.arcana.root_rel_path}}/concepts/authtype/arcanaauth.md#supported-authentication-mechanisms) for [[concept-index-auth-type|authenticating users]], select the built-in {{config.extra.arcana.wallet_name}} UI or build a custom wallet UI.
2. Install and integrate the {{config.extra.arcana.sdk_name}}. Create a new `AuthProvider` using {{config.extra.arcana.app_address}} and choose either the built-in login UI or custom UI for user onboarding.
3. Implement programmatic access to [[index-arcana-wallet|{{config.extra.arcana.wallet_name}} operations]] in your app as per the business logic. Authenticated users can instantly access the {{config.extra.arcana.wallet_name}} UI or a custom UI as configured by the developer.
4. Deploy your app on the Testnet for validation, and then proceed to deploy it on Mainnet.

<img class="an-screenshots" src="/img/an_auth_usage_overview_light.png#only-light" alt="uth Usage Overview"/>
<img class="an-screenshots" src="/img/an_auth_usage_overview_dark.png#only-dark" alt="Auth Usage Overview"/>

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

For more insights, see {% include "./text-snippets/authsdkref_url.md" %}, and the[[index-arcana-wallet|{{config.extra.arcana.wallet_name}} Developer's Guide]].

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

{% include "./text-snippets/sdk_version_info.md" %}