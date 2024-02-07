---
alias: mvx-quick-start
title: 'Quick Start: MultiversX Apps'
description: 'Get Started quickly with Arcana Auth product for MultiversX apps by using these step-by-step instructions. Use the Arcana Developer Dashboard to register the app, get a client ID and then use the client ID to integrate the app with the Arcana Auth SDK.'
arcana:
  root_rel_path: ..
  app_type: "'MultiversX'"
  app_example_submodule: "'`sample-auth-multiversx`'"
  custom_login_ui_tag: "index-custom-ui-onboard-users"
  firebase_custom_ui_tag: "build-iam-firebase-auth"
---

# Quick Start: MultiversX Apps

!!! note "Already using {{config.extra.arcana.sdk_name}}?"
  
      {% include "./text-snippets/warn_latest_sdk_version.md" %}

## Overview

{% include "./text-snippets/quick-start-overview.md" %}

## Step 1: Register & Configure App

Follow the instructions in the [[mvx-dashboard-user-guide|MultiversX Configuration Guide]] and register your app, configure social login and chains and obtain a unique {{config.extra.arcana.app_address}}. Then proceed to install the {{config.extra.arcana.sdk_name}} and use this {{config.extra.arcana.app_address}} to integrate the MultiversX app.

## Step 2: Install SDK

For {{page.meta.arcana.app_type}} app, install the [`{{config.extra.arcana.auth_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth) package.

{% include "./code-snippets/auth_install.md" %}

{% include "./text-snippets/watch_auth_github_repo.md" %}

Next, integrate the app with the {{config.extra.arcana.sdk_name}} by instantiating and calling the requisite `AuthProvider` functions.

## Step 3: Integrate App

{% include "./text-snippets/quick-start-int-auth-evm.md" %}

## Step 4: Onboard Users

{% include "./text-snippets/quick-start-auth-onboard.md" %}

For sample code and details on how to onboard users in a {{page.meta.arcana.app_type}} app via a custom login UI, see [[index-vue-custom-ui-onboard-users|how to enable configured providers when using a custom login UI]].

!!! tip "Arcana JWT Token"

      {% include "./text-snippets/jwt_token.md" %}

Next, add code to enable Web3 operations in the app through the {{config.extra.arcana.wallet_name}}.

## Step 5: Web3 Operations

After adding code to onboard users, developers can enable Web3 wallet operations in the MultiversXapp. For details, see [[mvx-web3-wallet-ops|howt to issue Web3 wallet operations]] in a MultiversX app.

**That's all!!!** :material-party-popper:

Your {{page.meta.arcana.app_type}} app is now powered by {{config.extra.arcana.product_name}}. Authenticated users can instantly access the {{config.extra.arcana.wallet_name}} within the app context and start signing blockchain transactions on MultiversX. 

## Next Steps

Manage the user experience for signing blockchain transactions by selecting the default, built-in {{config.extra.arcana.wallet_name}} UI and tinkering with the [[configure-wallet-visibility|wallet visibility]] or [[custom-wallet-ui|replacing the built-in wallet with a custom wallet UI]]. 

To learn how to deploy the app on Testnet/Mainnet, see [[deploy-app|App Deployment Guide]]. For other queries, refer to the [[faq-mvx|Integrating MultiversX App FAQ]] or contact our [support|support team].

## Examples

{% include "./text-snippets/quick-start-common-examples.md" %}

{% include "./text-snippets/demo/auth_sdk_mvx_demo.md" %}

## See Also

{% include "./text-snippets/quick-start-see-also.md" %}

{% include "./text-snippets/prod_version_info.md" %}
