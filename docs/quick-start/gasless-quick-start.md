---
alias: gasless-quick-start
title: 'Get Started: Gasless Apps'
description: 'Integrate Arcana Auth in web apps. Sponsor gas fees for whitelisted app operations. Onboard users via social login. Provide instant access to the in-app Arcana wallet and sign transactions with zero gas fees.'
arcana:
  root_rel_path: ..
  app_type: "'Gasless'"
  custom_login_ui_tag: "gasless-user-onboarding#onboard-users"
  app_example_submodule: "`sample-gasless-arcana-only`"
---

# Get Started: Gasless Apps

Integrate Web3 apps with {{config.extra.arcana.sdk_name}} and onboard users via [[concept-social-login|social login]]. Enable users to sign blockchain transactions with the in-app [[concept-index-arcana-wallet|{{config.extra.arcana.wallet_name}}]]. Enable gasless transactions by setting up gas tanks and sponsoring gas fees for users.

!!! an-tip "Third-party wallets"

      Allow gasless transactions in third-party wallets by integrating Web3 apps with the {{config.extra.arcana.gasless_sdk_name}}. [[gasless-standalone-quick-start|Learn more...]]

## Prerequisites

{% include "./text-snippets/quick-start-reg-gasless.md" %}

## 1. Configure Gasless

[[configure-gasless|Configure gasless settings]] before integrating the app. Set up gas tanks for the required chains, deposit gas fees, and provide smart contract ABI details to whitelist one or more app operations. When a user triggers a whitelisted app operation, zero gas fees are charged.

## 2. Install SDK

{% include "./code-snippets/auth_install.md" %}

## 3. Integrate

Here is how a simple HTML/CSS/JS app integrates with the {{config.extra.arcana.wallet_name}}. 

{% include "./text-snippets/quick-start-int-auth-evm.md" %}

Depending upon your app type, the integration instructions may vary. [[integrate-gasless-app|Learn more...]]

### Onboard Users
 
Here is how a simple HTML/CSS/JS app can onboard the user via social login. 

{% include "./text-snippets/quick-start-auth-onboard.md" %}

Depending upon your app type, the user onboarding instructions may vary. [[gasless-user-onboarding#onboard-users|Learn more...]]

### Sign Transactions

There are no special functions or additional input parameters in Web3 wallet operations for enabling gasless transactions via the {{config.extra.arcana.wallet_name}}. The SDK automatically checks the gasless configuration settings. Only the whitelisted app operations issued via the user's SCW account incur zero gas fees for the user.

Use `AuthProvider` for issuing supported JSON/RPC functions and Web3 wallet operations. The list of supported functions may differ for EVM chains and non-EVM chains. [[evm-web3-wallet-ops|Learn more...]]

{% include "./text-snippets/quick-start-deploy.md" %}

## 4. Advanced Usage

{% include "./text-snippets/quick-start-authprovider-optional.md" %}

{% include "./text-snippets/adv_wallet_customization.md" %}

{% include "./text-snippets/quick-start-auth-onboard-custom-login.md" %}

{% include "./text-snippets/adv_pnp_compact_ui.md" %}

{% include "./text-snippets/jwt_token.md" %}

## See Also

{% include "./text-snippets/quick-start-common-examples.md" %}

{% include "./text-snippets/auth_sdk_quicklinks.md" %}

{% include "./text-snippets/demo/auth_sdk_demo.md" %}