---
alias: wagmi-quick-start
title: 'Quick Start: Wagmi Apps'
description: 'Get Started quickly using these step-by-step instructions for using the Arcana Auth product in Wagmi walletconnector apps. Use Arcana Developer dashboard to first register the app, get a client ID and use this client ID to integrate the app with the Arcana Auth SDK.'
arcana:
  root_rel_path: ..
  app_type: "'Wagmi'"
  app_example_submodule: "`sample-auth-wagmi, sample-auth-wagmi-viem`"
  social_provider: "'google'"
  custom_login_ui_tag: "onboard-wagmi-app-custom-ui"
---

# Quick Start: Wagmi Apps

Web3 apps using the {{page.meta.arcana.app_type}} framework can easily onboard users via social login by integrating with the {{config.extra.arcana.wagmi_sdk_name}}!

## Prerequisites

* Wagmi [v1.4.5](https://www.npmjs.com/package/wagmi/v/1.4.5) or higher
* Wagmi [v2.5.0](https://www.npmjs.com/package/wagmi/v/2.5.0) or higher

!!! an-note "Use latest SDKs"
  
      {% include "./text-snippets/warn_latest_sdk_version.md" %}

      {% include "./text-snippets/warn_latest_wagmi_sdk_version.md" %}

<!---

{% include "./text-snippets/watch_auth_github_repo.md" %}

{% include "./text-snippets/watch_wagmi_github_repo.md" %}

-->

## 1. Register & Configure

{% include "./text-snippets/quick-start-reg-config-auth.md" %}

## 2. Install SDKs

Install the following SDKs:

* [`{{config.extra.arcana.auth_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth)
* [`{{config.extra.arcana.wagmi_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-wagmi)

{% include "./code-snippets/auth_wagmi_install.md" %}

!!! an-note "Viem, Wagmi v2.0 or above"

      Apps using Viem, Wagmi v2.0 or higher must use the latest {{config.extra.arcana.wagmi_sdk_name}} v2.x.

## 3. Integrate

{% include "./code-snippets/import_auth.md" %}

Create a new `AuthProvider` instance. Specify the unique **{{config.extra.arcana.app_address}}** assigned to the app after registration.

{% include "./code-snippets/auth_wagmi_configure_pnp.md" %}

{% include "./text-snippets/quick-start-authprovider-optional.md" %}

Next, import the `ArcanaConnector` from the `{{config.extra.arcana.wagmi_sdk_pkg_name}}` package. Create a new instance of [`ArcanaConnector`](https://wagmi-authsdk-ref-guide.netlify.app/classes/arcanaconnector#constructor) and specify the `AuthProvider` instantiated earlier.

{% include "./code-snippets/auth_wagmi_create_client_pnp.md" %}

### Onboard Users

To use the built-in [onboard-wagmi-app-pnp-ui|plug-and-play login UI], for onboarding users quickly, set up the Wagmi connector through the `ArcanaConnector`. Use `createClient` or `createConfig`, depending upon whether you are using Wagmi version v1.x or v2.x. Refer to the appropriate sample code in the tabs below.

{% include "./code-snippets/auth_wagmi_create_client_pnp.md" %}

Use `WagmiConfig` component to bring up the built-in login UI with configured providers for social login.

{% include "./code-snippets/auth_wagmi_use_app.md" %}

{% include "./text-snippets/quick-start-auth-onboard-custom-login.md" %}

!!! an-tip "Arcana JWT Token"

      {% include "./text-snippets/jwt_token.md" %}

### Sign Transactions

{% include "./text-snippets/quick-start-sign-transactions.md" %}

## 4. Deploy

{% include "./text-snippets/quick-start-deploy.md" %}

{==

Your {{page.meta.arcana.app_type}} app is now powered by {{config.extra.arcana.sdk_name}} and  {{config.extra.arcana.wagmi_sdk_name}} to onboard users and allow authenticated users to sign blockchain transactions.

==}

!!! an-tip "`createClient` vs. `creatConfig` usage"

      See [Wagmi Getting Started Guide](https://wagmi.sh/react/getting-started) and {% include "./text-snippets/wagmi_migration_guide_ref.md" %}.

## See Also

{% include "./text-snippets/quick-start-see-also.md" %}

{% include "./text-snippets/auth_sdk_quicklinks.md" %}
{% include "./text-snippets/auth_wagmi_sdk_quicklinks.md" %}
