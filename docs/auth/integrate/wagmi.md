---
alias: integrate-wagmi-app
title: 'Integrate Wagmi App'
description: 'Integrate Web3 Wagmi apps with the Arcana Auth SDK using the instructions listed here.'
arcana:
  root_rel_path: ../..
---

# Integrate Wagmi App

Web3 apps using Wagmi can allow user onboarding via social login and gasless transactions via the {{config.extra.arcana.wallet_name}} by integrating with the {{config.extra.arcana.wagmi_sdk_name}} and using he custom Wagmi connector.

In this guide, you will learn how Web3 apps using [Wagmi](https://wagmi.sh) wallet connectors can integrate with the {{config.extra.arcana.wagmi_sdk_name}}.

!!! an-tip "WalletConnect"

      Apps using [WalletConnect](https://docs.walletconnect.com/) can access {{config.extra.arcana.company_name}} Web3 Provider `AuthProvider` by integrating with the {{config.extra.arcana.wagmi_sdk_name}} and using the `ArcanaConnector`.

## Prerequisites

* **Register Web3 Application**: Log into the {{config.extra.arcana.dashboard_name}} {% include "./text-snippets/db_portal_url.md" %} to register and configure the app before they can use the {{config.extra.arcana.sdk_name}} and enable the {{config.extra.arcana.wallet_name}} for authenticated app users.

* **Set up Authentication Providers**: Click on the *Social Auth* tab in the {{config.extra.arcana.dashboard_name}}. Configure and select one or more [[web3-stack-auth|supported authentication providers]] for onboarding the app users.

    !!! an-tip "Configure Authentication Providers"

          You may be required to configure additional provider details for different authentication providers. In the case of Google, the developer must use Google Developer Console to set up the app and generate a Google assigned [[config-auth-google|client ID for Google OAuth]]. This Google ClientID will be configured in the {{config.extra.arcana.dashboard_name}} **Social Auth** settings before integrating the app.

          For details, see [[index-configure-auth|how to configure authentication providers]].

* Save the **{{config.extra.arcana.app_address}}** assigned to the app and displayed in the {{config.extra.arcana.dashboard_name}}. It is required later during integrating with the {{config.extra.arcana.sdk_name}}.

## Steps

*Integrating Web3 Wagmi apps with the {{config.extra.arcana.sdk_name}} is simple!*

Follow these three steps:

### Step 1: Install {{config.extra.arcana.sdk_name}} packages

{% include "./code-snippets/auth_wagmi_install.md" %}

### Step 2: Create `AuthProvider` and `ArcanaConnector`

Import `{{config.extra.arcana.auth_sdk_pkg_name}}` package and create `AuthProvider`. Then import `{{config.extra.arcana.wagmi_sdk_pkg_name}}` package and create an `ArcanaConnector`. 

To instantiate the `AuthProvider`, specify the unique **{{config.extra.arcana.app_address}}** value assigned to the app after [[register-app-auth|registering the app]] through the {{config.extra.arcana.dashboard_name}} earlier. Create the `ArcanaConnector` and specify the `AuthProvider` as shown in the sample code below.

{% include "./code-snippets/auth_wagmi_configure_pnp.md" %}

### Step 3: Set up WagmiConfig

Next, provide the newly instantiated and configured `ArcanaConnector` to set up WagmiConfig. 

{% include "./code-snippets/auth_wagmi_create_client.md" %}

!!! an-tip "`WagmiProvider`/`WagmiConfig`, `createClient`/`configClient`"

      `createClient`, `configClient`, `WagmiConfig` were part of older Wagmi libraries. 
      
      For details, see [Wagmi Getting Started Guide](https://wagmi.sh/react/getting-started) and {% include "./text-snippets/wagmi_migration_guide_ref.md" %}.

Now specify the requisite Wagmi constituents to `WagmiProvider`/`WagmiConfig` component as per the Wagmi library version used:

{% include "./code-snippets/auth_wagmi_use_app.md" %}

That is all! :material-party-popper:

The Web3 app is successfully integrated with the {{config.extra.arcana.sdk_name}}. 

!!! an-tip "Example: Sample Wagmi App"

      See latest auth example code: [`sample-auth-wagmi-2`](https://github.com/arcana-network/auth-examples) for details.

## What's Next?

After integrating with a Web3 Wagmi app with the {{config.extra.arcana.sdk_name}}, the developers can add code to onboard users. There are two ways to onboard users: 

* Use built-in plug-and-play login UI with a single function call that displays all the configured authentication providers
* Use custom login UI to onboard users and wire it to the {{config.extra.arcana.sdk_name}} functions for calling the configured authentication providers.

See [[index-wagmi-onboard-users|for details.]]

{{config.extra.arcana.wallet_name}} can also be used in applications that integrate with [Rainbow Kit](https://www.rainbowkit.com/). See [[integrate-rainbow-app|how to enable {{config.extra.arcana.wallet_name}} using Rainbow Kit]].

## See also

* [Sample Wagmi app integration](https://github.com/arcana-network/auth-wagmi-example)
* {% include "./text-snippets/wagmi_authsdkref_url.md" %}
* [`sample-auth-wagmi` example](https://github.com/arcana-network/auth-examples)
* [`{{config.extra.arcana.wagmi_sdk_pkg_name}}` README](https://github.com/arcana-network/auth-react/blob/main/README.md)
* [[web-auth-error-msg|{{config.extra.arcana.sdk_name}} Errors]]
* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]
* {% include "./text-snippets/authsdkref_url.md" %}

