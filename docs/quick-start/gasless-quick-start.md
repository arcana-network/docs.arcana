---
alias: gasless-quick-start
title: 'Quick Start: Gasless Apps'
description: 'Get Started quickly with Arcana Auth product for apps that require social login and gasless feature by using these step-by-step instructions. Use the Arcana Developer Dashboard to register the app, get a client ID, configure gasless operations and then use the client ID to integrate the app with the Arcana Auth SDK.'
arcana:
  root_rel_path: ..
  app_type: "'Gasless'"
  app_example_submodule: "'`sample-gasless-arcana-only`'"
---

# Quick Start: Gasless Apps

!!! note "Already using {{config.extra.arcana.sdk_name}}?"

      {% include "./text-snippets/warn_latest_sdk_version.md" %}

!!! note "Already using {{config.extra.arcana.gasless_sdk_name}}?"

      {% include "./text-snippets/warn_latest_gasless_sdk_version.md" %}

## Overview

Web3 app developers can easily enable zero gas fees for app users by using {{config.extra.arcana.company_name}} SDKs. The process may vary depending on the app use case:

### Use cases

1. **Only {{config.extra.arcana.wallet_name}} Apps**: This use case refers to apps that need to enable gasless transactions **only** with the embedded, non-custodial {{config.extra.arcana.wallet_name}}.
2. **Multi-wallet Apps**: Multi-wallet apps are those that support {{config.extra.arcana.wallet_name}} and third-party browser-based wallets as well. They need to enable gasless transactions in both, the {{config.extra.arcana.wallet_name}} and any third-party browser-based wallet. 
3. **Only Third-party Wallet Apps**: This use case refers to apps that only need to enable gasless transactions for other third-party, browser-based wallets. Such apps do not require any user onboarding functionality or the embedded, non-custodial {{config.extra.arcana.wallet_name}} offered by the {{config.extra.arcana.sdk_name}}.

In every use case above, the developers must first use the  {{config.extra.arcana.dashboard_name}} and register the app, obtain a unique identifier for the app and configure gasless settings. Then they need to install one or more {{config.extra.arcana.sdk_name}} SDKs and integrate with them using the unique app identifier.

<img class="an-screenshots" src="/img/an_auth_usage_overview_light.png#only-light" alt="Auth Usage Overview"/>
<img class="an-screenshots" src="/img/an_auth_usage_overview_dark.png#only-dark" alt="Auth Usage Overview"/>

In this guide, we will cover only the **first two use cases**. The third use case requires {{config.extra.arcana.gasless_sdk_name}} only. For details, see [[gasless-standalone-quick-start|how to enable gasless transactions in apps that use only third-party browser-based wallets]].

## Step 1: Register & Configure App

{% include "./text-snippets/quick-start-reg-config.md" %}

## Step 2: Configure Gasless

Follow the instructions [[configure-gasless|here to configure gasless feature usage]] as per your app requirements. You will be required to set up gas tanks for your app, deposit gas fees and provide smart contract ABI details to whitelist one or more app operations that should happen in a gasless manner.

## Step 3: Install Required SDKs

Make sure the gasless configuration is completed via the {{config.extra.arcana.dashboard_name}} before this step.

To enable gasless operations, you may be required to install one or more {{config.extra.arcana.product_name}} SDKs depending upon the app use case.

1. **Only {{config.extra.arcana.wallet_name}} apps** requires simply installing and integrating with the {{config.extra.arcana.sdk_name}} (plus [[sdk-installation|companion SDKs depending upon the app type, if required]])

2. **Multi-wallet apps**, require the developers to install both the {{config.extra.arcana.gasless_sdk_name}} and the {{config.extra.arcana.sdk_name}} (plus [[sdk-installation|companion SDKs depending upon the app type, if required]]).

=== "Only {{config.extra.arcana.wallet_name}} Apps"

    Apps that are required to enable gasless transactions when using **only** the embedded, non-custodial {{config.extra.arcana.wallet_name}} do not need to integrate with the {{config.extra.arcana.gasless_sdk_name}} as the gasless feature is already built-in the {{config.extra.arcana.sdk_name}}. Simply select your app type and [[index-integrate|follow the instructions here]] for installing and integrating the app with the appropriate {{config.extra.arcana.sdk_name}} (plus [[sdk-installation|companion SDKs depending upon the app type, if required]]).

