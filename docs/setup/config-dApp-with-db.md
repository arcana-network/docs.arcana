---
alias: dashboard-user-guide
title: 'Arcana Developer Dashboard User Guide'
description: 'Web3 app developers can use the Arcana Developer Dashboard to register and configure the apps before integration with the Arcana Auth SDK.'
arcana:
  root_rel_path: ..
  social_provider: "supported social login and IAM providers"
---

# {{config.extra.arcana.dashboard_name}} Users Guide

The {{config.extra.arcana.dashboard_name}} allows Web3 app developers to configure user onboarding settings and tailor the blockchain signing experience for an app that integrates with the {{config.extra.arcana.sdk_name}}.

Developers must first register the app by using the [{{config.extra.arcana.dashboard_name}}]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md) and obtain a unique **{{config.extra.arcana.app_address}}** that is required to integrate the app with the {{config.extra.arcana.sdk_name}}.

By default, each newly registered app is associated with a 'Testnet' configuration profile. When the app is deployed, it is set to use the {{config.extra.arcana.company_name}} Testnet.

This guide will walk you through the various configuration options available on the {{config.extra.arcana.dashboard_name}} to tailor the {{config.extra.arcana.sdk_name}} usage.  For instructions on how to install {{config.extra.arcana.sdk_name}} and integrate your application, refer to the [[auth-quick-start|{{config.extra.arcana.product_name}} Quick Start Guide]].

## Prerequisites

{% include "./text-snippets/db_prerequisites.md" %}

## Login

{% include "./text-snippets/db_login.md" %}

## Register Application

{% include "./text-snippets/db_register_dapp.md" %}

## Settings Overview

{% include "./text-snippets/db_settings.md" %}

## Manage Configuration Profiles

Every application registered using the {{config.extra.arcana.dashboard_name}} is represented by a single card displayed in the 'Manage Apps' screen, next to the 'Create New App' wizard. Click on the application card to view the application dashboard screen. By default, the application dashboard screen shows application usage details for the 'Testnet' configuration profile and some links to the {{config.extra.arcana.product_name}} documentation. 

To view configuration details for an application, use the LHS navigation menu and click *Configure* to view/edit the application configuration settings as described in an earlier section of this guide.

Each application can only be associated with two configuration profiles, 'Testnet' and 'Mainnet'. Both these configurations are maintained separately and each is associated with a unique **{{config.extra.arcana.app_address}}**. 

