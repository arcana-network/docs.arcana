---
alias: use-wallet-to-manage-nfts
title: 'Manage NFTs'
description: 'Web3 app users can view NFT details, send NFTs, monitor NFT transaction activity done via the Arcana wallet and manually add NFTs for chains that are not supported via Ankr.'
arcana:
  root_rel_path: ../..
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

To view the **NFT Assets** associated with the wallet address and the selected blockchain network, click the <img src="/img/icons/an_wallet_nft_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_nft_icon_dark.png#only-dark" width="20"/> 'NFT' tab at the bottom of the {{config.extra.arcana.wallet_name}}.

Scroll down to browse through the NFTs. You can see a list of NFT thumbnails for each NFT that is associated with the wallet address on the current active blockchain network.
      
<img class="an-screenshots-noeffects" src="/img/an_wallet_nft_asset_thumbnail.gif" width="35%"/><br></br><br></br>

!!! an-tip "Auto-fetching of NFTs"

      The {{config.extra.arcana.wallet_name}} automatically fetches the NFTs associated with the wallet address and displays them as thumbnails in the **NFT Assets** tab. This feature is supported via [Ankr APIs](https://www.ankr.com/docs/advanced-api/overview/) and works only for the NFTs minted on the blockchains supported by Ankr. {% include "./text-snippets/supported_nft_autofetch_chains.md" %}

## View NFT Details

In the **NFT** tab, browse and select the NFT thumbnail to view its details. All the NFT metadata including its description and attributes can be viewed in the details.

<img class="an-screenshots-noeffects" src="/img/an_wallet_nft_details.gif" width="35%"/><br></br><br></br>

## Send NFTs

You can transfer NFTs to a different wallet address. Browse and click the NFT thumbnail. IN the NFT details section, click the :fontawesome-solid-paper-plane: icon and initiate the 'Send NFT' workflow. Specify the receiver's address, and the gas fee details before clicking **Preview**.

<img class="an-screenshots-noeffects" src="/img/an_wallet_nft_send.gif" width="35%"/><br></br><br></br>

After clicking **Preview**, the user can view the NFT send request transaction details, use the back button to edit the gas or the other details and finally either reject or confirm the send transaction.

## Search NFT

If you don't see the NFT you wish to view or transfer in the <img src="/img/icons/an_wallet_nft_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_nft_icon_dark.png#only-dark" width="20"/> NFT Assets tab of the wallet, you can either scroll down or search for it using the search bar.

<img class="an-screenshots-noeffects" src="/img/an_wallet_nft_search.png" width="35%"/><br></br><br></br>

## Receive NFTs

In the **Token Assets** tab click the QR code icon <img src="/img/icons/an_wallet_qr_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_qr_dark.png#only-dark" width="20"/>on the top right to display the wallet address and the QR code. Copy the wallet account address or the QR code and share it with the NFT sender for receiving an NFT.

<img class="an-screenshots-noeffects" src="/img/an_wallet_receive.gif" width="35%"/><br></br><br></br>

## Manage NFTs

The {{config.extra.arcana.wallet_name}} automatically fetches the NFTs associated with the wallet address for the chains that are supported by Ankr.  For non-supported chains, users can manually add the NFTs to the wallet through the **Manage NFT** feature.

To manually add the NFT, use the 'NFT' tab in the wallet and click **Manage**.

<img class="an-screenshots-noeffects" src="/img/an_wallet_nft_manage_nav.gif" width="35%"/><br></br><br></br>

The **Manage NFT** wallet UI is displayed.

<img class="an-screenshots-noeffects" src="/img/an_wallet_nft_manage.png" width="35%"/><br></br><br></br>

You can add, edit and update the NFT details. Note that the NFT collection name is automatically fetched and displayed once the correct collection contract address is entered. The NFT owner should have the same wallet address otherwise it cannot be manually added to the {{config.extra.arcana.wallet_name}}.

The NFT owner can delete an NFT. Only the manually added NFTs can be deleted from the wallet UI. Deleting the NFT simply removes it from the wallet, it does not destroy it. A user can always add it back as long as the ownership resides with the user.

### Add NFT Entry

Click **New** in the **Manage NFTs** wallet UI view to add an NFT. Provide requisite inputs and click **Save**.

<img class="an-screenshots-noeffects" src="/img/an_wallet_nft_add_nft.gif" width="35%"/><br></br><br></br>

The newly added NFT in displayed in the **Manage NFTs** screen.

### Modify NFT Entry

To edit or delete a manually added NFT, use the **Manage NFTs** wallet UI, and click the NFT to see a pen icon next to the selected entry.

<img class="an-screenshots-noeffects" src="/img/an_wallet_nft_entry.png" width="35%"/><br></br><br></br>

Click the pen to edit the NFT details. You can also delete the NFT and click **Save**.

<img class="an-screenshots-noeffects" src="/img/an_wallet_nft_entry_modify.png" width="35%"/><br></br><br></br>

## Monitor NFT Send Transaction

Click the <img src="/img/icons/an_wallet_notification_icon_light.png#only-light" width="20"/><img src="/img/icons/an_wallet_notification_icon_dark.png#only-dark" width="20"/> tab on the bottom right of the {{config.extra.arcana.wallet_name}} to see wallet transaction activity and notifications.

The wallet notification screen displays a list of different blockchain transaction activities that were initiated by the app or the user. You can see the NFT 'Send' transactions carried out by the wallet address. Only the activity for the current user login session is displayed.

<img class="an-screenshots-noeffects" src="/img/an_wallet_nft_send_activity.png" width="35%"/><br></br><br></br>

Once the send NFT transaction is confirmed, it is processed. Select the NFT send transaction and click the downward arrow :fontawesome-solid-caret-down: to view its details.

<img class="an-screenshots-noeffects" src="/img/an_wallet_combined_notification_details_send_nft.png" width="35%"/><br></br><br></br>

**That is all!**  :material-party-popper:

*You are all set to manage your NFTs using the {{config.extra.arcana.wallet_name}}.*

## What's Next?

You can use {{config.extra.arcana.wallet_name}} UI to sign blockchain transactions, send and receive native, ERC20, or custom tokens, and [[index-wallet-user-guide| more]].

## See also

* [{{config.extra.arcana.wallet_name}} capabilities]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md)
* [[index-wallet-user-guide|Using Web3 wallet operations]]
* [[use-wallet-ui-to-manage-tokens|Managing tokens with Arcana wallet]]
