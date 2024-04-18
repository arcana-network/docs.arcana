---
alias: configure-wallet-chains
title: 'Manage Chains'
description: 'Web3 app developers can update the pre-configured list of supported blockchains shown out of the box in the wallet and assign one of the chains as the default chain.'
arcana:
  root_rel_path: ..
---

# Manage Chains 

This guide will show you how to handle the list of chains that your app users can use to sign blockchain transactions.

{{config.extra.arcana.product_name}} works with all EVM-compatible blockchain networks and Solana, a [[concept-non-evm-chains|non-EVM chain]]. A subset of these supported chains, including Solana, is available as the default [[web3-stack-chains|pre-configured list]]. It is visible in the {{config.extra.arcana.dashboard_name}} and governs what chains are available in the {{config.extra.arcana.wallet_name}} UI. Ethereum is selected as the active chain in the list by default.

Developers can update this pre-configured list via the {{config.extra.arcana.dashboard_name}} or programmatically. Authenticated users can add other supported blockchain networks displayed in the {{config.extra.arcana.wallet_name}} UI. User-made changes to the blockchain list only last for the current session; they don't persist after logout. However, any extra chains added by the app developer remain across user logins. 

## Prerequisites

* Make sure you can access the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}

* The [[register-app-auth| app must be registered]] using the [[concept-arcana-dashboard| {{config.extra.arcana.dashboard_name}}]].

*Managing the displayed list of pre-configured chains for authenticated users in {{config.extra.arcana.wallet_name}} UI within the Web3 app is simple!*

## Step 1: Dashboard Log-in

Log in to the {{config.extra.arcana.dashboard_name}} and click your registered app entry from the 'Manage Apps' screen. Click **Configure** in the LHS navigation area. Select **Chain Management** to configure the default subset of supported chains.

