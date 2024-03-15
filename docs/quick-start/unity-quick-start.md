---
alias: unity-quick-start
title: 'Quick Start: Unity Apps'
description: 'Get Started quickly with Unity gaming apps using these step-by-step instructions. Register the Unity app, obtain a ClientID, and then integrate the app with the Arcana Auth SDK.'
arcana:
  root_rel_path: ..
---

# Quick Start: Unity Apps

{% include "./text-snippets/warn_early_preview_rel.md" %}

The latest {{config.extra.arcana.gaming_sdk_name}} version is: {{config.extra.arcana.latest_auth_unity_sdk_version}}. 

Web3 Unity gaming app can integrate with the {{config.extra.arcana.gaming_sdk_name}} and onboard users via social login. The authenticated users can access the Arcana wallet instantly within the app context and sign blockchain transactions.

<img class="an-screenshots" src="/img/an_auth_usage_overview_light.png#only-light" alt="Auth Usage Overview"/>
<img class="an-screenshots" src="/img/an_auth_usage_overview_dark.png#only-dark" alt="Auth Usage Overview"/>

## Register & Configure

Begin by [[configure-auth|registering and configuring]] the {{config.extra.arcana.gaming_sdk_name}} usage via the {{config.extra.arcana.dashboard_name}}. Note the unique value, **{{config.extra.arcana.app_address}}**, assigned to the app. It is used later for app integration.

See [[index-configure-auth|how to configure user onboarding and gasless transaction settings {{config.extra.arcana.gaming_sdk_name}}]].

## Integrate Unity App

Make sure you have registered the app and obtained an {{config.extra.arcana.app_address}} for integrating the app with the {{config.extra.arcana.gaming_sdk_name}}:

### Step 1: Set up Unity, Install Auth SDK

{% include "./text-snippets/auth_unity_settings.md" %}

### Step 2: Initialize Auth SDK

{% include "./code-snippets/auth_unity_init.md" %}

### Step 3: Onboard Users

First, call `LoginWithSocial` or `LoginWithOTP` to onboard the user. Choose one of the [[state-of-the-arcana-auth#user-onboarding-options|supported user onboarding options]] such as Google, Steam, etc. 

{% include "./code-snippets/auth_unity_onboard.md" %}

### Step 4: Enable Web3 Wallet Operations

Next, call `Request` to make Web3 Wallet operation requests from within the app context. 

{% include "./code-snippets/auth_unity_web3_wallet_ops.md" %}

After integrating the Unity app with the {{config.extra.arcana.gaming_sdk_name}}, adding the required code to onboard users and allowing Web3 wallet operations, the app is ready to deploy on Testnet. 

## Deploy App

An app integrated with the {{config.extra.arcana.gaming_sdk_name}} can be deployed for use only **after** the developer has completed these steps:

* Register and configure the app via the {{config.extra.arcana.dashboard_name}} 
* Integrate the app with the {{config.extra.arcana.gaming_sdk_name}} 
* Add code to onboard users and call Web3 wallet operations that require signing the blockchain transactions

Developers can deploy an app instance under active development on the {{config.extra.arcana.company_name}} Testnet. They can simultaneously deploy a tested and stable app instance on the {{config.extra.arcana.company_name}} Mainnet. See [[deploy-app|how to deploy your app on the {{config.extra.arcana.company_name}} Testnet / Mainnet]] for details.

!!! caution "Testnet/Mainnet Configuration Settings"

      By default, when an app is registered, a 'Testnet' configuration profile gets automatically associated with the app, and a unique **{{config.extra.arcana.app_address}}** is assigned to this 'Testnet' profile. 
      
      To deploy the app on the {{config.extra.arcana.company_name}} Mainnet, you need to create a corresponding 'Mainnet' configuration profile and update the {{config.extra.arcana.gaming_sdk_name}} integration code to use the **new {{config.extra.arcana.app_address}}** assigned to the app's 'Mainnet' configuration profile. 

!!! tip "Testnet > Mainnet"

      If you have deployed a Unity app on Arcana Testnet and are looking to migrate it on the Mainnet, see [[migrate-app-testnet-mainnet|Testnet > Mainnet Migration Guide]].

That is all!

The Unity app is now ready to onboard users via the specified login method. Once the user logs in, the {{config.extra.arcana.wallet_name}} will be instantly accessible for Web3 wallet operations through the UI. 

## See also

* [User Authentication]({{page.meta.arcana.root_rel_path}}/concepts/authtype/arcanaauth.md)
* [[unity-code-sample|Sample Unity App Integration]]
* [Sample Unity App Integration](https://github.com/arcana-network/auth-examples)
