---
alias: react-native-quick-start
title: 'Quick Start: React-Native Apps '
description: 'Get Started quickly with mobile apps built with React-Native by following these step-by-step instructions. Register the app, obtain a ClientID and then integrate the app with the Arcana Auth SDK.'
arcana:
  root_rel_path: ..
---

# Quick Start: React-Native Apps

Use this guide to integrate Web3 apps with the [[concept-authsdk| {{config.extra.arcana.react_native_sdk_name}}]] and quickly build the following features:

* Onboard users easily by configuring one or more [authentication mechanisms]({{page.meta.arcana.root_rel_path}}/concepts/authtype/arcanaauth.md#supported-authentication-mechanisms)
* Enable {{config.extra.arcana.wallet_name}} and allow authenticated users to sign blockchain transactions, manage crypto assets, and [more]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md).

## Overview

Follow these steps to register, configure, integrate, and use the {{config.extra.arcana.react_native_sdk_name}} features such as onboarding users and allowing them to sign blockchain transactions in Web3 apps:

1. Use the {{config.extra.arcana.dashboard_name}} and register the app; obtain a unique **{{config.extra.arcana.app_address}}**.
2. Set up social providers that will be enabled for onboarding app users.
3. Install the {{config.extra.arcana.react_native_sdk_name}} and integrate the app to onboard users either via the built-in plug-and-play login UI or custom UI.
4. Allow authenticated users to instantly access the {{config.extra.arcana.wallet_name}}.
5. Add code in the app for programmatically accessing Web3 wallet operations supported by the {{config.extra.arcana.wallet_name}}.

## Register & Configure

First, follow the instructions to [[configure-auth|register and configure]] the app using the {{config.extra.arcana.dashboard_name}}. As part of the app registration, a unique value, **{{config.extra.arcana.app_address}}**, is assigned to each app. This is required for integrating the app with the {{config.extra.arcana.react_native_sdk_name}}.

During app configuration, developers can enable one or more options to onboard app users.

!!! info "User Onboarding Options"

      Web3 app developers can [[index-configure-auth|configure one or more authentication providers]] to let app users choose one of the available options and log in.
        
      If the app is registered but none of the supported authentication providers are enabled and configured for user onboarding, then by default, only the passwordless login is available.

## Integrate React-Native App

After registering and configuring the React-Native app, follow these steps to integrate the React-Native app with the {{config.extra.arcana.react_native_sdk_name}}:

### Step 1: Install Auth SDK

