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

    !!! warning "Keyspace Global Keys: No social provider setup needed"

          {% include "./text-snippets/warn_global_keys_no_social_clientid_setup.md" %}

=== "Chain Management"

    Use the chain management section to specify the subset of chains from the list of supported blockchains that are configured for the {{config.extra.arcana.wallet_name}} out of the box. This specified subset will be displayed in the {{config.extra.arcana.wallet_name}} UI when a user logs into an app that is integrated with the {{config.extra.arcana.sdk_name}}. Developers can also specify which chain will be the default and show up in the wallet 'Network' dropdown list on the top.

    <img src="/img/an_db_chain_mngt_options.png" alt="Chain Management Settings" class="an-screenshots"/>

    **Add Chains:** Click **Add Chains** to add a new blockchain to the {{config.extra.arcana.wallet_name}}. Make sure it is one of the [[state-of-the-arcana-auth#supported-blockchains|supported blockchains]] for the {{config.extra.arcana.product_name}} product.

    <img src="/img/an_db_chains_default.gif" alt="Set Default Chain" class="an-screenshots"/>

    For details, see [[configure-wallet-chains|how to manage chains]].

=== "{{config.extra.arcana.wallet_name}}"

    Use the {{config.extra.arcana.wallet_name}} section to specify additional, optional security settings.

    * **Wallet:** Website Domain - Set the website domain used by the server, to secure and restrict {{config.extra.arcana.wallet_name}} from loading anywhere else other than the specified domain. {{config.extra.arcana.company_name}} uses the frame-ancestor CSP for restricted domains.<br></br><img class="an-screenshots" alt="Social OAuth" src="/img/an_db_configure_wallet.png"></img>

<!-- #AR-6971
=== "Gasless"

    Use the 'Gasless' section to configure [[concept-gasless-transactions|gasless transactions]] for app users.  
    
    Developers must explicitly set up gas tanks per blockchain network to enable paymasters to bear gas fees for sponsored transactions for that specific chain. The gas tanks should have sufficient crypto assets deposited to fund the app user's transactions. Also, developers must whitelist one or more app operations for gasless transactions.  Only the gas fees for the whitelisted operations will be paid via the gas tank as long as there is sufficient credit in the gas tank. 
    
    For all the non-whitelisted app operations, or in case the gas tank assets run out, the transaction gas fees will have to be paid by the individual user via the user's smart contract wallet associated with the app. 

    Gasless transactions require enabling **SCW** user accounts or [[concept-gasless-transactions#gasless-user-accounts|'gasless accounts']] that are different from the typical **EOA** user accounts.

    Developers can pause and resume gas tanks.

    <img src="/img/an_gl_db_new_config.png" alt="Set up Gas Tanks" class="an-screenshots"/>

    For details, see [[configure-gasless|how to configure gasless transactions]] in apps integrating with the {{config.extra.arcana.sdk_name}}.
-->
=== "Keyspace"

    Use the **Keyspace** section to select the **App-specific** (default) or **Global Keys** feature. Global keys are less secure but allow app users to have the same wallet address across different applications in the {{config.extra.arcana.company_name}} ecosystem. Learn more about [[concept-keyspace-type|App-specific and global keys]] and how to use the [[dashboard-user-guide#configure-mainnet-keyspace|{{config.extra.arcana.dashboard_name}}User Guide]] to configure keyspace.

    ![Mainnet Keyspace options](/img/an_db_keyspace_options.png){.an-screenshots}

    !!! caution "Keyspace Settings: Available for 'Mainnet'"

           The 'Keyspace' tab is visible only if a developer chooses to create a 'Mainnet' configuration profile for the app. 

           There are certain limitations when the 'Global Keys' option is selected by developers for an app integrating with the {{config.extra.arcana.product_name}} product. Make sure you understand these [[concept-keyspace-type|limitations]] related to feature restriction, switching between app-specific and global keys, security and other implications associated with the 'Global Keys' usage. 

Make sure you save the configuration settings before leaving the {{config.extra.arcana.dashboard_name}} page in your browser.