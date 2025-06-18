---
alias: auth-ca-wagmi-quick-start
title: 'Get Started: Auth+CA'
description: 'Get Started quickly with Arcana Account and Chain Abstraction to enable user onboarding and unified balance in Wagmi apps. Learn how to integrate the Arcana Auth and CA Wagmi SDK.'
arcana:
  root_rel_path: ..
  app_type: "Auth-CA-Wagmi"
---

# Get Started: Auth+CA

Follow this guide to onboard users in a Web3 app via social login and enable chain abstracted transactions. It explains how *Web3 apps built using the [Wagmi](https://wagmi.sh/)* library can integrate with the {{config.extra.arcana.company_name}} SDKs for social login and chain abstraction. 

=== "[[concept-authsdk|{{config.extra.arcana.wagmi_sdk_name}}]]"

    * Integrate with the {{config.extra.arcana.wagmi_sdk_name}} to enable user onboarding via [[concept-social-login|social login]] in Web3 apps. 
    
    * Once authenticated, users can instantly access the in-app, built-in [[concept-index-arcana-wallet|{{config.extra.arcana.wallet_name}}]] to sign blockchain transactions.

=== "[[concept-cawagmi|{{config.extra.arcana.ca_wagmi_sdk_name}}]]"

    * Integrate with the {{config.extra.arcana.ca_wagmi_sdk_name}} and let users spend on any chain with unified balance. 
    * The SDK implements Wagmi `useSendTransaction` and `useWriteContract` hooks so that the Web3 apps can seamlessly switch to using these same hooks from the {{config.extra.arcana.ca_wagmi_sdk_name}} for enabling chain abstracted transactions. 
    * It offers additional hooks to enable unified balance: `useBalance`, `useBalanceModal`.
    * The `useCAFn` hook allows chain abstracted `bridge` and `transfer` functionality for [[ca-stack#tokens|tokens]] on [[ca-stack#chains|supported chains]].

## Prerequisites

Before installing and integrating with the {{config.extra.arcana.wagmi_sdk_name}}, developers need to configure the authentication settings.

{% include "./text-snippets/quick-start-reg-config-auth.md" %}

## 1. Install

[Download]({{config.extra.arcana.wagmi_sdk_download_url}}) the {{config.extra.arcana.wagmi_sdk_name}} and install it as a dependency for Web3 app:

{% include "./code-snippets/auth_wagmi_install.md" %}

[Download]({{config.extra.arcana.ca_wagmi_sdk_download_url}}) the {{config.extra.arcana.ca_wagmi_sdk_name}} and install it as a dependency for Web3 app:

{% include "./code-snippets/ca_wagmi_sdk_install.md" %}

## 2. Integrate

The Web3 app must add code to integrate the social login and chain abstraction features offered by the respective {{config.extra.arcana.company_name}} SDKs.

### Social Login

To enable social login, you need to integrate with the {{config.extra.arcana.sdk_name}} and add code to create the `AuthProvider`. Use it to onboard Web3 app users via the configured Arcana Wagmi connector. Once authenticated, the users can automatically access the built-in, in-app {{config.extra.arcana.wallet_name}} and sign blockchain transactions.

#### AuthProvider

{% include "./code-snippets/auth_wagmi_configure_pnp.md" %}

{% include "./code-snippets/auth_wagmi_create_client_pnp.md" %}

#### Onboard Users

{% include "./code-snippets/auth_wagmi_use_app.md" %}

#### Sign Transactions

{% include "./text-snippets/quick-start-sign-transactions.md" %}

{% include "./text-snippets/quick-start-deploy.md" %}

For details, see {% include "./text-snippets/wagmi_authsdkref_url.md" %}.

Next, you need to integrate the Web3 app with the {{config.extra.arcana.ca_wagmi_sdk_name}} to enable chain abstracted transactions via unified balance.

### Chain Abstraction

To enable unified balance and chain abstracted transactions in a Web3 app using the Wagmi library, you need to integrate with the {{config.extra.arcana.ca_wagmi_sdk_name}} and create the `CAProvider`.  Use it to configure the Wagmi connector.

Make sure you import the following functions from the {{config.extra.arcana.ca_wagmi_sdk_pkg_name}} and **not from the wagmi SDK**.

* `useSendTransaction` - Chain abstracted Send Transaction
* `useWriteContract` - Chain abstracted Write Contract

The {{config.extra.arcana.ca_wagmi_sdk_name}} also provides the following additional hooks to enable unified balance and chain abstracted transactions:

* `useBalance` - Unify the specified token balance across chains - USDC, USDT, ETH
* `useBalances` - Unify the token balance across chains - USDC, USDT, ETH for all supported token types
* `useBalanceModal` - Display a plug and play widget containing the unified balance
* `useCAFn` - Allow chain abstracted token bridge and transfer functions
* `useGetMyIntent` - Get a list of intents created for the user

Refer to the following sample integration code and hook usage.

{% include "./text-snippets/quick-start-int-ca-wagmi-sdk.md" %}

For details, see [{{config.extra.arcana.ca_wagmi_sdk_name}} Reference]({{config.extra.arcana.ca_wagmi_sdk_ref_url}}).

{% include "./text-snippets/quick-start-deploy-ca.md" %}

## See Also

{% include "./text-snippets/demo/auth_ca_wagmi_sdk_demo.md" %}

{% include "./text-snippets/auth_wagmi_sdk_quicklinks.md" %}

{% include "./text-snippets/ca_wagmi_sdk_quicklinks.md" %}
