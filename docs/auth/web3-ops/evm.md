---
alias: evm-web3-wallet-ops
title: 'EVM Wallet Ops'
description: 'List of all the supported Web3 wallet operations for EVM chains by the Arcana wallet.'
arcana:
  root_rel_path: ../../..
---

# EVM Wallet Ops

The {{config.extra.arcana.wallet_name}} supports [standard Ethereum JSON-RPC specification APIs](https://ethereum.org/en/developers/docs/apis/json-rpc/) via the `AuthProvider`.

{% include "./text-snippets/note_other_chain_wallet_ops.md" %}

## Prerequisites

* [[register-app-auth|Register]] the Near app and configure SDK usage [[index-config-social-providers|settings for social login]] providers, [[configure-wallet-chains|manage app chains]] and [[index-setup-wallet|wallet user experience]].

* Install the [[sdk-installation|required SDK packages]], integrate the SDK with the app and create `AuthProvider`. 

## Handle Events

{% include "./code-snippets/new_auth_quick.md" %}

{% include "./code-snippets/init_auth.md" %}

{% include "./code-snippets/auth_json_rpc_setup.md" %}

## Supported Web3 Operations

{% include "./text-snippets/evm_web3_ops.md" %}

### Get Accounts

{% include "./code-snippets/auth_get_account.md" %}

### Get Balance

{% include "./code-snippets/auth_get_balance.md" %}

### Add Network

{% include "./code-snippets/auth_add_ntwk.md" %}

### Switch Network

{% include "./code-snippets/auth_switch_ntwk.md" %}

### Get Account Type

{% include "./code-snippets/auth_get_account_type.md" %}

### Watch Assets

{% include "./code-snippets/auth_watchasset.md" %}

### Sign Transaction

```js
async function signTransaction() {

  const { sig } = await auth. provider.request({
    method: 'eth_signTransaction',
    params: [
      {
        from: "0xEB014f8c8B418Db6b45774c326A0E64C78914dC0",
        gasPrice: "20000000000",
        gas: "21000",
        to: '0x3535353535353535353535353535353535353535',
        value: "1000000000000000000",
        data: "some data"
      },
    ],
  })
  console.log({ sig })
}
```

### Send Transactions

{% include "./code-snippets/new_auth_quick.md" %}

{% include "./code-snippets/init_auth.md" %}

```js
async function sendTransaction() {
  setRequest('eth_sendTransaction')
  const hash = await auth.provider.request({
    method: 'eth_sendTransaction',
      params: [{
      from,
      gasPrice: 0,
      to: '0xE28F01Cf69f27Ee17e552bFDFB7ff301ca07e780',
      value: '0x0de0b6b3a7640000',
    },],
  })
  console.log({ hash })
}
```

<figure markdown="span">
  <img src="{{config.extra.arcana.img_dir}}/an_wallet_send_tx.{{config.extra.arcana.img_png}}" alt="Send Transaction" class="an-screenshots-noeffects width_35pc"/>
  <figcaption>Send Transaction</figcaption>
</figure> 

<figure markdown="span">
  <img src="{{config.extra.arcana.img_dir}}/an_wallet_send.{{config.extra.arcana.img_png}}" alt="Approve/Reject Send Transaction" class="an-screenshots-noeffects width_35pc"/>
  <figcaption>Approve/Reject Send Transaction</figcaption>
</figure>

### Show Wallet

Apps that use `alwaysVisible=false` when initializing the `AuthProvider` can use `showWallet` to display it in the app's context when required.

```js
import { AuthProvider } from '@arcana/auth'

try {

  const auth = new AuthProvider(
    "xar_test_445007f942xxxxxxxxxxxxxxxxxx484cAfd2", // App client ID
    { 
      position: 'left',         // default: right
      theme: 'light',           // default: dark
      alwaysVisible: false, 
    } 
  )
  await auth.init()
  await auth.showWallet()
} catch (e) {
  // Handle exception case
}
```

<figure markdown="span">
  <img src="{{config.extra.arcana.img_dir}}/an_wallet_home.{{config.extra.arcana.img_png}}" alt="Arcana Wallet" class="an-screenshots-noeffects width_35pc"/>
  <figcaption>Arcana Wallet</figcaption>
</figure>