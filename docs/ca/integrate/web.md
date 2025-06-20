---
alias: ca-integrate-web
title: 'Web Apps'
description: 'Integrate dApp with the CA SDK offering Arcana Chain Abstraction and enable unified balance for users.'
arcana:
  root_rel_path: ../..
  app_type: "'Web3'"
  app_example_submodule: "'`ca-sdk-example`'"
---

# Integrate Web App

Integrate {{page.meta.arcana.app_type}} apps with the 
[{{config.extra.arcana.ca_sdk_name}}]({{page.meta.arcana.root_rel_path}}/concepts/ca/casdk.md) 
to enable:

* [[concept-unified-balance|Unified balance]]
* [[concept-ca|Chain abstracted]] transactions

App users can spend funds on any chain.
They do not need to switch chains or bridge assets.

## Prerequisites

[Download]({{config.extra.arcana.ca_sdk_download_url}}) and install the SDK.

{% include "./code-snippets/casdk_install.md" %}

## Initialize

{% include "./text-snippets/quick-start-int-casdk.md" %}

## Unified Balance

Get unified balance on the supported source chains:

* View the total EOA balance for all supported tokens and chains.
* View the total EOA balance for a specified token across all chains.

{% include "./code-snippets/ca_get_ub.md" %}

## CA Transactions

Enable chain abstracted transactions through:

* `transfer`
* `request`
* `bridge`

### `transfer`

Use unified balance for chain abstracted transactions.

{% include "./code-snippets/ca_transfer.md" %}

### `request`

Replace the standard EIP-1193 provider with a chain-abstracted one using `getEVMProviderWithCA`. Then use it to call `request` with
`eth_sendTransaction` to use unified balance.

{% include "./code-snippets/ca_get_req_prov.md" %}

### Bridge

Use the unified balance to deposit tokens on a different chain.
Chain abstracted transactions handle the transfer.

{% include "./code-snippets/ca_bridge.md" %}

## Allowance

Allowances are set to `unlimited` by default for all supported chains and tokens.
Developers can update the allowance settings via `setOnAllowanceHook()`. App users
can approve chain abstracted transactions. They cannot change the allowance set by
the app developers.

### `setOnAllowanceHook`

Use `setOnAllowanceHook` to set up [[concept-allowances|allowances]] for chain
abstracted transactions. The default value is set to `unlimited` for all chains.

{% include "./code-snippets/ca_hook_allow.md" %}

### Get Allowance

Get allowance values configured for the chain abstracted transactions.

{% include "./code-snippets/ca_get_allow.md" %}

## Intents

### `setOnIntentHook`

Use `setOnIntentHook` to show the intent details such as
the source of funds, applicable fees.

{% include "./code-snippets/ca_hook_intent.md" %}

### Get Intents

Get the list of intents representing user's request for funds.

{% include "./code-snippets/ca_get_intents.md" %}

## Events

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