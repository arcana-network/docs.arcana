{% include "./text-snippets/config_common_steps.md" %}

## App-specific Keys

Follow these steps to configure the **Social Auth** settings and enable user onboarding via Steam. It requires developers to use the {{config.extra.arcana.dashboard_name}} and the [Steam Community Site](https://steamcommunity.com/login/home/?goto=%2Fdev%2Fapikey).

### Step 1: Get Redirect URI  
      
Select the app in the **Manage Apps** dashboard screen and click Testnet/Mainnet to configure Steam in the respective configuration profile. Go to **Configure > Social Auth**. Copy the redirect URI shown on the top right.

![redirect_page](/img/an_dApp_config_redirect_uri.png){.an-screenshots}

Do not close the **Social Auth** browser tab in the {{config.extra.arcana.dashboard_name}}. Open another tab to access the Steam Community Site and obtain an API Key.

## Step 2: Get Steam API Key

!!! note "Steam API Key"

      **Developers must have a Steam account and have at least $5 worth of purchased games in the account before they can obtain the Steam API Key.**  

Go to the [Steam Community Site](https://steamcommunity.com/login/home/?goto=%2Fdev%2Fapikey). Login to your account. 

![Steam Community Site](/img/an_steam_login.png){.an-screenshots .width_50pc}

!!! caution "Access Steam API Key"

      Make sure you do not have a Steam limited account otherwise you cannot access the API Key. Refer to [Steam FAQ]( https://help.steampowered.com/en/faqs/view/71D3-35C2-AD96-AA3A) for more details. 

Register for a new Steam Web API Key. Provide the app domain name as input to access your API Key.

![Steam Domain Settings](/img/an_steam_domain.png){.an-screenshots .width_50pc}

Copy the **Steam API Key** for your app domain. It will be required in the next step while completing the app configuration using the {{config.extra.arcana.dashboard_name}}.

![Steam Domain Settings](/img/an_steam_apikey.png){.an-screenshots .width_50pc}

## Step 3: Update Steam Social Auth Settings

In the {{config.extra.arcana.dashboard_name}}, click **Configure > Social Auth**. Refer to the empty fields next to the "Steam" setting. Paste the **Steam API Key** obtained in the previous step in the "Steam" field. 

![Steam Config Dashboard](/img/an_dApp_steam_config.png){.an-screenshots}

Save the **Social Auth** settings. 

*You are all set with the Steam configuration!*
