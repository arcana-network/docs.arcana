---
slug: /deploy_app
id: iddeployapp
sidebar_custom_props:
  cardIcon: ⚒️
arcana:
  root_rel_path: ..
---

# Deploying on Testnet / Mainnet

This guide explains what Web3 app developers need to do for deploying their apps on the Arcana Testnet and Mainnet networks. Developers can choose to deploy one instance of the app (say, under active development) on the Arcana Testnet while simultaneously deploying a stable version of their app (say, one validated on Testnet and ready for users) on the Arcana Mainnet.

!!! caution "Already using Auth SDK?"

      If your app is already integrated with an older version of the Auth SDK, v0.3.0 or earlier, use the appropriate [Migration Guide]({{page.meta.arcana.root_rel_path}}/migration/index.md) to upgrade to the latest Auth SDK v{% include "./text-snippets/latest_auth_sdk.md" %}. 

## Prerequisites

* Make sure you have [registered and configured your app]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) using the Arcana Developer Dashboard. 

* After successful registration, a unique **App Address** is assigned to your app that will be required later for integrating your app with the Auth SDK. Also, a default 'Testnet' configuration profile is associated with your app. To learn more about various configuration settings, see [how to use the Arcana Developer Dashboard to configure app settings]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md).

* Depending upon your app type, whether it is a vanilla JS app or React or using wallet connectors such as Wagmi or RainbowKit, follow the instructions in the [Auth SDK integration guide]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md). Integration involves installing Auth SDK or the appropriate wrapper SDK (for e.g., Auth-wagmi wrapper SDK) and then instantiating the appropriate `AuthProvider` or react component as the case may be.

!!! note

      It is recommended that you deploy an app on Arcana Testnet first and then proceed to deploy your app on Arcana Mainnet.

### Deploy App on Testnet

To deploy your app on the Arcana Testnet, make sure when you integrate your app with the Auth SDK by creating a new `AuthProvider`, use the **App Address** assigned to the 'Testnet' configuration profile. If you specify the `network` parameter in the `AuthProvider` constructor, assign the value 'testnet' as shown in the code below.  

!!! note "Default Network Setting"

      If you do not provide any `network` parameter in the `AuthProvider` constructor, the Auth SDK uses 'testnet' as the default. What this means is, by default your app will be deployed on Arcana Testnet.

{% include "./code-snippets/init_auth_testnet.md" %}

Initialize the newly created `AuthProvider` before invoking any Auth SDK methods. 

{% include "./code-snippets/init_auth.md" %}

You can use plug-and-play auth via `connect` method or build your auth frontend by plugging in Auth SDK `loginWithSocial` or `loginWithLink` methods. For details see [how to onboard users]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/index.md). You can also plug in your business logic and [utilize the Arcana wallet]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md) for signing blockchain transactions approved by authenticated users.

#### Run your App

After registering, configuring your app with the 'Testnet' configuration profile, and integrating it with the Auth SDK by using the 'Testnet' **App Address', you can bring up your app. It will be deployed on the Arcana Testnet. 

Once an app user authenticates for the app deployed on Arcana Testnet, the following wallet UI is displayed on the user's device.
      
<img alt="Testnet Wallet" src="/img/an_migration_testnet_wallet.png" width="20%"/>  

#### Monitor Testnet Usage

You can visit your app dashboard screen for the 'Testnet' configuration profile and see the Testnet usage. The figure below shows one new user for the test app.

<img alt="Testnet App Address" src="/img/an_deploy_testnet_usage.png" width="70%"/>

### Deploy App on Mainnet

To deploy your app on the Arcana Mainnet, you need to make sure that there exists a 'Mainnet' configuration profile for your app. By default, when you register an app, only the 'Testnet' configuration profile is created. See [how to create the 'Mainnet' configuration profile]({{page.meta.arcana.root_rel_path}}/db/config_dApp_with_db.md#manage-configurations) section in the Arcana Developer Dashboard User Guide.

!!! tip "Check Mainnet Configuration Profile"

      You can check if a 'Mainnet' configuration profile is already created for your app by visiting the **Manage Apps** screen on the Arcana Developer Dashboard. Refer to the app card. Each card displays Testnet and Mainnet buttons. If the Mainnet button is disabled it means you have not created a 'Mainnet' profile for your app yet.

Once you have created the 'Mainnet' configuration profile for your app, please note that a **new App Address** is associated with it that must be used for deploying the app on the Arcana Mainnet.

When you integrate your app with the Auth SDK by creating a new `AuthProvider`, do remember to update your integration code with the new **App Address** that is assigned to the 'Mainnet' configuration profile. Also, to enable your app on Arcana Mainnet, you must specify the `network` parameter in the `AuthProvider` constructor and assign the value 'mainnet' as shown in the code below.  

!!! caution "Default Network Setting"

      While integrating your app code for using Arcana Mainnet, if you do not provide any `network` parameter in the `AuthProvider` constructor, the Auth SDK will use the default value 'testnet'. What this means is, by default your app will be configured to use Arcana Testnet but with the specified 'Mainnet' **App Address**. This mismatch will not work. You need to provide the values for 'Mainnet' in both places, **App Address** as well as the `network` parameter in the `AuthProvider` constructor.

{% include "./code-snippets/init_auth_mainnet.md" %}

Initialize the newly created `AuthProvider` before invoking any Auth SDK methods. 

{% include "./code-snippets/init_auth.md" %}

You can use plug-and-play auth via `connect` method or build your auth frontend by plugging in Auth SDK `loginWithSocial` or `loginWithLink` methods. For details see [how to onboard users]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/index.md). You can also plug in your business logic and [utilize the Arcana wallet]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md) for signing blockchain transactions approved by authenticated users.

#### Run your App

After registering, configuring your app with the 'Mainnet' configuration profile, and integrating it with the Auth SDK using the 'Mainnet' **App Address** and specifying the `network` as 'mainnet', you can bring up your app. It will be deployed on the Arcana Mainnet. 

Once an app user authenticates for the app deployed on Arcana Mainnet, the following wallet UI is displayed on the user's device.
      
<img alt="Testnet Wallet" src="/img/an_migration_mainnet_wallet.png" width="20%"/>  

#### Monitor Mainnet Usage

You can visit your app dashboard screen for the 'Mainnet' configuration profile and see the Mainnet usage. Note that Arcana Mainnet usage is tracked in terms of MAU and billed. The figure below shows one new user for the test app deployed on Mainnet.

<img alt="Mainnet App Address" src="/img/an_deploy_mainnet_usage.png" width="70%"/>

That is all! :tada:

## See Also

* [Auth SDK Errors]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_err.md)
* [Auth SDK Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md)
* {% include "./text-snippets/authsdkref_url.md" %}