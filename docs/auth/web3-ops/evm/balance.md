---
alias: check-balance
title: 'Check Wallet Balance'
description: 'Step-by-step instructions on how to check Arcana wallet balance programmatically in an app that is integrated with the Arcana Auth SDK.'
arcana:
  root_rel_path: ../../..
---

# Check Wallet Balance

In this guide, you will learn how Web3 apps that integrate with the {{config.extra.arcana.sdk_name}} can use the standard Ethereum JSON RPC calls supported by the {{config.extra.arcana.wallet_name}} and programmatically allow authenticated users to check the wallet account balance.

## Prerequisites

* Use the [{{config.extra.arcana.dashboard_name}}]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md) to [[register-app-auth|register the app]] and obtain a unique {{config.extra.arcana.app_address}} required for integrating the app with the {{config.extra.arcana.sdk_name}}.

* Follow the instructions to [[index-configure-auth|configure authentication providers]] before integrating the app with the {{config.extra.arcana.sdk_name}}.
  
* Use the appropriate integration method as per the app type and [[index-integrate|integrate the app]] with the {{config.extra.arcana.sdk_name}}.

* Add code in the integrated app to [[index-onboard-users|onboard users]]. The Web3 wallet operations can be invoked programmatically in an app only in the context of an authenticated user.

## Steps

Make sure you have addressed the prerequisites before adding code to invoke any Web3 wallet operations supported by the {{config.extra.arcana.wallet_name}}. After that, plug in the necessary code to set up requisite hooks for JSON/RPC standard Ethereum calls.

{% include "./code-snippets/auth_json_rpc_setup.md" %}

To check the account balance for the authenticated user account, first add code to get the wallet account address and then get the account balance for the same wallet address using the JSON RPC calls.

### Step1: Get Account

{% include "./code-snippets/auth_get_account.md" %}

### Step2: Get Account Balance

{% include "./code-snippets/auth_get_balance.md" %}

**That is all!**  :material-party-popper:

*The app is all set to get an authenticated user's wallet account balance programmatically.*

## What's Next?

After registering the app, configuring authentication providers, integrating the {{config.extra.arcana.sdk_name}} with the app and onboarding users, developers can further add code in the app to sign blockchain transactions, send and receive native, ERC20, or custom tokens, and other [[index-web3-wallet-ops|Web3 wallet operations]].

For a complete list of other JSON RPC calls supported by the {{config.extra.arcana.wallet_name}}, see [JSON-RPC Specifications](https://ethereum.github.io/execution-apis/api-documentation/).

## See also

* [{{config.extra.arcana.wallet_name}} capabilities]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md)
* [[configure-wallet-visibility|Configure {{config.extra.arcana.wallet_name}} visibility]]
* [[send-transaction|Send transactions]]
* [[watch-assets|Watch crypto assets]]
* [[sign-transaction|Sign transactions]]
* [[add-switch-network|Add/Switch Network]]
* {% include "./text-snippets/authsdkref_url.md" %}