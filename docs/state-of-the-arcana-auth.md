---
alias: state-of-the-arcana-auth
title: 'State of the Arcana Auth'
description: 'The current status of the Web3 Auth, Arcana Auth and the blockchain network, Arcana Network roadmap, what is cooking, who are the decentralization partners and more.'
arcana:
  root_rel_path: .
---
  
# State of the {{config.extra.arcana.product_name}}

## Latest Release v{{config.extra.arcana.latest_version}}

* Download the {{config.extra.arcana.sdk_name}} npm packages required as per the Web3 application type: 

    - All app types: [`{{config.extra.arcana.auth_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth) 
    - Add on package for simple React apps: [`{{config.extra.arcana.react_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-react)
    - Add on package for Wagmi/RainbowKit apps: [`{{config.extra.arcana.wagmi_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-wagmi) 
    - Add on package for Web3-React apps: [`{{config.extra.arcana.web3_react_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-web3-react)

* Access the latest {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}

## What's New?

See [[rn-main-auth-v1.0.4|{{config.extra.arcana.product_name}} Release Notes]] for details.

## Mode of Operation

The {{config.extra.arcana.product_name}} protocol is built and operates using the [Proof of Stake](https://ethereum.org/en/developers/docs/consensus-mechanisms/#proof-of-stake) Polygon chain.

### Network Nodes

| Network Metrics                      | Beta    | Mainnet |
| :---                                 | :---    | :---    |
| # Protocol Nodes                     | 7       | 21      |
| # Distributed Key Generator Nodes    | 3       | 7 (4 operated by Arcana, 3 by trusted partners)     |

### Infrastructure Providers

![AWS light](/img/icons/icon_aws_light.png#only-light)
![AWS Dark](/img/icons/icon_aws_dark.png#only-dark)

## Mainnet Roadmap

The {{config.extra.arcana.product_name}} Mainnet was released in January 2023 with the {{config.extra.arcana.sdk_name}} release v1.0.0.

The current {{config.extra.arcana.sdk_name}} release is v{{config.extra.arcana.latest_version}}.

We are actively working towards adding newer features and capabilities. For details, check out the [[arcana-coming-soon| coming soon section]].

### DKG Validator Nodes

The DKG subsystem in the {{config.extra.arcana.product_name}} protocol is envisioned as a truly decentralized subsystem. 

At the launch of Mainnet, there are seven DKG validator nodes, five of these are owned by {{config.extra.arcana.company_name}} and the remaining two  [[concept-validator-nodes|validator nodes]] are owned and managed by trusted partners:

* [Comdex - interchain DeFi infrastructure](https://comdex.one/)
* [Luganodes - institutional-grade blockchain infrastructure providers](https://www.luganodes.com/)

We are actively working with other partners for making sure that the {{config.extra.arcana.company_name}} DKG subsystem is truly decentralized.

### ADKG

We have come a long way since our alpha release that offered a distributed DKG. Several shortcomings regarding trusted dealer, robustness have been resolved in the state-of-the-art asynchronous distributed key generation protocol built into the {{config.extra.arcana.product_name}}. We have collaborated with some of the leading cryptography experts and researchers to fold recent advances in **asynchronous DKG** technology in {{config.extra.arcana.product_name}}. Refer to the [{{config.extra.arcana.company_name}} Technical Whitepaper](https://www.notion.so/Arcana-Technical-Docs-a1d7fd0d2970452586c693e4fee14d08) for more details on ADKG.

## Security

### Key Shares

{{config.extra.arcana.product_name}} components do not store any key shares that belong to the app user. The key shares are used to generate the user's keys only at the client end after user verification. 

### Key Generation

{{config.extra.arcana.product_name}} combines several algorithms to have a highly secure and robust ADKG subsystem. It uses a [robust asynchronous DPSS mechanism](https://eprint.iacr.org/2022/971) to ensure that no single node in the system has access to the user's keys and that the system can handle malicious nodes. We are also working on other enhancements to this ADKG subsystem to enable key share repair, key share refresh, and more. Besides these other enhancements include {{config.extra.arcana.product_name}} multi-factor authentication (MFA), and multi-party computation (MPC) for even stronger security without compromising on ease of use for Web3 users.

### Audit

At Arcana, we take the security and privacy of applications seriously and believe in transparency. To eliminate security vulnerabilities in {{config.extra.arcana.company_name}} Smart Contracts and Arcana's ADKG module, we put it under the rigorous vetting process and cybersecurity tests conducted by [Certik](https://www.certik.com/). The audit is complete and you can refer to the [reports]({{page.meta.arcana.root_rel_path}}/audit/index.md) for details.

## Supported Browsers

{{config.extra.arcana.sdk_name}} can be integrated with any applications that work on one of the supported browsers:

{% include "./text-snippets/supported_browsers.md" %}

## {{config.extra.arcana.sdk_name}}

### User Onboarding Options

The [[concept-authsdk| {{config.extra.arcana.sdk_name}}]] allows Web3 apps to integrate and onboard users via one or more of the supported user authentication mechanisms:

**Social Providers**

{% include "./text-snippets/socialauth_supported.md" %}

**Custom IAM Providers**

{% include "./text-snippets/custom_idm_supported.md" %}

!!! abstract "Coming soon!" 

      We are working on supporting additional authentication providers in the upcoming {{config.extra.arcana.sdk_name}} releases:

      - Telegram
      - LINE
      - Wechat
      - Kakaotalk

!!! tip

    Besides social authentication, a passwordless login option is also available to onboard app users.

### {{config.extra.arcana.wallet_name}}

#### Supported Blockchains

[{{config.extra.arcana.sdk_name}}]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md) is an embedded Web3 wallet offered by the {{config.extra.arcana.sdk_name}} that displays in the context of the application.  Authenticated users can use the wallet to sign blockchain transactions for any  **EVM-compatible blockchain network**. Some of these supported networks are pre-configured in the {{config.extra.arcana.wallet_name}} by default.

{% include "./text-snippets/wallet_supported_networks.md" %}

!!! info "Other Blockchain Networks (Coming soon!)"

      Besides supporting all EVM-compatible blockchain networks, we are working on supporting other chains that are not EVM-compatible in the upcoming releases. For e.g., Cosmos, Solana, Near, TON, and Algorand

## {{config.extra.arcana.dashboard_name}} Login Options

The Web3 app developers can log into the [{{config.extra.arcana.dashboard_name}}]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md) via one of these social providers or use passwordless login:

{% include "./text-snippets/db_supported_oauth.md" %}