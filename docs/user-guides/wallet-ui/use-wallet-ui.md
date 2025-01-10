---
alias: arcana-wallet-user-guide
title: 'Basic Wallet Operations'
description: 'Arcana Wallet UI Usage Guide. Learn how to use the wallet for signing blockchain transactions, switching chains and more.'
arcana:
  root_rel_path: ../..
---

# Basic Wallet Operations

This guide covers basic {{config.extra.arcana.wallet_name}} operations that are accessible through the user interface.

!!! an-note "{{config.extra.arcana.wallet_name}} Access"

      Users can access {{config.extra.arcana.wallet_name}} from within the app's browser context. The app must be integrated with the {{config.extra.arcana.sdk_name}} to enable {{config.extra.arcana.wallet_name}} for the user.

## Minimize/Maximize UI 

Right after a user authenticates, the wallet is displayed in its minimized state.

<img class="an-screenshots-noeffects" src="{{config.extra.arcana.img_dir}}/an_wallet_min_light.{{config.extra.arcana.img_png}}#only-dark" width="15%"/><img class="an-screenshots-noeffects" src="{{config.extra.arcana.img_dir}}/an_wallet_min_dark.{{config.extra.arcana.img_png}}#only-light" width="15%"/>

On clicking, it expands to display the wallet in its maximized state. It can be minimized again by clicking the '∨' icon on the top in the wallet UI. 

<img class="an-screenshots-noeffects" src="{{config.extra.arcana.img_dir}}/an_wallet_max_light.{{config.extra.arcana.img_png}}#only-dark" width="35%"/><img class="an-screenshots-noeffects" src="{{config.extra.arcana.img_dir}}/an_wallet_max_dark.{{config.extra.arcana.img_png}}#only-light" width="35%"/>

## Switch Wallet Tabs

The following functions can be accessed from any of the wallet tabs:

* View the dApp name, logo
* View wallet address and type
* View/Switch/Add Blockchain Network
* Copy wallet address
* Display QR code for the wallet

Other wallet features can be accessed via specific tabs in the wallet UI:

