---
alias: deploy-app
title: 'Deploying Web3 App on the Arcana Testnet/Mainnet'
description: 'Learn how developers can deploy the apps integrated with the Arcana Auth SDK on the Arcana Testnet/Mainnet.'
arcana:
  root_rel_path: ..
---

# Deploying Web3 App

In this guide you will learn how the Web3 app developers can deploy apps integrated with the {{config.extra.arcana.sdk_name}} and configure them to use the Arcana Testnet or Mainnet protocols. Developers can choose to configure and deploy one instance of the app (say, under active development) using the Arcana Testnet settings while simultaneously deploying a stable version of their app (say, one validated on Testnet and ready for users) using the Arcana Mainnet settings.

!!! caution "Already using {{config.extra.arcana.sdk_name}}?"

      If your app is already integrated with an older version of the {{config.extra.arcana.sdk_name}}, v{{config.extra.arcana.previous_version}} or earlier, use the appropriate [[index-migration-guides|Migration Guide]] to upgrade to the latest {{config.extra.arcana.sdk_name}} v{{config.extra.arcana.latest_version}}. 

## Prerequisites

* Make sure the app is [[configure-auth|registered and configured]] via the {{config.extra.arcana.dashboard_name}}. 

* After successful registration, a unique **{{config.extra.arcana.app_address}}** is assigned to the app. It will be required later for integrating the app with the {{config.extra.arcana.sdk_name}}. Also, a default 'Testnet' configuration profile is associated with every newly registered app. To learn more about various configuration settings, see [[configure-auth|how to use the {{config.extra.arcana.dashboard_name}} to configure app settings]].

* Integrating an app with the {{config.extra.arcana.sdk_name}} may vary slightly depending on the app type, whether it is a vanilla HTML/CSS/JS app, a React app, or a React app using wallet connectors such as Wagmi, RainbowKit or Web3-React wallet connector frameworks. Follow the instructions in the respective [[index-integrate-app|integration guides]] and choose carefully depending on the app type. 

    !!! caution 

          Integrating an app may require installing the {{config.extra.arcana.sdk_name}} via say only the Arcana `{{config.extra.arcana.auth_sdk_pkg_name}}` package, both `{{config.extra.arcana.auth_sdk_pkg_name}}` and app type package such as `{{config.extra.arcana.react_sdk_pkg_name}}`, `{{config.extra.arcana.wagmi_sdk_pkg_name}}` or `{{config.extra.arcana.web3_react_sdk_pkg_name}}`. After installing, the developer must instantiate the appropriate `AuthProvider`, the React component `ProvideAuth`, the Wagmi/Web3-React `ArcanaConnector`, as the case may be. 

### Deploying App (Testnet Configuration)

Before deploying an app that uses the Arcana Testnet configurations, make sure that during the app integration with the {{config.extra.arcana.sdk_name}} a new `AuthProvider` is created using the correct **{{config.extra.arcana.app_address}}** assigned to the 'Testnet' configuration profile.

{% include "./code-snippets/init_auth_testnet.md" %}

<!--

!!! note "Default Network Setting"

      If you do not provide any `network` parameter in the `AuthProvider` constructor, the {{config.extra.arcana.sdk_name}} uses the value 'testnet' as the default. What this means is, by default your app will be deployed to use the Arcana Testnet blockchain protocol.
      
-->

Initialize the newly created `AuthProvider` before adding code in the integrated app to onboard users.  

{% include "./code-snippets/init_auth.md" %}

Only authenticated users are allowed to sign blockchain transactions and perform Web3 wallet operations using the {{config.extra.arcana.wallet_name}}. To onboard app users, developers can use plug-and-play auth via `connect` method or build custom login UI by plugging in {{config.extra.arcana.sdk_name}} `loginWithSocial` and `loginWithLink` methods. For details, see [[index-onboard-users|how to onboard users]]. You can also plug in additional business logic and [[index-arcana-wallet|utilize the {{config.extra.arcana.wallet_name}}]] programmatically for allowing authenticated users to sign blockchain transactions.

#### Run your App

After registering the app, configuring it for the 'Testnet' configuration profile, integrating the app with the {{config.extra.arcana.sdk_name}} by using the 'Testnet' **{{config.extra.arcana.app_address}}**, and finally adding code to onboard users, other business logic, your app is ready to be deployed. Bring up the app and allow users to log in and use Arcana Testnet. 

