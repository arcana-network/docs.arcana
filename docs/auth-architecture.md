---
alias: auth-architecture
title: 'Arcana Auth Architecture'
description: 'A high-level overview of how the Arcana Auth works, key components and their interactions.'
arcana:
  root_rel_path: .
---

# Architecture: Auth

[{{config.extra.arcana.company_name}} Technical White Paper Ref]: https://www.notion.so/Arcana-Technical-Docs-a1d7fd0d2970452586c693e4fee14d08

{{config.extra.arcana.sdk_name}} allows Web3 app developers to onboard app users at scale using social and passwordless login. Authenticated users can instantly access the embedded, non-custodial {{config.extra.arcana.wallet_name}} from within the app's context. Developers can whitelist app operations and enable gasless transactions through the {{config.extra.arcana.wallet_name}} or third-party wallets.

Here is a high-level overview of the technical architecture and components that power the {{config.extra.arcana.sdk_name}}.

## Auth Components

* [[concept-arcana-dashboard|{{config.extra.arcana.dashboard_name}}]]
* [[concept-gateway-node|{{config.extra.arcana.company_name}} Gateway]]
* [[concept-authsdk|{{config.extra.arcana.sdk_name}}]]
* [[concept-adkg|Asynchronous Distributed Key Generation (ADKG)]]
* {{config.extra.arcana.company_name}} Auth protocol (Back-end Subsystem)

![Auth Components](/img/an-auth-components-light.png#only-light)
![Auth Components](/img/an-auth-components-dark.png#only-dark)

### {{config.extra.arcana.dashboard_name}}

{{config.extra.arcana.dashboard_name}} is the user interface offered to Web3 app developers for registering an app and configuring the social providers and gasless transaction usage settings as per the app requirements. 

### {{config.extra.arcana.company_name}} Gateway

The Gateway is one of the key back-end components that works with the {{config.extra.arcana.dashboard_name}} as well as the SDK integrated with the app. It is responsible for storing and managing SDK usage configuration details for various apps and manages developer accounts, app usage and billing, etc. 

All transactions initiated by the {{config.extra.arcana.wallet_name}} are processed via the Gateway. It also handles gasless transactions for the {{config.extra.arcana.wallet_name}}.

### {{config.extra.arcana.sdk_name}}

The {{config.extra.arcana.sdk_name}} integrates with the app and enables user onboarding through social providers, passwordless login. It also enables Web3 operations through the embedded {{config.extra.arcana.wallet_name}}. 

### Asynchronous Distributed Key Generation (ADKG)

A core back-end component that generates and manages key shares securely. It works with the SDK integrated with the app to securely dispense key shares. Some of the nodes running ADKG logic are owned by trusted third-party validators. In the future, we plan to make this component fully decentralized.

### {{config.extra.arcana.company_name}} Auth protocol (Back-end Subsystem)

This refers to a bunch of entities in the back-end that implement the core system logic and algorithms on blockchain using [{{config.extra.arcana.company_name}} smart contracts]({{page.meta.arcana.root_rel_path}}/concepts/ansmartc/index.md).

See [{{config.extra.arcana.company_name}} Technical White paper][{{config.extra.arcana.company_name}} Technical White Paper Ref] for details.
