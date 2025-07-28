---
alias: dashboard-user-guide
title: 'Dashboard User Guide'
description: 'Web3 app developers can use the Arcana Developer Dashboard to register and configure the apps before integration with the Arcana Auth SDK.'
arcana:
  root_rel_path: ..
  social_provider: "supported social login and IAM providers"
---

# Dashboard Users Guide

The {{config.extra.arcana.dashboard_name}} helps Web3 developers set up the {{config.extra.arcana.sdk_name}} configuration.

Log in, register your app, grab your unique {{config.extra.arcana.app_address}}, configure authentication settings, then install the {{config.extra.arcana.sdk_name}} and integrate it with the Web3 app.

<figure markdown="span">
  <img alt="Arcana Dashboard" src="{{config.extra.arcana.img_dir}}/an_dashboard_login.{{config.extra.arcana.img_png}}" class="an-screenshots"/>
  <figcaption>{{config.extra.arcana.dashboard_name}}</figcaption>
</figure>

This guide covers how to:

* Log into the dashboard
* Register a Web3 app with {{config.extra.arcana.company_name}}
* Get {{config.extra.arcana.app_address}}
* Manage Configuration Profiles

    - Testnet/Mainnet
    - Switching configuration Profiles

* Configure Auth Settings

    - Branding
    - Social Login Providers
    - Chain Management
    - Wallet Customization
    - Login Session Management
    - Keyspace Type

* Switch application
* Monitor usage and billing
* Delete a registered app

## Prerequisites

{% include "./text-snippets/db_prerequisites.md" %}

## Dashboard Login

{% include "./text-snippets/db_login.md" %}

## Register Application

{% include "./text-snippets/db_register_dapp.md" %}

## Get {{config.extra.arcana.app_address}}

After successful registration, the default Testnet configuration profile settings are displayed in the dashboard. 

The {{config.extra.arcana.app_address}} assigned to the app is displayed on the top right. Note that the {{config.extra.arcana.app_address}} differs in Testnet and Mainnet configuration profiles.

To access the Mainnet {{config.extra.arcana.app_address}}, click dropdown on the top RHS and choose Mainnet. Copy the Mainnet {{config.extra.arcana.app_address}} displayed on the dashboard.

When deploying an app on the {{config.extra.arcana.company_name}} Mainnet, use the {{config.extra.arcana.app_address}} associated with the Mainnet configuration profile.

<figure markdown="span">
  ![Get{{config.extra.arcana.app_address}} ]({{config.extra.arcana.img_dir}}/an_db_get_clientid.{{config.extra.arcana.img_gif}}){ .an-screenshots }
  <figcaption>Get {{config.extra.arcana.app_address}}</figcaption>
</figure>

## Manage Configuration Profiles

Each registered app is displayed in the 'Manage Apps' dashboard. A [[concept-config-profile|Testnet configuration profile]] is associated with each app by default. The 'Mainnet' button is disabled for a newly registered app. For Mainnet deployment, the developer must create a new Mainnet profile. 

!!! an-tip "Testnet vs. Mainnet Settings"

      Both Testnet and Mainnet configuration profiles are maintained separately. Each profile is associated with a unique **{{config.extra.arcana.app_address}}**. 

To view Testnet configuration settings, click the 'Testnet' button on the app card in the 'Manage Apps' screen. The usage metrics page will open. A dropdown labeled 'Testnet' at the top right confirms you're viewing the app's Testnet settings.

