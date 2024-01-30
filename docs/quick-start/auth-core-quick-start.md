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

!!! note "Already using {{config.extra.arcana.auth_core_sdk_name}}?"
  
      {% include "./text-snippets/warn_latest_auth_core_sdk_version.md" %}

!!! warning "Auth-Core SDK usage"

      The {{config.extra.arcana.auth_core_sdk_name}} is meant for apps that require access to private keys. If you do not require private key access then please DO NOT use this SDK. Developers get a stripped-down version of the {{config.extra.arcana.product_name}} product. It **does not provide any built-in {{config.extra.arcana.product_name}} login UI**. There is **no {{config.extra.arcana.wallet_name}} functionality for Web3 operations**. 
      
      When using the {{config.extra.arcana.auth_core_sdk_name}}, only app-specific keys are allowed. The 'Global Keys' option is **not available**. 
      
      There is **no enhanced wallet security  (MFA)** or key recovery when the user switches devices.

## Overview

The {{config.extra.arcana.auth_core_sdk_name}} is meant for implementing Web3 app solutions where developers need to securely assign blockchain access keys, the **private keys** to every authenticated user, and build a custom wallet UI instead of using the one built-in the {{config.extra.arcana.sdk_name}}.

Start by registering the app and configuring usage settings through {{config.extra.arcana.dashboard_name}}. After that, install {{config.extra.arcana.auth_core_sdk_name}}, integrate it with your app, and initialize the `AuthProvider`. Add code to facilitate user onboarding by handling the redirect flow after user authentication. Also, add custom code for wallet UI to enable Web3 wallet and blockchain operations. Finally, deploy your app on the Testnet or Mainnet.

<img class="an-screenshots" src="/img/an_auth_usage_overview_light.png#only-light" alt="uth Usage Overview"/>
<img class="an-screenshots" src="/img/an_auth_usage_overview_dark.png#only-dark" alt="Auth Usage Overview"/>

!!! warning "Key security"
 
      When using the {{config.extra.arcana.auth_core_sdk_name}} based auth solution developers must secure authenticated user's cryptographic assets including keys.

## Steps

### Step 1: Register & Configure App

{% include "./text-snippets/quick-start-reg-config.md" %}

??? abstract "Wallet UI Mode: Only Custom UI"

      The *Wallet UI Mode* configuration setting selected by the developer during app registration is ignored if the app is integrated with the {{config.extra.arcana.auth_core_sdk_name}}. When choosing the {{config.extra.arcana.auth_core_sdk_name}}, developers must implement custom wallet UI. There is **no default {{config.extra.arcana.wallet_name}} or built-in login UI** that is supported by the {{config.extra.arcana.auth_core_sdk_name}}.

      <img class="an-screenshots" src="/img/an_wallet_ui_mode_ignored.gif" alt="Wallet UI Mode Ignored"/>

### Step 2: Install SDK

After registering the app and configuring Auth usage for the app using the {{config.extra.arcana.dashboard_name}}, developers can install the `{{config.extra.arcana.auth_core_sdk_pkg_name}}` package using one of these options:

#### npm

```sh
npm install --save @arcana/auth-core
```

#### yarn

```sh
yarn add @arcana/auth-core
```

#### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@arcana/auth-core"></script>
```

```html
<script src="https://unpkg.com/@arcana/auth-core"></script>
```

### Step 3: Integrate App

```js
const { AuthProvider, SocialLoginType, CURVE } = window.arcana.auth_core;
// or
import { AuthProvider, CURVE } from '@arcana/auth-core';
```

The `AuthProvider` is instantiated and initialized for a UI flow that redirects the user to a different app page after login. For more details, see [[auth-core-usage-guide#flow-modes|here]].

```js
const clientId = "xar_test_d24f70cd300823953dfa2a7f5b7c7c113356b1ad"; // obtained after app registration via dashboard
const auth = new AuthProvider({
   curve: CURVE.ED25519, // defaults to CURVE.SECP256K1
   appId: clientId,
   redirectUri: ''   /* can be ignored for redirect flow if same as login page */ 
});
```

### Step 4: Onboard Users

Before adding code in the app for using the {{config.extra.arcana.auth_core_sdk_name}} user onboarding functions, make sure you have configured those properly as instructed [[index-configure-auth| here]]. More than one user onboarding mechanism can be enabled in the app:

* Social Login
* Passwordless

#### Social Login

```js
await auth.loginWithSocial(SocialLoginType.google);
```

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

!!! warning "Cognito & Firebase"

      Web3 apps that do not wish to use the user onboarding features offered by the {{config.extra.arcana.auth_core_sdk_name}} but only need to assign cryptographic keys to the authenticated users (for e.g., apps using Cognito and Firebase) are not supported in the current release.

      For more information, contact our [[support|support team]].

#### Login Status

```js
const loggedIn = auth.isLoggedIn(); /* boolean response */
```

#### Get User Info

After successful login, the user information is saved in memory. Before the page unload event, the user information gets stored in session storage. After a successful page reload, it is fetched again to memory and removed from the session storage.

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

See [[auth-core-usage-guide#exported-enums|Exported Enums]] for details on SocialLoginType, .

#### Logout

```js
await auth.logout();
```

Refer to the sample code for using Arcana Auth-Core SDK [here](https://github.com/arcana-network/auth-examples) for details on how to onboard users in an app.

### Step 5: Sign Transactions

Once the user has successfully logged into the app, add code to perform Web3 operations such as sign messages, use blockchain send transaction and more.

The `AuthProvider` is a standard Ethereum EIP-1193 provider and can be used by the apps integrating with the {{config.extra.arcana.auth_core_sdk_name}} to allow authenticated users to sign blockchain transactions.

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

### Step 6: Add Custom Wallet UI

After adding code to onboard users via the {{config.extra.arcana.auth_core_sdk_name}} you can add custom wallet UI and wire it to perform Web3 wallet and blockchain operations for the chains supported by your app. Note that the {{config.extra.arcana.auth_core_sdk_name}} does not have built-in {{config.extra.arcana.wallet_name}} unlike the {{config.extra.arcana.dk_name}}. 

That's all!!! :material-party-popper:

{==

You've connected {{config.extra.arcana.auth_core_sdk_name}} to your Web3 app for smooth user onboarding. Just add your custom code for wallet actions, and users can effortlessly sign blockchain transactions.

==}

## Examples

For a sample demonstrating an app that integrates with the {{config.extra.arcana.auth_coresdk_name}}, refer to {{page.meta.arcana.app_example_submodule}} in the GitHub repo: [Auth Examples](https://github.com/arcana-network/auth-examples).


## See Also

* [[auth-core-usage-guide|{{config.extra.arcana.auth_core_sdk_name}} Usage Guide]]
* {% include "./text-snippets/auth_core_sdkref_url.md" %}
