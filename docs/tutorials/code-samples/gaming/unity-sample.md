---
alias: unity-code-sample
title: 'Unity Code Sample'
description: 'Sample code to help developers that are building Unity-based gaming apps to quickly integrate with the Arcana Auth SDK.'
arcana:
  root_rel_path: ../..
---

# Integration Example: Unity App

Web3 Unity apps can onboard users via social login and allow authenticated users to access the Arcana wallet from within the app context by integrating with the {{config.extra.arcana.gaming_sdk_name}}.

Before installing the `{{config.extra.arcana.gaming_sdk_pkg_name}}` package and integrating the {{config.extra.arcana.gaming_sdk_name}} with the app, developers must register and configure the app using the {{config.extra.arcana.dashboard_name}}.

## Steps

### Step 1: Register & Configure

Log in to the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}. [[register-app-auth|Register]] and [[index-configure-auth|configure user onboarding options]] for the app. Configure [[configure-gasless|gasless transactions]] if required.

<img class="an-screenshots-noeffects" alt="Dashboard Screenshot App Config Google, Twitch" src="/img/nextjs_app_db_setup_google_twitch.png"/>

By default, a Testnet configuration profile is associated with every registered app. The Testnet profile for the app has a unique **{{config.extra.arcana.app_address}}** that is used later during app integration.

!!! note "Mainnet Deployment"
   
     A newly registered app is associated with a Testnet configuration profile. After integration with the SDK, it can be deployed on the Testnet only. 
     
     To deploy on Mainnet, developers must create the Mainnet profile and use the **{{config.extra.arcana.app_address}}** assigned to the Mainnet profile to integrate the app. See [deploy-app| app deployment for details.]
    

<img class="an-screenshots-noeffects"  alt="Client ID for the app" src="/img/an_db_app_address.png"/>

### Step 2: Setup Unity, Install Auth SDK

{% include "./text-snippets/auth_unity_settings.md" %}

### Step 3: Initialize Auth SDK

{% include "./code-snippets/auth_unity_init.md" %}

### Step 3: Onboard Users

First, call `LoginWithSocial` or `LoginWithOTP` to onboard the user. Choose one of the [[web3-stack-auth|supported user onboarding options]] such as Google, Steam, etc. 

{% include "./code-snippets/auth_unity_onboard.md" %}

### Step 4: Enable Web3 Wallet Operations

Next, call `Request` to make Web3 Wallet operation requests from within the app context. 

{% include "./code-snippets/auth_unity_web3_wallet_ops.md" %}

The app is ready to be deployed on the Testnet. Once a user authenticates, the built-in {{config.extra.arcana.wallet_name}} is displayed in the app's context. Authenticated users can sign blockchain transactions.

<img class="an-screenshots" alt="AuthProvider Unity app Login" src="/img/auth_ex_html_css_js_app2.png" width="50%"/>

That's all! :material-party-popper:{.icon-color}

## See Also

* [[unity-quick-start|Unity Quick Start Guide]]
* {% include "./text-snippets/unity_sample_url.md" %}