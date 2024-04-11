---
alias: web-gasless-integrate
title: 'Integrate Gasless SDK'
description: 'How to integrate gasless SDK with the app and enable gasless transactions for third-party wallets.'
arcana:
  root_rel_path: ..
  app_type: "'Gasless'"
  app_example_submodule: "`sample-gasless-metamask-only`"
---

# Integrate Gasless SDK

!!! an-caution "Only for Third-party wallets"

      The {{config.extra.arcana.gasless_sdk_name}} is meant for use only in case where an app requires to enable gasless transactions in third-party browser based wallets. To enable gasless transactions in the {{config.extra.arcana.wallet_name}}, you must [[gasless-quick-start|install and integrate with the {{config.extra.arcana.sdk_name}}]] and use its built-in gasless feature.

## Pre-requisites

* Make sure the app is [[register-app-gasless| registered]] and a unique {{config.extra.arcana.app_address}} assigned to it.

* Set up gas tanks on one or more [[web3-stack-chains#arcana-gasless-standalone-sdk|supported networks]] and deposit funds. 

* The [[web-gasless-install|{{config.extra.arcana.gasless_sdk_name}} is installed]].

## Integrate

{% include "./code-snippets/gasless_integrate_use.md" %}

## What's Next?

After integrating the {{config.extra.arcana.gasless_sdk_name}}, add code to allow authenticated users to [[web-gasless-transact|perform gasless transactions]] via the third-party wallets. 

## See also

{% include "./text-snippets/quick-start-see-also-gasless.md" %}