---
alias: ca-wagmi-quick-start
title: 'Get Started: CA'
description: 'Get Started quickly with Arcana Chain Abstraction and enable unified balance for users in Wagmi apps. Learn how to integrate Arcana CA Wagmi SDK.'
arcana:
  root_rel_path: ..
  app_type: "'CA-Wagmi'"
---

# Get Started: Wagmi Apps

Enable [[concept-unified-balance|unified-balance]] and chain abstracted transactions in Web3 apps built with the [Wagmi](https://wagmi.sh/) library by integrating with the [[concept-cawagmi|{{config.extra.arcana.ca_wagmi_sdk_name}}]]. 

{{config.extra.arcana.ca_wagmi_sdk_name}} lets you add chain abstracted `bridge` and `transfer` functions in `wagmi` apps. Replace the `useSendTransaction` and `useWriteContract` hooks of the Wagmi library with those provided by the SDK to enable chain abstraction in a transparent manner.

!!! an-note "Wagmi Plug & Play Widget"

    The [[concept-cawagmi|{{config.extra.arcana.ca_wagmi_sdk_name}}]] supports a [[concept-unified-balance-wagmi-pnp|plug-and-play UI modal]] that displays the [[concept-unified-balance|unified balance]] within the Wagmi app context. Authenticated app users can view the unified balance via the plug-and-play widget and issue blockchain transactions through any browser-based third-party wallets connected to the Wagmi app.

## 1. Install

{% include "./code-snippets/ca_wagmi_sdk_install.md" %}

## 2. Integrate

Use the `CAProvider` component from {{config.extra.arcana.ca_wagmi_sdk_name}} in the app code. Make sure you import the following functions from the {{config.extra.arcana.ca_wagmi_sdk_pkg_name}} and **not from the wagmi SDK**.

* `useBalance`  - Unify the specified token balance across chains - USDC, USDT, ETH
* `useSendTransaction` - Chain abstracted Send Transaction
* `useWriteContract` - Chain abstracted Write Contract
* `useUnifiedBalance` - Get unified balance for all tokens across all chains

The SDK also offers additional hooks: 

* `useBalanceModal`  - Display a plug and play widget containing the unified balance
* `useCAFn` - Allows chain abstracted bridge and transfer functions

For details, see [{{config.extra.arcana.ca_wagmi_sdk_name}} Reference]({{config.extra.arcana.ca_wagmi_sdk_ref_url}}).

Refer to the following sample integration code and hook usage.

{% include "./text-snippets/quick-start-int-ca-wagmi-sdk.md" %}

## Hooks

The {{config.extra.arcana.ca_wagmi_sdk_name}} replaces `useSendTranaction` and `useWriteContract` hooks of the `wagmi` library. In addition, it provides hooks for managing unified balance.

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

#### useBalance

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

## See Also

{% include "./text-snippets/ca_wagmi_sdk_quicklinks.md" %}

{% include "./text-snippets/demo/ca_wagmi_sdk_demo.md" %}
