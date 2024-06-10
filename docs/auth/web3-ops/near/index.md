---
alias: near-web3-wallet-ops
title: 'Near Wallet Operations'
description: 'List of all the supported JSON-RPC and Web3 wallet operations by the Arcana wallet for Near blockchain.'
arcana:
  root_rel_path: ../../../..
---

# Near Wallet Ops

The {{config.extra.arcana.wallet_name}} supports [standard Ethereum JSON-RPC specification APIs](https://ethereum.org/en/developers/docs/apis/json-rpc/) and Web3 wallet operations.

## Web3 Wallet Operations

Developers can use the `auth.provider`, the standard EIP-1193 provider, for issuing Web3 wallet operations in the authenticated user's context.

For the Near chain, the following methods are supported:

{% include "./text-snippets/near_web3_ops.md" %}

Developers can call the `provider.request` function and specify the *method* parameter as one of the supported wallet operations listed above.

Before issuing the Web3 wallet operations, make sure you have installed the {{config.extra.arcana.sdk_name}}, [[index-integrate|integrated the app]] with the SDK and initialized it.

## Supported Web3 Operations

### `getAccounts`

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

```

### `SignMessage`

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

  // Onboard users via plug-n-play login or custom login UI

  // auth.connect() or auth.loginWithSocial
  try {
    const provider = await auth.connect()
    console.log({ provider })
  } catch (error) {
    console.log({ error })
  }

  // Get User Account address 

  try {
    const accounts = await provider.request({ method: 'getAccounts' })
    from = accounts[0]
  } catch (e) {
    console.log({ e })
  }

  // For authenticated users, add code for signing message

  import base58 from "bs58";
    
  const message = base58.encode("This is a test message for trying 'SignMessage'.");

  const signedMessage = await auth.provider.request({
    method: "near_signMessage",
    params: { message },
  });

  console.log(signedMessage);

  // Returns signature object
  // {signature: "some-sig"}

```

### `SignAndSendTransaction`

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

  // Onboard users via plug-n-play login or custom login UI

  // auth.connect() or auth.loginWithSocial
  try {
    const provider = await auth.connect()
    console.log({ provider })
  } catch (error) {
    console.log({ error })
  }

  ...

  // Get Accounts

  try {
    const accounts = await provider.request({ method: 'getAccounts' })
    from = accounts[0]
  } catch (e) {
    console.log({ e })
  }


  // Get Receiver Account address
  // Read from app user interface
  // receiver = Buffer.to()

  ...

  // For authenticated users, add code for signing transaction

 const transaction = {
  receiverId: receiver,
  actions: [
    {
      transfer: {
        deposit: BigInt(1000),
      },
    },
    {
      transfer: {
        deposit: BigInt(1000),
      },
    },
    {
      transfer: {
        deposit: BigInt(1000),
      },
    },
  ],
}

const signedTransaction = await auth.provider.request({
  method: "near_signAndSendTransaction",
  params: { transaction },
});

console.log(signedTransaction);
```
