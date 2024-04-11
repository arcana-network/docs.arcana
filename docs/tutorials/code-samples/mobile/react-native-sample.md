---
alias: react-native-code-sample
title: 'React-Native Code Sample'
description: 'Sample code to help developers that are building React-Native-based mobile apps to quickly integrate with the Arcana Auth SDK.'
arcana:
  root_rel_path: ../..
---

# React-Native Code Sample

Before integrating a React-Native Web3 app with the {{config.extra.arcana.sdk_name}}, address the pre-requisites first. Then install the `{{config.extra.arcana.mobile_react_native_sdk_pkg_name}}` package and integrate the SDK.

## Prerequisites

* Log in to the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}. Then [[register-app-auth|register and configure the required user onboarding options]]. For details, see [[index-configure-auth|how to configure authentication providers]].

<img class="an-screenshots-noeffects" alt="Dashboard Screenshot App Config Google, Twitch" src="/img/nextjs_app_db_setup_google_twitch.png"/>

* By default, a Testnet configuration profile is created after the app is registered. A unique **{{config.extra.arcana.app_address}}** is assigned to the React-Native app. Note this value, it will be required later during app integration.

<img class="an-screenshots-noeffects"  alt="Client ID for the app" src="/img/an_db_app_address.png"/>

## Install SDK

Install the latest version of the [`{{config.extra.arcana.mobile_react_native_sdk_pkg_name}}` package](https://www.npmjs.com/package/@arcana/auth-react-native).

{% include "./code-snippets/auth_react_native_install.md" %}

!!! an-note

      For a complete React-Native integration example, see [Auth Examples GitHub Repository](https://github.com/shaloo/sample-auth-react-native/).

## Integrate App

Refer to the React-Native sample code in the repository mentioned earlier. In the  `App.js` file, the `Auth` component is imported and initialized using the  **{{config.extra.arcana.app_address}}** assigned to the React-Native app during app registration.

```js title="sample-auth-react-native/App.js" hl_lines="3 22-25"
import React, { useState } from "react";
import { Text, Button, View } from "react-native";
import Auth from "@arcana/auth-react-native";

...

  return (
    <>
      <View>
        <Button title="Hide" onPress={hide} />
        <Button title="Login with google" onPress={login} />
        <Button title="Login with google" onPress={login} />
        <Button title="Get balance" onPress={getBalance} />
        <Button title="Send transaction" onPress={sendTx} />

        <Button title="Get User Info" onPress={getUser} />
        <Button title="Get Account" onPress={getAccount} />
        <Button title="Show wallet" onPress={show} />
        <Button title="Logout" onPress={logout} />
        <Text>{JSON.stringify(result)}</Text>
      </View>
      <Auth
        clientId={"xar_dev_6919ba95cfd93b9eb23846dc748e082cb47d7f89"}
        ref={componentARef}
      />
    </>
  );
```

### Onboard Users

Next, add code to onboard users. In this example, we use the custom login UI option and use `loginWithSocial` method of the `Auth` to onboard users via 'Google' as the social login provider.

```js title="sample-auth-react-native/App.js" hl_lines="3"
...
  const login = async () => {
    componentARef?.current.loginWithSocial("google");
  };
...
```

Once a user authenticates, the built-in {{config.extra.arcana.wallet_name}} is displayed in the app's context and can be used for signing blockchain transactions. See [[arcana-wallet-user-guide|{{config.extra.arcana.wallet_name}} User Guide]] for more Web3 wallet operation details.

<img alt="AuthProvider React-Native app Login" src="/img/react_native_app_login.png" width="30%"/>

### Use Web3 Wallet Operations

Developers can add code as required to programmatically call Web3 wallet operations for authenticated users. See [[index-arcana-wallet|{{config.extra.arcana.wallet_name}} Developer's Guide]] and the [[dashboard-user-guide|{{config.extra.arcana.dashboard_name}} User Guide]] for details on wallet configuration.

That's all! :material-party-popper:

The React-Native app is successfully integrated and ready to onboard Web3 users via social login, email using the configured providers. Authenticated users can instantly access the {{config.extra.arcana.wallet_name}} to sign blockchain transactions.

## See Also

* [[react-native-quick-start|React-Native Apps Integration Quick Start Guide]]
