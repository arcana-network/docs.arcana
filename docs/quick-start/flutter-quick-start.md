---
alias: flutter-quick-start
title: 'Quick Start (Flutter Apps) '
description: 'Get Started quickly with mobile apps built with Flutter by following these step-by-step instructions. Register the app, obtain a ClientID and then integrate the app with the Arcana Auth SDK.'
arcana:
  root_rel_path: ..
---

# Quick Start (Flutter Apps)

Use this guide to integrate Flutter mobile apps with the [[concept-authsdk| {{config.extra.arcana.flutter_sdk_name}}]] and quickly build the following features:

* Onboard users easily by configuring one or more [authentication mechanisms]({{page.meta.arcana.root_rel_path}}/concepts/authtype/arcanaauth.md#supported-authentication-mechanisms)
* Enable {{config.extra.arcana.wallet_name}} and allow authenticated users to sign blockchain transactions, manage crypto assets, and [more]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md).

## Overview

Follow these steps to register, configure, integrate, and use the {{config.extra.arcana.flutter_sdk_name}} features such as onboarding users and allowing them to sign blockchain transactions in Web3 apps:

1. Use the {{config.extra.arcana.dashboard_name}} and register the app; obtain a unique **{{config.extra.arcana.app_address}}**.
2. Set up social providers that will be enabled for onboarding app users.
3. Install the {{config.extra.arcana.flutter_sdk_name}} and integrate the app to onboard users either via the built-in plug-and-play login UI or custom UI.
4. Allow authenticated users to instantly access the {{config.extra.arcana.wallet_name}}.
5. Add code in the app for programmatically accessing Web3 wallet operations supported by the {{config.extra.arcana.wallet_name}}.

## Register & Configure

Before integrating an app with the {{config.extra.arcana.flutter_sdk_name}}, follow the instructions to [[configure-auth|register and configure]] the app using the {{config.extra.arcana.dashboard_name}}. As part of the app registration, a unique value, **{{config.extra.arcana.app_address}}**, is assigned to each app. This is required for integrating the app with the {{config.extra.arcana.flutter_sdk_name}}.

During app configuration, developers can enable one or more options to onboard app users.

!!! info "User Onboarding Options"

      Web3 app developers can [[index-configure-auth|configure one or more authentication providers]] to let app users choose one of the available options and log in.
        
      If the app is registered but none of the supported authentication providers are enabled and configured for user onboarding, then by default, only the [[build-password-less-auth|passwordless login]] can be used to onboard app users.

## Integrate Flutter App

Follow these steps to integrate the Flutter mobile app with the {{config.extra.arcana.flutter_sdk_name}}:

### Step 1: Install Auth SDK

The {{config.extra.arcana.flutter_sdk_name}} is available at 'Pub.dev' as a [Flutter plugin](https://docs.flutter.dev/packages-and-plugins/developing-packages) package called [`{{config.extra.arcana.mobile_flutter_sdk_pkg_name}}`](https://pub.dev/packages/arcana_auth_flutter). 

Add the following line to the dependencies section in your app's `pubspec.yaml` file:

```bash
  arcana_auth_flutter: ^0.0.6 
```

### Step 3: Integrate Auth with App

As part of integrating an app with the {{config.extra.arcana.flutter_sdk_name}}, specify the unique **client ID** assigned to the registered app in the previous step when creating an `AuthProvider`.

```javascript
import 'package:arcana_sdk/arcana_sdk.dart';

final auth = AuthProvider(clientId:"xar_xxxx_...");
auth.init(context: context);
```

Once initialized, you can call the `AuthProvider` functions for onboarding users and signing blockchain transactions.

### Step 4: Onboard Users

Add code in the app to onboard users when a user chooses to log in using one of the configured social providers or via OTP.  

#### Add Social Login

```js
auth.loginWithSocial("google").then((_) => {
  // On login Success
}).catchError(...);
```

#### Login with OTP

```js
auth.loginWithOTP("${email_id}").then((_) => {
  // On login Success
}).catchError(...);
```

#### Logout

Call the logout method in response to a user's choice to log out.  Once a user is authenticated, the Arcana wallet can be displayed in the context of the Flutter app. The Arcana wallet UI also provides an option to log out via the profile tab.

```js
auth.logout().then((_) => {
  // On logout
});
```

Developers can choose to show or hide the wallet as per the app requirements. 

```js
auth.showWallet();
```

```js
auth.hideWallet();
```

To determine in the Flutter app if the Arcana wallet is visible in the app's context, get the visibility status:

```js
var isVisible = auth.isVisible();
```

Flutter apps can use `clearCache` to clear the Webview cache:

```js
auth.clearCache();
```

Flutter app developers can also enable any of the supported Web3 operations in the Arcana Auth SDK once the users have authenticated. These web operations such as 'send transaction' could trigger blockchain transactions. A transaction notification will be displayed requesting the user to approve or reject the request.

#### Web3 Operations

The `AuthProvider` supports the JSON-RPC requests for the following web3 operations:

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

After integrating the Flutter mobile app with the {{config.extra.arcana.flutter_sdk_name}} and adding code to onboard users via configured providers such as 'Google' and calling web3 wallet operation requests, developers can deploy the app.  Depending upon the environment selected during the Auth SDK initialization earlier, the app will be deployed on the Arcana Testnet or Mainnet.

### Deploy App

An app integrated with the {{config.extra.arcana.flutter_sdk_name}} can be deployed for use only **after** the developer has completed these steps:

* Register and configure the app via the {{config.extra.arcana.dashboard_name}} 
* Integrate the app with the {{config.extra.arcana.flutter_sdk_name}} 
* Add code to onboard users 
* Add code to allow authenticated users to sign the blockchain transactions

Developers can choose to deploy one instance of the app (say, under active development) on the {{config.extra.arcana.company_name}} Testnet while simultaneously deploying a stable version of their app (say, one validated on Testnet and ready for users) on the {{config.extra.arcana.company_name}} Mainnet.

By default, when an app is registered, a 'Testnet' configuration profile is associated with the app, and a unique **{{config.extra.arcana.app_address}}** is assigned to this 'Testnet' profile. To deploy your app on the {{config.extra.arcana.company_name}} Mainnet, you need to create a corresponding 'Mainnet' configuration profile and update the {{config.extra.arcana.flutter_sdk_name}} integration code to use the **new {{config.extra.arcana.app_address}}** assigned to the app's 'Mainnet' configuration profile. For details on how to deploy your app on the {{config.extra.arcana.company_name}} Testnet / Mainnet, see [[deploy-app|App Deployment Guide]].

That is all!

The Flutter mobile app is now ready to onboard users. Once the user logs in, the {{config.extra.arcana.wallet_name}} will be instantly accessible for web3 wallet operations through the UI. Developers can also add code in the Flutter mobile app and call wallet functions programmatically via the supported [Web3 operations](#web3-operations) listed above. When a user action or programmatically invoked wallet operation triggers a blockchain transaction, a transaction notification will pop up in the Flutter mobile app context, asking the user to review the transaction and accept or reject the blockchain request.

## See also

* [User Authentication]({{page.meta.arcana.root_rel_path}}/concepts/authtype/arcanaauth.md)
* [[index-video-tutorials|Video Tutorials]]
* [Flutter app integration example](https://github.com/arcana-network/auth-flutter/tree/main/example)