<figure markdown="span">
  ![App Configuration Settings]({{config.extra.arcana.img_dir}}/an_db_new_app_card.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>App Configuration Settings</figcaption>
</figure>

### Testnet

To view or edit the Testnet configuration settings, browse the 'Manage Apps' screen, locate the app card, and click 'Testnet.' 

<figure markdown="span">
  <img alt="Testnet Client ID" src="{{config.extra.arcana.img_dir}}/an_deploy_testnet_dashboard.{{config.extra.arcana.img_png}}" class="an-screenshots"/>
  <figcaption>Testnet Client ID</figcaption>
</figure>

### Mainnet

Browse the 'Manage Apps' screen to find your app card. If the 'Mainnet' configuration profile exists, the 'Mainnet' button will be enabled. Click 'Mainnet' to view the application usage metrics and the 'Mainnet' profile. If the button is disabled, the 'Mainnet' profile hasn't been created yet. To create it, view the 'Testnet' profile by clicking the app card. On the usage metrics page, find the dropdown in the top right, click it, and select 'Mainnet' to create the configuration profile.

<figure markdown="span">
  ![Select Testnet/Mainnet Settings]({{config.extra.arcana.img_dir}}/an_db_testnet_mainnet_select.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>Select Testnet/Mainnet Settings</figcaption>
</figure>

Selecting 'Mainnet' for the first time opens a pop-up with two options to create the 'Mainnet' configuration profile:

* Copy Testnet Profile
* Create a new Mainnet Profile. 

<figure markdown="span">
  ![Switch to Mainnet Settings]({{config.extra.arcana.img_dir}}/an_testnet_mainnet_config_create.gif){ .an-screenshots }
  <figcaption>Switch to Mainnet Settings</figcaption>
</figure>

Use one of these options to create the 'Mainnet' profile. A new **{{config.extra.arcana.app_address}}** is assigned to the Mainnet configuration profile. To deploy the app on Mainnet, this new **{{config.extra.arcana.app_address}}** must be updated in the integration code. [[migrate-app-testnet-mainnet|Learn more...]]

{% include "./text-snippets/warn_update_redirect_uri.md" %}

??? an-example "Example: Copying Google Profile"
      
      If Google is enabled in your app's 'Testnet' profile, then during the configuration of the social login provider through the Google Developer console, the Testnet redirect URI was added.  Copy the 'Mainnet' profile redirect URI value from the {{config.extra.arcana.dashboard_name}} and update them in the Google Console OAuth settings. 

      Ensure you add the 'Mainnet' redirect URI value for the other social login providers enabled in the 'Testnet' profile. This is required for enabling your app to use the {{config.extra.arcana.company_name}} Mainnet. 
      
      The figure below shows how the 'redirect URI' differs from the Testnet Settings where Google and Twitch were configured, and the 'Testnet' profile was copied to create a 'Mainnet' profile.

      <figure markdown="span">
        ![Mainnet Redirect URI]({{config.extra.arcana.img_dir}}/an_db_example_add_mainnet_redirect_uri.{{config.extra.arcana.img_png}}){ .an-screenshots }
        <figcaption>Mainnet Redirect URI</figcaption>
      </figure>

### Switch Profile

When both Testnet and Mainnet profiles are linked to the app, switch profiles using one of the following options:

* On the Manage Apps page, click Testnet or Mainnet to change the configuration profile view.
* On the app settings page, use the dropdown in the top right to switch between Testnet and Mainnet.

If the Mainnet profile isn’t created, use the dropdown on the 'Testnet' page to create it. After creation, the dashboard will automatically switch to the Mainnet settings.

<figure markdown="span">
  ![Switch to Testnet/Mainnet Profile]({{config.extra.arcana.img_dir}}/an_db_testnet_mainnet_select.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>App Settings: Switch to Testnet/Mainnet Profile</figcaption>
</figure> 

<figure markdown="span">
  ![Switch to Testnet]({{config.extra.arcana.img_dir}}/an_db_all_app_card.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>Manage Apps: Switch to Testnet/Mainnet Profile</figcaption>
</figure> 

## Configuration Settings

To configure {{config.extra.arcana.wallet_name}} usage settings, the app must be registered. Click on the registered app card in the 'Manage Apps' screen to view the configuration settings and edit them.

### Settings Overview

{% include "./text-snippets/db_settings.md" %}

### Branding

To view and edit the look and feel of the embedded {{config.extra.arcana.wallet_name}}, use **Manage Apps > App Card > Testnet/Mainnet Configuration** to view the app settings. In the LHS menu, click **Configure > Branding**.

See [[configure-wallet-branding|how to configure branding]] for details.

### Social Auth

To view and edit the [[concept-social-login|social login]] provider's settings for a registered app, use **Manage Apps > App Card > Testnet/Mainnet Configuration** to view the app settings. In the LHS menu, click **Configure > Social Auth**.

The dashboard screen will display all the user onboarding options and configuration settings to enable them. Note that each user onboarding option may have different settings. Select the onboarding option and provide the required configuration values.

See [[index-config-social-providers|how to configure social login]] for details.

!!! an-tip "Login Providers: Social, IAM, Custom"

      Besides the social login providers, {{config.extra.arcana.sdk_name}} also supports [[index-config-iam-providers|IAM Providers]] and [[config-custom-auth|Custom Auth]] options to onboard users.

### Chain Management

{{config.extra.arcana.sdk_name}} provides a subset of supported blockchains out of the box, and these chains are displayed in the in-app {{config.extra.arcana.wallet_name}} by default. Developers can configure this list of supported, pre-configured chains in the {{config.extra.arcana.wallet_name}} and pick up one of the chains as the default active chain in the wallet.

To view and edit the wallet chains, click **Manage Apps > App Card > Testnet/Mainnet Configuration** to bring up the app usage metrics page in the dashboard. In the LHS menu, click **Configure > Chain Management**.

!!! an-note

      {{config.extra.arcana.sdk_name}} supports both EVM and non-EVM chains. When registering the app using the dashboard, the decision to use EVM or non-EVM chains must be made. 
      
      If the EVM chain type is selected during app registration, then the pre-configured chain list will consist of only the EVM-compatible chains as available options. Similarly, if a non-EVM chain, Solana, is selected during app registration, the chain options displayed will be only those belonging to the Solana ecosystem. Developers can switch chains from among the ones that are displayed. Switching from an EVM chain to a non-EVM chain is impossible once an app is registered.

For details, see [[configure-wallet-chains|how to manage chains]].

#### Configure Non-EVM Chains

Use the dashboard to enable [[concept-non-evm-chains|non-EVM chains]] in your Web3 apps. 

* [[solana-dashboard-user-guide|Solana]]
* [[mvx-dashboard-user-guide|MultiversX]]
* [[near-dashboard-user-guide|Near]]

### Arcana Wallet Customization

To view and edit the wallet settings, click **Manage Apps > App Card > Testnet/Mainnet Configuration** and bring up the app usage metrics page in the dashboard. In the LHS menu, click **Configure > Arcana Wallet**.

See [[configure-wallet-settings|how to configure wallet settings]] for details.

### Login Session Management

To view and edit the login session management settings, click **Manage Apps > App Card > Testnet/Mainnet Configuration** and bring up the app usage metrics page in the dashboard. In the LHS menu, click **Configure > Login Session Management**.

{% include "./text-snippets/db_session_type.md" %}

### Configure Keyspace

To view and edit the keyspace settings for the app, click **Manage Apps > App Card > Testnet/Mainnet Configuration** and bring up the app usage metrics page in the dashboard. In the LHS menu, click **Configure > Keyspace**.

{% include "./text-snippets/db_keyspace.md" %}

## Switch Application

To switch viewing configuration settings from one application configuration profile screen to another, click on the dropdown next to the application name in the LHS navigation. You will see other registered applications in your account. Select another app name in the dropdown to view its configuration settings.

'Manage Apps' is the last entry in the dropdown. Click 'Manage Apps' to access the dashboard landing page with the app cards. Switch to another app by clicking on the app card.

<figure markdown="span">
  ![Switch Application]({{config.extra.arcana.img_dir}}/an_db_switch_application_anim.gif){ .an-screenshots }
  <figcaption>Switch Application</figcaption>
</figure>

## Monitor Usage

Developers can monitor their registered application usage statistics via the {{config.extra.arcana.dashboard_name}}. The *Manage Apps* screen displays the account-level usage metrics for all the applications registered in the developer account. Click on the app card to drill down into the application-specific usage details. 

### Account Usage Metrics

The *Manage Apps* screen displays Monthly Active Users (MAU) for the developer account. This is an aggregate score across all applications registered for a developer account and configured to use the {{config.extra.arcana.company_name}} Mainnet. Any application using the 'Testnet' is not billed or included in the overall account usage statistic.

<figure markdown="span">
  ![App Usage Metrics]({{config.extra.arcana.img_dir}}/an_db_metrics.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>App Usage Metrics</figcaption>
</figure>

!!! an-warning "Mainnet Billing"

      The billing data only applies to Mainnet usage and will be available in the forthcoming releases.

### Usage per Application

{{config.extra.arcana.company_name}} maintains per-application usage statistics separately for the 'Testnet' and 'Mainnet' configuration profiles. 

The *Manage Apps* dashboard screen lists all registered applications as cards. Each application card displays the 'Total Users' statistic. This refers to the monthly active application users utilizing the {{config.extra.arcana.company_name}} Testnet/Mainnet. To view per-application usage details, click on the app card and select 'Testnet' or 'Mainnet' profile to see the following statistics: 

* Number of logged-in users 

Use the 'Daily' and 'Monthly' tabs to see the respective usage statistics. 

<figure markdown="span">
  ![Daily/Monthly Usage]({{config.extra.arcana.img_dir}}/an_db_app_usage_metrics_testnet_anim.gif){ .an-screenshots }
  <figcaption>Daily/Monthly Usage</figcaption>
</figure>

Use the dropdown in the top right of the application dashboard screen to select Testnet/Mainnet usage details.

<figure markdown="span">
  ![Testnet/Mainnet Usage Statistics]({{config.extra.arcana.img_dir}}/an_db_app_usage_metrics_mainnet_anim.gif){ .an-screenshots }
  <figcaption>Testnet/Mainnet Usage Statistics</figcaption>
</figure>

## Billing

{{config.extra.arcana.company_name}} tracks the Mainnet app usage in terms of MAU for every developer account. At the end of every month, an invoice is generated. The chargeable amount against the invoice is auto-deducted using the payment method configured by the developer in their profile section. 

<!---
See [billing and pricing]({{page.meta.arcana.root_rel_path}}/concepts/billing.md) for details.
-->

To begin using the {{config.extra.arcana.sdk_name}}, the app developers don't need to update the profile details, including the billing information. The developer must provide the billing details via the profile section of the {{config.extra.arcana.dashboard_name}} once the app uses up all the available free tiers of {{config.extra.arcana.company_name}} Mainnet usage. Otherwise, the registered apps will be suspended and users will not be allowed to log in to any registered app using the developer account.

For details on current pricing and free tier limits, contact our [[index-support|{{config.extra.arcana.company_name}} support]].

### Payment Method Setup

Click on the user icon on the top right of the {{config.extra.arcana.dashboard_name}} screen. Select **Profile** in the dropdown. 

<figure markdown="span">
  ![Payment Method Setup]({{config.extra.arcana.img_dir}}/an_db_billing_nav.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>Payment Method Setup</figcaption>
</figure>

You will see the developer's {{config.extra.arcana.company_name}} account profile details. The developer account **name** and **public identifier** (email) are automatically retrieved based on the account used to log into the {{config.extra.arcana.dashboard_name}}.

Developers must update the following profile details and then click **Save**. 

* Organization
* Billing Address Details
* Payment Method

<figure markdown="span">
  ![Billing Details]({{config.extra.arcana.img_dir}}/an_db_billing_profile.gif){ .an-screenshots }
  <figcaption>Billing Details</figcaption>
</figure>

!!! an-note "Payment Method"

       By default, the 'Payment Method' section is disabled. It is enabled once the billing address details are configured.

### View Invoices

Click on the user icon on the top right of the {{config.extra.arcana.dashboard_name}} screen. Select **Invoices** in the dropdown.

<figure markdown="span">
  ![View Invoices]({{config.extra.arcana.img_dir}}/an_db_invoices_nav.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>View Invoices</figcaption>
</figure>

On the **Invoices** page, you will see the details of the current pending dues, followed by the billing history of previous invoices that can be downloaded for reference.

<figure markdown="span">
  ![Invoice Details]({{config.extra.arcana.img_dir}}/an_db_invoices_details.{{config.extra.arcana.img_gif}}){ .an-screenshots }
  <figcaption>Invoice Details</figcaption>
</figure>

### View Billing Notifications

Click the bell icon to view all notifications for the developer account. Check the [billing notifications]({{page.meta.arcana.root_rel_path}}/concepts/billing.md#billing-notifications) list for details.

<figure markdown="span">
  ![Billing Notifications]({{config.extra.arcana.img_dir}}/an_db_notifications_nav.{{config.extra.arcana.img_png}}){ .an-screenshots }
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

## Delete Application

To de-register an application, delete the entry in the 'Manage Apps' screen of the {{config.extra.arcana.dashboard_name}}. 

<figure markdown="span">
  ![Dashboard: Manage Apps]({{config.extra.arcana.img_dir}}/an_db_manage_apps.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>Dashboard: Manage Apps</figcaption>
</figure>

Select the application you wish to de-register and click on the delete icon. Confirm delete action.

<figure markdown="span">
  ![Delete/De-Register App]({{config.extra.arcana.img_dir}}/an_db_delete_app_anim.gif){ .an-screenshots }
  <figcaption>Delete/De-register App</figcaption>
</figure>

## See Also

* [[index-config-social-providers|Configure Social Login]]
* [[index-setup-wallet|Configure Wallet Settings]]
* [[configure-wallet-chains| Manage Chains]]
* [[config-custom-auth| Configure Custom Auth Settings]]

