---
search:
  exclude: true
alias: integrate-shardeum
title: 'Using Shardeum with Arcana Auth'
description: 'This guide explains how app developers can programmatically integrate with Arcana Auth SDK and allow users to work with Shardeum blockchain network.'
arcana:
  root_rel_path: ../..
---

# Using Shardeum with {{config.extra.arcana.product_name}}

Web3 applications can integrate with the {{config.extra.arcana.sdk_name}} to authenticate users via social providers or passwordless login. Developers can easily enable authenticated users to access the {{config.extra.arcana.wallet_name}} instantly and use it to sign blockchain transactions on Shardeum and other supported networks.

Arcana Auth comes pre-configured with the Shardeum Sphinx 1.x network. Users will see the Shardeum network once they log into a Web3 app that is integrated with the {{config.extra.arcana.sdk_name}} and they can use the Shardeum network out of the box.

In this guide, you will learn how developers can integrate a Web3 app with the {{config.extra.arcana.sdk_name}} and enable authenticated users to sign blockchain transactions using the Shardeum Network and the  {{config.extra.arcana.wallet_name}}. Developers can also programmatically add and switch to other Shardeum network flavors that are not present in the pre-configured network list.

## Step 1: Register and Configure App

Use the {{config.extra.arcana.dashboard_name}} to register and configure Web3 applications. Each registered application is assigned a unique **{{config.extra.arcana.app_address}}**. Follow the instructions in the [[configure-auth|How to Register and Configure Applications Guide]]. Save the **{{config.extra.arcana.app_address}}** as it will be required to integrate with the {{config.extra.arcana.sdk_name}} later.

### Configure Shardeum Network

The Shardeum network is pre-configured in the Arcana Auth product. But it is not set as the default network.

To ensure that the {{config.extra.arcana.wallet_name}} shows up for an authenticated user with a pre-configured Shardeum Network, the developer simply needs to select it from the pre-configured chains list and set it as the default network using the {{config.extra.arcana.dashboard_name}}.

<img src="/img/an_db_preconfig_shm_network.gif" width="85%"/>

If required, other Shardeum network flavors such as Liberty can also be manually added to the list of pre-configured networks using the dashboard.

<img src="/img/an_db_add_shm_network.gif" width="85%"/>

## Step 2: Install `{{config.extra.arcana.auth_sdk_pkg_name}}`

{% include "./code-snippets/auth_install.md" %}

## Step 3: Create and Initialize the `AuthProvider`

{% include "./code-snippets/import_auth.md" %}

The {{config.extra.arcana.sdk_name}} provides a standard Ethereum provider which can be used to make blockchain calls for any supported blockchain networks including the Shardeum Network.

{% include "./code-snippets/new_auth_shm.md" %}

Initialize the newly instantiated `AuthProvider`. 

{% include "./code-snippets/init_auth.md" %}

Web3 app developers can easily onboard users via the built-in, plug-and-play login UI to quickly allow authenticated users to use the {{config.extra.arcana.wallet_name}} and sign blockchain transactions. Once the developer has integrated the Web3 app with the {{config.extra.arcana.sdk_name}} and plugged in the required code to onboard users, a user must log into the app to access the {{config.extra.arcana.wallet_name}}. 

{% include "./code-snippets/auth_plugnplay.md" %}

!!! caution "Onboarding Options"

      The plug-and-play default authentication UI will **only** display only those social providers that are configured by the developer using the {{config.extra.arcana.dashboard_name}}. If no social providers are configured, passwordless login is the only option that shows up.       

## Step 4: Programmatically Use Shardeum Network

Web3 app developers can integrate the app with the {{config.extra.arcana.sdk_name}} and call `wallet_addEthereumChain` JSON-RPC method to programmatically add other flavors of Shardeum networks in the list of pre-configured networks via the  {{config.extra.arcana.dashboard_name}}. They can also switch to the required network via the `wallet_switchEthereumChain` call. Make sure that the requisite hooks for JSON-RPC are set up in the app.

### Enable JSON-RPC Hooks

{% include "./code-snippets/auth_json_rpc_setup.md" %}

### Add Network 

{% include "./code-snippets/auth_add_shm_ntwk.md" %}

### Switch Network

{% include "./code-snippets/auth_switch_shm_ntwk.md" %}

## Web3 Wallet Operations

Now that the {{config.extra.arcana.wallet_name}} is all set to use the Shardeum Network, the developer can plug in any of the Web3 wallet operations and enable the authenticated users to perform blockchain operations using the Shardeum network.

### Get Accounts

Refer to the code below to fetch the authenticated user's wallet address to display in the app:

{% include "./code-snippets/auth_get_account.md" %}

### Get Balance

Use this code to fetch the wallet address balance details:

{% include "./code-snippets/auth_get_balance.md" %}

### Get User Information

Get the user information via the social provider token directly in the authenticated user's context and use it in the app. Note, the Arcana Network does not store this information anywhere. 

{% include "./code-snippets/auth_get_user_info.md" %}

### Send Transaction

{% include "./code-snippets/auth_sendtransaction.md" %}

### Get Public Key

{% include "./code-snippets/auth_get_publickey.md" %}

### Send SHM

{% include "./code-snippets/auth_sendtransaction.md" %}

The {{config.extra.arcana.wallet_name}} springs into action when a user initiates a 'send token' transaction through the wallet UI or the application code triggers the blockchain send transaction programmatically. The following figure shows how users can input the token amount, gas, and recipient details in the {{config.extra.arcana.wallet_name}} UI for sending tokens.

<img src="/img/an_wallet_send_shm.gif" width="35%"/>

The wallet displays a 'Preview' button to let the user review transaction details before issuing it. Once the user confirms, the send token transaction is executed on the configured Shardeum blockchain network.

## See Also

* [[index-arcana-wallet|{{config.extra.arcana.wallet_name}} Developers' Guide]]
* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]
* {% include "./text-snippets/authsdkref_url.md" %}
