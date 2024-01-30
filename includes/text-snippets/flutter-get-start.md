!!! note "Already using {{config.extra.arcana.flutter_sdk_name}}?"
  
      {% include "./text-snippets/warn_latest_flutter_sdk_version.md" %}

## Overview

These are the high-level steps to get started with the {{config.extra.arcana.product_name}} product:

1. Register your app using the {{config.extra.arcana.dashboard_name}} and get a unique {{config.extra.arcana.app_address}} assigned to it. This {{config.extra.arcana.app_address}} will be required later during app integration. Configure [social providers]({{page.meta.arcana.root_rel_path}}/concepts/authtype/arcanaauth.md#supported-authentication-mechanisms) for [[concept-index-auth-type|authenticating users]], select the built-in {{config.extra.arcana.wallet_name}} UI or build a custom wallet UI.
2. Install and integrate the {{config.extra.arcana.sdk_name}}. Create a new `AuthProvider` using {{config.extra.arcana.app_address}} and choose either the built-in login UI or custom login UI for onboarding users.
3. Implement programmatic access to [[index-arcana-wallet|{{config.extra.arcana.wallet_name}} operations]] in your app as per the business logic. Authenticated users can instantly access the {{config.extra.arcana.wallet_name}} UI or a custom wallet UI as configured by the developer during app registration.
4. Deploy your app on the Testnet for validation. Next, migrate app deployment from Testnet to the Mainnet by replicating the Testnet configuration profile or choosing a different configuration for the Mainnet deployment.

<img class="an-screenshots" src="/img/an_auth_usage_overview_light.png#only-light" alt="uth Usage Overview"/>
<img class="an-screenshots" src="/img/an_auth_usage_overview_dark.png#only-dark" alt="Auth Usage Overview"/>

## Steps

### Step 1: Register & Configure

Before integrating an app with the {{config.extra.arcana.flutter_sdk_name}}, follow the instructions to [[configure-auth|register and configure]] the app through the {{config.extra.arcana.dashboard_name}}. As part of the app registration, a unique value, **{{config.extra.arcana.app_address}}**, is assigned to each app. This is required for integrating the app with the {{config.extra.arcana.flutter_sdk_name}}.

During app configuration, developers can enable [[index-configure-auth|one or more authentication providers]] for onboarding users.

!!! info "Password-less Option"

      When an app is registered, and no authentication providers are set up for onboarding, only the passwordless login option is available by default.

### Step 2: Install {{config.extra.arcana.flutter_sdk_name}}

The {{config.extra.arcana.flutter_sdk_name}} is available at 'Pub.dev' as a [Flutter plugin](https://docs.flutter.dev/packages-and-plugins/developing-packages) package called [`{{config.extra.arcana.mobile_flutter_sdk_pkg_name}}`](https://pub.dev/packages/arcana_auth_flutter). 

Add the following line to the dependencies section in your app's `pubspec.yaml` file:

{% include "./code-snippets/auth_flutter_install.md" %}

### Step 3: Integrate App

Once installed, integrate the app with the {{config.extra.arcana.flutter_sdk_name}}, specify the unique **client ID** assigned to the registered app in the previous step when creating an `AuthProvider`.

```javascript
import 'package:arcana_sdk/arcana_sdk.dart';

final auth = AuthProvider(clientId:"xar_xxxx_...");
auth.init(context: context);
```

Once initialized, you can call the `AuthProvider` functions for onboarding users and signing blockchain transactions.

=== "Onboard Users"

    Add code in the app to onboard users when a user chooses to log in using one of the configured social providers or via OTP.  

    **Add Social Login**

    ```js
    auth.loginWithSocial("google").then((_) => {
      // On login Success
    }).catchError(...);
    ```

    **Login with OTP**

    ```js
    auth.loginWithOTP("${email_id}").then((_) => {
      // On login Success
    }).catchError(...);
    ```

    !!! tip "Arcana JWT Token"

          {% include "./text-snippets/jwt_token.md" %}

    **Logout**

    Call the logout method in response to a user's choice to log out.  Once a user is authenticated, the Arcana wallet can be displayed in the context of the Flutter app. The Arcana wallet UI also provides an option to log out via the profile tab.

    ```js
    auth.logout().then((_) => {
      // On logout
    });
    ```

    **Show/Hide Wallet UI**

    Developers can choose to show or hide the wallet as per the app requirements. 

    ```js
    auth.showWallet();
    ```

    ```js
    auth.hideWallet();
    ```

    **Check Wallet Visibility**

    To determine in the Flutter app if the Arcana wallet is visible in the app's context, get the visibility status:

    ```js
    var isVisible = auth.isVisible();
    ```

    **Clear Cache**

    Flutter apps can use `clearCache` to clear the Webview cache:

    ```js
    auth.clearCache();
    ```

    Flutter app developers can also enable any of the supported Web3 operations in the Arcana Auth SDK once the users have authenticated. These web operations such as 'send transaction' could trigger blockchain transactions. A transaction notification will be displayed requesting the user to approve or reject the request.

=== "Sign Blockchain Transactions"

    The `AuthProvider` supports the JSON-RPC requests for the following Web3 operations:

    Make an EIP-1193 Request

    ```js
    auth.request(method: "...", params: [...]).then(() => ...);
    ```

    Get information for the logged-in user:

    ```js
    auth.getUserInfo().then((UserInfo info) => ...);
    ```

    Initiate send transaction request:

    ```js
    auth.sendTransaction({ to: "", value: "" }).then((hash) => ...);
    ```

    Get the user account address:

    ```js
    auth.getAccount().then((account) => ...);
    ```

    After integrating the Flutter mobile app with the {{config.extra.arcana.flutter_sdk_name}} and adding code to onboard users via configured providers such as 'Google' and calling Web3 wallet operation requests, developers can deploy the app.  Depending upon the environment selected during the Auth SDK initialization earlier, the app will be deployed on the Arcana Testnet or Mainnet.

### Step 4: Deploy App

An app integrated with the {{config.extra.arcana.flutter_sdk_name}} can be deployed for use only **after** the developer has completed these steps:

* Register and configure the app via the {{config.extra.arcana.dashboard_name}} 
* Integrate the app with the {{config.extra.arcana.flutter_sdk_name}} 
* Add code to onboard users 
* Add code to allow authenticated users to sign the blockchain transactions

Developers can choose to deploy one instance of the app (say, under active development) on the {{config.extra.arcana.company_name}} Testnet while simultaneously deploying a stable version of their app (say, one validated on Testnet and ready for users) on the {{config.extra.arcana.company_name}} Mainnet.

By default, when an app is registered, a 'Testnet' configuration profile is associated with the app, and a unique **{{config.extra.arcana.app_address}}** is assigned to this 'Testnet' profile. To deploy your app on the {{config.extra.arcana.company_name}} Mainnet, you need to create a corresponding 'Mainnet' configuration profile and update the {{config.extra.arcana.flutter_sdk_name}} integration code to use the **new {{config.extra.arcana.app_address}}** assigned to the app's 'Mainnet' configuration profile. For details on how to deploy your app on the {{config.extra.arcana.company_name}} Testnet / Mainnet, see [[deploy-app|App Deployment Guide]].

!!! tip "Testnet -> Mainnet"

      If you have deployed your Flutter app on Arcana Testnet and are looking to migrate it on the Mainnet, see [[migrate-app-testnet-mainnet|Testnet > Mainnet Migration Guide]].

That is all! :material-party-popper:

{==

The Flutter mobile app is now ready to onboard users.

==}

After logging in, users instantly access the {{config.extra.arcana.wallet_name}} for Web3 wallet operations through the UI. Developers can also programmatically invoke wallet functions in the Flutter mobile app using supported [Web3 operations](#web3-operations). When a user action or programmatically invoked operation triggers a blockchain transaction, a notification will appear in the Flutter mobile app, prompting the user to review and approve or decline the transaction.

## See also

* [{{config.extra.arcana.flutter_sdk_name}} Usage Guide](https://pub.dev/packages/arcana_auth_flutter)
* {% include "./text-snippets/flutter_authsdkref_url.md" %}
* [User Authentication]({{page.meta.arcana.root_rel_path}}/concepts/authtype/arcanaauth.md)
* [[index-video-tutorials|Video Tutorials]]
* [Flutter app integration example](https://github.com/arcana-network/auth-examples)
