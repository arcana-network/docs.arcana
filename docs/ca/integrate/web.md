---
alias: ca-integrate-web
title: 'Web Apps'
description: 'Integrate dApp with the CA SDK offering Arcana Chain Abstraction and enable unified balance for users.'
arcana:
  root_rel_path: ../..
  app_type: "'Web'"
  app_example_submodule: "'`ca-sdk-example`'"
---

# Integrate Web App

Integrate {{page.meta.arcana.app_type}} Web3 apps with the [{{config.extra.arcana.ca_sdk_name}}]({{page.meta.arcana.root_rel_path}}/concepts/ca/casdk.md) to enable [[concept-unified-balance|unified balance]]. 

With unified balance, Web3 app users can access funds across chains.
They can spend assets on any chain using chain abstraction.
No need to switch chains or bridge assets for gas.

## Prerequisites

[Download]({{config.extra.arcana.ca_sdk_download_url}}) and install the SDK.

{% include "./code-snippets/casdk_install.md" %}

## Initialize `CA`

{% include "./text-snippets/quick-start-int-casdk.md" %}

## Allowance Hook

Use `setOnAllowanceHook` to set up [[concept-allowances|allowances]] for chain
abstracted transactions. 

```js
ca.setOnAllowanceHook(async ({ allow, deny, sources }) => {
    // This is a hook for the dev to show user the allowances that need to be setup for the current tx to happen

    // sources: an array of objects with minAllowance, chainID, token symbol etc
    // allow(allowances): allowances is an array with allowance for each source (len(sources) == len(allowances))
    // deny(): stop the flow
})
```

## Intent Hook

Use the `setOnIntentHook` UI hook to show the intent, funds source, and fees. 
Let users confirm the transaction before spending on the target chain.

```js
ca.setOnIntentHook(({ intent, allow, deny, refresh }) => {
    // This is a hook for the dev to show user the intent, the sources and associated fees

    // intent: Intent data containing sources and fees for display purpose
    // allow(): accept the current intent
    // deny(): deny the intent and stop the flow
    // refresh(): should be on a timer of 5s to refresh the intent (if not refreshed old intents might fail due to fee changes)
  })
```

## Access Unified Balance

Use `getUnifiedBalances` to get the unified balance in the user's EOA.
Unified balance shows the total of every token across all chains in the wallet.

```js
const balances = await ca.getUnifiedBalances()
```

Use `getUnifiedBalance` to get the total balance of a specified token.
It sums up the input token balance across all chains in your wallet.

```js
const usdtBalance = await ca.getUnifiedBalance("usdt")
```

## CA Transaction

### Transfer

Use chain abstracted transactions to transfer funds. Transfer to any chain with 
a specified token amount. Source funds from the unified balance.

```ts
const handler = await ca.transfer({
  to: "0x...",
  amount: 5,
  chainID: 10,
  token: "eth",
});

// Execute the transfer
const hash = await handler.exec();

// Simulate the transfer, returns intent data and token info
const response = await handler.simulate();
```

`chain()` is optional, it will use the current chain as input if not specified.

### Request

Use `getEVMProviderWithCA` to get a chain abstraction enabled EIP-1193 provider.
Use this chain abstracted provider to issue any `request` call with `eth_sendTransaction` operation.

```js
const providerWithCA = ca.getEVMProviderWithCA();

await providerWithCA.request({
    method: "eth_sendTransaction",
    params: [{
        to: "0xEa46Fb4b4Dc7755BA29D09Ef2a57C67bab383A2f", 
        from: "0x7f521A827Ce5e93f0C6D773525c0282a21466f8d",
        value: "0x001"
    }],
})
```

{% include "./text-snippets/ca/transfer_note.md" %}

Use chain abstracted transactions to bridge funds. Bridge to a specified token
and chain using unified balance.

```ts
const handler = await ca.bridge({
  token: "usdt",
  amount: 10,
  chainID: 137,
});

// Execute the bridge
await handler.exec();

// Simulate the bridge, returns intent data and token info
const response = await handler.simulate();
```

### Get Allowance

```js
// Get USDC allowance for Polygon
await ca.allowance().tokens(["USDC"]).chain(137).get()
// Get USDC & USDT allowance for all supported chains
await ca.allowance().tokens(["USDC", "USDT"]).get()
// Get all supported token allowances for all supported chains
await ca.allowance().get()
```

## Handle Events

Keep track of the user [[concept-intent| intent]] processing stages.

Set up a listener to monitor various [[concept-intent#stages|intent processing stages]]
during a chain abstracted transaction.

### Add Listener

```js
ca.addCAEventListener((data) => {
    switch(data.type) {
        case "EXPECTED_STEPS":{
            // store data.data(an array of steps which will be followed)
            state.value.steps = data.data.map(s => ({ ...s, done: false }))
            state.value.inProgress = true
            break;
        }
        case "STEP_DONE": {
            const v = state.value.steps.find(s => {
                return s.typeID === data.data.typeID
            })
            if (v) {
                v.done = true
            }
            break;
        }
    }
});
```

### Remove Listener

```js
ca.removeCAEventListener((data) => {...})
```

Check out the [integration example]({{config.extra.arcana.ca_sdk_sandbox_url}}) code.

{% include "./text-snippets/quick-start-deploy-ca.md" %}

## See Also

{% include "./text-snippets/ca_sdk_quicklinks.md" %}

{% include "./text-snippets/demo/ca_sdk_demo.md" %}

{% include "./text-snippets/demo/ca_sdk_vite_example.md" %}