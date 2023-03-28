---
slug: /deploy_app
id: iddeployapp
sidebar_custom_props:
  cardIcon: ⚒️
arcana:
  root_rel_path: ..
---

# Deploying Web3 App

In this guide you will learn how the Web3 app developers can deploy apps integrated with the {{config.extra.arcana.sdk_name}} and configure them to use the Arcana Testnet or Mainnet protocols. Developers can choose to configure and deploy one instance of the app (say, under active development) using the Arcana Testnet settings while simultaneously deploying a stable version of their app (say, one validated on Testnet and ready for users) using the Arcana Mainnet settings.

!!! caution "Already using {{config.extra.arcana.sdk_name}}?"

      If your app is already integrated with an older version of the {{config.extra.arcana.sdk_name}}, v0.3.0 or earlier, use the appropriate [Migration Guide]({{page.meta.arcana.root_rel_path}}/migration/index.md) to upgrade to the latest {{config.extra.arcana.sdk_name}} v{% include "./text-snippets/latest_auth_sdk.md" %}. 

## Prerequisites

* Make sure the app is [registered and configured]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) via the {{config.extra.arcana.dashboard_name}}. 

* After successful registration, a unique **{{config.extra.arcana.app_address}}** is assigned to the app. It will be required later for integrating the app with the {{config.extra.arcana.sdk_name}}. Also, a default 'Testnet' configuration profile is associated with every newly registered app. To learn more about various configuration settings, see [how to use the {{config.extra.arcana.dashboard_name}} to configure app settings]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md).

* Integrating an app with the {{config.extra.arcana.sdk_name}} may vary slightly depending on the app type, whether it is a vanilla HTML/CSS/JS app, a React app, or a React app using wallet connectors such as Wagmi or RainbowKit. Follow the instructions in the respective [integration guides]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) and choose carefully depending on the app type. 

    !!! caution 

          Integrating an app may require installing the {{config.extra.arcana.sdk_name}} via say only the Arcana `{{config.extra.arcana.auth_sdk_pkg_name}}` package, both `{{config.extra.arcana.auth_sdk_pkg_name}}` and the `{{config.extra.arcana.react_sdk_pkg_name}}` packages, or only `{{config.extra.arcana.wagmi_sdk_pkg_name}}` wrapper package. After installing, the developer must instantiate the appropriate `AuthProvider`, the React component `ProvideAuth`, or the Wagmi `ArcanaConnector`, as the case may be. 
  
          {% include "./text-snippets/warn_wagmi_noauth.md" %}

### Deploying App (Testnet Configuration)

Before deploying an app that uses the Arcana Testnet configurations, make sure that during the app integration with the {{config.extra.arcana.sdk_name}} a new `AuthProvider` is created using the correct **{{config.extra.arcana.app_address}}** assigned to the 'Testnet' configuration profile. If you specify the `network` parameter in the `AuthProvider` constructor, assign it the value 'testnet' as shown in the sample code:

{% include "./code-snippets/init_auth_testnet.md" %}

!!! note "Default Network Setting"

      If you do not provide any `network` parameter in the `AuthProvider` constructor, the {{config.extra.arcana.sdk_name}} uses the value 'testnet' as the default. What this means is, by default your app will be deployed to use the Arcana Testnet blockchain protocol.

Initialize the newly created `AuthProvider` before adding code in the integrated app to onboard users.  

{% include "./code-snippets/init_auth.md" %}

Only authenticated users are allowed to sign blockchain transactions and perform Web3 wallet operations using the {{config.extra.arcana.wallet_name}}. To onboard app users, developers can use plug-and-play auth via `connect` method or build custom login UI by plugging in {{config.extra.arcana.sdk_name}} `loginWithSocial` and `loginWithLink` methods. For details, see [how to onboard users]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/index.md). You can also plug in additional business logic and [utilize the {{config.extra.arcana.wallet_name}}]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md) programmatically for allowing authenticated users to sign blockchain transactions.

#### Run your App

After registering the app, configuring it for the 'Testnet' configuration profile, integrating the app with the {{config.extra.arcana.sdk_name}} by using the 'Testnet' **{{config.extra.arcana.app_address}}**, and finally adding code to onboard users, other business logic, your app is ready to be deployed. Bring up the app and allow users to log in and use Arcana Testnet. 

