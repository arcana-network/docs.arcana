---
alias: gasless-architecture
title: 'Arcana Gasless Architecture'
description: 'A high-level overview of how the Arcana Gasless SDK works, key components and their interactions.'
arcana:
  root_rel_path: ..
---

# Architecture: Gasless

{{config.extra.arcana.gasless_sdk_name}} empowers Web3 app developers to facilitate gasless transactions in third-party Web3 wallets like MetaMask. Developers can whitelist app operations and cover gas fees by configuring gas tanks. Users incur no gas fees for whitelisted app operations.

Here is a high-level overview of the technical architecture and components that power the {{config.extra.arcana.gasless_sdk_name}}.

## Gasless Components

* [[concept-arcana-dashboard|{{config.extra.arcana.dashboard_name}}]]
* [[concept-gateway-node|{{config.extra.arcana.company_name}} Gateway]]
* [[concept-gasless-transactions|Gasless SDK]]
* {{config.extra.arcana.company_name}} Gasless protocol

<figure markdown="span">
  ![Component Interactions]({{config.extra.arcana.img_dir}}/an-gasless-components-light.{{config.extra.arcana.img_png}}#only-light){ .an-screenshots-noeffects .an-img-border-small-75pc  }
  ![Component Interactions]({{config.extra.arcana.img_dir}}/an-gasless-components-dark.{{config.extra.arcana.img_png}}#only-dark){ .an-screenshots-noeffects .an-img-border-small-75pc  }
<figcaption>Component Interactions</figcaption>
</figure>

### {{config.extra.arcana.dashboard_name}}

{{config.extra.arcana.dashboard_name}} offers the user interface to Web3 app developers for registering the apps and configuring gasless transactions through the {{config.extra.arcana.wallet_name}} or third-party wallets. 

The gasless settings in the dashboard allow adding gas tanks on one or more supported blockchain networks. Funds can be depositing in the gas tank and app operations whitelisted so that users don't pay any gas fees for those.

### {{config.extra.arcana.company_name}} Gateway

The Gateway is one of the key back-end components that works with the {{config.extra.arcana.dashboard_name}} as well as the SDK integrated with the app. It is responsible for storing and managing SDK usage configuration details for the registered apps and developer accounts, gasless usage metering and SDK usage billing, etc. It also manages free tier usage of the SDK.

It also handles gasless transactions initiated through the third-party wallets for Web3 apps integrated with the {{config.extra.arcana.gasless_sdk_name}}.

### {{config.extra.arcana.gasless_sdk_name}}

The {{config.extra.arcana.gasless_sdk_name}} integrates with Web3 apps to facilitate gasless transactions in third-party wallets. It collaborates with the Gateway component and the third-party gasless providers. Whitelisted app operations are redirected through the Gateway to cover gas fees using configured gas tanks. Users pay no gas fees if the gas tanks are funded and enabled.

### {{config.extra.arcana.company_name}} Gasless protocol

This refers to various entities that execute core system logic and algorithms on blockchains using {{config.extra.arcana.company_name}} smart contracts to handle account abstraction and gasless transactions, processed via the {{config.extra.arcana.wallet_name}} or third-party wallets.

For details, see [[concept-gasless-transactions|how gasless transactions work]].
