---
slug: /setupwallet
id: idsetupwallet
sidebar_custom_props:
  cardIcon: 🔐 
arcana:
  root_rel_path: ../..
---

# Integrate Vanilla HTML/CSS/JS App

In this guide, you will learn how to integrate a vanilla HTML/CSS/JS app with the [{{config.extra.arcana.sdk_name}}]({{page.meta.arcana.root_rel_path}}/concepts/authsdk.md).

<!-- 
[Try Auth Example :material-rocket-launch:](https://9mt0h4.csb.app/){ .md-button .md-button--primary}
-->

## Prerequisites

* Developers need to first log into the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}

* Use the {{config.extra.arcana.dashboard_name}} to [register and configure app settings]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) before integrating with the {{config.extra.arcana.sdk_name}}. 

* Click on the *Social Auth* tab in the {{config.extra.arcana.dashboard_name}}. Configure and select one or more supported authentication providers for onboarding the app users.

    {% include "./text-snippets/auth_supported.md" %}

    !!! tip "Configure Authentication Providers"

          You may be required to configure additional provider details for different authentication providers. In the case of Google, the developer must use Google Developer Console to set up the app and generate a Google assigned [client ID for Google OAuth]({{page.meta.arcana.root_rel_path}}/howto/config_social/google_oauth.md). This Google ClientID will be configured in the {{config.extra.arcana.dashboard_name}} **Social Auth** settings before integrating the app.

          For details, see [how to configure authentication providers]({{page.meta.arcana.root_rel_path}}/howto/config_auth/index.md).

* Save the **{{config.extra.arcana.app_address}}** assigned to the app displayed in the {{config.extra.arcana.dashboard_name}}. It is required while integrating the app with the {{config.extra.arcana.sdk_name}} and creating the `AuthProvider`. 

## Steps

*Integrating a vanilla HTML/CSS/JS app with the {{config.extra.arcana.sdk_name}} is simple!*

Follow these two steps:

### Step 1: Install `{{config.extra.arcana.auth_sdk_pkg_name}}` package

{% include "./code-snippets/auth_install.md" %}

### Step 2: Initialize the {{config.extra.arcana.sdk_name}}

Import `{{config.extra.arcana.auth_sdk_pkg_name}}` and create a 'new' `AuthProvider`. During instantiation of the `AuthProvider`, specify the unique **{{config.extra.arcana.app_address}}** value assigned to the app after [registering and configuring]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) it using the {{config.extra.arcana.dashboard_name}}. Also, specify the [{{config.extra.arcana.wallet_name}} visibility mode]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/walletuimodes.md) via the `alwaysVisible` parameter to manage the wallet user experience.

{% include "./code-snippets/import_auth.md" %}

{% include "./code-snippets/new_auth.md" %}

Initialize the newly instantiated `AuthProvider`. 

{% include "./code-snippets/init_auth.md" %}

That is all! :material-party-popper:

The vanilla HTML/CSS/JS app is now successfully integrated with the {{config.extra.arcana.sdk_name}}.

!!! caution

    The app must use wait until the `init` call is complete before invoking any of the other {{config.extra.arcana.sdk_name}} functions such as onboarding users by triggering user login, obtaining the standard Ethereum provider, adding/switching networks in the wallet, etc.

{% include "./code-snippets/provider.md" %}

## What's Next?

After integrating an app with the {{config.extra.arcana.sdk_name}}, developers can add code to [onboard users]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/index.md) and [enable the {{config.extra.arcana.wallet_name}}]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md) for authenticated users to sign blockchain transactions.

## See also

* Access Ethereum providers [web3.js, ethers.js]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md#quick-start-with-ethersjs)
* Using the {{config.extra.arcana.sdk_name}} to [enable user onboarding via Google]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/build_social/wallet_google_oauth.md)
* [Passwordless user onboarding]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/wallet_pwdless_login.md)
* [{{config.extra.arcana.sdk_name}} Errors]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_err.md)
* [{{config.extra.arcana.sdk_name}} Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md)
* {% include "./text-snippets/authsdkref_url.md" %}
