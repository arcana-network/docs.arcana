
Web3 apps can select and enable user onboarding via Discord by configuring the **Social Auth** settings in the {{config.extra.arcana.dashboard_name}} before integrating the app with the {{config.extra.arcana.sdk_name}}.

!!! warning

      1. Some of the authentication provider configuration steps are performed using the [Discord Developer Portal](https://discord.com/developers/applications), whereas the others use the {{config.extra.arcana.dashboard_name}}. After configuring Discord, simply [[index-integrate-app|integrate the app]] with the {{config.extra.arcana.sdk_name}}, initialize the `AuthProvider`, and only then add code in the app to trigger user authentication via Discord.

      2. {% include "./text-snippets/warn_global_keys_no_social_clientid_setup.md" %}
      
## Step 1: Get Redirect URI

Go to the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %} 

[[configure-auth#step-2-register-application|Register the app]] by creating a new entry using the 'Create New App' wizard. 

!!! tip "Registering App"
    
      {% include "./text-snippets/socialauth_add_config.md" %}

Go to the app configuration screen on the {{config.extra.arcana.dashboard_name}} and click **Configure > Social Auth** section in the LHS. Copy the **redirect URI** value displayed on the top RHS.  This will be used in the next step to set up Discord OAuth.

![redirect_page](/img/an_dApp_config_redirect_uri.png){.an-screenshots}

Do not close the  {{config.extra.arcana.dashboard_name}} browser tab. Open another tab and set up Discord OAuth. Then revisit the  {{config.extra.arcana.dashboard_name}} tab to complete the app configuration.

## Step 2: Discord Developer Portal

Go to the [Discord Developer Portal](https://discord.com/developers/applications) and create a new application. 

![discord console](/img/an_dApp_discord_dev_console.png){.an-screenshots}

You need to set up OAuth 2.0 credentials for your newly created app entry in the Discord Developer Portal. Click **OAuth2** in the Discord Developer Portal LHS navigation pane, you will see the **Redirects** field. Specify the **Redirect URI** copied from the  {{config.extra.arcana.dashboard_name}} in the previous step. 

![discord console](/img/an_dApp_discord_dev_oauth_uri.png){.an-screenshots}

Save the app settings in Discord Developer Portal. 

The **General Information** page in the Discord Developer Portal shows a unique **Application ID** and a **public key** assigned by Discord for your application entry. 

![Discord OAuth ClientID](/img/an_dApp_discord_clientID.png){.an-screenshots}

Copy the **Application ID** and the **public key**. It will be required in the next step while configuring Discord settings using the  {{config.extra.arcana.dashboard_name}}.

## Step 3: Update the {{config.extra.arcana.dashboard_name}}

Revisit the {{config.extra.arcana.dashboard_name}} tab and view the app configuration screen. Click **Configure > Social Auth** in the LHS navigation bar and refer to the "Discord" settings. Paste the **Application ID** and **public key** assigned by Discord, in the previous step in the `ClientID` and `secret` fields respectively. 

![howto_config_discord_clientid](/img/an_dApp_discord_config.png){.an-screenshots}

Save the settings. {{config.extra.arcana.company_name}} assigns a **{{config.extra.arcana.app_address}}** to every registered app. Save the **{{config.extra.arcana.app_address}}** as it will be required during integration with the {{config.extra.arcana.sdk_name}}. 

![App Identifier](/img/an_db_app_address.png){.an-screenshots}

*You are all set with the Discord configuration. [[index-integrate-app|Integrate the Web3 app]] with the {{config.extra.arcana.sdk_name}}, [[index-onboard-users|onboard users]] and enable the authenticated users to sign blockchain transactions. See [[index-arcana-wallet|{{config.extra.arcana.wallet_name}} Developer's Guide]] for details.*
