---
alias: arcana-wallet-user-guide
title: 'Arcana Wallet User Guide'
description: 'User guide for Arcana wallet UI displayed within a Web3 app context. Authenticated users can access Web3 wallet operations.'
arcana:
  root_rel_path: ..
---

# Basic Wallet Operations

This guide explains the Web3 operations of the {{config.extra.arcana.wallet_name}} and how users can access different functions through its UI. Developers looking to enable these operations programmatically in their apps can refer to the [[index-web3-wallet-ops| {{config.extra.arcana.wallet_name}} Developer Guides]].

## Prerequisites

* To use the {{config.extra.arcana.wallet_name}}, users must log in to a Web3 app that is integrated with the {{config.extra.arcana.sdk_name}}. 

* Depending on the [[configure-wallet-visibility|type of blockchain signing experience]] set up by the app developer, the {{config.extra.arcana.wallet_name}} may appear only when a blockchain transaction is triggered, or it may be visible at all times once the user logs in.

##  {{config.extra.arcana.wallet_name}} Features

Authenticated users can perform the following Web3 wallet operations through the wallet UI:

* Sign (approve, reject) blockchain transactions
* Add and configure network settings
* Switch networks
* Manage token assets (native and custom)
    - Check account balance
    - List token assets
    - Add custom tokens (ERC-20)
    - Send and receive tokens 
    - Buy cryptocurrency (native, ERC-20)
* Manage NFTs
    - List NFT assets
    - View NFT details
    - Send NFTs (ERC-721, ERC-1155)
    - Add NFTs
    - Modify (edit, delete) NFTs
* View user profile details
* Monitor blockchain transaction activity
* Export private key
<!--
* Switch between EoA/SCW accounts (Gasless)
-->
* Logout

When a user logs into the app, {{config.extra.arcana.wallet_name}} appears in a compact form within the app. The app developer decides whether the wallet is on the left or right side of the app's user interface, and this choice is set during app registration and configuration.

<img src="/img/an_wallet_min_light_vanilla.gif#only-dark" width="50%"/><img src="/img/an_wallet_min_dark_vanilla.gif#only-light" width="50%"/> 

Clicking on the wallet icon displays the maximized wallet UI.

<img class="an-screenshots-noeffects" src="/img/an_wallet_home.png" width="30%"/>

Users can access various Web3 wallet operations supported by the {{config.extra.arcana.wallet_name}} using the following tabs located at the bottom of the wallet:

* <img src="/img/icons/an_wallet_token_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_token_icon_dark.png#only-dark" width="20"/> Token Assets Tab 
* <img src="/img/icons/an_wallet_nft_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_nft_icon_dark.png#only-dark" width="20"/> NFT Assets Tab
* <img src="/img/icons/an_wallet_profile_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_profile_icon_dark.png#only-dark" width="20"/> User Profile Tab
* <img src="/img/icons/an_wallet_notification_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_notification_icon_dark.png#only-dark" width="20"/> Activity Notifications Tab

### Sign Transaction

A blockchain sign transaction can be triggered either by the app, programmatically, or in response to a user action in the {{config.extra.arcana.wallet_name}} UI. A blockchain transaction results in a notification as displayed in the figure below. Users can scroll down and see details of the request before selecting one of the options to **Reject** or **Approve** the transaction.

<img class="an-screenshots-noeffects" src="/img/an_wallet_personalsign.png" width="75%"/>

If the user does not take any action for the transaction notification but chooses to ignore it using the 'Do this later' option, in the {{config.extra.arcana.wallet_name}}, the wallet switches to the 'Token Assets' tab view. 

Pending transactions are highlighted in the minimized wallet state with a red dot. 

<img class="an-screenshots-noeffects" src="/img/an_wallet_pending_sign_anim.gif" width="35%"/>

Once the user takes action on the pending transaction notification, it disappears from the 'Activity' tab view. 

### Add/Select a Network

