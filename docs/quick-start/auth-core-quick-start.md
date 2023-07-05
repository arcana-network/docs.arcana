---
alias: auth-core-quick-start
title: 'Auth-Core Quick Start'
description: 'Get Started quickly with using the Auth-Core SDK and enable social login in Web3 apps. Understand the difference between Auth-Core and Auth SDK features, usage model the security and privacy implications when integrating an app with the Auth-Core SDK. Follow these step-by-step instructions to register the app, obtain a ClientID and then integrate the app with the Arcana Auth-Core SDK.'
arcana:
  root_rel_path: ..
---

# Quick Start: Auth-Core

Use this guide to integrate apps with the {{config.extra.arcana.auth_core_sdk_name}} for:

* onboarding users via social login by configuring one or more [authentication mechanisms]({{page.meta.arcana.root_rel_path}}/concepts/authtype/arcanaauth.md#supported-authentication-mechanisms)
* allowing authenticated users to sign blockchain transactions, manage crypto assets, and more
* Using app-specific custom UI for user login as well as custom UI (or **no UI at all**) for Web3 wallet operations.


!!! note 

      With the {{config.extra.arcana.auth_core_sdk_name}}, developers get a stripped-down version of the {{config.extra.arcana.product_name}} product. It **does not provide any built-in {{config.extra.arcana.product_name}} login UI**. There is **no {{config.extra.arcana.wallet_name}} functionality for Web3 operations**. 
      
      When using the {{config.extra.arcana.auth_core_sdk_name}}, only app-specific keys are allowed. The 'Global Keys' option is **not available**. 
      
      There is **no enhanced wallet security  (MFA)** or key recovery when the user switches devices.

## Overview

To integrate a Web3 app with the {{config.extra.arcana.auth_core_sdk_name}}, developers must:

* Register the app using the {{config.extra.arcana.dashboard_name}}.
* Configure {{config.extra.arcana.auth_core_sdk_name}} usage by setting up blockchain configurations, and social login options using the {{config.extra.arcana.dashboard_name}}.
* Install the `{{config.extra.arcana.auth_core_sdk_pkg_name}}`.
* Integrate the app code by creating an `AuthProvider` with requisite parameters and initialize the {{config.extra.arcana.auth_core_sdk_name}}.
* Implement user login UI and add code to call {{config.extra.arcana.auth_core_sdk_name}} functions to onboard users.
* Implement the app logic, add UI code to allow authenticated users to perform Web3 wallet operations such as sending tokens, interacting with contracts, etc. Add notification UI code (optional) to allow users to review, reject or approve blockchain transactions.
* Secure authenticated user's cryptographic assets including keys.

## Register & Configure

[[configure-auth|Register and configure]] the app using the {{config.extra.arcana.dashboard_name}}. As part of the app registration, a unique value, **{{config.extra.arcana.app_address}}**, is assigned to each app. This is required for integrating the app with the {{config.extra.arcana.sdk_name}}.

After registering the app, developers can configure the Auth usage settings specific to the app using the {{config.extra.arcana.dashboard_name}}. For e.g.,

* Fine-tune or edit the list of default blockchains that are accessible to the app users. 
* Set up [[index-configure-auth|one or more user onboarding options]] such as social login or passwordless.

!!! info "User Onboarding Options"
        
      If the app is registered but none of the supported authentication providers are enabled and configured for user onboarding, then by default, only the passwordless login option is available.

## Install SDK

After registering the app and configuring Auth usage for the app using the {{config.extra.arcana.dashboard_name}}, developers can install the `{{config.extra.arcana.auth_core_sdk_pkg_name}}` package using one of these options:

### npm

```sh
npm install --save @arcana/auth-core
```

### yarn

```sh
yarn add @arcana/auth-core
```

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@arcana/auth-core"></script>
```

```html
<script src="https://unpkg.com/@arcana/auth-core"></script>
```

## Integrate App

After installing the `{{config.extra.arcana.auth_core_sdk_pkg_name}}` package, add code in the app to create and initialize the `AuthProvider`:

```js
const { AuthProvider, SocialLoginType } = window.arcana.auth_core;
// or
import { AuthProvider, SocialLoginType } from '@arcana/auth-core';
```

The {{config.extra.arcana.auth_core_sdk_name}} offers two kinds of flows:

* Pop-up UI
* Redirect UI

The `AuthProvider` can be initialized for a UI flow that uses a pop-up modal within the current app context or redirects to a different app page after login. For more details, see [here](https://github.com/arcana-network/auth-core/blob/dev/readme.md#flow-modes).

```js
const clientId = "xar_test_d24f70cd300823953dfa2a7f5b7c7c113356b1ad"; // obtained after app registration via dashboard
const auth = await AuthProvider.init({
   appId: clientId, /* obtained after registering the app with the Arcana Developer Dashboard */
   flow: 'redirect', /* can be 'popup' or 'redirect' */
   redirectUri:''    /* can be ignored for redirect flow if same as login page */
});
```

## Onboard Users

Before adding code in the app for using the {{config.extra.arcana.auth_core_sdk_name}} user onboarding functions, make sure you have configured those properly as instructed [[index-configure-auth| here]]. More than one user onboarding mechanism can be enabled in the app:

* Social Login
* Passwordless

### Social Login

```js
await auth.loginWithSocial(SocialLoginType.google);
```

### Passwordless

```js
const result = await auth.loginWithOtp(`${emailAddress}`, PasswordlessOptions);
```

#### PasswordlessOptions:

- `{ withUI: true }` - the user is redirected to `email-sent` or `error` page
- `{ withUI: false }` - the Social / Passwordless login API returns  a `json` response back with no redirection
- defaults to `{ withUI: true }`

Refer to the sample code [here](https://github.com/arcana-network/auth-core/tree/dev/examples) for details on how to add a pop-up UI user onboarding flow or a redirect flow in the app.

## Sign Transactions

Once the user has successfully onboarded the app, add code to perform Web3 operations such as signing messages, send transactions and more.

The `AuthProvider` is a standard Ethereum ERC-1193 provider and can be used by the apps integrating with the {{config.extra.arcana.auth_core_sdk_name}} to allow authenticated users to sign blockchain transactions.

```js
import { AuthProvider, SocialLoginType } from '@arcana/auth-core';
import { ethers } from 'ethers'

const auth = await AuthProvider.init({
   appId: `${clientId}`, /* obtained after registering the app with the Arcana Developer Dashboard */
   flow: 'redirect', /* can be 'popup' or 'redirect' */
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

That's all!!! :tada:

You have successfully installed the  {{config.extra.arcana.auth_core_sdk_name}} and integrated the Web3 app to onboard users and enable them to sign blockchain transactions easily.

## See Also

* [{{config.extra.arcana.auth_core_sdk_name}} Usage Guide](https://github.com/arcana-network/auth-core/blob/dev/readme.md#usage)
* {{config.extra.arcana.auth_core_sdk_name}} API Reference Guide