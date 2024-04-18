---
alias: configure-wallet-keyspace
title: 'Manage Keyspace'
description: 'Web3 app developers can manage the user experience of having the same wallet address when they log into any app that is integrated with the Auth SDK. By default, every integrated app can allow its authenticated users to instantly access the built-in, embedded Arcana wallet from within the app context with a familiar, easily recognizable global address or an app-specific one.'
arcana:
  root_rel_path: ../..
---

# Manage Keyspace 

In this guide you will learn how to specify the keyspace settings in the {{config.extra.arcana.dashboard_name}} to manage user experience of having the same familiar, easily recognizable wallet address when users log into any app that is integrated with the Auth SDK.

## Prerequisites

* Make sure you can access the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}

* The [[register-app-auth| app must be registered]] using the [[concept-arcana-dashboard| {{config.extra.arcana.dashboard_name}}]].

*Managing the displayed list of pre-configured chains for authenticated users in {{config.extra.arcana.wallet_name}} UI within the Web3 app is simple!*

## Step 1: Dashboard Log-in

Log in to the {{config.extra.arcana.dashboard_name}} and click your registered app entry from the 'Manage Apps' screen. Click **Configure** in the LHS navigation area. Select **Keyspace** to choose the keyspace type.

<figure markdown="span">
  ![Dashboard: Select Keyspace]({{config.extra.arcana.img_dir}}/an_db_keyspace_nav.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
  <figcaption>Dashboard: Select keyspace</figcaption>
</figure>

The Keyspace Configuration settings are displayed:

<figure markdown="span">
  ![Keyspace Settings]({{config.extra.arcana.img_dir}}/an_db_keyspace_settings.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
  <figcaption>Keyspace Settings</figcaption>
</figure>

## Step 2: Configure Keyspace

Select the registered app from the *Manage Apps** dashboard screen for which you wish to choose the [[concept-keyspace-type| appropriate keyspace type]]. Double-click the app and you will see the app dashboard. Click *Configure* in the LHS navigation menu.

Use the **Keyspace** section to select the **App-specific** (default) or **Global Keys** feature. Global keys are less secure (only as compared to app-specific ones) but allow app users to have the same wallet address across different applications in the {{config.extra.arcana.company_name}} ecosystem.

{% include "./text-snippets/db_keyspace.md" %}

**That's all!** :material-party-popper:

## What's Next?

Besides managing the keyspace for the {{config.extra.arcana.dashboard_name}} you can also [[configure-wallet-chains|configure the list of pre-defined chains displayed in the wallet]], manage user experience and wallet look and feel via the [[configure-wallet-branding|branding setting]], manage [[configure-wallet-visibility|wallet visibility]], choose a [[concept-custom-wallet-ui|custom wallet UI]] instead of the built-in wallet UI, etc.

## See also

* [[web-auth-error-msg|{{config.extra.arcana.sdk_name}} Errors]]
* [[configure-wallet-visibility|Configure wallet visibility mode]]