By default, the {{config.extra.arcana.wallet_name}} UI displays a pre-configured list of blockchain networks. Users can select a different network from the drop-down list or add newer networks that are [[state-of-the-arcana-auth#supported-blockchains|supported by the product]].

To add or select a network, click the dropdown next to the blockchain network icon on the top right:

<img src="/img/icons/wallet_add_network_icon.png" width="60"/>

You can either choose one of the available networks to switch or add a new one.

<img class="an-screenshots-noeffects" src="/img/an_wallet_add_network_button.png" width="35%"/>

* Click **Add Network** 
* Add the following details:
    * **Network Name**: Name of the network. For example, Shardeum
    * **RPC URL**: https://liberty10.shardeum.org
    * **Chain ID**: 8080
    * **Currency Symbol**: SHM
    * **Explorer URL (Optional)**: https://explorer.liberty10.shardeum.org/

Once you click **Save**, the newly added network is automatically selected as the current active chain in wallet UI. 

<img class="an-screenshots-noeffects" src="/img/wallet_added_network.gif" width="35%"/>

<WalletConfigWarningText/>

### Switch Network

To switch the existing network using the wallet UI, click on the dropdown next to the network icon on the top right of the wallet UI:

<img src="/img/icons/an_wallet_token_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_token_icon_dark.png#only-dark" width="20"/> 

You will see a list of pre-configured blockchain networks available in the current application's context. Simply click one of the available networks to switch networks.

<img class="an-screenshots-noeffects" src="/img/an_wallet_switch_ntwk.gif" width="35%"/>

### Fiat On-ramp

{{config.extra.arcana.wallet_name}} supports fiat on-ramping that allows wallet users to buy cryptocurrency (native and ERC20 tokens) easily from any of the supported providers:

{% include "./text-snippets/fiat_on_ramp_providers.md" %}

Users can purchase the specific token required for the app with either fiat or another cryptocurrency. Also, they can purchase the native cryptocurrency with fiat to pay for the transaction or the gas fees. After a successful purchase via a third-party fiat on-ramp provider, the purchased tokens or currency is automatically deposited in the {{config.extra.arcana.wallet_name}} address and displayed in the balance amount.

To buy cryptocurrency, click the <img src="/img/icons/an_wallet_token_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_token_icon_dark.png#only-dark" width="20"/>  and select the 'Tokens' tab. Choose a chain from the drop-down list of pre-configured blockchain networks. This choice will govern what cryptocurrencies and tokens available for purchase through the wallet UI, subject to local country-specific rules.

Click **Buy** to initiate the fiat on-ramp process for your {{config.extra.arcana.wallet_name}} account and the selected chain. 

<img class="an-screenshots-noeffects" src="/img/an_wallet_onramp_buy.png" width="35%"/>

You will see the list of available fiat on-ramp providers:

<img class="an-screenshots-noeffects" src="/img/an_wallet_onramp_providers.png" width="35%"/>

Pick up one of the providers and click **Proceed**. This will bring up the provider-specific user interface in a new browser tab. You can complete the process on the provider's website. A notification regarding buying transaction initiation will be displayed in the {{config.extra.arcana.wallet_name}}. The user can dismiss it and continue to use the wallet while the buying process is underway.

<img class="an-screenshots-noeffects" src="/img/an_wallet_onramp_provider_select.png" width="35%"/>

Each provider may ask the user to follow country-specific procedures for KYC and list available cryptocurrencies for the selected chain. Also, the basic minimum purchase amount for a country or cryptocurrency may vary across countries and providers.

{% include "./text-snippets/fiat_on_ramp_providers_ui_example.md" %}

{% include "./text-snippets/fiat_on_ramp_providers_ug.md" %}

{% include "./text-snippets/fiat_on_ramp_providers_coverage.md" %}

!!! caution "Current Limitations"

    1. Purchased token assets will not be automatically updated in the {{config.extra.arcana.wallet_name}} assets screen. Users will need to manually add custom tokens that are purchased via on-ramp providers as these providers do not provide the contract address of the purchased token.

    2. You will not see any activity listed for a successful purchase when you click on the notification tab of the {{config.extra.arcana.wallet_name}} UI. There is no uniform standard whereby on-ramp providers share this information or 'event' regarding purchase. We may add it in future releases.

### Manage Token Assets

Click the <img src="/img/icons/an_wallet_token_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_token_icon_dark.png#only-dark" width="20"/> 'Tokens' tab on the bottom left of the {{config.extra.arcana.wallet_name}} to bring up the token assets screen. It displays the following information:

* View, and copy the {{config.extra.arcana.wallet_name}} address
* View wallet address details on the Block Explorer
* Add/Select network
* Refresh the wallet UI
* View the total wallet balance in the native currency
* List native and custom tokens in the wallet
* Add new custom tokens
* Send and receive native and custom tokens
* View token asset activities - which native or custom tokens requests were sent, whether the status is confirmed or pending, etc.
<!---
* Switch between EoA/SCW accounts (Gasless)
-->

For more details, see [[use-wallet-ui-to-manage-tokens|how to view, select, send, receive tokens, add custom tokens using the {{config.extra.arcana.wallet_name}}]] UI.

### Manage NFT Assets

Click the 'NFT' tab on the bottom of the {{config.extra.arcana.wallet_name}} UI to view and manage NFTs associated with the wallet address on the selected blockchain network. The following NFT operations can be performed by the authenticated user:

**General Wallet Operations**

* View, and copy the {{config.extra.arcana.wallet_name}} address
* View wallet address details on the 'Block Explorer' associated with the selected network
* Refresh the wallet UI
* Add/Select network
<!---
* Switch between EoA/SCW accounts (Gasless)
-->

**NFT Operations**

{% include "./text-snippets/nft_ops.md" %}

<img class="an-screenshots-noeffects" src="/img/an_wallet_nft_asset_thumbnail.gif" width="35%"/>

For details, see [[use-wallet-to-manage-nfts|how Web3 app users can send NFTs, manage NFTs and monitor NFT transactions through the {{config.extra.arcana.wallet_name}}]].

### View User Profile Details

Click the <img src="/img/icons/an_wallet_profile_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_profile_icon_dark.png#only-dark" width="20"/> 'Profile' tab on the bottom of the {{config.extra.arcana.wallet_name}} to see the user profile details:

* User name
* Email ID used to log into the wallet
* Active Network
* Wallet Address
* Option to export the private key
* Logout button
* Minimize / Close button
<!---
* Active EoA/SCW account (Gasless)
-->

<img class="an-screenshots-noeffects" src="/img/an_wallet_profile.png" width="35%"/>

### Wallet Notifications

Click the <img src="/img/icons/an_wallet_notification_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_notification_icon_dark.png#only-dark" width="20"/> 'Activity' tab on the bottom right of the {{config.extra.arcana.wallet_name}} to view the wallet notifications screen.

The activity tab lists all transactions processed through the wallet for different digital assets such as native tokens, custom tokens, and NFTs. It also displays pending blockchain transactions, if any.

<img class="an-screenshots-noeffects" src="/img/an_wallet_combined_notify.png" width="35%"/>

<details markdown><summary markdown>Notification Example</summary><p><h4>Pending Contract Deployment Request</h4> When a contract deployment request notification shows up, the user can click on 'Do it later' option. The request will be listed as a pending request in the 'Activity' tab of the wallet. 

A red dot on the <img src="/img/icons/an_wallet_notification_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_notification_icon_dark.png#only-dark" width="20"/>'Activity' tab icon at the bottom right of the {{config.extra.arcana.wallet_name}} indicates a pending blockchain transaction. 

Click on the red dot to see details of the pending transaction and take appropriate action. 

<img class="an-screenshots-noeffects" src="/img/an_wallet_pending_contract.gif" width="35%" />
</p>
</details>

### Export Private Key

Click the <img src="/img/icons/an_wallet_profile_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_profile_icon_dark.png#only-dark" width="20"/> tab on the bottom left of the {{config.extra.arcana.wallet_name}} to see the user profile screen. It provides an option to export the user's private key. For details, see [[use-wallet-to-export-keys|how to export a user's private key]] guide.

