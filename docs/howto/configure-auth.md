---
alias: configure-auth
title: 'Register & Configure App for using Auth SDK'
description: 'Register and obtain a unique clientId. This clientId value is used to integrate the app with the Auth SDK. Use the dashboard to configure auth settings.'
arcana:
  root_rel_path: ..
  social_provider: "supported social login and custom IAM providers"
---

# Register & Configure App

In this tutorial, you will learn how to register and configure a Web3 app before integrating it with the {{config.extra.arcana.sdk_name}}.

!!! info "{{config.extra.arcana.app_address}}"
    
    Each registered app is assigned a unique identifier, **{{config.extra.arcana.app_address}}**, required to [[index-integrate-app|integrate an app]] with the {{config.extra.arcana.sdk_name}}.

## Prerequisites

{% include "./text-snippets/db_prerequisites.md" %}

## Steps

### 1. Log into Dashboard

{% include "./text-snippets/db_login.md" %}

### 2. Register App

{% include "./text-snippets/db_register_dapp.md" %}

### 3. Configure Auth Usage

{% include "./text-snippets/db_settings.md" %}

You can reconfigure Web3 app settings for {{config.extra.arcana.sdk_name}} usage anytime later by using the {{config.extra.arcana.dashboard_name}}.

That is all! 🎉

You have successfully registered and configured your application.  

## What's next?

See [[index-configure-auth|how to configure {{config.extra.arcana.sdk_name}} usage]] for details.

Once you set up the app, [[sdk-installation|install appropriate {{config.extra.arcana.sdk_name}} package]] as per the app type, and [[index-integrate-app|integrate the app]]. The integration method varies with the app type. As part of integration, initialize the SDK and call appropriate functions for onboarding and allowing authenticated users to sign blockchain transactions.

!!! info "Save {{config.extra.arcana.app_address}}"

    A unique **{{config.extra.arcana.app_address}}** is assigned to every registered app. It is displayed on the top right of the dashboard screen. Copy and use it to integrate the app with the {{config.extra.arcana.sdk_name}}.

    ![App unique identifier](/img/an_db_app_address.png){.an-screenshots}

## See Also

* [[configure-wallet-visibility|Configure wallet visibility mode]]
* [[dashboard-user-guide#delete-application|Deleting Application Entry]]
* [[dashboard-user-guide#manage-testnet-and-mainnet-configurations|Managing Testnet and Mainnet Configurations]]
* [[auth-quick-start|{{config.extra.arcana.product_name}} Quick Start Guide]] 
* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]
* {% include "./text-snippets/authsdkref_url.md" %}