<figure markdown="span">
  ![Dashboard: Chain Management]({{config.extra.arcana.img_dir}}/an_db_chains_mngt_nav.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
  <figcaption>Dashboard: Chain Management</figcaption>
</figure>

The chain configuration UI is displayed:

<figure markdown="span">
  ![Chain Management Settings]({{config.extra.arcana.img_dir}}/an_db_chain_mngt_options.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc}
  <figcaption>Chain Management Settings</figcaption>
</figure>

## Step 2: Review Chains

Developers can enable either EVM chains or non-EVM chains in the context of a Web3 app integrated with {{config.extra.arcana.product_name}}. The **chain type** selection is a one-time setting during app registration and cannot be reconfigured later. While reviewing chains, you can see whether the app is configured to use EVM chains or only the non-EVM chains.

### EVM Chains

Browse the EVM chains displayed in the pre-configured list of chains in the dashboard. Select the active chain. The chain marked active is displayed as the pre-selected chain in the wallet UI once the user logs in. 

<figure markdown="span">
  ![Pre-configured EVM chains]({{config.extra.arcana.img_dir}}/an_db_evm_only_preconfigured_list.gif){ .an-screenshots .width_85pc }
  <figcaption>Pre-configured EVM Chains</figcaption>
</figure>

Developers can add other EVM chains to the out-of-the-box, pre-configured list. This list governs the list of chains available and displayed in the {{config.extra.arcana.wallet_name}} UI for the authenticated users. By default, for non-EVM chain type, **Ethereum** is set as the active chain.

<figure markdown="span">
  <img class="width_35pc an-screenshots" src="{{config.extra.arcana.img_dir}}/an_db_default_subset_wallet_chains.gif" alt="Default subset of chains in wallet UI"/>
  <figcaption>Pre-configured EVM Chains</figcaption>
</figure>

### Non-EVM Chains

The following [[concept-non-evm-chains|non-EVM chains]] are supported and displayed in the list of pre-configured chains in the {{config.extra.arcana.dashboard_name}}.

* Solana
* MultiversX

The selection of non-EVM or EVM chain types for an app is made at the time of app registration. Only the chains belonging to the selected non-EVM chain type are available in the pre-configured list of chains displayed in the dashboard.

The Testnet is selected as the default chain. Developers can change the default chain to say the 'Dev' network or the Mainnet. 

If the chain type 'EVM' is selected during the app registration, then it is possible to switch the active app chain from one EVM chain to another at a later point in time. However, the same is not possible across EVM and non-EVM chains or between two non-EVM chain types. Once an app is registered for a non-EVM chain, the default active chain can be switched only within that chain type. For example, from Solana to Solana Testnet, or from MultiversX Testnet to MultiversX Devnet.

## Solana

<figure markdown="span">
  ![Solana Pre-configured Chains]({{config.extra.arcana.img_dir}}/an_db_non_evm_solana_only_preconfigured_list.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc}
  <figcaption>Solana Pre-configured Chains</figcaption>
</figure>

See [[solana-dashboard-user-guide|how to set up Solana]] and [[solana-quick-start|Solana Quick Start Guide]] for more details.

## MultiversX

<figure markdown="span">
  ![MultiversX Pre-configured Chains]({{config.extra.arcana.img_dir}}/an_db_non_evm_mvx_only_preconfigured_list.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc}
  <figcaption>MultiversX Pre-configured Chains</figcaption>
</figure>

See [[mvx-dashboard-user-guide|how to set up MultiversX]] and [[mvx-quick-start|MultiversX Quick Start Guide]] for more details.

## Step 3: Edit Default Active Chain

To switch the default active chain simply select the new chain in the {{config.extra.arcana.dashboard_name}}, click "..." ellipses and select the 'set as default' option. The figure below illustrates Polygon as the default active chain instead of Ethereum.

<figure markdown="span">
  ![Set Polygon as the Active Chain]({{config.extra.arcana.img_dir}}/an_db_set_default_chain.gif){ .an-screenshots .width_85pc}
  <figcaption>Set Polygon as the Active Chain</figcaption>
</figure>

!!! an-caution "Non-EVM Chains"

      If the chain type selected during app registration is Solana / non-EVM chain, then you will not see any EVM-compatible chains displayed in the dashboard. Developers can edit and choose a different chain as the default active chain, only from the list of displayed Solana chain options.

## Step 4: Add Chain

### EVM Chains

Click the **Add Chain** button on the top right of the 'Chain Management' dashboard screen. Any newly added chain is automatically set as the default chain displayed in the wallet UI.

{% include "./text-snippets/add_chain_specs.md" %}

<figure markdown="span">
  ![Configure new chain]({{config.extra.arcana.img_dir}}/an_db_configure_new_chain.gif){ .an-screenshots .width_85pc }
  <figcaption>Set Polygon as the Active Chain</figcaption>
</figure>

Once you click **Save**, the newly added chain will be displayed in the dashboard and also shown in the wallet UI once a user logs into the app.

<figure markdown="span">
  ![Updated chain list]({{config.extra.arcana.img_dir}}/an_db_view_updated_chain_list_polygon.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc}
  <figcaption>Set Polygon as the Active Chain</figcaption>
</figure>

<figure markdown="span">
  ![Display newly added chain in the wallet]({{config.extra.arcana.img_dir}}/an_db_config_new_chain_show_wallet.gif){ .an-screenshots .width_35pc}
  <figcaption>Display Newly added Chain in the Wallet</figcaption>
</figure>

### Non-EVM Chains

In the current release, only some selected non-EVM chains, such as [[solana-dashboard-user-guide|Solana]], [[mvx-dashboard-user-guide|MultiversX]] are supported and available in the pre-configured chain list. Other non-EVM chains will be supported in the upcoming releases.

**Developers cannot arbitrarily add any other non-EVM chains to this pre-configured list of chains, either through the dashboard or programmatically**.

To learn more about the list of supported chains, see [[web3-stack-chains|supported blockchains]].

**That's all!** :material-party-popper:

## What's Next?

Besides managing the pre-configured list of chains via the {{config.extra.arcana.dashboard_name}} configuration settings, a developer can also add other supported EVM-compatible chains programmatically to the wallet via the `wallet_addEthereumChain` method. To do that, the app must be integrated with the {{config.extra.arcana.sdk_name}} and the `AuthProvider` initialized before calling any of the SDK functions. 

For details refer to the [[web-auth-usage-guide#wallet_addethereumchain|{{config.extra.arcana.sdk_name}} Usage Guide]].

## See also

* [[web-auth-error-msg|{{config.extra.arcana.sdk_name}} Errors]]
* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]
* [[solana-dashboard-user-guide| Configure Solana Chains]]
* {% include "./text-snippets/authsdkref_url.md" %}
