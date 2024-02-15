---
alias: index-integrate-app
title: 'Web Apps'
description: 'Integrate Web3 Desktop/Web apps with the Arcana Auth SDK using the instructions listed here.'
arcana:
  root_rel_path: ../..
---

# Web Apps

To integrate with the {{config.extra.arcana.sdk_name}}, Web3 app developers must first use the {{config.extra.arcana.dashboard_name}} to register and configure the app with Arcana Network. 

Next, [select the app type](#select-app-type) and follow the instructions. 

!!! note

      {% include "./text-snippets/warn_latest_sdk_version.md" %}

## Prerequisites

1. Go to the {{config.extra.arcana.dashboard_name}}, [[configure-auth|register your application]] and save the **{{config.extra.arcana.app_address}}** assigned to the registered app. This will be required during integration.
2. Configure the {{config.extra.arcana.sdk_name}} user onboarding settings via the {{config.extra.arcana.dashboard_name}} . See [[index-configure-auth|how to configure authentication providers]] to onboard users.

## Select and Install SDK(s)

Depending upon the type of the Web3 app, developers may need to install one or more of the {{config.extra.arcana.sdk_name}} packages before integrating the SDK with the app. Refer to [[sdk-installation|this table]] and install the appropriate SDK packages.

## Integrate App

After installing the SDK, follow the detailed step-by-step integration instructions, as per the app type:

[[integrate-vanilla-app|Integrate Vanilla JS App :material-language-javascript:]]{ .md-button }

[[index-integrate-react-app|Integrate React App :fontawesome-brands-react: :simple-nextdotjs:]]{ .md-button }

[[integrate-vue-app|Integrate Vue App :material-vuejs:]]{ .md-button }

[[integrate-gasless-app|Gasless App :material-gas-station-off:]]{ .md-button }

[[integrate-solana-app|Solana App :simple-bookstack:]]{ .md-button }

[[integrate-mvx-app|MultiversX App :simple-bookstack:]]{ .md-button }

## Onboard Users

After integration, the Web3 apps can add code to onboard users via the configured authentication providers and passwordless by using built-in plug-and-play auth UI or custom login UI.

[[index-vanilla-onboard-users|Vanilla HTML/CSS/JS Apps :fontawesome-solid-plug:]]{ .md-button }

[[index-react-onboard-users| React Apps :material-card-account-mail:]]{ .md-button }

[[index-vue-onboard-users| Vue Apps :material-card-account-mail:]]{ .md-button }

[[gasless-user-onboarding|Gasless App :material-gas-station-off:]]{ .md-button }

[[solana-user-onboarding|Solana App :simple-bookstack:]]{ .md-button }

[[mvx-user-onboarding|MultiversX App :simple-bookstack:]]{ .md-button }

## Handle Events

[[handle-provider-events|Handle Events :material-bell-cog:]]{ .md-button }

## Wallet Ops

[[index-arcana-wallet|Enable {{config.extra.arcana.wallet_name}} :material-wallet-plus-outline:]]{ .md-button }

[[index-web3-wallet-ops|Enabling Web3 Wallet Ops :material-wallet:]]{ .md-button }

[[custom-wallet-ui| Custom wallet UI :fontawesome-solid-gears:]]{ .md-button }

## What's Next?

After integrating the {{config.extra.arcana.sdk_name}} with the app and enabling the built-in {{config.extra.arcana.wallet_name}} UI or custom wallet UI, developers can [[index-deploy| deploy the app on the Testnet]]. Once validated it can be deployed on the Mainnet for production use.

## See also

* [[web-auth-error-msg|{{config.extra.arcana.sdk_name}} Errors]]
* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]
* {% include "./text-snippets/authsdkref_url.md" %}
