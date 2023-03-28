---
slug: /pwdlessauth
id: idpwdlessauth
sidebar_custom_props:
  cardIcon: 🤝
arcana:
  root_rel_path: ../..
---

# Build Passwordless Auth

In this guide, you will learn how an app that builds a custom login UI and integrates with the {{config.extra.arcana.sdk_name}} can easily onboard users via the passwordless login option.

## Prerequisites

* Make sure you can access the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}
* The app must be [registered using the {{config.extra.arcana.dashboard_name}}]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) and a unique {{config.extra.arcana.app_address}} must be already assigned to it. This {{config.extra.arcana.app_address}} is essential for integrating the app with the {{config.extra.arcana.sdk_name}}
* Follow the instructions as per the app type and [integrate the app]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) with the {{config.extra.arcana.sdk_name}}.

!!! info "Configuring App"

      Unlike other user onboarding options that require enabling authentication providers, passwordless login can be enabled without any configuration setup using the {{config.extra.arcana.dashboard_name}}.

      Developers can optionally choose to modify the default settings for branding and the {{config.extra.arcana.wallet_name}} settings in the {{config.extra.arcana.dashboard_name}}.

## Steps

*Enabling passwordless login in a Web3 app that is integrated with the {{config.extra.arcana.sdk_name}} is simple!*

Make sure that all the prerequisites listed above are met. The app should be successfully registered, configured, and integrated with the {{config.extra.arcana.sdk_name}}, before adding code to onboard users via the passwordless login option.

### Step 1: Call User Onboarding Function: `loginWithLink`

After integrating the app, add the code to use `loginWithLink` function of the {{config.extra.arcana.sdk_name}} and trigger passwordless login to onboard the users. App users are required to supply an email ID as input for passwordless login.

{% include "./code-snippets/auth_pwdless.md" %}

Check if the user has logged in successfully:

{% include "./code-snippets/auth_isloggedin.md" %}

Log out the dApp user when requested:
    
{% include "./code-snippets/auth_logout.md" %}

**That is all!**  :material-party-popper:

Your dApp is all set for onboarding users via the passwordless login option.

## What's Next?

After enabling passwordless login in the app, developers can use other {{config.extra.arcana.sdk_name}} functions and enable Web3 wallet operations for authenticated users. See [{{config.extra.arcana.sdk_name}} Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md), [how to enable the {{config.extra.arcana.wallet_name}}]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md) for details.

## See also

* [{{config.extra.arcana.company_name}} authentication concepts]({{page.meta.arcana.root_rel_path}}/concepts/authtype/arcanaauth.md).
* [Configure Social Providers]({{page.meta.arcana.root_rel_path}}/howto/config_social/index.md)
* [Troubleshooting authentication errors]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_err.md)
* [{{config.extra.arcana.sdk_name}} Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md)
* {% include "./text-snippets/authsdkref_url.md" %}
