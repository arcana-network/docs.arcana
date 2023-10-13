---
alias: faq-gasless
title: 'FAQ: Gasless Transactions'
description: 'Frequently asked questions about setting up a gasless transactions, the Web3 app developer and user experience.'
arcana:
  root_rel_path: ..
toc_depth: 2
---

# Gasless Transactions

## General

---

??? an-faq "Can the developers enable gasless transactions for any blockchain?"

      The gasless feature is available only for selected blockchains. See the complete list of [[concept-gasless-transactions#supported-chains|supported blockchains]] for details.

??? an-faq "Is a gas tank associated with one or more blockchain networks?"

      There can only be a single gas tank configured per blockchain network for every registered app.

??? an-faq "Can the developer add a gas tank for any EVM-compatible supported chain that is configured in the **Chain Management** app settings?"

      No. 
      
      Refer to the [[concept-gasless-transactions#supported-chains|supported chains]] where gas tanks can be set up to enable gasless transactions.

??? an-faq "Does the user wallet address get impacted when the gasless feature is enabled?"

      Yes.  If the gasless feature is not enabled, each user account is only associated with the traditional EoA address. When gasless transactions are enabled for a blockchain, the user accounts are associated with an EoA and a SCW address. [[concept-gasless-transactions#gasless-user-accounts|Learn more...]]

??? an-faq "Do the user as well as the app developer need to be aware of both the EoA address and SCW address for blockchain networks that have gasless enabled?"

      Yes.
      
      For whitelisted operations, the SCW address is used to sign the blockchain transactions. The gas fees are covered via the SCW account through the gas tank. Non-whitelisted functions require users to pay gas fees through the active account in {{config.extra.arcana.wallet_name}} UI. Gasless-enabled apps default to the active SCW address, but users can switch between EoA and SCW addresses. If a user selects the EoA address while gas tanks are active, the transaction occurs via EoA, and the user covers the gas fee.

      Developers need to ensure that they use SCW address when issuing blockchain requests for app operations that are whitelisted. Also, developers must ensure that they use the EoA address for creating blockchain requests related to sign personal messages or to export the private key. See [EIP-4337](https://eips.ethereum.org/EIPS/eip-4337) and [EIP-1291](https://eips.ethereum.org/EIPS/eip-1271) and [[concept-gasless-transactions#user-experience|user experience]]for details.

??? an-faq "Which of the two addresses, EoA or SCW, is displayed in the {{config.extra.arcana.wallet_name}} UI in the case of gasless transactions?"

      If the developer has set up the gas tank for blockchain network, say network N, and also configured network N as the active network to be displayed in the wallet UI, then the wallet is enabled for gasless transactions on network N. The wallet UI will display the SCW address. Users can use the wallet UI to switch between the SCW and EoA address. However, they must use the SCW address for gasless transactions; switching to the EoA address incurs user gas fees. Gasless functionality is exclusive to SCW addresses. 
      
      If gas tanks aren't configured for the active blockchain, only the EoA address is shown in {{config.extra.arcana.wallet_name}} UI.

??? an-faq "Can the gasless feature be enabled later?"

      Yes, developers can seamlessly enable the gasless feature even later, after deploying the app on the Testnet or Mainnet. They can enable the gasless feature by setting up gas tanks for a blockchain network and it does not require app redeployment. However, note that this change affects the user's wallet address experience on blockchain networks with gas tanks.
      
      If gas tanks are set up for the active network in the wallet, users will have both the EoA and an additional SCW address. Before enabling the gasless feature, users will only see the EoA address in the wallet UI. Once gasless is enabled, the SCW address becomes active instead of the EoA address and handles gas fees. Users can switch between EoA and SCW addresses through the wallet UI.
      
      If a user switches to the EoA address, in this case even if the gas tanks are active, users will incur gas fees through the EoA account. 
      
      Users must ensure the SCW wallet address has sufficient crypto assets for transactions like token transfers. Gas fees for token transfers are covered by the SCW address.

??? an-faq "Is disabling gasless possible once enabled?"

      Once a gas tank is established on a blockchain network, the user account becomes a dual-address gasless account, featuring both EoA and SCW addresses. This change is irreversible. However, developers can deactivate the gas tanks or they may run out of gas funds, resulting in users incurring gas fees. Once added, gas tanks cannot be deleted.

??? an-faq "Can the gas tanks be paused if required?"

      Yes. 
      
      Developers can change the **Enable Smart Account** toggle setting in the {{config.extra.arcana.dashboard_name}} and pause/resume the gas tank operations for the selected blockchain network in the context of an app.

??? an-faq "For gasless apps which user address does the developer refer to, EoA or SCW or both?"

      When gasless is active on a blockchain network, the user account includes both EoA and SCW addresses, with gasless transactions exclusively supported through the SCW address.
      
      Gasless adheres to the ERC-4337 account abstraction specification and ERC-1291 Signature Validation methods for contract addresses.
      
      App developers should use EoA addresses for messages requiring personal signing or accessing user keys. All other blockchain transactions that are meant to be gasless should utilize the SCW address to ensure gas fees are covered for the user. For transferring tokens and digital assets, if a user deliberately chooses the EoA address via the wallet UI then any subsequent transaction will incur gas fees as they use the EoA address.

??? an-faq "If a eveloper sets up a gas tanks on network N, uses SCW address and then issues the transaction on a different network with no gas tank, why does the transaction fail?"

      This will not work and cause transaction error. Only transactions issued using the SCW address on the network where gas tank is set up (network N in this case) will be gasless and successful if there are sufficient funds in the tank and the SCW wallet address.
      
      If the developers sets up a gas tank on network N and issues transaction on Network G using the SCW address, they will see transaction error due to gasless network and address mismatch. In this case, the network is wrong and also SCW is not applicable for network G where a gas tank is not set up. User accounts on Network N will be gasless accounts with dual EoA and SCW addresses. For Network G only EoA is valid and hence you will see the blockchain transaction error. Transactions issued on the other network will not be gasless and can only use EoA address.

??? an-faq "Will the transaction be gasless if the dev sets up a gas tank on network N, uses EoA for issuing the blockchain transaction associated with the whitelisted operations?"

      No. EoA accounts on network N where gas tank is set up and funded, will incur gas fees. Dev must use SCW accounts only to ensure gasless transactions.

## MFA

---

??? an-faq "Is the MFA feature supported with gasless transactions?"

      Yes.
      
      MFA feature uses the EoA account address of the user. For blockchains where gas tanks are enabled, the gas user account is associated with dual addresses: an EoA and an SCW address.  The MFA feature continues to use the EoA address. 

## Global Keys

---

??? an-faq "Is the Global Keys feature supported along with gasless transactions?"

      Yes.

      For those apps that enable gasless transactions and global keys features, the users will have the same EoA as well as the SCW addresses when using other apps integrated with the {{config.extra.arcana.sdk_name}} that have global keys enabled.

## Private Keys

---

??? an-faq "Are the user keys associated with EoA or SCW address in the case of gasless?"

      The user's keys are always associated with EoA, whether the gasless feature is enabled or not.

      