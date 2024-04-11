Clicking **Configure** in the {{config.extra.arcana.dashboard_name}} shows the following configuration categories:

* Branding
* Social Auth 
* Chain Management
* Arcana Wallet
* Keyspace
* Gasless

<img class="an-screenshots" src="/img/an_db_configure_details.png" alt="config details"/>

**Click** on the tabs below to see the various configuration settings in each category.

=== "Branding"

    The **Branding** settings control the look and feel of the embedded {{config.extra.arcana.wallet_name}} displayed in an app's context.

    * Upload Logo
    * Wallet Theme
    
    <img alt="Branding" class="an-screenshots" src="/img/an_db_configure_branding.png"></img>

=== "Social Auth"

    The **Social Auth** settings manage the user onboarding experience and control which social login providers are available for app login. 

    * Social Auth
    * Identity Access Managers

    Developers can enable one or more providers for app login. Passwordless login is automatically enabled for all registered apps.

   See [[index-configure-auth|how to configure authentication providers]], for details.

    !!! an-note "Redirect URI"
           
          The Redirect URI  field in the **Social Auth** section of the dashboard lists an auto-generated URL. This URL value is used as input when configuring the social login providers.

=== "Chain Management"

    The **Chain Management** settings control which chains will be displayed as the default active chain in the wallet from the list of pre-configured chains available out of the box for apps that integrate with the {{config.extra.arcana.sdk_name}}.

    <img src="/img/an_db_chain_mngt_options.png" alt="Chain Management Settings" class="an-screenshots"/>

    * Add Chains
    * Edit Chains
    * Set Default Chain

    <img src="/img/an_db_chains_default.gif" alt="Set Default Chain" class="an-screenshots"/>

    For details, see [[configure-wallet-chains|how to manage chains]].

=== "{{config.extra.arcana.wallet_name}}"

    The **{{config.extra.arcana.wallet_name}}** settings display whether the app is registered using the built-in, default wallet UI or a custom UI. It also allows to restrict the domain where the {{config.extra.arcana.wallet_name}} can be loaded successfully within an app's context.

    * Wallet Domain
    * Wallet UI
    
    <img class="an-screenshots" alt="Social Login" src="/img/an_db_configure_wallet.png"></img>

=== "Keyspace"

    The following **Keyspace** settings control whether the wallet address for the user remains the same across all the apps that are integrated with the {{config.extra.arcana.sdk_name}} or are unique for each app. 

    * App-Specific Keys (default)
    * Global Keys

    Learn more about [[concept-keyspace-type|App-specific and global keys]] and how to set up [[dashboard-user-guide#configure-keyspace|keyspace]].

    ![Keyspace options](/img/an_db_keyspace_options.png){.an-screenshots}

=== "Gasless"

    The following **Gasless** settings control the establishment of gas tanks for selected blockchain networks, allocating funds in the gas tanks, whitelisting app operations for enabling [[concept-gasless-transactions|gasless transactions]] through the {{config.extra.arcana.wallet_name}} or third-party wallets.  

    * Add Gas Tank
    * Deposit/Withdraw Gas Tank Funds
    * Enable/Pause Gas Tank
    * Whitelist app operations

    !!! an-tip "Account Abstraction: SCW Account"

          Gasless transactions require enabling **SCW** user accounts or [[concept-gasless-transactions#gasless-user-accounts|'gasless accounts']] that are different from the typical **EOA** user accounts.
    
    Developers must explicitly set up gas tanks per blockchain network to enable paymasters to bear gas fees for sponsored transactions for that specific chain. The gas tanks should have sufficient crypto assets deposited to fund the app user's transactions. Also, developers must whitelist one or more app operations for gasless transactions.  Only the gas fees for the whitelisted operations will be paid via the gas tank as long as there is sufficient credit in the gas tank. For all the non-whitelisted app operations, or in case the gas tank assets run out, the transaction gas fees will have to be paid by through the user's smart contract wallet. For details, see [[configure-gasless|how to configure gasless transactions]] in apps integrating with the {{config.extra.arcana.sdk_name}}.

    <img src="/img/an_gl_db_new_config.png" alt="Set up Gas Tanks" class="an-screenshots"/>

**Save** the configuration settings to make sure the setting changes take effect.

<img src="/img/an_db_save_config_settings.png" alt="Save Config Settings" class="an-screenshots"/>
