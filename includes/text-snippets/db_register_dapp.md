After logging into the dashboard, the *Manage Apps* screen is displayed. It contains one app card per registered app. The app card contains a summary of app usage statistics and buttons to view and edit the [[concept-config-profile|configuration profiles]] for Testnet and Mainnet settings.

<figure markdown="span">
  ![Manage Apps]({{config.extra.arcana.img_dir}}/an_db_mulitiple_apps.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>Manage Apps</figcaption>
</figure>

To register the app, create a new app entry by clicking on the *Create New App* wizard.

<figure markdown="span">
  <img class="an-screenshots" src="{{config.extra.arcana.img_dir}}/dashboard_newappwizard.{{config.extra.arcana.img_png}}" alt="Register by Creating New App"/> 
  <figcaption>Register by Creating New App</figcaption>
</figure>

Provide the following inputs to register the app:

* App name
* Chain Type: EVM, Solana, MultiversX, Near
* Default Blockchain
* Wallet UI Mode

=== "App Name"

    Add a unique name for the app. It can be edited later. After registration, a unique {{config.extra.arcana.app_address}} is associated with each app name. This {{config.extra.arcana.app_address}} does not change if the app name is edited later.

    All emails related to a registered app billing or user login will mention the latest app name as displayed in the dashboard. Once an app is deleted, the {{config.extra.arcana.app_address}} is no longer valid. Creating a new app with the same name and registering it with {{config.extra.arcana.company_name}} will result in a new {{config.extra.arcana.app_address}} associated with the app.

    !!! an-tip "Edit App Name"

        Click on the pen icon next to the app name. Click ++enter++ in the editable text field to save the changes.

=== "Chain Type"

    During registration, developers must choose between EVM chains or non-EVM chains supported by the app. The pre-configured chain list in the {{config.extra.arcana.wallet_name}} will display only the configured chains.

    {% include "./text-snippets/non-evm-warning.md" %}

=== "Default Chain"

    Based on your chain type selection, you will see a list of supported chains. Choose one as the default. This default chain will appear as the current, active chain in the {{config.extra.arcana.wallet_name}} when the user logs into the app integrated with the {{config.extra.arcana.sdk_name}}.

=== "Wallet UI Mode"

    The [[concept-wallet-uimodes|wallet UI mode]] setting allows the developers to choose whether they want to use the default, built-in {{config.extra.arcana.wallet_name}} UI or build a custom wallet UI for the app users. 

    ??? an-danger "One Time Setting"

          The **Custom Wallet UI** option selected during app registration is a **one-time setting**. Once selected, the app cannot use the built-in {{config.extra.arcana.wallet_name}} UI at all. Developers must create a custom wallet UI and plug in the requisite Web3 wallet operations.

    ??? an-warning "Global Keyspace Not Supported"

          If the **Custom Wallet UI** option is selected during app registration, the app is assigned app-specific keys by default. The app configuration does not have the option to configure global [[concept-keyspace-type|keyspace]].

    ??? an-tip "View Wallet UI Mode"

          Once specified during app-registration, the Wallet UI mode setting can be viewed later via the **Configure > Arcana Wallet** settings section in the app configuration profile. 

          <figure markdown="span">
            ![Wallet UI Mode Setting Ref]({{config.extra.arcana.img_dir}}/an_db_refer_wallet_ui_mode.{{config.extra.arcana.img_png}}){ .an-screenshots }
            <figcaption>Wallet UI Mode Setting</figcaption>
          </figure>
      
After providing all the required inputs, click **Create** to register the app.

<figure markdown="span">
  ![Register dApp]({{config.extra.arcana.img_dir}}/an_db_create_newapp_anim.gif){ .an-screenshots }
  <figcaption>Register dApp</figcaption>
</figure>

The app is registered, and a unique {{config.extra.arcana.app_address}} is assigned. By default, every newly registered app is associated with a [[concept-config-profile|Testnet configuration profile]]. 

<figure markdown="span">
  ![New app dashboard]({{config.extra.arcana.img_dir}}/an_db_new_app_screen.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>New App Dashboard</figcaption>
</figure>
