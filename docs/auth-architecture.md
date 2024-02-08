---
alias: auth-architecture
title: 'Arcana Auth Architecture'
description: 'A high-level overview of how the Arcana Auth works, key components and their interactions.'
arcana:
  root_rel_path: .
---

# Architecture: Auth

[{{config.extra.arcana.company_name}} Technical White Paper Ref]: https://www.notion.so/Arcana-Technical-Docs-a1d7fd0d2970452586c693e4fee14d08

Web3 apps can integrate with {{config.extra.arcana.sdk_name}} to enable user onboarding via social login, passwordless and gasless transactions via the embedded, non-custodial {{config.extra.arcana.wallet_name}}.

Besides the {{config.extra.arcana.sdk_name}}, there are several components in the {{config.extra.arcana.company_name}} Auth ecosystem that play a key role to ensure security and privacy of user's Web3 keys for a seamless blockchain signing experience.

This guide gives a quick look at these parts, how they work together with each other, and the {{config.extra.arcana.sdk_name}}. Some of these are part of the backend subsystem while others are accessible only to the app developers. Users only interact with the app that is integrated with the {{config.extra.arcana.sdk_name}}.

## Auth Ecosystem Components

* **[[concept-arcana-dashboard|{{config.extra.arcana.dashboard_name}}]]**: Developer Interface to register apps and configure SDK usage settings.
* **[[concept-gateway-node|{{config.extra.arcana.company_name}} Gateway]]**: Backend component that interacts with the Dashboard and the SDK integrated with the app.
* **[[concept-authsdk|{{config.extra.arcana.sdk_name}}]]**: Handles user onboarding through social providers, passwordless login option, built-in {{config.extra.arcana.wallet_name}} Web3 operations, wallet look and feel customization, built-in gasless transactions.
* **[[concept-adkg|Asynchronous Distributed Key Generation (ADKG)]]**: Backend component that generates and manages key shares securely.
* **{{config.extra.arcana.company_name}} Auth protocol (Backend Subsystem)**: The core system logic and algorithms implemented on blockchains using [{{config.extra.arcana.company_name}} smart contracts]({{page.meta.arcana.root_rel_path}}/concepts/ansmartc/index.md)

![Component Interactions](/img/an-component-interactions-light.png#only-light)
![Component Interactions](/img/an-component-interactions-dark.png#only-dark)

## Component Interactions

The following flows cover all the key component interactions during user onboarding and signing of blockchain transactions with the {{config.extra.arcana.company_name}}:

1. Developer <-> Dashboard <-> Gateway
2. Developer <-> App/SDK
3. Gateway <-> Backend Subsystem / Third-party Gasless providers
4. User <-> App/SDK <-> ADKG/Gateway

### Developer <-> Dashboard <-> Gateway

Developer uses the {{config.extra.arcana.dashboard_name}} to register the app. A unique app identifier (client Id) is assigned to each registered app. It is used for integrating the app with the SDK. 

After registering, the developer configures the SDK usage through the dashboard: 

* Set up social providers for user onboarding 
* Specify wallet settings for managing the user experience while signing blockchain transactions, etc.
* Configure and fund gas tanks for one or more networks for gasless transactions, whitelist app operations for gasless 

![Register & Configure](/img/arch_int_reg_config_dark.png#only-dark){ width="50%"}
![Register & Configure](/img/arch_int_reg_config_light.png#only-light){ width="50%"}

Developer interaction with the dashboard results in the {{config.extra.arcana.company_name}} Gateway for storing and accessing SDK usage configuration specifics for various apps. Besides configuration settings, the dashbaord interacts with the gateway for managing developer accounts, app usage and billing etc.

![Dashboard - Gateway](/img/arch_int_db_gway_dark.png#only-dark){ width="50%"}
![Dashboard - Gateway](/img/arch_int_db_gway_light.png#only-light){ width="50%"}

### Developer <-> App/SDK 

After registering and configuring the app through the {{config.extra.arcana.dashboard_name}}, developers interact with the app and the SDK by performing the following actions:

* Install the {{config.extra.arcana.sdk_name}} 
* Use the unique client Id to integrate the app with the SDK
* Add code to:
    - initialize the SDK
    - onboard users
    - enable Web3 wallet operations
* Deploy the app on {{config.extra.arcana.company_name}} Testnet/Mainnet. 

![Dev - SDK](/img/arch_int_dev_sdk_dark.png#only-dark){ width="25%"}
![Dev - SDK](/img/arch_int_dev_sdk_light.png#only-light){ width="25%"}

### Gateway <-> Backend

Gateway interacts with other backend components that implement the {{config.extra.arcana.company_name}} protocol for user authentication and gasless transactions.

![Gateway - Backend](/img/arch_int_gway_bend_dark.png#only-dark){ width="50%"}
![Gateway - Backend](/img/arch_int_gway_bend_light.png#only-light){ width="50%"}

### User <-> App/SDK <-> ADKG/Gateway

Users begins interaction with the deployed app by logging in via one of the configured social login options. An authenticated user can instantly access the embedded {{config.extra.arcana.wallet_name}} within the app context and view account balance or perform Web3 wallet operations through the UI. 

Most of the interaction between the app and the SDK happens when a user logs in, logs off or an authenticated user performs a blockchain transaction through the app integrated with the {{config.extra.arcana.sdk_name}}. 

The SDK integrated with the app interacts with the ADKG subsystem. ADKG assigns key shares to the authenticated user post successful login. User keys are assembled using these key shares **only within the app context** of the authenticated user, in a secure manner with full privacy and ownership.

All blockchain operations issued using the {{config.extra.arcana.sdk_name}} are routed via the gateway. If the built-in gasless feature is configured by the app developer, then the whitelisted transactions are issued in a gasless manner whereby user pays zero gas fees.

![User App ](/img/an_arch_user_app_dark.png#only-dark)
![User App](/img/an_arch_user_app_light.png#only-light)

<!--

![How {{config.extra.arcana.company_name}} Works (Top level)](/img/how-an-works-top-light.svg#only-light)
![How {{config.extra.arcana.company_name}} Works (Top level)](/img/how-an-works-top-dark.svg#only-dark)

![Architectural Components](/img/an-arch-components-light.svg#only-light)
![Architectural Components](/img/an-arch-components-dark.svg#only-dark)

--->

## See Also

* [[index-user-flows|Control flows]] for user authentication and key management functions.
* [[use-cases| Use cases]]
* [{{config.extra.arcana.company_name}} Technical White paper][{{config.extra.arcana.company_name}} Technical White Paper Ref]

