Click **Configure** in the LHS navigation pane of the {{config.extra.arcana.dashboard_name}} to view the following configuration categories:

<figure markdown="span">
  <img class="an-screenshots width_85pc" src="{{config.extra.arcana.img_dir}}/an_db_configure_details.{{config.extra.arcana.img_png}}" alt="config details"/>
  <figcaption>Auth Settings</figcaption>
</figure>

=== "Branding"

    The **Branding** settings control the look and feel of the embedded {{config.extra.arcana.wallet_name}} displayed in an app's context.

    * Upload Logo
    * Wallet Theme

    See [[configure-wallet-branding|how to configure branding]] for details.
    
    <figure markdown="span">
      <img alt="Branding" class="an-screenshots " src="{{config.extra.arcana.img_dir}}/an_db_configure_branding.{{config.extra.arcana.img_png}}"/>
      <figcaption>Branding Settings</figcaption>
    </figure>

=== "Social"

    The **Social Auth** settings manage the user onboarding experience and control which social login providers are available for app login. 

    * Social Auth
    * Identity Access Managers
    * Custom Auth

    Developers can enable one or more providers for app login. Passwordless login is automatically enabled for all registered apps. See [[index-configure-auth|how to configure authentication providers]], for details.

    !!! an-note "Redirect URI"
           
          The Redirect URI  field in the **Social Auth** section of the dashboard lists an auto-generated URL. This URL value is used as input when configuring the social login providers.

    <figure markdown="span">
      <img alt="Social Auth" class="an-screenshots" src="{{config.extra.arcana.img_dir}}/an_db_configure_social.{{config.extra.arcana.img_png}}"/>
      <figcaption>Social Auth Settings</figcaption>
    </figure>         

=== "Chains"

    The **Chain Management** settings control which chains will be displayed as the default active chain in the wallet from the list of pre-configured chains available out of the box for apps that integrate with the {{config.extra.arcana.sdk_name}}.

    <figure markdown="span">
      <img src="{{config.extra.arcana.img_dir}}/an_db_chain_mngt_options.{{config.extra.arcana.img_png}}" alt="Chain Management Settings" class="an-screenshots"/>
      <figcaption>Chain Management Settings</figcaption>
    </figure>

    * Add Chains
    * Edit Chains
    * Set Default Chain

    <figure markdown="span">    
      <img src="{{config.extra.arcana.img_dir}}/an_db_chains_default.gif" alt="Set Default Chain" class="an-screenshots"/>
      <figcaption>Set Default Chain</figcaption>
    </figure>

    For details, see [[configure-wallet-chains|how to manage chains]].

=== "Wallet"

    The **{{config.extra.arcana.wallet_name}}** settings display whether the app is registered using the built-in, default wallet UI or a custom UI. It also allows for domain restriction whereby the {{config.extra.arcana.wallet_name}} can be loaded successfully within an app's context.

    * Wallet Domain
    * Wallet UI

    See [[configure-wallet-settings|wallet UI configuration]] for details.
    
    <figure markdown="span">
      <img alt="Social Login" src="{{config.extra.arcana.img_dir}}/an_db_configure_wallet.{{config.extra.arcana.img_png}}" class="an-screenshots"/>
      <figcaption>Wallet Settings</figcaption>
    </figure>

=== "Session"

    The login session management settings display whether the app is configured to use [[concept-session-type|persistent or non-persistent session]] (default) type. 
    
    For the persistent session, the developers can view and update the specified time for which the authenticated user login session is persisted (in minutes). Once a user closes the browser and reopens within this specified period, the user is automatically logged in. [[dashboard-user-guide#login-session-management|Learn more...]]
    
    <figure markdown="span">
      <img alt="Session Management" src="{{config.extra.arcana.img_dir}}/an_db_session_mngt.{{config.extra.arcana.img_png}}" class="an-screenshots"/>
      <figcaption>Session Management</figcaption>
    </figure>


=== "Keyspace"

    !!! an-warning "Not available for Custom Wallet UI"

          Apps that are registered with the *Custom Wallet UI* option are not allowed to configure keyspace settings. By default, such apps can only use the app-specific keys. 

    The following **Keyspace** settings control whether the wallet address for the user remains the same across all the apps that are integrated with the {{config.extra.arcana.sdk_name}} or are unique for each app. 

    * App-Specific Keys (default)
    * Global Keys

    Learn more about [[concept-keyspace-type|App-specific and global keys]] and how to set up [[dashboard-user-guide#configure-keyspace|keyspace]].

    <figure markdown="span">
      ![Keyspace options]({{config.extra.arcana.img_dir}}/an_db_keyspace_options.{{config.extra.arcana.img_png}}){ .an-screenshots}
      <figcaption>Keyspace: Global/App-Specific Keys</figcaption>
    </figure>

**Save** the configuration settings to make sure the setting changes take effect.

<figure markdown="span">
  <img src="{{config.extra.arcana.img_dir}}/an_db_save_config_settings.{{config.extra.arcana.img_png}}" alt="Save Config Settings" class="an-screenshots"/>
  <figcaption>Save Configuration Updates</figcaption>
</figure>