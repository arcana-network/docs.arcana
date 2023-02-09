---
slug: /walletui
id: idwalletui
sidebar_custom_props:
  cardIcon: 📺
arcana:
  root_rel_path: ..
---

# Basic Web3 Wallet Operations

This guide is intended for Web3 application users. Developers who wish to programmatically enable various wallet operations can refer to the developer guides listed below.

!!! info "Developer Guides"

      To enable Arcana wallet in the context of a Web3 application, you need to first [register your Web3 application]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) and [configure user authentication mechanisms]({{page.meta.arcana.root_rel_path}}/howto/config_social_providers.md) using the Arcana Dashboard. 
      
      After that you must install the `@arcana/auth` package and follow the [instructions to integrate your application]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md).

      For more details, see [Arcana Auth Quick Start Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_qs.md), [Developer Guide for user onboarding]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/index.md) and the [Developer Guide for enabling wallet operations]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md).

## Prerequisites

To use the Arcana wallet, you need to log in to a Web3 app that is connected to the Arcana Auth SDK. Depending on the type of blockchain signing experience set up by the app developer, the Arcana wallet may appear only when a blockchain transaction needs your approval, or it may be visible all the time while using the Web3 app.

##  Arcana Wallet Features

Any dApp that [integrates with Arcana Auth SDK]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) and initializes the `AuthProvider` can use the standard Ethereum provider to sign blockchain transactions. Authenticated users can access the Arcana wallet for Web3 wallet operations.

<img src="/img/an_wallet_home.png" width="200"/><br></br><br></br>

Arcana wallet displays the following tabs located at the bottom of the wallet screen:

* <img src="/img/icons/an_wallet_token_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_token_icon_dark.png#only-dark" width="20"/> Token Assets Tab 
* <img src="/img/icons/an_wallet_nft_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_nft_icon_dark.png#only-dark" width="20"/> NFT Assets Tab
* <img src="/img/icons/an_wallet_profile_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_profile_icon_dark.png#only-dark" width="20"/> User Profile Tab
* <img src="/img/icons/an_wallet_notification_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_notification_icon_dark.png#only-dark" width="20"/> Notification Tab

These tab contain interfaces to perform the following Web3 wallet operations:

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
* Monitor Wallet notifications
* Export private key
* Logout

### Sign Transaction

A blockchain transaction sign request can be generated either by the dApp or via user action. The **Sign Message** wallet screen shows the details of the request. For example, the following figure shows **Personal Sign** request. The user can scroll down and see details of the request and select one of the options to **Reject** or **Approve** the transaction.

<img src="/img/an_wallet_personalsign.png" width="350"/>

If the user does not take any action but chooses to close the transaction request using the <img src="/img/icons/wallet_close_icon.png" width="15"/> icon on the top right of the Arcana wallet screen, the wallet switches from maximized screen state to the minimized state. If there are any pending transactions they are highlighted in the minimized state with a red dot. 

Once the user takes action on the pending transaction, the notification tab of the wallet will show a **No Pending Requests!** message.

<img src="/img/an_wallet_nopending.png" width="200"/>

### Add/Select a Network

Arcana Wallet supports signing transactions on Ethereum, Polygon, and other EVM-compatible networks. You can select the desired network from the drop-down list. 

If your network is not listed, you can also add multiple, EVM-compatible networks to the Arcana wallet.

* Click <img src="/img/icons/wallet_add_network_icon.png" width="60"/> icon. 
* Add the following details:
  * **Network Name**: Name of the network. For example, Shardeum
  * **RPC URL**: https://liberty10.shardeum.org
  * **Chain ID**: 8080
  * **Currency Symbol**: SHM
  * **Explorer URL (Optional)**: https://explorer.liberty10.shardeum.org/

Once you click **Save**, the newly added network is automatically selected as the current active chain in the updated network list. 

<img src="/img/wallet_added_network.png" width="600"/>

<WalletConfigWarningText/>

### Switch Network

Click <img src="/img/icons/an_wallet_token_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_token_icon_dark.png#only-dark" width="20"/> icon to bring up the wallet token asset tab. Use the network drop-down list to switch to a different network from the list of configured networks.

<img src="/img/an_wallet_switch_ntwk.png" width="200"/><br></br><br></br>

### Fiat On-ramp

Arcana wallet supports fiat on-ramping that allows wallet users to buy cryptocurrency (native and ERC20 tokens) easily from any of the supported providers:

{% include "./text-snippets/fiat_on_ramp_providers.md" %}

