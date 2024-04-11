{% include "./text-snippets/config_common_steps.md" %}

## App-specific Keys

Follow these steps to configure the **Social Auth** settings and enable user onboarding via Twitter. It requires developers to use the {{config.extra.arcana.dashboard_name}} and the [Twitter Developer Account](https://developer.twitter.com/en/docs/twitter-api/getting-started/getting-access-to-the-twitter-api).

### Step 1: Get Redirect URI  

Select the app in the **Manage Apps** dashboard screen and click Testnet/Mainnet to configure Twitter in the respective configuration profile. Go to **Configure > Social Auth**. Copy the redirect URI shown on the top right.

![redirect_page](/img/an_dApp_config_redirect_uri.png){.an-screenshots}

Do not close the **Social Auth** browser tab in the {{config.extra.arcana.dashboard_name}}. Open another tab and set up Twitter OAuth.

## Step 2: Use the Twitter Developer Console

!!! an-caution "Twitter Elevated Access Required"

      The app developer is required to have a [Twitter Developer Account](https://developer.twitter.com/en/docs/twitter-api/getting-started/getting-access-to-the-twitter-api). To configure and use the Twitter Developer Portal to generate Twitter OAuth credentials, you need to have [Twitter Elevated Access](https://developer.twitter.com/en/docs/twitter-api/getting-started/about-twitter-api#v2-access-level). 

Go to the [Twitter Developer Portal](https://developer.twitter.com/en/portal/projects-and-apps) and create a new app entry for setting up the OAuth credentials for the app.

![Twitter console](/img/an_dApp_twitter_dev_console.png){.an-screenshots}

Select an appropriate environment and create a new name for the app on the Twitter Developer Portal.

![Twitter new app entry](/img/twitter_new_app_setup.png){.an-screenshots}

In the **Keys and Tokens** tab, the **API Key** and **API Key Secret** values are generated automatically for your newly created app entry. Make sure you copy both of these as they will be needed later for setting up Twitter in the {{config.extra.arcana.dashboard_name}}. 
 
![Twitter keys and secret](/img/twitter_new_app_keys_secret.png){.an-screenshots}

After this, you need to select OAuth Setup as shown below and configure the **Redirect URI** and the app deployment website domain.

![Twitter redirect URI setup](/img/twitter_oauth_settings.png){.an-screenshots}

When you click **Setup**, you will see OAuth options.  For the *Type of App* field, select the *Web App* option.

![Twitter web app option](/img/twitter_oauth_typeofapp.png){.an-screenshots}

In the **App Info** section, select the **Redirect URI** field. You need to specify the app [callback URL](https://developer.twitter.com/en/docs/apps/callback-urls) in the [Twitter settings](https://www.cozmoslabs.com/docs/profile-builder-2/add-ons/social-connect/create-twitter-app-social-connect/) as the redirect URI copied from the {{config.extra.arcana.dashboard_name}} in the previous step. 

![Twitter callback setting](/img/twitter_callback_url_setting.png){.an-screenshots}

Specify all the fields appropriately. Do not leave the optional fields empty.

- Website domain
- Organization details
- Terms of Service
- Privacy Policy

!!! an-caution

      {{config.extra.arcana.sdk_name}} requires the Twitter user's email ID to verify the logged-in user's credentials. To enable this, Twitter makes it necessary that the Privacy Policy and Terms of Service are appropriately provided while creating a new app entry. For details, see [here](https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/manage-account-settings/api-reference/get-account-verify_credentials).

Make sure you save all the settings.

!!! an-tip 

      If you miss copying the **API Key** and the **API Key Secret** earlier, you can go **App Settings** section in the Twitter Developer Dashboard. Refer to the *Keys and Tokens* tab. You will see under the **Consumer Keys** section, there is an option to regenerate the API key and secret. Make sure you copy both of these details.

      These details will be required in the next step while completing the app configuration using the {{config.extra.arcana.dashboard_name}}.

## Step 3: Update Twitter Social Auth Settings

In the {{config.extra.arcana.dashboard_name}}, click **Configure > Social Auth**. Refer to the empty fields next to the "Twitter" setting. Paste the **API Key** assigned by Twitter, in the previous step. 

![Copy Client ID](/img/an_dApp_twitter_config.png){.an-screenshots}

Save the **Social Auth** settings. 

*You are all set with the Twitter configuration!*
