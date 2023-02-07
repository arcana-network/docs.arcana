---
slug: /config_dashboard
id: idconfigdashboard
sidebar_custom_props:
  cardIcon: ⚒️
arcana:
  root_rel_path: ..
---

# Using Arcana Dashboard

Are you ready to setup user onboarding and blockchain signing experience for your application users? 

The first step is to register your application on the [Arcana Developer Dashboard]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md), the go-to console for application developers. 

You can customize Arcana Auth SDK settings and enable application users to utilize Arcana Testnet or Mainnet. Once you have completed the registration and configuration process, you need to install the Auth SDK and [integrate it]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) with your application. 

This guide will walk you through the various configuration options available on the dashboard to tailor your Auth SDK usage.  For instruction on how to install Auth SDK and integrate your application, refer to the [Quick Start Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_qs.md).

!!! note

      After configuration, each newly created application is assigned a unique **App Address**. This is **required** to integrate the Auth SDK with your application.

## Prerequisites

{% include "./text-snippets/db_prerequisites.md" %}

## Using Arcana Developer Dashboard

### Login

{% include "./text-snippets/db_login.md" %}

### Register Application

{% include "./text-snippets/db_register_dapp.md" %}

### Configure Application

{% include "./text-snippets/db_settings.md" %}

!!! caution "Arcana Wallet"

        {% include "./text-snippets/warn_config_wallet_ui.md" %}

!!! note App Address

      The "App Address" assigned to your application can be found on the top right of the dashboard. ![App Address](/img/an_db_appid.png)

### Manage Configurations

Every application that is registered using the Arcana Developer Dashboard is represented by a single card displayed in the 'Manage Apps' dashboard screen, next to the 'Create New App' wizard. Click on application card to view the application dashboard. By default, the application dashboard shows application usage details for Testnet configuration profile and some links to the Arcana Auth documentation. 

To view configuration details for an application, use the LHS navigation menu and click *Configure* to view/edit the application configuration settings as described in an earlier section of this guide.

Each application can only be associated with two configuration profiles, 'Testnet' and 'Mainnet. Both these configurations are maintained separately and each is associated with a unique **App Address**. 

![New App config card](/img/an_db_new_app_card.png)

#### Testnet

All newly registered applications are enabled for using the Arcana 'Testnet'. The default configuration profile created for every registered application is meant for 'Testnet' usage. Developers can view or edit the default configuration settings by clicking 'Testnet' on the application card displayed in the 'Manage Apps' dashboard. This will bring up the application dashboard screen with various navigation options in the LHS pane.

After validation on the 'Testnet', the application can be configured to use the Arcana 'Mainnet'. To do this, developers must create a corresponding 'Mainnet' configuration profile. 

#### Mainnet

By default, all newly registered applications are enabled to use Arcana 'Testnet' and associated with the 'Testnet' configuration. To switch an application from using 'Testnet' to 'Mainnet', developers must first create a 'Mainnet' profile using the developer dashboard. 

A newly registered application does not have any 'Mainnet' profile associated with it. The application card displayed in the 'Manage Apps' screen will show the 'Mainnet' configuration as disabled. To create a 'Mainnet' configuration profile, the developer must use the application dashboard screen displaying the Testnet profile and select the **Social Auth** settings. In the social authentication settings screen, refer to the dropdown on the top right next to 'Testnet'. Use this dropdown to select and switch to 'Mainnet'.

![Testnet Mainnet Selection](/img/an_db_testnet_mainnet_select.png)

When 'Mainnet' is selected from the dropdown, if there already exists a 'Mainnet' profile then the configuration settings for social authentication for Mainnet are displayed. Otherwise a new 'Mainnet' profile creation wizard gets activated and displays a pop up screen asking the developer to choose one of the options to create the 'Mainnet' configuration. You can either copy the exact 'Testnet' configuration or create a new blank configuration for 'Mainnet' settings. 

![Switch to Mainnet Profile](/img/an_db_new_mainnet_config_creation.png)

