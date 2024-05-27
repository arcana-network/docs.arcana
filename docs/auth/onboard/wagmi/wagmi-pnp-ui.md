---
alias: onboard-wagmi-app-pnp-ui
title: 'Plug-and-Play Auth'
description: 'Onboard Users via Plug-and-Play Auth in Web3 Wagmi apps integrated with the Arcana Auth and Arcana Auth Wagmi SDKs using the instructions listed here.'
arcana:
  root_rel_path: ../../../..
---

# Plug-and-Play Login UI 

With Wagmi wallet connectors, Web3 developers can allow app users to easily switch between multiple wallets within a single application. Wagmi apps can use the custom connector offered by the [[concept-authsdk| {{config.extra.arcana.sdk_name}}]] to enable the {{config.extra.arcana.wallet_name}}.

In this guide, you will learn how to onboard users via the built-in plug-and-play login UI in Wagmi apps integrated with the {{config.extra.arcana.product_name}} SDK.

## Prerequisites

* **Register Web3 Application**: Log into the {{config.extra.arcana.dashboard_name}} {% include "./text-snippets/db_portal_url.md" %} to register and configure the app before they can use the {{config.extra.arcana.sdk_name}} and enable the {{config.extra.arcana.wallet_name}} for authenticated app users.

* **Set up Authentication Providers**: Click on the *Social Auth* tab in the {{config.extra.arcana.dashboard_name}}. Configure and select one or more [[web3-stack-auth|supported authentication providers]] for onboarding the app users.

    !!! an-tip "Configure Authentication Providers"

          You may be required to configure additional provider details for different authentication providers. In the case of Google, the developer must use Google Developer Console to set up the app and generate a Google assigned [[config-auth-google|client ID for Google OAuth]]. This Google ClientID will be configured in the {{config.extra.arcana.dashboard_name}} **Social Auth** settings before integrating the app.

          For details, see [[index-configure-auth|how to configure authentication providers]].

* Save the **{{config.extra.arcana.app_address}}** assigned to the app and displayed in the {{config.extra.arcana.dashboard_name}}. It is required later during integrating with the {{config.extra.arcana.sdk_name}}.

## Steps

*Onboarding users in Web3 Wagmi apps via the plug-and-play auth feature of the {{config.extra.arcana.sdk_name}} is simple!*

Follow these three steps:

### Step 1: Install {{config.extra.arcana.sdk_name}} packages

{% include "./code-snippets/auth_wagmi_install.md" %}

### Step 2: Create `AuthProvider` and `ArcanaConnector`

Import `{{config.extra.arcana.auth_sdk_pkg_name}}` package and create `AuthProvider`. Then import `{{config.extra.arcana.wagmi_sdk_pkg_name}}` package for creating an `ArcanaConnector` later during WagmiConfig setup.

To instantiate the `AuthProvider`, specify the unique **{{config.extra.arcana.app_address}}** value assigned to the app after [[register-app-auth|registering]] through the {{config.extra.arcana.dashboard_name}}. Specify the `AuthProvider` while instantiating the `ArcanaConnector` as shown in the sample code below to use the plug-and-play login UI for onboarding users.

{% include "./code-snippets/auth_wagmi_configure_pnp.md" %}

!!! an-note "Compact Mode"

      While creating the `AuthProvider`, you can choose the [[concept-plug-and-play-auth#compact-plug-play-ui|compact mode (optional)]] for the plug-and-play login UI.

### Step 3: Set up WagmiConfig

Next, provide the `AuthProvider` created earlier while creating an `ArcanaConnector` and set up Wagmi.

{% include "./code-snippets/auth_wagmi_create_client.md" %}

!!! an-tip "`WagmiProvider`/`WagmiConfig`, `createClient`/`configClient`"

      `createClient`, `configClient`, `WagmiConfig` were part of older Wagmi libraries. 
      
      For details, see [Wagmi Getting Started Guide](https://wagmi.sh/react/getting-started) and {% include "./text-snippets/wagmi_migration_guide_ref.md" %}.

Now use `WagmiConfig` component in the `_app.js` file.

{% include "./code-snippets/auth_wagmi_use_app.md" %}

Here is an example of how {{config.extra.arcana.wallet_name}} can be enabled in a Wagmi app. Note that in this example, the `setLogin` function of `AuthProvider` is used after creating the wallet connector when the user chooses the configured provider:

{% include "./code-snippets/auth_wagmi_use_index.md" %}

That is all! :material-party-popper:

The Web3 Wagmi app can now onboard users using the plug-and-play login UI built-in the {{config.extra.arcana.sdk_name}}. Authenticated users can instantly access the {{config.extra.arcana.wallet_name}} to sign blockchain transactions.

!!! an-tip "Example: Sample Wagmi App"

      See [sample Wagmi app](https://github.com/arcana-network/auth-wagmi-example) for details.

## What's Next?

After integrating and onboarding users in the Web3 app developers can add code programmatically and [[index-arcana-wallet|enable Web3 wallet operations]] in the authenticated user's context.

## See also

* [[web-auth-error-msg|{{config.extra.arcana.sdk_name}} Errors]]
* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]
* {% include "./text-snippets/authsdkref_url.md" %}
* {% include "./text-snippets/wagmi_authsdkref_url.md" %}
* [`{{config.extra.arcana.wagmi_sdk_pkg_name}}` README](https://github.com/arcana-network/auth-react/blob/main/README.md)

