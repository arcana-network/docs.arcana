---
alias: arcana-wallet-user-guide
title: 'Arcana Wallet User Guide'
description: 'User guide for Arcana wallet UI displayed within a Web3 app context. Authenticated users can access Web3 wallet operations.'
arcana:
  root_rel_path: ..
---

# Basic Wallet Operations

This guide explains the Web3 operations of the {{config.extra.arcana.wallet_name}} and how users can access different functions through its UI. Developers looking to enable these operations programmatically in their apps can refer to the [[index-arcana-wallet| {{config.extra.arcana.wallet_name}} Developers Guide]].

??? info "{{config.extra.arcana.wallet_name}} Developer Guide"

      To enable the {{config.extra.arcana.wallet_name}} in the context of a Web3 app, developers must first [[configure-auth|register the app]] and [[index-config-social-providers|configure social providers]] via the {{config.extra.arcana.dashboard_name}} to authenticate users. 
      
      Next, follow the [[index-integrate-app|instructions to integrate the app]] and then add code to [[index-onboard-users|onboard users]]. The authenticated users can instantly access the  {{config.extra.arcana.wallet_name}} in the context of the app. Developers can add code to bring up the wallet UI in the context of the authenticated users, initiated Web3 wallet operations, and enable authenticated users to sign blockchain transactions.

      For more details, see [[auth-quick-start|{{config.extra.arcana.product_name}} Quick Start Guide]] and the [[index-arcana-wallet|{{config.extra.arcana.wallet_name}} Developers Guide]].

## Prerequisites

* To use the {{config.extra.arcana.wallet_name}}, users must log in to a Web3 app that is integrated with the {{config.extra.arcana.sdk_name}}. 

* Depending on the [[configure-wallet-visibility|type of blockchain signing experience]] set up by the app developer, the {{config.extra.arcana.wallet_name}} may appear only when a blockchain transaction is triggered, or it may be visible at all times once the user logs in.

##  {{config.extra.arcana.wallet_name}} Features

Any Web3 app that [[index-integrate-app|integrates with the {{config.extra.arcana.sdk_name}}]] can enable authenticated users to sign blockchain transactions using the {{config.extra.arcana.wallet_name}} UI. 

The {{config.extra.arcana.wallet_name}} UI allows an authenticated user to perform the following Web3 wallet operations:

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
* Monitor blockchain transaction-related activity
* Export private key
* Logout

When a user logs in to the app, {{config.extra.arcana.wallet_name}} is displayed in its minimized form in the app's context. 

<img src="/img/an_wallet_min_light.png#only-dark" width="8%"/><img src="/img/an_wallet_min_dark.png#only-light" width="8%"/> 

Clicking on it displays the maximized wallet UI on the left or the right side of the app's UI window as configured by the app developer.

<img class="an-screenshots-noeffects" src="/img/an_wallet_home.png" width="20%"/>

Users can access various Web3 wallet operations supported by the {{config.extra.arcana.wallet_name}} using the following tabs located at the bottom of the wallet:

* <img src="/img/icons/an_wallet_token_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_token_icon_dark.png#only-dark" width="20"/> Token Assets Tab 
* <img src="/img/icons/an_wallet_nft_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_nft_icon_dark.png#only-dark" width="20"/> NFT Assets Tab
* <img src="/img/icons/an_wallet_profile_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_profile_icon_dark.png#only-dark" width="20"/> User Profile Tab
* <img src="/img/icons/an_wallet_notification_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_notification_icon_dark.png#only-dark" width="20"/> Notifications Tab

### Sign Transaction

A blockchain sign transaction can be triggered either by the app, programmatically, or in response to a user action in the {{config.extra.arcana.wallet_name}} UI. A blockchain transaction results in a notification as displayed in the figure below. Users can scroll down and see details of the request before selecting one of the options to **Reject** or **Approve** the transaction.

<img class="an-screenshots-noeffects" src="/img/an_wallet_personalsign.png" width="35%"/>

If the user does not take any action for the transaction notification but chooses to ignore it using the<img src="/img/icons/wallet_close_icon.png" width="15"/> icon on the top right of the {{config.extra.arcana.wallet_name}}, the wallet switches from maximized to the minimized state but continues to show in the app screen. If there are any pending transactions they are highlighted in the minimized state with a red dot. 

Once the user takes action on the pending transaction notification, it disappears and the wallet displays **No Pending Requests!** message.

<img class="an-screenshots-noeffects" src="/img/an_wallet_nopending.png" width="20%"/>

### Add/Select a Network

