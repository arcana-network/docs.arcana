---
alias: auth-core-quick-start
title: 'Get Started: Auth-Core'
description: 'Integrate Arcana Auth-Core SDK in apps that require higher flexibility and customization. Onboard users via social login. Provide instant access to the in-app Arcana wallet for signing transactions.'
arcana:
  root_rel_path: ..
  app_type: "'Auth-Core'"
  app_example_submodule: "`sample-auth-core`"
---

# Get Started: Auth-Core

Integrate Web3 apps with [[concept-authcore|{{config.extra.arcana.auth_core_sdk_name}}]] and assign keys to authenticated users. Build custom login UI to onboard users. Add code for a custom, in-app wallet UI and allow authenticated users to sign blockchain transactions securely.

!!! an-warning "Limited Auth Capabilities"

      * **No** built-in [[concept-plug-and-play-auth|plug-and-play login UI]] feature 
      * **No** built-in {{config.extra.arcana.wallet_name}} UI
      * **No** support for [[concept-keyspace-type|Global keys, only app-specific keys]] (default) allowed. 
      * **No** support for [[concept-mfa|enhanced wallet security]] via MFA.

## Prerequisites

{% include "./text-snippets/quick-start-reg-config-auth.md" %}

??? caution "Wallet UI Mode Setting"
      
      To use the {{config.extra.arcana.auth_core_sdk_name}}, developers must implement a [[concept-custom-wallet-ui|]]custom wallet UI.

      The *Wallet UI Mode* {{config.extra.arcana.dashboard_name}} configuration setting chosen by the developer during app registration **is ignored** for apps integrated with the {{config.extra.arcana.auth_core_sdk_name}}. 

      <figure markdown="span">
        <img alt="Wallet UI Mode" class="an-screenshots width_85pc" src="{{config.extra.arcana.img_dir}}/an_wallet_ui_mode_ignored.gif" alt="Wallet UI Mode Ignored"/>
        <figcaption>Wallet UI Mode</figcaption>
      </figure>

## 1. Install SDK

=== "npm"

    ```sh
    npm install --save @arcana/auth-core
    ```

=== "yarn"

    ```sh
    yarn add @arcana/auth-core
    ```

## 2. Integrate

```js
const { AuthProvider, SocialLoginType, CURVE } = window.arcana.auth_core;
// or
import { AuthProvider, CURVE } from '@arcana/auth-core';
```

```js
const clientId = "xar_test_d24f70cd300823953dfa2a7f5b7c7c113356b1ad"; // obtained after app registration via dashboard
const auth = new AuthProvider({
   curve: CURVE.ED25519, // defaults to CURVE.SECP256K1
   appId: clientId,
   redirectUri: ''   /* can be ignored for redirect flow if same as login page */ 
});
```

### Onboard Users

#### Social Login

```js
await auth.loginWithSocial(SocialLoginType.google);
// Check if a user is logged in
const loggedIn = auth.isLoggedIn();
// Get User Account Details
const userInfo = auth.getUserInfo();
...
```

!!! an-warning "Configure Social Login"
      
      The login providers specified in [[auth-core-usage-guide#exported-enums|`SocialLoginType`]] parameter must be [[index-configure-auth| configured]] via the dashboard.

### Sign Transactions

Use `AuthProvider`, a standard Ethereum EIP-1193 provider, and allow authenticated users to sign blockchain transactions. Build a custom wallet UI and wire it to appropriate [[evm-web3-wallet-ops|Web3 wallet operations]] on [[configure-wallet-chains|configured chains]].

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

## Advanced Usage

??? an-tip "UI Flow Mode"

    When instantiating the `AuthProvider` you can configure it to use appropriate [[auth-core-usage-guide#flow-modes|UI flow]] such that the authenticated user is redirected to a different app page after login, if required.

??? an-abstract " Passwordless Onboarding"

      In addition to [social login](#social-login), onboard users via passwordless option.

      ```js
      const result = await auth.loginWithPasswordlessStart({
        email: 'abc@example.com'
      });
      ```

      Then on the redirect page, **handle passwordless login** as follows:

      ```js
      await auth.handleRedirect();
      ```
  <!---
  #### PasswordlessOptions:

  - `{ withUI: true }` - the user is redirected to `email-sent` or `error` page
  - `{ withUI: false }` - the Social / Passwordless login API returns  a `json` response back with no redirection
  - defaults to `{ withUI: true }`

  --->

??? an-warning "Onboarding via Cognito, Firebase"

      Web3 apps integrating with {{config.extra.arcana.auth_core_sdk_name}} cannot use Cognito or Firebase for onboarding users. These providers are **not supported** in the current release.

      Contact our [[index-support|{{config.extra.arcana.company_name}}  support]] if you need this feature.

??? an-note "Status and User Information"

      **Check Login Status**

      ```js
      const loggedIn = auth.isLoggedIn(); /* boolean response */
      ```

      **Get User Info**

      After successful authentication, the [[auth-core-usage-guide#exported-types|user information]] is saved in memory. It gets copied in the current session storage before the *page unload* event. User information is fetched again to memory and removed from the session storage after a successful page reload.

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

      **Get Public Key**

      ```js
      const publicKey = await auth.getPublicKey({
        verifier: SocialLoginType.google,
        id: `abc@example.com`,
      }); 
      ```

      **Logout**

      ```js
      await auth.logout();
      ```

## See Also

{% include "./text-snippets/quick-start-common-examples.md" %}

{% include "./text-snippets/auth_core_sdk_quicklinks.md" %}
