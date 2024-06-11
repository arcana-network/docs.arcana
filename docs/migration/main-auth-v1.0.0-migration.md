---
alias: migration-guide-v1.0.0
title: 'Arcana Auth Web SDK Migration Guide v1.0.0'
description: 'How to migrate to Arcana Auth Web SDK v1.0.0'
arcana:
  root_rel_path: ..
---

# Arcana Auth SDK v0.3.0 -> v1.0.0 Migration

This guide is meant for developers who have already integrated apps with an older version of the {{config.extra.arcana.sdk_name}} and run them using Arcana Network Testnet. 

If you are new to Arcana Network, please visit [[auth-quick-start|{{config.extra.arcana.product_name}} Quick Start Guide]] to get started.

When you migrate from using the {{config.extra.arcana.sdk_name}}  v0.3.0 to the v1.0.0 release, please note that there are a few breaking changes that require you to use {{config.extra.arcana.dashboard_name}}  and re-register, re-configure the app settings as per the {{config.extra.arcana.sdk_name}} configuration setting requirements, and obtain a new **{{config.extra.arcana.app_address}}**. Only then you can re-integrate the app successfully with the {{config.extra.arcana.sdk_name}} . 

## What has Changed?

The following section lists changes between {{config.extra.arcana.sdk_name}} v0.3.0 and v1.0.0. 

!!! an-caution 

      If you are using {{config.extra.arcana.sdk_name}} v0.2.2 or older, please see [[migration-guide-v0.3.0|How to migrate to {{config.extra.arcana.sdk_name}} v0.3.0]].

### {{config.extra.arcana.dashboard_name}} 

Earlier, by default, each registered application was associated with a 'Testnet' configuration profile and an **{{config.extra.arcana.app_address}}**. Now you can have a 'Testnet' as well as a 'Mainnet' configuration profile associated with your registered application. Each profile has its unique **{{config.extra.arcana.app_address}}**. You can deploy an app on the {{config.extra.arcana.company_name}} Testnet and run another instance (a stable version) on the Arcana Mainnet.

#### Mainnet Configuration Profile

* By default, when any new application is registered and configured, a 'Testnet' profile is created. The new dashboard allows developers to also create a 'Mainnet' configuration profile for the app. Developers can create a Mainnet profile and switch to using the Arcana Mainnet or deploy two instances of their app, one for Testnet and the other for Mainnet.

* To create the 'Mainnet' profile you can choose to copy the existing 'Testnet' profile or create a new 'Mainnet' configuration profile. Note that a unique, **new {{config.extra.arcana.app_address}}** is assigned to the 'Mainnet' profile whether it is copied or created afresh.

* To deploy an app on the {{config.extra.arcana.company_name}} Mainnet, developers are required to perform two things:
   
    - First, use the dashboard to create a 'Mainnet' configuration profile for the app and obtain a **new {{config.extra.arcana.app_address}}**.
    - Second, the developers must also re-integrate their app and update the code where they instantiate the `AuthProvider` appropriately so that the 'Mainnet' **{{config.extra.arcana.app_address}}** is used and the `network` parameter is initialized as `mainnet` in the `AuthProvider` constructor.

#### Keyspace in Mainnet Deployments

