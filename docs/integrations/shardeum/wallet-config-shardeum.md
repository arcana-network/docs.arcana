---
search:
  exclude: true
alias: wallet-add-shardeum
title: 'Add Shardeum network using the Arcana wallet UI'
description: 'Web3 apps that are integrated with the Arcana Auth SDK can enable the app users to access Arcana wallet and add Shardeum network using the wallet UI interfaces, manually.'
arcana:
  root_rel_path: ../..
---

# {{config.extra.arcana.wallet_name}} UI: Use Shardeum Network

This guide is meant for the {{config.extra.arcana.wallet_name}} users. It provides instructions on how to use the Shardeum Network to the {{config.extra.arcana.wallet_name}} UI for signing blockchain transactions via the Shardeum Network.

!!! note "Using Pre-configured Shardeum Network"

      By default, Shardeum Sphinx is one of the blockchain networks that comes pre-configured for the Arcana Auth product. Developers can set it as the default network using the {{config.extra.arcana.dashboard_name}} at the time of registering and configuring the Web3 app. By doing this, the developers can ensure that the authenticated users can automatically access the Shardeum network in the {{config.extra.arcana.wallet_name}} UI. In this case, there is no need for the user to add, configure and set up Shardeum Network. However, if the developer has not set Shardeum as the default network, users can always configure it using the wallet UI later.

## Step 1:  Log in to the App

To perform any blockchain operation using the Shardeum Network, and without having to set up a wallet beforehand, users must first log into the Web3 app integrated with the {{config.extra.arcana.sdk_name}} and authenticate themselves. After a successful log in, the {{config.extra.arcana.wallet_name}} is displayed in the minimized state within the Web3 app's context. Click on it to display the wallet in its maximized state within the app's context. This will enable them to access various Web3 operations supported by the {{config.extra.arcana.wallet_name}} UI.

<img src="/img/an_shm_wallet_demo_app.png" width="85%"/>

## Step 2: Select Shardeum Network

Refer to the top right network dropdown in the {{config.extra.arcana.wallet_name}} UI. You will see a list of pre-configured networks for use. If the requisite Shardeum Network is displayed, simply click on it to select it and proceed with the {{config.extra.arcana.wallet_name}} operations.

<img src="/img/an_wallet_shm_preconfig_list.gif" width="35%"/>

If the requisite Shardeum Network flavor is not listed, user can manually add it. After manual addition, the network will show up as the default selected network in the {{config.extra.arcana.wallet_name}} UI. The only caveat is, manually added networks do not persist across user logins in the app.  Only the ones which the app developer has configured will show up once the user logs in to the Web3 app integrated with the {{config.extra.arcana.sdk_name}}.

<img src="/img/an_wallet_shm_add_list.gif" width="35%"/>

To manually add the Shardeum network via the wallet UI, refer to the instructions in the {{config.extra.arcana.wallet_name}} User Guide for [[arcana-wallet-user-guide#addselect-a-network|adding a network]]. Specify the [latest Shardeum Network configuration details](https://docs.shardeum.org/network/endpoints) to manually add the network.

## See Also

* [[arcana-wallet-user-guide|{{config.extra.arcana.wallet_name}} Users' Guide]]
