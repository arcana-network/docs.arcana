---
alias: index-wallet-ux
title: 'Arcana Wallet'
description: 'Learn how to manage Arcana Wallet visibility, enable users to use the Wallet UI and perform Web3 blockchain operations or add code to enable JSON/RPC and Web3 wallet operations programmatically in an app integrated with the Auth SDK.'
arcana:
  root_rel_path: ../..
---

# Arcana Wallet

In this guide, you will learn about how to use Web3 operations in apps that are integrated with the Auth SDK.

Web3 operations refers to JSON-RPC calls and the Web3 wallet operations. Web3 wallet operations can be initiated by the authenticated user through the wallet UI such as Arcana wallet UI or programmatically by the developer.

Developers can add code that invokes blockchain functions in response to user actions or app operations only after integrating the app with the Auth SDK and enabling social login to onboard users.

!!! an-caution 

      Web3 operations supported by the EVM-compatible blockchains may not be the same as the ones supported by non-EVM chains such as Solana.

[[index-web3-wallet-ops|:material-wallet:{ .icon-color} EVM: Web3 Wallet Ops]]{ .md-button }
[[index-solana-web3-wallet-ops| :material-wallet:{ .icon-color}  Solana: Web3 Wallet Ops]]{ .md-button }
[[mvx-web3-wallet-ops| :material-wallet:{ .icon-color}  MultiversX: Web3 Wallet Ops]]{ .md-button }
[[near-web3-wallet-ops| :material-wallet:{ .icon-color}  Near: Web3 Wallet Ops]]{ .md-button }
[[unity-web3-wallet-ops| :material-wallet-outline:{ .icon-color} Unity: Web3 Wallet Ops]]{ .md-button }

!!! an-tip "Built-in Gasless Transactions"

      If developers choose to configure the built-in gasless feature, set up gas tanks, and whitelist app operations, then the gas fees for those selected blockchain operations is not charged to the user. The built-in gasless feature works only for the {{config.extra.arcana.wallet_name}}.

      To enable gasless transactions in third-party, browser-based wallets, you need to install and integrate with the {{config.extra.arcana.gasless_sdk_name}}.

[[web3-ops-gasless| :material-wallet:{ .icon-color} Gasless Transactions]]{ .md-button }