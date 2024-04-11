---
alias: auth-core-quick-start
title: 'Auth-Core Quick Start'
description: 'Get Started quickly with using the Auth-Core SDK and enable social login in Web3 apps. Understand the difference between Auth-Core and Auth SDK features, usage model the security and privacy implications when integrating an app with the Auth-Core SDK. Follow these step-by-step instructions to register the app, obtain a ClientID and then integrate the app with the Arcana Auth-Core SDK.'
arcana:
  root_rel_path: ..
  app_type: "'Auth-Core'"
  app_example_submodule: "'`sample-auth-core`'"
---

# Quick Start: Auth-Core

{{config.extra.arcana.auth_core_sdk_name}} offers limited {{config.extra.arcana.sdk_name}} functionality with additional flexibility in user onboarding customization!

Developers can use this SDK to assign keys to authenticated users to sign blockchain transactions securely. 

!!! an-warning "Limited Auth Capabilities"

      * **No** built-in [[concept-plug-and-play-auth|plug-and-play login UI]] feature 
      * **No** built-in {{config.extra.arcana.wallet_name}} UI
      * **No** support for [[concept-keyspace-type|Global keys, only app-specific keys]] (default) allowed. 
      * **No** [[concept-mfa|enhanced wallet security via MFA]] or key recovery is supported when the user switches devices.

<!---
## Overview

The {{config.extra.arcana.auth_core_sdk_name}} is meant for implementing Web3 app solutions where developers need to securely assign blockchain access keys, the **private keys** to every authenticated user, and build a custom wallet UI instead of using the one built-in the {{config.extra.arcana.sdk_name}}.

Start by registering the app and configuring usage settings through {{config.extra.arcana.dashboard_name}}. After that, install {{config.extra.arcana.auth_core_sdk_name}}, integrate it with your app, and initialize the `AuthProvider`. Add code to facilitate user onboarding by handling the redirect flow after user authentication. Also, add custom code for wallet UI to enable Web3 wallet and blockchain operations. Finally, deploy your app on the Testnet or Mainnet.

<img class="an-screenshots" src="/img/an_auth_usage_overview_light.png#only-light" alt="uth Usage Overview"/>
<img class="an-screenshots" src="/img/an_auth_usage_overview_dark.png#only-dark" alt="Auth Usage Overview"/>

!!! an-warning "Key security"
 
      When using the {{config.extra.arcana.auth_core_sdk_name}} based auth solution developers must secure authenticated user's cryptographic assets including keys.
-->
## Prerequisites

!!! an-note "Use latest SDKs"
  
      {% include "./text-snippets/warn_latest_auth_core_sdk_version.md" %}

## 1. Register & Configure

{% include "./text-snippets/quick-start-reg-config-auth.md" %}

??? abstract "Wallet UI Mode Setting"

      The *Wallet UI Mode* {{config.extra.arcana.dashboard_name}} configuration setting chosen by the developer during app registration **is ignored** for apps integrated with the {{config.extra.arcana.auth_core_sdk_name}}. 
      
      To use the {{config.extra.arcana.auth_core_sdk_name}}, developers must implement a custom wallet UI.

      <img class="an-screenshots" src="/img/an_wallet_ui_mode_ignored.gif" alt="Wallet UI Mode Ignored"/>

## 2. Install SDK

Install the `{{config.extra.arcana.auth_core_sdk_pkg_name}}` package:

=== "npm"

    ```sh
    npm install --save @arcana/auth-core
    ```

=== "yarn"

    ```sh
    yarn add @arcana/auth-core
    ```

=== "CDN"

    ```html
    <script src="https://cdn.jsdelivr.net/npm/@arcana/auth-core"></script>
    ```

    ```html
    <script src="https://unpkg.com/@arcana/auth-core"></script>
    ```

## 3. Integrate

```js
const { AuthProvider, SocialLoginType, CURVE } = window.arcana.auth_core;
// or
import { AuthProvider, CURVE } from '@arcana/auth-core';
```

