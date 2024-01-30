---
alias: configure-wallet-chains
title: 'Manage Chains'
description: 'Web3 app developers can update the pre-configured list of supported blockchains shown out of the box in the wallet and assign one of the chains as the default chain.'
arcana:
  root_rel_path: ../..
---

# Manage Chains 

This guide will show you how to handle the list of chains that your app users can use to sign blockchain transactions.

{{config.extra.arcana.product_name}} works with all EVM-compatible blockchain networks and Solana, a [[concept-non-evm-chains|non-EVM chain]]. A subset of these supported chains including Solana is available as the default [[state-of-the-arcana-auth#supported-blockchains|pre-configured list]]. It is visible in the {{config.extra.arcana.dashboard_name}} and governs what chains are available in the {{config.extra.arcana.wallet_name}} UI. Ethereum is selected as the active chain in the list by default.

Developers can update this pre-configured list via the {{config.extra.arcana.dashboard_name}} or programmatically. Authenticated users can add other supported blockchain networks displayed in the {{config.extra.arcana.wallet_name}} UI. User-made changes to the blockchain list only last for the current session; they don't persist after logout. However, any extra chains added by the app developer remain across user logins. 

## Prerequisites

* Make sure you can access the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}

* The [[configure-auth| app must be registered]] using the [[concept-arcana-dashboard| {{config.extra.arcana.dashboard_name}}]].

*Managing the displayed list of pre-configured chains for authenticated users in {{config.extra.arcana.wallet_name}} UI within the Web3 app is simple!*

## Step 1: Dashboard Log-in

Log in to the {{config.extra.arcana.dashboard_name}} and click your registered app entry from the 'Manage Apps' screen. Click **Configure** in the LHS navigation area. Select **Chain Management** to configure the default subset of supported chains.

![Chain Management Nav](/img/an_db_chains_mngt_nav.png){.an-screenshots}

The chain configuration UI is displayed:

![Chain Management Settings](/img/an_db_chain_mngt_options.png){.an-screenshots}

## Step 2: Review Chains

Developers can enable either EVM chains or non-EVM chains in the context of a Web3 app integrated with {{config.extra.arcana.product_name}}. The **chain type** selection is a one-time setting during app registration and cannot be reconfigured later. While reviewing chains, you can see whether the app is configured to use EVM chains or only the non-EVM chains.

### EVM Chains

If you select EVM chain type, there are multiple blockchain network options that can be enabled for app users. 

![Chain Management EVM](/img/an_db_evm_only_preconfigured_list.gif){.an-screenshots}

The out-of-the-box list can be updated by the app developer. It governs the list of chains that are available out of the box and displayed in {{config.extra.arcana.wallet_name}} UI for authenticated app users. By default, for non-EVM chain type, **Ethereum** is set as the active chain by default.

<img class="width_35pc an-screenshots" src="/img/an_db_default_subset_wallet_chains.gif" alt="Default subset of chains in wallet UI"/>

### Non-EVM Chains

If you select [[concept-non-evm-chains|non-EVM chain type]] when registering the app, Solana is the only option displayed in the pre-configured list and app users can only sign using Solana blockchain networks.

![Chain Management Solana non EVM](/img/an_db_non_evm_solana_only_preconfigured_list.png){.an-screenshots}

See [[solana-dashboard-user-guide|how to setup Solana]] and [[solana-quick-start|Solana Quick Start Guide]] for more details.

## Step 3: Edit Default Active Chain

To switch the default active chain simply select the new chain in the {{config.extra.arcana.dashboard_name}} out-of-the-box list, click "..." ellipses and select the 'set as default' option. The figure below illustrates Polygon as the default active chain instead of Ethereum.

![Change default chain](/img/an_db_set_default_chain.gif){.an-screenshots}

!!! caution "Non-EVM Chains"

      If the chain type selected during app registration is Solana / non-EVM chain, then you will not see any EVM-compatible chains displayed in the dashboard. Developers can edit and choose a different chain as the default active chain, only from the list of displayed Solana chain options.

## Step 4: Add Chain

### EVM Chains

Click the **Add Chain** button on the top right of the 'Chain Management' dashboard screen. Any newly added chain is automatically set as the default chain displayed in the wallet UI.

{% include "./text-snippets/add_chain_specs.md" %}

![Configure new chain](/img/an_db_configure_new_chain.gif){.an-screenshots}

Once you click **Save**, the newly added chain will be displayed in the dashboard and also shown in the wallet UI once a user logs into the app.

![Updated chain list](/img/an_db_view_updated_chain_list_polygon.png){.an-screenshots}

![Display new chain in wallet](/img/an_db_config_new_chain_show_wallet.gif){ .width_35pc .an-screenshots}

### Non-EVM Chains

In the current release, only some selected non-EVM chains, [[solana-dashboard-user-guide|Solana blockchains, are supported]]. Support for other non-EVM chains will be added in the upcoming releases. Developers cannot arbitrarily add non-EVM chains to the out-of-the-box list in the dashboard.

To learn more about the list of supported chains, see [[state-of-the-arcana-auth#supported-blockchains|supported blockchains]].

**That's all!** :material-party-popper:

## What's Next?

Besides managing the pre-configured list of chains via the {{config.extra.arcana.dashboard_name}} configuration settings, a developer can also add other supported EVM-compatible chains programmatically to the wallet via the `wallet_addEthereumChain` method. To do that, the app must be integrated with the {{config.extra.arcana.sdk_name}} and the `AuthProvider` initialized before calling any of the SDK functions. 

For details refer to the [[web-auth-usage-guide#wallet_addethereumchain|{{config.extra.arcana.sdk_name}} Usage Guide]].

## See also

* [[web-auth-error-msg|{{config.extra.arcana.sdk_name}} Errors]]
* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]
* [[solana-dashboard-user-guide| Configure Solana Chains]]
* {% include "./text-snippets/authsdkref_url.md" %}
