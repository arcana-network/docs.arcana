---
slug: /migration_to_main_auth_1_0_1
id: idmigrationtomainauth101
sidebar_custom_props:
  cardIcon: 📂
arcana:
  root_rel_path: ..
---

# Auth SDK v0.3.0 -> v{% include "./text-snippets/latest_auth_sdk.md" %} Migration

This guide is meant for developers who have already integrated apps with an older version of the Arcana Auth SDK and run them using Arcana Network Testnet. If you are new to Arcana Network, please visit [Quick Start Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_qs.md) to get started.

When you migrate from using the Arcana Auth SDK v0.3.0 to the latest v{% include "./text-snippets/latest_auth_sdk.md" %} release, please note that simply upgrading the SDK will not suffice.

There are a few breaking changes that require you to use Arcana Developer Dashboard and re-register, re-configure the app settings as per the latest Auth SDK configuration setting requirements and obtain a new **App Address**. Only then you can re-integrate the app successfully with the latest Auth SDK. 

That's all. There are no further Auth SDK function changes in this latest release.

## What has Changed?

The following section lists changes between v0.3.0 and v{% include "./text-snippets/latest_auth_sdk.md" %}. 

!!! caution 

      If you are using v 0.2.2 or older, please see [How to migrate to Auth SDK v0.3.0]({{page.meta.arcana.root_rel_path}}/migration/beta_auth_v0.3.0_migration.md).

### Developer Dashboard

#### Mainnet Configuration Profile

* By default, when any new application is registered and configured, a 'Testnet' profile is created. From this release onwards, there is a new provision for creating an a 'Mainnet' configuration profile as well for the app. Developers can create a Mainnet profile and switch to using the Arcana Mainnet. To create the 'Mainnet' profile you can choose to copy the existing 'Testnet' profile or create a new 'Mainnet' configuration profile. Note that a new **App Address** is assigned to the 'Mainnet' profile whether it is copied or created afresh.

* To switch an app from using Arcana Testnet to Mainnet, developers are required to perform two things - first, use the dashboard to create a 'Mainnet' configuration profile for the app and then switch to Arcana Mainnet using the drop down selection. Second, the developers must also re-integrate their app and update the code where they instantiate the `AuthProvider` by updating the newly assigned 'Mainnet' **App Address** instead of the one meant for 'Testnet' configuration profile. 

#### Global Keyspace

