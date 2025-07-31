{% include "./text-snippets/config_common_steps.md" %}

## App-specific Keys

Follow these steps to configure the **Social Auth** settings and enable user onboarding via GitHub. It requires developers to use the {{config.extra.arcana.dashboard_name}} and the [GitHub Developer Settings Dashboard](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app).
      
### 1. Get Redirect URI

Select the app in the **Manage Apps** dashboard screen and click Testnet/Mainnet to configure GitHub in the respective configuration profile Go to **Configure > Social Auth**. Copy the redirect URI shown on the top right.

<figure markdown="span">
  ![Copy Redirect URI]({{config.extra.arcana.img_dir}}/an_dApp_config_redirect_uri.{{config.extra.arcana.img_png}}){ .an-screenshots  }
  <figcaption>Copy Redirect URI</figcaption>
</figure>

Do not close the {{config.extra.arcana.dashboard_name}} browser tab. Open another tab and set up GitHub OAuth.

### 2. Get GitHub ClientID, Secret

Go to the [GitHub Developer Settings > OAuth Apps](https://github.com/settings/applications/new) and register the app as a new GitHub application.

<figure markdown="span">
  ![GitHub console]({{config.extra.arcana.img_dir}}/an_dApp_github_dev_console.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>GitHub OAuth Settings</figcaption>
</figure>

- Enter the app name.
- Specify the homepage URL where the app is deployed.
- Provide a brief description of the dApp.

<figure markdown="span">
  ![GitHub Configuration]({{config.extra.arcana.img_dir}}/an_dApp_github_dev_console_config_details.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>GitHub Configuration</figcaption>
</figure>

Use the **redirect URI** value that you saved in the previous step from the `Auth` tab of the {{config.extra.arcana.dashboard_name}}d, in the **Authorization callback URL** field. See [here](https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps) for GitHub OAuth details.

Save the newly registered application in GitHub Developer Settings. GitHub will generate a unique **ClientID** and a **secret** for this new application entry.

<figure markdown="span">
  ![Get GitHub OAuth ClientID]({{config.extra.arcana.img_dir}}/an_dApp_github_clientID.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>Get GitHub OAuth ClientID</figcaption>
</figure>

Copy and save the **Client ID** and the **secret** assigned by GitHub for the newly registered app. It will be required in the next step while completing the {{config.extra.arcana.dashboard_name}} app configuration.

!!! an-warning "GitHub Email Settings"

    Make sure your GitHub developer profile email settings are **NOT private**. If it is marked private then the [[concept-social-login|social login]] and the [[concept-aggregate-login|aggregate login]] features offered by the {{config.extra.arcana.sdk_name}} will not work due to [[troubleshooting#configuration-issues|configuration issues]].

    1. In your GitHub profile setting, allow your email to be visible
    2. In the GitHub Email Settings preferences, make sure you do not select the checkbox which says 'Keep my email address private'.

    Refer to the figure below for details:

    <figure markdown="span">
      <img class="an-screenshots width_50pc" alt="GitHub Profile: Email Visible" src="{{config.extra.arcana.img_dir}}/an_trbs_gh_issue_visible_email.{{config.extra.arcana.img_png}}"/>
      <figcaption>GitHub Profile: Email Visible</figcaption>
    </figure>

    <figure markdown="span">
      <img class="an-screenshots width_50pc"  alt="GitHub Email Settings: Not Private" src="{{config.extra.arcana.img_dir}}/an_trbs_gh_issue_email_not_private.{{config.extra.arcana.img_png}}" width="50%"/>
    <figcaption>GitHub Email Settings: Should Not be Private</figcaption>

### 3. Update Social Auth

Revisit the {{config.extra.arcana.dashboard_name}}. View the app configuration screen. Click **Configure > Social Auth** in the LHS navigation bar and refer to the "GitHub" field. Paste the **Client ID** and the **Secret** assigned by GitHub, in the previous step.

In the {{config.extra.arcana.dashboard_name}}, click **Configure > Social Auth**. Refer to the empty fields next to the "GitHub" setting. Paste the **ClientID** and **Secret** obtained in the previous step as the `ClientID` and `secret`, respectively. 

<figure markdown="span">
  ![Update GitHub ClientID]({{config.extra.arcana.img_dir}}/an_dApp_github_config.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>Update GitHub ClientID</figcaption>
</figure>

Save the **Social Auth** settings. 

*You are all set with the GitHub configuration.*
