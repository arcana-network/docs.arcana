---
alias: register-app-auth
title: 'Register App'
description: 'Register and obtain a unique clientId. This clientId value is used to integrate the app with the Arcana SDKs. Use the dashboard to configure SDK usage settings.'
arcana:
  root_rel_path: ../..
---

# Register App

Learn how to register a Web3 app through the [[concept-arcana-dashboard|{{config.extra.arcana.dashboard_name}}]] before using the {{config.extra.arcana.sdk_name}} to enable social login and allow users to sign blockchain transactions via the {{config.extra.arcana.wallet_name}}.

## Prerequisites

{% include "./text-snippets/db_prerequisites.md" %}

## Steps

### 1. Dashboard Login

{% include "./text-snippets/db_login.md" %}

### 2. Create a New App

{% include "./text-snippets/db_register_dapp.md" %}

{% include "./text-snippets/save_app_address.md" %}

## What's next?

After registering the app, [[index-configure-auth| configure the user onboarding]] settings and [[integrate-vanilla-app|integrate the app]] to onboard users and allow them to sign blockchain transactions via the {{config.extra.arcana.wallet_name}}.

## See Also

* [[dashboard-user-guide#delete-application|Deleting Application Entry]]
* [[dashboard-user-guide#manage-configuration-profiles|Managing Testnet and Mainnet Configurations]]
* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]
* [[faq-gen| FAQ]]

{% include "./text-snippets/demo/auth_sdk_demo.md" %}