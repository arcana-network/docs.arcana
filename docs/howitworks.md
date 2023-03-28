---
slug: /howitworks
id: howitworks
sidebar_custom_props:
  cardIcon: ⚙️
description: High-level overview of how Arcana Auth works.
arcana:
  root_rel_path: .
---

# Architecture

[{{config.extra.arcana.company_name}} Technical White Paper Ref]: https://www.notion.so/Arcana-Technical-Docs-a1d7fd0d2970452586c693e4fee14d08

The {{config.extra.arcana.sdk_name}} integrates with the Web3 apps and allows the developers to quickly build user onboarding and Web3 wallet functionality in their apps. In this guide, we'll explain how it does this by looking at its inner workings of the {{config.extra.arcana.product_name}} product.

## Overview

The {{config.extra.arcana.product_name}} components work on the principles of privacy by design and are built using distributed state-of-the-art cryptographic algorithms. 

The figure below gives a high-level overview of how the developer registers and integrates an app with the {{config.extra.arcana.sdk_name}} to enable user onboarding and signing of blockchain transactions by authenticated users.

![How {{config.extra.arcana.company_name}} Works (Top level)](/img/how-an-works-top-light.svg#only-light)
![How {{config.extra.arcana.company_name}} Works (Top level)](/img/how-an-works-top-dark.svg#only-dark)

## Architectural Components

{{config.extra.arcana.product_name}} offers two key components, the {{config.extra.arcana.dashboard_name}} and the {{config.extra.arcana.sdk_name}}. 

Web3 app developer can use the {{config.extra.arcana.dashboard_name}} to register and configure the {{config.extra.arcana.sdk_name}} usage before integrating it with the app. Once integrated, and deployed, the app users can easily onboard the app using one of the configured authentication providers. Authenticated users can instantly access the embedded, non-custodial {{config.extra.arcana.wallet_name}} to sign blockchain transactions.

![Architectural Components](/img/an-arch-components-light.svg#only-light)
![Architectural Components](/img/an-arch-components-dark.svg#only-dark)

| Component   | Purpose           | Functions                                  |
| :---        | :---              | :---                                       |
| [{{config.extra.arcana.dashboard_name}}]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md)   | Configure the {{config.extra.arcana.sdk_name}} usage  | Register Web3 app with {{config.extra.arcana.company_name}}, configure user onboarding options, configure the {{config.extra.arcana.wallet_name}} user experience    |
| [{{config.extra.arcana.sdk_name}}]({{page.meta.arcana.root_rel_path}}/concepts/authsdk.md)      | Simplify user onboarding and signing blockchain transactions  | Social authentication, passwordless login, standard Ethereum provider interface via the embedded, non-custodial {{config.extra.arcana.wallet_name}} |

You can also check out various [control flows]({{page.meta.arcana.root_rel_path}}/user_flows/index.md) for user authentication and key management functions.

Besides these components, the {{config.extra.arcana.product_name}} has an internal component called [Gateway]({{page.meta.arcana.root_rel_path}}/concepts/gateway_nodes.md) that is utilized for managing application configuration settings and communicating with the [{{config.extra.arcana.company_name}} smart contracts]({{page.meta.arcana.root_rel_path}}/concepts/ansmartc/index.md).

Another internal component that is critical to user onboarding and signing blockchain transactions is the  [Asynchronous DKG]({{page.meta.arcana.root_rel_path}}/concepts/dkg/index.md) module. It is a decentralized component and there are trusted partners that act as DKG validators by owning and running some of the DKG [Validator Nodes]({{page.meta.arcana.root_rel_path}}/concepts/validator_nodes.md) that help in distributed key generation.

The figure below shows how the internal components interact with each other.

![Component Interactions](/img/an-component-interactions-light.svg#only-light)
![Component Interactions](/img/an-component-interactions-dark.svg#only-dark)

For more technical details about the {{config.extra.arcana.product_name}}, see [{{config.extra.arcana.company_name}} Technical White paper][{{config.extra.arcana.company_name}} Technical White Paper Ref].
