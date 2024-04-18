---
alias: solana-quick-start
title: 'Quick Start: Solana Apps'
description: 'Get Started quickly with Arcana Auth product for Solana apps by using these step-by-step instructions. Use the Arcana Developer Dashboard to register the app, get a client ID and then use the client ID to integrate the app with the Arcana Auth SDK.'
arcana:
  root_rel_path: ..
  app_type: "'Solana'"
  app_example_submodule: "'`sample-auth-solana`'"
  custom_login_ui_tag: "index-custom-ui-onboard-users"
  firebase_custom_ui_tag: "build-iam-firebase-auth"
---

# Quick Start: Solana Apps

{{page.meta.arcana.app_type}} Web3 apps can easily onboard users via social login by integrating with the {{config.extra.arcana.sdk_name}}!

## 1. Register & Configure

Register the app as instructed in the [[solana-dashboard-user-guide|Solana Configuration Guide]] and obtain a unique {{config.extra.arcana.app_address}}. Configure social login provider to onboard users and customize the user experience for blockchain signing via the wallet settings. Solana chains are pre-configured and instantly accessible to authenticated users via the {{config.extra.arcana.wallet_name}}.

## 2. Install SDK

For {{page.meta.arcana.app_type}} app, install the [`{{config.extra.arcana.auth_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth) package.

{% include "./code-snippets/auth_install.md" %}

!!! an-note "Use latest SDKs"
  
      {% include "./text-snippets/warn_latest_sdk_version.md" %}

## 3. Integrate

{% include "./text-snippets/quick-start-int-auth-solana.md" %}

### Onboard Users

{% include "./text-snippets/quick-start-auth-onboard.md" %}

!!! an-tip "Arcana JWT Token"

      {% include "./text-snippets/jwt_token.md" %}

### Sign Transactions

Use the standard EIP-1193 provider, `auth.provider`, for [[solana-json-rpc-ops|issuing Solana JSON-RPC calls]] in the context of the authenticated user.  Use `auth.solana` Solana provider for [[solana-wallet-ops|issuing supported Web3 wallet operations]] on the Solana chain.

## 4. Deploy

{% include "./text-snippets/quick-start-deploy.md" %}

{==

Your {{page.meta.arcana.app_type}} app is now powered by {{config.extra.arcana.sdk_name}} to onboard users via social login and allow authenticated users to sign blockchain transactions using the {{config.extra.arcana.wallet_name}}. 

==}

## See Also

{% include "./text-snippets/quick-start-see-also.md" %}

{% include "./text-snippets/auth_sdk_quicklinks.md" %}

{% include "./text-snippets/demo/auth_sdk_solana_demo.md" %}