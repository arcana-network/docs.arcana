---
alias: mvx-web3-wallet-ops
title: 'MultiversX Wallet Operations'
description: 'List of all the supported JSON-RPC and Web3 wallet operations by the Arcana wallet for MultiversX blockchain.'
arcana:
  root_rel_path: ../../../..
---

# MultiversX Wallet Ops

Use `AuthProvider`, the standard EIP-1193 Ethereum provider offered by the {{config.extra.arcana.sdk_name}}, for issuing Web3 wallet operations via the {{config.extra.arcana.wallet_name}}.

## Prerequisites

* [[register-app-auth|Register]] the app and configure SDK usage [[index-config-social-providers|settings for social login]] providers, [[configure-wallet-chains|manage app chains]] and [[index-setup-wallet|wallet user experience]].

* Install the [[sdk-installation|required SDK packages]], integrate the SDK with the app and create `AuthProvider`. 

## Supported Web3 Operations

{% include "./text-snippets/mvx_web3_ops.md" %}

Other MultiversX wallet connect JSON RPC methods listed [here](https://docs.multiversx.com/integrators/walletconnect-json-rpc-methods/) are not supported at the moment.

### `getAccounts`

```js hl_lines="9 19"

// Integrate App with the Auth SDK

  const { AuthProvider } = window.arcana.auth

  let provider
  let from = ''
  const auth = new AuthProvider('xar_dev_34-arcana-registered-client-id-xxxxx')
  provider = auth.provider

  ...

  //Initialize AuthProvider
  await auth.init()

  // Get Accounts

  try {
    const accounts = await provider.request({ method: 'getAccounts' })
    from = accounts[0]
  } catch (e) {
    console.log({ e })
  }

  // Returns an array of public keys
  // ["pub-key-1"]
```

### `getPublicKey`

```js hl_lines="9 18"

// Integrate App with the Auth SDK

  const { AuthProvider } = window.arcana.auth

  let provider
  let from = ''
  const auth = new AuthProvider('xar_dev_34-arcana-registered-client-id-xxxxx')
  provider = auth.provider

  ...

  //Initialize AuthProvider
  await auth.init()

  //Get Public Key
     
  await provider.request({
    method: "getPublicKey",
    params: [from],
  });

  // Returns public key
  // {pk: "some-pub-key"}

```

### `SignMessage`

```js hl_lines="9 39"

  // Integrate App with the Auth SDK

  const { AuthProvider } = window.arcana.auth

  let provider
  let from = ''
  const auth = new AuthProvider('xar_dev_34-arcana-registered-client-id-xxxxx')
  provider = auth.provider

  ...

  //Initialize AuthProvider
  await auth.init()

  // Get Accounts

  try {
    const accounts = await provider.request({ method: 'getAccounts' })
    from = accounts[0]
  } catch (e) {
    console.log({ e })
  }

  // Onboard users via plug-n-play login or custom login UI

  // auth.connect() or auth.loginWithSocial
  try {
    const provider = await auth.connect()
    console.log({ provider })
  } catch (error) {
    console.log({ error })
  }

  ...

  // For authenticated users, add code for signing message

  const personalSign = await provider.request({
    method: 'mvx_signMessage',
    params: {
      message: 'SignMessage to test MultiversX signmessage',
      address: from,
    },
  })

  // Returns signature object
  // {signature: "some-sig"}

```

### `SignTransaction`

```js
  // Integrate App with the Auth SDK

  const { AuthProvider } = window.arcana.auth

  let provider
  let from = ''
  const auth = new AuthProvider('xar_dev_34-arcana-registered-client-id-xxxxx')
  provider = auth.provider

  ...

  //Initialize AuthProvider
  await auth.init()

  // Get Accounts

  try {
    const accounts = await provider.request({ method: 'getAccounts' })
    from = accounts[0]
  } catch (e) {
    console.log({ e })
  }

  // Onboard users via plug-n-play login or custom login UI

  // auth.connect() or auth.loginWithSocial
  try {
    const provider = await auth.connect()
    console.log({ provider })
  } catch (error) {
    console.log({ error })
  }

  ...

  // For authenticated users, add code for signing transaction

  const params = {
    transaction: {
      gasLimit: 100000,
      sender: from,
      receiver:
        'erdXXXXXXXX-some-address-YYYYYYYYYY',
      value: '0.01',
      chainID: 'T',
      data: 'helloWorld-from MultiversX',
      version: 1,
    },
  }

  const data = await provider.request({
    method: 'mvx_signTransaction',
    params,
  })

  // Returns signature object
  // {signature: "some-sig", options: 0, version: 1}

```

### `SignTransactions`

```js hl_lines="9 55"

  // Integrate App with the Auth SDK

  const { AuthProvider } = window.arcana.auth

  let provider
  let from = ''
  const auth = new AuthProvider('xar_dev_34-arcana-registered-client-id-xxxxx')
  provider = auth.provider

  ...

  //Initialize AuthProvider
  await auth.init()

  // Get Accounts

  try {
    const accounts = await provider.request({ method: 'getAccounts' })
    from = accounts[0]
  } catch (e) {
    console.log({ e })
  }

  // Onboard users via plug-n-play login or custom login UI

  // auth.connect() or auth.loginWithSocial
  try {
    const provider = await auth.connect()
    console.log({ provider })
  } catch (error) {
    console.log({ error })
  }

  ...

  // For authenticated users, add code for signing transaction

  const transaction = {
    gasLimit: 100000,
    sender: from,
    receiver: "erdXXXXXXXX-some-address-YYYYYYYYYY",
    value: "0.001",
    chainID: "T",
    data: "helloWorld-from MultiversX",
    version: 1,
  };

  const params = {
    // You can use multiple transactions, this sample just
    // repeats the same one.
    transactions: [transaction, transaction, transaction],
  };

  const data = await provider.request({
    method: 'mvx_signTransactions',
    params,
  })

  //Returns Signature Object - see format below
  // 
  // {
  //   signatures: [
  //     {signature: "some-sig-1", options: 0, version: 1}, 
  //     {signature: "some-sig-2", options: 0, version: 1}, 
  //     {signature: "some-sig-3", options: 0, version: 1}
  //   ]
  // }

```
