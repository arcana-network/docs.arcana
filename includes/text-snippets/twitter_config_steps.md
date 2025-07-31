{% include "./text-snippets/config_common_steps.md" %}

## App-specific Keys

Follow these steps to configure the **Social Auth** settings and enable user onboarding via Twitter. It requires developers to use the {{config.extra.arcana.dashboard_name}} and the [Twitter Developer Account](https://developer.twitter.com/en/docs/twitter-api/getting-started/getting-access-to-the-twitter-api).

### 1. Get Redirect URI  

Select the app in the **Manage Apps** dashboard screen and click Testnet/Mainnet to configure Twitter in the respective configuration profile. Go to **Configure > Social Auth**. Copy the redirect URI shown on the top right.

<figure markdown="span">
  ![Copy Redirect URI]({{config.extra.arcana.img_dir}}/an_dApp_config_redirect_uri.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>Copy Redirect URI</figcaption>
</figure>

Do not close the **Social Auth** browser tab in the {{config.extra.arcana.dashboard_name}}. Open another tab and set up Twitter OAuth.

### 2. Get Twitter API Key, Secret

Go to the [Twitter Developer Portal](https://developer.twitter.com/en/portal/projects-and-apps) and create a new [Twitter App](https://developer.x.com/en/docs/apps/overview) for setting up the OAuth credentials for the app. Note that if you would like to use Twitter API v2, you must add your Twitter App to a [Project](https://developer.x.com/en/docs/projects/overview).

<figure markdown="span">
  ![Twitter Developer Console]({{config.extra.arcana.img_dir}}/an_dApp_twitter_dev_console.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>Twitter Developer Console</figcaption>
</figure>

Select an appropriate environment and create a new name for the app on the Twitter Developer Portal.

<figure markdown="span">
  ![Create Twitter App Entry]({{config.extra.arcana.img_dir}}/twitter_new_app_setup.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>Create Twitter App Entry</figcaption>
</figure>

In the **Keys and Tokens** tab, the **API Key** and **API Key Secret** (also known as the [Consumer Key and Secret](https://developer.x.com/en/docs/authentication/oauth-1-0a/api-key-and-secret)) values are generated automatically for your newly created app entry. Make sure you copy both of these as they will be needed later for setting up Twitter in the {{config.extra.arcana.dashboard_name}}. 
 
<figure markdown="span">
  ![Twitter Keys and Secret]({{config.extra.arcana.img_dir}}/twitter_new_app_keys_secret.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>Twitter Keys and Secret</figcaption>
</figure>

After this, you need to select OAuth Setup as shown below and configure the **Redirect URI** and the app deployment website domain.

{% include "./text-snippets/warn_redirect_uri_add.md" %}

<figure markdown="span">
  ![Setup App OAuth]({{config.extra.arcana.img_dir}}/twitter_oauth_settings.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>Setup App OAuth</figcaption>
</figure>

When you click **Setup**, you will see OAuth options. For the *Type of App* field, select the *Web App* option.

<figure markdown="span">
  ![Select Twitter Web App Option]({{config.extra.arcana.img_dir}}/twitter_oauth_typeofapp.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>Select Twitter Web App Option</figcaption>
</figure>

In the **App Info** section, select the **Redirect URI** field. You need to specify the app [callback URL](https://developer.twitter.com/en/docs/apps/callback-urls) in the [Twitter settings](https://www.cozmoslabs.com/docs/profile-builder-2/add-ons/social-connect/create-twitter-app-social-connect/) as the redirect URI copied from the {{config.extra.arcana.dashboard_name}} in the previous step. 

| {{config.extra.arcana.dashboard_name}}  -> | Twitter Developer Portal OAuth Settings|
| --- | --- |
| Redirect URI -> |*Callback URI/Redirect URLs*|

<figure markdown="span">
  ![Set Twitter App Callback URL]({{config.extra.arcana.img_dir}}/twitter_callback_url_setting.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>Set Twitter App Callback URL</figcaption>
</figure>

Specify all the fields appropriately. Do not leave the optional fields empty.

- Website domain
- Organization details
- Terms of Service
- Privacy Policy

!!! an-warning "Enable Email ID Access"

      {{config.extra.arcana.sdk_name}} requires the Twitter user's email ID to verify the logged-in user's credentials. To enable this, Twitter makes it necessary that the Privacy Policy and Terms of Service are appropriately provided while creating a new app entry. For details, see [here](https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/manage-account-settings/api-reference/get-account-verify_credentials).

Make sure you save all the settings.

!!! an-tip "Where can I find API Key and Secrets?"

      Copy the **API Key** and the **API Key Secret** from the **App Settings** section in the Twitter Developer Dashboard. Refer to the *Keys and Tokens* tab. In the **Consumer Keys** section, there is an option to regenerate the API key and secret. 

      These details will be required in the next step while specifying the Twitter app configuration in the {{config.extra.arcana.dashboard_name}}.

### 3. Update Social Auth

In the {{config.extra.arcana.dashboard_name}}, click **Configure > Social Auth** and choose **Twitter** icon to view Twitter settings. Use the **Twitter API Key** and the **Twitter API Secret** obtained from the Twitter Developer Portal and paste them into the {{config.extra.arcana.dashboard_name}} Twitter settings.

<figure markdown="span">
  ![Update Twitter API Key]({{config.extra.arcana.img_dir}}/an_dApp_twitter_config.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>Update Twitter API Key</figcaption>
</figure>

Save the **Social Auth** settings. 

*You are all set with the Twitter configuration.*