The {{config.extra.arcana.wallet_name}} allows authenticated app users to sign blockchain transactions on various [[state-of-the-arcana-auth#supported-blockchains|supported blockchain networks]]. By default, a few of the supported networks are automatically displayed on the wallet home screen. Users can select a different network from the drop-down list. Additional networks can be added to the default list as long as they are supported by {{config.extra.arcana.product_name}}. 

To add a network:

* Click<img src="/img/icons/wallet_add_network_icon.png" width="60"/> icon. 
* Add the following details:
  * **Network Name**: Name of the network. For example, Shardeum
  * **RPC URL**: https://liberty10.shardeum.org
  * **Chain ID**: 8080
  * **Currency Symbol**: SHM
  * **Explorer URL (Optional)**: https://explorer.liberty10.shardeum.org/

Once you click **Save**, the newly added network is automatically selected as the current active chain in the updated network list. 

<img class="an-screenshots-noeffects" src="/img/wallet_added_network.png" width="50%"/>

<WalletConfigWarningText/>

### Switch Network

Click the <img src="/img/icons/an_wallet_token_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_token_icon_dark.png#only-dark" width="20"/> tab to bring up the wallet token asset screen. Use the network drop-down list to switch to a different network.

<img class="an-screenshots-noeffects" src="/img/an_wallet_switch_ntwk.png" width="20%"/>

### Fiat On-ramp

{{config.extra.arcana.wallet_name}} supports fiat on-ramping that allows wallet users to buy cryptocurrency (native and ERC20 tokens) easily from any of the supported providers:

{% include "./text-snippets/fiat_on_ramp_providers.md" %}

Users can purchase the specific token required for the app with either fiat or another cryptocurrency. Also, they can purchase the native cryptocurrency with fiat to pay for the transaction or gas fees. After a successful purchase via a third-party fiat on-ramp provider, the purchased tokens or currency is automatically deposited in the {{config.extra.arcana.wallet_name}} address and displayed in the balance.

To buy cryptocurrency, click the <img src="/img/icons/an_wallet_token_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_token_icon_dark.png#only-dark" width="20"/>  and refer to the token assets tab. Select a chain from the drop-down list. This choice will govern what cryptocurrencies and tokens are available to purchase subject to local country-specific rules.

Click **Buy** to initiate the fiat on-ramp process for your {{config.extra.arcana.wallet_name}}. 

<img class="an-screenshots-noeffects" src="/img/an_wallet_onramp_buy.png" width="20%"/>

You will see the list of available fiat on-ramp providers:

<img class="an-screenshots-noeffects" src="/img/an_wallet_onramp_providers.png" width="20%"/>

Pick up one of the providers and click **Proceed**. This will bring up the provider-specific user interface. Each provider may ask the user to follow country-specific procedures for KYC and list available cryptocurrencies for the selected chain. Also, the basic minimum purchase amount for a country or cryptocurrency may vary across countries and providers.

For example, Transak requires each user to complete KYC by submitting country-specific identification documents. Once the verification is complete, the user can purchase the cryptocurrency with Transak.  This verification is a one-time thing and subsequent purchases will not require this additional step. The figure below shows an example of a purchase transaction using Transak.

<img class="an-screenshots-noeffects" src="/img/an_wallet_fiat_transak.png" width="50%"/>

Similarly, if the fiat on-ramp provider Ramp Network is chosen, you will see the Ramp UI displaying all the available currencies for the selected chain in the {{config.extra.arcana.wallet_name}}. 

<img class="an-screenshots-noeffects" src="/img/an_wallet_fiat_rampnetwork.png" width="50%"/>

For the first purchase, you may also be required to do KYC formalities.

<img class="an-screenshots-noeffects" src="/img/an_wallet_fiat_kyc_rampnetwork.png" width="50%"/>

If you are new to Transak or Ramp, see [Transak User Guide](https://support.transak.com/en/articles/7846055-buying-cryptocurrency-for-beginners) and [Ramp User Guide](https://support.ramp.network/en/articles/18887-how-to-use-ramp) for step-by-step details on buying crypto assets.

For details on what assets and cryptocurrency, countries are supported by these providers refer to [Transak coverage](https://docs.transak.com/docs/fiat-currency-country-payment-method-coverage-plus-fees-and-limits) and [Ramp Network coverage](https://support.ramp.network/en/articles/432-what-cryptoassets-does-ramp-support). 

!!! caution "Current Limitations"

    1. Purchased token assets will not be automatically updated in the {{config.extra.arcana.wallet_name}} assets screen. Users will need to manually add custom tokens that are purchased via on-ramp providers as these providers do not provide the contract address of the purchased token.

    2. You will not see any activity listed for a successful purchase when you click on the notification tab of the {{config.extra.arcana.wallet_name}} UI. There is no uniform standard whereby on-ramp providers share this information or 'event' regarding purchase. We may add it in future releases.

### Manage Token Assets

Click the <img src="/img/icons/an_wallet_token_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_token_icon_dark.png#only-dark" width="20"/> tab on the bottom left of the {{config.extra.arcana.wallet_name}} to bring up the token assets screen. It displays the following information:

* View, and copy the {{config.extra.arcana.wallet_name}} address
* View wallet address details on the Block Explorer
* Add/Select network
* Refresh the wallet UI
* View the total wallet balance in the native currency
* List native and custom tokens in the wallet
* Add new custom tokens
* Send and receive native and custom tokens
* View token asset activities - which native or custom tokens requests were sent, whether the status is confirmed or pending, etc.

<img class="an-screenshots-noeffects" src="/img/an_wallet_home.png" width="20%"/>

For more details, see [[use-wallet-ui-to-manage-tokens|how to view, select, send, receive tokens, add custom tokens using the {{config.extra.arcana.wallet_name}}]] UI.

### Manage NFT Assets

Click the <img src="/img/icons/an_wallet_nft_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_nft_icon_dark.png#only-dark" width="20"/> tab on the bottom of the {{config.extra.arcana.wallet_name}} to bring up the NFT assets tab view and manage NFTs associated with the wallet address. The following NFT operations can be performed by the authenticated Web3 app user through the  NFT Assets tab:

**General Wallet Operations**

* View, and copy the {{config.extra.arcana.wallet_name}} address
* View wallet address details on the 'Block Explorer' associated with the selected network
* Refresh the wallet UI
* Add/Select network

**NFT Operations**

{% include "./text-snippets/nft_ops.md" %}

<img class="an-screenshots-noeffects" src="/img/an_wallet_nft_asset_thumbnail.gif" width="20%"/>

For details, see [[use-wallet-to-manage-nfts|how Web3 app users can send NFTs, manage NFTs and monitor NFT transactions through the {{config.extra.arcana.wallet_name}}]].

### View User Profile Details

Click the <img src="/img/icons/an_wallet_profile_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_profile_icon_dark.png#only-dark" width="20"/> tab on the bottom of the {{config.extra.arcana.wallet_name}} to see the user profile details:

* User name 
* Email ID used to log into the wallet
* Network
* Wallet Address
* Option to export the private key
* Logout button
* Minimize / Close button

<img class="an-screenshots-noeffects" src="/img/an_wallet_profile.png" width="20%"/>

### Wallet Notifications

Click the <img src="/img/icons/an_wallet_notification_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_notification_icon_dark.png#only-dark" width="20"/> tab on the bottom right of the {{config.extra.arcana.wallet_name}} to view the notifications screen.

The notifications tab of the {{config.extra.arcana.wallet_name}} lists all transactions processed using the wallet for different digital assets such as native tokens, custom tokens, and NFTs. It also displays pending blockchain transaction approval requests, if any. 

<img class="an-screenshots-noeffects" src="/img/an_wallet_combined_notify.png" width="20%"/>

You can view all activities in the list or filter them based on whether the blockchain transactions were initiated by the user or the app. Click on the filter icon and choose the desired option.

<img class="an-screenshots-noeffects" src="/img/an_wallet_combined_notify_filter_nav_options.png" width="40%"/>

If you see a red dot on the <img src="/img/icons/an_wallet_notification_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_notification_icon_dark.png#only-dark" width="20"/>icon at the bottom left of the {{config.extra.arcana.wallet_name}}, it indicates a pending blockchain transaction that a user needs to review and act upon. 

Click on the red dot to see details of the pending transaction and take appropriate action. The figure below shows a pending contract deployment transaction in the wallet notification screen:

<img class="an-screenshots-noeffects" src="/img/an_wallet_combined_notification_details_contract.png" width="20%" />

Once all pending transactions are processed, you will not see the red dot. The {{config.extra.arcana.wallet_name}} shows a **No Pending Requests!** message on the notification screen, once the user acts upon any pending requests.  

<img class="an-screenshots-noeffects" src="/img/an_wallet_nopending.png" alt="No pending request" width="20%" />>

<details markdown><summary markdown>Notification Example</summary><p><h4>Pending Personal Sign</h4>
  Once the user is logged in using one of the available operations, the application can request the user to sign a personal signature request and authorize blockchain connectivity for the user before issuing any other blockchain transaction. Such pending user requests are highlighted when the wallet is minimized so that the user is notified of a pending request.

  ![dApp wallet integration example](/img/an_wallet_min_demo_app.png){.an-screenshots-noeffects}

  If the wallet is displayed in the minimized state, users can click on it to maximize the wallet to view, and approve the personal sign request as displayed in the figure below:

  ![Demo App PersonalSign](/img/an_wallet_personalsign.png){.an-screenshots-noeffects}

  </p>
</details>

### Export Private Key

Click the <img src="/img/icons/an_wallet_profile_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_profile_icon_dark.png#only-dark" width="20"/> tab on the bottom left of the {{config.extra.arcana.wallet_name}} to see the user profile screen. It provides an option to export the user's private key. For details, see [[use-wallet-to-export-keys|how to export a user's private key]] guide.

### Minimized Wallet State

The {{config.extra.arcana.wallet_name}} is displayed as an embedded wallet within the context of the Web3 app that is integrated with The {{config.extra.arcana.sdk_name}}. 

Right after a user authenticates, the wallet is displayed in its minimized state. 

<img class="an-screenshots-noeffects" src="/img/an_wallet_min_light.png#only-dark" width="7%"/><img class="an-screenshots-noeffects" src="/img/an_wallet_min_dark.png#only-light" width="7%"/>

On clicking, it expands to display the wallet in its maximized state. It can be minimized again by clicking the '∨' icon on the top right corner. 

<img class="an-screenshots-noeffects" src="/img/an_wallet_max_light.png#only-dark" width="20%"/><img class="an-screenshots-noeffects" src="/img/an_wallet_max_dark.png#only-light" width="20%"/>

In the minimized state, the wallet displays a red dot with a number indicating pending transactions waiting for the user's approval,

<img class="an-screenshots-noeffects" src="/img/an_wallet_min_light.gif#only-dark" width="7%"/><img class="an-screenshots-noeffects" src="/img/an_wallet_min_dark.gif#only-light" width="7%"/>

### View Transaction Summary & Details

If a blockchain transaction is triggered via the app that requires the user's approval, the user will see a transaction notification. If the wallet was in minimized state at the time the request was generated, then the notification will show up with a summary of the transaction along with the buttons to approve or reject. 

<img class="an-screenshots-noeffects" src="/img/an_wallet_smtx_sign_msg.png" width="20%"/>

The user can click on the top right arrow icon in the transaction notification to view its details. 

<img class="an-screenshots-noeffects" src="/img/an_wallet_sign_msg.png" width="20%"/>

Here is an example of how an `eth_sendTransaction` triggers a transaction notification and approval request for the user. The send transaction notification summary is displayed:

<img class="an-screenshots-noeffects" src="/img/an_wallet_smtx_send_tx.png" width="20%"/>

In the case of the send transaction request or sign transaction request, the notification details allows the user to edit the gas fees before approving the request. 

<img class="an-screenshots-noeffects" src="/img/an_wallet_send_tx.gif" width="20%"/>

For other transactions that do not involve gas fees such as personal sign or signature requests, the notification details  simply shows the transaction details for a review by the user before taking an action to approve or reject.

Here is an example of a signature request notification summary:

<img class="an-screenshots-noeffects" src="/img/an_wallet_smtx_req_sign.png" width="20%"/>

On clicking the top right arrow icon, user can see the signature request transaction notification details view:

<img class="an-screenshots-noeffects" src="/img/an_wallet_req_sign.png" width="20%"/>

### Logout

Click the <img src="/img/icons/an_wallet_profile_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_profile_icon_dark.png#only-dark" width="20"/> tab at the bottom of the {{config.extra.arcana.wallet_name}} UI to bring up the user profile tab view. Click **Logout** in the user profile tab view to log out.

<img class="an-screenshots-noeffects" src="/img/an_wallet_profile.png" width="20%"/>

**That is all!**  :material-party-popper:

*You are now well-versed with the {{config.extra.arcana.wallet_name}} UI and how to perform blockchain transactions using the same.*

## What's Next?

Besides the basic Web3 wallet operations, the authenticated users can use the {{config.extra.arcana.wallet_name}} to view and [[use-wallet-to-export-keys|export their private keys]] and [[index-wallet-user-guide|manage crypto assets such as tokens and NFTs]]. 

## See also

* [{{config.extra.arcana.wallet_name}} capabilities]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md)
* [[configure-wallet-visibility|Configure the {{config.extra.arcana.wallet_name}}]]
