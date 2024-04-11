---
alias: integrate-vue-app
title: 'Integrate Vue App'
description: 'Integrate Web3 apps built using the Vue framework with the Arcana Auth SDK using the instructions listed here.'
arcana:
  root_rel_path: ../..
  app_example_submodule: "`sample-auth-vue`"
---

# Integrate Vue App

In this guide, you will learn how to integrate a Vue application with the [{{config.extra.arcana.sdk_name}}]({{page.meta.arcana.root_rel_path}}/concepts/authsdk.md).

<!--
[Try Auth Example :material-rocket-launch:](https://9mt0h4.csb.app/){ .md-button .md-button--primary}
-->

## Prerequisites

* Log in to the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}

* Use the {{config.extra.arcana.dashboard_name}} to [[register-app-auth|register]] the Vue app before integrating with the {{config.extra.arcana.sdk_name}}. 

* Click on the *Social Auth* tab in the {{config.extra.arcana.dashboard_name}}. Configure and select one or more [[web3-stack-auth|supported authentication providers]] for onboarding the app users.

    !!! an-tip "Configure Authentication Providers"

          You may be required to configure additional provider details for different authentication providers. In the case of Google, the developer must use Google Developer Console to set up the app and generate a Google assigned [[config-auth-google|client ID for Google OAuth]]. This Google ClientID will be configured in the {{config.extra.arcana.dashboard_name}} **Social Auth** settings before integrating the app.

          For details, see [[index-configure-auth|how to configure authentication providers]].

* Save the **{{config.extra.arcana.app_address}}** assigned to the app displayed in the {{config.extra.arcana.dashboard_name}}. It is required while integrating the app with the {{config.extra.arcana.sdk_name}} and creating the `AuthProvider`. 

## Steps

*Integrating a Vue app with the {{config.extra.arcana.sdk_name}} is simple!*

Follow these two steps:

### Step 1: Install `{{config.extra.arcana.auth_sdk_pkg_name}}` package

{% include "./code-snippets/auth_install.md" %}

### Step 2: Initialize the {{config.extra.arcana.sdk_name}}

After installing the SDK, add code to import `{{config.extra.arcana.auth_sdk_pkg_name}}`. Create an `AuthProvider` with the following inputs:

* **{{config.extra.arcana.app_address}}** Specify the unique identifier obtained after [[register-app-auth|registering]] the app through the {{config.extra.arcana.dashboard_name}}.

* **Wallet User Experience:** Use the `alwaysVisible` parameter to specify the [[concept-wallet-visibility|{{config.extra.arcana.wallet_name}} visibility mode]] that controls the user experience for the wallet.

The sample code below demonstrates how a new `AuthProvider` is created and initialized. It also uses the `connect` function to use the built-in, plug-and-play login UI feature of the {{config.extra.arcana.sdk_name}} to onboard users.

{% include "./code-snippets/vue_auth_js.md" %}

In the case of a Vue app, update the `App.vue` file to use the new AuthProvider and allow authenticated users to access the {{config.extra.arcana.wallet_name}}:

{% include "./code-snippets/vue_app_js.md" %}

Once the user logs in the app, they can access the embedded, {{config.extra.arcana.wallet_name}} to sign blockchain transactions.

That is all! :material-party-popper:

The Vue app is now successfully integrated with the {{config.extra.arcana.sdk_name}}. Refer to the [Auth Examples](https://github.com/arcana-network/auth-examples) for working integration examples.

## What's Next?

After integrating an app with the {{config.extra.arcana.sdk_name}}, developers can add code to [[index-onboard-users|onboard users]] and [[index-arcana-wallet|enable Web3 wallet operations]] for authenticated users to sign blockchain transactions.

## See also

* Using the {{config.extra.arcana.sdk_name}} to [[google-social-auth|enable social authentication via Google]]
* [[index-onboard-users|Onboard Users]]
* [[web-auth-error-msg|{{config.extra.arcana.sdk_name}} Errors]]
* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]
* {% include "./text-snippets/authsdkref_url.md" %}