<img class="an-screenshots-noeffects" src="/img/an_wallet_export_key.png" width="35%" />

### Minimized Wallet State

The {{config.extra.arcana.wallet_name}} is displayed as an embedded wallet within the context of the Web3 app that is integrated with The {{config.extra.arcana.sdk_name}}. 

Right after a user authenticates, the wallet is displayed in its minimized state.

<img class="an-screenshots-noeffects" src="/img/an_wallet_min_light.png#only-dark" width="15%"/><img class="an-screenshots-noeffects" src="/img/an_wallet_min_dark.png#only-light" width="15%"/>

On clicking, it expands to display the wallet in its maximized state. It can be minimized again by clicking the '∨' icon on the top in the wallet UI. 

<img class="an-screenshots-noeffects" src="/img/an_wallet_max_light.png#only-dark" width="35%"/><img class="an-screenshots-noeffects" src="/img/an_wallet_max_dark.png#only-light" width="35%"/>

### View Transaction Summary & Details

If a blockchain transaction is triggered via the app that requires the user's approval, the user will see a transaction notification. If the wallet was in minimized state at the time the request was generated, then the notification will show up with a summary of the transaction along with the buttons to approve or reject. 

<img class="an-screenshots-noeffects" src="/img/an_wallet_smtx_sign_msg.png" width="35%"/>

