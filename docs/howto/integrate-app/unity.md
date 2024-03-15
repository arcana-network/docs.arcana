---
alias: integrate-unity-app
title: 'Enable Auth in a Unity App'
description: 'Instructions on how to integrate Web3 Unity gaming app with the Arcana Auth Gaming SDK.'
arcana:
  root_rel_path: ../..
---

# Integrate Unity App

In this guide, you will learn how to integrate a Web3 Unity gaming app with the [{{config.extra.arcana.gaming_sdk_name}}]({{page.meta.arcana.root_rel_path}}/concepts/authsdk.md) and perform transactions through the {{config.extra.arcana.wallet_name}} within the app context.

<!-- 
[Try Auth Example :material-rocket-launch:](https://9mt0h4.csb.app/){ .md-button .md-button--primary}
-->

## Prerequisites

* Log in to the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}

* Use the {{config.extra.arcana.dashboard_name}} to [[configure-auth|register and configure app settings]] before integrating with the {{config.extra.arcana.gaming_sdk_name}}. 

* Click on the *Social Auth* tab in the {{config.extra.arcana.dashboard_name}}. Configure and select one or more [[state-of-the-arcana-auth#user-onboarding-options|supported authentication providers]] for onboarding the app users.

    !!! tip "Configure Authentication Providers"

          You may be required to configure additional provider details for different authentication providers. In the case of Google, the developer must use Google Developer Console to set up the app and generate a Google assigned [[config-auth-google|client ID for Google OAuth]]. This Google ClientID will be configured in the {{config.extra.arcana.dashboard_name}} **Social Auth** settings before integrating the app.

          For details, see [[index-configure-auth|how to configure authentication providers]].

* Save the **{{config.extra.arcana.app_address}}** assigned to the app displayed in the {{config.extra.arcana.dashboard_name}}. It is required while integrating the app with the {{config.extra.arcana.gaming_sdk_name}} later.

## Steps

*Integrating a Unity Web3 gaming app with the {{config.extra.arcana.gaming_sdk_name}} to enable blockchain transactions through the {{config.extra.arcana.wallet_name}} is simple!*

Follow these steps:

### Step 1: Setup Unity, Install Auth SDK

{% include "./text-snippets/auth_unity_settings.md" %}

### Step 2: Initialize Auth SDK

{% include "./code-snippets/auth_unity_init.md" %}

That is all! :material-party-popper:

The Unity Web3 gaming app is now successfully integrated with the {{config.extra.arcana.sdk_name}}.  

## What's Next?

After integrating an app with the {{config.extra.arcana.gaming_sdk_name}}, developers can add code to [[unity-user-onboarding|onboard users]] and [[unity-web3-wallet-ops|enable Web3 wallet operations]] for authenticated users to sign transactions.

## See also

* [User Authentication]({{page.meta.arcana.root_rel_path}}/concepts/authtype/arcanaauth.md)
* [[unity-code-sample|Sample Unity App Integration]]
* [Sample Unity App Integration](https://github.com/arcana-network/auth-examples)
* [[unity-quick-start|Unity Quick Start Guide]]
