---
slug: /deploy_on_testnet
id: iddeploytestnet
sidebar_custom_props:
  cardIcon: ⚒️
arcana:
  root_rel_path: ../..
---

# Arcana Testnet App Deployment

This guide explains what Web3 app developers need to do for deploying their apps on the Arcana Testnet.

## Prerequisites

* If your app is already integrated with an older version of the Auth SDK, v0.3.0 or earlier, use the appropriate [Migration Guide]({{page.meta.arcana.root_rel_path}}/migration/index.md) to upgrade to the latest Auth SDK v{% include "./text-snippets/latest_auth_sdk.md" %}. This may require re-registering your app using the Arcana Dashboard and getting a new **App Address** for integrating your app with the Auth SDK.

## Steps

### Step1: Register App

Log in to the Arcana Developer Dashboard. If you have already registered, you will see your 'App Card' in the **Manage Apps** dashboard screen.  If you do not find your app card there, register your app. Click on the **Create New App** wizard and provide a name for your app.

![Create App Wizard](/img/an_deploy_testnet_createapp.png)
![Manage App Screen](/img/an_deploy_testnet_appcard.png)

After successful registration, a unique **App Address** is assigned to your app. You need to use this **App Address** later while integrating your app with the Auth SDK.

![Testnet App Address](/img/an_deploy_testnet_appaddress.png)

### Step 2: Configure Testnet

When a new app entry is created to register a new app, by default, it is registered to use the Arcana Testnet. During registration, a default 'Testnet' configuration profile is automatically created and associated with the registered app. The app dashboard displays the 'Testnet' profile app settings. You can also view or edit the 'Testnet' configuration profile details later by logging into the dashboard and clicking on the newly created app card in the **Manage Apps** dashboard screen. 

After successful registration, you will see the app dashboard screen displaying an app configuration navigation bar in the LHS and app Testnet usage data on the RHS. For a newly registered app, there will be no Testnet usage data displayed on the app dashboard screen. The **Configure** section in the LHS navigation provides options to configure app branding, authentication, and wallet usage settings for using Arcana Testnet.

![Testnet App Address](/img/an_deploy_testnet_config_screen.png)

To learn more about various configuration settings, see [how to use the Arcana Developer Dashboard to configure app settings]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md).

!!! note "Default Settings" 

      If you do not provide any authentication settings for social providers and use the default 'Testnet' settings, your app will only be able to offer a password-less login option for user onboarding.  The wallet UI that is displayed once a user is authenticated will have the default branding logo and dark theme. It will be positioned towards the right of the application screen.

      ![Default Testnet non branded wallet](/img/an_deploy_testnet_default_wallet.png)

### Step 3: Integrate App

After configuring your app 'Testnet' profile settings using the Arcana Developer Dashboard, install the Auth SDK.

{% include "./code-snippets/auth_install.md" %}

Next, integrate your app with the Auth SDK by creating a new `AuthProvider`. Use the **App Address** assigned to the 'Testnet' configuration profile while instantiating the `AuthProvider`. If you specify the `network` parameter in the `AuthProvider` constructor, assign the value 'testnet' as shown in the code below.  

!!! note "Default Network Setting"

      If you do not provide any `network` parameter in the `AuthProvider` constructor, the Auth SDK uses 'testnet' as the default. What this means is, by default your app will be deployed on Arcana Testnet.

{% include "./code-snippets/init_auth_testnet.md" %}

Initialize the newly created `AuthProvider` before invoking any Auth SDK methods. 

{% include "./code-snippets/init_auth.md" %}

You can use plug-and-play auth via `connect` method or build your auth frontend by plugging in Auth SDK `loginWithSocial` or `loginWithLink` methods. For details see [how to onboard users]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/index.md). You can also plug in your business logic and [utilize the Arcana wallet]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md) for signing blockchain transactions approved by authenticated users.

### Step 4: Run your App

When you bring up your app it will be deployed on the Arcana Testnet. Once an app user authenticates for the app deployed on Arcana Testnet, the following wallet UI is displayed on the user's device.
      
<img alt="Testnet Wallet" src="/img/an_migration_testnet_wallet.png" width="40%"/>  

### Step 5: Monitor Usage

You can visit your app dashboard screen for the 'Testnet' configuration profile and see the Testnet usage. The figure below shows one new user for the test app.

![Testnet App Address](/img/an_deploy_testnet_usage.png)

That is all! :tada:

## See Also

* [Auth SDK Errors]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_err.md)
* [Auth SDK Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md)
* {% include "./text-snippets/authsdkref_url.md" %}