The `AuthProvider` is instantiated and initialized for a [[auth-core-usage-guide#flow-modes|UI flow]] that redirects the user to a different app page after login.

```js
const clientId = "xar_test_d24f70cd300823953dfa2a7f5b7c7c113356b1ad"; // obtained after app registration via dashboard
const auth = new AuthProvider({
   curve: CURVE.ED25519, // defaults to CURVE.SECP256K1
   appId: clientId,
   redirectUri: ''   /* can be ignored for redirect flow if same as login page */ 
});
```

### Onboard Users

Use custom login UI and call social login and passwordless user onboarding functions provided by the {{config.extra.arcana.auth_core_sdk_name}}. Specify the providers [[index-configure-auth| configured]] through the dashboard in the `SocialLoginType`. 

#### Social Login

```js
await auth.loginWithSocial(SocialLoginType.google);
```

Check `SocialLoginType` details in the [[auth-core-usage-guide#exported-enums|Exported Enums]] section.

#### Passwordless Login

First **initiate** passwordless login:

```js
const result = await auth.loginWithPasswordlessStart({
  email: 'abc@example.com'
});
```

Then, on the redirect page, **handle passwordless login** as follows:

```js
await auth.handleRedirect();
```
<!--
#### PasswordlessOptions:

- `{ withUI: true }` - the user is redirected to `email-sent` or `error` page
- `{ withUI: false }` - the Social / Passwordless login API returns  a `json` response back with no redirection
- defaults to `{ withUI: true }`

--->

!!! an-warning "Onboarding via Cognito, Firebase"

      Web3 apps that use Cognito or Firebase for onboarding users and require {{config.extra.arcana.auth_core_sdk_name}} to only assign cryptographic keys to the authenticated users are **not supported** in the current release.

      Contact our [[support|support team]] if you need this feature.

#### Login Status

```js
const loggedIn = auth.isLoggedIn(); /* boolean response */
```

#### Get User Info

After successful authentication, the user information is saved in memory. It gets copied in the current session storage before the *page unload* event. User information is fetched again to memory and removed from the session storage after a successful page reload.

```js
const userInfo = auth.getUserInfo();

/* 
  UserInfo: {
    loginType: 'google',
    userInfo: {
      id: 'abc@example.com',
      name: 'ABC DEF',
      email: '',
      picture: ''
    },
    privateKey: ''
  }
*/

```

For userInfo type details, see [[auth-core-usage-guide#exported-types|Exported Types]].

#### Get Public Key

```js
const publicKey = await auth.getPublicKey({
  verifier: SocialLoginType.google,
  id: `abc@example.com`,
}); 
```

#### Logout

```js
await auth.logout();
```

### Sign Transactions

The `AuthProvider` is a standard Ethereum EIP-1193 provider. Apps integrated with the {{config.extra.arcana.auth_core_sdk_name}} can use this provider to allow authenticated users to sign blockchain transactions.

Add code to perform Web3 operations and sign blockchain transactions in the context of an authenticated user. 

Developers must add a custom wallet UI and wire it to perform Web3 wallet and blockchain operations for the chains supported by the app. Note that the {{config.extra.arcana.auth_core_sdk_name}} does not provide any built-in login UI or {{config.extra.arcana.wallet_name}} UI, unlike the {{config.extra.arcana.sdk_name}}.    

```ts
import { AuthProvider, CURVE } from '@arcana/auth-core';
import { ethers } from 'ethers'

const auth = await AuthProvider.init({
   appId: `${clientId}`, /* obtained after registering the app with the Arcana Developer Dashboard */
   curve: CURVE.ED25519, // defaults to CURVE.SECP256K1
   redirectUri:'SPECIFY_URI'    /* can be ignored for redirect flow if same as login page */
});

...

const login = async () => {
const arcanaProvider = await auth.loginWithSocial(SocialLoginType.google);
if (auth.isLoggedIn()) {
    const info = await auth.getUserInfo();
}
};

...

googleLoginBtn.addEventListener('click', () => {
  login('google');
});
  ¯
...

try {

  const provider = new ethers.providers.Web3Provider(arcanaProvider)
  await provider.getBlockNumber() //Or perform any other Web3 operation such as sign message, send transaction
    // 14983200
} catch (e) {
    // log error
}
...

```

## 4. Deploy

{% include "./text-snippets/quick-start-deploy.md" %}

{==

You've successfully integrated a Web3 app with the {{config.extra.arcana.auth_core_sdk_name}}. 

==}


## See Also

* `sample-auth-core` submodule in [Auth Examples](https://github.com/arcana-network/auth-examples)
* [[auth-core-usage-guide|{{config.extra.arcana.auth_core_sdk_name}} Usage Guide]]
* {% include "./text-snippets/auth_core_sdkref_url.md" %}

{% include "./text-snippets/auth_core_sdk_quicklinks.md" %}