=== "Multi-wallet Apps"

    Developers of multi-wallet apps that are required to enable gasless transactions in any third-party browser-based wallets in addition to the {{config.extra.arcana.wallet_name}} need to do two things.

    **First,** select the app type and [[index-integrate|follow the instructions here]] for installing and integrating the app with the appropriate {{config.extra.arcana.sdk_name}} (plus [[sdk-installation|companion SDKs depending upon the app type, if required]]). This takes care of enabling gasless transactions in the {{config.extra.arcana.wallet_name}}.

    **Second,** install and integrate the app with the {{config.extra.arcana.gasless_sdk_name}}. This is required to enable gasless transactions in the third-party browser-based wallets supported by the multi-party app. Refer to the code snippets below for details:

    {% include "./code-snippets/gasless_integrate_use.md" %}

Next, add code to onboard users.

## Step 4: Onboard Users

After installing the requisite SDKs as per the use case and the app type, add code to onboard users. Depending upon the use case, developers can choose to use the social login offered by the {{config.extra.arcana.sdk_name}} or add custom code to onboard users in case of apps using only the third-party wallets.

=== "Only {{config.extra.arcana.wallet_name}} Apps"

    Use the social login feature of the {{config.extra.arcana.sdk_name}} to [[index-onboard-users|onboard users]]. Gasless transactions are enabled by default for the {{config.extra.arcana.wallet_name}} once the developer configures gas tanks and whitelists app operations through the {{config.extra.arcana.dashboard_name}}. Authenticated users can instantly access the {{config.extra.arcana.wallet_name}} and sign blockchain transactions with zero gas fees.

=== "Multi-wallet Apps"

    In multi-wallet apps, developers can choose to use the social login feature of the {{config.extra.arcana.sdk_name}} to [[index-onboard-users|onboard users]] or they can build their own user onboarding logic. 

    **Gasless via {{config.extra.arcana.wallet_name}}**
    
    Gasless transactions are enabled by default for the {{config.extra.arcana.wallet_name}} once the developer configures gas tanks and whitelists app operations through the {{config.extra.arcana.dashboard_name}}. Authenticated users can instantly access the {{config.extra.arcana.wallet_name}} and sign blockchain transactions with zero gas fees.

    **Gasless via third-party wallets**

    For third-party wallets, enabling gasless transactions requires adding code to call the `doTx()` method of the  {{config.extra.arcana.gasless_sdk_name}} once the user is authenticated. This will allow third-party wallets to support the gasless transaction. For details, see code snippet below:

    {% include "./code-snippets/gasless_integrate_doTx.md" %}

## Step 5: Deploy App

Finally, [[deploy-app|deploy the app]] on the Testnet/Mainnet to let the users log into the app to use gasless transactions.

**That's all!!!** :material-party-popper:

{==

Your app is now powered by gasless transactions built using the {{config.extra.arcana.company_name}} SDKs.

==}

## Examples

=== "Only {{config.extra.arcana.wallet_name}} Apps"

    See `sample-gasless-arcana-only` submodule in the [Auth Examples](https://github.com/arcana-network/auth-examples) GitHub repo for a sample app that integrates with the {{config.extra.arcana.sdk_name}} to use the authentication and built-in gasless transactions features when using {{config.extra.arcana.wallet_name}}.

=== "Multi-wallet Apps"

     See `sample-gasless-multi-wallet` submodule in the [Auth Examples](https://github.com/arcana-network/auth-examples) GitHub repo for a sample app that uses MetaMask (or any third-party browser-based wallet) as well as the {{config.extra.arcana.wallet_name}} and enables gasless transactions for both types of wallets. This example shows how to use the {{config.extra.arcana.sdk_name}} and the {{config.extra.arcana.gasless_sdk_name}} together.

## See Also

{% include "./text-snippets/quick-start-see-also.md" %}

{% include "./text-snippets/prod_version_info.md" %}
