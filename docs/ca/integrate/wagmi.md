---
alias: ca-integrate-wagmi
title: 'Wagmi Apps'
description: 'Integrate Wagmi based dApps with the CA Wagmi SDK to enable unified balance and chain abstracted transactions for users.'
arcana:
  root_rel_path: ../..
  app_type: "'Wagmi'"
  app_example_submodule: "'`ca-wagmi-example`'"
---

# Integrate Wagmi App

Integrate [{{page.meta.arcana.app_type}}](https://wagmi.sh/) apps with the
[{{config.extra.arcana.ca_wagmi_sdk_name}}]({{page.meta.arcana.root_rel_path}}/concepts/ca/casdk.md) 
to enable:

* [[concept-unified-balance|Unified balance]]
* [[concept-ca|Chain abstracted]] transactions

App users can spend funds on any chain.
They do not need to switch chains or bridge assets.

{% include "./text-snippets/warn_no_fuel_support_ca_wagmi.md" %}

## Prerequisites

Download and install the SDKs:

{% include "./code-snippets/ca_wagmi_sdk_install.md" %}

## `CAProvider`

Initialize the `CAProvider` component and specify the `CA` object as the `client` param.

{% include "./code-snippets/new_ca_provider.md" %}

For `CAProvider` methods, see 
[{{config.extra.arcana.ca_wagmi_sdk_name}} Reference]({{config.extra.arcana.ca_wagmi_sdk_ref_url}}/modules).

The `CAProvider` component offers hooks with the same name as the Wagmi library.

Replace the `useSendTransaction` and `useWriteContract` hooks from the Wagmi library.
Instead, use the versions provided by the SDK.
These support chain abstracted transactions.

## Wagmi Hooks

Replace the following hooks used in the app from the Wagmi library with those from the {{config.extra.arcana.ca_wagmi_sdk_name}} package:

```js
import { useSendTransaction, useWriteContract } from "@arcana/ca-wagmi";

// Replace the `wagmi` APIs `useSendTransaction` and `useSendTransactionAsync`
const { sendTransaction, sendTransactionAsync } = useSendTransaction(); 

// Replace the wagmi APIs `useWriteContract` and `useWriteContractAsync`
const { writeContract, writeContractAsync } = useWriteContract(); 
```

## Arcana Hooks

The SDK also provides hooks for:
- Accessing [[concept-unified-balance|unified balance]]
- Issuing chain abstracted bridge and transfer functions
- Getting a list of user intents

* [`useBalance`](#usebalance) - to get the unified balance value across all supported chains for the specified token string 
* [`useBalances`](#usebalances) - to get the unified balance values across all supported chains for all supported tokens associated with the EOA
* [`useBalanceModal`](#usebalancemodal) - to display or hide the unified balance popup widget
* [`useCAFn()`](#usecafn)  - for chain abstracted bridging and token transfer functionality
* [`useGetMyIntents()`](#usegetmyintents) - get the list of intents created by the user

### useBalance

The [`useBalance`](https://ca-wagmi-sdk-ref-guide.netlify.app/#md:usebalance) hook 
fetches the unified balance for the specified token. This is the value across 
all the supported chains associated with the user's EOA.

`useBalance({ symbol: string })`

#### Params

`symbol`: Required parameter of type `string` with the value equal to one of the supported currency/token symbol.

{% include "./code-snippets/ca_wagmi_use_balance.md" %}

#### Response

| Parameter   | Type             |
|-------------|------------------|
| loading     | `boolean`        |
| value       | `{ symbol: string, decimals: number, formatted: string, value: bigint} \| null` |
| error       | `Error \| null`  |

??? an-example "Sample `useBalance` Response"

    ```js
    {
      loading: false,
      value: {
        symbol: "ETH",
        decimals: 18,
        formatted: "0.000785657313049966",
        value: 785657313049966n
      },
      error: null
    }
    ```

### useBalances

The [`useBalances()`](https://ca-wagmi-sdk-ref-guide.netlify.app/#md:usebalances) hook returns the unified balance value across all the supported chains and all the supported tokens associated with the user's EOA.

{% include "./code-snippets/ca_wagmi_use_balances.md" %}

#### Response

returns response contains the following fields:

| Parameter | Type |
| :-------- | :--- |
| loading   | `boolean` |
| value     | `UseBalanceValue[] \| null` |
| error     | `Error \| null` |

??? an-example "Sample `useBalances` Response"

    ```js
    {
      loading: false,
      value: [{
        symbol: "ETH",
        decimals: 18,
        formatted: "0.000785657313049966"
        value: 785657313049966n,
        breakdown: [{
          chain: {
            id: 1,
            name: "Ethereum",
            logo: "..."
          },
          formatted: "0.000785657313049966",
          address: "0x0000000000000000000000000000000000000000",
          value: 785657313049966n
        }]
      }],
      error: null
    } 
    ```

### useBalanceModal

The [`useBalanceModal()`](https://ca-wagmi-sdk-ref-guide.netlify.app/#md:usebalancemodal) hook can be used in the app to display or hide the unified balance modal. This modal displays the following information:

* **Overall unified balance:** Total available balance in the user's EOA across all supported chains and tokens
* **Per token unified balance:** Total available token balance across all the supported chains, breakup in a list of chains and per chain token balance.

{% include "./code-snippets/ca_wagmi_use_balance_modal.md" %}

#### Response

| Field | Type |
| :---- | :--- |
| showModal | `() => void` |
| hideModal | `() => void` |


<figure markdown="span">
  <img class="an-screenshots-noeffects width_50pc" alt="With CA" src="{{config.extra.arcana.img_dir}}/pnp_wagmi_unified_balance.{{config.extra.arcana.img_gif}}"/>
  <figcaption>Plug & Play Unified Balance Widget</figcaption>
</figure>

### useCAFn

The `useCAFn()` hook allows chain abstracted `bridge` and `transfer` transactions.

{% include "./code-snippets/ca_wagmi_useCAFn.md" %}

#### Response

| Parameter   | Type             |
|-------------|-----------------------------------|
| bridge     | `({ token: string, amount: string, chain: number }) => Promise<unknown>` |
| transfer   | `({ token: string, amount: string, chain: number, to: "0x${string}" }) => Promise<unknown>` |


<figure markdown="span">
  <img class="width_85pc an-screenshots-noeffects width_50pc" alt="With CA" src="{{config.extra.arcana.img_dir}}/ca-sdk-example-bridge-transfer.{{config.extra.arcana.img_gif}}"/>
  <figcaption>`useCAFn`: Chain Abstracted Bridge and Transfer </figcaption>
</figure>

### useGetMyIntents

Used to get a list of intents created by the user.

`useGetMyIntents(page)`

#### Params

`page`: Page number; 1 returns latest, max 100 results per page

{% include "./code-snippets/ca_wagmi_get_intents.md" %}

#### Response

`UseQueryResult<RFF[] | null>`

**Sample Response**

```js
{
  isLoading: false,
  isFetching: false,
  isSuccess: true,
  isError: false,
  data: [{
    id: 107,
    sources: [{
      universe: "ETHEREUM",
      tokenAddress: "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
      value: 18531n,
      chainID: 10,
    }],
    destinations: [{
      tokenAddress: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
      value: 10000n,
    }],
    destinationUniverse: "ETHEREUM",
    destinationChainID: 42161
    fulfilled: true,
    refunded: false,
    expiry: 1750070223,
    deposited: true
  }],
  error: null
}
```

{% include "./text-snippets/quick-start-deploy-ca.md" %}

## See Also

{% include "./text-snippets/ca_wagmi_sdk_quicklinks.md" %}

{% include "./text-snippets/demo/ca_wagmi_sdk_demo.md" %}