* The 'Mainnet' configuration profile for the app has an additional setting meant for selecting the **Keyspace** type. Developers can choose between the default **App-specific Keys** or **Global Keys**. [[concept-keyspace-type|Global Keyspace]] enables a better user experience whereby the user is assigned the same wallet address across applications in the Arcana ecosystem in a secure manner. Enabling the global keys feature requires developer verification and whitelisting. For details, see [[dashboard-user-guide#configure-keyspace|'How to Configure Keyspace']] section in the Dashboard User Guide.

#### Usage Tracking

* In this release, the Developer Dashboard tracks application usage data in terms of MAU, both for Arcana Testnet as well as Mainnet deployments.  Billing is applicable only for Mainnet deployments and bills are generated at the end of the month for Arcana Mainnet usage.

### {{config.extra.arcana.sdk_name}} 

<img src="{{config.extra.arcana.img_dir}}/icons/i_an_authsdk_light.{{config.extra.arcana.img_png}}#only-light" alt="Auth SDK icon" width="50" />
<img src="{{config.extra.arcana.img_dir}}/icons/i_an_authsdk_dark.{{config.extra.arcana.img_png}}#only-dark" alt="Auth SDK icon" width="50" />

The {{config.extra.arcana.sdk_name}} v1.0.0 supports deploying apps on the {{config.extra.arcana.company_name}}  Mainnet. As there are breaking changes in the App database schema, you need to re-register your apps using the {{config.extra.arcana.dashboard_name}} and obtain a new **{{config.extra.arcana.app_address}}** before you can integrate the app with the {{config.extra.arcana.sdk_name}} .  This is required irrespective of whether you chose to deploy your app on the {{config.extra.arcana.company_name}}  Testnet or the Mainnet.

To deploy an app on the {{config.extra.arcana.company_name}}  Mainnet, you need to first login into the Arcana Developer dashboard, create a 'Mainnet' configuration profile for your app and choose the requisite 'Keyspace' type. In addition to creating the 'Mainnet' configuration profile, developers need to update the {{config.extra.arcana.sdk_name}}  integration code for creating a new `AuthProvider` as follows:

* Use the **{{config.extra.arcana.app_address}}** specified to the 'Mainnet' configuration profile in the dashboard
* Set the `network` parameter in the `AuthProvider` constructor to 'mainnet'

## How to Migrate to v1.0.0?

*Do not jump into installing, and upgrading the {{config.extra.arcana.sdk_name}}  in your sources and running your app.*

To successfully use the {{config.extra.arcana.sdk_name}}, you need to first **re-create your app configuration profile** using the {{config.extra.arcana.dashboard_name}} and then integrate your app with the {{config.extra.arcana.sdk_name}} for onboarding users and enabling the {{config.extra.arcana.wallet_name}}. 

If you wish to deploy your app on {{config.extra.arcana.company_name}} Testnet, simply follow steps 1 and 3.  To deploy your app on {{config.extra.arcana.company_name}}  Mainnet, follow all three steps:

1. **Reconfigure & Get {{config.extra.arcana.app_address}}**: If you are using v0.3.0, you would already have created a 'Testnet' configuration profile for your app. When you log into the dashboard, this profile will not show up by default. Due to breaking changes in the {{config.extra.arcana.sdk_name}} release v1.0.0, you will be required to re-register your app using the {{config.extra.arcana.dashboard_name}}. When you re-register and create a new profile for the app, by default, it is assigned as a 'Testnet' configuration. This step is mandatory irrespective of whether you want to deploy your app on {{config.extra.arcana.company_name}}  Testnet or Mainnet or both.

2. **Mainnet Configuration**: To deploy your app on the {{config.extra.arcana.company_name}}  Mainnet, you must first create a 'Mainnet' configuration profile using the {{config.extra.arcana.dashboard_name}}. See instructions [[dashboard-user-guide#manage-configuration-profiles| here]]. Once you have the 'Mainnet' configuration profile ready, copy the new **{{config.extra.arcana.app_address}}** assigned to the 'Mainnet' configuration profile. This will be required during {{config.extra.arcana.sdk_name}}  integration later. At the time of 'Mainnet' profile creation, you need to specify whether you would like to use the **App-specific Keys** (default) or use the **Global Keys** feature for your app. To enable the global keys feature, developers must submit a verification form and get approval. Wait to onboard users until you receive a response to your verification request. Otherwise, the wallet address assigned to your app users may change after the **Global Keys** feature takes effect. If you do not choose **Global Keys**, your 'Mainnet' profile is configured to use **App-specific** keys by default.  What this means is that your app users will see different wallet addresses across different apps in the Arcana ecosystem. For details, see [[concept-keyspace-type|Global Keys]].

    !!! an-danger "Update Redirect URI for Mainnet"
  
          You must update the OAuth redirect URI values for all the social providers configured for your 'Mainnet' profile. Use the respective social provider console to update callback URL values for Mainnet. Simply copy the new **redirect URI** value from the application's 'Mainnet' configuration settings dashboard page and add it to the list of redirect URIs setup in the OAuth configuration settings for your provider.  You would have earlier added the redirect URI for the 'Testnet' configuration profile, now simply update the 'Mainnet' URI too. That's all.

3. **Install & Integrate**: Install and upgrade the {{config.extra.arcana.sdk_name}} to v1.0.0. Integrate the {{config.extra.arcana.sdk_name}} and create a new `AuthProvider` instance by specifying the **{{config.extra.arcana.app_address}}**. If you wish to deploy your app on the {{config.extra.arcana.company_name}} Testnet, simply provide the **{{config.extra.arcana.app_address}}** listed in the 'Testnet' configuration profile of your app in the dashboard. Also, you need to set the `network` parameter in the `AuthProvider` constructor to `testnet`. This is important because, by default, {{config.extra.arcana.sdk_name}} v1.0.0 has the `network` parameter set to using 'mainnet'. Similarly, if you want to deploy your app on the {{config.extra.arcana.company_name}}  Mainnet, then use the **{{config.extra.arcana.app_address}}** assigned to the 'Mainnet' configuration profile of your app in the dashboard and set the `network` parameter to 'mainnet'. 

Refer to the examples below to see how to integrate and deploy your app on the {{config.extra.arcana.company_name}}  Testnet and Mainnet after successfully registering and configuring the app.

### Example: Deploy on Testnet
   
Register your app using the {{config.extra.arcana.dashboard_name}}. By default, the 'Testnet' configuration profile is created. You can provide the social provider settings as per your user onboarding requirements. Save the **{{config.extra.arcana.app_address}}** assigned to your app displayed on the top right of the dashboard screen. This will be required during integration with the {{config.extra.arcana.sdk_name}}  as shown below:
   
{% include "./code-snippets/init_auth_testnet.md" %}
   
Once a user authenticates, the following wallet UI is displayed when the app is deployed on the {{config.extra.arcana.company_name}} Testnet.

<figure markdown="span">
  <img alt="Testnet Wallet" src="{{config.extra.arcana.img_dir}}/an_migration_testnet_wallet.{{config.extra.arcana.img_png}}" class="an-screenshots-noeffects width_35pc"/>
  <figcaption>Testnet Wallet</figcaption>
</figure>
  
### Example: Deploy on Mainnet

Register your app using the {{config.extra.arcana.dashboard_name}}. By default, the 'Testnet' configuration profile is created. Make sure you create a 'Mainnet' profile and save the **{{config.extra.arcana.app_address}}** assigned to your app for the 'Mainnet' configuration. It is displayed on the top right of the dashboard screen.

To bring up your app on {{config.extra.arcana.company_name}}  Mainnet, in your integration code, use the `Mainnet` **{{config.extra.arcana.app_address}}** and specify the `network` parameter as 'mainnet' while instantiating the `AuthProvider` as shown below:
   
{% include "./code-snippets/init_auth_mainnet.md" %}
   
Once a user authenticates, the following wallet UI is displayed when the app is deployed on the Arcana Mainnet.
   
<figure markdown="span">
  <img alt="Mainnet Wallet" src="{{config.extra.arcana.img_dir}}/an_migration_mainnet_wallet.{{config.extra.arcana.img_png}}" class="an-screenshots-noeffects width_35pc"/>
  <figcaption>Mainnet Wallet</figcaption>
</figure>

## What's New?

<img src="{{config.extra.arcana.img_dir}}/icon_new_light.{{config.extra.arcana.img_png}}#only-light" alt="New icon" width="50" /><img src="{{config.extra.arcana.img_dir}}/icon_new_dark.{{config.extra.arcana.img_png}}#only-dark" alt="New icon" width="50" />

Besides Testnet/Mainnet and Global Keyspace features, the {{config.extra.arcana.sdk_name}} v1.0.0 uses a new, improved asynchronous distributed key generation (ADKG) subsystem. In addition to the DKG nodes operated by Arcana, two nodes are run and managed by Comdex and LugaNodes. 

For more details, see [[rn-main-auth-v1.0.0|{{config.extra.arcana.product_name}} v1.0.0 release notes]] for details.
