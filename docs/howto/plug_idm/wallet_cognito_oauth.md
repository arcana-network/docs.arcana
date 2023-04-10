---
slug: /cognitooauth
id: idcognitooauth
title: Cognito
sidebar_custom_props:
  cardIcon: 🤝
arcana:
  root_rel_path: ../..
  social_provider: "'aws'"
---

# AWS Cognito

In this guide, you will learn how to configure AWS Cognito and integrate the {{config.extra.arcana.sdk_name}} with a Web3 app that builds custom UI for authenticating users via AWS Cognito. After integrating with the {{config.extra.arcana.sdk_name}}, developers can allow authenticated users to sign blockchain transactions using the embedded, non-custodial {{config.extra.arcana.wallet_name}}.

## Prerequisites

* Make sure you can access the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}

* Use the [{{config.extra.arcana.dashboard_name}}]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md) to [register the app]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) and obtain a unique {{config.extra.arcana.app_address}} required for integrating the app with the {{config.extra.arcana.sdk_name}}.

* Carefully [follow the instructions to configure AWS Cognito]({{page.meta.arcana.root_rel_path}}/howto/config_idm/cognito_oauth.md) as the authentication provider.
  
* Use the appropriate integration method as per the app type and [integrate the app]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) with the {{config.extra.arcana.sdk_name}} before accessing the user onboarding function of the {{config.extra.arcana.sdk_name}}.

!!! info "Using `{{config.extra.arcana.wagmi_sdk_pkg_name}}`"

      If an app uses Wagmi or RainbowKit wallet connector and the developer chooses to integrate the app with the {{config.extra.arcana.sdk_name}} via the `{{config.extra.arcana.wagmi_sdk_pkg_name}}` package, then it is **not possible to build custom UI to onboard users** as described in the steps below. {% include "./text-snippets/warn_wagmi_pnp_limitation.md" %}
    
## Steps

*Using AWS Cognito to onboard users in a Web3 app that is integrated with the {{config.extra.arcana.sdk_name}} is simple!*

Just a single line of code!

## Step 1: Call `loginWithSocial` function

Make sure that all the prerequisites listed above are met. The app should be successfully registered, configured, and integrated with the {{config.extra.arcana.sdk_name}}, before adding code to onboard users via AWS Cognito.

{% include "./code-snippets/auth_social_login.md" %}

Check if a user is logged in:

{% include "./code-snippets/auth_isloggedin.md" %}

After onboarding users, developers can add code to access the other {{config.extra.arcana.sdk_name}} functions in the app. See [{{config.extra.arcana.sdk_name}} Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md) for details.

Add code in the application to log out an authenticated user:

{% include "./code-snippets/auth_logout.md" %}

**That is all!**  :material-party-popper:

Your app is all set for authenticating users via AWS Cognito. Authenticated users can instantly access the {{config.extra.arcana.wallet_name}} to sign blockchain transactions.

!!! warning "Apps using Custom IAM Providers"

      {% include "./text-snippets/warn_cognito_social_provider_setup.md" %}

{% include "./text-snippets/aggrlogin-nocognito-support.md" %}

## What's Next?

To know more about how to use Web3 wallet operations programmatically in your app, see [{{config.extra.arcana.wallet_name}} Developer's Guide]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md). Refer to the [{{config.extra.arcana.wallet_name}} User's Guide]({{page.meta.arcana.root_rel_path}}/howto/wallet_ui.md) for more information on how authenticated app users can access the wallet UI.
## See also

* [{{config.extra.arcana.company_name}} authentication concepts]({{page.meta.arcana.root_rel_path}}/concepts/authtype/arcanaauth.md).
* [How to integrate with the {{config.extra.arcana.sdk_name}}]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md)
* [Handling authentication errors]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_err.md)
