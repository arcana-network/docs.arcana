---
alias: onboard-web3-react-app-custom-ui
title: 'Web3-React App: Custom Login UI'
description: 'Onboard Users via custom login UI in Web3-React apps integrated with the Arcana Auth SDK using the instructions listed here.'
arcana:
  root_rel_path: ../../..
---

# Web3-React App: Custom Login UI 

With [Web3-React](https://www.npmjs.com/package/web3-react) wallet connector framework, developers can allow app users to easily switch between multiple wallets within a single application. The [[concept-authsdk| {{config.extra.arcana.sdk_name}}]] offers a custom Web3-React connector that enables the {{config.extra.arcana.wallet_name}} in apps using Web3-React.

In this guide, you will learn how to onboard users in Web3-React apps. It shows how the developers can integrate apps with the {{config.extra.arcana.product_name}} SDKs and then use custom login UI to onboard users easily.

## Prerequisites

* **Register Web3 Application**: Log into the {{config.extra.arcana.dashboard_name}} {% include "./text-snippets/db_portal_url.md" %} to register and configure the app before they can use the {{config.extra.arcana.sdk_name}} and enable the {{config.extra.arcana.wallet_name}} for authenticated app users.

* **Set up Authentication Providers**: Click on the *Social Auth* tab in the {{config.extra.arcana.dashboard_name}}. Configure and select one or more [[state-of-the-arcana-auth#user-onboarding-options|supported authentication providers]] for onboarding the app users.

    !!! tip "Configure Authentication Providers"

          You may be required to configure additional provider details for different authentication providers. In the case of Google, the developer must use Google Developer Console to set up the app and generate a Google assigned [[config-auth-google|client ID for Google OAuth]]. This Google ClientID will be configured in the {{config.extra.arcana.dashboard_name}} **Social Auth** settings before integrating the app.

          For details, see [[index-configure-auth|how to configure authentication providers]].

* Save the **{{config.extra.arcana.app_address}}** assigned to the app and displayed in the {{config.extra.arcana.dashboard_name}}. It is required later during integrating with the {{config.extra.arcana.sdk_name}}.

## Steps

*Onboarding users in Web3-React apps via custom login UI powered by the {{config.extra.arcana.sdk_name}} is simple!*

Follow these three steps:

### Step 1: Install {{config.extra.arcana.sdk_name}} packages

{% include "./code-snippets/auth_web3_react_install.md" %}

### Step 2: Create `AuthProvider` and `ArcanaConnector`

Import `{{config.extra.arcana.auth_sdk_pkg_name}}` package and `{{config.extra.arcana.web3_react_sdk_pkg_name}}` packages. First, create `AuthProvider` and specify the unique **{{config.extra.arcana.app_address}}** value assigned to the app after [[configure-auth|registering and configuring]] through the {{config.extra.arcana.dashboard_name}}. 

Next, call `initializeConnector` from the `web3-react/core` library and instantiate the `ArcanaConnector` by specifying the `AuthProvider` as shown in the sample code below.

If the custom login UI is configured such that it allows a single authentication provider to onboard users, developers can specify the provider as an additional parameter while creating the `ArcanaConnector`. Otherwise, if the custom login UI offers multiple authentication provider options then developers can create a single `ArcanaConnector` without specifying the authentication provider as input and later call the `setLogin` function for the selected provider, in response to the user's onboarding choice.

!!! note "Configure Authentication Providers before `ArcanaConnector` creation"

      To build a custom login UI, developers can choose from the list of [[state-of-the-arcana-auth#user-onboarding-options|supported authentication providers]] or use passwordless. Wire the UI buttons for onboarding via different options to the `setLogin` function of the `ArcanaConnector`.

_Enable Authentication Provider_

{% include "./code-snippets/auth_web3_react_configure_custom_ui.md" %}

_Enable Passwordless Login_

{% include "./code-snippets/auth_web3_react_configure_custom_ui_pwdless.md" %}

### Step 3: Use ArcanaConnector

In the Web3-React app, use the `ArcanaConnector` created earlier and set up the required hooks:

{% include "./code-snippets/auth_web3_react_use.md" %}

Now, you are all set to onboard users in the Web3-React app using the plug-and-play login UI and enable {{config.extra.arcana.wallet_name}} for the authenticated users.

{% include "./code-snippets/auth_web3_react_homepage.md" %}

![Web3-React App integrated with the Arcana Auth](/img/web3_react_example_an_wallet.png){.an-screenshot-noeffects}

That is all! :material-party-popper:

The Web3-React app can now onboard users using the custom login UI. Authenticated users can instantly access the {{config.extra.arcana.wallet_name}} and sign blockchain transactions.

!!! tip "Example: Sample Web3-React App"

      See [sample Web3-React app](https://github.com/arcana-network/auth-web3-react/tree/main/example) for details.
      
## What's Next?

After integrating and onboarding users in the Web3-React app developers can add code programmatically and [[index-arcana-wallet|enable Web3 wallet operations]] in the authenticated user's context.

## See also

* [[web-auth-error-msg|{{config.extra.arcana.sdk_name}} Errors]]
* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]
* {% include "./text-snippets/authsdkref_url.md" %}
* [`{{config.extra.arcana.web3_react_sdk_pkg_name}}` README](https://github.com/arcana-network/auth-web3-react/blob/main/readme.md)

