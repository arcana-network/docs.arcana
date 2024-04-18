---
alias: gasless-quick-start
title: 'Quick Start: Gasless Apps'
description: 'Get Started with onboarding users via social login and enabling the gasless feature by integrating with the Arcana Auth SDK. Use the Arcana Developer Dashboard to register the app, get a client ID, configure gasless settings, and use the client ID to integrate the app with the Arcana Auth SDK.'
arcana:
  root_rel_path: ..
  app_type: "'Gasless'"
  app_example_submodule: "`sample-gasless-arcana-only`"
---

# Quick Start: Gasless Apps

Web3 apps can easily onboard users via social login and enable gasless transactions through {{config.extra.arcana.wallet_name}} by integrating with the {{config.extra.arcana.sdk_name}}! 

!!! an-tip "Third-party wallets"

      Developers can enable gasless transactions in third-party wallets by integrating the app with the {{config.extra.arcana.gasless_sdk_name}}. See [[gasless-standalone-quick-start|Gasless (Third-Party wallets) Quick Start Guide]] for details.

## 1. Register App

{% include "./text-snippets/quick-start-reg-gasless.md" %}

## 2. Configure Gasless

Follow the instructions [[configure-gasless|here to configure gasless feature usage]] as per your app requirements. You will be required to set up gas tanks for your app, deposit gas fees, and provide smart contract ABI details to whitelist one or more app operations that should happen in a gasless manner.

## 3. Install SDK

Install the {{config.extra.arcana.sdk_name}} and use the built-in gasless feature to enable gasless transactions via the {{config.extra.arcana.wallet_name}}.

{% include "./code-snippets/auth_install.md" %}

!!! an-note "Use latest SDKs"

      {% include "./text-snippets/warn_latest_sdk_version.md" %}

## 4. Integrate

Developers can enable gasless transactions through the {{config.extra.arcana.wallet_name}} by integrating with the {{config.extra.arcana.sdk_name}}. Follow the [[index-integrate|instructions on how to integrate with the {{config.extra.arcana.sdk_name}}]] for details.

### Onboard Users

Web3 apps can enable gasless transactions for authenticated users. 

To enable the {{config.extra.arcana.wallet_name}}, developers have to install the {{config.extra.arcana.sdk_name}} and integrate with it. The developers have a choice to use the [[index-onboard-users|social login]] user onboarding feature offered by the {{config.extra.arcana.sdk_name}} and select the built-in plug-and-play login UI or a custom login UI option to onboard users.

### Sign Transactions

Developers can add Web3 wallet operations programmatically in the context of authenticated users and allow them to sign transactions. The gas tanks set up by the app developer are used to pay the gas fees for whitelisted app operations.

There are no special functions for enabling gasless transactions via the {{config.extra.arcana.wallet_name}}. Simply add code for the supported [[index-wallet-ux|Web3 wallet operations]] and use the standard EIP-1193 JSON/RPC calls for signing blockchain transactions. The SDK automatically checks the gasless configuration settings and ensures that only the whitelisted app operations do not incur any gas fees from the user's SCW account.

## 5. Deploy App

{% include "./text-snippets/quick-start-deploy.md" %}

{==

Your app is now powered by the {{config.extra.arcana.sdk_name}} to support gasless transactions via the {{config.extra.arcana.wallet_name}}.

==}

## See Also

{% include "./text-snippets/quick-start-see-also.md" %}

{% include "./text-snippets/auth_sdk_quicklinks.md" %}
