---
alias: configure-wallet-chains
title: 'Configure Wallet Chains'
description: 'Web3 app developers can manage and specify the subset of supported chains that are displayed out of the box in the wallet and assign one of the chains as the default chain.'
arcana:
  root_rel_path: ../..
---

# Configure Wallet Chains

In this tutorial, you will learn how web3 app developers can control which subset of supported chains are displayed in the {{config.extra.arcana.wallet_name}} UI and how to specify the default chain.  

## Prerequisites

* Make sure you can access the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}

* Use the [{{config.extra.arcana.dashboard_name}}]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md) to [[configure-auth|register the app]].

## Steps

*Managing {{config.extra.arcana.wallet_name}} chains displayed in the wallet UI for a Web3 app integrated with the {{config.extra.arcana.sdk_name}} is simple!*

Log in to the {{config.extra.arcana.dashboard_name}} and click your registered app entry from the 'Manage Apps' screen. Click **Configure** in the LHS navigation area. Select **Chain Management** to add the specifics for the chain.

![Chain Management Nav](/img/an_db_chains_mngt_nav.png){.an-screenshots}

This will bring up the chain configuration screen as shown below:

![Chain Management Settings](/img/an_db_chain_mngt_options.png){.an-screenshots}

### Step 1: Check if the Chain Exists

The {{config.extra.arcana.sdk_name}} has a default subset of blockchain networks that appear in the wallet UI. In this default subset, **Ethereum Mainnet** is set as the default chain displayed in the wallet UI.

<img src="/img/an_db_default_subset_wallet_chains.gif" width="30%" alt="Default subset of chains in wallet UI"/>

For the latest information on the default subset, see [{{config.extra.arcana.sdk_name}} Reference Guide](https://authsdk-ref-guide.netlify.app/enums/chain).

If the chain you wish to make default is already listed in the subset of chains that are configured to be displayed by the {{config.extra.arcana.wallet_name}}, simply click it and use the instructions in [Step 3 below](#step-3-make-chain-default-optional) to specify it as the default chain. Otherwise, first, add that chain and then make it the default chain for the wallet.

### Step 2: Add Chain

Click **Add Chain** button on the top right of the 'Chain Managemet' dashboard screen.

{% include "./text-snippets/add_chain_specs.md" %}

![Configure new chain](/img/an_db_configure_new_chain_shardeum.png){.an-screenshots}

!!! caution "Supported Chains"

      Only EVM-compatible chains are supported by the {{config.extra.arcana.product_name}} product. To learn more, see [[state-of-the-arcana-auth#supported-blockchains|supported blockchains]].

Once you click **Save**, the newly added chain will be displayed in the dashboard.

![Updated chain list](/img/an_db_view_updated_chain_list_shardeum.png){.an-screenshots}

The newly added chain is configured for the {{config.extra.arcana.wallet_name}}. When the app user authenticates and the wallet is displayed in the app's context, the user will see the newly added chain when they click on the dropdown in the wallet UI.

### Step 3: Make Chain Default (Optional)

Developers can add and make the chain default by simply clicking on the entry in the dashboard and choosing **Set as Default**. 

![Set default chain](/img/an_db_set_default_chain_shardeum.png){.an-screenshots}

Once a chain is made default, you will see it marked as *Default* in the dashboard. The figure below shows that Shardeum Sphinx chain has been successfully set as the default chain by the developer.

![Default chain](/img/an_db_default_chain_shardeum.png){.an-screenshots}

**That's all!** :material-party-popper:

This is how the developer can control and manage which subset of chains is displayed in the {{config.extra.arcana.wallet_name}} UI and how one of the chains in the subset can be marked as default so that an authenticated user sees it in the wallet.

## What's Next?

Besides controlling and managing the chains via the {{config.extra.arcana.dashboard_name}} configuration settings, a developer can also add new chains programmatically to the wallet via the `wallet_addEthereumChain` method. To do that, the app must be integrated with the {{config.extra.arcana.sdk_name}} and the `AuthProvider` initialized before calling any of the SDK functions. For details refer to the [[web-auth-usage-guide#wallet_addethereumchain|{{config.extra.arcana.wallet_name}} Usage Guide]].

## See also

* [[web-auth-error-msg|{{config.extra.arcana.sdk_name}} Errors]]
* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]
* {% include "./text-snippets/authsdkref_url.md" %}
