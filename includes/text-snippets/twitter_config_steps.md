Web3 apps can select and enable user onboarding via Twitter by configuring the **Social Auth** settings in the {{config.extra.arcana.dashboard_name}} before integrating the app with the {{config.extra.arcana.sdk_name}}.

!!! warning

      Some of the authentication provider configuration steps are performed using the [Twitter Developer Portal](https://developer.twitter.com/en/apps), whereas the others use the {{config.extra.arcana.dashboard_name}}. After configuring Twitter, simply [integrate the app]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) with the {{config.extra.arcana.sdk_name}}, initialize the `AuthProvider`, and only then add code in the app to trigger user authentication via Twitter.
      
## Step 1: Get Redirect URI

Go to the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}

[Register the app]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md#step-2-register-application) by creating a new entry using the 'Create New App' wizard. 

!!! tip "Registering App"
    
      {% include "./text-snippets/socialauth_add_config.md" %}

Go to the app configuration screen on the {{config.extra.arcana.dashboard_name}} and click **Configure > Social Auth** section in the LHS. Copy the **redirect URI** value displayed on the top RHS. This will be used in the next step to generate Twitter authentication credentials.

![redirect_page](/img/an_dApp_config_redirect_uri.png){.an-screenshots}

Do not close the {{config.extra.arcana.dashboard_name}} browser tab. Open another tab and set up Twitter OAuth. Then come back to the {{config.extra.arcana.dashboard_name}} tab and complete the app configuration.

## Step 2: Use the Twitter Developer Console

!!! caution

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

!!! caution

      {{config.extra.arcana.sdk_name}} requires the Twitter user's email ID to verify the logged-in user's credentials. To enable this, Twitter makes it necessary that the Privacy Policy and Terms of Service are appropriately provided while creating a new app entry. For details, see [here](https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/manage-account-settings/api-reference/get-account-verify_credentials).

Make sure you save all the settings.

!!! tip 

      If you miss copying the **API Key** and the **API Key Secret** earlier, you can go **App Settings** section in the Twitter Developer Dashboard. Refer to the *Keys and Tokens* tab. You will see under the **Consumer Keys** section, there is an option to regenerate the API key and secret. Make sure you copy both of these details.

      These details will be required in the next step while completing the app configuration using the {{config.extra.arcana.dashboard_name}}.

## Step 3: Update the {{config.extra.arcana.dashboard_name}}

Revisit the {{config.extra.arcana.dashboard_name}}. View the app configuration screen. Click **Configure > Social Auth** in the LHS navigation bar. Refer to the "Twitter" settings and paste the **API Key** assigned by Twitter, in the previous step. 

![Copy Client ID](/img/an_dApp_twitter_config.png){.an-screenshots}

Save the settings. {{config.extra.arcana.company_name}} assigns an **{{config.extra.arcana.app_address}}** to every registered app. You need to save this **{{config.extra.arcana.app_address}}** and use it while integrating the app with the {{config.extra.arcana.sdk_name}}. 

![App Identifier](/img/an_db_app_address.png){.an-screenshots}

*You are all set with the Twitter configuration. [Integrate the Web3 app]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) with the {{config.extra.arcana.sdk_name}}, [onboard users]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/index.md) and enable the authenticated users to sign blockchain transactions. See [{{config.extra.arcana.wallet_name}} Developer's Guide]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md) for details.*