<figure markdown="span">
  ![App Configuration Settings]({{config.extra.arcana.img_dir}}/an_db_new_app_card.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
  <figcaption>App Configuration Settings</figcaption>
</figure>

### Testnet

By default, all newly registered applications are enabled for using the {{config.extra.arcana.company_name}} 'Testnet'. Developers can view or edit the default configuration settings by clicking 'Testnet' on the application card displayed in the 'Manage Apps' dashboard screen. This will bring up the application dashboard screen with various navigation options in the LHS pane.

After validation on the 'Testnet', the application can be configured to use the {{config.extra.arcana.company_name}} 'Mainnet'. To do this, developers must create a corresponding 'Mainnet' configuration profile. 

### Mainnet

To use the {{config.extra.arcana.company_name}} Mainnet, the developers must first create a 'Mainnet' configuration profile using the {{config.extra.arcana.dashboard_name}}. 

A newly registered application does not have any 'Mainnet' profile associated with it, it has to be explicitly created by the developer. The application card displayed in the 'Manage Apps' screen will show the 'Mainnet' configuration as disabled for all newly registered apps. To create a 'Mainnet' configuration profile, the developer must use the application dashboard screen displaying the Testnet profile, use the LHS navigation pane and select the **Social Auth** settings. 

In the social authentication settings screen, refer to the dropdown on the top right next to 'Testnet'. Use this dropdown to select and switch to the 'Mainnet' configuration.

<figure markdown="span">
  ![Select Testnet/Mainnet Settings]({{config.extra.arcana.img_dir}}/an_db_testnet_mainnet_select.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
  <figcaption>Select Testnet/Mainnet Settings</figcaption>
</figure>

When 'Mainnet' is selected from the dropdown, a new 'Mainnet' profile creation wizard gets activated and displays a pop-up screen asking the developer to choose one of the options to create the 'Mainnet' configuration. You can either copy the exact 'Testnet' configuration or create a new blank configuration for 'Mainnet' settings. 

<figure markdown="span">
  ![Switch to Mainnet Settings]({{config.extra.arcana.img_dir}}/an_testnet_mainnet_config_create.gif){ .an-screenshots .width_85pc }
  <figcaption>Switch to Mainnet Settings</figcaption>
</figure>

After the selection is made and the developer confirms, the 'Mainnet' profile is created and automatically registered with {{config.extra.arcana.company_name}}. 

!!! an-note "Mainnet {{config.extra.arcana.app_address}}"

      The newly created 'Mainnet' configuration profile is associated with a brand new unique **{{config.extra.arcana.app_address}}**. Developers must specify this new {{config.extra.arcana.app_address}} while integrating the application with the {{config.extra.arcana.sdk_name}} and deploying it on {{config.extra.arcana.company_name}} 'Mainnet'.

!!! an-caution "Copying Testnet Profile"

      {% include "./text-snippets/warn_copy_testnet_profile.md" %}

??? an-example "Example: Copying Google Profile"
      
      If Google is enabled in your app's 'Testnet' profile, then during the configuration of the social login provider through the Google Developer console, the Testnet redirect URI was added.  Copy the 'Mainnet' profile redirect URI value from the {{config.extra.arcana.dashboard_name}} and update them in the Google Console OAuth settings. 

      Make sure that you add the 'Mainnet' redirect URI value for the other social login providers that are enabled in the 'Testnet' profile. This is required for enabling your app to use the {{config.extra.arcana.company_name}} Mainnet. 
      
      The figure below shows how the 'redirect URI' is different from the Testnet Settings where Google and Twitch were configured and the 'Testnet' profile was copied to create a 'Mainnet' profile.

      <figure markdown="span">
        ![Mainnet Redirect URI]({{config.extra.arcana.img_dir}}/an_db_example_add_mainnet_redirect_uri.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
        <figcaption>Mainnet Reddirect URI</figcaption>
      </figure>

## Switch Profiles

There are multiple ways to switch an application from using Testnet to Mainnet. 

* To switch from Testnet to the Mainnet profile, use the application dashboard screen, and select **Configuration >> Social Auth** in the LHS navigation pane. Refer to the dropdown next to 'Testnet' on the top RHS of the screen and choose 'Mainnet'. If there is a preexisting 'Mainnet profile, the app is automatically switched to it. You can view the social authentication settings and the assigned **{{config.extra.arcana.app_address}}** for the 'Mainnet' profile. If there is no 'Mainnet' profile associated with the app, then on selecting 'Mainnet' from the dropdown, the app wizard gets activated and assists in creating a 'Mainnet' configuration profile for the application. Once the profile is created, a new **{{config.extra.arcana.app_address}}** is automatically assigned and the configuration switches to 'Mainnet'.

    <figure markdown="span">
      ![Switch to Testnet/Mainnet Profile]({{config.extra.arcana.img_dir}}/an_db_testnet_mainnet_select.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
      <figcaption>Switch to Testnet/Mainnet Profile</figcaption>
    </figure> 

* If a 'Mainnet' configuration profile is already created for an application, you can also switch between Testnet/Mainnet configuration profiles by using the 'Manage Apps' dashboard screen. Simply select the application card and click on 'Testnet' or 'Mainnet'. This will bring up the application dashboard screen for the selected configuration profile. 

    <figure markdown="span">
      ![Switch to Testnet]({{config.extra.arcana.img_dir}}/an_db_all_app_card.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
      <figcaption>Switch to Testnet</figcaption>
    </figure> 

!!! an-caution

      Depending upon whether the 'Testnet' **{{config.extra.arcana.app_address}}** value or the 'Mainnet' **{{config.extra.arcana.app_address}}** value is used to integrate an application with the {{config.extra.arcana.sdk_name}}, deployment of the app happens on the respective {{config.extra.arcana.company_name}} Network. "Testnet" usage is not billed but if an application chooses 'Mainnet' while integrating with the {{config.extra.arcana.sdk_name}}, it will be billed in the forthcoming releases.

## Configure Keyspace 

{% include "./text-snippets/db_keyspace.md" %}

!!! an-caution "Configuring the {{config.extra.arcana.wallet_name}}"

      {{config.extra.arcana.sdk_name}} allows developers to manage the app user experience for signing blockchain transactions with {{config.extra.arcana.wallet_name}}. 
      
      The user experience with the {{config.extra.arcana.wallet_name}} is configured programmatically through the `alwaysVisible` option. Install the {{config.extra.arcana.sdk_name}} and as part of the integration, add code in the app to create a new `AuthProvider` instance. Specify the appropriate wallet visibility mode via the `alwaysVisible` option. See the [[configure-wallet-visibility|{{config.extra.arcana.wallet_name}} configuration guide]] for details.

!!! an-info "{{config.extra.arcana.app_address}}"

      The {{config.extra.arcana.app_address}} assigned to your application can be found on the top right of the {{config.extra.arcana.dashboard_name}} screen. <figure markdown="span">![Arcana Client ID]({{config.extra.arcana.img_dir}}/an_db_app_address.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }<figcaption>Arcana Client ID</figcaption></figure>

## Switch Application

Developers can switch from one application configuration profile screen to another application by using the 'Manage Apps' screen and clicking on the requisite application card. 

Alternatively, you can use the LHS navigation pane in the configuration screen and click on the dropdown next to the application name in the top left. The dropdown displays a list of all the applications registered by the developer and a link to navigate to the *Manage Apps* dashboard screen. Select a different application from the drop-down list and you will be switched to a different application dashboard screen. 

<figure markdown="span">
  ![Switch Application]({{config.extra.arcana.img_dir}}/an_db_switch_application_anim.gif){ .an-screenshots .width_85pc }
  <figcaption>Switch Application</figcaption>
</figure>

## Monitor Usage

Developers can monitor their registered application usage statistics via the {{config.extra.arcana.dashboard_name}}. The *Manage Apps* screen displays the account-level usage metrics. Application-specific usage details are available on the application dashboard screen. 

### Account Usage Metrics

The *Manage Apps* screen displays Monthly Active Users (MAU) for the developer account. This is an aggregate score across all the applications that are registered for a developer account and configured to use the {{config.extra.arcana.company_name}} Mainnet. Any application using the 'Testnet' is not billed and not included in the overall account usage statistic.

<figure markdown="span">
  ![App Usage Metrics]({{config.extra.arcana.img_dir}}/an_db_metrics.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
  <figcaption>App Usage Metrics</figcaption>
</figure>

!!! an-caution

      The billing data is only applicable for Mainnet usage and will be made available in the forthcoming releases.

### Usage per Application

{{config.extra.arcana.company_name}} Network maintains per-application usage statistics separately for both the 'Testnet' and 'Mainnet' configuration profiles. 

In the *Manage Apps* dashboard screen, all registered applications are listed as cards. Each application card displays the 'Total Users' statistic. This refers to the total monthly active application users that are utilizing the {{config.extra.arcana.company_name}} Testnet/Mainnet. To view per application usage details, you need to select 'Testnet' or 'Mainnet' profile and look at the application dashboard screen that displays the following usage statistics: 

* Number of logged-in users 

Use the 'Daily' and 'Monthly' tabs to see the respective usage statistics. 

<figure markdown="span">
  ![Daily/Monthly Usage]({{config.extra.arcana.img_dir}}/an_db_app_usage_metrics_testnet_anim.gif){ .an-screenshots .width_85pc }
  <figcaption>Daily/Monthly Usage</figcaption>
</figure>

You can use the dropdown in the top right of the application dashboard screen to select Testnet/Mainnet usage details.

<figure markdown="span">
  ![Testnet/Mainnet Usage Statistics]({{config.extra.arcana.img_dir}}/an_db_app_usage_metrics_mainnet_anim.gif){ .an-screenshots .width_85pc }
  <figcaption>Testnet/Mainnet Usage Statistics</figcaption>
</figure>

## Billing

{{config.extra.arcana.company_name}} tracks the Mainnet app usage in terms of MAU for every developer account. At the end of every month, an invoice is generated. The chargeable amount against the invoice is auto-deducted using the payment method configured by the developer in their profile section. 

<!---
See [billing and pricing]({{page.meta.arcana.root_rel_path}}/concepts/billing.md) for details.
-->

To begin using the {{config.extra.arcana.sdk_name}}, the app developers don't need to update the profile details including the billing information. Once the apps consume the free tier of {{config.extra.arcana.company_name}} Mainnet usage, the developer must provide the billing details via the profile section of the {{config.extra.arcana.dashboard_name}}. Otherwise, the registered apps will be suspended and users will not be allowed to log in to any app that is registered using the developer account.

For details on current pricing and free tier limits, contact our [[support|support team]].

### Payment Method Setup

Click on the user icon on the top right of the {{config.extra.arcana.dashboard_name}} screen. Select **Profile** in the dropdown. 

<figure markdown="span">
  ![Payment Method Setup]({{config.extra.arcana.img_dir}}/an_db_billing_nav.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
  <figcaption>Payment Method Setup</figcaption>
</figure>

You will see the developer's {{config.extra.arcana.company_name}} account profile details. The developer account **name** and **public identifier** (email) are automatically retrieved based on the account used to log into the {{config.extra.arcana.dashboard_name}}.

Developers are required to update the following profile details and then click **Save**. 

* Organization
* Billing Address Details
* Payment Method

<figure markdown="span">
  ![Billing Details]({{config.extra.arcana.img_dir}}/an_db_billing_profile.gif){ .an-screenshots .width_85pc }
  <figcaption>Billing Details</figcaption>
</figure>

!!! an-note "Payment Method"

       By default, the 'Payment Method' section is disabled. 
       
       The payment method section is enabled once the billing address details are configured.

### View Invoices

Click on the user icon on the top right of the {{config.extra.arcana.dashboard_name}} screen. Select **Invoices** in the dropdown.

<figure markdown="span">
  ![View Invoices]({{config.extra.arcana.img_dir}}/an_db_invoices_nav.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
  <figcaption>View Invoices</figcaption>
</figure>

On the **Invoices** page, you will see the details of the current pending dues, followed by the billing history of previous invoices that can be downloaded for reference.

<figure markdown="span">
  ![Invoice Details]({{config.extra.arcana.img_dir}}/an_db_invoices_details.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
  <figcaption>Invoice Details</figcaption>
</figure>

### View Billing Notifications

Click the bell icon to view all notifications for the developer account. Check the [billing notifications]({{page.meta.arcana.root_rel_path}}/concepts/billing.md#notifications) list for details.

<figure markdown="span">
  ![Billing Notifications]({{config.extra.arcana.img_dir}}/an_db_notifications_nav.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
  <figcaption>Billing Notifications</figcaption>
</figure>

<!---

<figure markdown="span">
  ![Billing methods and details]({{config.extra.arcana.img_dir}}/an_db_billing_method_details.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
  <figcaption>Billing methods and details</figcaption>
</figure>

#### View Billing History

Refer to the 'Billing Details' screen. The 'Estimated Charges' section on the bottom displays a link to view the billing history and download invoices.

<figure markdown="span">
  ![Billing History]({{config.extra.arcana.img_dir}}/an_db_billing_history.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
  <figcaption>Billing History</figcaption>
</figure>

#### Pay Bills

To pay the Arcana Network dues, developers can refer to the 'Estimated Charges' section on the bottom right of the 'Billing Details' screen. Click **Continue** to view invoice details and pay the bill.

<figure markdown="span">
  ![Pay Dues]({{config.extra.arcana.img_dir}}/an_db_billing_dues.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
  <figcaption>Pay Dues</figcaption>
</figure>

-->

## Configure Non-EVM Chains

Use the dashboard to enable [[concept-non-evm-chains|non-EVM chains]] in your Web3 apps. 

* [[solana-dashboard-user-guide|Solana]]
* [[mvx-dashboard-user-guide|MultiversX]]
* [[near-dashboard-user-guide|Near]]
* Other non-EVM chains (*Coming soon!*)

## Delete Application

To de-register an application, the developers must delete the entry using the {{config.extra.arcana.dashboard_name}}. Go to the 'Manage Apps' dashboard page, which lists all the registered applications.  

<figure markdown="span">
  ![Dashboard: Manage Apps]({{config.extra.arcana.img_dir}}/an_db_manage_apps.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
  <figcaption>Dashboard: Manage Apps</figcaption>
</figure>

Select the application you wish to de-register and choose **Delete**.

<figure markdown="span">
  ![Delete/De-Register App]({{config.extra.arcana.img_dir}}/an_db_delete_app_anim.gif){ .an-screenshots .width_85pc }
  <figcaption>Delete/De-register App</figcaption>
</figure>

## FAQ: {{config.extra.arcana.dashboard_name}}

New users can get help with {{config.extra.arcana.sdk_name}} configuration and {{config.extra.arcana.dashboard_name}} usage by consulting the [[faq-db|{{config.extra.arcana.dashboard_name}} FAQ]] or contacting {% include "./text-snippets/support_email_link.md" %}.
