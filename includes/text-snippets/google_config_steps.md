{% include "./text-snippets/config_common_steps.md" %}

## App-specific Keys

Follow these steps to configure the **Social Auth** settings and enable user onboarding via Google. It requires developers to use the {{config.extra.arcana.dashboard_name}} and the [Google Cloud Console](http://console.cloud.google.com/apis/credentials).

### Step 1: Get Redirect URI 

Select the app in the **Manage Apps** dashboard screen and click Testnet/Mainnet to configure Google in the respective configuration profile.  Go to **Configure > Social Auth**. Copy the redirect URI shown on the top right.

<figure markdown="span">
  ![Copy Redirect URI]({{config.extra.arcana.img_dir}}/an_dApp_config_redirect_uri.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
  <figcaption>Copy Redirect URI</figcaption>
</figure>

Do not close the **Social Auth** browser tab in the {{config.extra.arcana.dashboard_name}}. Open another tab to access the Google Cloud Console and configure Google OAuth. 

### Step 2: Get Google ClientID

Go to the [Google Cloud Console](http://console.cloud.google.com/apis/credentials). Create a new OAuth 2.0 credential for your dApp.

<figure markdown="span">
  ![Set up Google OAuth 2.0]({{config.extra.arcana.img_dir}}/google_console_redirect.{{config.extra.arcana.img_png}}){ .an-screenshots .width_50pc }
  <figcaption>Set up Google OAuth 2.0</figcaption>
</figure>

In the Google Cloud Console, select the option to set up credentials for a web application. 

<figure markdown="span">
  ![Specify Redirect URI]({{config.extra.arcana.img_dir}}/an_google_clientID_create.{{config.extra.arcana.img_png}}){ .an-screenshots .width_50pc }
  <figcaption>Specify Redirect URI</figcaption>
</figure>

Specify the **redirect URI** value to the one that you saved in the previous step from the `Auth` tab of the {{config.extra.arcana.dashboard_name}}. 

!!! an-info "Redirect URI"

      The redirect URI refers to the endpoint to which the Google OAuth 2.0 server can send authentication responses. These endpoints must adhere to [Google’s validation rules](https://developers.google.com/identity/protocols/oauth2/web-server#uri-validation).

Complete the steps in Google Cloud Console for creating a new OAuth 2.0 credential. It will generate a unique **ClientID**.

<figure markdown="span">
  ![Copy Google ClientID]({{config.extra.arcana.img_dir}}/an_google_clientID_copy.{{config.extra.arcana.img_png}}){ .an-screenshots .width_50pc }
  <figcaption>Copy Google ClientID</figcaption>
</figure>

Save the **Client ID** assigned by Google. It will be required in the next step.

### Step 3: Update Google Social Auth Settings

In the {{config.extra.arcana.dashboard_name}}, click **Configure > Social Auth**. Refer to the empty fields next to the "Google" setting. Paste the Google **Client ID** copied in the previous step. 

<figure markdown="span">
  ![Specify Google Client ID]({{config.extra.arcana.img_dir}}/an_dApp_google_config.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
  <figcaption>Specify Google ClientID</figcaption>
</figure>

Save the **Social Auth** settings. 

*You are all set with the Google configuration!*
