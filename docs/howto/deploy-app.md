---
alias: deploy-app
title: 'Deploy: Arcana Testnet/Mainnet'
description: 'Learn how developers can deploy the apps integrated with the Arcana Auth on the Arcana Testnet/Mainnet.'
arcana:
  root_rel_path: ..
---

# Deploy: Arcana Testnet/Mainnet

In this guide, you will learn how developers can deploy apps integrated with the {{config.extra.arcana.sdk_name}} and deploy it on the Arcana Testnet/Mainnet. 

!!! caution "Already using {{config.extra.arcana.sdk_name}}?"

      Before deploying on the Mainnet, make sure that the app is integrated with the latest version of the SDK, v{{config.extra.arcana.latest_version}}, and tested on Arcana Testnet. If not,  use the appropriate [[index-migration-guides|Migration Guide]] to upgrade. 

Developers can choose to configure and deploy one instance of the app under active development on the Testnet. Once it is validated and ready for onboarding users, they can deploy it on Mainnet. It is also possible to simultaneously deploy one instance on Testnet and a stable one on the Mainnet.

## Prerequisites

* The app must be [[configure-auth| registered]] and [[configure-auth| configured]] via the {{config.extra.arcana.dashboard_name}}. 

* After successful registration, a unique **{{config.extra.arcana.app_address}}** is assigned to the app. Save and use it for integrating the app with the SDK. A default 'Testnet' configuration profile is associated with every newly registered app. Before deploying on Arcana Mainnet, the developer must use the {{config.extra.arcana.dashboard_name}} and copy or reconfigure the SDK usage settings to create a Mainnet settings profile.

* Integrating an app with the {{config.extra.arcana.sdk_name}} may vary slightly depending on the app type, whether it is a vanilla HTML/CSS/JS app, a React app, or a React app using wallet connectors such as Wagmi, RainbowKit or Web3-React wallet connector frameworks. Follow the instructions in the respective [[index-integrate-app|integration guides]] and choose carefully depending on the app type. 

    !!! caution "Before Installing the SDK"

          Integrating an app may require installing the {{config.extra.arcana.sdk_name}} via say only the Arcana `{{config.extra.arcana.auth_sdk_pkg_name}}` package, both `{{config.extra.arcana.auth_sdk_pkg_name}}` and app type package such as `{{config.extra.arcana.react_sdk_pkg_name}}`, `{{config.extra.arcana.wagmi_sdk_pkg_name}}` or `{{config.extra.arcana.web3_react_sdk_pkg_name}}`. After installing, the developer must instantiate the appropriate `AuthProvider`, the React component `ProvideAuth`, or the Wagmi/Web3-React `ArcanaConnector`, as the case may be.

* Only authenticated users are allowed to sign blockchain transactions and perform Web3 wallet operations using the {{config.extra.arcana.wallet_name}}. Before deploying the app, developers can add code to onboard users. Choose built-in plug-and-play login UI via `connect` method or build custom login UI by calling the `loginWithSocial` and `loginWithLink` methods. For details, see [[index-onboard-users|how to onboard users]]. You can also plug in additional business logic and [[index-arcana-wallet|utilize the {{config.extra.arcana.wallet_name}}]] programmatically for allowing authenticated users to sign blockchain transactions. 

### Configure Testnet

To deploy on Arcana Testnet, while integrating the app with the {{config.extra.arcana.sdk_name}}, make sure that a new `AuthProvider` is created using the **Testnet {{config.extra.arcana.app_address}}**. Refer to the Testnet configuration profile in the {{config.extra.arcana.dashboard_name}} to view and copy the Testnet {{config.extra.arcana.app_address}} that is assigned by default when the app is registered.

For example, the code below uses the {{config.extra.arcana.app_address}} assigned to the Testnet configuration profile for the sample app:

{% include "./code-snippets/init_auth_testnet.md" %}

<img alt="Testnet client Id" src="/img/an_deploy_testnet_dashboard.png" width="85%"/>

Next, call the `init` function to initialize the newly created `AuthProvider` before calling any other SDK functions.  

{% include "./code-snippets/init_auth.md" %}

If you have integrated the app using the Testnet {{config.extra.arcana.app_address}}, your app is ready to be deployed on Arcana Testnet. Optionally, add the user onboarding code and logic for initiating blockchain transactions programmatically.

