---
slug: /setuprainbow
id: idsetuprainbow
sidebar_custom_props:
  cardIcon: 🔐 
arcana:
  root_rel_path: ../..
---

# Integrate Rainbow App

In this guide, you will learn how to integrate the [{{config.extra.arcana.sdk_name}}]({{page.meta.arcana.root_rel_path}}/concepts/authsdk.md) with Web3 apps that use [RainbowKit](https://www.rainbowkit.com/). RainbowKit works with [Wagmi](https://wagmi.sh/) wallet connector that allows Web3 app users to easily switch between multiple wallets within a single application. Arcana offers a custom Wagmi connector that can be used to enable the {{config.extra.arcana.wallet_name}} for apps using RainbowKit.

!!! caution "Using `{{config.extra.arcana.wagmi_sdk_pkg_name}}` package"

      {% include "./text-snippets/warn_wagmi_noauth.md" %}

## Prerequisites

* Developers need to first log into the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}
 to register and configure app before using the Wagmi `ArcanaConnector`.

* Click on the *Social Auth* tab in the {{config.extra.arcana.dashboard_name}}. Configure and select one or more supported authentication providers for onboarding the app users.

    {% include "./text-snippets/auth_supported.md" %}

    !!! tip "Configure Authentication Providers"

          You may be required to configure additional provider details for different authentication providers. In the case of Google, the developer must use Google Developer Console to set up the app and generate a Google assigned [client ID for Google OAuth]({{page.meta.arcana.root_rel_path}}/howto/config_social/google_oauth.md). This Google ClientID will be configured in the {{config.extra.arcana.dashboard_name}} **Social Auth** settings before integrating the app.

          For details, see [how to configure authentication providers]({{page.meta.arcana.root_rel_path}}/howto/config_auth/index.md).

* After registering the application, a unique **{{config.extra.arcana.app_address}}** is assigned to every application. Save the **{{config.extra.arcana.app_address}}** displayed in the {{config.extra.arcana.dashboard_name}}. It is required while instantiating the `ArcanaConnector` for Wagmi later.

## Steps

*Integrating {{config.extra.arcana.sdk_name}} with an application that uses RainbowKit is simple!*

Follow these two steps:

### Step 1: Install `{{config.extra.arcana.wagmi_sdk_pkg_name}}`

{% include "./code-snippets/auth_wagmi_install.md" %}

### Step 2: Configure RainbowKit Connector 

Import `{{config.extra.arcana.wagmi_sdk_pkg_name}}` and create a 'new' `ArcanaConnector`. During instantiation of the `ArcanaConnector`, specify the unique **{{config.extra.arcana.app_address}}** value assigned to the app after [registering and configuring]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) it using the {{config.extra.arcana.dashboard_name}}. Set up `ArcanaRainbowConnector` using the newly created `ArcanaConnector`. Initialize the `connectorsForWallets` in the RainbowKit with the `ArcanaRainbowConnector` and export the `connectors` to be used later in the `_app.js` file:

{% include "./code-snippets/auth_rainbow_configure.md" %}

Use the `connectors` configured with `ArcanaRainbowConnector` in the `_app.js` file for creating the Wagmi client using the `createClient` function:

{% include "./code-snippets/auth_rainbow_create_client.md" %}

!!! tip "Wagmi `createClient`"

      For more details on the `createClient` function of the Wagmi package, see [wagmi Getting Started Guide](https://wagmi.sh/react/getting-started). Also, refer to [RainbowKit documentation](https://www.rainbowkit.com/docs/introduction).

### Step 3: RainbowKit Context Provider

Finally, pass the `wagmiClient` created earlier as a parameter to the `WagmiConfig` component in the `_app.js` file.

{% include "./code-snippets/auth_rainbow_use.md" %}

That is all! :material-party-popper:

The Web3 app using RainbowKit is successfully integrated with the {{config.extra.arcana.sdk_name}}.

!!! tip "RainbowKit Integration Example"

      Here is the [RainbowKit integration example source code](https://github.com/arcana-network/auth-wagmi/tree/main/examples/rainbowkit-integration) for your reference.

## What's Next?

After integrating with the `{{config.extra.arcana.wagmi_sdk_pkg_name}}` package, developers do not need to explicitly call the user onboarding functions of the {{config.extra.arcana.sdk_name}}. The `ArcanaConnector` is a wrapper around the `AuthProvider` and once Wagmi `createClient` function is called, the `ArcanaConnector` is plugged in as a Wagmi connector. 

When the Wagmi `connect()` function is called for the configured wallet connectors, it automatically brings up the {{config.extra.arcana.sdk_name}} built-in, plug-and-play Auth UI to allow users to onboard the app. Authenticated users can instantly access the {{config.extra.arcana.wallet_name}} to sign blockchain transactions. Developers can add code to programmatically and [enable Web3 wallet operations]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md) in the authenticated user's context.

!!! info "Using `{{config.extra.arcana.wagmi_sdk_pkg_name}}`"

      {% include "./text-snippets/warn_wagmi_pnp_limitation.md" %}

## See also

* [{{config.extra.arcana.sdk_name}} Errors]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_err.md)
* [{{config.extra.arcana.sdk_name}} Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md)
* {% include "./text-snippets/authsdkref_url.md" %}
