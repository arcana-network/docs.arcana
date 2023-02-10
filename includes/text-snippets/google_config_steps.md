To enable Google based social authentication in Web3 applications, developers must perform these three steps before integrating with the Arcana Auth SDK.

## Step 1: Use Arcana Dashboard

Go to the Arcana Dashboard: {% include "./text-snippets/db_portal_url.md" %}

Register your dApp by creating a new dApp entry and specifying a name using the 'Create New App' wizard. .

!!! tip "Registering the Application"

      {% include "./text-snippets/socialauth_add_config.md" %}
  
You can use defaults for other settings or change them as per your use case. Refer to the [how to configure dApp guide]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) for details.

Go to the `Configure->Social Auth` configuration section and copy the **redirect URI** value displayed there.  This will be used in the next step to generate Google Client ID.

![redirect_page](/img/an_dApp_config_redirect_uri.png)

Do not close the dashboard browser tab. Open another tab and continue with the next step. Then come back to the Dashboard tab and complete Google Client ID settings.

## Step 2: Use Google Developer Console

Go to the [Google Cloud Console](http://console.cloud.google.com/apis/credentials). Create a new OAuth 2.0 credential for your dApp.

![google_console_redirect](/img/google_console_redirect.png)

In the Google Cloud Console, select the option to set up credentials for a web application. 

![Google OAuth ClientID create](/img/an_google_clientID_create.png)

Specify the **redirect URI** value to the one that you saved in the previous step from the `Auth` tab of the Arcana Network Dashboard. 

!!! info "Redirect URI"

      The redirect URI refers to the endpoint to which the Google OAuth 2.0 server can send authentication responses. These endpoints must adhere to [Google’s validation rules](https://developers.google.com/identity/protocols/oauth2/web-server#uri-validation).

Complete the steps in Google Cloud Console for creating a new OAuth 2.0 credential. It will generate a unique **ClientID**.

![Google OAuth ClientID copy](/img/an_google_clientID_copy.png)

Save the **Client ID** assigned by Google. It will be required in the next step.

## Step 3: Update Arcana Dashboard

Revisit the Arcana Developer Dashboard portal. Click on your app entry and visit the application dashboard. Click `Configure->Social Auth` in the LHS navigation bar. Refer to the "Google" settings and paste the **Client ID** assigned by Google Cloud Console in the previous step. 

![howto_google_auth_type](/img/an_dApp_google_config.png)

Save the settings on the dashboard. Arcana Network assigns an **App Address** to every registered and configured dApp. If you plan to integrate with Arcana SDKs, you need to save this **App Address**. 

![App Address](/img/an_db_address.png)

*You are all set with Google Setup. Integrate Web3 application with the Arcana Auth SDK and call social login function when the user chooses to log in.*