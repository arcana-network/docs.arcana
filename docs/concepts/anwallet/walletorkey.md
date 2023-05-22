---
alias: concept-wallet-or-key
title: 'Using Web3 wallet vs. Key'
description: 'Learn more about using a Web3 wallet for securely signing blockchain transactions. Users familiar with cryptographic keys can use them.'
arcana:
  root_rel_path: ../..
---

# Using Web3 Wallet vs. Key

In the Web3 ecosystem, an application user can establish a uniquely identifiable 1:1 connection to the blockchain using secrets called keys. These are private keys and they are not supposed to be shared. All user assets backed on the blockchain are linked to this private key and its loss means the loss of blockchain assets owned by the user. 

Crypto wallets or Web3 wallets are an abstraction for keeping private keys secure. The {{config.extra.arcana.wallet_name}} is similar in functionality to a typical Crypto wallet that is meant to keep crypto assets safe and accessible. Web3 wallet is a much more secure mechanism than using a key for blockchain access. Wallets expose the secure EIP-1193 standard [Ethereum Provider](https://docs.ethers.io/v5/api/providers/) interface. 

The {{config.extra.arcana.wallet_name}} allows application users to securely sign blockchain transactions without having to create, manage and secure their keys by offering them a non-custodial wallet. 

It uses a state-of-the-art asynchronous, distributed key generation algorithm, ([DKG]({{page.meta.arcana.root_rel_path}}/concepts/dkg/index.md)), to generate and manage the private keys associated with each application user. The DKG subsystem of {{config.extra.arcana.product_name}} cannot access the user's keys on its own. It does not store any local copy of the user keys and no single node in the subsystem has access to the keys. The {{config.extra.arcana.wallet_name}} never exposes the private key associated with any app user unless the user asks to export their key.

!!! info "Security Guidance"

      The {{config.extra.arcana.wallet_name}} uses distributed keys generated and managed using robust cryptographic primitives. Each application user is associated with a key pair. This key is never exposed to the app developer or any entity within the {{config.extra.arcana.product_name}} ecosystem. Working with user keys directly in an application is not recommended as they are visible to the application and could pose a security risk. {{config.extra.arcana.wallet_name}} uses the standard EIP-1193 Ethereum provider interface for signing blockchain transactions. This wallet provider is used by applications for performing JSON RPC interactions with the blockchain network. 
