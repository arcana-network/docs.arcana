---
alias: web-gasless-transact
title: 'Gasless Transactions'
description: 'How to install gasless SDK in order to integrate an app with it and enable gasless transactions for third-party wallets.'
arcana:
  root_rel_path: ..
  app_type: "'Gasless'"
  app_example_submodule: "`sample-gasless-metamask-only`"
---

# Gasless Transactions

!!! an-caution "Only for Third-party wallets"

      The {{config.extra.arcana.gasless_sdk_name}} is meant for use only in case where an app requires to enable gasless transactions in third-party browser based wallets. To enable gasless transactions in the {{config.extra.arcana.wallet_name}}, you must [[gasless-quick-start|install and integrate with the {{config.extra.arcana.sdk_name}}]] and use its built-in gasless feature.

## Pre-requisites

* Make sure the app is [[register-app-gasless| registered]] and a unique {{config.extra.arcana.app_address}} assigned to it.

* Set up gas tanks on one or more [[web3-stack-chains#arcana-gasless-standalone-sdk|supported networks]] and deposit funds. 

* The [[web-gasless-install|{{config.extra.arcana.gasless_sdk_name}} is installed]] and your [[web-gasless-integrate|app is integrated with it]].

* Make sure you have added custom code to onboard the users. Only authenticated users should be allowed to perform gasless transactions.

## Add Gasless Transactions

{% include "./code-snippets/gasless_integrate_doTx.md" %}

## What's Next?

After adding code for gasless transactions with the help of the {{config.extra.arcana.gasless_sdk_name}}, you are ready to deploy the app on the Testnet. [[index-deploy|Learn more...]] 

## See also

{% include "./text-snippets/quick-start-see-also-gasless.md" %}