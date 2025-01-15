---
alias: web3-stack-protocol
title: 'Arcana Protocol'
description: 'All about the Arcana Protocol infrastructure, what chain is used to implement it, and more.'
arcana:
  root_rel_path: ..
---
  
# {{config.extra.arcana.company_name}} Protocol

The {{config.extra.arcana.product_name}} protocol is built and operates using the [Proof of Stake](https://ethereum.org/en/developers/docs/consensus-mechanisms/#proof-of-stake) Polygon chain.

It is deployed in the form of two networks: 

* {{config.extra.arcana.company_name}} Testnet
* {{config.extra.arcana.company_name}} Mainnet

## Mainnet Roadmap

The {{config.extra.arcana.product_name}} Mainnet was released in January 2023 with the {{config.extra.arcana.sdk_name}} release v1.0.0.

The following services are active on Testnet as well as the Mainnet

* Configuring {{config.extra.arcana.company_name}} SDK usage with {{config.extra.arcana.dashboard_name}}
* User onboarding via social login
* Asynchronous Distributed Key Generation that powers the {{config.extra.arcana.sdk_name}} and helps onboard users to Web3

We are actively working towards adding newer features and capabilities to the SDKs. Watch out for our upcoming Chain Abstraction solution!

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

{{config.extra.arcana.company_name}} has made great strides since our alpha SDK release. Our new [[concept-adkg|asynchronous distributed key generation (ADKG)]] algorithm is now part of the {{config.extra.arcana.company_name}} protocol, offering improved security and efficiency in key share generation.

Refer to the [{{config.extra.arcana.company_name}} Technical Whitepaper](https://www.notion.so/Arcana-Technical-Docs-a1d7fd0d2970452586c693e4fee14d08) for more details on ADKG.

## Decentralization

The {{config.extra.arcana.company_name}} ADKG subsystem uses multiple nodes, including some operated by trusted {{config.extra.arcana.company_name}} partners called [[web3-stack-validators| validators]]. We plan to fully decentralize the protocol in future releases.


