---
alias: add-switch-network
title: 'How to Add or Switch Network in the Arcana wallet programmatically'
description: 'See how Web3 app developers can programmatically add/switch network in the Arcana wallet. App users can access the configured blockchain networks via UI.'
arcana:
  root_rel_path: ../..
---

# Add/Switch Networks

In this guide, you will learn how to programmatically add a blockchain network or switch to a different network when using the {{config.extra.arcana.wallet_name}} in the context of a Web3 app. Developers can add any [[state-of-the-arcana-auth#supported-blockchains|supported blockchain networks]] that are not already part of the default networks displayed in the {{config.extra.arcana.wallet_name}} UI. 

When a network addition or a switch is initiated programmatically, a request for user approval pops up in the wallet UI, requesting the user for a network switch.

## Prerequisites

* Use the [{{config.extra.arcana.dashboard_name}}]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md) to [[configure-auth|register the app]] and obtain a unique {{config.extra.arcana.app_address}} required for integrating the app with the {{config.extra.arcana.sdk_name}}.

* Follow the instructions to [[index-configure-auth|configure authentication providers]] before integrating the app with the {{config.extra.arcana.sdk_name}}.
  
* Use the appropriate integration method as per the app type and [[index-integrate-app|integrate the app]] with the {{config.extra.arcana.sdk_name}}.

* Add code in the integrated app to [[index-onboard-users|onboard users]]. The Web3 wallet operations can be invoked programmatically in an app only in the context of an authenticated user.

## Steps

Make sure you have addressed the prerequisites before adding code to invoke any Web3 wallet operations supported by the {{config.extra.arcana.wallet_name}}. After that, plug in the necessary code to set up requisite hooks for JSON/RPC standard Ethereum calls.

{% include "./code-snippets/auth_json_rpc_setup.md" %}

The following code snippets show how developers can programmatically add code in the app and allow authenticated users to add/switch blockchain network. Note that the developer can call these functions programmatically but the authenticated users must approve the blockchain transaction via the wallet UI request screen before the blockchain network update actually takes effect.

## Add Network

{% include "./code-snippets/auth_add_ntwk.md" %}

## Switch Network

{% include "./code-snippets/auth_switch_ntwk.md" %}

**That is all!**  :material-party-popper:

*The app is all set to programmatically add/switch networks using the {{config.extra.arcana.wallet_name}} .*

## What's Next?

After registering the app, configuring authentication providers, integrating the {{config.extra.arcana.sdk_name}} with the app and onboarding users, developers can further add code in the app to sign blockchain transactions, send and receive native, ERC20, or custom tokens, and other [[index-web3-wallet-ops|Web3 wallet operations]].

For a complete list of other JSON RPC calls supported by the {{config.extra.arcana.wallet_name}}, see [JSON-RPC Specifications](https://ethereum.github.io/execution-apis/api-documentation/). 

## See also

* [{{config.extra.arcana.wallet_name}} capabilities]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md)
* [[configure-wallet-visibility|Configure {{config.extra.arcana.wallet_name}} visibility]]
* [[send-transaction|Send transactions]]
* [[check-balance|Check the wallet account balance]]
* [[watch-assets|Watch crypto assets]]
* [[sign-transaction|Sign transactions]]
* {% include "./text-snippets/authsdkref_url.md" %}
