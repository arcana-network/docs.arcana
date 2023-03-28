Web3 apps can select and enable user onboarding via GitHub by configuring the **Social Auth** settings in the {{config.extra.arcana.dashboard_name}} before integrating the app with the {{config.extra.arcana.sdk_name}}.

!!! warning

      Some of the authentication provider configuration steps are performed using the [GitHub Developer Settings Dashboard](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app), whereas the others use the {{config.extra.arcana.dashboard_name}}. After configuring GitHub, simply [integrate the app]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) with the {{config.extra.arcana.sdk_name}}, initialize the `AuthProvider`, and only then add code in the app to trigger user authentication via GitHub.
      
## Step 1: Get Redirect URI

Go to the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}

[Register the app]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md#step-2-register-application) by creating a new entry using the 'Create New App' wizard. 

!!! tip "Registering App"
          
      {% include "./text-snippets/socialauth_add_config.md" %}

Go to the app configuration screen on the {{config.extra.arcana.dashboard_name}} and click **Configure > Social Auth** section in the LHS. Copy the **redirect URI** value displayed on the top RHS. This will be used in the next step to generate GitHub OAuth credentials.

![Redirect page](/img/an_dApp_config_redirect_uri.png){.an-screenshots}

Do not close the {{config.extra.arcana.dashboard_name}} browser tab. Open another tab and set up GitHub OAuth. Then come back to the {{config.extra.arcana.dashboard_name}} tab and complete the app configuration settings.

## Step 2: GitHub Developer Settings

Go to the [GitHub Developer Settings > OAuth Apps](https://github.com/settings/applications/new) and register the app as a new GitHub application.

![GitHub console](/img/an_dApp_github_dev_console.png){.an-screenshots}

- Enter the app name.
- Specify the homepage URL where the app is deployed.
- Provide a brief description of the dApp.

![GitHub config details](/img/an_dApp_github_dev_console_config_details.png){.an-screenshots}

Use the **redirect URI** value that you saved in the previous step from the `Auth` tab of the {{config.extra.arcana.dashboard_name}}d, in the **Authorization callback URL** field. See [here](https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps) for GitHub OAuth details.

Save the newly registered application in GitHub Developer Settings. GitHub will generate a unique **ClientID** and a **secret** for this new application entry.

![GitHub OAuth ClientID](/img/an_dApp_github_clientID.png){.an-screenshots}

Copy and save the **Client ID** and the **secret** assigned by GitHub for the newly registered app. It will be required in the next step while completing the {{config.extra.arcana.dashboard_name}} app configuration.

## Step 3: Update the {{config.extra.arcana.dashboard_name}}

Revisit the {{config.extra.arcana.dashboard_name}}. View the app configuration screen. Click **Configure > Social Auth** in the LHS navigation bar and refer to the "GitHub" field. Paste the **Client ID** and the **Secret** assigned by GitHub, in the previous step.

![howto configure GitHub clientid](/img/an_dApp_github_config.png){.an-screenshots}

Save the settings. {{config.extra.arcana.company_name}} assigns a **{{config.extra.arcana.app_address}}** to every registered app. You need to save this **{{config.extra.arcana.app_address}}** and use it while integrating the app with the {{config.extra.arcana.sdk_name}}.

![App Identifier](/img/an_db_app_address.png){.an-screenshots}

*You are all set with the GitHub configuration. [Integrate the Web3 app]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) with the {{config.extra.arcana.sdk_name}}, [onboard users]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/index.md) and enable the authenticated users to sign blockchain transactions. See [{{config.extra.arcana.wallet_name}} Developer's Guide]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md) for details.*
