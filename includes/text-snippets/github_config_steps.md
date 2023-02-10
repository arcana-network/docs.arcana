To enable GitHub based social authentication in Web3 applications, developers must perform these three steps before integrating with the Arcana Auth SDK.

## Step 1: Use Arcana Dashboard

Go to the Arcana Dashboard: {% include "./text-snippets/db_portal_url.md" %}

!!! tip "Registering the Application"
          
      {% include "./text-snippets/socialauth_add_config.md" %}
  
Register your dApp by creating a new dApp entry and specify a dApp name. Use defaults for other settings or change them as per your use case. Refer to the [how to configure dApp guide]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) for details.

Go to the `Configure->Social Auth` configuration section and copy the **redirect URI** value displayed there.   This will be used in the next step to generate GitHub OAuth credentials.

![redirect_page](/img/an_dApp_config_redirect_uri.png)

Do not close the dashboard browser tab. Open another tab and set up GitHub OAuth. Then come back to the Dashboard tab and complete the dApp configuration settings.

## Step 2: GitHub Developer Settings

Go to the [GitHub Developer Settings > OAuth Apps](https://github.com/settings/applications/new) and register your dApp as a new GitHub application. 

![github console](/img/an_dApp_github_dev_console.png)

- Enter the application name.
- Specify the homepage URL where your dApp is deployed.
- Provide a brief description of your dApp. 

![github config details](/img/an_dApp_github_dev_console_config_details.png)

Use the **redirect URI** value that you saved in the previous step from the `Auth` tab of the Arcana Network Dashboard, in the **Authorization callback URL** field. See [here](https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps) for GitHub OAuth details.

Save the newly registered application in GitHub Developer Settings. GitHub will generate a unique **ClientID** and a **secret** for this new application entry.

![GitHub OAuth ClientID](/img/an_dApp_github_clientID.png)

Copy and save the **Client ID** and the **secret** assigned by GitHub for the newly registered application. It will be required in the next step while completing the Arcana Dashboard dApp configuration.

## Step 3: Update Arcana Dashboard

Revisit the Arcana Developer Dashboard portal. Click on your app entry and visit the application dashboard page. Click `Configure->Social Auth` in the LHS navigation bar and refer to the "GitHub" field. Paste the **Client ID** and the **Secret** assigned by GitHub, in the previous step.

![howto_config_github_clientid](/img/an_dApp_github_config.png)

Save the settings. Arcana Network assigns an **App Address** to every registered and configured dApp. You need to save this **App Address** and use it while integrating the dApp with the Auth SDK. ![App Address](/img/an_db_app_address.png)

*You are all set with GitHub Setup. Integrate Web3 application with the Arcana Auth SDK and call social login function when the user chooses to log in.*