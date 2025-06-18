---
alias: ca-wagmi-quick-start
title: 'Get Started: CA'
description: 'Get Started quickly with Arcana Chain Abstraction and enable unified balance for users in Wagmi apps. Learn how to integrate Arcana CA Wagmi SDK.'
arcana:
  root_rel_path: ..
  app_type: "'CA-Wagmi'"
---

# Get Started: Wagmi Apps

Enable [[concept-unified-balance|unified-balance]] and chain abstracted transactions in Web3 apps built with the [Wagmi](https://wagmi.sh/) library. Integrate with the [[concept-cawagmi|{{config.extra.arcana.ca_wagmi_sdk_name}}]].

{{config.extra.arcana.ca_wagmi_sdk_name}} enables chain abstracted `bridge` and `transfer` functions in `wagmi` apps. Replace the `useSendTransaction` and `useWriteContract` hooks of the Wagmi library with those provided by the SDK to enable chain abstraction in a transparent manner.

!!! an-note "Wagmi Plug & Play Widget"

    The [[concept-cawagmi|{{config.extra.arcana.ca_wagmi_sdk_name}}]] supports a [[concept-unified-balance-wagmi-pnp|plug-and-play UI modal]] that displays the [[concept-unified-balance|unified balance]] within the Wagmi app context. Authenticated app users can view the unified balance via the plug-and-play widget and issue blockchain transactions through any browser-based third-party wallets connected to the Wagmi app.

## 1. Install

{% include "./code-snippets/ca_wagmi_sdk_install.md" %}

## 2. Integrate

Use the `CAProvider` component from {{config.extra.arcana.ca_wagmi_sdk_name}}. Specify the CA object as the `client`
parameter of the component. 

{% include "./code-snippets/new_ca_provider.md" %}

For details on the `CAProvider`, see [{{config.extra.arcana.ca_wagmi_sdk_name}} Reference]({{config.extra.arcana.ca_wagmi_sdk_ref_url}}).

## 3. Wagmi Hooks

To use the chain abstraction enabled Wagmi hooks, make sure you import the following functions from the {{config.extra.arcana.ca_wagmi_sdk_pkg_name}} and **not from the wagmi SDK**.

* `useSendTransaction` - Chain abstracted Send Transaction
* `useWriteContract` - Chain abstracted Write Contract

### `useSendTransaction`

{% include "./code-snippets/ca_wagmi_sendTransaction.md" %}

### `useWriteContract`

{% include "./code-snippets/ca_wagmi_writeContract.md" %}

## 4. Access Unified Balance

* `useBalance`  - Unify the specified token balance across chains - USDC, USDT, ETH
* `useUnifiedBalance` - Get unified balance for all tokens across all chains
* `useBalanceModal`  - Display a plug and play widget containing the unified balance

{% include "./code-snippets/ca_wagmi_uni_balance.md" %}

##5. Get User Intents

```ts
import { useGetMyIntents } from "@arcana/ca-wagmi";

const getMyIntentsResponse = useGetMyIntents(1);
```

## 6. Bridge & Transfer

* `useCAFn` - Allows chain abstracted bridge and transfer functions

{% include "./code-snippets/ca_wagmi_useCAFn.md" %}

{% include "./text-snippets/quick-start-deploy-ca.md" %}

Refer to the following sample integration code and hook usage.

{% include "./text-snippets/quick-start-int-ca-wagmi-sdk.md" %}

[[ca-integrate-wagmi| Learn more]] about supported Wagmi hooks and Arcana hooks for unified balance and chain abstracted `bridge` and `transfer` functions.

<figure markdown="span">
  <img class="width_85pc an-screenshots-noeffects width_50pc" alt="With CA" src="{{config.extra.arcana.img_dir}}/ca-sdk-example-bridge-transfer.{{config.extra.arcana.img_gif}}"/>
  <figcaption>`useCAFn`: Chain Abstracted Bridge and Transfer </figcaption>
</figure>

{% include "./text-snippets/quick-start-deploy-ca.md" %}

## See Also

{% include "./text-snippets/ca_wagmi_sdk_quicklinks.md" %}

{% include "./text-snippets/demo/ca_wagmi_sdk_demo.md" %}
