---
alias: unity-dashboard-user-guide
title: 'Unity Setup'
description: 'Web3 app developers can use the Arcana Developer Dashboard to register and configure the apps that use Unity framework, before integration with the Arcana Auth SDK.'
arcana:
  root_rel_path: ..
  app_type: "'Unity'"
  app_example_submodule: "`sample-auth-unity`"
---

# Unity Setup

This guide explains how to configure a Unity Web3 app and allow users to sign blockchain transactions using the {{config.extra.arcana.wallet_name}}.

Use the {{config.extra.arcana.dashboard_name}} to first configure user onboarding settings for the Unity app and then integrate the app with the {{config.extra.arcana.gaming_sdk_name}}. 

## Prerequisites

{% include "./text-snippets/db_prerequisites.md" %}

{% include "./text-snippets/db_login.md" %}

## Register App

To register a Web3 Unity app, log into the {{config.extra.arcana.dashboard_name}}, create a new app and select the chain that must show up as the default chain in the wallet.

See [[register-app-auth|how to register a new App]] for details. 

## Configure App

Refer to the [[dashboard-user-guide|{{config.extra.arcana.dashboard_name}} User's Guide]] and configure the branding, social authentication providers and other settings. 

## Unity Settings, SDK Installation

{% include "./text-snippets/auth_unity_settings.md" %}

## Next Steps

After integrating an app with the {{config.extra.arcana.gaming_sdk_name}}, developers can add code to [[unity-user-onboarding|onboard users]] and [[unity-web3-wallet-ops|enable Web3 wallet operations]] for authenticated users to sign transactions.

## See Also

* {% include "./text-snippets/unity_sample_url.md" %}
{% include "./text-snippets/quick-start-see-also.md" %}
