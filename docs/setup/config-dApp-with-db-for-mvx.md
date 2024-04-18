---
alias: mvx-dashboard-user-guide
title: 'MultiversX Setup'
description: 'Web3 app developers can use the Arcana Developer Dashboard to register and configure the apps to use MultiversX network, before integration with the Arcana Auth SDK.'
arcana:
  root_rel_path: ..
---

# MultiversX Setup

This guide explains how to use the {{config.extra.arcana.dashboard_name}} and set up MultiversX network, a [[concept-non-evm-chains|non-EVM blockchain network]] so that MultiversX is pre-configured out of the box for {{config.extra.arcana.wallet_name}} users.

## Prerequisites

{% include "./text-snippets/db_prerequisites.md" %}

{% include "./text-snippets/db_login.md" %}

## Register App

Log into the {{config.extra.arcana.dashboard_name}} to register the app. Create a new app and select the chain type as **MultiversX**. 

{% include "./text-snippets/non-evm-warning.md" %}

<figure markdown="span">
  ![Register MultiversX App]({{config.extra.arcana.img_dir}}/an_db_new_mvx_app_card.gif){ .an-screenshots .width_85pc }
  <figcaption>Register MultiversX App</figcaption>
</figure>

## Configure App

The chain type and the default chain are already pre-configured during the app registration. Use the **Chain Management** configuration section to configure the MultiversX chains.

### Manage MultiversX chains

In the *Manage Apps* screen select the requisite configuration profile to bring up the app dashboard page. In the LHS click **Configure** and select **Chain Management**.

Select one of the available MultiversX chains displayed on the screen. You can mark it as default or edit the chain settings.

### Default Chain

Choose a chain and select the '...' displayed against the entry in the dashboard. A drop down menu will show up. Choose *Set as default* to mark that chain as the default chain.

By selecting a chain as the default, developers ensure that the same chain is automatically configured and displayed in the wallet when the user logs into the app. The authenticated user can instantly sign blockchain transactions on MultiversX, from within the app context, without having to configure the wallet.

### Edit Chain

To edit a MultiversX chain's RPC URL or the blockchain explorer URL, select the chain, click '...' and select **edit** option to update the required fields.

<figure markdown="span">
  ![Edit MultiversX Chain Settings]({{config.extra.arcana.img_dir}}/an_db_new_mvx_edit_chain.gif){ .an-screenshots .width_85pc }
  <figcaption>Edit MultiversX Chain Settings</figcaption>
</figure>

For more details on how to configure other settings such as branding, social authentication providers, delete a registered app to re-register on a different chain type, monitor app usage, etc., see [[dashboard-user-guide|{{config.extra.arcana.dashboard_name}} User's Guide]]. 

## Next Steps

After setting up MultiversX chains through the {{config.extra.arcana.dashboard_name}}, you can begin integrating MultiversX app with the {{config.extra.arcana.sdk_name}}. See [[mvx-quick-start|MultiversX Quick Start Guide]] for instructions on how to install and integrate the {{config.extra.arcana.sdk_name}} with your app. Once integrated, you can add code to onboard users and initiate [[mvx-web3-wallet-ops|Web3 wallet operations using the MultiversX network]].

## See Also

* [[mvx-quick-start|MultiversX Quick Start Guide]]
* [[mvx-web3-wallet-ops|Web3 Wallet Operations for MultiversX]]
* [[faq-mvx|Integrating MultiversX App FAQ]]
* [MultiversX App Integration Example](https://github.com/arcana-network/auth-examples)
