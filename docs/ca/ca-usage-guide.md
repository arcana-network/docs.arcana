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

Learn how to integrate {{config.extra.arcana.company_name}}'s Chain Abstraction
in a Web3 app to enable unified balance.

[:octicons-cross-reference-16:{ .icon-color } {{config.extra.arcana.ca_sdk_name}}
Reference]({{config.extra.arcana.ca_sdk_ref_url}}){ .md-button }

## Installation

```sh
npm install @arcana/ca-sdk
```

## Quick start

```ts
import { CA } from "@arcana/ca-sdk";

const provider = window.ethereum;

const ca = new CA();
ca.setEVMProvider(provider);

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

To integrate, create a `CA` object and initialize it. Get the chain abstraction enabled EVM Provider. Use it as a drop in replacement for an EIP-1193 provider (e.g., window.ethereum) in the Web3 app code.

### Initialize

```ts
import { CA } from "@arcana/ca-sdk";

const ca = new CA();
ca.setEVMProvider(window.ethereum);

await ca.init();
```

### Hooks

Manage allowance setup and intent processing flows in the Web3 app UI.

#### `setOnAllowanceHook`

```ts
import type { OnAllowanceHook, OnIntentHook } from "@arcana/ca-sdk";

ca.setOnAllowanceHook(async ({ allow, deny, sources }: Parameters<OnAllowanceHook>[0]) => {
  // This is a hook for the dev to show user the allowances that need to be set up
  // for the current tx to happen.

  // sources: an array of objects with minAllowance, chainID, token symbol, etc.

  // allow(allowances): continues the transaction flow with `allowances` array
  // allowances.length === sources.length;
  // valid values are "max" | "min" | string | bigint

  // deny(): stops the flow
});
```

#### `setOnIntentHook`

```ts
ca.setOnIntentHook(({ intent, allow, deny, refresh }: Parameters<OnIntentHook>[0]) => {
  // This is a hook for the dev to show user the intent, the sources and associated fees

  // intent: Intent data containing sources and fees for display purpose

  // allow(): accept the current intent and continue the flow

  // deny(): deny the intent and stop the flow

  // refresh(): should be on a timer of 5s to refresh the intent
  // (old intents might fail due to fee changes if not refreshed)

});
```

### Intents

Get the list of intents representing user's request for funds. Chain abstracted transactions service these requests.

```ts
import type { RFF } from "@arcana/ca-sdk"

const page = 1
const intentList: RFF[] = await ca.getMyIntents(page);
```

### Allowance

Get allowance values configured for the chain abstracted transactions. Set to unlimited by default for all supported chains and tokens. Developers can update the allowance settings via `setOnAllowanceHook()`.

```ts
await ca.allowance().get({
  tokens: ["USDC"],
  chainID: 137,
});
```

### Unified Balance

Get chain abstracted unified balance in the user's EOA.

#### `getUnifiedBalances`

Get total balance for all supported tokens across all chains.

```ts
const balances = await ca.getUnifiedBalances();
```

#### `getUnifiedBalance`

Get total balance for a specific token across all chains.

```ts
const usdtBalance = await ca.getUnifiedBalance("usdt");
```

### Transfer

Use chain abstracted transactions to transfer funds. Transfer to any chain with a specified token amount. Source funds from the unified balance.

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

### Bridge

Use chain abstracted transactions to bridge funds. Bridge to a specified token and chain using unified balance.

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

### Events

Handle intent processing events for the chain abstracted transactions.

#### Add Listener

```ts
ca.caEvents.on("expected_steps", (data) => {
  state.value.steps = data.map((s) => ({ ...s, done: false }));
});

ca.caEvents.on("step_complete", (data) => {
  const v = state.value.steps.find((s) => {
    return s.typeID === data.typeID;
  });
  if (v) {
    v.done = true;
  }
});
```

#### Remove Listener

```ts
ca.caEvents.removeListener("expected_steps", () => {...})
ca.caEvents.removeListener("step_complete", () => {...})
```

Refer to the [CA SDK Reference Guide](https://ca-sdk-ref-guide.netlify.app/modules) for details.