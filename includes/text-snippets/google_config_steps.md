Web3 apps can enable user onboarding via Google by configuring the **Social Auth** settings in the {{config.extra.arcana.dashboard_name}} and then integrating the app with the {{config.extra.arcana.sdk_name}}.

## Step 1: Get Redirect URI

Go to the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}

[Register the app]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md#step-2-register-application) by creating a new entry using the 'Create New App' wizard. 

!!! tip "Registering App"

      {% include "./text-snippets/socialauth_add_config.md" %}

Go to the **Configure->Social Auth** configuration section in the app configuration screen and copy the **redirect URI** value displayed there.  This will be used in the next step to generate Google Client ID.

![redirect_page](/img/an_dApp_config_redirect_uri.png){.an-screenshots}

Do not close the {{config.extra.arcana.dashboard_name}} browser tab. Open another tab and continue with the next step. Then come back to the {{config.extra.arcana.dashboard_name}} tab and complete Google Client ID settings.

## Step 2: Google Developer Console

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

## Step 3: Update the {{config.extra.arcana.dashboard_name}}

Revisit the {{config.extra.arcana.dashboard_name}}. Click on the app entry and visit the application configuration screen. Click **Configure->Social Auth** in the LHS navigation bar. Refer to the "Google" settings and paste the **Client ID** assigned by Google Cloud Console in the previous step. 

![howto_google_auth_type](/img/an_dApp_google_config.png){.an-screenshots}

Save the settings. Arcana Network assigns a **{{config.extra.arcana.app_address}}** to every registered and configured app. You need to save this **{{config.extra.arcana.app_address}}** and use it while integrating the app with the {{config.extra.arcana.sdk_name}}.

![App Identifier](/img/an_db_app_address.png){.an-screenshots}

*You are all set with the Google configuration. [Integrate the Web3 app]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) with the {{config.extra.arcana.sdk_name}}, [onboard users]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/index.md) and enable the authenticated users to sign blockchain transactions. See [{{config.extra.arcana.wallet_name}} Developer's Guide]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md) for details.*