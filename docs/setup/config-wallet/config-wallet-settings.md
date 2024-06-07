---
alias: configure-wallet-settings
title: 'Manage Wallet Settings'
description: 'Web3 app developers can manage the look and feel of the built-in, embedded Arcana wallet that is accessible to authenticated users from within the Arcana Auth SDK integrated app context.'
arcana:
  root_rel_path: ../..
---

# Manage Wallet Settings 

In this guide, you will learn how to specify the {{config.extra.arcana.wallet_name}} UI and security settings in the {{config.extra.arcana.dashboard_name}} to manage the look and feel of the built-in wallet functionality before integrating the app with the {{config.extra.arcana.sdk_name}}.

## Prerequisites

* Make sure you can access the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}

* The [[register-app-auth| app must be registered]] using the [[concept-arcana-dashboard| {{config.extra.arcana.dashboard_name}}]].

*Managing the displayed list of pre-configured chains for authenticated users in {{config.extra.arcana.wallet_name}} UI within the Web3 app is simple!*

## Step 1: Dashboard Log-in

Log in to the {{config.extra.arcana.dashboard_name}} and click your registered app entry from the 'Manage Apps' screen. 

<figure markdown="span">
  ![Dashboard: Select Wallet UI]({{config.extra.arcana.img_dir}}/an_db_wallet_mngt_nav.gif){ .an-screenshots .width_85pc }
  <figcaption>Dashboard: Select Wallet UI</figcaption>
</figure>

## Step 2: Configure Wallet

Click **Configure** in the LHS navigation area. Select **Arcana Wallet** to configure the wallet settings.

!!! an-note "Wallet Settings are Optional"

      You can choose to use the default, built-in {{config.extra.arcana.wallet_name}} settings and continue to integrate your app with the {{config.extra.arcana.sdk_name}}.

<figure markdown="span">
  ![Wallet UI Settings]({{config.extra.arcana.img_dir}}/an_db_wallet_mngt_options.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
  <figcaption>Wallet UI Settings</figcaption>
</figure>

{% include "./text-snippets/db_wallet_settings.md" %}

**That's all!** :material-party-popper:

## What's Next?

Besides these wallet settings in the {{config.extra.arcana.dashboard_name}} you can also [[configure-wallet-chains|manage the user experience of the wallet by tweaking the list of pre-defined chains displayed in the wallet]], manage the user experience of having same wallet address across multiple apps integrated with the {{config.extra.arcana.dashboard_name}} via the [[configure-wallet-keyspace|keyspace setting]], manage [[configure-wallet-visibility|wallet visibility]], or optionally change the [[configure-wallet-branding|wallet branding]] settings.

## See also

* [[web-auth-error-msg|{{config.extra.arcana.sdk_name}} Errors]]
* [[configure-wallet-visibility|Configure wallet visibility mode]]
