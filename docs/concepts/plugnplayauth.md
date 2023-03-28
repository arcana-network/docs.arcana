---
slug: /plugnplayauth
id: idplugnplayauth
title: Plug & Play Auth
sidebar_custom_props:
  cardIcon: 💠
arcana:
  root_rel_path: ..
---

# Plug & Play Auth

In the earlier releases of the {{config.extra.arcana.sdk_name}}, the app developer had to build a custom UI and then add code to use the {{config.extra.arcana.sdk_name}} functions for onboarding users via the configured authentication providers. For example, to support Google as a user onboarding option, the app developer had to add code for custom UI and `loginWithSocial('google')` {{config.extra.arcana.sdk_name}} function call when the user chose to click the UI for logging in via 'Google'. Similarly, for passwordless login, the developer had to add an input field for the user to provide an email ID, which was used to send a login link to the user and call the `loginWithLink` method of the {{config.extra.arcana.sdk_name}}. 

The latest {{config.extra.arcana.sdk_name}} supports a new "plug-and-play" feature that provides a built-in, ready-to-use login UI that does not require the developer to add custom UI code. Developers can simply use the [`connect`](https://authsdk-ref-guide.netlify.app/classes/authprovider#connect) function to bring up a default, built-in, pop-up user interface that displays all the [user onboarding options configured by the application developer]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) using the [{{config.extra.arcana.dashboard_name}}]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md). Once the user selects a login option and authenticates successfully, the pop-up UI disappears from the application context and the {{config.extra.arcana.wallet_name}} UI shows up allowing the authenticated user to sign blockchain transactions.

The application developer can choose the new `connect` function to enable plug-and-play UI for user onboarding. Or they can continue to use the `loginWithSocial` and `loginWithLink` functions and build a custom user interface to onboard app users.