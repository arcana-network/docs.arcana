---
alias: react-nextjs-quick-start
title: 'Quick Start: React/Next.js Apps'
description: 'Get Started quickly using these step-by-step instructions for using the Arcana Auth product in React/Next.js apps. Use Arcana Developer dashboard to first register the app, get a client ID and use this client ID to integrate the app with the Arcana Auth SDK.'
arcana:
  root_rel_path: ..
  app_type: "'React/Next.js'"
  app_example_submodule: "`sample-auth-react, sample-auth-nextjs`"
  social_provider: "'google'"
  custom_login_ui_tag: "index-react-nextjs-custom-ui-onboard-users"
  firebase_custom_ui_tag: "react-nextjs-build-iam-firebase-auth"
---

# Quick Start: React/Next.js Apps

{{config.extra.arcana.sdk_name}} lets you onboard users to {{page.meta.arcana.app_type}} Web3 App quickly!

## Prerequisites

* React Version [18.00](https://github.com/facebook/react/blob/main/CHANGELOG.md#1800-march-29-2022) or higher
* TypeScript Version [5.00](https://github.com/microsoft/TypeScript/releases/tag/v5.0.2) or higher

## 1. Register & Configure 

{% include "./text-snippets/quick-start-reg-config-auth.md" %}

## 2. Install SDKs

For {{page.meta.arcana.app_type}} app, install the following packages:

* [`{{config.extra.arcana.auth_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth)
* [`{{config.extra.arcana.react_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-react)

{% include "./code-snippets/auth_react_install.md" %}

!!! an-note "Use latest SDKs"
  
      {% include "./text-snippets/warn_latest_sdk_version.md" %}

      {% include "./text-snippets/warn_latest_react_sdk_version.md" %}

## 3. Integrate

{% include "./code-snippets/import_auth.md" %}

Create a new `AuthProvider` instance. Specify the unique **{{config.extra.arcana.app_address}}** obtained during the app registration. This gives you access to a Web3 provider.

{% include "./code-snippets/new_auth.md" %}

{% include "./text-snippets/quick-start-authprovider-optional.md" %}

{% include "./code-snippets/auth_react_provideauth.md" %}

### Onboard Users

{% include "./text-snippets/use-react-pnp-auth.md" %}

{% include "./text-snippets/quick-start-auth-onboard-custom-login.md" %}

!!! an-tip "Arcana JWT Token"

      {% include "./text-snippets/jwt_token.md" %}

### Sign Transactions

Use the [[index-web3-wallet-ops|standard JSON RPC Web3 wallet operations]] supported by the `AuthProvider`. 

Manage the user experience for signing blockchain transactions by choosing the default, built-in {{config.extra.arcana.wallet_name}} UI and tinkering with the [[configure-wallet-visibility|wallet visibility]] or selecting a[[custom-wallet-ui| custom wallet UI]].

## 4. Deploy

{% include "./text-snippets/quick-start-deploy.md" %}

{==

Your {{page.meta.arcana.app_type}} app is now powered by {{config.extra.arcana.sdk_name}} and {{config.extra.arcana.react_sdk_name}} to quickly onboard users and allow authenticated users to sign blockchain transactions.

==}

## See Also

{% include "./text-snippets/quick-start-see-also.md" %}

{% include "./text-snippets/auth_sdk_quicklinks.md" %}
{% include "./text-snippets/auth_react_sdk_quicklinks.md" %}

