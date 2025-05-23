---
alias: web-auth-usage-guide
title: 'Arcana Auth Web SDK Usage Guide'
description: 'How to install and use the Arcana Auth Web SDK with sample code and references.'
arcana:
  root_rel_path: ..
---

<!--
Note, this is a pure markdown file with no mkdocs related tags or keywords. It is a copy 
of the file in the `auth` repo: https://github.com/arcana-network/auth/blob/main/usage.md
-->

# {{config.extra.arcana.sdk_name}} Usage

Use the {{config.extra.arcana.sdk_name}} to onboard users via social login, allow users to access the in-app {{config.extra.arcana.wallet_name}} and sign blockchain transactions.

[:octicons-cross-reference-16:{ .icon-color } {% include "./text-snippets/authsdkref_url.md" %}](https://authsdk-ref-guide.netlify.app/){ .md-button }

## Installation

### NPM/Yarn Install

```sh
npm install --save @arcana/auth
yarn add @arcana/auth
```

### CDN Install

```html
<script src="https://cdn.jsdelivr.net/npm/@arcana/auth"></script>
```

```html
<script src="https://unpkg.com/@arcana/auth"></script>
```

---

## Quick Start with `ethers.js`

```ts
import { AuthProvider } from '@arcana/auth'
import { ethers } from 'ethers'

// clientId: Arcana Unique App Identifier via Dashboard
const auth = new AuthProvider(`${clientId}`) 

window.onload = async () => {
  try {
    await auth.init()

    const arcanaProvider = await auth.connect()
    const provider = new ethers.providers.Web3Provider(arcanaProvider)

    await provider.getBlockNumber()
    // 14983200
  } catch (e) {
    // log error
  }
}

```

---

## Quick Start with `web3.js`

```ts
import { AuthProvider } from '@arcana/auth'
import Web3 from 'web3'


// clientId: Arcana Unique App Identifier via Dashboard
const auth = new AuthProvider(`${clientId}`)

window.onload = async () => {
  try {
    await auth.init()

    const arcanaProvider = await auth.connect()
    const provider = new Web3(arcanaProvider)

    await provider.getBlockNumber()
  } catch (e) {
    // log error
  }
}
```

---

## Usage

### AuthProvider

#### Import AuthProvider

```js
const { AuthProvider } = window.arcana.auth // From CDN
// or
import { AuthProvider } from '@arcana/auth' // From npm
```

#### Initialize AuthProvider

```ts
import { AuthProvider } from '@arcana/auth'

const auth = new AuthProvider(`${clientId}`, {
  position: 'left', // default - right
  theme: 'light', // default - dark
  alwaysVisible: false, // default - true
  setWindowProvider: true, // default - false
  connectOptions: {
    compact: true, // default - false
  },
})

await auth.init()

```

See [Get Started with Auth SDK](https://docs.arcana.network/quick-start/wagmi-quick-start/) for more Auth SDK usage insights.

### Auth API

#### Plug and Play Authentication

```js
const provider = await auth.connect()
```

#### Custom Login

Social login

```js
// loginType - Apple, Cognito, Discord, GitHub, Google, Steam, Twitch, Twitter
const provider = await auth.loginWithSocial(`${loginType}`)

// Note: Use loginWithBearer method for Telegram, Firebase
```

Passwordless login via an email verification OTP 

{% include "./code-snippets/auth_pwdless.md" %}

Passwordless login via OTP

{% include "./code-snippets/auth_pwdless_otp.md" %}

Check if a user is logged in

```js
const isloggedIn = await auth.isLoggedIn() // boolean
```

Check and reconnect, if required, within a 30-minute window after logout.

```js
const canReconnect = await auth.canReconnect()
// auth.reconnect() should be on a click event since it opens a new tab
await auth.reconnect()
```

Get user information. The loginToken is a JWT Token that can be verified by using the public JWT Key. In the future this will be deprecated. Refer to userDIDToken. It is base64 encoded data

```base64(JSON.stringify([sig, claims]))```

```js
const info = await auth.getUser()

/*
interface UserInfo {
    address: string;
    email?: string;
    id: string;
    userDIDToken: string;
    loginToken: string;
    loginType: Logins | "passwordless";
    name?: string;
    picture?: string;
    publicKey: string;
}
*/
```

Show wallet UI

```js
auth.showWallet()
```

#### Logout

```js
await auth.logout()
```

### Get Public Key

Get the public key associated with an email.

```js
await auth.getPublicKey(`${email}`)
```

### Encryption

#### ECIES Encryption

The wallet uses ECIES to decrypt cipher text, so a complementary encryption method has to be used from package `eth-crypto`.

```js
import EthCrypto from 'eth-crypto'

const encrypted = await EthCrypto.encryptWithPublicKey(
  'bf1cc3154424dc22191941d9f4f50b063a2b663a2337e5548abea633c1d06ece...', // publicKey
  'foobar' // message
)
```

---

## Arcana Wallet Operations

Arcana wallet is an embedded Web3 wallet offered via the Auth SDK. It uses [Ethereum JSON-RPC](https://ethereum.github.io/execution-apis/api-documentation/) to interact with the blockchains.

### JSON RPC Support

Arcana wallet implements the following common interfaces exposed by all Ethereum clients:

- [eth_accounts](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_accounts)
- [eth_getBalance](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getbalance)
- [eth_sendTransaction](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sendtransaction)
- [eth_sign](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sign)
- [eth_call](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_call)

### Switching Chains

#### `wallet_addEthereumChain`

This method is specified by [EIP-3085](https://eips.ethereum.org/EIPS/eip-3085).

```ts
try {
  await provider.request({
    method: 'wallet_addEthereumChain',
    params: [{
      chainId: '0xABCDEF',
      chainName: 'My Custom Chain',
      rpcUrls: ['...']
    }]
  })
} catch(error) {
  ...
}

interface AddEthereumChainParameter {
  chainId: string; // A 0x-prefixed hexadecimal string
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string; // 2-6 characters long
    decimals: 18;
  };
  rpcUrls: string[];
  blockExplorerUrls?: string[];
}

```

#### `wallet_switchEthereumChain`

This method is specified by [EIP-3326](https://eips.ethereum.org/EIPS/eip-3326).

```ts
try {
  await provider.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId: '0xf00' }],
  });
} catch(error) {
  ...
}

interface SwitchEthereumChainParameter {
  chainId: string; // A 0x-prefixed hexadecimal string
}
```

If the error code (error.code) is 4902, then the requested chain has not been added, and you have to request to add it via `wallet_addEthereumChain`.

#### `wallet_watchAsset`

This method is specified by [EIP-747](https://eips.ethereum.org/EIPS/eip-747)

```ts
await provider.request({
  method: 'wallet_watchAsset',
  params: {
    type: 'ERC20',
    options: {
      address: '0xB983E01458529665007fF7E0CDdeCDB74B967Eb6',
      symbol: 'FOO',
      decimals: 18,
      image: 'https://foo.io/token-image.svg',
    },
  },
})
```

Check out [Auth SDK Reference Guide](https://authsdk-ref-guide.netlify.app/) for details.