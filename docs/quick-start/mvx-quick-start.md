---
alias: mvx-quick-start
title: 'Quick Start: MultiversX Apps'
description: 'Integrate Arcana Auth in MultiversX apps. Onboard users via social login. Provide instant access to the in-app Arcana wallet for signing transactions.'
arcana:
  root_rel_path: ..
  app_type: "'MultiversX'"
  app_example_submodule: "'`sample-auth-multiversx`'"
  custom_login_ui_tag: "index-custom-ui-onboard-users"
  firebase_custom_ui_tag: "build-iam-firebase-auth"
---

# Quick Start: MultiversX Apps

{{page.meta.arcana.app_type}} Web3 apps can easily onboard users via social login by integrating with the {{config.extra.arcana.sdk_name}}!

<!---
## Overview

{% include "./text-snippets/quick-start-overview.md" %}
-->

## 1. Register & Configure

Follow the instructions in the [[mvx-dashboard-user-guide|MultiversX Configuration Guide]] and register your app, configure social login and chains and obtain a unique {{config.extra.arcana.app_address}}. Then proceed to install the {{config.extra.arcana.sdk_name}} and use this {{config.extra.arcana.app_address}} to integrate the MultiversX app.

## 2. Install SDK

Install the [`{{config.extra.arcana.auth_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth) package.

{% include "./code-snippets/auth_install.md" %}

!!! an-note "Use latest SDK"
  
      {% include "./text-snippets/warn_latest_sdk_version.md" %}

## 3. Integrate

{% include "./text-snippets/quick-start-int-auth-mvx.md" %}

### Onboard Users

{% include "./text-snippets/quick-start-auth-onboard.md" %}

Instead of the built-in login UI offered by the {{config.extra.arcana.sdk_name}}, developers can also [[mvx-user-onboarding|onboard users via a custom login UI]] in a {{page.meta.arcana.app_type}} app.

!!! an-tip "Arcana JWT Token"

      {% include "./text-snippets/jwt_token.md" %}

Next, add code to enable Web3 operations in the app through the {{config.extra.arcana.wallet_name}}.

### Sign Transactions

Add code to enable Web3 wallet operations in the MultiversX app. For details, see [[mvx-web3-wallet-ops|how to issue Web3 wallet operations in a MultiversX app]].

Manage the user experience for signing blockchain transactions by selecting the default, built-in {{config.extra.arcana.wallet_name}} UI and tinkering with the [[configure-wallet-visibility|wallet visibility]] or [[custom-wallet-ui|replacing the built-in wallet with a custom wallet UI]]. 

## 4. Deploy App

{% include "./text-snippets/quick-start-deploy.md" %}

{==

Your {{page.meta.arcana.app_type}} app is now powered by {{config.extra.arcana.product_name}}. Authenticated users can instantly access the {{config.extra.arcana.wallet_name}} within the app context and start signing blockchain transactions on MultiversX. 

==}

## See Also

{% include "./text-snippets/quick-start-common-examples.md" %}

{% include "./text-snippets/auth_sdk_quicklinks.md" %}

{% include "./text-snippets/demo/auth_sdk_mvx_demo.md" %}