---
alias: ca-wagmi-quick-start
title: 'Get Started: CA'
description: 'Get Started quickly with Arcana Chain Abstraction and enable unified balance for users in Wagmi apps. Learn how to integrate Arcana CA Wagmi SDK.'
arcana:
  root_rel_path: ..
  app_type: "'CA-Wagmi'"
---

# Get Started: Wagmi Apps

Integrate Web3 [Wagmi](https://wagmi.sh/) apps with the
[[concept-cawagmi|{{config.extra.arcana.ca_wagmi_sdk_name}}]] to enable:

* [[concept-unified-balance|Unified-balance]]
* [[concept-ca|Chain abstracted]] transactions

Replace the `useSendTransaction` and `useWriteContract` hooks from the Wagmi library.
Instead, use the ones provided by the SDK. They support chain abstracted transactions.

Use the [[concept-unified-balance-wagmi-pnp|plug-and-play UI modal]].
It shows the unified balance in the Wagmi app context.

## 1. Install

{% include "./code-snippets/ca_wagmi_sdk_install.md" %}

## 2. Integrate

{% include "./code-snippets/new_ca_provider.md" %}

See [{{config.extra.arcana.ca_wagmi_sdk_name}} Reference]({{config.extra.arcana.ca_wagmi_sdk_ref_url}}) for details.

## 3. Unified Balance

The `useBalanceModal ` hook displays the unified balance plug and play widget.

{% include "./code-snippets/ca_wagmi_use_balance_modal.md" %}

## 4. CA Transactions

Import `useSendTransaction` and `useWriteContract` hooks from the
{{config.extra.arcana.ca_wagmi_sdk_pkg_name}}, **not from the wagmi SDK**, to
enable chain abstracted transactions.

### `useSendTransaction`

{% include "./code-snippets/ca_wagmi_sendTransaction.md" %}

### `useWriteContract`

{% include "./code-snippets/ca_wagmi_writeContract.md" %}

## 5. Advanced

The SDK also provides chain abstraction hooks to:

* Get unified balance for a specific token
* View user intents
* Issue chain abstracted `bridge` and `transfer` functions 

[[ca-integrate-wagmi#arcana-hooks| Learn more...]]

{% include "./text-snippets/quick-start-deploy-ca.md" %}

{% include "./text-snippets/quick-start-int-ca-wagmi-sdk.md" %}

<figure markdown="span">
  <img class="width_85pc an-screenshots-noeffects width_50pc" alt="With CA" src="{{config.extra.arcana.img_dir}}/ca-sdk-example-bridge-transfer.{{config.extra.arcana.img_gif}}"/>
  <figcaption>`useCAFn`: Chain Abstracted Bridge and Transfer </figcaption>
</figure>

## See Also

{% include "./text-snippets/ca_wagmi_sdk_quicklinks.md" %}

{% include "./text-snippets/demo/ca_wagmi_sdk_demo.md" %}
