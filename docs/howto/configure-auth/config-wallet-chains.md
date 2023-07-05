---
alias: configure-wallet-chains
title: 'Configure Wallet Chains'
description: 'Web3 app developers can manage and specify the subset of supported chains that are displayed out of the box in the wallet and assign one of the chains as the default chain.'
arcana:
  root_rel_path: ../..
---

# Configure Wallet Chains

Web3 app developers can use {{config.extra.arcana.product_name}} product to easily onboard users with Web3-like social login and allow authenticated users to sign blockchain transactions. The authenticated users can instantly access the built-in {{config.extra.arcana.wallet_name}} UI in the app's context.

The {{config.extra.arcana.product_name}} product is pre-configured with a subset of chains from the list of [[state-of-the-arcana-auth#supported-blockchains|supported blockchain networks]]. Ethereum is set as the default chain. By default, this pre-configured subset of supported blockchain networks, with Ethereum set as the default chain, is displayed in the {{config.extra.arcana.wallet_name}} UI.

Developers can choose to change the default chain subset settings using the {{config.extra.arcana.dashboard_name}}. They can also add/remove chains from the list of pre-configured chains.

!!! caution "Wallet UI Chain Settings"

      Any authenticated Web3 app user can access the {{config.extra.arcana.wallet_name}} in the app's context. The built-in {{config.extra.arcana.wallet_name}} UI allows users to change the default chain setting or add/edit the pre-configured blockchain network list. Note that any changes or updates done by the user are valid only for the current login session. When the user logs in again, these changes do not persist.  However, any configuration settings for chain management by the app developer are persistent until modified by the developer. 

## Prerequisites

* Make sure you can access the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}

* The [[configure-auth| app must be registered]] using the [[concept-arcana-dashboard| {{config.extra.arcana.dashboard_name}}]].

## Steps

*Managing the subset of chains displayed for the authenticated user in the {{config.extra.arcana.wallet_name}} UI for a Web3 app integrated with the {{config.extra.arcana.sdk_name}} is simple!*

Log in to the {{config.extra.arcana.dashboard_name}} and click your registered app entry from the 'Manage Apps' screen. Click **Configure** in the LHS navigation area. Select **Chain Management** to configure the default subset of supported chains.

![Chain Management Nav](/img/an_db_chains_mngt_nav.png){.an-screenshots}

This will bring up the chain configuration UI as shown below:

![Chain Management Settings](/img/an_db_chain_mngt_options.png){.an-screenshots}

When a user logs into a Web3 app that is integrated with the {{config.extra.arcana.sdk_name}}, this list of chains is displayed in the {{config.extra.arcana.wallet_name}} UI dropdown list with **Ethereum Mainnet** as the default chain.

<img src="/img/an_db_default_subset_wallet_chains.gif" width="30%" alt="Default subset of chains in wallet UI"/>

### Step 2: Edit Default Chain

Developers can change the default chain from Ethereum to a different one in the list by using the {{config.extra.arcana.dashboard_name}}. Figure below shows how Polygon is set as the default chain instead of Ethereum.

![Change default chain](/img/an_db_set_default_chain.gif){.an-screenshots}

If the chain that requires to be set as default for the Web3 app is not listed, developers can add it and then set it as the default chain.

### Step 3: Add Chain

Click **Add Chain** button on the top right of the 'Chain Management' dashboard screen.

{% include "./text-snippets/add_chain_specs.md" %}

![Configure new chain](/img/an_db_configure_new_chain.gif){.an-screenshots}

!!! caution "Supported Chains"

      Only EVM-compatible chains are supported by the {{config.extra.arcana.product_name}} product. To learn more, see [[state-of-the-arcana-auth#supported-blockchains|supported blockchains]].

Once you click **Save**, the newly added chain will be displayed in the dashboard.

![Updated chain list](/img/an_db_view_updated_chain_list_polygon.png){.an-screenshots}

After the developer configures a new chain using the {{config.extra.arcana.dashboard_name}}, the authenticated app users will see this newly added chain listed in the {{config.extra.arcana.wallet_name}} UI dropdown list on the next login. 

The figure below shows the newly added chain displayed in the {{config.extra.arcana.wallet_name}} UI.

![Display new chain in wallet](/img/an_db_config_new_chain_show_wallet.gif){ .width_35pc}

**That's all!** :material-party-popper:

This is how the developer can control and manage which subset of chains is displayed in the {{config.extra.arcana.wallet_name}} UI and how one of the chains in the subset can be marked as default.

## What's Next?

Besides controlling and managing the chains via the {{config.extra.arcana.dashboard_name}} configuration settings, a developer can also add new chains programmatically to the wallet via the `wallet_addEthereumChain` method. To do that, the app must be integrated with the {{config.extra.arcana.sdk_name}} and the `AuthProvider` initialized before calling any of the SDK functions. For details refer to the [[web-auth-usage-guide#wallet_addethereumchain|{{config.extra.arcana.wallet_name}} Usage Guide]].

## See also

* [[web-auth-error-msg|{{config.extra.arcana.sdk_name}} Errors]]
* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]
* {% include "./text-snippets/authsdkref_url.md" %}
