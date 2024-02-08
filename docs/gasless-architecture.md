---
alias: gasless-architecture
title: 'Arcana Gasless Architecture'
description: 'A high-level overview of how the Arcana Gasless SDK works, key components and their interactions.'
arcana:
  root_rel_path: .
---

# Architecture: Gasless

[{{config.extra.arcana.company_name}} Technical White Paper Ref]: https://www.notion.so/Arcana-Technical-Docs-a1d7fd0d2970452586c693e4fee14d08

Web3 apps can integrate with {{config.extra.arcana.gasless_sdk_name}} to enable gasless transactions in third-party Web3 wallets such as MetaMask.

Besides the {{config.extra.arcana.gasless_sdk_name}}, there are other components in the {{config.extra.arcana.company_name}} Gasless ecosystem that play a key role to ensure:

* developers can easily and securely configure gas tanks for selected blockchain networks and deposit funds in the gas tank, or withdraw funds securely
* users can have a seamless blockchain signing experience while paying zero gas fees.

This guide gives a quick look at these parts, how they work together with each other, and the {{config.extra.arcana.gasless_sdk_name}}. Some of these are part of the backend subsystem while others are accessible only to the app developers. Users only interact with the app that is integrated with the {{config.extra.arcana.gasless_sdk_name}}.

## Gasless Ecosystem Components

* **[[concept-arcana-dashboard|{{config.extra.arcana.dashboard_name}}]]**: Developer Interface to register apps and configure SDK usage settings.
* **[[concept-gateway-node|{{config.extra.arcana.company_name}} Gateway]]**: Backend component that interacts with the Dashboard and the SDK integrated with the app.
* **[[concept-gasless-transactions|Gasless SDK]]**: Handles gasless transactions and integrates with third-party gasless providers such as Biconomy.
* **{{config.extra.arcana.company_name}} Auth protocol**: The core system logic and algorithms implemented on blockchains using [{{config.extra.arcana.company_name}} smart contracts]({{page.meta.arcana.root_rel_path}}/concepts/ansmartc/index.md)

![Component Interactions](/img/an-gl-component-interactions-light.png#only-light)
![Component Interactions](/img/an-gl-component-interactions-dark.png#only-dark)

## Component Interactions

The following flows cover the key component interactions during signing of gasless transactions with the third-party Web3 wallets:

1. Developer <-> Dashboard <-> Gateway
2. Developer <-> App/SDK
3. Gateway <-> Backend Subsystem / Third-party Gasless providers
4. User <-> App/SDK <-> ADKG/Gateway

### Developer <-> Dashboard <-> Gateway

Developer uses the {{config.extra.arcana.dashboard_name}} to register the app. A unique app identifier (client Id) is assigned to each registered app. It is used for integrating the app with the SDK. 

After registering, the developer configures the SDK usage through the dashboard: 

* Set up gas tanks, whitelists app operations to enable sponsoring the gas fees for selected app operations
* Configure and fund gas tanks for one or more networks for gasless transactions, whitelist app operations for gasless 

![Register & Configure](/img/arch_int_reg_config_dark.png#only-dark){ width="50%"} 
![Register & Configure](/img/arch_int_reg_config_light.png#only-light){ width="50%"}

Developer interaction with the dashboard results in further interactions between the dashboard and the {{config.extra.arcana.company_name}} gateway. Dashboard and the gateway interact for storing, updating and accessing SDK usage configuration setting values for the registered apps. Besides configuration settings, the gateway enables the dashboard in managing developer accounts, app usage and billing etc.

![Dashboard - Gateway](/img/arch_gl_int_db_gway_dark.png#only-dark){ width="50%"} 
![Dashboard - Gateway](/img/arch_gl_int_db_gway_light.png#only-light){ width="50%"}

### Developer <-> SDK

After registering and configuring the app through the {{config.extra.arcana.dashboard_name}}, developers interact with the app and the SDK by performing the following actions:

* Install the {{config.extra.arcana.gasless_sdk_name}} 
* Use the unique client Id to integrate the app with the SDK
* Add code to:
    - initialize the SDK
    - integrate third-party Web3 wallet operations
    - perform gasless transactions by using `doTx()` method of the SDK
* Deploy the app on {{config.extra.arcana.company_name}} Testnet/Mainnet. 

![Dev - SDK](/img/arch_int_gl_dev_sdk_dark.png#only-dark){ width="25%"}
![Dev - SDK](/img/arch_int_gl_dev_sdk_light.png#only-light){ width="25%"}

### Gateway <-> Backend

Gateway interacts with other backend components that implement the {{config.extra.arcana.company_name}} protocol for setting up, funding and managing gas tanks on various blockchain networks to enable gasless transactions for app users. It manages the integration with third-party gasless SDKs such as Biconomy.

![Gateway - Backend](/img/arch_int_gway_bend_dark.png#only-dark){ width="50%"}
![Gateway - Backend](/img/arch_int_gway_bend_light.png#only-light){ width="50%"}

### User <-> App/SDK <-> Gateway/Third-party Gasless Provider

Users begins interaction with the deployed app by logging in and using a third-party, browser based wallet such as MetaMask. Most of the interaction between the app and the SDK happens when an authenticated user performs a blockchain transaction using a third-party Web3 wallet.

Each blockchain operations issued in the app integrated with the {{config.extra.arcana.gasless_sdk_name}} is routed through the gateway. Gateway is integrated with one or more third-party gasless providers for supporting gasless transactions. 

User incurs zero gas fees for any whitelisted gasless operations. App operations that are not whitelisted will incur a gas charge on the user's SCW wallet account.

![User App ](/img/an_arch_gl_user_app_dark.png#only-dark){ width="50%"} 
![User App](/img/an_arch_gl_user_app_light.png#only-light){ width="50%"}

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
