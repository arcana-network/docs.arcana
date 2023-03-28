---
slug: /walletmanagetokens
id: idwalletmanagetokens
title: Manage Tokens
sidebar_custom_props:
  cardIcon: 📤
arcana:
  root_rel_path: ..
---

# Manage Token Assets

In this guide, Web3 app users can learn how to manage token assets through the {{config.extra.arcana.wallet_name}} UI.

## Prerequisites

* To use the {{config.extra.arcana.wallet_name}}, users must log in to a Web3 app that is integrated with the {{config.extra.arcana.sdk_name}}. 

* Depending on the [type of blockchain signing experience]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/config_walletvisibility.md) set up by the app developer, the {{config.extra.arcana.wallet_name}} may appear only when a blockchain transaction is triggered, or it may be visible at all times once the user logs in.

## Token Operations

{{config.extra.arcana.wallet_name}} supports the following Web3 token operations for both native as well as custom ERC-20 tokens:

* Check the native token balance in the account
* Add custom tokens
* Send and receive native and custom tokens
* Monitor token asset transaction activities

## Check Balance

Click the <img src="/img/icons/an_wallet_token_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_token_icon_dark.png#only-dark" width="20"/> tab at the bottom left of the {{config.extra.arcana.wallet_name}} screen. It shows the account balance for the wallet account in the selected network. It also shows a list of token assets in the wallet account and their corresponding amounts.

Click **Refresh** to fetch the latest account balance. If you use the {{config.extra.arcana.wallet_name}} to send native or custom tokens, the account balance gets automatically updated once the transfer is processed.

<img class="an-screenshots-noeffects" src="/img/an_wallet_home.png" width="20%"/><br></br><br></br>

## Add Custom Tokens

Click the <img src="/img/icons/an_wallet_token_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_token_icon_dark.png#only-dark" width="20"/> tab to view the list of tokens associated with the wallet account.  

If you do not see your custom token already listed in the token asset list, click the <img src="/img/icons/an_wallet_addtoken_icon.png" width="50"/> icon to add your custom token.

You will see a custom token specification wallet screen. 

<img class="an-screenshots-noeffects" src="/img/an_wallet_add_custom_token.png" width="20%"/><br></br><br></br>

Add the **Token Contract Address**. Once you add the address, the {{config.extra.arcana.wallet_name}} validates whether it is an ERC-20 standard custom token. After the contract is verified, the wallet automatically fetches the **Token Symbol** and the **Token Decimal** values as configured in the custom contract.

Click **Save** to add the custom token. The newly added custom token will show up under the account balance section on the main wallet screen.

<img class="an-screenshots-noeffects" src="/img/an_wallet_custom_tokens.png" width="20%"/><br></br><br></br>

## Select Native/Custom Token

Before sending tokens, users can specify whether they intend to transfer native or custom tokens.  To select a custom token, it should already be [added to the {{config.extra.arcana.wallet_name}}](#add-custom-tokens).

Click the <img src="/img/icons/an_wallet_token_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_token_icon_dark.png#only-dark" width="20"/> tab to view native and custom tokens screen.

<img class="an-screenshots-noeffects" src="/img/an_wallet_choose_custom.png" width="20%"/><br></br><br></br>

Use the drop-down list by clicking on the arrow next to the native token symbol and choose one of the custom tokens that are already added to the {{config.extra.arcana.wallet_name}}. 
 
## Send Tokens

Click the <img src="/img/icons/an_wallet_token_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_token_icon_dark.png#only-dark" width="20"/> tab at the bottom left of the wallet screen to view the tokens associated with the wallet account.

<img class="an-screenshots-noeffects" src="/img/an_wallet_home.png" width="20%"/><br></br><br></br>

Click **Send** to initiate the send tokens workflow in the {{config.extra.arcana.wallet_name}} by bringing up the following screen:

<img class="an-screenshots-noeffects" src="/img/an_wallet_send_inputs.png" width="20%"/><br></br><br></br>

Choose the appropriate token that you wish to send from the dropdown list, enter the transfer amount, and requisite gas fees, and click **Proceed**. A preview screen shows the details of the send transaction. Click **Send** to confirm or click **Back** if you wish to change any transaction details. 

<img class="an-screenshots-noeffects" src="/img/an_wallet_send.png" width="20%"/><br></br><br></br>

## Receive Tokens

Click the <img src="/img/icons/an_wallet_token_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_token_icon_dark.png#only-dark" width="20"/> tab at the bottom left of the wallet to receive tokens from another wallet address. Click **Receive** and copy the QR code or the wallet address. Share it with the sender for receiving tokens in your account.  

<img class="an-screenshots-noeffects" src="/img/an_wallet_receive_qr.png" width="20%"/><br></br><br></br>

Click **Refresh** to see the updated account balance after the sender transaction is complete.

<img src="/img/an_wallet_receive_balance.png" width="200"/><br></br><br></br>

## Monitor Token Activity

Click the <img src="/img/icons/an_wallet_notification_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_notification_icon_dark.png#only-dark" width="20"/> tab on the bottom right of the {{config.extra.arcana.wallet_name}} screen to see wallet transaction activity and pending request notifications.

The wallet notification screen displays a list of different blockchain transaction activities that were initiated by the app or the user for the current dApp user login session: 

- Send transactions for native or custom tokens
- Contract Deployment

<img class="an-screenshots-noeffects" src="/img/an_wallet_combined_notify.png" width="20%"/><br></br><br></br>

You can view all activities in the list or filter them based on whether the blockchain transactions were initiated by the user or the app. Click on the filter icon and choose the desired option.

<img class="an-screenshots-noeffects" src="/img/an_wallet_combined_notify_filter_nav_options.png" width="45%"/><br></br><br></br>

To see details of a send transaction, click on the arrow to expand the view.

<img class="an-screenshots-noeffects" src="/img/an_wallet_combined_notification_details_send_token.png" width="20%" /><br></br><br></br>

!!! tip

      The app user must [add the custom tokens](#add-custom-tokens) manually to the {{config.extra.arcana.wallet_name}} UI before the activity related to tokens can be viewed in the **Activity** tab.

**That is all!**  :material-party-popper:

*You are all set to send and receive tokens using the {{config.extra.arcana.wallet_name}}.*

## What's Next?

You can use {{config.extra.arcana.wallet_name}} UI to sign blockchain transactions, send and receive native, ERC20, or custom tokens, and [more]({{page.meta.arcana.root_rel_path}}/user_guides/wallet_ui/index.md).

## See also

* [{{config.extra.arcana.wallet_name}} capabilities]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md)
* [Using Web3 wallet operations]({{page.meta.arcana.root_rel_path}}/user_guides/wallet_ui/index.md)
* [Managing NFTs]({{page.meta.arcana.root_rel_path}}/howto/wallet_manage_nft.md)