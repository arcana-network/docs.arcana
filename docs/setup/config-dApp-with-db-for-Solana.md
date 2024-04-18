---
alias: solana-dashboard-user-guide
title: 'Solana Setup'
description: 'Web3 app developers can use the Arcana Developer Dashboard to register and configure the apps to use Solana network, before integration with the Arcana Auth SDK.'
arcana:
  root_rel_path: ..
---

# Solana Setup

This guide explains how to activate Solana, a [[concept-non-evm-chains|non-EVM blockchain]] in a Web3 app and allow users to sign blockchain transactions using the {{config.extra.arcana.wallet_name}}.

Use the {{config.extra.arcana.dashboard_name}} to first configure user onboarding settings, select Solana and tailor the blockchain signing experience for an app and then integrate the app with the {{config.extra.arcana.sdk_name}}. 

## Prerequisites

{% include "./text-snippets/db_prerequisites.md" %}

{% include "./text-snippets/db_login.md" %}

## Register App

To register an app that uses the Solana network, create a new app and select the chain type as **Solana**. Select one of the Solana chains as the default chain.

{% include "./text-snippets/non-evm-warning.md" %}

<figure markdown="span">
  ![Register Solana App]({{config.extra.arcana.img_dir}}/an_db_new_solana_app_card.gif){ .an-screenshots .width_85pc }
  <figcaption>Register Solana App</figcaption>
</figure>

## Configure App

Refer to the [[dashboard-user-guide|{{config.extra.arcana.dashboard_name}} User's Guide]] for details on how to configure the branding, social authentication providers and other settings. In this section, you will learn how to configure the Solana network for the app via the **Chain Management** configuration section.

### Manage Solana chains

In the *Manage Apps* screen select the requisite configuration profile to bring up the app dashboard page. In the LHS click **Configure** and select **Chain Management**.

You will see the available Solana chains that will be displayed when a user logs in and accesses the {{config.extra.arcana.wallet_name}}.

### Default Chain

You can select one of the Solana networks and set it as the default chain. The default chain is shown as the selected chain in the {{config.extra.arcana.wallet_name}} displayed in the app's context.

### Edit Chain

To edit a Solana chain's RPC URL or the blockchain explorer URL, select the chain, click **edit** and update the required fields.

<figure markdown="span">
  ![Edit Solana Chain Settings]({{config.extra.arcana.img_dir}}/an_db_new_solana_edit_chain.gif){ .an-screenshots .width_85pc }
  <figcaption>Edit Solana Chain Settings</figcaption>
</figure>

For more details on using the dashboard to delete an app, switch between different applications, change configuration profile, monitor usage, etc., see [[dashboard-user-guide|{{config.extra.arcana.dashboard_name}} User's Guide]]. 

## Next Steps

After setting up Solana chains using the {{config.extra.arcana.dashboard_name}}, you can begin integrating Solana app with the {{config.extra.arcana.sdk_name}}. See [[solana-quick-start|Solana Quick Start Guide]] for instructions on how to install and integrate the {{config.extra.arcana.sdk_name}} with your app. Once integrated, you can add code to onboard users and initiate Web3 wallet operations using the Solana network. Refer to the sample code [[solana-wallet-ops|here]].

## See Also

* [[solana-quick-start|Solana Quick Start Guide]]
* [[solana-wallet-ops|Web3 Wallet Operations for Solana]]
* [[faq-solana|Integrating Solana App FAQ]]
* [Solana App Integration Example](https://github.com/arcana-network/auth-examples)
