---
alias: arcana-wallet-user-guide
title: 'Arcana Wallet User Guide'
description: 'User guide for Arcana wallet UI displayed within a Web3 app context. Authenticated users can access Web3 wallet operations.'
arcana:
  root_rel_path: ..
---

# Basic Wallet Operations

This guide is for the {{config.extra.arcana.wallet_name}} UI users. It lists various Web3 wallet operations and how to access them through the wallet UI.

Developers who wish to programmatically enable the Web3 wallet operations in an app can refer to the {{config.extra.arcana.wallet_name}} Developers Guide.

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
  - Send, share NFTs (ERC-721, ERC-1155)
  - Add NFT collections
  - Modify (edit, delete) NFT collections
* View user profile details
* Monitor blockchain transaction-related notifications
* Export private key
* Logout

When a user logs in, the following wallet screen is displayed.

<img class="an-screenshots-noeffects" src="/img/an_wallet_home.png" width="20%"/>

Users can access various Web3 wallet operations supported by the {{config.extra.arcana.wallet_name}} UI via the following tabs located at the bottom of the wallet screen:

* <img src="/img/icons/an_wallet_token_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_token_icon_dark.png#only-dark" width="20"/> Token Assets Tab 
* <img src="/img/icons/an_wallet_nft_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_nft_icon_dark.png#only-dark" width="20"/> NFT Assets Tab
* <img src="/img/icons/an_wallet_profile_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_profile_icon_dark.png#only-dark" width="20"/> User Profile Tab
* <img src="/img/icons/an_wallet_notification_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_notification_icon_dark.png#only-dark" width="20"/> Notifications Tab

### Sign Transaction

A blockchain transaction sign request can be generated either by the app, programmatically, or in response to a user action in the {{config.extra.arcana.wallet_name}} UI. The **Sign Message** wallet screen shows the details of the request. The figure below shows a **Personal Sign** request displayed in the {{config.extra.arcana.wallet_name}} screen. Users can scroll down and see details of the request before selecting one of the options to **Reject** or **Approve** the transaction.

<img class="an-screenshots-noeffects" src="/img/an_wallet_personalsign.png" width="35%"/>

If the user does not take any action but chooses to close the transaction request using the<img src="/img/icons/wallet_close_icon.png" width="15"/> icon on the top right of the {{config.extra.arcana.wallet_name}} screen, the wallet switches from maximized screen state to the minimized state but continues to show in the app screen. If there are any pending transactions they are highlighted in the minimized state with a red dot. 

Once the user takes action on the pending transactions, the wallet notification screen will show a **No Pending Requests!** message.

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

To buy cryptocurrency, click the <img src="/img/icons/an_wallet_token_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_token_icon_dark.png#only-dark" width="20"/>  and refer to the token assets wallet screen. Select a chain from the drop-down list. This choice will govern what cryptocurrencies and tokens are available to purchase subject to local country-specific rules.

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

