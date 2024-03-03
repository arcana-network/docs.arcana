{% include "./text-snippets/config_common_steps.md" %}

## App-specific Keys

Follow these steps to configure the **Social Auth** settings and enable user onboarding via Google. It requires developers to use the {{config.extra.arcana.dashboard_name}} and the [Google Cloud Console](http://console.cloud.google.com/apis/credentials).

### Step 1: Get Redirect URI 

Select the app in the **Manage Apps** dashboard screen and click Testnet/Mainnet to configure Google in the respective configuration profile.  Go to **Configure > Social Auth**. Copy the redirect URI shown on the top right.

![redirect_page](/img/an_dApp_config_redirect_uri.png){.an-screenshots}

Do not close the **Social Auth** browser tab in the {{config.extra.arcana.dashboard_name}}. Open another tab to access the Google Cloud Console and configure Google OAuth. 

### Step 2: Get Google ClientID

Go to the [Google Cloud Console](http://console.cloud.google.com/apis/credentials). Create a new OAuth 2.0 credential for your dApp.

![google_console_redirect](/img/google_console_redirect.png){.an-screenshots}

In the Google Cloud Console, select the option to set up credentials for a web application. 

![Google OAuth ClientID create](/img/an_google_clientID_create.png){.an-screenshots}

Specify the **redirect URI** value to the one that you saved in the previous step from the `Auth` tab of the {{config.extra.arcana.dashboard_name}}. 

!!! info "Redirect URI"

      The redirect URI refers to the endpoint to which the Google OAuth 2.0 server can send authentication responses. These endpoints must adhere to [Google’s validation rules](https://developers.google.com/identity/protocols/oauth2/web-server#uri-validation).

Complete the steps in Google Cloud Console for creating a new OAuth 2.0 credential. It will generate a unique **ClientID**.

![Google OAuth ClientID copy](/img/an_google_clientID_copy.png){.an-screenshots}

Save the **Client ID** assigned by Google. It will be required in the next step.

### Step 3: Update Google Social Auth Settings

In the {{config.extra.arcana.dashboard_name}}, click **Configure > Social Auth**. Refer to the empty fields next to the "Google" setting. Paste the Google **Client ID** copied in the previous step. 

![howto_google_auth_type](/img/an_dApp_google_config.png){.an-screenshots}

Save the **Social Auth** settings. 

*You are all set with the Google configuration!*