Users can purchase the specific token required for the app with either fiat or another cryptocurrency. Also they can purchase the native cryptocurrency with fiat to pay for transaction or gas fees. After a successful purchase via a third-party fiat on-ramp provider, the purchased tokens or currency is automatically deposited in the Arcana wallet address and displayed in the balance.

To buy cryptocurrency, click <img src="/img/icons/an_wallet_token_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_token_icon_dark.png#only-dark" width="20"/> icon and refer to the token assets wallet tab. Select a chain from the drop-down list. This choice will govern what cryptocurrencies and tokens are available to purchase subject to local country-specific rules.

Click **Buy** to initiate the fiat on-ramp process for your Arcana wallet. 

<img src="/img/an_wallet_onramp_buy.png" width="30%"/>

You will see the list of available fiat on-ramp providers:

<img src="/img/an_wallet_onramp_providers.png" width="30%"/>

Pick up one of the providers and click **Proceed**. This will bring up the provider-specific user interface. Each provider may ask the user to follow country-specific procedures for KYC and list available cryptocurrencies for the selected chain. Also, the basic minimum purchase amount for a country or cryptocurrency may vary across countries and providers.

For example, Transak requires each user to complete KYC by submitting country-specific identification documents. Once the verification is complete only then the user can proceed to purchase the cryptocurrency with Transak.  This verification is a one-time thing and subsequent purchases will not require this additional step. The figure below shows an example of a purchase transaction using Transak.

<img src="/img/an_wallet_fiat_transak.png" width="70%"/>

Similarly, if the fiat on-ramp provider Ramp Network is chosen, you will see the Ramp UI displaying all the available currencies for the selected chain in the Arcana wallet. For the first purchase, you may be required to do KYC formalities as well.

<img src="/img/an_wallet_fiat_rampnetwork.png" width="70%"/>

