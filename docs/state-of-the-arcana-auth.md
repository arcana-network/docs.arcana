---
alias: state-of-the-arcana-auth
title: 'State of the Arcana SDKs'
description: 'The current status of the Web3 Auth, Arcana Auth and the blockchain network, Arcana Network roadmap, what is cooking, who are the decentralization partners and more.'
arcana:
  root_rel_path: .
---
  
# State of the {{config.extra.arcana.company_name}} SDKs

Earlier, we offered various flavors of the {{config.extra.arcana.product_name}} product for web and mobile apps to help scale up user onboarding in Web3 apps.

The {{config.extra.arcana.product_name}} product had built-in gasless feature for the {{config.extra.arcana.wallet_name}}.

Now we also support gasless for third-party browser-based wallets through the standalone {{config.extra.arcana.gasless_sdk_name}}.

* **Web Apps**: {{config.extra.arcana.sdk_name}}
* **Mobile Apps**: {{config.extra.arcana.flutter_sdk_name}}, {{config.extra.arcana.react_native_sdk_name}}
* **Auth-Core (No embedded wallet)**: {{config.extra.arcana.auth_core_sdk_name}}
* **Gasless Apps**: {{config.extra.arcana.gasless_sdk_name}}

## What's New?

### MultiversX Support

MultiversX blockchain uses a state sharding scheme for practical scalability, eliminating energy and computational waste while ensuring distributed fairness through a Secure Proof of Stake (SPoS) consensus.