!!! caution "Copying Testnet Profile"

      If the developer chooses to create the 'Mainnet' profile by copying the 'Testnet' profile, there is additional setup required to enable the configured social providers for Mainnet usage. Once the 'Mainnet' profile is created, visit the dashboard and copy the `Redirect URI' displayed for Mainnet. You need to add this using the social provider's developer console, similar to the one added for Testnet.

      For example, if Google is enabled in Testnet profile, then during configuration of the social provider using the Google Developer console, the Testnet redirect URI was added.  Use the Mainnet profile redirect URI in the dashboard and re-configure the Google OAuth settings. 

      Add the Mainnet redirect URI value for other social providers that are enabled for Testnet profile and are required for Mainnet as well. Figure below shows how the 'redirect URI' is updated for Mainnet for social providers Google and Twitch.

      ![Update redirect URI](/img/an_db_add_mainnte_redirect_uri.png)

After the selection is made and the developer confirms, the 'Mainnet' profile is created and automatically registered with the Arcana Network. 'Mainnet' configuration requires an additional setting which is not there for 'Testnet' configuration profile. This additional setting is **keyspace** and it is used to allow Web3 application users to share the same wallet address across multiple applications that are deployed on the Arcana 'Mainnet'. Refer to the next section for more details.

!!! note "Mainnet App Address"

      The newly creat4ed 'Mainnet' configuration profile is associated with a brand new unique **App Address**. Developers must specify this new app address while integrating the application with the Auth SDK and deploy it on Arcana 'Mainnet'.

#### Configure Mainnet Keyspace 

To deploy an application on the Arcana Mainnet, developers need to create a 'Mainnet' profile and configure the keyspace option. You can choose to copy the 'Testnet' profile as 'Mainnet' configuration or create a new one. In both cases, you need to specify an additional keyspace option. Keyspace is only available for **Mainnet**.  There are two keyspace options: [App-specific and Global Keys]({{page.meta.arcana.root_rel_path}}/concepts/sharedkeys.md).

You can either use the default, highly secure **App-specific** keyspace option or **Global** keyspace depending upon the desired level of security and user experience required for the application. 

![Mainnet Keyspace options](/img/an_db_keyspace_options.png)

Use global keyspace if you want to allow the Web3 users experience where same wallet address is assigned to the user across different Arcana application logins. It is less secure than the default **App-specific** keyspace option whereby a user will see different wallet address across different application.

Select **Global Keyspace** and click **Verify**. This will bring up a verification form. Fill out the verification form, click **Submit**. 

<img alt="Global Keyspace Verify" src="/img/an_db_global_keysp_verify.png" width="40%" />

You can check the status of **Global Keyspace** verification by using the **Keyspace** screen. After submitting the form, you will see the status as **In Review**.

![Mainnet Global keyspace in review](/img/an_db_global_keysp_inreview.png)

The status will change to **Approved** once verification is complete. You can integrate your application with the Auth SDK but do not deploy it until the verification is complete. Otherwise users that log in before verification is complete may see different wallet addresses after the process is complete.

![Mainnet Global keyspace approved](/img/an_db_global_keysp_approved.png)

Now your application is configured to use the Arcana Mainnet. You can further edit configuration settings for Mainnet by using the LHS navigation pane and selecting **Configure**.  

![Mainnet Profile entry](/img/an_db_mainnet_profile.png)

#### Switch Profiles

There are multiple ways to switch an application from using Testnet to Mainnet. 

* To switch to 'Mainnet', use the application dashboard screen, select **Configuration >> Social Auth** in the LHS navigation pane. Refer to the dropdown next to 'Testnet' on the top RHS of the screen and choose 'Mainnet'. If there is a preexisting 'Mainnet profile, the app is automatically switched to it and you can see the social authentication settings and assigned **App Address** for the 'Mainnet' profile. Otherwise, the profile wizard gets activated and assists the developer in creating a 'Mainnet' configuration profile for the application. Once the profile is created, a new **App Address** is automatically assigned and the configuration switches to 'Mainnet'.

    ![Select Testnet or Mainnet](/img/an_db_testnet_mainnet_select.png)  

* Alternatively, if a 'Mainnet' configuration profile is already created for an application, you can also switch between Testnet/Mainnet configuration profiles by using the 'Manage Apps' dashboard screen. Simply select the application card and click on 'Testnet' or 'Mainnet'. This will bring up the application dashboard screen displaying the application dashboard for the selected configuration profile. 

    ![Switch to Testnet](/img/an_db_all_app_card.png)

!!! caution

      Depending upon whether the 'Testnet' **App Address** value or the 'Mainnet' **App Address** value is used to integrate an application with the Auth SDK, the corresponding Arcana Network is used by the application users. "Testnet" usage is not billed but if an application chooses 'Mainnet', it will be billed in the forthcoming releases.


#### Switch Applications

Developers can switch from one application configuration profile screen to another application by using the 'Manage Apps' screen and clicking on the requisite application card. 

Alternatively, you can use the LHS navigation pane in the configuration screen and click on the dropdown next to the application name in the top left. The dropdown displays a list of all the applications registered by the developer and a link to navigate to the *Manage Apps* dashboard screen. Select a different application from the drop down list and you will be switched to a different application dashboard screen. 

![Switch Application](/img/an_db_switch_application.png)

<!--

If the application entry in the drop down list is associated with 'Mainnet' settings, then by default the 'Mainnet' configuration screen for that application will be displayed. 

-->

### Monitor Usage

Developers can monitor their registered application usage statistics via the Arcana Developer Dashboard. The *Manage Apps* screen displays the account level usage metrics. Application specific usage details are available in the application dashboard screen. 

#### Account Usage Metrics

The *Manage Apps* screen displays Monthly Active Users (MAU) for the developer account. This is an aggregate score across all the applications that are registered for a dev account and configured to use the Arcana 'Mainnet'. Any application using the 'Testnet' are not billed and not included in this overall account usage statistic.

![Dashboard metrics](/img/an_db_metrics.png)

!!! caution

      The billing data is only applicable for Mainnet usage and will be made available in the forthcoming releases.

#### Usage per Application

Arcana Network maintains per application usage statistics separately for both the 'Testnet' and 'Mainnet' configuration profiles. 

In the *Manage Apps* dashboard screen, all registered applications are listed as cards. Each application card displays the 'Total Users' statistic. This refers to the total monthly active application users that are utilizing the Arcana Testnet/Mainnet. To view per application usage details, you need to select 'Testnet' or 'Mainnet' profile and look at the Application dashboard screen that displays the following user statistics: 

* Number of logged in users 

Use the 'Daily' and 'Monthly' tabs to see the respective usage statistics. 

You can use the dropdown in the top right of the application dashboard screen to select Testnet/Mainnet usage details.

![Application Usage Stats](/img/an_db_app_usage_metrics.png)

### Delete Application

To de-register an application the developers must delete the entry using the dashboard. Go to the 'Manage Apps' dashboard page that lists all the registered applications.  

![Manage Apps Dashboard](/img/an_db_manage_apps.png)

Select the application you wish to de-register and choose **Delete**.

![Delete App](/img/an_db_delete_app.png)

## Dashboard FAQ

New users can get help with Auth SDK configuration and dashboard usage by consulting the [Arcana Dashboard FAQ]({{page.meta.arcana.root_rel_path}}/faq/faq_db.md) or contacting {% include "./text-snippets/support_email_link.md" %}.
