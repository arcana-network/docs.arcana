Click **Configure** in the LHS navigation of the app configuration screen in the {{config.extra.arcana.dashboard_name}} to bring up app configuration settings:

* Branding
* Social Auth 
* Chain Management
* Arcana Wallet
* Keyspace (Available only after the 'Mainnet' profile is created)

Use the defaults or provide inputs for various settings as per your application use case. These settings control {{config.extra.arcana.sdk_name}} usage, user onboarding, and blockchain transaction signing experience.

<img class="an-screenshots-noeffects" src="/img/an_db_configure_details.png" alt="config details" width="15%"/>

**Click** on the tabs below to see the various configuration settings in each category.

=== "Branding"

    Use branding settings to manage the look and feel of the embedded {{config.extra.arcana.wallet_name}} that shows up in an application context. By default, the {{config.extra.arcana.wallet_name}} displays <img src="/img/an_wallet_default_branding_logo.png" alt="The default branding logo" width="3%" /> logo and uses the dark theme.

    * **Upload Logo:** Upload light and dark theme branding/logo images that are displayed in the {{config.extra.arcana.wallet_name}} UI.
    * **Wallet Theme:** You can change the default 'dark' theme.<br></br><img alt="Branding" class="an-screenshots" src="/img/an_db_configure_branding.png"></img>

=== "Social Auth"

    Use the social authentication settings to manage the user onboarding experience. Only the social providers that are configured for an application will be made available in the {{config.extra.arcana.sdk_name}} as user onboarding options. Developers can enable multiple providers for an app and allow users to choose anyone to onboard the app. For details on how to configure authentication providers, see [[index-configure-auth|configuring social providers]].

    ??? example "Enable Google, Discord for Onboarding Users"
    
          To enable Google and Discord login options for an app, configure these social providers in the {{config.extra.arcana.dashboard_name}}.  You can leave other social provider entries blank.

          By default, passwordless login is always enabled in the {{config.extra.arcana.sdk_name}}.
    
    * **Redirect URI:** Displays the URL auto-generated for each registered app by {{config.extra.arcana.company_name}}. This is required to complete **OAuth** verification via the selected authentication providers.
    * **Social Auth:** Select and [[index-configure-auth|configure authentication providers]] for onboarding app users. <br></br><img class="an-screenshots" alt="Social OAuth" src="/img/an_db_configure_social.png"></img>

=== "Chain Management"

    Use the chain management section to specify the subset of chains from the list of supported blockchains that are configured for the {{config.extra.arcana.wallet_name}} out of the box. This specified subset will be displayed in the {{config.extra.arcana.wallet_name}} UI when a user logs into an app that is integrated with the {{config.extra.arcana.sdk_name}}. Developers can also specify which chain will be the default and show up in the wallet 'Network' dropdown list on the top.

    <img src="/img/an_db_chain_mngt_options.png" alt="Chain Management Settings" class="an-screenshots"/>

    **Add Chains:** Click **Add Chains** to add a new blockchain to the {{config.extra.arcana.wallet_name}}. Make sure it is one of the [[state-of-the-arcana-auth#supported-blockchains|supported blockchains]] for the {{config.extra.arcana.product_name}} product.

    <img src="/img/an_db_chains_default.gif" alt="Set Default Chain" class="an-screenshots"/>

    For details, see [[configure-wallet-chains|how to manage chains]].

=== "{{config.extra.arcana.wallet_name}}"

    Use the {{config.extra.arcana.wallet_name}} section to specify additional, optional security settings.

    * **Wallet:** Website Domain - Set the website domain used by the server, to secure and restrict {{config.extra.arcana.wallet_name}} from loading anywhere else other than the specified domain. {{config.extra.arcana.company_name}} uses the frame-ancestor CSP for restricted domains.<br></br><img class="an-screenshots" alt="Social OAuth" src="/img/an_db_configure_wallet.png"></img>

=== "Keyspace"

    Use the **Keyspace** section to select the **App-specific** (default) or **Global Keys** feature. Global keys are less secure but allow app users to have the same wallet address across different applications in the {{config.extra.arcana.company_name}} ecosystem. Learn more about [[concept-keyspace-type|App-specific and global keys]] and how to use the [[dashboard-user-guide#configure-mainnet-keyspace|{{config.extra.arcana.dashboard_name}}User Guide]] to configure keyspace.

    ![Mainnet Keyspace options](/img/an_db_keyspace_options.png){.an-screenshots}

    !!! caution "Available only for 'Mainnet' Configuration Profile"

           The 'Keyspace' tab is visible only if a developer chooses to create a 'Mainnet' configuration profile for the app.

           It is possible to use **App-Specific Keys** (default) at the start and change the keyspace type later to **Global Keys**. However, transitioning between the two will cause the user's wallet address to change.

    !!! caution "Custom Wallet UI: Global Keys Not supported"

      If a developer chooses the custom wallet UI feature during app registration, only app-specific keys are supported for such apps for security reasons. What this means is that authenticated users will see different wallet addresses when they sign in using the same authentication provider in a different app in the {{config.extra.arcana.company_name}} ecosystem.

Make sure you save the configuration settings before leaving the {{config.extra.arcana.dashboard_name}} page in your browser.