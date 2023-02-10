To enable Twitter based social authentication in Web3 applications, developers must perform these three steps before integrating with the Arcana Auth SDK.

## Step 1: Use Arcana Dashboard

Go to the Arcana Dashboard: {% include "./text-snippets/db_portal_url.md" %}

Register your dApp by creating a new dApp entry and specifying a name using the 'Create New App' wizard.

!!! tip "Registering the Application"
    
      {% include "./text-snippets/socialauth_add_config.md" %}

Go to the `Configure->Social Auth` configuration section and copy the **redirect URI** value displayed there.   This will be used in the next step to generate Twitter authentication credentials.

![redirect_page](/img/an_dApp_config_redirect_uri.png)

You can choose to use defaults for other settings or change them as per your use case. Refer to the [how to configure dApp guide]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) for details. 

Do not close the dashboard browser tab. Open another tab and set up Twitter OAuth. Then come back to the Dashboard tab and complete the dApp configuration settings.

## Step 2: Use Twitter Developer Console

!!! caution

      The dApp developer is required to have a [Twitter Developer Account](https://developer.twitter.com/en/docs/twitter-api/getting-started/getting-access-to-the-twitter-api). To configure and use the Twitter Developer Portal to generate Twitter OAuth credentials, you need to have [Twitter Elevated Access](https://developer.twitter.com/en/docs/twitter-api/getting-started/about-twitter-api#v2-access-level). 


Go to the [Twitter Developer Portal](https://developer.twitter.com/en/portal/projects-and-apps) and create a new application entry for setting up the OAuth credentials for your dApp.

![twitter console](/img/an_dApp_twitter_dev_console.png)

Select appropriate environment and create a new name for your dApp on the Twitter Developer Portal.

![twitter new app entry](/img/twitter_new_app_setup.png)

In the **Keys and Tokens** tab, you will see **API Key** and **API Key Secret** values are generated automatically for your newly created app entry. Make sure you copy both of these as they will be needed later for setting up Twitter in the Arcana Dashboard. 
 
![twitter keys and secret](/img/twitter_new_app_keys_secret.png)

After this, you need to select OAuth Setup as shown below and configure the **Redirect URI** and your website domain.

![twitter redirect URI setup](/img/twitter_oauth_settings.png)

When you click **Setup**, you will see OAuth options.  For **Type of App**, select **Web App** option.

![twitter web app option](/img/twitter_oauth_typeofapp.png)

In the **App Info** section, select the **Redirect URI** field. You need to specify your dApp [callback URL](https://developer.twitter.com/en/docs/apps/callback-urls) in the [Twitter settings](https://www.cozmoslabs.com/docs/profile-builder-2/add-ons/social-connect/create-twitter-app-social-connect/) as the redirect URI copied from the Arcana Developer Dashboard in the previous step. ![Twitter callback setting](/img/twitter_callback_url_setting.png)

Specify all the fields appropriately. Do not leave the optional fields empty.

- Website domain
- Organization details
- Terms of Service
- Privacy Policy

!!! caution

      Arcana Auth SDK requires Twitter user's email ID in order to verify the logged in user's credentials. To enable this, Twitter makes it necessary that the Privacy Policy and Terms of Service are appropriately provided while creating a new app entry. For details, see [here](https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/manage-account-settings/api-reference/get-account-verify_credentials).

Make sure you save all the settings.

!!! tip 

      If you miss copying the **API Key** and the **API Key Secret** earlier, you can go the **App Settings** section in the Twitter Developer Dashboard. Refer to the *Keys and Tokens* tab. You will see under the **Consumer Keys** section, there is an option to regenerate the API key and secret. Make sure you copy both these details.

      These details will be required in the next step while completing the Arcana dashboard dApp configuration.

## Step 3: Update Arcana Dashboard

Revisit the Arcana Developer Dashboard portal. Click on your app entry and visit the application dashboard. Click `Configure->Social Auth` in the LHS navigation bar. Refer to the "Twitter" settings and paste the **API Key** assigned by Twitter, in the previous step. 

![howto_config_twitter_clientid](/img/an_dApp_twitter_config.png)

Save the settings. Arcana Network assigns an **App Address** to every registered and configured dApp. You need to save this **App Address** and use it while integrating the dApp with the Auth SDK. ![App Address](/img/an_db_app_address.png)

*You are all set with Twitter Setup. Integrate Web3 application with the Arcana Auth SDK and call social login function when the user chooses to log in.*