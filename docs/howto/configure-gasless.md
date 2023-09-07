---
alias: configure-gasless
title: 'Configure Gasless Transactions'
description: 'Learn how to enable gasless transactions in an app that integrates with the Arcana Auth SDK. Gas tanks must be added, adequate credit deposited in the gas tank and selected app operations must be whitelisted first before users can avail of gasless transactions.'
arcana:
  root_rel_path: ..
---

# Configure Gasless Transactions

In this tutorial, you will learn how to enable [[concept-gasless-transactions|gasless transactions]] for an app that integrates with the {{config.extra.arcana.sdk_name}}.

!!! danger "Gasless Accounts: One time Setting"

      Once enabled, the gasless feature cannot be turned-off. 
      
      Gasless transactions are enabled once the app developer adds a 'gas tank' for an app.  All the user accounts created for that app are **SCW** type '[[concept-gasless-transactions#gasless-user-accounts|user accounts]]' and not the traditional **EOA** addresses. 
      
      Once 'gasless accounts' (SCW) are turned on for the app user, they cannot be reverted to EOA addresses.
      
      Later, even if the developer removes the gas tanks or if the gas tanks are depleted or empty, the app users will continue to be associated with the SCW type '[[concept-gasless-transactions#gasless-user-accounts|user accounts]]'. When gas tanks are depleted or removed by the developer, these SCW accounts will be required to pay for the app transactions and gas fees. 

## Prerequisites

{% include "./text-snippets/db_prerequisites.md" %}

## Steps

Developers must use the {{config.extra.arcana.dashboard_name}} to enable the gasless feature via just three steps:

### Step 1. Provision Gas Tanks

Visit the 'Manage Apps' page of the {{config.extra.arcana.dashboard_name}}. Choose the app for which you need to enable the gasless feature or create a new app entry if your app is not already registered and configured for using the {{config.extra.arcana.sdk_name}}.

Select the app card, click *Configure* and select the **Gasless** section in the LHS navigation. Use the **Gas Tanks** page to add or edit the gas tanks. At the start, you will see zero gas tanks configured for the app.

<img src="/img/an_gl_db_new_config.png" alt="Set up Gas Tanks" class="an-screenshots"/>

To add a new gas tank, choose **Add Gas Tank** on the right. You need to provide a name for the gas tank and select a chain that will be serviced by this gas tank. Refer to the list of [[concept-gasless-transactions#supported-chains|supported chains]] where gas tanks can be set up to enable the gasless feature.

Note that you can only set up one gas tank per blockchain network. You will see a new gas tank in the dashboard.

<img src="/img/an_gl_db_add_gas_tank.gif" alt="Add Gas Tank" class="an-screenshots"/>


### Step 2. Add/Withdraw Gas Tank Credits

!!! caution "Availability of Funds" 

      Note that adding funds to a gas tank requires the developer to have a wallet with the requisite balance of native tokens for the selected chain.

Click on the 'ellipsis' next to the gas tank where you wish to add credits. It displays three menu action items: 

* Deposit
* Withdraw
* Manage Whitelist

<img src="/img/an_gl_gas_tank_action.png" alt="Gas Tank Actions" class="an-screenshots"/>

Choose **Deposit**. You will be required to connect your MetaMask wallet and deposit funds into the gas tank using the wallet. Enter the amount that you wish to deposit. Upon successful deposit, you will see the **Total Deposit** value equal to the amount you deposited.

<img src="/img/an_gl_db_deposit.gif" alt="Add Gas Tank" class="an-screenshots"/>

The wallet account used for depositing funds in a gas tank is the **owner's account**.  You can withdraw funds from a gas tank only to the owner's account for security reasons. To withdraw funds, click on the 'ellipsis' next to the gas tank and choose **Withdraw**. Enter the amount you wish to withdraw. After successful withdrawal, the Total Gas Tank amount will be moved out to the owner's wallet address, the same address used to deposit the funds.

<img src="/img/an_gl_db_withdraw.gif" alt="withdraw from Gas Tank" class="an-screenshots"/>

### Step 3. Whitelist Gasless Operations

To whitelist one or more app functions, choose **Manage Whitelist** and specify the following:

* Contract Address
* Contract ABI

You will see the various functions listed on the RHS. Use the radio buttons to choose the ones that are whitelisted for gasless.  Only these app functions will qualify for a gasless operation when the user chooses to perform any blockchain transactions associated with these operations.

<img src="/img/an_gl_db_whitelist.gif" alt="withdraw from Gas Tank" class="an-screenshots"/>

### Optional: Pause/Resume Gasless

Developers can choose to pause and resume gas tank operations in the app config settings. When paused, users pay gas fees for whitelisted app operations.

Use the **Enable** toggle in the app configuration settings page of the dashboard to pause and resume a configured gas tank.

<img src="/img/an_gl_gas_tank_pause.png" alt="Gas Tank Actions" class="an-screenshots"/>

That is all! 🎉

You have successfully configured gasless operation for the application users.  

## What's next?

For more details, see [[faq-gasless|FAQ - Gasless Transactions]]. 

After configuring gasless, developers can refer to other app configuration settings in the {{config.extra.arcana.dashboard_name}} and then integrate the app with the {{config.extra.arcana.sdk_name}}. If not already done, add code to onboard users and allow authenticated users to access the embedded {{config.extra.arcana.sdk_name}} [[index-configure-auth|how to configure {{config.extra.arcana.wallet_name}} usage]].

## See Also

* [[configure-wallet-visibility|Configure wallet visibility mode]]
* [[dashboard-user-guide#manage-testnet-and-mainnet-configurations|Managing Testnet and Mainnet Configurations]]
* [[auth-quick-start|{{config.extra.arcana.product_name}} Quick Start Guide]] 
* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]
* {% include "./text-snippets/authsdkref_url.md" %}
