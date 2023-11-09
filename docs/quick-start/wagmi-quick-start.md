---
alias: wagmi-quick-start
title: 'Quick Start: Wagmi Apps'
description: 'Get Started quickly using these step-by-step instructions for using the Arcana Auth product in Wagmi walletconnector apps. Use Arcana Developer dashboard to first register the app, get a client ID and use this client ID to integrate the app with the Arcana Auth SDK.'
arcana:
  root_rel_path: ..
  app_type: "'Wagmi'"
  app_example_submodule: "'`sample-auth-wagmi`,`sample-auth-wagmi-viem`'"
  social_provider: "'google'"
  custom_login_ui_tag: "onboard-wagmi-app-custom-ui"
---

# Quick Start: Wagmi Apps

!!! note "Already using {{config.extra.arcana.sdk_name}}?"
  
      {% include "./text-snippets/warn_latest_sdk_version.md" %}

!!! warning "Wagmi Apps"

      {% include "./text-snippets/warn_latest_wagmi_sdk_version.md" %}

## Overview

To implement {{config.extra.arcana.product_name}} in a {{page.meta.arcana.app_type}} app, start by registering your app and configuring usage settings through {{config.extra.arcana.dashboard_name}}. After that, install {{config.extra.arcana.sdk_name}} and {{config.extra.arcana.wagmi_sdk_name}}, integrate the app, and initialize the `AuthProvider`. You'll need to add code to create an `ArcanaConnector` and specify the `AuthProvider`. Use the appropriate configuration in the `ArcanaConnector` constructor and specify the type of user onboarding. Finally, add code to enable authenticated users to sign blockchain transactions and deploy your app on the Testnet or Mainnet.

<img class="an-screenshots" src="/img/an_auth_usage_overview_light.png#only-light" alt="uth Usage Overview"/>
<img class="an-screenshots" src="/img/an_auth_usage_overview_dark.png#only-dark" alt="Auth Usage Overview"/>

## Step 1: Register & Configure App

{% include "./text-snippets/quick-start-reg-config.md" %}

## Step 2: Install SDKs

For {{page.meta.arcana.app_type}} app, install the following packages:

* [`{{config.extra.arcana.auth_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth)
* [`{{config.extra.arcana.wagmi_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-wagmi)

{% include "./code-snippets/auth_wagmi_install.md" %}

{% include "./text-snippets/watch_auth_github_repo.md" %}

{% include "./text-snippets/watch_wagmi_github_repo.md" %}

Next, integrate the app with the installed SDKs.

## Step 3: Integrate App

Begin app integration by importing `AuthProvider` from the `{{config.extra.arcana.auth_sdk_pkg_name}}` package.

{% include "./code-snippets/import_auth.md" %}

Create a new `AuthProvider` instance. Specify the unique **{{config.extra.arcana.app_address}}** obtained during the app registration.

{% include "./code-snippets/auth_wagmi_configure_pnp.md" %}

{% include "./text-snippets/quick-start-authprovider-optional.md" %}

Next, import the `ArcanaConnector` from the `{{config.extra.arcana.wagmi_sdk_pkg_name}}` package. Create a new `ArcanaConnector` and specify the `AuthProvider` instantiated earlier.

{% include "./code-snippets/auth_wagmi_create_client_pnp.md" %}

!!! tip "Wagmi `createClient` and `configClient`"

      For more details on the `createClient` and `configClient` functions of the Wagmi package, see [Wagmi Getting Started Guide](https://wagmi.sh/react/getting-started) and [Wagmi 1.x.y Migration Guide](https://wagmi.sh/react/migration-guide).

<!--
See [`ArcanaConnector` constructor parameters](https://auth-wagmi-sdk-ref-guide.netlify.app/interfaces/constructorparams) for details.
-->

## Step 4: Onboard Users

For onboarding users via the built-in, plug-and-play login UI (default), simply provide the newly instantiated and configured `ArcanaConnector` to set up Wagmi. You can set up Wagmi connector configuration before onboarding users by using `createClient` or `createConfig` depending upon whether you are using Wagmi version before v2.0 or later.

!!! tip "Wagmi `createClient` and `configClient`"

      For more details on the `createClient` and `configClient` functions of the Wagmi package, see [Wagmi Getting Started Guide](https://wagmi.sh/react/getting-started) and [Wagmi 1.x.y Migration Guide](https://wagmi.sh/react/migration-guide).

{% include "./code-snippets/auth_wagmi_create_client_pnp.md" %}

Now use `WagmiConfig` component to bring up the built-in login UI when the user chooses Arcana wallet connector in the app.

{% include "./code-snippets/auth_wagmi_use_app.md" %}

For sample code and details, see [[onboard-wagmi-app-pnp-ui|how to onboard users through the configured authentication providers using the built-in, plug-and-play login UI]], in a {{page.meta.arcana.app_type}} app.

{% include "./text-snippets/quick-start-auth-onboard-custom-login.md" %}

!!! tip "Arcana JWT Token"

      {% include "./text-snippets/jwt_token.md" %}

**That's all!!!** :material-party-popper:

{==

Your {{page.meta.arcana.app_type}} app is now powered by {{config.extra.arcana.product_name}}.

==}

## Next Steps

{% include "./text-snippets/quick-start-next-steps.md" %}

## Examples

{% include "./text-snippets/quick-start-common-examples.md" %}

## See Also

{% include "./text-snippets/quick-start-see-also.md" %}

{% include "./text-snippets/prod_version_info.md" %}