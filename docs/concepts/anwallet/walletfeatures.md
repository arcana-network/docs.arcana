---
alias: concept-wallet-features
title: 'Arcana Wallet Features'
description: 'List of Web3 operations supported by the Arcana wallet. JSON RPC calls, monitoring transaction activity and more.'
arcana:
  root_rel_path: ../..
---

# Wallet Features

The {{config.extra.arcana.wallet_name}} allows authenticated users to securely perform blockchain operations without having to bother about generating and managing secret keys. By [[index-integrate-app|integrating their applications with the {{config.extra.arcana.wallet_name}}]], Web3 developers can enable the {{config.extra.arcana.wallet_name}} for the application users. With the {{config.extra.arcana.wallet_name}}, users can sign blockchain transactions and manage their digital assets such as cryptocurrencies, native or custom tokens, and NFTs: 

* **User Identity Management:** The {{config.extra.arcana.wallet_name}} associates application users with a secret.  This secret is generated using distributed key generation algorithms.  The application users are authenticated through the configured authentication providers or via the passwordless login option by the {{config.extra.arcana.sdk_name}} and assigned this secret after successful authentication. This frees the application users from having to manage Web3 secrets or worry about centralized identity management servers, or storing them securely to guard against losing private keys.

* **Sign Blockchain Transactions:** The {{config.extra.arcana.wallet_name}} also allows application users to switch between supported blockchain networks and sign blockchain transactions for any [[state-of-the-arcana-auth#supported-blockchains|supported blockchain network]].

* **Send and Receive Native Tokens:** Using the {{config.extra.arcana.wallet_name}}, application users can transact native tokens for the selected network. To receive tokens, the QR code or the account address can be copied and shared with the sender.

* **Custom Token Support:** Users can add custom tokens, send or receive tokens, and view token assets for any [[state-of-the-arcana-auth#supported-blockchains|supported blockchain network]].

* **Send and Receive NFT assets:** Similar to native and custom tokens, the {{config.extra.arcana.wallet_name}} allows users to preview, share/sell or receive NFT assets. Unlike cryptocurrencies and tokens, NFT assets are unique and can be traced back to their original owner. Only the NFT owner can download or exchange NFTs with other users.

* **Add Network Configuration:** Developers can choose to add any [[state-of-the-arcana-auth#supported-blockchains|supported blockchain network]] to the {{config.extra.arcana.wallet_name}} by specifying the following details:

    - Network Name
    - RPC URL
    - Chain ID
    - Currency Symbol
    - Explorer URL (optional)

    After adding a new blockchain network, the {{config.extra.arcana.wallet_name}} automatically switches over to the newly specified blockchain.

    {% include "./text-snippets/add_wallet_config_warning.md" %}

* **Switch Blockchain Network:** Web3 developers can configure their applications programmatically to use any supported blockchain network in the context of the {{config.extra.arcana.wallet_name}} and switch to a different one when required.

    {% include "./text-snippets/wallet_ntwk_switch_warning.md" %}

* **List Tokens:** The **Assets** tab of the {{config.extra.arcana.wallet_name}} displays all the digital assets of the type tokens such as native and custom tokens associated with the application user's wallet account.

* **List NFTs:** The **NFTs** tab of the {{config.extra.arcana.wallet_name}} displays all the digital assets of the NFTs associated with the application user's wallet account.

* **Monitor Transaction Activity:** The {{config.extra.arcana.wallet_name}} **Notifications** tab displays all the blockchain transaction activity that is approved by the application user. This includes native or custom token send transactions, NFT exchange transactions, ERC-20 smart contract deployment, and contract interactions. It also shows any pending transactions that are waiting on the user's action. 

    If a red dot is displayed on the **Notifications** tab at the bottom right of the {{config.extra.arcana.wallet_name}} screen, then it signifies that there are pending blockchain transactions waiting on application user approval. The application user can click on the red dot and process the pending blockchain transaction. 

* **Supports JSON RPC:** The {{config.extra.arcana.wallet_name}} offers the standard EIP-1193 Ethereum provider interface that can be used by applications to call any [Ethereum JSON RPC](https://ethereum.github.io/execution-apis/api-documentation/) methods.
