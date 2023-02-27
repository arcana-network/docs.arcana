---
slug: /setupwagmi
id: idsetupwagmi
sidebar_custom_props:
  cardIcon: 🔐 
arcana:
  root_rel_path: ../..
---

# Wagmi Connector

In this tutorial, you will learn how to integrate a Web3 application that uses [wagmi](https://wagmi.sh) wallet connector to plug in the [Arcana wallet]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md).  With wagmi, Web3 developers can allow their users to easily switch between multiple wallets within a single application. Arcana offers a custom wagmi connector to enable the use of the Arcana wallet alongside built-in options like MetaMask, WalletConnect, and Coinbase Wallet.

!!! caution "No need to install Auth SDK"

      If you are using the Auth Wagmi Connector then you simply follow the instructions below. This connector includes the Auth SDK. You do not need to install Arcana Auth SDK separately. No need to create a provider. In the `App.tsx` file, use wagmi functions.

## Prerequisites

* Developers need to first log into the Arcana Developer Dashboard: {% include "./text-snippets/db_portal_url.md" %} to register and configure application settings for onboarding users before they can use the `ArcanaConnector` for Wagmi and enable Arcana wallet in their application.

* Select the **Auth** tab in the dashboard and choose from a list of supported authentication mechanisms to customize the user onboarding experience. 

    {% include "./text-snippets/auth_supported.md" %}

    !!! note "Setup Social Login"

          You may be required to configure additional details depending on the choice of authentication mechanisms. For example, if the dApp wants to enable users to onboard using the Google social authentication then the developer must set up and specify the [clientID for Google OAuth]({{page.meta.arcana.root_rel_path}}/howto/config_social_login/google_oauth.md).

          For details, see [how to set up social logins]({{page.meta.arcana.root_rel_path}}/howto/config_social_providers.md).
        

* After registering the application, a unique **{{config.extra.arcana.app_address}}** is assigned to every application. Save the **{{config.extra.arcana.app_address}}** displayed in the dashboard. It is required while instantiating the `ArcanaConnector` for wagmi later.

## Steps

*Integrating the Arcana wallet with an application that uses Wagmi is simple!*

Follow these two steps:

### Step 1: Install Arcana-Wagmi Connector

{% include "./code-snippets/auth_wagmi_install.md" %}

### Step 2: Configure Arcana Connector 

Import Arcana's `auth-wagmi` library and create a 'new' `ArcanaConnector`. During instantiation of the `ArcanaConnector`, specify the unique **{{config.extra.arcana.app_address}}** value assigned to your dApp after [registering and configuring]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) using the dashboard. 

{% include "./code-snippets/auth_wagmi_configure.md" %}

Next, provide the newly instantiated and configured `ArcanaConnector` to the `createClient` wagmi function. 

{% include "./code-snippets/auth_wagmi_create_client.md" %}

!!! tip

      For more details on the `createClient` function of wagmi package, see [wagmi Getting Started Guide](https://wagmi.sh/react/getting-started).

### Step 3: Use `ArcanaConnector` in Wagmi

Now use the `wagmiClient` in `WagmiConfig` component in the `_app.js` file.

{% include "./code-snippets/auth_wagmi_use_app.md" %}

Here a basic, generic example how you can layout the various wagmi clients options on the app page and allow user to choose how to connect using one of the connectors:

{% include "./code-snippets/auth_wagmi_use_index.md" %}

That is all! :material-party-popper:

!!! tip "Wagmi Integration Example"

      Here is the [wagmi integration example source code](https://github.com/arcana-network/auth-wagmi-example) for your reference.

You have successfully integrated your dApp with the Arcana Wagmi Connector. Users can choose and use the Arcana wallet or one of the built-in wallet connectors in Wagmi and sign blockchain transactions.

## What's Next?

Arcana wallet can also be used in applications that integrate with [Rainbow Kit](https://www.rainbowkit.com/). See [how to enable Arcana wallet using Rainbow Kit]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/integrate_rainbow.md).

## See also

* [Passwordless authentication using Auth SDK]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/wallet_pwdless_login.md)
* [Auth SDK Errors]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_err.md)
* [Auth SDK Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md)
* {% include "./text-snippets/authsdkref_url.md" %}

