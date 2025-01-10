---
alias: config-custom-wallet-ui
title: 'Custom Wallet UI Setup'
description: 'Configure custom wallet UI settings for the app.'
arcana:
  root_rel_path: ..
---

# Custom Wallet UI Setup

Learn how to configure a custom wallet UI instead of the default, built-in wallet UI before using the {{config.extra.arcana.sdk_name}} to enable [[concept-social-login|social login]] and allow authenticated users to sign blockchain transactions.

## Prerequisites

{% include "./text-snippets/db_prerequisites.md" %}

## 1. Dashboard Login

{% include "./text-snippets/db_login.md" %}

## 2. Select Custom Wallet UI to Register

Use the dashboard to create a new app entry and [[register-app-auth|register the app]]. While specifying the new app name and other details, specify the  **Wallet UI Mode** setting as 'Custom UI'. By default, it is set to use the built-in, {{config.extra.arcana.wallet_name}} UI. Then click the 'Create' button to confirm app registration. Once registered, you cannot change the  **Wallet UI Mode** setting.

<figure markdown="span">
  ![Choose Custom Wallet UI]({{config.extra.arcana.img_dir}}/an_db_select_custom_wallet_ui.{{config.extra.arcana.img_gif}}){ .an-screenshots .width_85pc }
  <figcaption>Choose Custom Wallet UI</figcaption>
</figure>

Click **Create** after specifying the custom wallet UI option to register the app. 

## What's Next?

[[index-configure-auth|Configure the app]] to enable social login providers, manage chains and wallet user experience for signing blockchain transactions. Integrate the app with the SDK and onboard users. Issue [[evm-web3-wallet-ops|supported JSON/RPC and Web3 wallet operations]] in the authenticated user's context. Allow the users to sign blockchain transactions.

## See Also

* [[dashboard-user-guide| Dashboard User's Guide]]
