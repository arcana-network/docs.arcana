---
alias: wagmi-quick-start
title: 'Quick Start: Wagmi Apps'
description: 'Get Started quickly using these step-by-step instructions for using the Arcana Auth product in Wagmi walletconnector apps. Use Arcana Developer dashboard to first register the app, get a client ID and use this client ID to integrate the app with the Arcana Auth SDK.'
arcana:
  root_rel_path: ..
  app_type: "'Wagmi'"
  app_example_submodule: "`sample-auth-wagmi-2`, `sample-auth-wagmi-viem`, `sample-auth-wagmi`"
  social_provider: "'google'"
  custom_login_ui_tag: "onboard-wagmi-app-custom-ui"
---

# Quick Start: Wagmi Apps

Follow this guide to onboard users in a {{page.meta.arcana.app_type}} app and enable them to quickly sign blockchain transactions using the in-app {{config.extra.arcana.wallet_name}}.

## Prerequisites

{% include "./text-snippets/quick-start-reg-config-auth.md" %}

## 1. Install SDKs

{% include "./code-snippets/auth_wagmi_install.md" %}

!!! an-caution "Wagmi Compatibility"

      You need to install both `{{config.extra.arcana.auth_sdk_pkg_name}}` and `{{config.extra.arcana.wagmi_sdk_pkg_name}}` packages. Note the version compatibility:

      * For wagmi < 1.0.0 use @arcana/auth-wagmi@1.y.z
      * For wagmi >= 1.0.0, use @arcana/auth-wagmi@2.y.z
      * For wagmi >= 2.0.0, use @arcana/auth-wagmi@3.y.z

## 2. Integrate

{% include "./code-snippets/import_auth.md" %}

Copy **{{config.extra.arcana.app_address}}** of the format `xar_abc_alphanumeric` from the app dashboard settings and create a new `AuthProvider`.

{% include "./code-snippets/auth_wagmi_configure_pnp.md" %}

{% include "./text-snippets/quick-start-authprovider-optional.md" %}

Next, use the `AuthProvider` to create a new `ArcanaConnector` instance from the `{{config.extra.arcana.wagmi_sdk_pkg_name}}` package.

{% include "./code-snippets/auth_wagmi_create_client_pnp.md" %}

### Onboard Users

To [[onboard-wagmi-app-pnp-ui|onboard users]] via the built-in plug-and-play login UI, use the `ArcanaConnector` to set up the Wagmi. Choose one of the `createClient` or `createConfig` Wagmi methods, depending upon whether you are using the Wagmi version prior to v1.0.0 or post v2.x.y. 

!!! an-tip "`WagmiProvider`/`WagmiConfig`, `createClient`/`configClient`"

      `createClient`, `configClient`, `WagmiConfig` were part of older Wagmi libraries. 
      
      For details, see [Wagmi Getting Started Guide](https://wagmi.sh/react/getting-started) and {% include "./text-snippets/wagmi_migration_guide_ref.md" %}.

{% include "./code-snippets/auth_wagmi_create_client_pnp.md" %}

Initialize `WagmiConfig` component to bring up the built-in login UI with configured providers for social login.

{% include "./code-snippets/auth_wagmi_use_app.md" %}

{% include "./text-snippets/quick-start-auth-onboard-custom-login.md" %}

!!! an-tip "Arcana JWT Token"

      {% include "./text-snippets/jwt_token.md" %}

### Sign Transactions

{% include "./text-snippets/quick-start-sign-transactions.md" %}

{% include "./text-snippets/quick-start-deploy.md" %}

{==

Your {{page.meta.arcana.app_type}} app is now powered by {{config.extra.arcana.sdk_name}} and  {{config.extra.arcana.wagmi_sdk_name}} to onboard users and allow authenticated users to sign blockchain transactions.

==}

## See Also

{% include "./text-snippets/quick-start-see-also.md" %}
{% include "./text-snippets/auth_sdk_quicklinks.md" %}
{% include "./text-snippets/auth_wagmi_sdk_quicklinks.md" %}
