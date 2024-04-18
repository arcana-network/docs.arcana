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

To view the **NFT Assets** associated with the wallet address and the selected blockchain network, click the <img src="{{config.extra.arcana.img_dir}}/icons/an_wallet_nft_icon_light.{{config.extra.arcana.img_png}}#only-light" width="20"/><img src="{{config.extra.arcana.img_dir}}/icons/an_wallet_nft_icon_dark.{{config.extra.arcana.img_png}}#only-dark" width="20"/> 'NFT' tab at the bottom of the {{config.extra.arcana.wallet_name}}.

Scroll down to browse through the NFTs. You can see a list of NFT thumbnails for each NFT that is associated with the wallet address on the current active blockchain network.
      
<figure markdown="span">
  <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_nft_asset_thumbnail.gif" alt="View NFTs"/>
  <figcaption>View NFTs</figcaption>
</figure>

!!! an-tip "Auto-fetching of NFTs"

      The {{config.extra.arcana.wallet_name}} automatically fetches the NFTs associated with the wallet address and displays them as thumbnails in the **NFT Assets** tab. This feature is supported via [Ankr APIs](https://www.ankr.com/docs/advanced-api/overview/) and works only for the NFTs minted on the blockchains supported by Ankr. {% include "./text-snippets/supported_nft_autofetch_chains.md" %}

## View NFT Details

In the **NFT** tab, browse and select the NFT thumbnail to view its details. All the NFT metadata including its description and attributes can be viewed in the details.

<figure markdown="span">
  <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_nft_details.gif" alt="NFT Metadata"/>
  <figcaption>NFT Metadata</figcaption>
</figure>

## Send NFTs

You can transfer NFTs to a different wallet address. Browse and click the NFT thumbnail. IN the NFT details section, click the :fontawesome-solid-paper-plane:{ .icon-color } icon and initiate the 'Send NFT' workflow. Specify the receiver's address, and the gas fee details before clicking **Preview**.

<figure markdown="span">
  <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_nft_send.gif" alt="Send NFT"/>
  <figcaption>Send NFT</figcaption>
</figure>

After clicking **Preview**, the user can view the NFT send request transaction details, use the back button to edit the gas or the other details and finally either reject or confirm the send transaction.

## Search NFT

If you don't see the NFT you wish to view or transfer in the <img src="{{config.extra.arcana.img_dir}}/icons/an_wallet_nft_icon_light.{{config.extra.arcana.img_png}}#only-light" width="20"/><img src="{{config.extra.arcana.img_dir}}/icons/an_wallet_nft_icon_dark.{{config.extra.arcana.img_png}}#only-dark" width="20"/> NFT Assets tab of the wallet, you can either scroll down or search for it using the search bar.

<figure markdown="span">
  <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_nft_search.{{config.extra.arcana.img_png}}" alt="Search NFT"/>
  <figcaption>Search NFT</figcaption>
</figure>

## Receive NFTs

In the **Token Assets** tab click the QR code icon <img src="{{config.extra.arcana.img_dir}}/icons/an_wallet_qr_light.{{config.extra.arcana.img_png}}#only-light" width="20"/><img src="{{config.extra.arcana.img_dir}}/icons/an_wallet_qr_dark.{{config.extra.arcana.img_png}}#only-dark" width="20"/>on the top right to display the wallet address and the QR code. Copy the wallet account address or the QR code and share it with the NFT sender for receiving an NFT.

<figure markdown="span">
  <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_receive.gif" alt="Receive NFTs"/>
  <figcaption>Receive NFTs</figcaption>
</figure>

## Manage NFTs

The {{config.extra.arcana.wallet_name}} automatically fetches the NFTs associated with the wallet address for the chains that are supported by Ankr.  For non-supported chains, users can manually add the NFTs to the wallet through the **Manage NFT** feature.

To manually add the NFT, use the 'NFT' tab in the wallet and click **Manage**.

<figure markdown="span">
  <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_nft_manage_nav.gif" alt="Manage NFT"/>
  <figcaption>Manage NFT</figcaption>
</figure>

The **Manage NFT** wallet UI is displayed.

<figure markdown="span">
  <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_nft_manage.{{config.extra.arcana.img_png}}" alt="Add/Update NFT"/>
  <figcaption>Add/Update NFT</figcaption>
</figure>

You can add, edit and update the NFT details. Note that the NFT collection name is automatically fetched and displayed once the correct collection contract address is entered. The NFT owner should have the same wallet address otherwise it cannot be manually added to the {{config.extra.arcana.wallet_name}}.

The NFT owner can delete an NFT. Only the manually added NFTs can be deleted from the wallet UI. Deleting the NFT simply removes it from the wallet, it does not destroy it. A user can always add it back as long as the ownership resides with the user.

### Add NFT Entry

Click **New** in the **Manage NFTs** wallet UI view to add an NFT. Provide requisite inputs and click **Save**.

<figure markdown="span">
  <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_nft_add_nft.gif" alt="Add NFT"/>
  <figcaption>Add NFT</figcaption>
</figure>

The newly added NFT is displayed in the **Manage NFTs** screen.

### Modify NFT Entry

To edit or delete a manually added NFT, use the **Manage NFTs** wallet UI, and click the NFT to see a pen icon next to the selected entry.

<figure markdown="span">
  <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_nft_entry.{{config.extra.arcana.img_png}}" alt="Modify NFT Metadata"/>
  <figcaption>Modify NFT Metadata</figcaption>
</figure>

Click the pen to edit the NFT details. You can also delete the NFT and click **Save**.

<figure markdown="span">
  <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_nft_entry_modify.{{config.extra.arcana.img_png}}" alt="Save NFT updates"/>
  <figcaption>Save NFT updates</figcaption>
</figure>

## Monitor NFT Send Transaction

Click the <img src="{{config.extra.arcana.img_dir}}/icons/an_wallet_notification_icon_light.{{config.extra.arcana.img_png}}#only-light" width="20"/><img src="{{config.extra.arcana.img_dir}}/icons/an_wallet_notification_icon_dark.{{config.extra.arcana.img_png}}#only-dark" width="20"/> tab on the bottom right of the {{config.extra.arcana.wallet_name}} to see wallet transaction activity and notifications.

The wallet notification screen displays a list of different blockchain transaction activities that were initiated by the app or the user. You can see the NFT 'Send' transactions carried out by the wallet address. Only the activity for the current user login session is displayed.

<figure markdown="span">
  <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_nft_send_activity.{{config.extra.arcana.img_png}}" alt="Monitor NFT Send Activity"/>
  <figcaption>Monitor NFT Send Activity</figcaption>
</figure>

Once the send NFT transaction is confirmed, it is processed. Select the NFT send transaction and click the downward arrow :fontawesome-solid-caret-down:{ .icon-color } to view its details.

<figure markdown="span">
  <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_wallet_combined_notification_details_send_nft.{{config.extra.arcana.img_png}}" alt="NFT Send Details"/>
  <figcaption>NFT Send Details</figcaption>
</figure>

**That is all!**  :material-party-popper:

*You are all set to manage your NFTs using the {{config.extra.arcana.wallet_name}}.*

## What's Next?

You can use {{config.extra.arcana.wallet_name}} UI to sign blockchain transactions, send and receive native, ERC20, or custom tokens, and [[index-wallet-user-guide| more]].

## See also

* [{{config.extra.arcana.wallet_name}} capabilities]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md)
* [[index-wallet-user-guide|Using Web3 wallet operations]]
* [[use-wallet-ui-to-manage-tokens|Managing tokens with Arcana wallet]]
