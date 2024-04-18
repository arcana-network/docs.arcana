---
alias: web3-react-quick-start
title: 'Quick Start: Web3-React Apps'
description: 'Get Started quickly using these step-by-step instructions for using the Arcana Auth product in Web3-React apps. Use Arcana Developer dashboard to first register the app, get a client ID and use this client ID to integrate the app with the Arcana Auth SDK.'
arcana:
  root_rel_path: ..
  app_type: "'Web3-React'"
  app_example_submodule: "`sample-auth-web3-react`"
  social_provider: "'google'"
  custom_login_ui_tag: "onboard-web3-react-app-custom-ui"
---

# Quick Start: Web3-React Apps

Web3 apps using {{page.meta.arcana.app_type}} framework can easily onboard users via social login by integrating with the {{config.extra.arcana.web3_react_sdk_name}}!

## Prerequisites

* Web3-react [v8.2.0](https://www.npmjs.com/package/@web3-react/core/v/8.2.0) or higher

## 1. Register & Configure

{% include "./text-snippets/quick-start-reg-config-auth.md" %}

## 2. Install SDKs

For {{page.meta.arcana.app_type}} app, install the following packages:

* [`{{config.extra.arcana.auth_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth)
* [`{{config.extra.arcana.web3_react_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-web3-react)

{% include "./code-snippets/auth_web3_react_install.md" %}

!!! an-note "Use latest SDKs"
  
      {% include "./text-snippets/warn_latest_sdk_version.md" %}

      {% include "./text-snippets/warn_latest_web3_react_sdk_version.md" %}

## 3. Integrate

Import `AuthProvider` from the `{{config.extra.arcana.auth_sdk_pkg_name}}` package.

{% include "./code-snippets/import_auth.md" %}

Create a new `AuthProvider` instance. Specify the unique **{{config.extra.arcana.app_address}}** obtained during the app registration. 

{% include "./code-snippets/new_auth.md" %}

{% include "./text-snippets/quick-start-authprovider-optional.md" %}

Next, import the `ArcanaConnector` from the `{{config.extra.arcana.web3_react_sdk_pkg_name}}` package.

Initialize the `ArcanaConnector` by specifying the `AuthProvider` created earlier:

{% include "./code-snippets/auth_web3_react_configure_pnp.md" %}

The app is now integrated with the {{config.extra.arcana.sdk_name}} and the {{config.extra.arcana.web3_react_sdk_name}}. Use React hooks to enable `AuthProvider` functions via the `ArcanaConnector`.

{% include "./code-snippets/auth_web3_react_use.md" %}

### Onboard Users

{% include "./code-snippets/auth_web3_react_configure_pnp.md" %}

{% include "./text-snippets/quick-start-auth-onboard-custom-login.md" %}

!!! an-tip "Arcana JWT Token"

      {% include "./text-snippets/jwt_token.md" %}

### Sign Transactions

{% include "./text-snippets/quick-start-sign-transactions.md" %}

## 4. Deploy

{% include "./text-snippets/quick-start-deploy.md" %}

{==

Your {{page.meta.arcana.app_type}} app is now powered by {{config.extra.arcana.sdk_name}} and  {{config.extra.arcana.web3_react_sdk_name}} to onboard users via social login and sign blockchain transactions using  {{config.extra.arcana.wallet_name}}.

==}

## See Also

{% include "./text-snippets/quick-start-see-also.md" %}

{% include "./text-snippets/auth_sdk_quicklinks.md" %}
{% include "./text-snippets/auth_web3_react_sdk_quicklinks.md" %}