---
alias: use-wallet-to-manage-nfts
title: 'Manage NFTs'
description: 'Web3 app users can view NFT details, send NFTs, monitor NFT transaction activity done via the Arcana wallet and manually add NFTs for chains that are not supported via Ankr.'
arcana:
  root_rel_path: ..
---

# Manage NFT Assets

In this guide, Web3 app users can learn how to use the {{config.extra.arcana.wallet_name}} UI and manage NFT assets.

## Prerequisites

* To use the {{config.extra.arcana.wallet_name}}, users must log in to a Web3 app that is integrated with the {{config.extra.arcana.sdk_name}}. 

* Depending on the [[configure-wallet-visibility|type of blockchain signing experience]] set up by the app developer, the {{config.extra.arcana.wallet_name}} may appear only when a blockchain transaction is triggered, or it may be visible at all times once the user logs in.

## NFT Operations

The {{config.extra.arcana.wallet_name}} allows users to view, transact and manage both types of NFT assets: image and video type. 

The following NFT operations are supported:

{% include "./text-snippets/nft_ops.md" %}

## List NFTs

To view the **NFT Assets** associated with the wallet address, click the <img src="/img/icons/an_wallet_nft_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_nft_icon_dark.png#only-dark" width="20"/> tab at the bottom of the {{config.extra.arcana.wallet_name}}.

Scroll down the **NFT Assets** tab. The **Assets** section displays a list of NFT thumbnails for each NFT that is associated with the wallet address.
      
<img class="an-screenshots-noeffects" src="/img/an_wallet_nft_asset_thumbnail.gif" width="20%"/><br></br><br></br>