If you are new to Transak or Ramp, see [Transak User Guide](https://support.transak.com/hc/en-us/articles/360020615378-Buying-cryptocurrency-for-beginners) and [Ramp User Guide](https://support.ramp.network/en/articles/18887-how-to-use-ramp) for step-by-step details on buying crypto assets.

For details on what assets and cryptocurrency, countries are supported by these providers refer to [Transak coverage](https://docs.transak.com/docs/fiat-currency-country-payment-method-coverage-plus-fees-and-limits) and [Ramp Network coverage](https://support.ramp.network/en/articles/432-what-cryptoassets-does-ramp-support). 

!!! caution "Current Limitations"

    1. Purchased token assets will not be automatically updated in the {{config.extra.arcana.wallet_name}} assets screen. Users will need to manually add custom tokens that are purchased via on-ramp providers as these providers do not provide the contract address of the purchased token.

    2. You will not see any activity listed for a successful purchase when you click on the notification screen of the {{config.extra.arcana.wallet_name}}. There is no uniform standard whereby on-ramp providers share this information or 'event' regarding purchase. We may add it in future releases.

### Manage Token Assets

Click the <img src="/img/icons/an_wallet_token_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_token_icon_dark.png#only-dark" width="20"/> tab on the bottom left of the {{config.extra.arcana.wallet_name}} to bring up the token assets screen. It displays the following information:

* View, and copy the {{config.extra.arcana.wallet_name}} address
* View wallet address details on the Block Explorer
* Add/Select network
* Refresh the wallet screen
* View the total wallet balance in the native currency
* List native and custom tokens in the wallet
* Add new custom tokens
* Send and receive native and custom tokens
* View token asset activities - which native or custom tokens requests were sent, whether the status is confirmed or pending, etc.

<img class="an-screenshots-noeffects" src="/img/an_wallet_home.png" width="20%"/>

For more details, see [[use-wallet-ui-to-manage-tokens|how to view, select, send, receive tokens, add custom tokens using the {{config.extra.arcana.wallet_name}}]] UI.

### Manage NFT Assets

Click the <img src="/img/icons/an_wallet_nft_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_nft_icon_dark.png#only-dark" width="20"/> tab on the bottom of the {{config.extra.arcana.wallet_name}} to bring up the NFT assets screen. It allows the user to perform the following operations:

* View, and copy the {{config.extra.arcana.wallet_name}} address
* View wallet address details on the 'Block Explorer' associated with the selected network
* Refresh the wallet screen
* Add/Select network
* View NFT assets associated with the wallet address
* View NFT details
* Send, and share NFTs
* View NFT transaction activity
* Manage NFT collections

<img class="an-screenshots-noeffects" src="/img/an_wallet_nft_asset_thumbnail.gif" width="20%"/>

For details, see [[use-wallet-to-manage-nfts|how to send, share, and manage NFTs using the {{config.extra.arcana.wallet_name}}]] UI.

### View User Profile Details

Click the <img src="/img/icons/an_wallet_profile_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_profile_icon_dark.png#only-dark" width="20"/> tab on the bottom of the {{config.extra.arcana.wallet_name}} to see the user profile screen displaying these details:

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

The wallet notifications screen list all transactions processed using the {{config.extra.arcana.wallet_name}} for different digital assets such as native tokens, custom tokens, and NFTs. It also displays pending blockchain transaction approval requests, if any. 

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

Click the<img src="/img/icons/an_wallet_profile_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_profile_icon_dark.png#only-dark" width="20"/> tab on the bottom left of the {{config.extra.arcana.wallet_name}} to see the user profile screen. It provides an option to export the user's private key. For details, see [[use-wallet-to-export-keys|how to export a user's private key]] guide.

### Minimize Wallet

The {{config.extra.arcana.wallet_name}} can be in one of two states - maximized or minimized. The wallet UI can be minimized using the 'x' icon on the top right corner of the wallet screen. Minimized wallet displays as a small widget on the application window. To maximize the wallet, simply click on it.

<img class="an-screenshots-noeffects" src="/img/an_wallet_min_light.png#only-light" width="75"/><img class="an-screenshots-noeffects" src="/img/an_wallet_min_dark.png#only-dark" width="75"/>

During minimized state, if the app issues a transaction or if a user action results in a blockchain transaction that requires approval from the user, then the wallet screen is automatically changed to the maximized state in the application window.

### Logout

Click the <img src="/img/icons/an_wallet_profile_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_profile_icon_dark.png#only-dark" width="20"/> tab at the bottom of the {{config.extra.arcana.wallet_name}} screen to bring up the user profile screen. Click **Logout** in the user profile screen to log out.

<img class="an-screenshots-noeffects" src="/img/an_wallet_profile.png" width="20%"/>

**That is all!**  :material-party-popper:

*You are now well-versed with various {{config.extra.arcana.wallet_name}} screens and how to use the {{config.extra.arcana.wallet_name}} to perform blockchain transactions.*

## What's Next?

Besides the basic Web3 wallet operations, the authenticated users can use the {{config.extra.arcana.wallet_name}} to view and [[use-wallet-to-export-keys|export their private keys]] and [[index-wallet-user-guide|manage crypto assets such as tokens and NFTs]]. 

## See also

* [{{config.extra.arcana.wallet_name}} capabilities]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md)
* [[configure-wallet-visibility|Configure the {{config.extra.arcana.wallet_name}}]]
