---
alias: near-quick-start
title: 'Quick Start: Near Apps'
description: 'Get Started quickly with Arcana Auth product for Near apps by using these step-by-step instructions. Use the Arcana Developer Dashboard to register the app, get a client ID and then use the client ID to integrate the app with the Arcana Auth SDK.'
arcana:
  root_rel_path: ..
  app_type: "'Near'"
  app_example_submodule: "'`sample-auth-near`'"
  custom_login_ui_tag: "index-custom-ui-onboard-users"
  firebase_custom_ui_tag: "build-iam-firebase-auth"
---

# Quick Start: Near Apps

{{page.meta.arcana.app_type}} Web3 apps can easily onboard users via social login by integrating with the {{config.extra.arcana.sdk_name}}!

<!---
## Overview

{% include "./text-snippets/quick-start-overview.md" %}
-->

## 1. Register & Configure

Follow the instructions in the [[near-dashboard-user-guide|Near Configuration Guide]] and register your app, configure social login and chains and obtain a unique {{config.extra.arcana.app_address}}. Then proceed to install the {{config.extra.arcana.sdk_name}} and use this {{config.extra.arcana.app_address}} to integrate the Near app.

## 2. Install SDK

Install the [`{{config.extra.arcana.auth_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth) package.

{% include "./code-snippets/auth_install.md" %}

!!! an-note "Use latest SDK"
  
      {% include "./text-snippets/warn_latest_sdk_version.md" %}

## 3. Integrate

{% include "./text-snippets/quick-start-int-auth-evm.md" %}

### Onboard Users

{% include "./text-snippets/quick-start-auth-onboard.md" %}

Instead of the built-in login UI offered by the {{config.extra.arcana.sdk_name}}, developers can also [[near-user-onboarding|onboard users via a custom login UI]] in a {{page.meta.arcana.app_type}} app.

!!! an-tip "Arcana JWT Token"

      {% include "./text-snippets/jwt_token.md" %}

Next, add code to enable Web3 operations in the app through the {{config.extra.arcana.wallet_name}}.

### Sign Transactions

Add code to enable Web3 wallet operations in the Near app. For details, see [[near-web3-wallet-ops|how to issue Web3 wallet operations in a Near app]].

Manage the user experience for signing blockchain transactions by selecting the default, built-in {{config.extra.arcana.wallet_name}} UI and tinkering with the [[configure-wallet-visibility|wallet visibility]] or [[custom-wallet-ui|replacing the built-in wallet with a custom wallet UI]]. 

## 4. Deploy App

{% include "./text-snippets/quick-start-deploy.md" %}

{==

Your {{page.meta.arcana.app_type}} app is now powered by {{config.extra.arcana.product_name}}. Authenticated users can instantly access the {{config.extra.arcana.wallet_name}} within the app context and start signing blockchain transactions.

==}

## See Also

{% include "./text-snippets/quick-start-see-also.md" %}

{% include "./text-snippets/auth_sdk_quicklinks.md" %}

{% include "./text-snippets/demo/auth_sdk_near_demo.md" %}