!!! tip "Auto-fetching of NFTs"

      The {{config.extra.arcana.wallet_name}} automatically fetches the NFTs associated with the wallet address and displays them as thumbnails in the **NFT Assets** tab. This feature is supported via [Ankr APIs](https://www.ankr.com/docs/advanced-api/overview/) and works only for the NFTs minted on the blockchains supported by Ankr. {% include "./text-snippets/supported_nft_autofetch_chains.md" %}

## View NFT Details

In the **NFT Assets** tab, select and click the NFT thumbnail to view its details.  This display the NFT asset along with its metadata such as the description and attributes.

<img class="an-screenshots-noeffects" src="/img/an_wallet_nft_details.gif" width="20%"/><br></br><br></br>

## Send NFTs

You can transfer NFTs to a different wallet address. There are two ways to do this.  You can click **Send** on the **NFT Assets** tab to initiate the 'Send NFT' workflow. Select the NFT, specify the receiver's address and the gas fee details and then click **Proceed**.

<img class="an-screenshots-noeffects" src="/img/an_wallet_nft_send_opt1.gif" width="20%"/><br></br><br></br>

Alternatively, instead of clicking **Send** in the **NFT Assets** tab, click the NFT thumbnail itself in the **NFT Assets** tab. It will display the NFT asset and its details. Click the :fontawesome-solid-paper-plane: icon below the NFT asset to initiate the 'Send NFT' workflow. Specify the receiver's address, and the gas fee details before clicking **Proceed**.

<img class="an-screenshots-noeffects" src="/img/an_wallet_nft_send_opt2.gif" width="20%"/><br></br><br></br>

Once you click on **Proceed**, you can preview the NFT send transaction before submitting it. Use the **Send** button in the transaction preview screen to confirm or choose the **Back** button to return to the transaction details screen to re-review or modify it.

<img class="an-screenshots-noeffects" src="/img/an_wallet_nft_send_confirm.gif" width="20%"/><br></br><br></br>

<!--

Note: The sharing of NFTs was in the Figma design but not implemented in the wallet UI. Hence commenting out on May9th 2023 as suggested by Anirudh.

## Share NFTs

To share an NFT, you need to first select the NFT.  You can select the NFT by clicking on the thumbnail in the **NFT Assets** tab in the {{config.extra.arcana.wallet_name}}. When **NFT Details** are displayed, click **Share** to share the NFT.

<img class="an-screenshots-noeffects" src="/img/an_wallet_nft_share.png" width="20%"/><br></br><br></br>
-->

## Receive NFTs

In the **Token Assets** tab click **Receive** to display the wallet address and the QR code. Copy the wallet account address or the QR code and share it with the NFT sender for receiving an NFT.

<img class="an-screenshots-noeffects" src="/img/an_wallet_receive.gif" width="20%"/><br></br><br></br>

## Manage NFTs

The {{config.extra.arcana.wallet_name}} automatically fetches the NFTs associated with the wallet address for the chains that are supported by Ankr.  For non-supported chains, users can manually add the NFTs in the wallet through the **Manage NFT** feature.

To manually add the NFT, use the **NFT Assets** tab in the wallet and click **Manage**.

<img class="an-screenshots-noeffects" src="/img/an_wallet_nft_manage_nav.gif" width="20%"/><br></br><br></br>

The **Manage NFT** wallet UI is displayed.

<img class="an-screenshots-noeffects" src="/img/an_wallet_nft_manage.png" width="20%"/><br></br><br></br>

Use the **Manage NFTs** wallet UI to manually add, edit and update the NFT details. Note that the NFT collection name is automatically fetched and displayed once the correct collection contract address is entered. The NFT owner should have the same wallet address otherwise it cannot be manually added to the {{config.extra.arcana.wallet_name}}.

The NFT owner can also delete an NFT that is manually added.  Deleting the NFT simply removes it from the wallet, it does not destroy it. A user can always add it back as long as the ownership resides with the user.

### Add NFT Entry

Click **New** in the **Manage NFTs** screen to add an NFT. Provide requisite inputs and click **Save**.

<img class="an-screenshots-noeffects" src="/img/an_wallet_nft_add_nft.gif" width="20%"/><br></br><br></br>

The newly added NFT in displayed in the **Manage NFTs** screen.

### Modify NFT Entry

To edit or delete a manually added NFT, use the **Manage NFTs** wallet UI, click the NFT to see a pen icon next to the selected entry.

<img class="an-screenshots-noeffects" src="/img/an_wallet_nft_entry.png" width="20%"/><br></br><br></br>

Click the pen to edit the NFT details. You can also delete the NFT and click **Save**.

<img class="an-screenshots-noeffects" src="/img/an_wallet_nft_entry_modify.png" width="20%"/><br></br><br></br>

## Monitor NFT Send Transaction

Click the <img src="/img/icons/an_wallet_notification_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_notification_icon_dark.png#only-dark" width="20"/> tab on the bottom right of the {{config.extra.arcana.wallet_name}} to see wallet transaction activity and notifications.

The wallet notification screen displays a list of different blockchain transaction activities that were initiated by the app or the user. You can see the NFT 'Send' transactions carried out by the wallet address. Only the activity for the current user login session is displayed: 

<img class="an-screenshots-noeffects" src="/img/an_wallet_combined_notify.png" width="20%"/><br></br><br></br>

Once a send NFT transaction is confirmed, it is processed. On completion, it will show up as 'success' in the **Notification Tab**.

<img class="an-screenshots-noeffects" src="/img/an_wallet_nft_activity.png" width="20%"/><br></br><br></br>

In the **Notifications Tab**, you can select a transaction and click the downward arrow :fontawesome-solid-caret-down: to view its details.

<img class="an-screenshots-noeffects" src="/img/an_wallet_combined_notification_details_send_nft.png" width="20%"/><br></br><br></br>

<!--

### Filter Activity

You can view all activities in the list or filter them based on whether the blockchain transactions were initiated by the user or the app. Click on the filter icon and choose the desired option.

<img class="an-screenshots-noeffects" src="/img/an_wallet_combined_notify_filter_nav_options.png" width="40%"/><br></br><br></br>

-->

**That is all!**  :material-party-popper:

*You are all set to manage your NFTs using the {{config.extra.arcana.wallet_name}}.*

## What's Next?

You can use {{config.extra.arcana.wallet_name}} UI to sign blockchain transactions, send and receive native, ERC20, or custom tokens, and [[index-wallet-user-guide| more]].

## See also

* [{{config.extra.arcana.wallet_name}} capabilities]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md)
* [[index-wallet-user-guide|Using Web3 wallet operations]]
* [[use-wallet-ui-to-manage-tokens|Managing tokens with Arcana wallet]]
