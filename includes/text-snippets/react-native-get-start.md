!!! note "Already using {{config.extra.arcana.react_native_sdk_name}}?"
  
      {% include "./text-snippets/warn_latest_react_native_sdk_version.md" %}

## Overview

These are the high level steps to get started with {{config.extra.arcana.product_name}} product:

1. Register your app using the {{config.extra.arcana.dashboard_name}} and get a unique {{config.extra.arcana.app_address}} assigned to it. This {{config.extra.arcana.app_address}} will be required later during app integration. Configure [social providers]({{page.meta.arcana.root_rel_path}}/concepts/authtype/arcanaauth.md#supported-authentication-mechanisms) for [[concept-index-auth-type|authenticating users]], select the built-in {{config.extra.arcana.wallet_name}} UI or build a custom wallet UI.
2. Install and integrate the {{config.extra.arcana.sdk_name}}. Create a new `AuthProvider` using {{config.extra.arcana.app_address}} and choose either the built-in login UI or custom login UI for onboarding users.
3. Implement programmatic access to [[index-arcana-wallet|{{config.extra.arcana.wallet_name}} operations]] in your app as per the business logic. Authenticated users can instantly access the {{config.extra.arcana.wallet_name}} UI or a custom wallet UI as configured by the developer during app registration.
4. Deploy your app on the Testnet for validation. Next, migrate app deployment from Testnet to the Mainnet by replicating the Testnet configuration profile or choosing a different configuration for the Mainnet deployment.

<img class="an-screenshots" src="/img/an_auth_usage_overview_light.png#only-light" alt="uth Usage Overview"/>
<img class="an-screenshots" src="/img/an_auth_usage_overview_dark.png#only-dark" alt="Auth Usage Overview"/>

## Steps 

### Step 1: Register & Configure

First, [[configure-auth|register and then configure]] the app using the {{config.extra.arcana.dashboard_name}}. As part of the app registration, a unique value, **{{config.extra.arcana.app_address}}**, is assigned to each app. This is required for integrating the app with the {{config.extra.arcana.react_native_sdk_name}}.

During app configuration, developers can [[index-configure-auth|configure one or more authentication providers]] to onboard app users.

!!! info "Passwordless Option"

      When an app is registered using the dashboard, and no authentication providers are set up for onboarding, only the passwordless login option is available by default.

### Step 2: Install Auth SDK

You need to install the [`{{config.extra.arcana.mobile_react_native_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-react-native) package to integrate the app with the {{config.extra.arcana.react_native_sdk_name}}.

{% include "./code-snippets/auth_react_native_install.md" %}

**Note:** You are **not required** to manually link this module as it supports React Native auto-linking.

### Step 3: Integrate  {{config.extra.arcana.react_native_sdk_name}}

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

=== "Onboard Users"

    Use the `Auth` functions for onboarding users in the app via the configured social providers such as Google.

    ```javascript

    // For logging in
    const loginWithGoogle = () => {
      if(authRef !== null){
        authRef.current.loginWithSocial("google").then(() => {
          // logged in
        }).catch(err => {
          // already logged in
          // or error during login
        }) 
      }
    }
    ```

    !!! tip "Arcana JWT Token"

          {% include "./text-snippets/jwt_token.md" %}

    **Logout**

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

    **Show/Hide Wallet**

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

=== "Wallet Ops"

    The Arcana wallet supports various [[index-web3-wallet-ops|Web3 operations]] via JSON-RPC calls and EIP-1193 requests.
    
    Use the following methods to get information about the logged-in user, the account details and issue send transaction requests programmatically via the app. When a blockchain transaction is triggered, a transaction notification is displayed in the app context. Users can choose to approve or decline the request.

    ```js

    // For getting logged in user info
    const getUserInfo = async () => {
      if(authRef !== null){
        return authRef.current.getUser();
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

=== "Event Handling"

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

### Step 4: Deploy App

An app integrated with the {{config.extra.arcana.react_native_sdk_name}} can be deployed for use only **after** the developer has completed these steps:

* Register and configure the app via the {{config.extra.arcana.dashboard_name}} 
* Integrate the app with the {{config.extra.arcana.react_native_sdk_name}} 
* Add code to onboard users 
* Add code to allow authenticated users to sign the blockchain transactions

Developers can choose to deploy one instance of the app (say, under active development) on the {{config.extra.arcana.company_name}} Testnet while simultaneously deploying a stable version of their app (say, one validated on Testnet and ready for users) on the {{config.extra.arcana.company_name}} Mainnet.

By default, when an app is registered, a 'Testnet' configuration profile is associated with the app, and a unique **{{config.extra.arcana.app_address}}** is assigned to this 'Testnet' profile. To deploy your app on the {{config.extra.arcana.company_name}} Mainnet, you need to create a corresponding 'Mainnet' configuration profile and update the {{config.extra.arcana.react_native_sdk_name}} integration code to use the **new {{config.extra.arcana.app_address}}** assigned to the app's 'Mainnet' configuration profile. For details on how to deploy your app on the {{config.extra.arcana.company_name}} Testnet / Mainnet, see [[deploy-app|App Deployment Guide]]. 

!!! tip "Testnet > Mainnet"

      If you have deployed your Unity app on Arcana Testnet and are looking to migrate it on the Mainnet, see [[migrate-app-testnet-mainnet|Testnet > Mainnet Migration Guide]].

That is all! :material-party-popper:

{==

The React-Native mobile app is now ready to onboard users.

==}

After logging in, users instantly access the {{config.extra.arcana.wallet_name}} for Web3 wallet operations through the UI. Developers can also programmatically invoke wallet functions in the React-Native mobile app using supported [Web3 operations](#web3-operations). When a user action or programmatically invoked operation triggers a blockchain transaction, a notification will appear in the React-Native mobile app, prompting the user to review and approve or decline the transaction.

## See also

* [User Authentication]({{page.meta.arcana.root_rel_path}}/concepts/authtype/arcanaauth.md)
* [[index-video-tutorials|Video Tutorials]]
* [Sample React-Native App Integration](https://github.com/arcana-network/auth-examples)