An authenticated app user will see the following wallet UI when using the Arcana Testnet.
      
<img alt="Testnet Wallet" src="/img/an_migration_testnet_wallet.png" width="35%"/>  

#### Monitor Testnet Usage

Visit the app dashboard screen to view the 'Testnet' configuration profile and monitor Arcana Testnet usage. The figure below shows one new user for the test app.

<img alt="Testnet App Identifier" src="/img/an_deploy_testnet_usage.png" width="70%"/>

### Deploying App (Mainnet Configuration)

Before deploying the app on the Arcana Mainnet, make sure that there exists a 'Mainnet' configuration profile for the app. By default, when you register an app, only the 'Testnet' configuration profile is created. See [[dashboard-user-guide#manage-configurations|how to create the 'Mainnet' configuration profile]] section in the {{config.extra.arcana.dashboard_name}} User Guide.

!!! tip "Check Mainnet Configuration Profile"

      You can check if a 'Mainnet' configuration profile is already created for your app by visiting the **Manage Apps** screen on the {{config.extra.arcana.dashboard_name}}. Refer to the app card. Each card displays Testnet and Mainnet buttons. If the Mainnet button is disabled it means you have not created a 'Mainnet' profile for your app yet.

Once you have created the 'Mainnet' configuration profile for your app, please note that a **new {{config.extra.arcana.app_address}}** is associated with it that must be used while integrating the app with the {{config.extra.arcana.sdk_name}}. While creating a new `AuthProvider`, do remember to update your integration code with the new **{{config.extra.arcana.app_address}}** that is assigned to the 'Mainnet' configuration profile. 

{% include "./code-snippets/init_auth_mainnet.md" %}

<!--

!!! caution "Default Network Setting"

      While integrating your app code for using Arcana Mainnet, if you do not provide any `network` parameter in the `AuthProvider` constructor, the {{config.extra.arcana.sdk_name}} will use the default value 'testnet'. What this means is, by default your app will be configured to use Arcana Testnet but with the specified 'Mainnet' **{{config.extra.arcana.app_address}}**. This mismatch will not work. You need to provide the values for 'Mainnet' in both places, **{{config.extra.arcana.app_address}}** as well as the `network` parameter in the `AuthProvider` constructor.

-->

Initialize the newly created `AuthProvider` before adding code in the integrated app to onboard users. 

{% include "./code-snippets/init_auth.md" %}

Only authenticated users are allowed to sign blockchain transactions and perform Web3 wallet operations using the {{config.extra.arcana.wallet_name}}. To onboard app users, developers can use plug-and-play auth via `connect` method or build custom login UI by plugging in {{config.extra.arcana.sdk_name}} `loginWithSocial` and `loginWithLink` methods. For details, see [[index-onboard-users|how to onboard users]]. You can also plug in additional business logic and [[index-arcana-wallet|utilize the {{config.extra.arcana.wallet_name}}]] programmatically for allowing authenticated users to sign blockchain transactions.

#### Run your App

After registering the app, configuring it for the 'Mainnet' configuration profile, integrating the app with the {{config.extra.arcana.sdk_name}} by using the 'Mainnet' **{{config.extra.arcana.app_address}}**, and finally adding code to onboard users, other business logic, your app is ready to be deployed. Bring up the app and allow users to log in and use Arcana Mainnet. 

An authenticated app user will see the following wallet UI when using the Arcana Mainnet.
      
<img alt="Testnet Wallet" src="/img/an_migration_mainnet_wallet.png" width="35%"/>  

#### Monitor Mainnet Usage

Visit the app dashboard screen to view the 'Mainnet' configuration profile and monitor Arcana Mainnet usage. Note that Arcana Mainnet usage is tracked in terms of MAU and billed. The figure below shows one new user for the test app deployed on Mainnet.

The figure below shows one new user for the test app deployed on Mainnet.

<img alt="Mainnet App Usage" src="/img/an_deploy_mainnet_usage.png" width="70%"/>

That is all! :material-party-popper:

## See Also

* [[web-auth-error-msg|{{config.extra.arcana.sdk_name}} Errors]]
* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]
* {% include "./text-snippets/authsdkref_url.md" %}