* The 'Mainnet' configuration profiles for the app has an additional setting meant for the new **Global Keyspace** feature. [Global Keyspace]({{page.meta.arcana.root_rel_path}}/concepts/sharedkeys.md) enables better user experience whereby user us assigned the same wallet address across applications in the Arcana ecosystem in a secure manner. By default, when the Mainnet profile is created, app-specific keys are enabled. Enabling global keys feature requires developer verification and whitelisting. This offers higher security than the global keys option. See [Dashboard User Guide]({{page.meta.arcana.root_rel_path}}/db/config_dApp_with_db.md#configure-mainnet-keyspace) for details.

#### Usage Tracking

* In this release, the Developer Dashboard tracks application usage data in terms of MAU.  Billing is done at the end of the month **only** for Mainnet usage. For 'Testnet' usage there is per application MAU tracking but no billing or charges are levied.

### Auth SDK

<img src="/img/icons/i_an_authsdk_light.png#only-light" alt="Auth SDK icon" width="50" />
<img src="/img/icons/i_an_authsdk_dark.png#only-dark" alt="Auth SDK icon" width="50" />

#### Integrate for TestNet/Mainnet 

* If a developer wishes to deploy the app on Arcana Mainnet, they need to ensure that the correct configuration profile is selected in the profile selection dropdown located in the Arcana Developer Dashboard. In addition, ensure that during application integration, the **App Address** assigned to the 'Mainnet' configuration profile in the dashboard is specified when instantiating the `AuthProvider`. 

* If the developer does not specify the `network` parameter while instantiating the `AuthProvider` then by default 'testnet' is selected. If you plan to run the app on Arcana Mainnet then specify `network` as 'mainnet'. The network value specified in the `AuthProvider` instantiation should match the one selected in the profile selection dropdown in the dashboard. See {% include "./text-snippets/authsdkref_url.md" %} for construction parameter details.

#### Example: New Testnet `AuthProvider` 

Here is a sample code snippet that specifies 'Testnet' while instantiating the `AuthProvider`. 
      
{% include "./code-snippets/init_auth_testnet.md" %} 
      
This will bring up the following wallet UI after logging in using one of the enabled authentication providers.
      
<img alt="Testnet Wallet" src="/img/an_migration_testnet_wallet.png" width="40%"/>

#### Example: New Mainnet `AuthProvider`

Here is a sample code snippet that uses 'Mainnet' while instantiating the `AuthProvider`. 
      
{% include "./code-snippets/init_auth_mainnet.md" %} 
        
This will bring up the following wallet UI after logging in using one of the enabled authentication providers. 
      
<img alt="Mainnet Wallet" src="/img/an_migration_mainnet_wallet.png" width="40%"/>

## How to Migrate to v1.0.1?

Do not jump into installing, upgrading the Auth SDK in your sources and running your app. 

That will not suffice. 

For successfully using the latest Auth SDK, you need to first **re-create your app configuration profile** using the Arcana Dashboard and then integrate your app with the latest Auth SDK for onboarding users and enabling Arcana wallet.

Use the following instructions to properly migrate your app to Arcana Auth SDK v 1.0.1.

1. If you are using v0.3.0, you would already have created a 'Testnet' configuration profile for your app. When you log into teh dashboard, this profile will not show up by default. Due to breaking changes in the latest Auth SDK release, you will be required to re-register your app using the Arcana Dashboard. When you create a new profile for the app, by default, it is assigned as 'Testnet' configuration. 

2. To create a 'Mainnet' profile, see instructions [here]({{page.meta.arcana.root_rel_path}}/db/config_dApp_with_db.md#example-new-mainnet-authprovider). Once you have the 'Mainnet' configuration profile ready, copy the new **App Address** assigned to the 'Mainnet' configuration profile. This will be required during Auth SDK integration later.
  
    2a. At the time of 'Mainnet' profile creation, you need to specify whether you would like to use the default **App-specific Keys** or use the **Global Keys** feature for your app. To enable global keys feature, developers must submit a verification form and get approval. Wait to onboard users until your receive a response. Otherwise the wallet address assigned to your app users may change after **Global Keys** feature takes effect.

    2b. If you do not choose **Global Keys**, your 'Mainnet' profile is configured by default to use **App-specific** keys.  What this means is that your app users will see different wallet address across different apps in the Arcana ecosystem. For details see [Global Keys]({{page.meta.arcana.root_rel_path}}/concepts/sharedkeys.md).

    2c. You must update the OAuth redirect URI values for all the social providers configured for your 'Mainnet' profile. Use the respective social provider console. Simply copy the new **redirect URI** value from the application's 'Mainnet' configuration settings dashboard page and add it to the list of redirect URIs setup in the OAuth configuration settings for your provider.  You would have earlier added the redirect URI for 'Testnet' configuration profile, now simply update 'Mainnet' URI too. That's all.

3. Install and upgrade the Auth SDK to v{% include "./text-snippets/latest_auth_sdk.md" %}. Integrate the Auth SDK and initialize the `AuthProvider` by specifying the **App Address** for the selected Arcana Network - Testnet/Mainnet. By default, the `network` parameter is set to ‘testnet’. If you have configured and switchted to the 'Mainnet' profile using the dashboard and would like to switch your app to using the Arcana Mainnet, then make sure during Auth SDK integration you have provided the correct **App Address** corresponding to the 'Mainnet' configuration in the dashboard while instantiating the `AuthProvider`. Also, you need to specify the `network` parameter as 'mainnet' in the `AuthProvider` constructor. Unless both these parameters correspond to the profile selected in the dashboard, you will not be able to successfully onboard users or enable them to use Arcana wallet to sign blockchain transactions.

6. If you do not want to run your app on the Arcana Mainnet to begin with, you can continue using Arcana Testnet.  Simply skip creation of 'Mainnet' profile. Use the **App Address** assigned to 'Testnet' configuration in the dashboard and create a new `AuthProvider` by specifying 'Testnet' app address.  By default, the `network` parameter of `AuthProvider` is already set to 'testnet'. You should be able to successfully integrate with the Auth SDK, onboard users and enable them to use Arcana wallet.

That is all, you are good to go and start using the latest Auth SDK.

## What's New?

<img src="/img/icon_new_light.png#only-light" alt="New icon" width="50" /><img src="/img/icon_new_dark.png#only-dark" alt="New icon" width="50" />

Besides Testnet/Mainnet and Global Keyspace features, the latest Auth SDK uses new, improved ADKG subsystem. In addition to the DKG nodes operated by Arcana, two nodes are run and managed by Comdex and LugaNodes. 

For more details, see [Auth SDK v1.0.0 release notes]({{page.meta.arcana.root_rel_path}}/relnotes/rn_main_auth_v1.0.0.md) and [State of the Arcana Auth]({{page.meta.arcana.root_rel_path}}/state_of_the_ntwk.md).
