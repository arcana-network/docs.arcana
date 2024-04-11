---
alias: send-transaction
title: 'Send Tokens'
description: 'Step-by-step instructions on how to send tokens (custom and native) using the Arcana wallet programmatically in an app that is integrated with the Arcana Auth SDK.'
arcana:
  root_rel_path: ../../..
---

# Send Tokens

In this guide, you will learn how Web3 apps that integrate with the {{config.extra.arcana.sdk_name}} can use the standard Ethereum JSON RPC calls supported by the {{config.extra.arcana.wallet_name}} and programmatically allow authenticated users to send native or custom tokens to another wallet address.

!!! an-tip "Receiving tokens"

      To receive tokens using the {{config.extra.arcana.wallet_name}}, the app user can choose to use either the wallet account address or the QR code for an account.  The account address or QR code must be shared with the sender in order to receive tokens. See [[use-wallet-ui-to-manage-tokens#manage-token-assets|how to manage token assets in the {{config.extra.arcana.sdk_name}} User Guide]] for details.

## Prerequisites

* Use the [{{config.extra.arcana.dashboard_name}}]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md) to [[register-app-auth|register the app]] and obtain a unique {{config.extra.arcana.app_address}} required for integrating the app with the {{config.extra.arcana.sdk_name}}.

* Follow the instructions to [[index-configure-auth|configure authentication providers]] before integrating the app with the {{config.extra.arcana.sdk_name}}.
  
* Use the appropriate integration method as per the app type and [[index-integrate|integrate the app]] with the {{config.extra.arcana.sdk_name}}.

* Add code in the integrated app to [[index-onboard-users|onboard users]]. The Web3 wallet operations can be invoked programmatically in an app only in the context of an authenticated user.

## Steps

Make sure you have addressed the prerequisites before adding code to invoke any Web3 wallet operations supported by the {{config.extra.arcana.wallet_name}}. After that, plug in the necessary code to set up requisite hooks for JSON/RPC standard Ethereum calls.

{% include "./code-snippets/auth_json_rpc_setup.md" %}

## Send Transactions

Once the app is registered, configured, and integrated with the {{config.extra.arcana.sdk_name}}, the developers can add the code to enable sending tokens in the context of an authenticated app user. Use the 'sendTransaction' function as shown in the following code sample:

{% include "./code-snippets/auth_sendtransaction.md" %}

The {{config.extra.arcana.wallet_name}} displays a transaction notification for user approval in response to the 'send token' transaction triggered by the app programmatically. The user must approve the send token transaction before the tokens can be successfully sent to the recipient.

<img src="/img/an_wallet_send_tx.png" width="300"/>

The wallet displays a 'Preview' button to allow for user confirmation before the send token transaction is executed on the configured blockchain network. 

<img src="/img/an_wallet_send.png" width="300"/>

## Receive Tokens

To receive tokens, the app does not need to call any JSON RPC calls. Simply share the user's wallet address or QR code with the sender.

**That is all!**  :material-party-popper:
*The app is all set to programmatically send tokens using the {{config.extra.arcana.wallet_name}}.*

## What's Next?

After registering the app, configuring authentication providers, integrating the {{config.extra.arcana.sdk_name}} with the app and onboarding users, developers can further add code in the app to sign blockchain transactions, send and receive native, ERC20, or custom tokens, and other [[index-web3-wallet-ops|Web3 wallet operations]].

For a complete list of other JSON RPC calls supported by the {{config.extra.arcana.wallet_name}}, see [JSON-RPC Specifications](https://ethereum.github.io/execution-apis/api-documentation/).

## See also

* [{{config.extra.arcana.wallet_name}} capabilities]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md)
* [[configure-wallet-visibility|Configure {{config.extra.arcana.wallet_name}} visibility]]
* [[sign-transaction|Sign transactions]]
* [[check-balance|Check the wallet account balance]]
* [[watch-assets|Watch crypto assets]]
* {% include "./text-snippets/authsdkref_url.md" %}
