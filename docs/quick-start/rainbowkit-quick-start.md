---
alias: rainbowkit-quick-start
title: 'Quick Start: RainbowKit Apps'
description: 'Get Started quickly using these step-by-step instructions for using the Arcana Auth product in RainbowKit walletconnector apps. Use Arcana Developer dashboard to first register the app, get a client ID and use this client ID to integrate the app with the Arcana Auth SDK.'
arcana:
  root_rel_path: ..
  app_type: "'RainbowKit'"
  app_example_submodule: "`sample-auth-rainbowkit`,`sample-auth-rainbow-viem`"
  social_provider: "'google'"
  custom_login_ui_tag: "onboard-rainbow-app-custom-ui"
---

# Quick Start: RainbowKit Apps

Web3 apps using {{page.meta.arcana.app_type}} can easily onboard users via social login by integrating with the {{config.extra.arcana.wagmi_sdk_name}}!

<!----
## Overview

To implement {{config.extra.arcana.product_name}} in a {{page.meta.arcana.app_type}} app, start by registering your app and configuring usage settings through {{config.extra.arcana.dashboard_name}}. After that, install {{config.extra.arcana.sdk_name}} and {{config.extra.arcana.wagmi_sdk_name}}, integrate the app, and initialize the `AuthProvider`. You'll need to add code to create an `ArcanaConnector` and specify the `AuthProvider`. Use the appropriate configuration in the `ArcanaConnector` constructor and specify the type of user onboarding. Finally, add code to enable authenticated users to sign blockchain transactions and deploy your app on the Testnet or Mainnet.

<img class="an-screenshots" src="/img/an_auth_usage_overview_light.png#only-light" alt="uth Usage Overview"/>
<img class="an-screenshots" src="/img/an_auth_usage_overview_dark.png#only-dark" alt="Auth Usage Overview"/>
-->

## Prerequisites

* RainbowKit [v1.3.0](https://github.com/rainbow-me/rainbowkit/releases/tag/%40rainbow-me%2Frainbowkit%401.3.0) or higher

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

{% include "./code-snippets/auth_rainbow_configure_pnp.md" %}

You can optionally customize the following settings in the `AuthProvider` constructor:

{% include "./text-snippets/quick-start-authprovider-optional.md" %}

Next, import the `ArcanaConnector` from the `{{config.extra.arcana.wagmi_sdk_pkg_name}}` package. Create a new `ArcanaConnector` and specify the `AuthProvider` instantiated earlier.

{% include "./code-snippets/auth_wagmi_create_client_pnp.md" %}

!!! an-tip "`createClient` vs. `creatConfig` usage"

      See [Wagmi Getting Started Guide](https://wagmi.sh/react/getting-started) and {% include "./text-snippets/wagmi_migration_guide_ref.md" %}.

<!--
See [`ArcanaConnector` constructor parameters](https://auth-wagmi-sdk-ref-guide.netlify.app/interfaces/constructorparams) for details.
-->

### Onboard Users

Use `ArcanaConnector` to set up Wagmi and onboard users via the built-in plug-and-play login UI (default). Set up Wagmi connector configuration through `createClient` or `createConfig` depending upon whether you are using the Wagmi version before v2.0 or later.

{% include "./code-snippets/auth_rainbow_connector.md" %}

{% include "./code-snippets/auth_rainbow_create_client.md" %}

Use `WagmiConfig` and `RainbowKitProvider` components to bring up the built-in login UI and enable social login through the configured providers.

{% include "./code-snippets/auth_rainbow_use.md" %}

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

!!! an-tip "Wagmi `createClient` and `configClient`"

      For more details on the `createClient` and `configClient` functions of the Wagmi package, see [Wagmi Getting Started Guide](https://wagmi.sh/react/getting-started) and {% include "./text-snippets/wagmi_migration_guide_ref.md" %}.

## See Also

{% include "./text-snippets/quick-start-see-also.md" %}

{% include "./text-snippets/auth_sdk_quicklinks.md" %}
{% include "./text-snippets/auth_wagmi_sdk_quicklinks.md" %}
