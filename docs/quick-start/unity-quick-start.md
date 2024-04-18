---
alias: unity-quick-start
title: 'Quick Start: Unity Apps'
description: 'Get Started quickly with Unity gaming apps using these step-by-step instructions. Register the Unity app, obtain a ClientID, and then integrate the app with the Arcana Auth SDK.'
arcana:
  root_rel_path: ..
  app_type: "'Unity'"
  app_example_submodule: "`sample-auth-unity`"
---

# Quick Start: Unity Apps

{% include "./text-snippets/warn_early_preview_rel.md" %}

Web3 {{page.meta.arcana.app_type}} gaming apps can integrate with the {{config.extra.arcana.gaming_sdk_name}} and onboard users via social login. The authenticated users can access the {{config.extra.arcana.wallet_name}} instantly within the app context and sign blockchain transactions.

## 1. Register & Configure

Begin by [[register-app-auth|registering the app]] and [[index-configure-auth|configuring auth settings]] the {{config.extra.arcana.gaming_sdk_name}} usage via the {{config.extra.arcana.dashboard_name}}. Note the unique value, **{{config.extra.arcana.app_address}}**, assigned to the app. It is used later for app integration.

See [[index-configure-auth|how to configure user onboarding and gasless transaction settings {{config.extra.arcana.gaming_sdk_name}}]].

## 2. Unity Setup, Auth SDK Install

{% include "./text-snippets/auth_unity_settings.md" %}

## 3. Integrate

Initialize the {{config.extra.arcana.gaming_sdk_name}} by specifying the unique {{config.extra.arcana.app_address}} assigned to the app after registration.

{% include "./code-snippets/auth_unity_init.md" %}

!!! an-note "Use latest SDKs"
  
      {% include "./text-snippets/warn_latest_unity_sdk_version.md" %}

### Onboard Users

Call `LoginWithSocial` or `LoginWithOTP` to onboard the user. Choose one of the [[web3-stack-auth|supported user onboarding options]] such as Google, Steam, etc. 

{% include "./code-snippets/auth_unity_onboard.md" %}

### Sign Transactions

Add code in authenticated user's context to call `Request` method and make Web3 Wallet operation requests. 

{% include "./code-snippets/auth_unity_web3_wallet_ops.md" %}

## 4. Deploy

{% include "./text-snippets/quick-start-deploy.md" %}

{==

The Unity app is now ready to onboard users via the specified login method. Once the user logs in, the {{config.extra.arcana.wallet_name}} will be instantly accessible for Web3 wallet operations within the app context. 

==}

## See also

* {% include "./text-snippets/unity_sample_url.md" %}
{% include "./text-snippets/quick-start-see-also.md" %}
