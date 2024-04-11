---
alias: gasless-standalone-quick-start
title: 'Quick Start: Gasless Apps (Third-party wallets)'
description: 'Get Started quickly with Arcana Gasless Standalone SDK for apps by using these step-by-step instructions. Use the Arcana Developer Dashboard to register the app, get a client ID, configure gasless operations and then use the client ID to integrate the app with the Arcana Gasless SDK.'
arcana:
  root_rel_path: ..
  app_type: "'Gasless'"
  app_example_submodule: "`sample-gasless-metamask-only`"
---

# Quick Start: Gasless Apps (Third-party Wallets)

Web3 apps can easily enable gasless transactions through third-party wallets by integrating with the {{config.extra.arcana.gasless_sdk_name}}! 

!!! an-tip "{{config.extra.arcana.wallet_name}}"

      Developers can enable gasless transactions in {{config.extra.arcana.wallet_name}} by integrating the app with the {{config.extra.arcana.sdk_name}} and using the built-in gasless feature. See [[gasless-quick-start|Gasless Quick Start Guide]] for details.
  
<!----
## Overview

Web3 app developers can easily enable zero gas fees for app users by using {{config.extra.arcana.company_name}} SDKs. The process may vary depending on the app use case:

### Use cases

1. **Only {{config.extra.arcana.wallet_name}} Apps**: This use case refers to apps that need to enable gasless transactions **only** with the embedded, non-custodial {{config.extra.arcana.wallet_name}}.
2. **Multi-wallet Apps**: Multi-wallet apps are those that support {{config.extra.arcana.wallet_name}} and third-party browser-based wallets as well. They need to enable gasless transactions in both, the {{config.extra.arcana.wallet_name}} and any third-party browser-based wallet. 
3. **Only Third-party Wallet Apps**: This use case refers to apps that only need to enable gasless transactions for other third-party, browser-based wallets. Such apps do not require any user onboarding functionality or the embedded, non-custodial {{config.extra.arcana.wallet_name}} offered by the {{config.extra.arcana.sdk_name}}.

In every use case above, the developers must first use the  {{config.extra.arcana.dashboard_name}} and register the app, obtain a unique identifier for the app and configure gasless settings. After gasless configuration is complete, developers can proceed to install the requisite SDKs as per the use case and begin app integration.

<img class="an-screenshots" src="/img/an_auth_usage_overview_light.png#only-light" alt="Auth Usage Overview"/>
<img class="an-screenshots" src="/img/an_auth_usage_overview_dark.png#only-dark" alt="Auth Usage Overview"/>

In this guide, we will cover only the **last use case**. For details on the first two use cases, see [[gasless-quick-start|here]].

--->

{{config.extra.arcana.gasless_sdk_name}} allows gasless transactions in Web3 apps using third-party wallets easily!

## 1. Register App

{% include "./text-snippets/quick-start-reg-gasless.md" %}

## 2. Configure Gasless

[[configure-gasless|Configure gasless transactions]] for the registered app through the {{config.extra.arcana.dashboard_name}}. Gasless configuration involves setting up gas tanks on one or more supported chains, funding gas tanks, and providing smart contract ABI details to whitelist one or more app operations.

## 3. Install SDK

{% include "./code-snippets/gasless_integrate_use.md" %}

!!! an-note "Use latest SDKs"
  
      {% include "./text-snippets/warn_latest_gasless_sdk_version.md" %}

## 4. Add Gasless Transaction

Enable gasless transactions for third-party wallets by calling the `doTx()` method of the {{config.extra.arcana.gasless_sdk_name}} in the authenticated user's context. 

**Assumption:**  The Web3 app is already enabled for user onboarding and integrated with third-party wallets.

{% include "./code-snippets/gasless_integrate_doTx.md" %}

## 5. Deploy 

{% include "./text-snippets/quick-start-deploy.md" %}

{==

The app is now powered by gasless transactions built using the {{config.extra.arcana.gasless_sdk_name}}.

==}

## See Also

{% include "./text-snippets/quick-start-see-also-gasless.md" %}

{% include "./text-snippets/gasless_sdk_quicklinks.md" %}