Apps using [MultiversX](https://multiversx.com/) can now onboard users via social login by integrating with the {{config.extra.arcana.sdk_name}}. Authenticated users can instantly access the embedded, non-custodial {{config.extra.arcana.wallet_name}} and use the pre-configured MultiversX chain in the wallet to sign blockchain transactions, view NFTs owned on the MultiversX chain, and more.

## What's Changed?  

### User Onboarding

There are **no changes** to the {{config.extra.arcana.sdk_name}} and you can continue to use the latest release version: v{{config.extra.arcana.latest_version}}.

See [[rn-main-auth-v{{config.extra.arcana.product_release_tag}}|{{config.extra.arcana.product_name}} Release Notes]] for details.

### Gasless Transactions

Apps that are already integrated with the {{config.extra.arcana.sdk_name}} and [[gasless-quick-start|using the built-in gasless feature]] for enabling gasless transactions using the {{config.extra.arcana.wallet_name}} do not need to make any changes. 

However, if the same apps would **also** like to enable gasless transactions in any third-party, browser-based wallets, then they need to also install and integrate with the {{config.extra.arcana.gasless_sdk_name}}. 

Also, apps that do not wish to use the authentication feature but only wish to enable gasless transactions in third-party wallets must use the {{config.extra.arcana.gasless_sdk_name}}. For details, see [[gasless-standalone-quick-start|{{config.extra.arcana.gasless_sdk_name}} Quick Start Guide]]

## Mainnet Roadmap

The {{config.extra.arcana.product_name}} Mainnet was released in January 2023 with the {{config.extra.arcana.sdk_name}} release v1.0.0.

The current {{config.extra.arcana.sdk_name}} release is v{{config.extra.arcana.latest_version}}.

We are actively working towards adding newer features and capabilities. For details, check out the [[arcana-coming-soon| coming soon section]].

### DKG Validator Nodes

The DKG subsystem in the {{config.extra.arcana.product_name}} protocol is envisioned as a truly decentralized subsystem. 

At the launch of Mainnet, there are seven DKG validator nodes, five of these are owned by {{config.extra.arcana.company_name}} and the remaining two  [[concept-validator-nodes|validator nodes]] are owned and managed by trusted partners:

* [Comdex - interchain DeFi infrastructure](https://comdex.one/)
* [Luganodes - institutional-grade blockchain infrastructure providers](https://www.luganodes.com/)

We are actively working with other partners to make sure that the {{config.extra.arcana.company_name}} DKG subsystem is truly decentralized.

### ADKG

We have come a long way since our alpha release that offered a distributed DKG. Several shortcomings regarding trusted dealer, robustness have been resolved in the state-of-the-art asynchronous distributed key generation protocol built into the {{config.extra.arcana.product_name}}. We have collaborated with some of the leading cryptography experts and researchers to fold recent advances in **asynchronous DKG** technology in {{config.extra.arcana.product_name}}. Refer to the [{{config.extra.arcana.company_name}} Technical Whitepaper](https://www.notion.so/Arcana-Technical-Docs-a1d7fd0d2970452586c693e4fee14d08) for more details on ADKG.

### Mode of Operation

The {{config.extra.arcana.product_name}} protocol is built and operates using the [Proof of Stake](https://ethereum.org/en/developers/docs/consensus-mechanisms/#proof-of-stake) Polygon chain.

#### Network Nodes

| Network Metrics                      | Beta    | Mainnet |
| :---                                 | :---    | :---    |
| # Protocol Nodes                     | 7       | 21      |
| # Distributed Key Generator Nodes    | 3       | 7 (4 operated by Arcana, 3 by trusted partners)     |

#### Infrastructure Providers

![AWS light](/img/icons/icon_aws_light.png#only-light)
![AWS Dark](/img/icons/icon_aws_dark.png#only-dark)

## Security

### Key Share Assembly

{{config.extra.arcana.company_name}} does not store any key shares that belong to the app user. The key shares are created by ADKG subsystem and assigned to the authenticated user. Key shares are used to generate the user's private key only in the context of the Web3 app, at the client end, after user verification. Enhanced wallet security (MFA feature) further secures the key generation process even if the user changes the device used to log in to the Web3 app that is integrated with {{config.extra.arcana.product_name}} product.

### Key Share Generation

{{config.extra.arcana.product_name}} combines several algorithms to have a highly secure and robust ADKG subsystem. It uses a [robust asynchronous DPSS mechanism](https://eprint.iacr.org/2022/971) to ensure that no single node in the system has access to the user's keys and that the system can handle malicious nodes. We are also working on other enhancements to this ADKG subsystem to enable key share repair, key share refresh, and more. Besides these other enhancements include {{config.extra.arcana.product_name}} multi-factor authentication (MFA), and multi-party computation (MPC) for even stronger security without compromising on ease of use for Web3 users.

### Audit

At Arcana, we take the security and privacy of applications seriously and believe in transparency. To eliminate security vulnerabilities in {{config.extra.arcana.company_name}} Smart Contracts and Arcana's ADKG module, we put it under the rigorous vetting process and cybersecurity tests conducted by [Certik](https://www.certik.com/). The audit is complete and you can refer to the [reports]({{page.meta.arcana.root_rel_path}}/audit/index.md) for details.

## Supported Browsers

{{config.extra.arcana.company_name}} SDKs can be integrated with any Web3 Desktop application that works with the following browsers:

{% include "./text-snippets/supported_browsers.md" %}

## Supported Auth Providers

### Dashboard Login

The Web3 app developers can log into the [{{config.extra.arcana.dashboard_name}}]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md) via one of these social providers or use passwordless login:

{% include "./text-snippets/db_supported_oauth.md" %}

### App Login

The [[concept-authsdk| {{config.extra.arcana.sdk_name}}]] allows Web3 apps to integrate and onboard users via one or more of the supported user authentication mechanisms:

#### Social Providers

{% include "./text-snippets/socialauth_supported.md" %}

#### Custom IAM Providers

{% include "./text-snippets/custom_idm_supported.md" %}

!!! abstract "Coming soon!" 

      We are working on supporting additional authentication providers in the upcoming {{config.extra.arcana.sdk_name}} releases:

      - Telegram
      - LINE
      - Wechat
      - Kakaotalk

!!! tip

    Besides social authentication, a passwordless login option is also available to onboard app users.

## Supported Blockchains

### {{config.extra.arcana.sdk_name}}

The embedded {{config.extra.arcana.wallet_name}} available through the {{config.extra.arcana.sdk_name}} **supports all EVM-compatible blockchain networks**.

By default, it enables a *pre-configured list* of chains. App developers can add additional EVM-compatible chains specific to their app and update this pre-configured list. Once the user authenticates for the app, only the chains in the pre-configured list are displayed in the [{{config.extra.arcana.wallet_name}}]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md) UI dropdown. Users can add other EVM-compatible blockchain networks through the wallet UI and switch networks.

{% include "./text-snippets/wallet_supported_networks.md" %}

!!! tip "Updating default pre-configured list"

    To include a new EVM-compatible chain in {{config.extra.arcana.product_name}}'s default pre-configured list, {{config.extra.arcana.company_name}} collaborates strategically with the chain's team/community. While we can add any such chain, our approach aims to increase the {{config.extra.arcana.product_name}} adoption and maximize our reach and engagement within the chain's development community.

!!! info "Non-EVM chain support"

      We are working on supporting other non-EVM chains besides **Solana** in the upcoming releases. For e.g., Cosmos, Near, TON, and Algorand.

#### Gasless Networks

### {{config.extra.arcana.gasless_sdk_name}}

 The {{config.extra.arcana.company_name}} SDKs are powered by Biconomy support the same blockchain networks as Biconomy. See {% include "./text-snippets/biconomy/gasless_supported_networks.md" %} for details. Note that these networks may be a subset of the ones supported by the {{config.extra.arcana.wallet_name}} and the {{config.extra.arcana.sdk_name}}.

## SDK Usage

### Configure

Developers can use the {{config.extra.arcana.dashboard_name}} to register and configure Auth usage: {% include "./text-snippets/db_portal_url.md" %}

### Install

Install and integrate with the appropriate {{config.extra.arcana.sdk_name}} packages as per the Web3 application type:

=== "Web3/Desktop Apps"
    * All app types: [`{{config.extra.arcana.auth_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth) 
    * Add on package for simple React apps: [`{{config.extra.arcana.react_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-react)
    * Add on package for Wagmi/RainbowKit apps: [`{{config.extra.arcana.wagmi_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-wagmi)
    * Add on package for Web3-React apps: [`{{config.extra.arcana.web3_react_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-web3-react)
    * Auth-Core SDK for Web3 apps that need secure access to user's private keys while building custom login, wallet operations UX: [`{{config.extra.arcana.auth_core_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-core)
    * Gasless Transactions with {{config.extra.arcana.wallet_name}}: [`{{config.extra.arcana.auth_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth)
    * Solana Apps: [`{{config.extra.arcana.auth_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth) 

=== "Mobile Apps"
    * Flutter apps: {{config.extra.arcana.flutter_sdk_name}} [`{{config.extra.arcana.mobile_flutter_sdk_pkg_name}}`](https://pub.dev/packages/arcana_auth_flutter)
    * React-Native apps: {{config.extra.arcana.react_native_sdk_name}} [`{{config.extra.arcana.mobile_react_native_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-react-native)

=== "Gasless Apps"
    * Apps that need to enable gasless in third-party wallets such as MetaMask or need a standalone gasless SDK with no social login or {{config.extra.arcana.wallet_name}}: [`{{config.extra.arcana.gasless_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/scw)


###  Integrate & Deploy Apps

Once SDK usage is configured via the dashboard and the appropriate SDKs are installed, developers can easily integrate the app and deploy it on the {{config.extra.arcana.company_name}} Testnet/Mainnet. See [[index-howto-guides|'Get Started']] section for more details.
