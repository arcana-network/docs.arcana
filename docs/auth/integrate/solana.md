---
alias: integrate-solana-app
title: 'Enable Solana in a Vanilla HTML/CSS/JavaScript App'
description: 'Integrate Web3 apps built using HTML/CSS/JavaScript with the Arcana Auth SDK. Follow these instructions to use Solana blockchain for transactions via the Arcana wallet.'
arcana:
  root_rel_path: ../..
---

# Integrate Solana App

In this guide, you will learn how to integrate a vanilla HTML/CSS/JS app with the [{{config.extra.arcana.sdk_name}}]({{page.meta.arcana.root_rel_path}}/concepts/authsdk.md) and perform transactions through the {{config.extra.arcana.wallet_name}} on Solana blockchain.

<!-- 
[Try Auth Example :material-rocket-launch:](https://9mt0h4.csb.app/){ .md-button .md-button--primary}
-->

## Prerequisites

* Log in to the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}

* Use the {{config.extra.arcana.dashboard_name}} to [[register-app-auth|register the app]] before configuring the settings and integrating with the {{config.extra.arcana.sdk_name}}. 

* Click on the *Social Auth* tab in the {{config.extra.arcana.dashboard_name}}. Configure and select one or more [[web3-stack-auth|supported authentication providers]] for onboarding the app users.

    !!! an-tip "Configure Authentication Providers"

          You may be required to configure additional provider details for different authentication providers. In the case of Google, the developer must use Google Developer Console to set up the app and generate a Google assigned [[config-auth-google|client ID for Google OAuth]]. This Google ClientID will be configured in the {{config.extra.arcana.dashboard_name}} **Social Auth** settings before integrating the app.

          For details, see [[index-configure-auth|how to configure authentication providers]].

* Save the **{{config.extra.arcana.app_address}}** assigned to the app displayed in the {{config.extra.arcana.dashboard_name}}. It is required while integrating the app with the {{config.extra.arcana.sdk_name}} and creating the `AuthProvider`.

* **Make sure you configure the required Solana chains through the dashboard.** See [[configure-wallet-chains#non-evm-chains|how to set up Solana]] blockchain transactions through the {{config.extra.arcana.wallet_name}} in apps that are integrated with the {{config.extra.arcana.sdk_name}}.

!!! an-caution "Non-EVM Chains"

      The decision to select Solana (non-EVM chain) is made at the time of registering the app by creating an app entry through the dashboard. Once selected, it cannot be reconfigured or switched to any other non-EVM chain. However, the default chain can be changed later to say Solana Testnet or Solana Dev.

## Steps

*Integrating a vanilla HTML/CSS/JS app with the {{config.extra.arcana.sdk_name}} to enable Solana blockchain transactions through the {{config.extra.arcana.wallet_name}} is simple!*

Follow these two steps:

### Step 1: Install `{{config.extra.arcana.auth_sdk_pkg_name}}` package

{% include "./code-snippets/auth_install.md" %}

### Step 2: Initialize the {{config.extra.arcana.sdk_name}}

Import `{{config.extra.arcana.auth_sdk_pkg_name}}` and create a 'new' `AuthProvider`. During instantiation of the `AuthProvider`, specify the unique **{{config.extra.arcana.app_address}}** value assigned to the app after [[register-app-auth|registering]] it through the {{config.extra.arcana.dashboard_name}}. Also, specify the [[concept-wallet-visibility|{{config.extra.arcana.wallet_name}} visibility mode]] via the `alwaysVisible` parameter to manage the wallet user experience.

{% include "./code-snippets/import_auth.md" %}

{% include "./code-snippets/new_auth_solana.md" %}

Initialize the newly instantiated `AuthProvider`. 

{% include "./code-snippets/init_auth.md" %}

!!! an-aution "Initialize First!"

    The app must wait until the `init` call is complete before invoking any of the other {{config.extra.arcana.sdk_name}} functions such as onboarding users by triggering user login, obtaining the standard Ethereum provider, adding/switching networks in the wallet, etc.

After initializing the `AuthProvider`, you can call any of its exported functions. See {% include "./text-snippets/authsdkref_url.md" %} for details.

{% include "./code-snippets/init_auth.md" %}

**Initialize Solana Providers**

{% include "./text-snippets/init_solana_providers.md" %}

That is all! :material-party-popper:

The vanilla HTML/CSS/JS app is now successfully integrated with the {{config.extra.arcana.sdk_name}} for enabling Solana blockchain transactions through the {{config.extra.arcana.wallet_name}} once the user onboards the app. 

Refer to the [Auth Examples](https://github.com/arcana-network/auth-examples) for Solana integration examples.

## What's Next?

After integrating an app with the {{config.extra.arcana.sdk_name}}, developers can add code to [[index-onboard-users|onboard users]] and [[index-arcana-wallet|enable Web3 wallet operations]] for authenticated users to sign transactions on the Solana blockchain.

## See also

* Access Ethereum providers [[web-auth-usage-guide#quick-start-with-ethersjs| `web3.js`, `ethers.js`]]
* [[index-onboard-users|Onboard users]]
* [[web-auth-error-msg| {{config.extra.arcana.sdk_name}} Errors]]
* [[web-auth-usage-guide| {{config.extra.arcana.sdk_name}} Usage Guide]]
* [[faq-solana|Solana FAQ]]
* {% include "./text-snippets/authsdkref_url.md" %}