If you are new to Transak or Ramp, see [Transak User Guide](https://support.transak.com/hc/en-us/articles/360020615378-Buying-cryptocurrency-for-beginners) and [Ramp User Guide](https://support.ramp.network/en/articles/18887-how-to-use-ramp) for step by step details on buying crypto assets.

For details on what assets and cryptocurrency, countries are supported by these providers refer to [Transak coverage](https://docs.transak.com/docs/fiat-currency-country-payment-method-coverage-plus-fees-and-limits) and [Ramp Network coverage](https://support.ramp.network/en/articles/432-what-cryptoassets-does-ramp-support). 

<<<<<<< HEAD
!!! caution "Current Limitations"
=======
!!! caution "Limitations"
>>>>>>> 85b6a0b (Fix: #AR-5342 on-ramp docs)

    1. Purchased token assets will not be automatically updated in the Arcana wallet assets tab. Users will need to manually add custom tokens that are purchased via on-ramp providers as these providers do not provide the contract address of the purchased token.

    2. You will not see any notifications for a successful purchase in the activity tab of the Arcana wallet. There is no uniform standard whereby on-ramp providers share this information or 'event' regarding purchase. We may add it in future releases.

### Manage Token Assets

Click <img src="/img/icons/an_wallet_token_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_token_icon_dark.png#only-dark" width="20"/> icon on the bottom left of the Arcana wallet to bring up the token assets tab. It displays the following information:

* View, and copy Arcana wallet address
* View wallet address details on the Block Explorer
* Add/Select network
* Refresh the wallet screen
* View total wallet balance in the native currency
* List native and custom tokens in the wallet
* Add new custom tokens
* Send and receive native and custom tokens
* View token asset activities - which native or custom tokens requests were sent, whether the status is confirmed or pending, etc.

<img src="/img/an_wallet_home.png" width="200"/>

For more details, see [how to view, select, send, receive tokens, add custom tokens using Arcana wallet]({{page.meta.arcana.root_rel_path}}/howto/wallet_manage_tokens.md) guide.

### Manage NFT Assets

Click <img src="/img/icons/an_wallet_nft_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_nft_icon_dark.png#only-dark" width="20"/> icon on the bottom of the Arcana wallet to bring up the NFT assets tab. It displays the following information:

* View, and copy Arcana wallet address
* View wallet address details on the Block Explorer
* Refresh the wallet screen
* Add/Select network
* List NFT assets associated with the wallet address
* View NFT details
* Send, and share NFTs
* View NFT transaction activity
* Manage NFT collections

<img src="/img/an_wallet_nft_assets.png" width="200"/><br></br><br></br>

For details, see [how to send, share and manage NFTs using Arcana wallet]({{page.meta.arcana.root_rel_path}}/howto/wallet_manage_nft.md) guide.

### View User Profile Details

Click <img src="/img/icons/an_wallet_profile_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_profile_icon_dark.png#only-dark" width="20"/> icon on the bottom of the Arcana wallet to see the user profile tab displaying these details:

* User name 
* Email ID used to log into the wallet
* Network
* Wallet Address
* Option to export the private key
* Logout button
* Minimize / Close button

<img src="/img/an_wallet_profile.png" width="200"/><br></br><br></br>

### Wallet Notifications

Click <img src="/img/icons/an_wallet_notification_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_notification_icon_dark.png#only-dark" width="20"/> icon on the bottom right of the Arcana wallet to see wallet notifications.

The wallet notifications tab list all transactions processed using the Arcana wallet for different digital assets such as native tokens, custom tokens, and NFTs. It also displays pending blockchain transaction approval requests, if any. 

<img src="/img/an_wallet_combined_notify.png" width="200"/><br></br><br></br>

You can view all activities in the list or filter them based on whether the blockchain transactions were initiated by the user or the dApp. Click on the filter icon and choose the desired option.

<img src="/img/an_wallet_combined_notify_filter_nav_options.png" width="500"/><br></br><br></br>

If you see a red dot on the <img src="/img/icons/an_wallet_notification_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_notification_icon_dark.png#only-dark" width="20"/> icon at the bottom left of the Arcana wallet, it indicates a pending blockchain transaction that a user needs to review and act upon. 

Click on the icon to see details of the pending transaction and take appropriate action. The figure below shows a pending contract deployment transaction in the wallet notification tab:

<img src="/img/an_wallet_combined_notification_details_contract.png" width="200" />

Once all pending transactions are processed, you will not see the red dot. The Arcana wallet shows a **No Pending Requests!** message on the notification tab, once the user acts upon any pending requests.  

<img src="/img/an_wallet_nopending.png" alt="No pending request" width="200" />>

<details markdown><summary markdown>Notification Example</summary><p><h4>Pending Personal Sign</h4>
  Once the user is logged in using one of the available operations, the application can request the user to sign a personal signature request and authorize blockchain connectivity for the user before issuing any other blockchain transaction. Such pending user requests are highlighted when the wallet is minimized so that the user is notified of a pending request.

  ![dApp wallet integration example](/img/an_wallet_min_demo_app.png)

  Users can click on the wallet to bring up the **Full UI** wallet visibility mode and review, and approve the personal sign request as displayed in the figure below:

  ![Demo App PersonalSign](/img/an_wallet_personalsign.png)

  </p>
</details>

### Export Private Key

Click <img src="/img/icons/an_wallet_profile_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_profile_icon_dark.png#only-dark" width="20"/> icon on the bottom left of the Arcana wallet to see the user profile screen. It provides an option to export the user's private key. For details, see [how to export a user's private key]({{page.meta.arcana.root_rel_path}}/howto/wallet_exkey.md) guide.

### Minimize Wallet

If the dApp developer has integrated the Arcana Auth SDK and specified the 'Full UI' wallet visibility mode, the Arcana wallet can be minimized using the 'x' icon on the top right corner of the wallet screen. Minimized wallet displays as a circular widget on the dApp window. 

<img src="/img/an_wallet_min.png" width="150"/><br></br><br></br>

During minimized state, if the dApp issues a transaction or if a user action results in a blockchain transaction sign request, the wallet screen pops up in maximized state in the dApp window.

### Logout

Click <img src="/img/icons/an_wallet_profile_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_profile_icon_dark.png#only-dark" width="20"/> icon in the bottom of the Arcana wallet screen to bring up the user profile tab. Click **Logout** in the user profile tab to log out.

<img src="/img/an_wallet_profile.png" width="200"/><br></br><br></br>

**That is all!**  :material-party-popper:

*You are now well-versed with various Arcana wallet screens and how to use the Arcana wallet to perform blockchain transactions.*

## What's Next?

It is highly recommended that you try out the Arcana sample demo app deployed at the portal: <DemoAppDeploymentLinkText/>

This sample demo application integrates with Arcana Auth SDK. It is configured to enable dApp users to onboard using passwordless login and Google social authentication. When you bring up this dApp, you will see the Arcana wallet on the bottom right area of the screen. Click on it to log into the wallet and perform blockchain operations.

## See also

* [Arcana wallet capabilities]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md)
* [Set up Arcana wallet]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/config_wallet.md)
* [Configuring Arcana wallet visibility modes]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/config_wallet_modes.md)
