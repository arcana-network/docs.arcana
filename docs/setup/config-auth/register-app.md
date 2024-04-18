---
alias: register-app-auth
title: 'Register App'
description: 'Register and obtain a unique clientId. This clientId value is used to integrate the app with the Arcana SDKs. Use the dashboard to configure SDK usage settings.'
arcana:
  root_rel_path: ../..
---

# Register App

In this tutorial, you will learn how to register a Web3 app and get a unique client identifier required for integrating with the {{config.extra.arcana.sdk_name}}.

## Prerequisites

{% include "./text-snippets/db_prerequisites.md" %}

## Steps

### 1. Log into Dashboard

{% include "./text-snippets/db_login.md" %}

### 2. Register App

{% include "./text-snippets/db_register_dapp.md" %}

That is all! 🎉

!!! an-info "Save {{config.extra.arcana.app_address}}"

    A unique **{{config.extra.arcana.app_address}}** is assigned to every registered app. It is displayed on the top right of the dashboard screen. Copy and use it to integrate the app with the {{config.extra.arcana.company_name}} SDKs.

    <figure markdown="span">
      ![Arcana Client ID for Registered App]({{config.extra.arcana.img_dir}}/an_db_app_address.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc}
      <figcaption>Arcana Client ID for Registered App</figcaption>
    </figure>

## What's next?

After registering the app, [[index-configure-auth| configure the user onboarding settings]] first. Optionally, you can also [[configure-gasless|configure gasless settings]]. After configurations, install the SDK and [[index-integrate|integrate the app]].

!!! an-note "Enabling gasless transactions in third-party wallets"

      The {{config.extra.arcana.sdk_name}} has a built-in gasless feature for the in-app {{config.extra.arcana.wallet_name}}. Developers must install and [[web-gasless-integrate|integrate with the {{config.extra.arcana.gasless_sdk_name}}]] to enable gasless transactions in third-party wallets.

## See Also

* [[configure-wallet-visibility|Configure wallet visibility mode]]
* [[dashboard-user-guide#delete-application|Deleting Application Entry]]
* [[dashboard-user-guide#manage-testnet-and-mainnet-configurations|Managing Testnet and Mainnet Configurations]]
* [[auth-quick-start|{{config.extra.arcana.product_name}} Quick Start Guide]] 
* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]
* {% include "./text-snippets/authsdkref_url.md" %}