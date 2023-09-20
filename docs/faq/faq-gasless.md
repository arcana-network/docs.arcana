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

      There can only be a single gas tank configured per blockchain network.

??? an-faq "Can the developer add a gas tank for any EVM-compatible chain that is configured in the **Chain Management** app settings?"

      No. 
      
      Refer to the [[concept-gasless-transactions#supported-chains|supported chains]] where gas tanks can be set up to enable gasless transactions.

??? an-faq "Does the user wallet address get impacted when the gasless feature is enabled?"

      Yes.  If the gasless feature is not enabled, each user account is only associated with the traditional EoA address. When gasless transactions are enabled for a blockchain, the user accounts are associated with an EoA and a SCW address. [[concept-gasless-transactions#gasless-user-accounts|Learn more...]]

??? an-faq "Do the user as well as the app developer need to be aware of both the EoA address and SCW address for blockchain networks that have gasless enabled?"

      Yes.
      
      For whitelisted operations, the SCW address signs blockchain transactions, with gas fees covered by the gas tank. Non-whitelisted functions require users to pay gas fees through the active account in {{config.extra.arcana.wallet_name}} UI. Gasless-enabled apps default to the active SCW address, but users can switch between EoA and SCW addresses. If a user selects the EoA address while gas tanks are active, the transaction occurs via EoA, and the user covers the gas fee.

      Developers need to ensure that the EoA account is used for creating blockchain requests to sign personal messages or to export the private key. See [EIP-4337](https://eips.ethereum.org/EIPS/eip-4337) and [EIP-1291](https://eips.ethereum.org/EIPS/eip-1271) and [[concept-gasless-transactions#user-experience|user experience]]for details.

??? an-faq "Which of the two addresses, EoA or SCW, is displayed in the {{config.extra.arcana.wallet_name}} UI in the case of gasless transactions?"

      Gasless transactions are set by default to use the SCW address in {{config.extra.arcana.wallet_name}} and the same is displayed in the wallet UI. Users must use the SCW address for gasless transactions; switching to the EoA address incurs user gas fees. Gasless functionality is exclusive to SCW addresses. 
      
      If gas tanks aren't configured for the active blockchain, only the EoA address is shown in {{config.extra.arcana.wallet_name}} UI.

??? an-faq "Can the gasless feature be enabled later ?"

      Yes, developers can enable the gasless feature after deploying the app on the Testnet or Mainnet. However, this change affects the user's wallet address experience on blockchain networks with gas tanks.
      
      If gas tanks are set up for the active network in the wallet, users will have both the EoA and an additional SCW address. Before enabling the gasless feature, users will only see the EoA address in the wallet UI. Once gasless is enabled, the SCW address replaces the EoA address, becomes active, and handles gas fees. Users can switch between EoA and SCW addresses through the wallet UI.
      
      If a user switches to the EoA network, even with active gas tanks, they will incur gas fees through the EoA account. 
      
      Users must ensure the SCW wallet address has sufficient crypto assets for transactions like token transfers. Gas fees for token transfers are covered by the SCW address.

??? an-faq "Is disabling gasless possible once enabled?"

      Once a gas tank is established on a blockchain network, the user account becomes a dual-address gasless account, featuring both EoA and SCW addresses. This change is irreversible. However, developers can deactivate the gas tanks or they may run out of gas funds, resulting in users incurring gas fees.

??? an-faq "Can the gas tanks be paused if required?"

      Yes. 
      
      Developers can change the **Enable** toggle setting in the {{config.extra.arcana.dashboard_name}} and pause/resume the gas tank operations for the selected blockchain network in the context of an app.

??? an-faq "For gasless apps which user address does the developer refer to, EoA or SCW or both?"

      When gasless is active on a blockchain network, the user account includes both EoA and SCW addresses, with gasless transactions exclusively supported through the SCW address.
      
      Gasless adheres to the ERC-4337 account abstraction specification and ERC-1291 Signature Validation methods for contract addresses.
      
      App developers should use EoA addresses for messages requiring personal signing or accessing user keys. All other blockchain transactions should utilize the SCW address to ensure gas fees are covered for the user. If a user deliberately chooses the EoA address via the wallet UI then any subsequent transaction will incur gas fees as they use the EoA address.

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

      