=== "Wallet Balance"

    This is the default home tab of the {{config.extra.arcana.wallet_name}}: <img src="{{config.extra.arcana.img_dir}}/icons/an_wallet_token_icon_light.{{config.extra.arcana.img_png}}#only-light" width="20"/><img src="{{config.extra.arcana.img_dir}}/icons/an_wallet_token_icon_dark.{{config.extra.arcana.img_png}}#only-dark" width="20"/>

    It displays the wallet token balance across available chains. User can switch chains, send cryptocurrency and tokens, buy/sell cryptocurrency and manage ERC-20 tokens.  See [#view-wallet-balance]('View Wallet Balance') for details.

    <figure markdown="span">
      <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_home_tokens.{{config.extra.arcana.img_png}}" alt="Wallet Balance Home Tab"/>
      <figcaption>Wallet Home: Token Balance</figcaption>
    </figure>

=== "NFT Assets"

    Use this tab to view the NFT assets linked with your {{config.extra.arcana.wallet_name}} on the selected chain: <img src="{{config.extra.arcana.img_dir}}/icons/an_wallet_nft_icon_light.{{config.extra.arcana.img_png}}#only-light" width="20"/><img src="{{config.extra.arcana.img_dir}}/icons/an_wallet_nft_icon_dark.{{config.extra.arcana.img_png}}#only-dark" width="20"/>

    See [[use-wallet-to-manage-nfts| :material-image-multiple:{ .icon-color } how to manage NFTs]], for details.

    <figure markdown="span">
      <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_nft_assets.{{config.extra.arcana.img_png}}" alt="View NFT Assets"/>
      <figcaption>View NFT Assets</figcaption>
    </figure>

=== "User Profile"

    View your user profile details associated with the {{config.extra.arcana.wallet_name}} in this tab: <img src="{{config.extra.arcana.img_dir}}/icons/an_wallet_profile_icon_light.{{config.extra.arcana.img_png}}#only-light" width="20"/><img src="{{config.extra.arcana.img_dir}}/icons/an_wallet_profile_icon_dark.{{config.extra.arcana.img_png}}#only-dark" width="20"/>

    You can view wallet address, export private keys, check MFA status (or enable it) and log out of the wallet through this tab. 
    
    See [[use-wallet-to-export-keys| :material-key-chain:{ .icon-color } how to export private keys]] for details.

    !!! an-tip "Multi-Factor Authentication (MFA)"
    
          MFA is a one-time setting. See [[mfa-user-guide| :material-key-chain:{ .icon-color } how to ensable MFA]], for details.

    <figure markdown="span">
      <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_profile_tab.{{config.extra.arcana.img_png}}" alt="View wallet User Profile"/>
      <figcaption>View Wallet User Profile</figcaption>
    </figure>

=== "Activity"

    Check your {{config.extra.arcana.wallet_name}} activities through the activity tab: <img src="{{config.extra.arcana.img_dir}}/icons/an_wallet_notification_icon_light.{{config.extra.arcana.img_png}}#only-light" width="20"/><img src="{{config.extra.arcana.img_dir}}/icons/an_wallet_notification_icon_dark.{{config.extra.arcana.img_png}}#only-dark" width="20"/>

    It shows the wallet activity, transactions processed in the current user login session. [[arcana-wallet-user-guide#transaction-activity|Learn more...]]

    <figure markdown="span">
      <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_activity.{{config.extra.arcana.img_gif}}" alt="View Wallet Activity"/>
      <figcaption>View Wallet Activity</figcaption>
    </figure>

## View Wallet Balance

### Add/Select a Network

By default, the {{config.extra.arcana.wallet_name}} UI displays a pre-configured list of blockchain networks that are configured by the app developer. Users can select a different network from the drop-down list or add newer networks that are [[web3-stack-chains|supported by the app]].

To add or select a network, click the dropdown next to the blockchain network icon on the top right: <img class="an-screenshots-noeffects" src="{{config.extra.arcana.img_dir}}/icons/wallet_add_network_icon.{{config.extra.arcana.img_png}}" alt="Network Icon" width="10%"/>

Choose one of the available networks in the list and switch to it or click **Add Network** to add a new one with the following details:

* Add the following details:
    * **Network Name**: Name of the network. For example, Shardeum
    * **RPC URL**: https://liberty10.shardeum.org
    * **Chain ID**: 8080
    * **Currency Symbol**: SHM
    * **Explorer URL (Optional)**: https://explorer.liberty10.shardeum.org/

<figure markdown="span">
  <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_add_network_button.{{config.extra.arcana.img_gif}}" alt="Add Network"/>
  <figcaption>Add Network</figcaption>
</figure> 

Click Save to automatically set the newly added network as the active chain in the wallet UI.

<figure markdown="span">
  <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/wallet_added_network.gif" alt="Network List"/>
  <figcaption>Network List</figcaption>
</figure> 

### Switch Network

Click on the dropdown next to the network icon on the top right of the wallet UI:<img src="{{config.extra.arcana.img_dir}}/icons/an_wallet_token_icon_light.{{config.extra.arcana.img_png}}#only-light" width="20"/><img src="{{config.extra.arcana.img_dir}}/icons/an_wallet_token_icon_dark.{{config.extra.arcana.img_png}}#only-dark" width="20"/> 

Choose one of the available networks in the pre-configured blockchain networks list to switch networks.

<figure markdown="span">
  <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_switch_ntwk.{{config.extra.arcana.img_gif}}" alt="Switch Network"/>
  <figcaption>Switch Network</figcaption>
</figure> 

### Sign Transaction

A blockchain sign transaction notification can be triggered programmatically via the app or in response to a user action in the {{config.extra.arcana.wallet_name}} UI. Users can scroll through the notification to view the details before selecting **Reject** or **Approve** option.

<figure markdown="span">
  <img class="an-screenshots-noeffects width_85pc" src="{{config.extra.arcana.img_dir}}/an_wallet_personalsign.{{config.extra.arcana.img_png}}" alt="Sign Transactions"/>
  <figcaption>Sign Transactions</figcaption>
</figure> 

### Speed Up Transaction

For every blockchain transaction, users pay gas fees with the network’s native token. It is possible to speed up the transaction by paying higher gas fees. When issuing a send transaction through the {{config.extra.arcana.wallet_name}} UI, users have three options for gas fees selection:

* **Normal**: Default network gas fees
* **Fast**: Pay a premium for quicker transactions
* **Custom**: Choose gas limits, priority fee and max gas fees setting and customize fees

<figure markdown="span">
  <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_speedup.{{config.extra.arcana.img_gif}}" alt="Speedup Transactions"/>
  <figcaption>Speed up Transactions</figcaption>
</figure> 

### Transaction Details

If a blockchain transaction is triggered via the app that requires the user's approval, the user will see a transaction notification. If the wallet was in a minimized state at the time the request was generated, then the notification will show up with a summary of the transaction along with the buttons to approve or reject. 

<figure markdown="span">
  <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_smtx_sign_msg.{{config.extra.arcana.img_png}}" alt="Transaction Notification"/>
  <figcaption>Transaction Notification</figcaption>
</figure>

The user can click on the top right arrow icon in the transaction notification to view its details. 

<figure markdown="span">
  <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_sign_msg.{{config.extra.arcana.img_png}}" alt="View Transaction Details"/>
  <figcaption>Transaction Notification</figcaption>
</figure>

??? an-example "Transaction Notification Example"

      Here is an example of how an `eth_sendTransaction` triggers a transaction notification and approval request for the user. The send transaction notification summary is displayed:

      <figure markdown="span">
        <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_smtx_send_tx.{{config.extra.arcana.img_png}}" alt="Example: Send Transaction Notification"/>
        <figcaption>Example: Send Transaction Notification</figcaption>
      </figure>

      In the case of the send transaction request or sign transaction request, the notification details allow the user to edit the gas fees before approving the request. 

      <figure markdown="span">
        <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_send_tx.{{config.extra.arcana.img_png}}" alt="Send Transaction Details"/>
        <figcaption>Example: Send Transaction Notification</figcaption>
      </figure>

      For other transactions that do not involve gas fees such as personal sign or signature requests, the notification details allow users to review transaction message details before taking an action to approve or reject.

??? an-example "Signature Request Example"

      Here is an example of a signature request notification summary:

      <figure markdown="span">
        <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_smtx_req_sign.{{config.extra.arcana.img_png}}" alt="Example: Signature Request Summary"/>
        <figcaption>Example: Signature Request Summary</figcaption>
      </figure>

      On clicking the topmost arrow icon, the user can see the signature request transaction notification details view:

      <figure markdown="span">
        <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_req_sign.{{config.extra.arcana.img_png}}" alt="Example: Signature Request Details"/>
        <figcaption>Example: Signature Request Details</figcaption>
      </figure>

### Buy/Sell Crypto

{{config.extra.arcana.wallet_name}} uses third-party providers to enable buying and selling (on-ramping and off-ramping) of crypto assets.

#### Fiat On-ramp

The {{config.extra.arcana.wallet_name}} users can **buy** cryptocurrency using fiat through one of the supported providers: 

{% include "./text-snippets/fiat_on_ramp_providers.md" %}

Click **Buy** to purchase ERC20 or native tokens for supported blockchains from the chosen on-ramp provider. Select the 'Tokens' <img src="{{config.extra.arcana.img_dir}}/icons/an_wallet_token_icon_light.{{config.extra.arcana.img_png}}#only-light" width="20"/><img src="{{config.extra.arcana.img_dir}}/icons/an_wallet_token_icon_dark.{{config.extra.arcana.img_png}}#only-dark" width="20"/> tab, then choose the required blockchain network from the drop-down list. The selected chain determines which cryptocurrencies and tokens can be purchased, following local regulations.

<figure markdown="span">
  <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_onramp_buy.{{config.extra.arcana.img_png}}" alt="Buy Crypto"/>
  <figcaption>Buy Crypto</figcaption>
</figure> 

Pick up one of the providers and click **Proceed**. 

<figure markdown="span">
  <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_onramp_providers.{{config.extra.arcana.img_png}}" alt="On Ramp Providers"/>
  <figcaption>On Ramp Providers</figcaption>
</figure> 

Clicking will open the provider interface in a new tab. {{config.extra.arcana.wallet_name}} will notify you of the 'buy' process. Dismiss the notification and continue using the wallet while the purchase is completed in the other tab.

<figure markdown="span">
  <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_onramp_provider_select.{{config.extra.arcana.img_png}}" alt="Confirm Buy Transaction"/>
  <figcaption>Confirm Buy Transaction</figcaption>
</figure> 

??? an-example "On-Ramp Provider Usage"

      Fiat on-ramp providers may require users to follow country-specific KYC procedures and list only the available cryptocurrencies for the selected chain. Minimum purchase amounts can vary by country and provider.

      For example, Transak requires each user to complete KYC by submitting country-specific identification documents. Once the verification is complete, the user can purchase the cryptocurrency with Transak.  This verification is a one-time thing and subsequent purchases will not require this additional step. The figure below shows an example of a purchase transaction using Transak.
      
      <figure markdown="span">
        <img alt="Using Transak" class="an-screenshots-noeffects width_50pc" src="{{config.extra.arcana.img_dir}}/an_wallet_fiat_transak.gif"/>
        <figcaption>Using Transak</figcaption>
      </figure>

      Refer to the provider documentation for details regarding usage and coverage:
      
      * [Transak User Guide](https://support.transak.com/en/articles/7846055-buying-cryptocurrency-for-beginners)

      * [Transak coverage](https://docs.transak.com/docs/fiat-currency-country-payment-method-coverage-plus-fees-and-limits)

??? an-caution "Buy Limitations"

      1. Purchased ERC20 and ERC721 tokens will not update automatically in the {{config.extra.arcana.wallet_name}} assets screen. Users must manually add custom tokens, as on-ramp providers do not supply the token's contract address.

      2. The notification tab in the {{config.extra.arcana.wallet_name}} UI will not show activity for a successful purchase. On-ramp providers do not consistently share this information. We may add this feature in future releases.

#### Fiat Off-ramp

The {{config.extra.arcana.wallet_name}} users can **sell** cryptocurrency using fiat through one of the supported providers: 

{% include "./text-snippets/fiat_off_ramp_providers.md" %}

Click **Sell** to off-ramp ERC20 tokens or execute native cryptocurrency sell transactions for supported blockchains via the selected provider. The chosen off-ramp provider executes the 'sell' and deposits proceeds into the configured bank account. Select the 'Tokens' <img src="{{config.extra.arcana.img_dir}}/icons/an_wallet_token_icon_light.{{config.extra.arcana.img_png}}#only-light" width="20"/><img src="{{config.extra.arcana.img_dir}}/icons/an_wallet_token_icon_dark.{{config.extra.arcana.img_png}}#only-dark" width="20"/> tab, then choose the required blockchain network from the drop-down list. The selected chain determines which cryptocurrencies and tokens can be sold, following local regulations.

<figure markdown="span">
  <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_offramp_sell.{{config.extra.arcana.img_png}}" alt="Sell Crypto"/>
  <figcaption>Sell Crypto</figcaption>
</figure> 

Pick up one of the providers and click **Proceed**.

<figure markdown="span">
  <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_offramp_providers.{{config.extra.arcana.img_png}}" alt="Off-Ramp Providers"/>
  <figcaption>Off-Ramp Providers</figcaption>
</figure>

Clicking opens the provider interface in a new tab. Complete the sale there. {{config.extra.arcana.wallet_name}} will notify you of the 'sell' initiation. Dismiss the notification and continue using the wallet.

<figure markdown="span">
  <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_offramp_provider_select.{{config.extra.arcana.img_png}}" alt="Confirm Sell Transaction"/>
  <figcaption>Confirm Sell Transaction</figcaption>
</figure>

??? an-example "Off-ramp Provider Usage"

      Fiat off-ramp providers may ask the user to follow country-specific procedures for KYC and list available cryptocurrencies for the selected chain. Note that the basic maximum sell amount for a country or cryptocurrency may vary across countries and providers.

      Transak requires each user to complete KYC by submitting country-specific identification documents. Once the verification is complete, the user can sell cryptocurrency via Transak.  This verification is a one-time thing; subsequent purchases will not require this additional step. The figure below shows an example of a sell transaction using Transak.

      <figure markdown="span">
        <img alt="Using Transak" class="an-screenshots-noeffects width_50pc" src="{{config.extra.arcana.img_dir}}/an_wallet_fiat_transak_sell.{{config.extra.arcana.img_png}}"/>
          <figcaption>Using Transak</figcaption>
      </figure>

      Refer to provider documentation for more details on usage and coverage.

      * [Transak User Guide](https://support.transak.com/en/articles/7846055-buying-cryptocurrency-for-beginners)
      * [Transak coverage](https://docs.transak.com/docs/fiat-currency-country-payment-method-coverage-plus-fees-and-limits)

The activity tab in the {{config.extra.arcana.wallet_name}} UI displays details of the 'sell' transaction issued from the wallet.

### Add Tokens

Click the <img src="{{config.extra.arcana.img_dir}}/icons/an_wallet_token_icon_light.{{config.extra.arcana.img_png}}#only-light" width="20"/><img src="{{config.extra.arcana.img_dir}}/icons/an_wallet_token_icon_dark.{{config.extra.arcana.img_png}}#only-dark" width="20"/> 'Tokens' tab on the bottom left of the {{config.extra.arcana.wallet_name}} to bring up the token assets screen.

You can add custom ERC-20 and ERC-1155 token assets to the {{config.extra.arcana.wallet_name}} UI by clicking **Manage**. [[use-wallet-ui-to-manage-tokens|Learn more...]]

## Manage NFT Assets

Click the 'NFT' tab on the bottom of the {{config.extra.arcana.wallet_name}} UI to view and manage NFTs associated with the wallet address on the selected blockchain network and perform these actions:

{% include "./text-snippets/nft_ops.md" %}

<figure markdown="span">
  <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_nft_asset_thumbnail.gif" alt="NFT Assets"/>
  <figcaption>NFT Assets</figcaption>
</figure>

[[use-wallet-to-manage-nfts|Learn more...]]

## View User Profile

Click the <img src="{{config.extra.arcana.img_dir}}/icons/an_wallet_profile_icon_light.{{config.extra.arcana.img_png}}#only-light" width="20"/><img src="{{config.extra.arcana.img_dir}}/icons/an_wallet_profile_icon_dark.{{config.extra.arcana.img_png}}#only-dark" width="20"/> 'Profile' tab on the bottom of the {{config.extra.arcana.wallet_name}} and perform these actions:

* View User name
* View User Email ID
* View / Copy Wallet Address
* Export the private key / Save seed phrase for exporting MultiversX wallet 
* View MFA Status / Enable MFA
* Logout

<figure markdown="span">
  <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_profile.{{config.extra.arcana.img_png}}" alt="User Profile"/>
  <figcaption>User Profile</figcaption>
</figure>

### Export Private Key

Click the Profile <img src="{{config.extra.arcana.img_dir}}/icons/an_wallet_profile_icon_light.{{config.extra.arcana.img_png}}#only-light" width="20"/><img src="{{config.extra.arcana.img_dir}}/icons/an_wallet_profile_icon_dark.{{config.extra.arcana.img_png}}#only-dark" width="20"/> tab on the bottom of the {{config.extra.arcana.wallet_name}} to see the user profile screen and choose [[use-wallet-to-export-keys|export private key]] option.

<figure markdown="span">
  <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_export_key.{{config.extra.arcana.img_png}}" alt="Export Private Key" />
  <figcaption>Export Private Key</figcaption>
</figure>

{% include "./text-snippets/warn_mvx_export_wallet.md" %}

### View Status / Enable MFA

In the profile tab of the wallet, users can check the current MFA status, whether it is enabled or not. [[concept-mfa|MFA]] is a one-time setting for the user's wallet. Click **Set up MFA** to turn on MFA by setting up security questions and a PIN. You will need to enter either of them to authenticate when you login to a new device or browser. [[mfa-user-guide|Learn more...]]

### Logout

To log out of the app and the wallet, click the Profile <img src="{{config.extra.arcana.img_dir}}/icons/an_wallet_profile_icon_light.{{config.extra.arcana.img_png}}#only-light" width="20"/><img src="{{config.extra.arcana.img_dir}}/icons/an_wallet_profile_icon_dark.{{config.extra.arcana.img_png}}#only-dark" width="20"/> tab at the bottom of the {{config.extra.arcana.wallet_name}} UI and select **Logout**.

<figure markdown="span">
  <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_profile.{{config.extra.arcana.img_png}}" alt="Logout"/>
  <figcaption>Logout</figcaption>
</figure>


## Transaction Activity

Click the <img src="{{config.extra.arcana.img_dir}}/icons/an_wallet_notification_icon_light.{{config.extra.arcana.img_png}}#only-light" width="20"/><img src="{{config.extra.arcana.img_dir}}/icons/an_wallet_notification_icon_dark.{{config.extra.arcana.img_png}}#only-dark" width="20"/> 'Activity' tab on the bottom right of the {{config.extra.arcana.wallet_name}} to view the activity screen. It lists any pending transactions and the status of the following user actions via the wallet:

* Sell transaction
* Send tokens transaction
* Contract deployment

<figure markdown="span">
  <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_combined_notify.{{config.extra.arcana.img_png}}" alt="Wallet Activity"/>
  <figcaption>User Profile</figcaption>
</figure>

<details markdown><summary markdown>Notification Example</summary><p><h4>Pending Contract Deployment Request</h4> When a contract deployment request notification shows up, the user can click on 'Do it later' option. The request will be listed as a pending request in the 'Activity' tab of the wallet. 

A red dot on the <img src="{{config.extra.arcana.img_dir}}/icons/an_wallet_notification_icon_light.{{config.extra.arcana.img_png}}#only-light" width="20"/><img src="{{config.extra.arcana.img_dir}}/icons/an_wallet_notification_icon_dark.{{config.extra.arcana.img_png}}#only-dark" width="20"/>'Activity' tab icon at the bottom right of the {{config.extra.arcana.wallet_name}} indicates a pending blockchain transaction. 

Click on the red dot to see details of the pending transaction and take appropriate action. 

<figure markdown="span">
  <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_pending_contract.gif" alt="View Pending Notifications" />
  <figcaption>View Pending Notifications</figcaption>
</figure>

</p>
</details>

### Pending Transactions

When a transaction notification appears, the user can click 'Do this later' to ignore it. Pending transactions are marked with a red dot in the 'Activity' tab and on the minimized wallet icon.

Once the user addresses the notification, it disappears from the 'Activity' tab.

<figure markdown="span">
  <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_pending_sign_anim.gif" alt="Pending Transactions"/>
  <figcaption>Pending Transactions</figcaption>
</figure> 