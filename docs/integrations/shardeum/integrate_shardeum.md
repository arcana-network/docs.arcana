---
arcana:
  root_rel_path: ../..
---

# Use {{config.extra.arcana.sdk_name}} with the Shardeum Network

Web3 applications can integrate with the {{config.extra.arcana.sdk_name}} to authenticate users via social providers or passwordless login. Developers can easily enable authenticated users to access the {{config.extra.arcana.wallet_name}} instantly and use it to sign blockchain transactions.

The {{config.extra.arcana.sdk_name}} provides a standard Ethereum provider which can be used to make blockchain calls for any supported blockchain networks including the Shardeum Network.

In this guide, you will learn how to integrate a Web3 app with the {{config.extra.arcana.sdk_name}} and enable authenticated users to sign blockchain transactions using the Shardeum Network.

## Step 1: Register and Configure App

Use the {{config.extra.arcana.dashboard_name}} to register and configure Web3 applications. Each registered application is assigned a unique **{{config.extra.arcana.app_address}}**. Follow the instructions in the [How to Register and Configure Applications Guide]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md). Save the **{{config.extra.arcana.app_address}}** as it will be required to integrate with the {{config.extra.arcana.sdk_name}} later.

## Step 2: Install `{{config.extra.arcana.auth_sdk_pkg_name}}`

{% include "./code-snippets/auth_install.md" %}

## Step 3: Create and Initialize the `AuthProvider`

{% include "./code-snippets/import_auth.md" %}

{% include "./code-snippets/new_auth_shm.md" %}

Initialize the newly instantiated `AuthProvider`. 

{% include "./code-snippets/init_auth.md" %}

To enable the {{config.extra.arcana.wallet_name}} after integrating the Web3 app with the {{config.extra.arcana.sdk_name}}, a user must log into the app. Web3 app developers can easily onboard users via the built-in, plug-and-play login UI to quickly allow authenticated users to use the {{config.extra.arcana.wallet_name}} and sign blockchain transactions.

{% include "./code-snippets/auth_plugnplay.md" %}

!!! caution "Onboarding Options"

      The plug-and-play default authentication UI will **only** display only those social providers that are configured by the developer using the {{config.extra.arcana.dashboard_name}}. If no social providers are configured, passwordless login is the only option that shows up.       

## Step 4: Configure & Switch to the Shardeum Network

To ensure that the {{config.extra.arcana.wallet_name}} shows up for an authenticated user with preconfigured Shardeum Network, the developer must configure, and add Shardeum Network programmatically by using the `wallet_addEthereumChain` JSON-RPC method and then switch to it via wallet_switchEthereumChain JSON-RPC method. Set up requisite hooks for JSON-RPC.

### Enable JSON-RPC Hooks

{% include "./code-snippets/auth_json_rpc_setup.md" %}

### Add Shardeum Network

{% include "./code-snippets/auth_add_shm_ntwk.md" %}

<img alt="wallet SHM add network" src="/img/wallet_shm_add_ntwk.png" width="50%"/>

### Switch to the Shardeum Network

{% include "./code-snippets/auth_switch_shm_ntwk.md" %}

<img alt="wallet SHM switch network" src="/img/wallet_shm_switch_ntwk.png" width="50%" />

## Other Web3 Wallet Operations

Now that the {{config.extra.arcana.wallet_name}} is configured to use the Shardeum Network, the developer can plug in any of the Web3 wallet operations and enable the authenticated users to perform blockchain operations using the Shardeum network.

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

The {{config.extra.arcana.wallet_name}} springs into action when a user initiates a 'send token' transaction through the wallet UI or the application code triggers the blockchain send transaction programmatically. The following figure shows the {{config.extra.arcana.wallet_name}} screen that shows up allowing users to input the token amount, gas, and recipient details for sending tokens.

<img src="/img/an_wallet_send_shm.png"/>

The wallet displays a 'Proceed' button to allow for user confirmation before the send token transaction is executed on the configured blockchain network. 

## See Also

* [{{config.extra.arcana.wallet_name}} Developers' Guide]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md)
* [{{config.extra.arcana.sdk_name}} Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md)
* {% include "./text-snippets/authsdkref_url.md" %}
