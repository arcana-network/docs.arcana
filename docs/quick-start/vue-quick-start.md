---
alias: vue-quick-start
title: 'Quick Start: Vue Apps'
description: 'Get Started quickly with Arcana Auth product for Vue apps by using these step-by-step instructions. Use the Arcana Developer Dashboard to register the app, get a client ID and then use the client ID to integrate the app with the Arcana Auth SDK.'
arcana:
  root_rel_path: ..
  app_type: "'Vue'"
  app_example_submodule: "'`sample-auth-vue`'"
  custom_login_ui_tag: "index-custom-ui-onboard-users"
  firebase_custom_ui_tag: "build-iam-firebase-auth"
---

# Quick Start: Vue Apps

Web3 apps built using {{page.meta.arcana.app_type}} can easily onboard users via social login by integrating with the {{config.extra.arcana.sdk_name}}!

## Prerequisites

* Vue [v3.3](https://www.npmjs.com/package/vue) or higher

## 1. Register & Configure

{% include "./text-snippets/quick-start-reg-config-auth.md" %}

## 2. Install SDK

Install the [`{{config.extra.arcana.auth_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth) package.

{% include "./code-snippets/auth_install.md" %}

!!! an-note "Use latest SDKs"
  
      {% include "./text-snippets/warn_latest_sdk_version.md" %}

## 3. Integrate

{% include "./text-snippets/quick-start-int-auth-evm.md" %}

### Onboard Users

{% include "./text-snippets/quick-start-auth-onboard.md" %}

!!! an-tip "Arcana JWT Token"

      {% include "./text-snippets/jwt_token.md" %}

### Sign Transactions

{% include "./text-snippets/quick-start-sign-transactions.md" %}

## 4. Deploy

{% include "./text-snippets/quick-start-deploy.md" %}

{==

Your {{page.meta.arcana.app_type}} app is now powered by {{config.extra.arcana.product_name}} to onboard users via social login.

==}

## See Also

{% include "./text-snippets/quick-start-see-also.md" %}

{% include "./text-snippets/auth_sdk_quicklinks.md" %}
