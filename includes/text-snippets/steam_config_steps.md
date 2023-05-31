Web3 apps that use Steam for user authentication can enable authenticated users to sign blockchain transactions using the {{config.extra.arcana.wallet_name}}. This requires configuring Steam before integrating the app with the {{config.extra.arcana.sdk_name}}.

!!! warning

      Some of the authentication provider configuration steps are performed using the [Steam Community Website ](https://steamcommunity.com/login/home/?goto=%2Fdev%2Fapikey), whereas the others use the {{config.extra.arcana.dashboard_name}}. 
      
      **Developers must have a Steam account and have at least $5 worth of purchased games in the account before they can obtain the Steam API Key.**  First set up this key using the  {{config.extra.arcana.dashboard_name}} before you can [[index-integrate-app|integrate the app]] with the {{config.extra.arcana.sdk_name}}, initialize the `AuthProvider`, and add code to use the {{config.extra.arcana.sdk_name}} functions for onboarding users and enabling authenticated users to sign blockchain transactions using the {{config.extra.arcana.wallet_name}}.

## Step 1: Register App

Go to the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}

[[configure-auth#step-2-register-application|Register the app]] by creating a new entry using the 'Create New App' wizard. 

!!! tip "Registering App"
          
      {% include "./text-snippets/socialauth_add_config.md" %}

Use defaults for configuration settings or edit them as per the app requirements. See the [[configure-auth|How to configure an app]] guide for details.

Go to the app configuration screen on the {{config.extra.arcana.dashboard_name}} and click **Configure > Social Auth** section in the LHS.
<!-- Copy the **redirect URI** value displayed on the top RHS. This will be used in the next step to generate Steam OAuth credentials.

![redirect_page](/img/an_dApp_config_redirect_uri.png){an-screenshots}

-->

Do not close the {{config.extra.arcana.dashboard_name}} browser tab. Open another tab and browse Steam Community Site and obtain the API Key in the next step. Then come back to the {{config.extra.arcana.dashboard_name}} tab and complete the app configuration settings.

## Step 2: Get Steam OAuth API Key

Go to the [Steam Community Site](https://steamcommunity.com/login/home/?goto=%2Fdev%2Fapikey). Login to your account. 

![Steam Community Site](/img/an_steam_login.png){ width="50%"}

!!! caution "Access Steam API Key"

      Make sure you do not have a Steam limited account otherwise you cannot access the API Key. Refer to [Steam FAQ]( https://help.steampowered.com/en/faqs/view/71D3-35C2-AD96-AA3A) for more details. 

Register for a new Steam Web API Key. Provide the app domain name as input to access your API Key.

![Steam Domain Settings](/img/an_steam_domain.png){ width="50%"}

Copy the **Steam API Key** for your app domain. It will be required in the next step while completing the app configuration using the {{config.extra.arcana.dashboard_name}}.

![Steam Domain Settings](/img/an_steam_apikey.png){ width="50%"}

## Step 3: Update {{config.extra.arcana.dashboard_name}}

Revisit the {{config.extra.arcana.dashboard_name}} app configuration screen. Click **Configure > Social Auth** section in the LHS navigation bar. Paste the **Steam API Key** obtained in the previous step in the "Steam*" field. 

![Steam Config Dashboard](/img/an_dApp_steam_config.png){an-screenshots}

Save the settings. {{config.extra.arcana.company_name}} assigns a unique **{{config.extra.arcana.app_address}}** to every registered app. Save this **{{config.extra.arcana.app_address}}** and use it while integrating the app with the {{config.extra.arcana.sdk_name}}.

![Client ID](/img/an_db_app_address.png){an-screenshots}

*You are all set with the Steam configuration. Next, [[index-integrate-app|integrate the Web3 app]] with the {{config.extra.arcana.sdk_name}} and enable the authenticated users to sign blockchain transactions using the {{config.extra.arcana.wallet_name}}. See [[index-arcana-wallet|{{config.extra.arcana.wallet_name}} Developer's Guide]] for details.*
