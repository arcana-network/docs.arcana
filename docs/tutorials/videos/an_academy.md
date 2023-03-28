---
slug: /anacademy
id: idanacademy
title: Get Started
sidebar_custom_props:
  cardIcon: 🎓
arcana:
  root_rel_path: ../..
---

# Get Started

Everything you need to get started with the {{config.extra.arcana.product_name}} product is lined up here!

## {{config.extra.arcana.company_name}} (60 seconds)

{% include "./text-snippets/tut_getstarted_arcana_url.md" %}

---

## {{config.extra.arcana.company_name}} Overview (6 Minutes)

{% include "./text-snippets/tut_mission_url.md" %}

---

## {{config.extra.arcana.sdk_name}} Usage

Apps can integrate with the {{config.extra.arcana.sdk_name}} to enable:

* **User authentication:** Onboarding new users via the familiar Web2 authentication providers, passwordless login options

* **Signing blockchain transactions:** Securely signing blockchain transactions using standard EIP-1193 Ethereum provider, perform other Web3 wallet operations such as send blockchain transactions, sending and receiving native and custom tokens, adding/switching blockchain networks, and [more]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md).

## Dashboard

Developers can use the {{config.extra.arcana.dashboard_name}} to [register and configure app]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md). Registering the app with {{config.extra.arcana.company_name}} associates a unique {{config.extra.arcana.app_address}} that is needed for integrating the app with the {{config.extra.arcana.sdk_name}}.

{% include "./text-snippets/tut_comingsoontut_url.md" %}

---

### Integrating App

Web3 developers can [integrate app with the {{config.extra.arcana.sdk_name}}]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) only after the following pre-requisites are met:

* The app is registered using the {{config.extra.arcana.dashboard_name}} and is assigned a unique {{config.extra.arcana.app_address}}.
* Developer has configured the user onboarding options via the {{config.extra.arcana.dashboard_name}}. 

Check out this video to see how to integrate a Web3 app with the {{config.extra.arcana.sdk_name}}.

{% include "./text-snippets/tut_comingsoontut_url.md" %}

### Onboard Users

After integrating the app with the {{config.extra.arcana.sdk_name}}, add code to onboard users via the configured authentication mechanisms.

Check out this video to see the {{config.extra.arcana.wallet_name}} in action when a user logs into an app that is integrated with the {{config.extra.arcana.sdk_name}}. It shows how an app user can quickly authenticate using Google and access the {{config.extra.arcana.wallet_name}} to sign blockchain transactions. 

{% include "./text-snippets/tut_comingsoontut_url.md" %}

### Sign Blockchain Transactions

The {{config.extra.arcana.sdk_name}} enables the embedded, non-custodial {{config.extra.arcana.wallet_name}} for every authenticate user to sign blockchain transactions on any [supported networks]({{page.meta.arcana.root_rel_path}}/state_of_the_ntwk.md#supported-blockchains). [Learn more]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md) about the  {{config.extra.arcana.wallet_name}} features.

The app developers can [configure {{config.extra.arcana.wallet_name}} visibility mode]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/config_walletvisibility.md) to manage the user's blockchain signing experience. [Learn more]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/walletuimodes.md) about wallet visibility and other configurations.

Check out this video to see the  {{config.extra.arcana.wallet_name}} in action for signing blockchain transactions, checking wallet balances, switching blockchain networks, and more.

{% include "./text-snippets/tut_comingsoontut_url.md" %}

!!! tip

      See [ {{config.extra.arcana.sdk_name}} Use cases]({{page.meta.arcana.root_rel_path}}/use_cases.md).

---

## Questions?

*Can't find what you are looking for?*

Reach out to us at: {% include "./text-snippets/support_email_link.md" %}
