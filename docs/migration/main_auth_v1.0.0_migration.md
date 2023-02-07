---
slug: /migration_to_beta_auth_0_3_0
id: idmigrationtobetaauth030
sidebar_custom_props:
  cardIcon: 📂
arcana:
  root_rel_path: ..
---

# Auth SDK v0.3.0 -> v{% include "./text-snippets/latest_auth_sdk.md" %} Migration

When you migrate from using the Arcana Auth SDK v0.3.0 to the latest v{% include "./text-snippets/latest_auth_sdk.md" %} release, please note that simply upgrading the SDK will not suffice.

There are a few breaking changes that require app developers to re-register, re-configure the app settings, obtain a new **App Address** via the Arcana Developer Dashboard and only then re-integrate the app with the latest Auth SDK. That's all. There are no further Auth SDK function changes in this latest release.

## What has Changed?

The following section lists changes between v0.3.0 and v{% include "./text-snippets/latest_auth_sdk.md" %}. 

!!! caution 

      If you are using v 0.2.2 or older, please see [How to migrate to Auth SDK v0.3.0]({{page.meta.arcana.root_rel_path}}/migration/beta_auth_v0.3.0_migration.md).

### Developer Dashboard

* By default, when any new application is registered and configured, a 'Testnet' profile is created. In this release, there is provision for creating an a 'Mainnet' configuration profile for the app and switch between the two. Developers can choose to copy the 'Testnet' profile or create a new 'Mainnet' configuration profile for the app. 

* Earlier, developers could only use 'Testnet'. Now apps can choose to run using 'Mainnet' or 'Testnet'. This requires the developers to switch the network profile using the dashboard and also re-integrate their application with the newly assigned 'Mainnet' **App Address**. Besides these usage changes, 'Mainnet' has an additional setting in this release for the new **Global Keyspace** feature. [Global Keyspace]({{page.meta.arcana.root_rel_path}}/concepts/sharedkeys.md) enables better user experience whereby user us assigned the same wallet address across applications in the Arcana ecosystem in a secure manner. By default, when the Mainnet profile is created, app-specific keys are enabled. Enabling global keys feature requires developer verification and whitelisting. This offers higher security than the global keys option. See [Dashboard User Guide]({{page.meta.arcana.root_rel_path}}/db/config_dApp_with_db.md#configure-mainnet-keyspace) for details.

* In this release, the Developer Dashboard tracks application usage data in terms of MAU.  Billing is done at the end of the month **only** for Mainnet usage. For 'Testnet' usage there is per application MAU tracking but no billing or charges are levied.

### Auth SDK

<img src="/img/icons/i_an_authsdk_light.png#only-light" alt="Auth SDK icon" width="50" />
<img src="/img/icons/i_an_authsdk_dark.png#only-dark" alt="Auth SDK icon" width="50" />

* If a developer wishes to use 'Mainnet' for the app, they need to ensure that the correct configuration profile is selected in the Developer Dashboard. In addition, ensure that during application integration, the new **App Address** assigned to the 'Mainnet' profile is used to instantiate the `AuthProvider`. 

* If the developer does not specify the `network` parameter while instantiating the `AuthProvider` then by default 'Mainnet' is selected. If you plan to run the app on 'Testnet' then make sure to specify 'network' as 'testnet'. See {% include "./text-snippets/authsdkref_url.md" %} for details.

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

## How to Migrate to v1.0.0?

Do not jump into installing, upgrading the Auth SDK in your sources and running your app. That will not suffice. Follow these instructions to properly migrate your app to Arcana Auth SDK v 1.0.0.

1. If you are using v0.3.0, you would already have created a 'Testnet' configuration profile for your app. Use the Arcana Developer Dashboard to create a Mainnet profile. See instructions [here]({{page.meta.arcana.root_rel_path}}/db/config_dApp_with_db.md#example-new-mainnet-authprovider). Once you have the 'Mainnet' configuration profile ready, copy the new **App Address** assigned to the Mainnet configuration profile.
  
2. At the time of 'Mainnet' profile creation, you need to specify whether you would like to use the default **App-specific Keys** or use the **Global Keys** feature for your app. To enable global keys feature, developers must submit a verification form and get approval. Wait to onboard users until your receive a response. Otherwise the wallet address assigned to your app users may change after **Global Keys** feature takes effect.

3. If you do not choose **Global Keys**, your 'Mainnet' profile is configured by default to use **App-specific** keys.  What this means is that your app users will see different wallet address across different apps in the Arcana ecosystem. For details see [Global Keys]({{page.meta.arcana.root_rel_path}}/concepts/sharedkeys.md).

4. You must update the OAuth redirect URI values for all the social providers configured for your 'Mainnet' profile. Use the respective social provider console. Simply copy the new **redirect URI** value from the application's 'Mainnet' configuration settings dashboard page and add it to the list of redirect URIs setup in the OAuth configuration settings for your provider.  You would have earlier added the redirect URI for 'Testnet' configuration profile, now simply update 'Mainnet' URI too. That's all.

5. Install and upgrade the Auth SDK to v1.0.0. Then update your integration code where you instantiate the `AuthProvider`. Make sure you update the 'Mainnet' **App address**. By default, the `network` parameter is set to ‘mainnet’. If you'd like to first try out the new version with 'Testnet' **make sure** you set the `network` parameter to 'testnet'. 

That is all, you are good to go and start using the new, improved Arcana Auth SDK v1.0.0.

## What's New?

<img src="/img/icon_new_light.png#only-light" alt="New icon" width="50" /><img src="/img/icon_new_dark.png#only-dark" alt="New icon" width="50" />

Besides Testnet/Mainnet and Global Keyspace features, the latest Auth SDK uses new, improved ADKG subsystem. In addition to the DKG nodes operated by Arcana, two nodes are run and managed by Comdex and LugaNodes. 

For more details, see [Auth SDK v1.0.0 release notes]({{page.meta.arcana.root_rel_path}}/relnotes/rn_main_auth_v1.0.0.md) and [State of the Arcana Auth]({{page.meta.arcana.root_rel_path}}/state_of_the_ntwk.md).
