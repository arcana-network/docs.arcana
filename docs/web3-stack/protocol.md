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
* User onboarding, gasless transactions through the {{config.extra.arcana.sdk_name}} v{{config.extra.arcana.latest_version}}
* Gasless Transactions (Third-party wallets) via the {{config.extra.arcana.gasless_sdk_name}} v{{config.extra.arcana.latest_gasless_sdk_version}}\
* Asynchronous Distributed Key Generation that powers the {{config.extra.arcana.sdk_name}} and helps onboard users to Web3

We are actively working towards adding newer features and capabilities. For details, check out the [[arcana-coming-soon| coming soon section]].

## Infrastructure Providers

![AWS light]({{config.extra.arcana.img_dir}}/icons/icon_aws_light.{{config.extra.arcana.img_png}}#only-light)
![AWS Dark]({{config.extra.arcana.img_dir}}/icons/icon_aws_dark.{{config.extra.arcana.img_png}}#only-dark)

## Protocol Audit

At {{config.extra.arcana.company_name}}, we take the security and privacy of applications seriously and believe in transparency. To eliminate any security vulnerabilities in {{config.extra.arcana.company_name}} Smart Contracts and the ADKG module, we put it under the rigorous vetting process and cybersecurity tests conducted by [Certik](https://www.certik.com/). The audit is complete and you can refer to the [reports]({{page.meta.arcana.root_rel_path}}/audit/index.md) for details.

## Network Nodes

| Network Metrics                      | Beta    | Mainnet |
| :---                                 | :---    | :---    |
| # Protocol Nodes                     | 7       | 21      |
| # Distributed Key Generator Nodes    | 3       | 7 (4 operated by {{config.extra.arcana.company_name}}, 3 by trusted partners)     |

## ADKG Subsystem

{{config.extra.arcana.company_name}} has come a long way since the alpha release of SDKs. Those  offered a distributed DKG subsystem to securely generate key shares. It had some shortcomings regarding trusted dealer, robustness of the subsystem, key share generation efficiency and protection from malicious entities, etc. Those have been resolved in the latest state-of-the-art **asynchronous distributed key generation** algorithm that is now part of the {{config.extra.arcana.company_name}}  protocol. 

This new, improved ADKG powers the latest release of the {{config.extra.arcana.company_name}} SDKs. We have collaborated with some of the leading cryptography experts and researchers to fold recent advances in **asynchronous DKG** technology in {{config.extra.arcana.product_name}}. Refer to the [{{config.extra.arcana.company_name}} Technical Whitepaper](https://www.notion.so/Arcana-Technical-Docs-a1d7fd0d2970452586c693e4fee14d08) for more details on ADKG.

## Decentralization

The {{config.extra.arcana.company_name}} ADKG subsystem is implemented using multiple nodes and some of the nodes are operated by trusted {{config.extra.arcana.company_name}} partners or [[web3-stack-validators| validators]]. We are working towards complete decentralization of all aspects of the {{config.extra.arcana.company_name}} protocol in the upcoming releases.


