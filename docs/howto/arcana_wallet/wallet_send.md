---
slug: /walletsendtokens
id: idwalletsendtokens
title: Send Tokens
sidebar_custom_props:
  cardIcon: 📤
arcana:
  root_rel_path: ../..
---

# Send Tokens

[Arcana wallet]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md) is a non-custodial, embedded Web3 wallet. Applications that [integrates]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) with the [Arcana Auth SDK]({{page.meta.arcana.root_rel_path}}/concepts/authsdk.md) can enable authenticated users to instantly access the Arcana wallet in the application's context.

In this guide, you will learn how applications can use the JSON RPC calls (`eth_sendTransaction`) supported by the Arcana wallet to allow users to send native or custom tokens.

!!! tip

      To receive tokens using the Arcana wallet, the dApp user can choose to copy their wallet account address or get a QR code for their account.  The account address or QR code can be shared with the sender in order to receive tokens. See [Arcana wallet User Guide]({{page.meta.arcana.root_rel_path}}/howto/wallet_manage_tokens.md#manage-token-assets) for details.

## Prerequisites

Register and configure your application using the Arcana Developer Dashboard. Next, install the `@arcana/auth` package. Integrate the Auth SDK with your dApp. For details, see [Arcana Auth Quick Start Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_qs.md).

{% include "./code-snippets/import_auth.md" %}
{% include "./code-snippets/new_auth.md" %}
{% include "./code-snippets/init_auth.md" %}

Make sure you have already initialized the wallet before invoking any JSON RPC calls for sending tokens using the Arcana wallet.

{% include "./code-snippets/auth_json_rpc_setup.md" %}

## Send Transactions

Once the application is registered, configured and integrated with the Auth SDK, you can wire the user action in your dApp for sending tokens by implementing a 'sendTransaction' function as shown in the following code sample:

{% include "./code-snippets/auth_sendtransaction.md" %}

The Arcana wallet springs into action when a user initiates a 'send token' transaction through the dApp. The following figure shows the Arcana wallet screen that shows up allowing users to input the token amount, gas, and recipient details for sending tokens.

<img src="/img/an_wallet_send_inputs.png" width="300"/>

The wallet displays a 'Proceed' button to allow for user confirmation before the send token transaction is executed on the configured blockchain network. 

<img src="/img/an_wallet_send.png" width="300"/>

## Receive Tokens

To receive tokens, the dApp does not need to call any JSON RPC calls.

Visit the 'home' screen of the Arcana wallet by clicking on the 'home' icon on the bottom left. Use the 'Receive' button to view the QR code or copy the receiver's account address.  

<img src="/img/an_wallet_receive.png" width="600"/>

Share this QR code or the account address with the sender. The sender can use the Arcana wallet or any other third-party Web3 wallet to send tokens.  The dApp user can view the tokens once they are received in the wallet home screen. Use the 'Refresh Balance' button to check the balance. For more details on wallet usage, see [Arcana wallet User Guide]({{page.meta.arcana.root_rel_path}}/user_guides/wallet_ui/index.md).

**That is all!**  :material-party-popper:
*You are all set to send and receive tokens using the Arcana wallet.*

## What's Next?

For a complete list of other JSON RPC calls supported by Arcana wallet, [JSON-RPC Specifications](https://ethereum.github.io/execution-apis/api-documentation/).

## See also

* [Arcana wallet capabilities]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md)
* [Configure Arcana wallet Visibility]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/config_wallet_modes.md)
* [Sign transactions]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/wallet_sign.md)
* [Watch Token Assets]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/wallet_watchasset.md)
* [Check account balance]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/wallet_balance.md)
* {% include "./text-snippets/authsdkref_url.md" %}
