---
alias: web-ca-usage-guide
title: 'Arcana CA Web SDK Usage Guide'
description: 'How to install and use the Arcana CA Web SDK with sample code and references.'
arcana:
  root_rel_path: ..
---

<!--
Note, this is a pure markdown file with no mkdocs related tags or keywords. It is a copy 
of the file in the `ca` repo: https://github.com/arcana-network/ca-sdk/blob/main/usage.md
-->

# {{config.extra.arcana.ca_sdk_name}} Usage

Learn how to integrate {{config.extra.arcana.company_name}}'s Chain Abstraction in a Web3 app to enable unified balance.

[:octicons-cross-reference-16:{ .icon-color } {{config.extra.arcana.ca_sdk_name}} Reference]({{config.extra.arcana.ca_sdk_ref_url}}){ .md-button }

## Installation

```sh
npm install @arcana/ca-sdk
```

## Quick start

```js
import { CA } from "@arcana/ca-sdk";

const provider = window.ethereum;

const ca = new CA();
ca.setEVMProvider(provider);  //Specify the standard EVM Provider before initializing CA

await ca.init();

const providerWithCA = ca.getEVMProviderWithCA();

await providerWithCA.request({
  method: "eth_sendTransaction",
  params: [
    {
      to: "0xEa46Fb4b4Dc7755BA29D09Ef2a57C67bab383A2f",
      from: "0x7f521A827Ce5e93f0C6D773525c0282a21466f8d",
      value: "0x001",
    },
  ],
});
```

## Usage

### Import & Initialize

```js
import { CA } from "@arcana/ca-sdk";

provider = window.ethereum;

const ca = new CA();
ca.setEVMProvider(provider);
await ca.init();  // Initialize the CA provider before calling any API function
```

## API

### UI Hooks 

The following UI hooks help in managing the [[concept-allowances|allowance]] setup and [[concept-intent|intent]] processing flows.

```js
ca.setOnAllowanceHook(async ({ allow, deny, sources }) => {
  // This is a hook for the dev to show user the allowances that need to be setup for the current tx to happen
  // where,
  // sources: an array of objects with minAllowance, chainID, token symbol, etc.
  // allow(allowances): continues the transaction flow with allowances (allowances.length === sources.length);
  // deny(): stops the flow
});


ca.setOnIntentHook(({ intent, allow, deny, refresh }) => {
  // This is a hook for the dev to show user the intent, the sources and associated fees
  // where,
  // intent: Intent data containing sources and fees for display purpose
  // allow(): accept the current intent and continue the flow
  // deny(): deny the intent and stop the flow
  // refresh(): should be on a timer of 5s to refresh the intent (old intents might fail due to fee changes if not refreshed)
});
```

### Get Intents

Get the intents created by the user.

```js
const intentList = await ca.getMyIntents(1); // 1 - Page number, each page has 100 intents
```

### Allowance

[[concept-allowances|Allowances]] help activate the Chain Abstraction (CA) feature offered by {{config.extra.arcana.company_name}}.

#### Get Allowance

```js
// Get USDC allowance for polygon chain
await ca.allowance().tokens(["USDC"]).chain(137).get()

// Get USDC & USDT allowance for all supported chains
await ca.allowance().tokens(["USDC", "USDT"]).get()

// Get all supported token allowances for all supported chains
await ca.allowance().get()
```

#### Set Allowance

```js
await ca.allowance().tokens(["USDC"]).chain(42161).amount(BigInt(100000000000)).set()
```

#### Revoke Allowance

```js
await ca.allowance().tokens(["USDC"]).chain(42161).revoke()
```

### Unified Balance

```js
const balances = await ca.getUnifiedBalances()
const usdtBalance = await ca.getUnifiedBalance("usdt")
```

### Transfer

Use `transfer` to issue a chain abstracted blockchain transaction and deposit funds to an EOA through the [[concept-unified-balance|unified balance]].

```js
await ca.transfer().to("0x...").amount(5).chain(10).token("eth").exec()
```

`chain()` is optional, it will use the current chain as input if not specified.

### getEVMProviderWithCA

Use `getEVMProviderWithCA` to obtain an EIP-1193 provider. 

```js
const providerWithCA = ca.getEVMProviderWithCA();
```

### Request

Use the `getEVMProviderWithCA` to obtain an EIP-1193 provider and then issue the `request` method `eth_sendTransaction` operation for enabling a chain abstracted transaction. It uses unified balance funds to deposit funds in any smart contract or to transfer ERC20 tokens in a chain abstracted transaction.

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

### Bridge

Use the `bridge` function to bridge chain abstracted funds via the unified balance on any destination chain by utilizing the approved source chain funds.

```js
await ca.bridge().token("usdt").amount(10).chain(137).exec();
```

`chain()` is optional, it will use the current chain as input if not specified.

### CA Events

#### Add Listener

```js
ca.caEvents.on("expected_steps", (data) => {
    state.value.steps = data.map(s => ({ ...s, done: false }))
})

ca.caEvents.on("step_complete", data => {
    const v = state.value.steps.find(s => {
        return s.typeID === data.typeID
    })
    if (v) {
        v.done = true
    }
})

// @deprecated
ca.addCAEventListener((data) => {
    switch(data.type) {
        case "EXPECTED_STEPS":{
            // store data.data(an array of steps which will be followed)
            state.value.steps = data.data.map(s => ({ ...s, done: false }))
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

#### Remove Listener

```js
ca.caEvents.removeListener("expected_steps", () => {...})
ca.caEvents.removeListener("step_complete", () => {...})

// @deprecated
ca.removeCAEventListener((data) => {...})

```

Refer to the [CA SDK Reference](https://ca-sdk-ref-guide.netlify.app/modules) for details.