The user can click on the top right arrow icon in the transaction notification to view its details. 

<img class="an-screenshots-noeffects" src="/img/an_wallet_sign_msg.png" width="35%"/>

Here is an example of how an `eth_sendTransaction` triggers a transaction notification and approval request for the user. The send transaction notification summary is displayed:

<img class="an-screenshots-noeffects" src="/img/an_wallet_smtx_send_tx.png" width="35%"/>

In the case of the send transaction request or sign transaction request, the notification details allow the user to edit the gas fees before approving the request. 

<img class="an-screenshots-noeffects" src="/img/an_wallet_send_tx.png" width="35%"/>

For other transactions that do not involve gas fees such as personal sign or signature requests, the notification details  simply shows the transaction details for a review by the user before taking an action to approve or reject.

Here is an example of a signature request notification summary:

<img class="an-screenshots-noeffects" src="/img/an_wallet_smtx_req_sign.png" width="35%"/>

On clicking the topmost arrow icon, the user can see the signature request transaction notification details view:

<img class="an-screenshots-noeffects" src="/img/an_wallet_req_sign.png" width="35%"/>

### Logout

Click the <img src="/img/icons/an_wallet_profile_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_profile_icon_dark.png#only-dark" width="20"/> tab at the bottom of the {{config.extra.arcana.wallet_name}} UI to bring up the user profile tab view. Click **Logout** in the user profile tab view to log out.

<img class="an-screenshots-noeffects" src="/img/an_wallet_profile.png" width="35%"/>

**That is all!**  :material-party-popper:

*You are now well-versed with the {{config.extra.arcana.wallet_name}} UI and how to perform blockchain transactions using the same.*

## What's Next?

Besides the basic Web3 wallet operations, the authenticated users can use the {{config.extra.arcana.wallet_name}} to view and [[use-wallet-to-export-keys|export their private keys]] and [[index-wallet-user-guide|manage crypto assets such as tokens and NFTs]]. 

## See also

* [{{config.extra.arcana.wallet_name}} capabilities]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md)
* [[configure-wallet-visibility|Configure the {{config.extra.arcana.wallet_name}}]]
