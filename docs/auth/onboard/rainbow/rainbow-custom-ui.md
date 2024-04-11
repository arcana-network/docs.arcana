---
alias: onboard-rainbow-app-custom-ui
title: 'RainbowKit App: Build Custom Login UI'
description: 'Onboard Users via Custom Login UI in Web3 RainbowKit apps integrated with the Arcana Auth SDK using the instructions listed here.'
arcana:
  root_rel_path: ../..
---

# Custom Login UI

[RainbowKit](https://www.rainbowkit.com/) works with [Wagmi](https://wagmi.sh/) wallet connector that allows Web3 app users to easily switch between multiple wallets within a single application. RainbowKit apps can use the custom connector offered by the [[concept-authsdk| {{config.extra.arcana.sdk_name}}]] to enable the {{config.extra.arcana.wallet_name}} in the app's context.

In this guide, you will learn how to onboard users in Web3 apps that use RainbowKit wallet connectors.  It shows how the developers can integrate apps with the {{config.extra.arcana.product_name}} SDKs and then use custom login UI to onboard users easily.

In this guide, you will learn how to onboard users via a custom login UI in RainbowKit apps integrated with the {{config.extra.arcana.product_name}} SDK.

## Prerequisites

* **Register Web3 Application**: Log into the {{config.extra.arcana.dashboard_name}} {% include "./text-snippets/db_portal_url.md" %} to register and configure the app before they can use the {{config.extra.arcana.sdk_name}} and enable the {{config.extra.arcana.wallet_name}} for authenticated app users.

* **Set up Authentication Providers**: Click on the *Social Auth* tab in the {{config.extra.arcana.dashboard_name}}. Configure and select one or more [[web3-stack-auth|supported authentication providers]] for onboarding the app users.

    !!! an-tip "Configure Authentication Providers"

          You may be required to configure additional provider details for different authentication providers. In the case of Google, the developer must use Google Developer Console to set up the app and generate a Google assigned [[config-auth-google|client ID for Google OAuth]]. This Google ClientID will be configured in the {{config.extra.arcana.dashboard_name}} **Social Auth** settings before integrating the app.

          For details, see [[index-configure-auth|how to configure authentication providers]].

* Save the **{{config.extra.arcana.app_address}}** assigned to the app and displayed in the {{config.extra.arcana.dashboard_name}}. It is required later during integrating with the {{config.extra.arcana.sdk_name}}.

## Steps

*Onboarding users in Web3 RainbowKit apps via custom login UI powered by the {{config.extra.arcana.sdk_name}} is simple!*

Follow these three steps:

### Step 1: Install {{config.extra.arcana.sdk_name}} packages

{% include "./code-snippets/auth_wagmi_install.md" %}

### Step 2: Configure RainbowKit Connector 

Import `{{config.extra.arcana.auth_sdk_pkg_name}}` package and create `AuthProvider` by specifying the unique **{{config.extra.arcana.app_address}}** value assigned to the app after [[register-app-auth|registering]] it using the {{config.extra.arcana.dashboard_name}}. Then import `{{config.extra.arcana.wagmi_sdk_pkg_name}}` package and create an `ArcanaConnector`.

Set up `ArcanaRainbowConnector` using the newly created `ArcanaConnector`. 

Web3 app developers can choose to either use the built-in plug-and-play login UI in the {{config.extra.arcana.sdk_name}} or they can build their own custom login UI. The process of creation and configuration of the `ArcanaConnector` varies in each case. See the sample code below:

If the custom login UI is configured such that it allow a single authentication provider to onboard users, developers can specify the provider as an additional parameter while creating the `ArcanaConnector`. Otherwise, if the custom login UI offers multiple authentication provider options then developers can create a single `ArcanaConnector` without specifying the provider and later call the `setLogin` function for the selected provider, in response to the user's selection.

!!! an-note "Configure Authentication Providers before `ArcanaConnector` creation"

      To build a custom login UI, developers can choose from the list of [[web3-stack-auth|supported authentication providers]] or use passwordless. Wire the UI buttons for onboarding via different options to the `setLogin` function of the `ArcanaConnector`.

_Enable Authentication Provider_

{% include "./code-snippets/auth_wagmi_configure_custom_ui.md" %}

_Enable Passwordless Login_

{% include "./code-snippets/auth_wagmi_configure_custom_ui_pwdless.md" %}

Initialize the `connectorsForWallets` in the RainbowKit with the `ArcanaRainbowConnector` and export the `connectors` to be used later in the `_app.js` file. Use the `connectors` configured with `ArcanaRainbowConnector` in the `_app.js` file for creating the Wagmi client using the `createClient` function:

{% include "./code-snippets/auth_rainbow_create_client.md" %}

!!! an-tip "Wagmi `createClient` and `configClient`"

      For more details on the `createClient` and `configClient` functions of the Wagmi package, see [Wagmi Getting Started Guide](https://wagmi.sh/react/getting-started) and {% include "./text-snippets/wagmi_migration_guide_ref.md" %}. Also, refer to [RainbowKit documentation](https://www.rainbowkit.com/docs/introduction).

### Step 3: RainbowKit Context Provider

Finally, pass the `wagmiClient` created earlier as a parameter to the `WagmiConfig` component in the `App.js` file.

{% include "./code-snippets/auth_rainbow_use.md" %}

That is all! :material-party-popper:

The Web3 Wagmi app can now onboard users using the custom login UI. Authenticated users can instantly access the {{config.extra.arcana.wallet_name}} and sign blockchain transactions.

!!! an-tip "RainbowKit Integration Example"

      Here is the [RainbowKit integration example source code](https://github.com/arcana-network/auth-wagmi/tree/main/examples/rainbowkit-integration) for your reference.

## What's Next?

After integrating and onboarding users in the Web3 app developers can add code programmatically and [[index-arcana-wallet|enable Web3 wallet operations]] in the authenticated user's context.

## See also

* [[web-auth-error-msg|{{config.extra.arcana.sdk_name}} Errors]]
* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]
* {% include "./text-snippets/authsdkref_url.md" %}
* {% include "./text-snippets/wagmi_authsdkref_url.md" %}