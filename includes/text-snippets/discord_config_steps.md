To enable Discord based social authentication in Web3 applications, developers must perform these three steps before integrating with the Arcana Auth SDK.

## Step 1: Use Arcana Dashboard

Go to the Arcana Dashboard: {% include "./text-snippets/db_portal_url.md" %} 

Register your dApp by creating a new dApp entry and specifying a name using the 'Create New App' wizard. 

!!! tip "Registering the Application"
    
      {% include "./text-snippets/socialauth_add_config.md" %}

You can choose to use defaults for other settings or change them as per your use case. Refer to the [how to configure dApp guide]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) for details.

Go to the `Configure->Social Auth` configuration section and copy the **redirect URI** value displayed there.  This will be used in the next step to setup Discord OAuth.![redirect_page](/img/an_dApp_config_redirect_uri.png)

Do not close the dashboard browser tab. Open another tab and set up Discord OAuth. Then revisit the Dashboard tab to complete the dApp configuration settings.

## Step 2: Use Discord Developer Portal

Go to the [Discord Developer Portal](https://discord.com/developers/applications) and create a new application.![discord console](/img/an_dApp_discord_dev_console.png)

You need to setup OAuth 2.0 credentials for your newly created dApp entry in the Discord Developer Portal. Click **OAuth2** in the Discord Developer Portal LHS navigation pane, you will see **Redirects** field. Specify the **Redirect URI** copied from the Arcana Developer Dashboard in the previous step.![discord console](/img/an_dApp_discord_dev_oauth_uri.png)

Save the application settings in Discord Developer Portal. 

In the **General Information** page, you will see that Discord assigns a unique **Application ID** and a **public key** for your application entry.![Discord OAuth ClientID](/img/an_dApp_discord_clientID.png)

Copy the **Application ID** and the **public key**. It will be required in the next step while configuring Discord settings using Arcana Dashboard.

## Step 3: Update Arcana Dashboard

Revisit the Arcana Developer Dashboard portal. Click on your app entry and visit the application dashboard. Click `Configure->Social Auth` in the LHS navigation bar and refer to the "Discord" settings. Paste the **Application ID** and **public key** assigned by Discord, in the previous step as the ClientID and secret respectively. 

![howto_config_discord_clientid](/img/an_dApp_discord_config.png)

Save the settings. Arcana Network assigns an **App Address** to every registered and configured dApp. If you plan to integrate with the Arcana SDKs, you need to save this **App Address**. 

![App Address](/img/an_db_app_address.png)

*You are all set with Discord Setup. Integrate Web3 application with the Arcana Auth SDK and call social login function when the user chooses to log in.*