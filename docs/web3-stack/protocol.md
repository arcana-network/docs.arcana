---
alias: web3-stack-protocol
title: 'Arcana Protocol'
description: 'All about the Arcana Protocol infrastructure, what chain is used to implement it, and more.'
arcana:
  root_rel_path: ..
---
  
# {{config.extra.arcana.company_name}} Protocol

The {{config.extra.arcana.ca_sdk_name}} components of the {{config.extra.arcana.company_name}} protocol that support unified balance feature are built using the Cosmos chain.

Other components of the protocol that enable social login via the {{config.extra.arcana.sdk_name}} are built using the [Proof of Stake](https://ethereum.org/en/developers/docs/consensus-mechanisms/#proof-of-stake) Polygon chain.

The {{config.extra.arcana.company_name}} blockchain protocol is offered through Testnet and Mainnet.

## Mainnet Roadmap

## Chain Abstraction

The {{config.extra.arcana.company_name}} unified balance feature is available through the {{config.extra.arcana.ca_sdk_name}} v0.0.3 released in January 2025 on the Testnet. A limited set of [[ca-stack|chains and tokens]] are supported for chain abstraction as of this release.

Chain Abstraction is available on Arcana Testnet. We are actively working towards enabling this feature on the Arcana Mainnet.

## Social Login

The {{config.extra.arcana.company_name}} social login feature is available through the {{config.extra.arcana.sdk_name}} v1.0.0, released in January 2023 on the Mainnet.

The following Auth services are active on Testnet as well as the Mainnet:

* Configuring {{config.extra.arcana.sdk_name}} usage with {{config.extra.arcana.dashboard_name}}
* User onboarding via social login
* Asynchronous Distributed Key Generation that powers the {{config.extra.arcana.sdk_name}} and helps onboard users to Web3

We are actively working on adding newer features and capabilities to the {{config.extra.arcana.sdk_name}}, stay tuned.

## Infrastructure Providers

![AWS light]({{config.extra.arcana.img_dir}}/icons/icon_aws_light.{{config.extra.arcana.img_png}}#only-light)
![AWS Dark]({{config.extra.arcana.img_dir}}/icons/icon_aws_dark.{{config.extra.arcana.img_png}}#only-dark)

## Protocol Audit

At {{config.extra.arcana.company_name}}, we take the security and privacy of applications seriously and believe in transparency. To eliminate any security vulnerabilities in {{config.extra.arcana.company_name}} Smart Contracts and the ADKG module, we put it under the rigorous vetting process and cybersecurity tests conducted by [Certik](https://www.certik.com/). The audit is complete and you can refer to the {% include "./text-snippets/audit_report_url.md" %} for details.

## Network Nodes

| Network Metrics                      | Beta    | Mainnet |
| :---                                 | :---    | :---    |
| # Protocol Nodes                     | 7       | 21      |
| # Distributed Key Generator Nodes    | 3       | 7 (4 operated by {{config.extra.arcana.company_name}}, 3 by trusted partners)     |

## ADKG Subsystem

{{config.extra.arcana.sdk_name}} has evolved since its alpha release. The new [[concept-adkg|asynchronous distributed key generation (ADKG)]] algorithm is now part of the {{config.extra.arcana.company_name}} protocol, offering improved security and efficiency in key share generation.

Refer to the [{{config.extra.arcana.company_name}} Technical Whitepaper](https://www.notion.so/Arcana-Technical-Docs-a1d7fd0d2970452586c693e4fee14d08) for more details on ADKG.

## Decentralization

The {{config.extra.arcana.company_name}} ADKG subsystem uses multiple nodes, including some operated by trusted {{config.extra.arcana.company_name}} partners called [[web3-stack-validators| validators]]. We plan to fully decentralize the protocol in future releases.


