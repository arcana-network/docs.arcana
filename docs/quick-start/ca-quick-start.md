---
alias: ca-quick-start
title: "Web Apps"
description: "Get Started quickly with Arcana Chain Abstraction. Enable 
unified balance and chain abstracted transactions for app users."
arcana:
  root_rel_path: ..
  app_type: "'Web'"
  app_example_submodule: "'`ca-sdk-example`'"
---

Integrate with the [[concept-casdk|{{config.extra.arcana.ca_sdk_name}}]].
Enable [[concept-unified-balance|unified-balance]] in {{page.meta.arcana.app_type}}
apps. Let the app users spend anywhere with chain abstracted transactions.

## 1. Install

{% include "./code-snippets/casdk_install.md" %}

## 2. Integrate

{% include "./text-snippets/quick-start-int-casdk.md" %}

## 3. Unified Balance

Get chain abstracted unified balance in the user's EOA.

{% include "./code-snippets/ca_get_ub.md" %}

## 4. CA Transaction

Web3 apps use the standard EIP-1193 provider to issue `request` 
call for transactions. To chain abstract these transactions, 
use `getEVMProviderWithCA`. It returns a CA enabled provider.

Replace the standard provider with the CA enabled one. This
enables chains abstraction for `eth_sendTransaction` operations via
`request` call.

{% include "./code-snippets/ca_get_req_prov.md" %}

[[ca-integrate-web#ca-transactions|Learn more...]]

{% include "./text-snippets/quick-start-deploy-ca.md" %}

## See Also

{% include "./text-snippets/ca_sdk_quicklinks.md" %}

{% include "./text-snippets/demo/ca_sdk_demo.md" %}
