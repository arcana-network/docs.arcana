---
alias: gasless-user-onboarding
title: 'Gasless App: Onboard Users'
description: 'Learn how to enable gasless transactions in a vanilla HTML/CSS/JS app that integrates with the Arcana Auth SDK and uses plug-and-play feature to onboard users.'
arcana:
  root_rel_path: ../..
  app_type: "'Vanilla HTML/CSS/JS'"
  firebase_custom_ui_tag: "build-iam-firebase-auth"
---

# Gasless App: Onboard Users

In this guide, you will learn how {{page.meta.arcana.app_type}} Web3 apps can integrate with the [{{config.extra.arcana.sdk_name}}]({{page.meta.arcana.root_rel_path}}/concepts/authsdk.md) onboard users and allow authenticated users to perform gasless transactions.

Developers can choose to onboard users by either using the built-in plug-and-play login UI provided by the {{config.extra.arcana.sdk_name}} or a build a custom login UI. Once a user onboards the app, they can instantly access the {{config.extra.arcana.wallet_name}} within the app context. Developers must configure gasless operations and set up gas tanks through the {{config.extra.arcana.dashboard_name}} prior to integrating the app with the {{config.extra.arcana.sdk_name}}.

## Prerequisites

* Make sure you can access the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}

* Use the [{{config.extra.arcana.dashboard_name}}]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md) to [[index-configure-auth|register and configure the app]]. The plug-and-play pop-up UI screen will display only those authentication providers that are configured using the {{config.extra.arcana.dashboard_name}}.  If no authentication providers are configured in the {{config.extra.arcana.dashboard_name}}, then users can only onboard the app via the passwordless login option. See [[index-configure-auth|how to configure authentication providers]] for details.
  
* Follow the instructions as per the app type and [[index-integrate|integrate the app]] with the {{config.extra.arcana.sdk_name}} before accessing user onboarding functions of the {{config.extra.arcana.sdk_name}}.

* **Make sure you configure gasless operations through the dashboard.** See [[configure-gasless|how to set up gas tanks and deposit funds]] to enable gasless transactions in apps that are integrated with the {{config.extra.arcana.sdk_name}}.

!!! an-caution "Gasless Transactions"

      The {{config.extra.arcana.sdk_name}} has a built-in gasless feature that can be used to enable gasless transactions in the {{config.extra.arcana.wallet_name}} for apps that integrate with the SDK.

      If you are looking at **only** enabling gasless transactions in third-party browser-based wallets and do not require social login, Gasless Standalone SDK (Coming soon!).

## Steps

*Onboarding users and enabling gasless transactions through the {{config.extra.arcana.sdk_name}} is simple!*

Just a single line of code!

### Option 1: Onboarding via plug-and-Play Login UI

After successfully integrating the app with the {{config.extra.arcana.sdk_name}}, make sure the `AuthProvider` is successfully initialized. Then simply add a single line of code, call to the `connect` function of the {{config.extra.arcana.sdk_name}} and enable the built-in plug-and-play login UI in the app when a user clicks a button to log in:

{% include "./code-snippets/auth_plugnplay.md" %}

The `connect()` function will bring up the plug-and-play pop-up modal in the app context and display the available options for user onboarding. Only those options are displayed that were earlier configured by the developer using the {{config.extra.arcana.dashboard_name}}.

The figure below shows the plug-and-play login UI screen for a test app. All the authentication providers configured by the developer are available as the onboarding options. The passwordless login option is enabled by default.

<figure markdown="span">
  ![Plug-and-Play Login UI]({{config.extra.arcana.img_dir}}/an_plug_n_play_auth.{{config.extra.arcana.img_png}}){ .an-screenshots-noeffects .width_35pc }
  <figcaption>Plug-and-Play Login</figcaption>
</figure>

!!! an-tip "Arcana JWT Token"

     {% include "./text-snippets/jwt_token.md" %}

!!! an-warning "No plug-and-play support for Firebase authentication."

      {% include "./text-snippets/warn_firebase_no_pnp.md" %}

That is all! :material-party-popper:

When a user logs into the app with established gas tanks, whitelisted app operations, and deposited funds from the developer or sponsor, all allowed actions using {{config.extra.arcana.wallet_name}} don't incur gas fees.

### Option 2: Onboarding via custom Login UI

Alternatively, developers can use [[index-custom-ui-onboard-users|custom login UI]] to onboard users via one of the supported social login mechanisms.

That is all! :material-party-popper:

When a user logs into the app with established gas tanks, whitelisted app operations, and deposited funds from the developer or sponsor, all allowed actions using {{config.extra.arcana.wallet_name}} don't incur gas fees.

!!! an-warning "No plug-and-play support for Firebase authentication."

      {% include "./text-snippets/warn_firebase_no_pnp.md" %}

## What's Next?

After onboarding users in the app, developers can use other {{config.extra.arcana.sdk_name}} functions and add supported Web3 wallet operations for authenticated users. See [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]], [[index-arcana-wallet|how to enable the {{config.extra.arcana.wallet_name}}]] for details.

## See also

* [[index-configure-auth|Configure authentication providers]]
* [[index-build-social-providers|Build custom login UI]]
* [[web-auth-error-msg|{{config.extra.arcana.sdk_name}} Errors]]
* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]
* {% include "./text-snippets/authsdkref_url.md" %}