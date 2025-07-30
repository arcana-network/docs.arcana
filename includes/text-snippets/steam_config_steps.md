{% include "./text-snippets/config_common_steps.md" %}

## App-specific Keys

Follow these steps to configure the **Social Auth** settings and enable user onboarding via Steam. It requires developers to use the {{config.extra.arcana.dashboard_name}} and the [Steam Community Site](https://steamcommunity.com/login/home/?goto=%2Fdev%2Fapikey).

## Step 1: Get Redirect URI  
      
Select the app in the **Manage Apps** dashboard screen and click Testnet/Mainnet to configure Steam in the respective configuration profile. Go to **Configure > Social Auth**. Copy the redirect URI shown on the top right.

<figure markdown="span">
  ![redirect_page]({{config.extra.arcana.img_dir}}/an_dApp_config_redirect_uri.{{config.extra.arcana.img_png}}){.an-screenshots }
  <figcaption>Copy the Redirect URI</figcaption>
</figure>

Do not close the **Social Auth** browser tab in the {{config.extra.arcana.dashboard_name}}. Open another tab to access the Steam Community Site and obtain an API Key.

## Step 2: Get Steam API Key

!!! an-note "Steam API Key"

      **Developers must have a Steam account and have at least $5 worth of purchased games in the account before they can obtain the Steam API Key.**  

Go to the [Steam Community Site](https://steamcommunity.com/login/home/?goto=%2Fdev%2Fapikey). Login to your account. 

<figure markdown="span">
  ![Steam Community Site]({{config.extra.arcana.img_dir}}/an_steam_login.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
  <figcaption>Steam Login</figcaption>
</figure>

!!! an-warning "Access Steam API Key"

      Make sure you do not have a Steam limited account otherwise you cannot access the API Key. Refer to [Steam FAQ]( https://help.steampowered.com/en/faqs/view/71D3-35C2-AD96-AA3A) for more details. 

Register for a new Steam Web API Key. Provide the app domain name as input to access your API Key.

<figure markdown="span">
  ![Steam Domain Settings]({{config.extra.arcana.img_dir}}/an_steam_domain.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
  <figcaption>Access Steam API Key</figcaption>
</figure>

Copy the **Steam API Key** for your app domain. It will be required in the next step while completing the app configuration using the {{config.extra.arcana.dashboard_name}}.

<figure markdown="span">
  ![Steam Domain Settings]({{config.extra.arcana.img_dir}}/an_steam_apikey.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
  <figcaption>Copy Steam API Key</figcaption>
</figure>

## Step 3: Update Steam Social Auth Settings

In the {{config.extra.arcana.dashboard_name}}, click **Configure > Social Auth**. Refer to the **Steam API Key** input field. Paste the **Steam API Key** obtained in the previous step.

<figure markdown="span">
  ![Steam Config Dashboard]({{config.extra.arcana.img_dir}}/an_dApp_steam_config.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>Dashboard: Update Steam API Key</figcaption>
</figure>

Save the **Social Auth** settings. 

*You are all set with the Steam configuration.*