You need to install the [`{{config.extra.arcana.mobile_react_native_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-react-native) package.

```bash
npm i @arcana/auth-react-native
(cd ios && pod install)
```

**Note:** You are **not required** to manually link this module as it supports React Native auto-linking.

### Step 2: Initialize Auth Component

```jsx
import React, { useState } from "react";
import { Button, View } from "react-native";
import Auth from "@arcana/auth-react-native";

export default function App() {
  const authRef = React.useRef(null);

  return (
    <View >
      <Auth clientId="xar_test_xxx" theme="light" ref={authRef} />
    </View>
  );
}
```
Make sure that you specify the unique client ID assigned to the app during registration with the Arcana Network.

```javascript
<Auth clientId="xar_test_xxx" theme="dark" />
```

### Step 3: Onboard Users

Use the `Auth` functions for onboarding users in the app via the configured social providers such as Google.

```javascript

// For logging in
const loginWithGoogle = () => {
  if(authRef !== null){
    authRef.current.loginWithSocial().then(() => {
      // logged in
    }).catch(err => {
      // already logged in
      // or error during login
    }) 
  }
}
```

### Show/Hide Wallet

Once the user logs into the app, they can instantly access the Arcana wallet. Developers can choose to show and hide the wallet as required by the app.

```js
// For showing wallet
const showWallet = () => {
  if(authRef !== null){
    authRef.current.showWallet();
  }
}

// For hiding wallet
const hideWallet = () => {
  if(authRef !== null){
    authRef.current.hideWallet();
  }
}
```

### Logout

Add code to enable users to log out of the wallet.  Note that the wallet UI also provides a way for the user's to log out using the 'User Profile' tab.

```js
// Logout User from session
const logout = () => {
  if(authRef !== null){
    authRef.current.logout().then(() => {
      // on logout
    });
  }
};
```

### Web3 Operations

The Arcana wallet supports various Web3 operations via JSON-RPC calls and EIP-1193 requests. Use the following methods to get information about the logged-in user, the account details and issue send transaction requests programmatically via the app. When a blockchain transaction is triggered, a transaction notification is displayed in the app context. Users can choose to approve or reject the request.

```js

// For getting logged in user info
const getUserInfo = async () => {
  if(authRef !== null){
    return authRef.current.getUserInfo();
  }
};

// For sending transaction
const sendTransaction = data => {
  if(authRef !== null){
    return await authRef.current.sendTransaction(data);
  }
};

// For getting current account
const getAccount = () => {
  if(authRef !== null){
    return await authRef.current.getAccount();
  }
};

// For getting current account balance
const getBalance = () => {
  if(authRef !== null){
    return await authRef.current.getBalance();
  }
};

// EIP 1193 request method
const request = (method, params) => {
  if(authRef !== null){
    return await authRef.current.request({ method, params });
  }
};

```

### Event Handling

Refer to the following sample code to understand how to handle events in the React-Native app related to the Web3 operations initiated by the Arcana wallet.

```js

return (
    <View >
      <Button
        title={"Get User Info"}
        onPress={() =>
          getUserInfo()
        }
      />
      <Button
        title={"Send Transaction"}
        onPress={() =>
          sendTransaction({ to: '', value: '', data: '' })
        }
      />
        <Button
        title={"Get Account"}
        onPress={() =>
          getAccount()
        }
      />

        <Button
        title={"Send Request"}
        onPress={() =>{
          sendRequest({ method:"", params:[] })
        }}
      />
       <Button
        title={"log out"}
        onPress={() => logout()}
      />
      <Auth
          clientId="xar_test_...."
          theme="dark"
          ref={authRef}
      />
    </View>
  );

```

After integrating the React-Native app with the {{config.extra.arcana.react_native_sdk_name}} and adding code to onboard users via 'Google', you can deploy the app.  Depending upon the environment selected during the Auth SDK initialization earlier, the app will be deployed on the Arcana Testnet or Mainnet.

## Deploy App

An app integrated with the {{config.extra.arcana.react_native_sdk_name}} can be deployed for use only **after** the developer has completed these steps:

* Register and configure the app via the {{config.extra.arcana.dashboard_name}} 
* Integrate the app with the {{config.extra.arcana.react_native_sdk_name}} 
* Add code to onboard users 
* Add code to allow authenticated users to sign the blockchain transactions

Developers can choose to deploy one instance of the app (say, under active development) on the {{config.extra.arcana.company_name}} Testnet while simultaneously deploying a stable version of their app (say, one validated on Testnet and ready for users) on the {{config.extra.arcana.company_name}} Mainnet.

By default, when an app is registered, a 'Testnet' configuration profile is associated with the app, and a unique **{{config.extra.arcana.app_address}}** is assigned to this 'Testnet' profile. To deploy your app on the {{config.extra.arcana.company_name}} Mainnet, you need to create a corresponding 'Mainnet' configuration profile and update the {{config.extra.arcana.react_native_sdk_name}} integration code to use the **new {{config.extra.arcana.app_address}}** assigned to the app's 'Mainnet' configuration profile. For details on how to deploy your app on the {{config.extra.arcana.company_name}} Testnet / Mainnet, see [[deploy-app|App Deployment Guide]]. 

!!! tip "Testnet > Mainnet"

      If you have deployed your Unity app on Arcana Testnet and are looking to migrate it on the Mainnet, see [[migrate-app-testnet-mainnet|Testnet > Mainnet Migration Guide]].

That is all!

The React-Native mobile app is now ready to onboard users. Once the user logs in, the {{config.extra.arcana.wallet_name}} will be instantly accessible for Web3 wallet operations through the UI. Developers can also add code in the React-Native mobile app and call wallet functions programmatically to trigger blockchain transactions. When a user action or programmatically invoked wallet operation triggers a blockchain transaction, a transaction notification will pop up in the React-Native mobile app context, asking the user to review the transaction and accept or reject the blockchain request.

## See also

* [User Authentication]({{page.meta.arcana.root_rel_path}}/concepts/authtype/arcanaauth.md)
* [[index-video-tutorials|Video Tutorials]]
* [Demo App Source Code](https://github.com/arcana-network/auth-react-native-pg)