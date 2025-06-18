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

Build unified balance and chain abstraction in [Wagmi](https://wagmi.sh/) apps
with the {{config.extra.arcana.company_name}} SDKs. Chain abstraction lets app 
users spend on any chain.

## Prerequisites

Download and install the SDKs:

{% include "./code-snippets/ca_wagmi_sdk_install.md" %}

## `CA Object`

Create a `CA object`. Use it to create the `CAProvider` component.

```ts
import { CA } from "@arcana/ca-sdk";

const ca = new CA();

```

## `CA Provider`

The `CAProvider` component offers hooks with the same name as the Wagmi library.

Change the app code and import these hooks from the 
{{config.extra.arcana.ca_wagmi_sdk_name}} SDK instead of the Wagmi library. This 
will enable chain abstracted transactions in the app. No transaction code modifications 
are needed.

The SDK also provides other non-Wagmi chain abstraction hooks. These hooks can be added 
to the app code for accessing unified balance associated with the user's EOA. Any 
third-party browser based wallet can be used. It can issue chain abstracted transactions 
via the `CAProvider`.

### Initialize

{% include "./code-snippets/new_ca_provider.md" %}

For `CAProvider` API details, see 
[{{config.extra.arcana.ca_wagmi_sdk_name}} Reference]({{config.extra.arcana.ca_wagmi_sdk_ref_url}}).

### Wagmi Hooks

Replace the following hooks used in the app from the Wagmi library with those from the {{config.extra.arcana.ca_wagmi_sdk_name}} package:

```js
import { useSendTransaction, useWriteContract } from "@arcana/ca-wagmi";

// Replace the `wagmi` APIs `useSendTransaction` and `useSendTransactionAsync`
const { sendTransaction, sendTransactionAsync } = useSendTransaction(); 

// Replace the wagmi APIs `useWriteContract` and `useWriteContractAsync`
const { writeContract, writeContractAsync } = useWriteContract(); 
```

### Arcana Hooks

Use these Arcana hooks to access [[concept-unified-balance|unified balance]] via the plug-and-play widget. Additionally, you can enable chain abstracted bridge and transfer functions through `useCAFns`.

* [`useBalance`](#usebalance) - to get the unified balance value across all supported chains for the specified token string 
* [`useBalances`](#usebalances) - to get the unified balance values across all supported chains for all supported tokens associated with the EOA
* [`useBalanceModal`](#usebalancemodal) - to display or hide the unified balance popup widget
* [`useCAFn()`](#usecafn)  - for chain abstracted bridging and token transfer functionality
* [`useGetMyIntent()`](usegetmyintent) - get the list of intents created by the user

#### useBalance

The `useBalance` hook returns the unified balance value of the specified  token string across all the supported chains associated with the user's EOA.

`useBalance({ symbol: string })`

`symbol`: Required parameter of type `string` with the value equal to one of the supported currency/token symbol.

`useBalance()` returns response contains the following fields:

| Parameter   | Type             |
|-------------|------------------|
| loading     | `boolean`        |
| value       | `{ symbol: string, decimals: number, formatted: string, value: bigint} \| null` |
| error       | `Error \| null`  |

```js
import { useBalance } from "@arcana/ca-wagmi"

const balance = useBalance({ symbol: "eth" })
```

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

#### useBalances

The `useBalances` hook returns the unified balance value across all the supported chains and all the supported tokens associated with the user's EOA.

`useBalances()` returns response contains the following fields:

| Parameter | Type |
| :-------- | :--- |
| loading   | `boolean` |
| value     | `UseBalanceValue[] \| null` |
| error     | `Error \| null` |

```js
import { useBalances } from "@arcana/ca-wagmi"

const balances = useBalances()
```
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

#### useBalanceModal

The `useBalanceModal` hook can be used in the app to display or hide the unified balance modal. This modal displays the following information:

* Overall unified balance: This is the total balance in the user's EOA across all supported chains and tokens that is available for spending
* Per token unified balance: For every supported token it displays the aggregate token balance across all the supported chains along with a list of chains and per chain token balance.

`useBalanceModal()` returns response contains the following fields:

| Field | Type |
| :---- | :--- |
| showModal | `() => void` |
| hideModal | `() => void` |

```js
import { useBalanceModal } from "@arcana/ca-wagmi"

const { showModal, hideModal } = useBalanceModal()
```

<figure markdown="span">
  <img class="an-screenshots-noeffects width_50pc" alt="With CA" src="{{config.extra.arcana.img_dir}}/pnp_wagmi_unified_balance.{{config.extra.arcana.img_gif}}"/>
  <figcaption>Plug & Play Unified Balance Widget</figcaption>
</figure>

#### useCAFn

This is a new hook offered by `CAProvider` to allow chain abstracted `bridge` and `transfer` functions through the user's EOA.

The `useCAFn()` response contains the following fields:

| Parameter   | Type             |
|-------------|-----------------------------------|
| bridge     | `({ token: string, amount: string, chain: number }) => Promise<unknown>` |
| transfer   | `({ token: string, amount: string, chain: number, to: "0x${string}" }) => Promise<unknown>` |

```js
  import { useCAFn } from "@arcana/ca-wagmi"

  const { bridge, transfer } = useCAFn()

  await bridge({
  token: "usdt",
  amount: "1.5",
  chain: 42161
  })

  const hash = await transfer({to: "0x80129F3d408545e51d051a6D3e194983EB7801e8",
  token: "usdt",
  amount: "1.5",
  chain: 10
  })
```

<figure markdown="span">
  <img class="width_85pc an-screenshots-noeffects width_50pc" alt="With CA" src="{{config.extra.arcana.img_dir}}/ca-sdk-example-bridge-transfer.{{config.extra.arcana.img_gif}}"/>
  <figcaption>`useCAFn`: Chain Abstracted Bridge and Transfer </figcaption>
</figure>

#### useGetMyIntents

Used to get a list of intents created by the user.

##### Usage

`useGetMyIntents(page)`

```javascript
import { useGetMyIntents } from "@arcana/ca-wagmi";

const getMyIntentsResponse = useGetMyIntents(1);
```

##### Response

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