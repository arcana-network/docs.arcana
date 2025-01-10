---
alias: unity-quick-start
title: 'Get Started: Unity Apps'
description: 'Integrate Arcana Auth in Unity apps. Onboard users via social login. Provide instant access to the in-app Arcana wallet for signing transactions.'
arcana:
  root_rel_path: ..
  app_type: "'Unity'"
  app_example_submodule: "`sample-auth-unity`"
---

# Get Started: Unity Apps

{% include "./text-snippets/warn_early_preview_rel.md" %}

Integrate Web3 {{page.meta.arcana.app_type}} gaming apps with {{config.extra.arcana.sdk_name}} and onboard users via [[concept-social-login|social login]]. Enable users to sign blockchain transactions with the in-app [[concept-index-arcana-wallet|{{config.extra.arcana.wallet_name}}]].

## Prerequisites

* [[register-app-auth|Register the app]] and configure auth usage settings via the {{config.extra.arcana.dashboard_name}}. Get a unique {{config.extra.arcana.app_address}} before integrating the app.

* [[index-configure-auth|Configure social login providers]] to onboard users and customize the user experience for blockchain signing via the wallet settings. 

## 1. Unity Setup, Auth Install

{% include "./text-snippets/auth_unity_settings.md" %}

## 2. Integrate

{% include "./code-snippets/auth_unity_init.md" %}

### Onboard Users

{% include "./code-snippets/auth_unity_onboard.md" %}

### Sign Transactions

Use `Request` method to initiate Web3 Wallet operation requests. 

{% include "./code-snippets/auth_unity_web3_wallet_ops.md" %}

{% include "./text-snippets/quick-start-deploy.md" %}

## 3. Advanced Usage

{% include "./text-snippets/quick-start-authprovider-optional.md" %}

{% include "./text-snippets/jwt_token.md" %}

## See also

{% include "./text-snippets/quick-start-common-examples.md" %}