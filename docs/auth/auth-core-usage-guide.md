---
alias: auth-core-usage-guide
title: 'Arcana Auth Core SDK Usage Guide'
description: 'How to install and use the Arcana Auth-Core SDK with sample code and references.'
arcana:
  root_rel_path: ..
---

<!--
Note, from here the content is a pure markdown file with no mkdocs related tags or keywords. It is a copy 
of the file in the `auth-core` repo: https://github.com/arcana-network/auth/blob/main/usage.md
-->

# {{config.extra.arcana.auth_core_sdk_name}} Usage

{% include "./text-snippets/auth-core-sdk.md" %}

Contact [support](mailto:support@arcana.network) to access the latest release. 

[:octicons-cross-reference-16:{ .icon-color } SDK Reference ](https://auth-core-sdk-ref-guide.netlify.app/){ .md-button }

## Installation

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

## Usage

### Import

```js
const { AuthProvider, SocialLoginType, CURVE } = window.arcana.auth_core;
// or
import { AuthProvider, CURVE } from '@arcana/auth-core';
```

### Initialize `AuthProvider`

```js
const auth = new AuthProvider({
   curve: CURVE.ED25519, // defaults to CURVE.SECP256K1
   appId: `${appId}`,
   redirectUri: ''    
});
```

### Initiate Social Login

```js
await auth.loginWithSocial(SocialLoginType.google);
```

### Initiate Passwordless Login

```js
const result = await auth.loginWithPasswordlessStart(`${emailAddress}`, PasswordlessOptions);
```

### Get Login Status

```js
const loggedIn = auth.isLoggedIn(); /* boolean response */
```

### Get User Info

After successful login, the user information is saved in memory. Before the page `unload` event, the user information gets stored in `session-storage`. After a successful page reload, it is fetched again to memory and removed from the `session-storage`.

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

For userInfo type details, see [Exported Types](#exported-types).

### Get Public Key

```js
const publicKey = await auth.getPublicKey({
  verifier: SocialLoginType.google,
  id: `abc@example.com`,
}); 
```

For details regarding `SocialLoginType`, see [Exported Enums](#exported-enums).

### Clear Login Session

```js
await auth.logout();
```

## TypeScript Usage

### Exported Enums

```ts

enum SocialLoginType {
  apple = 'apple',
  google = 'google',
  discord = 'discord',
  twitch = 'twitch',
  github = 'github',
  twitter = 'twitter',
  telegram = 'telegram',
  passwordless = 'passwordless',
}

```

### Exported Types

```ts

interface KeystoreInput {
  id: string;
  verifier: LoginType;
}

interface InitParams {
  // arcana app id with network hint, ex xar_dev_xyz - xyz is the appId
  appId: string;
  network?: 'dev' | 'testnet'| 'mainnet'; /* defaults to testnet  */
  /**
   * autoRedirect: is redirected via SDK, instead of `loginWithSocial`
   * output being `{ url }`
  */
  autoRedirect: boolean                   /* defaults to true     */
  /** 
   * shouldVerifyState: state is compared internally, the state is stored
   * to local storage on login init
  */
  shouldVerifyState: boolean              /* defaults to true     */ 
  /**
   * revokeTokenPostLogin: Some tokens need to be revoked to get new tokens
   * on subsequent login or to prevent misuse, SDK does this internally. If
   * set to `false` there is a cleanup function that is output of the func
   * `auth.handleRedirectMode()` which should be called after token is used 
   * for secondary purpose
   */
  revokeTokenPostLogin: boolean           /* defaults to true     */
  debug?: boolean;                        /* defaults to false    */
}

interface GetInfoOutput {
  loginType: SocialLoginType;
  userInfo: UserInfo {
    id: string;
    email?: string;
    name?: string;
    picture?: string;
  };
  privateKey: string;
}


```

## Flow Modes

### Redirect

`login.js`

```js
window.onload = async () => {
  const auth = new AuthProvider({
    appId: `${appId}`,
    redirectUri:'path/to/redirect' 
  });

  googleLoginBtn.addEventListener('click', async () => {
    await auth.loginWithSocial(SocialLoginType.google);
  });
}
```

`redirect.js`

```js
window.onload = async () => {
  const auth = new AuthProvider({
    appId: `${appId}`,
    redirectUri:'path/to/redirect' 
  });

  await auth.handleRedirect();

  if(auth.isLoggedIn()) {
    const info = auth.getUserInfo();
  }
}
```

### Variables

- `origin` - Base URL of the app.
