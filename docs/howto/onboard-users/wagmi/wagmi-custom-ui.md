---
alias: onboard-wagmi-app-custom-ui
title: 'Wagmi App: Custom Login UI'
description: 'Onboard Users via custom login UI in Web3 Wagmi apps integrated with the Arcana Auth SDK using the instructions listed here.'
arcana:
  root_rel_path: ../../../..
---

# Wagmi App: Custom Login UI

With Wagmi, Web3 developers can allow app users to easily switch between multiple wallets within a single application. Wagmi apps can use the custom connector offered by the [[concept-authsdk| {{config.extra.arcana.sdk_name}}]] to enable the {{config.extra.arcana.wallet_name}}.

In this guide, you will learn how to onboard users via a custom login UI in Wagmi apps integrated with the {{config.extra.arcana.product_name}} SDK.

## Prerequisites

* **Register Web3 Application**: Log into the {{config.extra.arcana.dashboard_name}} {% include "./text-snippets/db_portal_url.md" %} to register and configure the app before they can use the {{config.extra.arcana.sdk_name}} and enable the {{config.extra.arcana.wallet_name}} for authenticated app users.

* **Set up Authentication Providers**: Click on the *Social Auth* tab in the {{config.extra.arcana.dashboard_name}}. Configure and select one or more [[state-of-the-arcana-auth#user-onboarding-options|supported authentication providers]] for onboarding the app users.

    !!! tip "Configure Authentication Providers"

          You may be required to configure additional provider details for different authentication providers. In the case of Google, the developer must use Google Developer Console to set up the app and generate a Google assigned [[config-auth-google|client ID for Google OAuth]]. This Google ClientID will be configured in the {{config.extra.arcana.dashboard_name}} **Social Auth** settings before integrating the app.

          For details, see [[index-configure-auth|how to configure authentication providers]].

* Save the **{{config.extra.arcana.app_address}}** assigned to the app and displayed in the {{config.extra.arcana.dashboard_name}}. It is required later during integrating with the {{config.extra.arcana.sdk_name}}.

## Steps

*Onboarding users in Web3 Wagmi apps via custom login UI powered by the {{config.extra.arcana.sdk_name}} is simple!*

Follow these three steps:

### Step 1: Install {{config.extra.arcana.sdk_name}} packages

{% include "./code-snippets/auth_wagmi_install.md" %}

### Step 2: Create `AuthProvider` and `ArcanaConnector`

Import `{{config.extra.arcana.auth_sdk_pkg_name}}` and `{{config.extra.arcana.wagmi_sdk_pkg_name}}` packages. First create an `AuthProvider` by specifying the unique **{{config.extra.arcana.app_address}}** value assigned to the app after [[configure-auth|registering and configuring]] through the {{config.extra.arcana.dashboard_name}}. 

Next, create the `ArcanaConnector` and specify the `AuthProvider`.

If the custom login UI is configured such that it allows a single authentication provider to onboard users, developers can specify the provider as an additional parameter while creating the `ArcanaConnector`. Otherwise, if the custom login UI offers multiple authentication provider options then developers can create a single `ArcanaConnector` without specifying the authentication provider and later call the `setLogin` function for the selected provider, in response to the user's onboarding choice.

!!! note "Configure Authentication Providers before `ArcanaConnector` creation"

      To build a custom login UI, developers can choose from the list of [[state-of-the-arcana-auth#user-onboarding-options|supported authentication providers]] or use passwordless. Wire the UI buttons for onboarding via different options to the `setLogin` function of the `ArcanaConnector`.

_Enable Authentication Provider_

{% include "./code-snippets/auth_wagmi_configure_custom_ui.md" %}

_Enable Passwordless Login_

{% include "./code-snippets/auth_wagmi_configure_custom_ui_pwdless.md" %}

### Step 3: Set up WagmiConfig

Next, provide the newly instantiated and configured `ArcanaConnector` to set up Wagmi: 

{% include "./code-snippets/auth_wagmi_create_client.md" %}

!!! tip "Wagmi `createClient` and `configClient`"

      For more details on the `createClient` and `configClient` functions of the Wagmi package, see [Wagmi Getting Started Guide](https://wagmi.sh/react/getting-started) and [Wagmi 1.x.y Migration Guide](https://wagmi.sh/react/migration-guide).

Use the `WagmiConfig` component in the `_app.js` file.

{% include "./code-snippets/auth_wagmi_use_app.md" %}

Here is an example of how you can layout the `wagmiClient` with the {{config.extra.arcana.wallet_name}} configured as the wallet option on the app page. Note that in this example, the `setLogin` function is used after creating the wallet connector when the user chooses the configured provider:

{% include "./code-snippets/auth_wagmi_use_index.md" %}

That is all! :material-party-popper:

The Web3 Wagmi app can now onboard users using the custom login UI. Authenticated users can instantly access the {{config.extra.arcana.wallet_name}} and sign blockchain transactions.

!!! tip "Example: Sample Wagmi App"

       See [sample Wagmi app](https://github.com/arcana-network/auth-wagmi-example) for details.

## What's Next?

After integrating and onboarding users in the Web3 app developers can add code programmatically and [[index-arcana-wallet|enable Web3 wallet operations]] in the authenticated user's context.

## See also

* [[web-auth-error-msg|{{config.extra.arcana.sdk_name}} Errors]]
* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]
* {% include "./text-snippets/authsdkref_url.md" %}
* [`{{config.extra.arcana.wagmi_sdk_pkg_name}}` README](https://github.com/arcana-network/auth-react/blob/main/README.md)

