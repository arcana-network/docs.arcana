---
alias: onboard-rainbow-app-pnp-ui
title: 'RainbowKit App: Onboard Users via Plug-and-Play Auth'
description: 'Onboard Users via Plug-and-Play Auth in Web3 RainbowKit apps integrated with the Arcana Auth SDK using the instructions listed here.'
arcana:
  root_rel_path: ../..
---

#  RainbowKit App: Plug-and-Play Login UI

[RainbowKit](https://www.rainbowkit.com/) works with [Wagmi](https://wagmi.sh/) wallet connector that allows Web3 app users to easily switch between multiple wallets within a single application. For Web3 apps using RainbowKit, the [[concept-authsdk| {{config.extra.arcana.sdk_name}}]] offers a custom Wagmi connector that can be used to enable the {{config.extra.arcana.wallet_name}} in the app's context.

In this guide, you will learn how to onboard users in Web3 apps that use RainbowKit wallet connectors. It shows how the developers can integrate apps with the {{config.extra.arcana.product_name}} SDKs and then use the built-in plug-and-play login UI out of the box to onboard users easily.

## Prerequisites

* **Register Web3 Application**: Log into the {{config.extra.arcana.dashboard_name}} {% include "./text-snippets/db_portal_url.md" %} to register and configure the app before they can use the {{config.extra.arcana.sdk_name}} and enable the {{config.extra.arcana.wallet_name}} for authenticated app users.

* **Set up Authentication Providers**: Click on the *Social Auth* tab in the {{config.extra.arcana.dashboard_name}}. Configure and select one or more [[state-of-the-arcana-auth#user-onboarding-options|supported authentication providers]] for onboarding the app users.

    !!! tip "Configure Authentication Providers"

          You may be required to configure additional provider details for different authentication providers. In the case of Google, the developer must use Google Developer Console to set up the app and generate a Google assigned [[config-auth-google|client ID for Google OAuth]]. This Google ClientID will be configured in the {{config.extra.arcana.dashboard_name}} **Social Auth** settings before integrating the app.

          For details, see [[index-configure-auth|how to configure authentication providers]].

* Save the **{{config.extra.arcana.app_address}}** assigned to the app and displayed in the {{config.extra.arcana.dashboard_name}}. It is required later during integrating with the {{config.extra.arcana.sdk_name}}.

## Steps

*Onboarding users in Web3 RainbowKit apps via the plug-and-play auth feature of the {{config.extra.arcana.sdk_name}} is simple!*

Follow these three steps:

### Step 1: Install {{config.extra.arcana.sdk_name}} packages

{% include "./code-snippets/auth_wagmi_install.md" %}

### Step 2: Configure RainbowKit Connector 

Import `{{config.extra.arcana.auth_sdk_pkg_name}}` package and create `AuthProvider` by specifying the unique **{{config.extra.arcana.app_address}}** value assigned to the app after [[configure-auth|registering and configuring]] it using the {{config.extra.arcana.dashboard_name}}. Then import `{{config.extra.arcana.wagmi_sdk_pkg_name}}` package and create an `ArcanaConnector`.

Set up `ArcanaRainbowConnector` using the newly created `ArcanaConnector`. Initialize the `connectorsForWallets` in the RainbowKit with the `ArcanaRainbowConnector` and export the `connectors` to be used later in the `_app.js` file:

{% include "./code-snippets/auth_wagmi_configure_pnp.md" %}

Use the `connectors` configured with `ArcanaRainbowConnector` in the `_app.js` file for creating the Wagmi client using the `createClient` function:

{% include "./code-snippets/auth_rainbow_create_client.md" %}

!!! tip "Wagmi `createClient`"

      For more details on the `createClient` function of the Wagmi package, see [wagmi Getting Started Guide](https://wagmi.sh/react/getting-started). Also, refer to [RainbowKit documentation](https://www.rainbowkit.com/docs/introduction).

### Step 3: RainbowKit Context Provider

Finally, pass the `wagmiClient` created earlier as a parameter to the `WagmiConfig` component in the `_app.js` file.

{% include "./code-snippets/auth_rainbow_use.md" %}

That is all! :material-party-popper:

The Web3 app using RainbowKit is successfully integrated with the {{config.extra.arcana.sdk_name}}.

!!! tip "Example: Sample RainbowKit App"

      See [sample RainbowKit app](https://github.com/arcana-network/auth-wagmi/tree/main/examples/rainbowkit-integration) for details.

## What's Next?

After integrating and onboarding users in the Web3 app developers can add code programmatically and [[index-arcana-wallet|enable Web3 wallet operations]] in the authenticated user's context.

## See also

* [[web-auth-error-msg|{{config.extra.arcana.sdk_name}} Errors]]
* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]
* {% include "./text-snippets/authsdkref_url.md" %}