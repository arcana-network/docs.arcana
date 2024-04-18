{{page.meta.arcana.app_type}} Web3 apps can easily onboard users via social login by integrating with the {{config.extra.arcana.react_native_sdk_name}}!

## Prerequisites

* React-Native [v0.71.8](https://reactnative.dev/versions) or higher

## 1. Register & Configure

{% include "./text-snippets/quick-start-reg-config-auth.md" %}

## 2. Install SDK

For {{page.meta.arcana.app_type}} Web3 apps, install the [`{{config.extra.arcana.mobile_react_native_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-react-native) package.

{% include "./code-snippets/auth_react_native_install.md" %}

**Note:** You are **not required** to manually link this module, as it supports React Native auto-linking.

!!! an-note "Use latest SDKs"
  
      {% include "./text-snippets/warn_latest_react_native_sdk_version.md" %}

## 3. Integrate

Use the unique client ID assigned to the app during registration to integrate with the SDK.


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

```javascript
<Auth clientId="xar_test_xxx" theme="dark" />
```

### Onboard Users

Call `Auth` functions and onboard users through the configured authentication providers.

!!! an-tip "Arcana JWT Token"

      {% include "./text-snippets/jwt_token.md" %}

=== "Login"

    **Google Login***

    ```javascript

    // For logging in
    const loginWithGoogle = () => {
      if(authRef !== null){
        authRef.current.loginWithSocial('google').then(() => {
          // logged in
        }).catch(err => {
          // already logged in
          // or error during login
        }) 
      }
    }
    ```

    

    **Logout**

    Add code to provide user log out option via the `logout` method or let authenticated users log out using the wallet UI logout option in the 'User Profile' tab.

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

=== "User Info"

    ```js
    // For getting logged in user info
    const getUserInfo = async () => {
      if(authRef !== null){
        return authRef.current.getUserInfo();
      }
    };
    ```

    ```js
    // For getting current account
    const getAccount = async () => {
      if(authRef !== null){
        return await authRef.current.getAccount();
      }
    };
    ```

=== "Event Handling"

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

### Sign Transactions

The Arcana wallet supports various [[index-web3-wallet-ops|Web3 operations]] via JSON-RPC calls and EIP-1193 requests. Use `authRef` created during integration earlier to call Web3 wallet operations.

```js

// For sending transaction
const sendTransaction = async data => {
  if(authRef !== null){
    return await authRef.current.sendTransaction(data);
  }
};

// For getting current account balance
const getBalance = async () => {
  if(authRef !== null){
    return await authRef.current.getBalance();
  }
};

// EIP 1193 request method
const request = async (method, params) => {
  if(authRef !== null){
    return await authRef.current.request({ method, params });
  }
};
```

## 4.  Deploy

{% include "./text-snippets/quick-start-deploy.md" %}

{==

The {{page.meta.arcana.app_type}} mobile Web3 app is now powered by the {{config.extra.arcana.react_native_sdk_name}} to onboard users via social login and allow authenticated users to sign blockchain transactions using the {{config.extra.arcana.wallet_name}}.

==}

## See also

{% include "./text-snippets/quick-start-see-also.md" %}

{% include "./text-snippets/react_native_sdk_quicklinks.md" %}