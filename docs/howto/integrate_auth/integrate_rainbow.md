---
slug: /setuprainbow
id: idsetuprainbow
sidebar_custom_props:
  cardIcon: 🔐 
arcana:
  root_rel_path: ../..
---

# Rainbow Connector

In this tutorial, you will learn how to integrate a Web3 application that uses [RainbowKit](https://www.rainbowkit.com/) with [Arcana wallet]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md). RainbowKit works with [wagmi](https://wagmi.sh/) which allows Web3 application users to easily switch between multiple wallets within a single application. Arcana offers a custom wagmi connector that can be used to enable Arcana wallet for applications using RainbowKit.

!!! caution "No need to install Auth SDK"

      If you are using the Auth wagmi Connector for RainbowKit then you simply follow the instructions below. This connector includes the Auth SDK. You do not need to install Arcana Auth SDK separately. No need to create a provider.

## Prerequisites

* Developers need to log into the Arcana Developer Dashboard: {% include "./text-snippets/db_portal_url.md" %} to register and configure application settings for using the wagmi `ArcanaConnector`.

* Select the **Auth** tab in the dashboard and choose from a list of supported authentication mechanisms to customize the user onboarding experience. 

    {% include "./text-snippets/auth_supported.md" %}

    !!! note

          You may be required to configure additional details depending on the choice of authentication mechanisms. For example, if the dApp wants to enable users to onboard using the Google social authentication then the developer must set up and specify the [clientID for Google OAuth]({{page.meta.arcana.root_rel_path}}/howto/config_social_login/google_oauth.md).

          For details, see [how to set up social logins]({{page.meta.arcana.root_rel_path}}/howto/config_social_providers.md).

* After registering the application, a unique **{{config.extra.arcana.app_address}}** is assigned to every application. Save the **{{config.extra.arcana.app_address}}** displayed in the dashboard. It is required while instantiating the `ArcanaConnector` for wagmi later.

## Steps

*Integrating Arcana wallet with an application that uses RainbowKit is simple!*

Follow these two steps:

### Step 1: Install Arcana-Wagmi Connector

{% include "./code-snippets/auth_wagmi_install.md" %}

### Step 2: Configure RainbowKit Connector 

Import Arcana's `auth-wagmi` library and create a 'new' `ArcanaConnector`. During instantiation of the `ArcanaConnector`, specify the unique **{{config.extra.arcana.app_address}}** value assigned to your dApp after [registering and configuring]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) using the dashboard. 

{% include "./code-snippets/auth_rainbow_configure.md" %}

Now you can provide the newly instantiated ArcanaConnector to the `createClient` wagmi function and use the client in the next step.

{% include "./code-snippets/auth_rainbow_create_client.md" %}

!!! tip

      For more details on the `createClient` function of wagmi package, see [wagmi Getting Started Guide](https://wagmi.sh/react/getting-started). Also, refer to [RainbowKit documentation](https://www.rainbowkit.com/docs/introduction).

### Step 3: RainbowKit Context Provider

Pass the wagmi client as a parameter to the `WagmiConfig` component before plugging in the `RainbowKitProvider` component in your React/NextJS application.

{% include "./code-snippets/auth_rainbow_use.md" %}

That is all! :material-party-popper:

You have successfully integrated your dApp with the Arcana wagmi Connector. Users can choose and use Arcana wallet or one of the built-in wallet connectors in wagmi and sign blockchain transactions.

## What's Next?

You can add the Arcana wallet to your application by using the Arcana Auth SDK, even if your application does not already use wagmi or RainbowKit.

See [how to integrate applications with Auth SDK]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) for details.

## See also

* [Passwordless authentication using Auth SDK]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/wallet_pwdless_login.md)
* [Auth SDK Errors]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_err.md)
* [Auth SDK Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md)
* {% include "./text-snippets/authsdkref_url.md" %}
