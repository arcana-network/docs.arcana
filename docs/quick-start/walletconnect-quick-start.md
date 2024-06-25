---
alias: walletconnect-quick-start
title: 'Quick Start: WalletConnect Apps'
description: 'Get Started quickly using these step-by-step instructions for enabling Arcana wallet in apps using WalletConnect. Use Arcana Developer dashboard to first register the app, get a client ID and use this client ID to integrate the app with the Arcana Auth SDK.'
arcana:
  root_rel_path: ..
  app_type: "'WalletConnect'"
  app_example_submodule: "`sample-auth-walletconnect`"
  social_provider: "'google'"
  custom_login_ui_tag: "onboard-walletconnect-app-custom-ui"
---

# Quick Start: WalletConnect Apps

Web3 apps using {{page.meta.arcana.app_type}} can easily onboard users via social login by integrating with the {{config.extra.arcana.wagmi_sdk_name}}!

## Prerequisites

* [WalletConnect](https://walletconnect.com/)
* [Wagmi v2.0](https://wagmi.sh/)

## 1. Register & Configure

{% include "./text-snippets/quick-start-reg-config-auth.md" %}

## 2. Install SDKs

For {{page.meta.arcana.app_type}} app, install the following packages:

* [`{{config.extra.arcana.auth_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth)
* [`{{config.extra.arcana.wagmi_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-wagmi)

{% include "./code-snippets/auth_wagmi_install.md" %}

!!! an-note "Use latest SDKs"
  
      {% include "./text-snippets/warn_latest_sdk_version.md" %}

      {% include "./text-snippets/warn_latest_wagmi_sdk_version.md" %}

## 3. Integrate

Import `AuthProvider` from the `{{config.extra.arcana.auth_sdk_pkg_name}}` package.

{% include "./code-snippets/import_auth.md" %}

Create a new `AuthProvider` instance. Specify the unique **{{config.extra.arcana.app_address}}** obtained during the app registration. 

{% include "./code-snippets/auth_walletconnect_configure_pnp.md" %}

You can optionally customize the following settings in the `AuthProvider` constructor:

{% include "./text-snippets/quick-start-authprovider-optional.md" %}

Next, import the `ArcanaConnector` from the `{{config.extra.arcana.wagmi_sdk_pkg_name}}` package. Create a new `ArcanaConnector` and specify the `AuthProvider` instantiated earlier.

{% include "./code-snippets/auth_walletconnect_connector.md" %}

### Onboard Users

Set up Wagmi configuration and onboard users via the built-in plug-and-play login UI (default). 

{% include "./code-snippets/auth_walletconnect_create_client.md" %}

{% include "./text-snippets/quick-start-auth-onboard-custom-login.md" %}

!!! an-tip "Arcana JWT Token"

      {% include "./text-snippets/jwt_token.md" %}

### Sign Transactions

{% include "./text-snippets/quick-start-sign-transactions.md" %}

## 4. Deploy

{% include "./text-snippets/quick-start-deploy.md" %}

{==

Your {{page.meta.arcana.app_type}} app is now powered by {{config.extra.arcana.sdk_name}} and {{config.extra.arcana.wagmi_sdk_name}} to onboard users and allow authenticated users to sign blockchain transactions using  {{config.extra.arcana.wallet_name}}.

==}

## See Also

{% include "./text-snippets/quick-start-see-also.md" %}

{% include "./text-snippets/auth_sdk_quicklinks.md" %}
{% include "./text-snippets/auth_wagmi_sdk_quicklinks.md" %}
