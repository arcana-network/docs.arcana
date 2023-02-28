---
arcana:
  root_rel_path: ../..
---

# Integrate Arcana Auth with the Shardeum Network

Web3 applications can integrate with the Arcana Auth SDK to authenticate users via social providers or passwordless login. Developers can easily enable authenticated users to access the Arcana wallet instantly and use it to sign blockchain transactions.

Arcana Auth SDK provides standard Ethereum provider which can be used to make blockchain calls any supported blockchains including the Shardeum Network.

In this guide, you will learn how to integrate a Web3 app with the Auth SDK and enable the authenticated app users to use Shardeum Network.

## Step 1: Register and Configure App

Use Arcana Developer Dashboard to register and configure Web3 applications. Each registered application is assigned a unique **{{config.extra.arcana.app_address}}**. Follow the instructions in the [How to Register and Configure Applications Guide]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md). Save the **{{config.extra.arcana.app_address}}** as it will be required to integrate with the Arcana Auth SDK later.

## Step 2: Install Auth SDK

{% include "./code-snippets/auth_install.md" %}

## Step 3: Create and Initialize the AuthProvider

{% include "./code-snippets/import_auth.md" %}

{% include "./code-snippets/new_auth_shm.md" %}

Initialize the newly instantiated `AuthProvider`. 

{% include "./code-snippets/init_auth.md" %}

To enable Arcana wallet after integrating the Web3 app with the Auth SDK, a user must log into the app. Web3 application developers can use Arcana plug-and-play authentication to quickly onboard users and allow them to use the Arcana wallet and sign blockchain transactions.

{% include "./code-snippets/auth_plugnplay.md" %}

!!! caution "Onboarding Options"

      The plug-and-play default authentication UI will **only** display only those social providers that are configured by the developer using the Arcana Developer Dashboard. If no social providers are configured, passwordless login is the only option that shows up.       

## Step 4: Configure & Switch to the Shardeum Network

To ensure that the Arcana wallet shows up for an authenticated user with pre-configured Shardeum Network, the developer must configure, add Shardeum Network programmatically by using wallet_addEthereumChain JSON-RPC method and then switch to it via wallet_switchEthereumChain JSON-RPC method.

### Enable JSON-RPC Hooks

{% include "./code-snippets/auth_json_rpc_setup.md" %}

### Add Shardeum Network

{% include "./code-snippets/auth_add_shm_ntwk.md" %}

### Switch to the Shardeum Network

{% include "./code-snippets/auth_switch_shm_ntwk.md" %}

## Other Web3 Wallet Operations

Now that the Arcana wallet is configured to use the Shardeum Network, the developer can plug in any of the Web3 wallet operations and enable the authenticated users to perform blockchain operations using the Shardeum network.

### Get Accounts

Refer to the code below to fetch the authenticated user's wallet address to display in the app:

{% include "./code-snippets/auth_get_account.md" %}

### Get Balance

Use this code to fetch the wallet address balance details:

{% include "./code-snippets/auth_get_balance.md" %}

### Get User Information

For logged in users, you can get the user information via the social provider token directly and the Arcana Network does not store this information anywhere. 

{% include "./code-snippets/auth_get_user_info.md" %}

### Send Transaction

{% include "./code-snippets/auth_sendtransaction.md" %}

### Get Public Key

{% include "./code-snippets/auth_get_publickey.md" %}

### Send SHM

{% include "./code-snippets/auth_sendtransaction.md" %}

The Arcana wallet springs into action when a user initiates a 'send token' transaction through the wallet UI or the application code triggers the blockchain send transaction programmatically. The following figure shows the Arcana wallet screen that shows up allowing users to input the token amount, gas, and recipient details for sending tokens.

<img src="/img/an_wallet_send_shm.png"/>

The wallet displays a 'Proceed' button to allow for user confirmation before the send token transaction is executed on the configured blockchain network. 

<img src="/img/an_wallet_send.png" width="300"/>

## See Also

* [Auth SDK Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md)
* {% include "./text-snippets/authsdkref_url.md" %}
* [Developers' Guide for enabling Arcana wallet]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md)