---
slug: /
id: idintro
title: Arcana Auth
sidebar_custom_props:
  cardIcon: 📚
arcana:
  root_rel_path: .
---

# Introduction

Welcome to **{{ config.extra.arcana.product_name }}**! 

{==

*Our mission is to make Web3 apps user onboarding a breeze and enable authenticated users to easily sign blockchain transactions!!!*

==}

Use {{config.extra.arcana.product_name}} to onboard users via Web2 social providers and enable the embedded, non-custodial {{config.extra.arcana.wallet_name}} in Web3 apps. Designed for developers and Web3 users, it is easy to integrate and provides a simple, secure, and customizable user experience for signing blockchain transactions. It is powered by cutting-edge cryptographic algorithms and a built-in _decentralized key generation_ that ensures no single entity owns or manages the user's keys. 

!!! danger "Already using {{config.extra.arcana.product_name}}?"

      {% include "./text-snippets/warn_latest_sdk_version.md" %}
  
 {{config.extra.arcana.product_name}} consists of two components: 

* {{config.extra.arcana.sdk_name}}
* {{config.extra.arcana.dashboard_name}}

## {{config.extra.arcana.sdk_name}}

{{config.extra.arcana.sdk_name}} is a client-side library that can be integrated with any Web3 apps, be it a _vanilla JS app_, apps built using various application frameworks such as _React, NextJS_, _Remix_, _Vue_, apps that use wallet connector frameworks such as _Wagmi_ and _RainbowKit_, or the apps using federated identity managers such as AWS Cognito. 

Once integrated, apps can easily onboard users and allow authenticated users to instantly access the embedded, non-custodial {{config.extra.arcana.wallet_name}} for signing blockchain transactions. [Learn more...]({{page.meta.arcana.root_rel_path}}/concepts/authsdk.md)

## {{config.extra.arcana.dashboard_name}}

Developers must first configure the {{config.extra.arcana.sdk_name}} usage as per the Web3 app requirements by using the {{config.extra.arcana.dashboard_name}}. Once an app is registered and configured, developers can install the {{config.extra.arcana.sdk_name}} and integrate the app. [Learn more...]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md)

## Usage

??? abstract "1. Register & Configure App"

      Use {{config.extra.arcana.dashboard_name}} to register the app, configure the user onboarding settings, and specify the wallet user experience settings. Save the unique app identifier called the **{{config.extra.arcana.app_address}}** assigned to the registered app. This will be required when the app is integrated with the {{config.extra.arcana.sdk_name}}.

??? abstract "2. Install & Integrate App"

      Install the `{{config.extra.arcana.auth_sdk_pkg_name}}` package and integrate the app. For vanilla HTML/CSS/JS apps, create the `AuthProvider` by specifying the unique **{{config.extra.arcana.app_address}}** assigned to the app. Initialize the `AuthProvider` before calling its functions for onboarding users and Web3 wallet operations. Developers can use the `AuthProvider` to obtain the standard Ethereum provider and use it for blockchain transactions. 
      
      In the case of React/NextJS apps, an additional step is required besides installing and integrating with the `{{config.extra.arcana.auth_sdk_pkg_name}}` package. Install the `{{config.extra.arcana.react_sdk_pkg_name}}` package and create the `ProvideAuth` react component. 
      
      For apps using the Wagmi or RainbowKit connectors, simply install the `{{config.extra.arcana.wagmi_sdk_pkg_name}}` package and create the `ArcanaConnector` instance by specifying the **{{config.extra.arcana.app_address}}**. When using the `{{config.extra.arcana.wagmi_sdk_pkg_name}}` package, it is not required to install the `{{config.extra.arcana.auth_sdk_pkg_name}}` package.
        
      See the [how to guides]({{page.meta.arcana.root_rel_path}}/howto/index.md) and [tutorials]({{page.meta.arcana.root_rel_path}}/tutorials/index.md) for details.

[Get Started :fontawesome-solid-paper-plane:]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_qs.md){ .md-button .md-button--primary}

## Key Features

<div class="grid card_container" markdown>
  <div class="cards" markdown>
  <div class="card" markdown><h4><b>:fontawesome-solid-users-line: Onboard Users</b></h4><hr><p ><ul><li>Fast user onboarding for Web3 applications.</li><li>Add user authentication with just a few lines of code.</li><li>Configure user onboarding options and allow users to authenticate via popular Web2 social providers, federated identity providers or go passwordless.</li></ul></p></div>
  <div class="card" markdown><h4><b>:fontawesome-brands-ethereum: Web3 Wallet Transactions</b></h4><hr><p><ul><li>Authenticated users can access the {{config.extra.arcana.wallet_name}}  and sign blockchain transactions.</li><li>Developers can customize the {{config.extra.arcana.wallet_name}}  and manage user experience for the <a href="{{page.meta.arcana.root_rel_path}}/state_of_the_ntwk.html#supported-blockchains">supported blockchain networks</a>.</li><li>Users can perform Web3 wallet operations, such as sending and receiving tokens and NFTs, managing NFT collections, deploying contracts, and interacting with them.</li></ul></p></div>
  <div class="card" markdown><h4><b>:simple-letsencrypt: Secure</b></h4><hr><p><ul><li>Authenticated Web3 application users now have an easy yet secure way to sign blockchain transactions.</li><li>Powered by asynchronous distributed key generation protocol and Shamir's Secret Sharing for security and privacy.</li></ul></p></div>
  <div class="card" markdown><h4><b>:material-gesture-tap-button: Easy to Use</b></h4><hr><p><ul><li>Easily integrate with Web3 vanilla JS, React, NextJS, Vue, Wagmi and RainbowKit apps.</li><li>Offers an embedded, non-custodial wallet that works within the Web3 apps context.</li><li>Users do not need to set up any browser extensions to use the {{config.extra.arcana.wallet_name}}.<li>Users do not need to remember any seed phrases or manage keys to sign blockchain transactions.</li></ul></p></div>
  </div>
</div>

<!--- 
[Let's begin! ++enter++](./walletsdk/wallet_qs.md){ .md-button .md-button--primary}



Git: {{ git.short_commit}}

--->