An authenticated app user will see the following wallet UI when using the Arcana Testnet.
      
<img alt="Testnet Wallet" src="/img/an_migration_testnet_wallet.png" width="20%"/>  

#### Monitor Testnet Usage

Visit the app dashboard screen to view the 'Testnet' configuration profile and monitor Arcana Testnet usage. The figure below shows one new user for the test app.

<img alt="Testnet App Identifier" src="/img/an_deploy_testnet_usage.png" width="70%"/>

### Deploying App (Mainnet Configuration)

Before deploying the app on the Arcana Mainnet, make sure that there exists a 'Mainnet' configuration profile for the app. By default, when you register an app, only the 'Testnet' configuration profile is created. See [how to create the 'Mainnet' configuration profile]({{page.meta.arcana.root_rel_path}}/db/config_dApp_with_db.md#manage-configurations) section in the {{config.extra.arcana.dashboard_name}} User Guide.

!!! tip "Check Mainnet Configuration Profile"

      You can check if a 'Mainnet' configuration profile is already created for your app by visiting the **Manage Apps** screen on the {{config.extra.arcana.dashboard_name}}. Refer to the app card. Each card displays Testnet and Mainnet buttons. If the Mainnet button is disabled it means you have not created a 'Mainnet' profile for your app yet.

Once you have created the 'Mainnet' configuration profile for your app, please note that a **new {{config.extra.arcana.app_address}}** is associated with it that must be used while integrating the app with the {{config.extra.arcana.sdk_name}}. While creating a new `AuthProvider`, do remember to update your integration code with the new **{{config.extra.arcana.app_address}}** that is assigned to the 'Mainnet' configuration profile. Also, specify the `network` parameter in the `AuthProvider` constructor and assign it the value 'mainnet' as shown in the code below.  

{% include "./code-snippets/init_auth_mainnet.md" %}

!!! caution "Default Network Setting"

      While integrating your app code for using Arcana Mainnet, if you do not provide any `network` parameter in the `AuthProvider` constructor, the {{config.extra.arcana.sdk_name}} will use the default value 'testnet'. What this means is, by default your app will be configured to use Arcana Testnet but with the specified 'Mainnet' **{{config.extra.arcana.app_address}}**. This mismatch will not work. You need to provide the values for 'Mainnet' in both places, **{{config.extra.arcana.app_address}}** as well as the `network` parameter in the `AuthProvider` constructor.

Initialize the newly created `AuthProvider` before adding code in the integrated app to onboard users. 

{% include "./code-snippets/init_auth.md" %}

Only authenticated users are allowed to sign blockchain transactions and perform Web3 wallet operations using the {{config.extra.arcana.wallet_name}}. To onboard app users, developers can use plug-and-play auth via `connect` method or build custom login UI by plugging in {{config.extra.arcana.sdk_name}} `loginWithSocial` and `loginWithLink` methods. For details, see [how to onboard users]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/index.md). You can also plug in additional business logic and [utilize the {{config.extra.arcana.wallet_name}}]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md) programmatically for allowing authenticated users to sign blockchain transactions.

#### Run your App

After registering the app, configuring it for the 'Mainnet' configuration profile, integrating the app with the {{config.extra.arcana.sdk_name}} by using the 'Mainnet' **{{config.extra.arcana.app_address}}**, and finally adding code to onboard users, other business logic, your app is ready to be deployed. Bring up the app and allow users to log in and use Arcana Mainnet. 

An authenticated app user will see the following wallet UI when using the Arcana Mainnet.
      
<img alt="Testnet Wallet" src="/img/an_migration_mainnet_wallet.png" width="20%"/>  

#### Monitor Mainnet Usage

Visit the app dashboard screen to view the 'Mainnet' configuration profile and monitor Arcana Mainnet usage. Note that Arcana Mainnet usage is tracked in terms of MAU and billed. The figure below shows one new user for the test app deployed on Mainnet.

The figure below shows one new user for the test app deployed on Mainnet.

<img alt="Mainnet App Usage" src="/img/an_deploy_mainnet_usage.png" width="70%"/>

That is all! :material-party-popper:

## See Also

* [{{config.extra.arcana.sdk_name}} Errors]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_err.md)
* [{{config.extra.arcana.sdk_name}} Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md)
* {% include "./text-snippets/authsdkref_url.md" %}
