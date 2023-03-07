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

!!! danger inline end "Already using Auth?"

      {% include "./text-snippets/warn_latest_sdk_version.md" %}

{==

Welcome to the **{{ config.site_name }}**! 

==}

{==

*Let's make user onboarding for Web3 apps a breeze!!!*

==}

{{config.extra.arcana.product_name}} offers a simple _user onboarding framework_ and a _non-custodial wallet_ solution for Web3 applications or dApps. 

It consists of two components: 

* {{config.extra.arcana.sdk_name}}
* {{config.extra.arcana.dashboard_name}}

Designed with both developers and Web3 users in mind, the {{config.extra.arcana.sdk_name}} is easy to integrate and customize, bringing to life a sleek and secure user experience for signing blockchain transactions.

[Get Started :fontawesome-solid-paper-plane:]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_qs.md){ .md-button .md-button--primary}

## {{config.extra.arcana.sdk_name}}

{{config.extra.arcana.sdk_name}} is a client-side library that can be integrated with any Web3 application. It works with any application, whether it is vanilla JS or built using various application frameworks such as _React, NextJS_, _Remix_, _Vue_, or wallet connectors such as _Wagmi_ and _RainbowKit_.

Powered by cutting-edge cryptographic algorithms, the {{config.extra.arcana.sdk_name}} has a built-in _decentralized key generation_ that ensures no single entity owns or manages the user's keys. [Learn more...]({{page.meta.arcana.root_rel_path}}/concepts/authsdk.md)

## {{config.extra.arcana.dashboard_name}}

Developers use the {{config.extra.arcana.dashboard_name}} to configure {{config.extra.arcana.sdk_name}} usage as per their application requirements. [Learn more...]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md)

## Usage

To use the {{config.extra.arcana.sdk_name}}, the developers must first configure user onboarding and wallet usage settings through the dashboard and obtain a unique application identifier called the **{{config.extra.arcana.app_address}}**. 

Next, install the {{config.extra.arcana.sdk_name}} and integrate your app by instantiating the `AuthProvider` and initializing it (for vanilla HTML/JS apps, React apps) or creating an `ArcanaConnector` instance (for Wagmi, RainbowKit apps) with this **{{config.extra.arcana.app_address}}**. See the [tutorials section]({{page.meta.arcana.root_rel_path}}/tutorials/index.md) for details.

## Key Features

<div class="grid card_container" markdown>
  <div class="cards" markdown>
  <div class="card" markdown><h4><b>:fontawesome-solid-users-line: Onboard Users</b></h4><hr><p ><ul><li>Fast user onboarding for Web3 applications.</li><li>Add user authentication with just a few lines of code.</li><li>Configure user onboarding options and allow users to authenticate via popular Web2 social login or go passwordless.</li></ul></p></div>
  <div class="card" markdown><h4><b>:fontawesome-brands-ethereum: Web3 Transactions</b></h4><hr><p><ul><li>Authenticated users can access the Arcana wallet and sign blockchain transactions.</li><li>Developers can customize the Arcana wallet and manage user experience for EVM-compatible networks.</li><li>Users can perform Web3 wallet operations, such as sending and receiving tokens and NFTs, managing NFT collections, deploying contracts, and interacting with them.</li></ul></p></div>
  <div class="card" markdown><h4><b>:simple-letsencrypt: Secure</b></h4><hr><p><ul><li>Authenticated Web3 application users now have an easy yet secure way to sign blockchain transactions.</li><li>Powered by asynchronous distributed key generation protocol and Shamir's Secret Sharing for security and privacy.</li></ul></p></div>
  <div class="card" markdown><h4><b>:material-gesture-tap-button: Easy to Use</b></h4><hr><p><ul><li>Easily integrate with Web3 vanilla JS, React, NextJS, Remix, and Vue applications.</li><li>Offers an embedded, non-custodial wallet that works within the Web3 application.</li><li>Users do not need to set up any browser extensions to use Web3 wallet.<li>Users do not need to remember any seed phrases or manage keys to sign blockchain transactions.</li></ul></p></div>
  </div>
</div>

<!--- 
[Let's begin! ++enter++](./walletsdk/wallet_qs.md){ .md-button .md-button--primary}



Git: {{ git.short_commit}}

--->
