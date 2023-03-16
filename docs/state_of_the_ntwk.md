---
sidebar_custom_props:
  cardIcon: ⚒️
arcana:
  root_rel_path: .
---
  
# State of the Arcana Auth

## Latest Release

* Arcana Auth SDK v{% include "./text-snippets/latest_auth_sdk.md" %}
* Arcana Developer Dashboard {% include "./text-snippets/db_portal_url.md" %}

## Mode of Operation

Arcana Network protocol is built and operates using the [Proof of Stake](https://ethereum.org/en/developers/docs/consensus-mechanisms/#proof-of-stake) Polygon chain.

### Network Nodes

| Network Metrics                      | Beta    | Mainnet |
| :---                                 | :---    | :---    |
| # Protocol Nodes                     | 7       | 21      |
| # Distributed Key Generator Nodes    | 3       | 7 (4 operated by Arcana, 3 by trusted partners)     |

### Infrastructure Providers

![AWS light](/img/icons/icon_aws_light.png#only-light)
![AWS Dark](/img/icons/icon_aws_dark.png#only-dark)

## Mainnet Roadmap

The Arcana Mainnet was released in January 2023 with Auth SDK v1.0.0.

The current Auth SDK release is v{% include "./text-snippets/latest_auth_sdk.md" %}.

We are actively working towards adding new features:

* Gasless transactions
* 'Forget'/delete private keys from ADKG subsystem for truly self-custodial keys
* MFA
* Multi-chain including those that are not EVM-compatible
* Support for additional platform SDKs for Mac (Unity, Unreal), and Mobile (React Native, Flutter)
* White-labeling, other customizations

### DKG Validator Nodes

The DKG subsystem in the Arcana Network protocol is envisioned as a truly decentralized subsystem. 

At the launch of Mainnet, there are seven DKG validator nodes, five of these are owned by Arcana and the remaining two  [validator nodes]({{page.meta.arcana.root_rel_path}}/concepts/validator_nodes.md) are owned and managed by trusted partners:

* [Comdex - interchain DeFi infrastructure](https://comdex.one/)
* [Luganodes - institutional-grade blockchain infrastructure providers](https://www.luganodes.com/)

We are actively working with other partners for making the Arcana DKG subsystem truly decentralized.

### ADKG

We have come a long way since our alpha release that offered a distributed DKG. Several shortcomings regarding trusted dealer, robustness have been resolved in the state-of-the-art asynchronous distributed key generation protocol built into the Arcana Network. We have collaborated with some of the leading cryptography experts and researchers to fold recent advances in **asynchronous DKG** technology into the Arcana Network platform. Refer to the [Arcana Technical Whitepaper](https://www.notion.so/Arcana-Technical-Docs-a1d7fd0d2970452586c693e4fee14d08) for more details on ADKG.

## Security

### Key Shares

Arcana Network platform components do not store any key shares that belong to the dApp user.  The key shares are used to generate the user's keys only at the client end after user verification. 

### Key Generation

Arcana combines several algorithms to have a highly secure and robust ADKG subsystem. It uses a [robust asynchronous DPSS mechanism](https://eprint.iacr.org/2022/971) to ensure that no single node in the system has access to the user's keys and that the system can handle malicious nodes. We are also working on other enhancements to this ADKG subsystem to enable key share repair, key share refresh, and more. Besides these other enhancements include Arcana multi-factor authentication (MFA), and multi-party computation (MPC) for even stronger security without compromising on ease of use for Web3 users.

### Audit

At Arcana, we take the security and privacy of applications seriously and believe in transparency. To eliminate security vulnerabilities in Arcana Smart Contracts and Arcana's ADKG module, we put it under the rigorous vetting process and cybersecurity tests conducted by [Certik](https://www.certik.com/). The audit is complete and you can refer to the [reports]({{page.meta.arcana.root_rel_path}}/audit/index.md) for details.

## Supported Browsers

Arcana Auth SDK can be integrated with any applications that work on one of the supported browsers:

{% include "./text-snippets/supported_browsers.md" %}

## Auth SDK

### User Onboarding Options

The [Arcana Auth SDK]({{page.meta.arcana.root_rel_path}}/concepts/authsdk.md) allows dApps to integrate and onboard users via one or more of the supported user authentication mechanisms:

{% include "./text-snippets/auth_supported.md" %}

!!! tip

    Besides social authentication, a passwordless login option is also available to onboard dApp users.

### Arcana Wallet

#### Supported Blockchains

[Arcana wallet]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md) is an embedded Web3 wallet offered by the Auth SDK that shows up in the context of the application.  Authenticated users can use the wallet to sign blockchain transactions for the following EVM-compatible blockchains:

{% include "./text-snippets/wallet_supported_networks.md" %}

## Dashboard Login Options

The Web3 app developers can log into the [Arcana Developer Dashboard]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md) via one of these supported social authentication mechanisms or passwordless login:

{% include "./text-snippets/db_supported_oauth.md" %}