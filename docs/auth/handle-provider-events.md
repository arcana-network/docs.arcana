---
alias: handle-provider-events
title: 'Handle Provider Events'
description: 'What kind of provider events are supported by the Arcana Auth SDK and how can developers handle them in the app.'
arcana:
  root_rel_path: ..
---

# Handle Provider Events

This guide lists the standard EIP-1193 events raised by the `AuthProvider` in the {{config.extra.arcana.sdk_name}} and how app developers can handle those events in the app. 

## Prerequisites

* To receive and handle the `AuthProvider` events, the app should be [[register-app-auth|registered]], [[index-configure-auth| configured]], and [[index-integrate|integrated]] with the {{config.extra.arcana.sdk_name}}.

## Events

`AuthProvider` emits the following standard [EIP-1193 events](https://eips.ethereum.org/EIPS/eip-1193#events):

  - **connect**: the provider is ready to submit the blockchain requests to the chain on behalf of the user (*Use `provider.isConnected()` to check if the `AuthProvider` is connected.*)
  - **disconnect**: the `AuthProvider` is unable to submit RPC requests to a chain
  - **chainChanged**: the chain associated with the Provider has changed
  - **accountsChanged**: the `AuthProvider` emits this event when the return value of the `eth_accounts` RPC method changes

After initialization, when the provider is ready to submit the blockchain requests to the chain on behalf of the user, the **connect** event is generated. Use `provider.isConnected()` to check if the `AuthProvider` is connected. The **disconnect** event occurs when there is any connectivity issue with the blockchain network. If the chain is switched programmatically via the app and approved by the user or if it is changed via the {{config.extra.arcana.wallet_name}} UI by the user, the **chainChanged** event occurs. Similarly, when the account associated with the `AuthProvider` changes, the **accountsChanged** event is emitted.

## Examples 

### Connect Event

```js
interface ConnectEventInfo {
  chainId: string;
}

const auth = new AuthProvider("...")
await auth.init()

...

auth.provider.on('connect', handler: (data: ConnectEventInfo) => void);

```

### Disconnect Event

When the `AuthProvider` becomes disconnected from the chains it emits the event `disconnect` with the error [ProviderRpcError](https://eips.ethereum.org/EIPS/eip-1193#rpc-errors).

```js

interface ProviderRpcError extends Error {
  code: number;
  data?: unknown;
}

const auth = new AuthProvider("...")
await auth.init()

...

auth.provider.on('disconnect', handler: (error: ProviderRpcError) => void);

```

### Chain Changed Event

```js
const auth = new AuthProvider("...")
await auth.init()

...

auth.provider.on('chainChanged', (chainId: string) => { 
  console.log(chainId);
  // Use chainId
});
```

### Accounts Changed Event

If the accounts available to the `AuthProvider` change, it emits the event **accountsChanged** with value **accounts: string[]**, containing the account addresses.

```js
const auth = new AuthProvider("...")
await auth.init()

...

auth.provider.on('accountsChanged', handler: (accounts: Array<string>) => void);
```

!!! an-note "Remove Listener"

      Make sure that you remove event listeners once you're done listening to an event in the app.  For example:

      ```js

      const auth = new AuthProvider("...")
      await auth.init()

      ...

      function handleSomeEvent(accounts) {
        // Handle the event
      }

      auth.provider.on('someEvent', handleSomeEvent);

      // Later, when the component is unloaded or you are done watching the event

      auth.provider.removeListener('someEvent', handleSomeEvent);
      ```

**That is all!**  :material-party-popper:

*You are all set to handle the events emitted by the `AuthProvider`.*

## What's Next?

Authenticated users can use the {{config.extra.arcana.wallet_name}} to sign blockchain transactions, send and receive native, ERC20, or custom tokens, and [[index-wallet-user-guide| 
more]].

## See also

* [{{config.extra.arcana.wallet_name}} capabilities]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md)
* [[index-wallet-user-guide|Using Web3 wallet operations ]]