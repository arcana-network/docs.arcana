---
alias: configure-wallet-branding
title: 'Manage Branding'
description: 'Web3 app developers can manage the look and feel of the built-in, embedded Arcana wallet that is accessible to authenticated users from within the Arcana Auth SDK integrated app context.'
arcana:
  root_rel_path: ../..
---

# Manage Branding 

In this guide, you will learn how to use the branding settings in the {{config.extra.arcana.dashboard_name}} to manage the look and feel of the embedded {{config.extra.arcana.wallet_name}} that shows up in an application context. 

By default, the {{config.extra.arcana.wallet_name}} displays this logo <img src="{{config.extra.arcana.img_dir}}/an_wallet_default_branding_logo.{{config.extra.arcana.img_png}}" alt="The default branding logo" width="3%" /> , and uses a dark theme.

## Prerequisites

* Make sure you can access the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}

* The [[register-app-auth| app must be registered]] using the [[concept-arcana-dashboard| {{config.extra.arcana.dashboard_name}}]].

*Managing the displayed list of pre-configured chains for authenticated users in {{config.extra.arcana.wallet_name}} UI within the Web3 app is simple!*

## Step 1: Dashboard Log-in

Log in to the {{config.extra.arcana.dashboard_name}} and click your registered app entry from the 'Manage Apps' screen. Click **Configure** in the LHS navigation area. Select **Chain Management** to configure the default subset of supported chains.

<figure markdown="span">
  ![Dashboard: Manage Chains]({{config.extra.arcana.img_dir}}/an_db_chains_mngt_nav.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
  <figcaption>Dashboard: Manage Chains</figcaption>
</figure>

The chain configuration UI is displayed:

<figure markdown="span">
  ![Chain Management Settings]({{config.extra.arcana.img_dir}}/an_db_chain_mngt_options.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
  <figcaption>Chain Management Settings</figcaption>
</figure>

## Step 2: Configure Branding

Select the registered app from the *Manage Apps** dashboard screen for which you wish to tweak the branding. Double-click the app and you will see the app dashboard. Click *Configure* in the LHS navigation menu.

You will see **Branding** as one of the configuration options. When you select branding you will see the available configuration settings that can be changed as per the app requirements:

* **Upload Logo:** Upload light and dark theme branding/logo images that are displayed in the {{config.extra.arcana.wallet_name}} UI.
* **Wallet Theme:** You can change the default 'dark' theme.<figure markdown="span"><img alt="Branding" class="an-screenshots width_85pc" src="{{config.extra.arcana.img_dir}}/an_db_configure_branding.{{config.extra.arcana.img_png}}"/><figcaption>Branding Settings</figcaption>
</figure>

!!! an-note "Branding is Optional"

      You can choose to use the default branding settings and continue to integrate your app with the {{config.extra.arcana.sdk_name}}.

**That's all!** :material-party-popper:

## What's Next?

Besides managing the branding for the {{config.extra.arcana.dashboard_name}} you can also [[configure-wallet-chains|configure the list of pre-defined chains displayed in the wallet]], manage the user experience of having the same wallet address across multiple apps integrated with the {{config.extra.arcana.dashboard_name}} via the [[configure-wallet-keyspace|keyspace setting]], manage [[configure-wallet-visibility|wallet visibility]], choose a [[concept-custom-wallet-ui|custom wallet UI]] instead of the built-in wallet UI, etc.

## See also

* [[web-auth-error-msg|{{config.extra.arcana.sdk_name}} Errors]]
* [[configure-wallet-visibility|Configure wallet visibility mode]]
