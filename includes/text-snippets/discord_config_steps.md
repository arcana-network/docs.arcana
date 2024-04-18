{% include "./text-snippets/config_common_steps.md" %}

## App-specific Keys

Follow these steps to configure the **Social Auth** settings and enable user onboarding via Discord. It requires developers to use the {{config.extra.arcana.dashboard_name}} and the [Discord Developer Portal](https://discord.com/developers/applications).

### Step 1: Get Redirect URI  

Select the app in the **Manage Apps** dashboard screen and click Testnet/Mainnet to configure Discord in the respective configuration profile. Go to **Configure > Social Auth**. Copy the redirect URI shown on the top right.

<figure markdown="span">
  ![Get Redirect URI]({{config.extra.arcana.img_dir}}/an_dApp_config_redirect_uri.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
  <figcaption>Get Redirect URI</figcaption>
</figure>

Do not close the **Social Auth** browser tab in the {{config.extra.arcana.dashboard_name}}. Open another tab to access the Discord Developer Console and configure Discord OAuth.

### Step 2: Get Discord Application ID, Public Key

Go to the [Discord Developer Portal](https://discord.com/developers/applications) and create a new application.

<figure markdown="span">
  ![Discord Developer Portal]({{config.extra.arcana.img_dir}}/an_dApp_discord_dev_console.{{config.extra.arcana.img_png}}){ .an-screenshots .width_50pc }
  <figcaption>Discord Developer Portal</figcaption>
</figure>

Configure OAuth 2.0 credentials for the newly created app entry in the Discord Developer Portal. Select **OAuth2** in the Discord Developer Portal and refer to the **Redirects** field. Use the **Redirect URI** value copied in the previous step from the  {{config.extra.arcana.dashboard_name}}.

<figure markdown="span">
  ![discord console]({{config.extra.arcana.img_dir}}/an_dApp_discord_dev_oauth_uri.{{config.extra.arcana.img_png}}){ .an-screenshots .width_50pc }
  <figcaption>Discord OAuth Settings</figcaption>
</figure>

Save the app settings in the Discord Developer Portal. 

Refer to the **General Information** page in the Discord Developer Portal. Copy the **Application ID** and the **public key**. It will be required in the next step while configuring Discord settings using the  {{config.extra.arcana.dashboard_name}}. 

<figure markdown="span">
  ![Copy Application ID and Public Key]({{config.extra.arcana.img_dir}}/an_dApp_discord_clientID.{{config.extra.arcana.img_png}}){ .an-screenshots .width_50pc }
  <figcaption>Copy Application ID and Public Key</figcaption>
</figure>

### Step 3: Update Discord Social Auth Settings

In the {{config.extra.arcana.dashboard_name}}, click **Configure > Social Auth**. Refer to the empty fields next to the "Discord" setting. Paste the **Application ID** and **public key** obtained in the previous step as the `ClientID` and `secret`, respectively. 

<figure markdown="span">
  ![Dashboard Update Application ID and Public Key]({{config.extra.arcana.img_dir}}/an_dApp_discord_config.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
  <figcaption>Dashboard: Update Application ID and Public Key</figcaption>
</figure>

Save the **Social Auth** settings. 

*You are all set with the Discord configuration!*