#### Deploy on Testnet

After registering the app and integrating it using the correct Testnet {{config.extra.arcana.app_address}}, you are all set to deploy and test your app on the Arcana Testnet. Simply Bring up the app. When users log in, the app will automatically use the Arcana Testnet. The wallet address assigned to authenticated the user will correspond to Arcana Testnet.

<img alt="Testnet Wallet" src="/img/an_deploy_testnet_wallet.png" width="35%"/>  

#### Monitor Testnet Usage

Visit the app dashboard screen in the {{config.extra.arcana.dashboard_name}} to view the 'Testnet' configuration profile and monitor Arcana Testnet usage. The figure below shows one new user for the test app.

<img alt="Testnet App Identifier" src="/img/an_deploy_testnet_usage.png" width="70%"/>

### Configure Mainnet

Before deploying the app on the Arcana Mainnet, make sure that there exists a 'Mainnet' configuration profile for the app. By default, when you register an app, only the 'Testnet' configuration profile is created. See [[dashboard-user-guide#manage-configurations|how to create the 'Mainnet' configuration profile]] section in the {{config.extra.arcana.dashboard_name}} User Guide.

!!! tip "Check Mainnet Configuration Profile"

      You can check if a 'Mainnet' configuration profile is already created for your app by visiting the **Manage Apps** screen on the {{config.extra.arcana.dashboard_name}}. Refer to the app card. Each card displays Testnet and Mainnet buttons. If the Mainnet button is disabled it means you have not created a 'Mainnet' profile for your app yet.

Mainnet configuration profile is associated with a different {{config.extra.arcana.app_address}} than the Testnet configuration. Once you have created the 'Mainnet' configuration profile for your app, copy and save the **new {{config.extra.arcana.app_address}}**. Use it while integrating the app with the {{config.extra.arcana.sdk_name}}. Make sure that you create the `AuthProvider` and specify the **Mainnet {{config.extra.arcana.app_address}}**. This is required to deploy the app on Arcana Mainnet.

For example,

{% include "./code-snippets/init_auth_mainnet.md" %}

<img alt="Testnet client Id" src="/img/an_deploy_mainnet_dashboard.png" width="85%"/>

Next, call the `init` function to initialize the newly created `AuthProvider` before calling any other SDK functions.  

{% include "./code-snippets/init_auth.md" %}

If you have integrated the app using the Mainnet {{config.extra.arcana.app_address}}, your app is ready to be deployed on Arcana Mainnet. Optionally, add the user onboarding code and logic for initiating blockchain transactions programmatically.

#### Deploy on Mainnet

After registering the app, configuring it for the 'Mainnet' configuration profile, integrating the app with the {{config.extra.arcana.sdk_name}} by using the 'Mainnet' **{{config.extra.arcana.app_address}}**, and optionally adding code to onboard users, other business logic, your app is ready to be deployed on the Mainnet. Simply Bring up the app. When users log in, the app will automatically use the Arcana Mainnet. The wallet address assigned to authenticated the user will correspond to Arcana Mainnet.
      
<img alt="Testnet Wallet" src="/img/an_deploy_mainnet_wallet.png" width="35%"/>  

#### Monitor Mainnet Usage

Visit the app dashboard screen to view the 'Mainnet' configuration profile and monitor Arcana Mainnet usage. Note that Arcana Mainnet usage is tracked in terms of MAU and billed. The figure below shows one new user for the test app deployed on Mainnet.

<img alt="Mainnet App Usage" src="/img/an_deploy_mainnet_usage.png" width="70%"/>

!!! caution "Different Wallet Address"

      Note that the assigned keys/wallet addresses change across Testnet/Mainnet deployments. 
      
      **The authenticated users will see a different wallet address when they log on to the same app that is deployed on Mainnet.**
      
      In the case of apps using the 'Global Keys' feature, the user will see the same wallet address across apps integrated with the {{config.extra.arcana.product_name}} product on the Arcana Mainnet. However, even with 'Global Keys' enabled, users will see different keys/wallet addresses for the same app deployed on Testnet/Mainnet.

That is all! :material-party-popper:

## See Also

* [[web-auth-error-msg|{{config.extra.arcana.sdk_name}} Errors]]
* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]
* {% include "./text-snippets/authsdkref_url.md" %}
