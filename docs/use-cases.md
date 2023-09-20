---
alias: use-cases
title: 'Arcana Auth Use Cases'
description: 'What problems does Arcana Auth solve? What can Web3 app developers gain by integrating apps with the Auth SDK?'
arcana:
  root_rel_path: .
---

#  Arcana Auth Use Cases

The {{config.extra.arcana.sdk_name}} allows developers to supercharge their Web3 apps with plug-and-play user authentication. Also, authenticated app users can instantly access the embedded, non-custodial {{config.extra.arcana.wallet_name}} to securely sign blockchain transactions, without having to install any browser extension or manage keys.

Web3 developers can integrate apps with the {{config.extra.arcana.sdk_name}} to address the following use cases:

* User authentication
* Enable authenticated users to sign blockchain transactions easily
* Monitor app usage

## User Authentication

* **Plug-and-Play Auth**: Onboard users with a single line of code via `connect` method and enable popular Web2 social providers or passwordless login.

* **Build-your-own-Auth-UI**: Create your own login UX and simply use `loginWithSocial` and `loginWithLink` methods to enable popular Web2 social providers or passwordless login to onboard users.

* **Customize Onboarding**: Choose which providers/login options are visible to the user at the time of logging into the Web3 application.

## Sign Blockchain Transactions

* **Easily Accessible & Secure Wallet**: Enable *authenticated app users* to sign blockchain transactions without having to learn the Web3 nuances or expose them to tedious key management hoops. At the same time, provide a secure wallet that is fast to plug in and easy to use.

* **Customize Wallet Usage Experience**: Control the {{config.extra.arcana.wallet_name}} visibility by choosing whether it should be always visible in the context of a Web3 application or whether it shows up only when a blockchain transaction is triggered.

* **Wallet Branding**: Allows Web3 application developers to customize the {{config.extra.arcana.wallet_name}} theme.

* **No Browser Extension Deployment**: {{config.extra.arcana.sdk_name}} allows easy and very simple wallet onboarding for users with no need for installing any browser extension or generating keys.

* **Web3 Wallet Operations**: Enable typical wallet functions in the application for authenticated users:
    - Sign blockchain transactions
    - Send Transaction
    - Send/Receive native, custom tokens
    - Send/Receive NFTs
    - Browse NFTs, view NFT details
    - Add [[state-of-the-arcana-auth#supported-blockchains|supported networks]]
    - Switch networks
    - Monitor transaction activity
    - JSON-RPC method support
    - Buy crypto via fiat/on-ramp providers

## Monitor App Usage

* **Easily Register Apps**: Developers can easily register and configure the {{config.extra.arcana.sdk_name}} usage and wallet user experience by using the {{config.extra.arcana.dashboard_name}} as per their app requirements.

* **Monitor App Usage**: Developers can easily manage and monitor application usage in terms of **Monthly Active Users (MAU)**. They can also configure how apps are deployed on the Arcana Testnet and Mainnet. Billing is done only for Arcana Mainnet usage. Usage across all apps deployed on Mainnet can be tracked by the developers.

## Secure with MFA

Gaming, DeFi and other Web3 apps that deal with user's crypto assets, NFTs can further secure user data by utilizing the [[concept-mfa|MFA feature]]. A user can set up various recovery methods for their wallet to enhance security. Whenever they try to login from a new device they will have to provide one of the two in order to login. The {{config.extra.arcana.sdk_name}} works across devices and browsers.

<!-- AR-6971 
## Enable Gasless Transactions

With the [[concept-gasless-transactions|gasless transactions]] feature, Web3 apps can improve adoption by  exempting them from paying gas fees for blockchain transactions. Developers can set up gas tanks that are equipped with requisite crypto assets to pay gas fees for a specific blockchain network. Sponsors bear the gas fees while users only pay for whatever transaction they carry out such as transferring ERC20 tokens to another user. Users can have a Web2-like app onboarding experience and not pay the gas fees.
-->
## Upcoming Features

* Non-EVM Chain Support
* Wallet UI enhancements such as speeding up pending transactions, improved wallet design, etc.
