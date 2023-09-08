---
alias: faq-gasless
title: 'FAQ: Gasless Transactions'
description: 'Frequently asked questions about setting up a gasless transactions, the Web3 app developer and user experience.'
arcana:
  root_rel_path: ..
toc_depth: 2
---

# Gasless Transactions

Frequently asked questions regarding setting up [[concept-gasless-transactions|gasless transactions]] when using the {{config.extra.arcana.product_name}} product.

## General

---

??? an-faq "Can the developers enable gasless transactions for any blockchain?"

      The gasless feature is available only for selected blockchains. See the complete list of [[configure-gasless#supported-chains|supported blockchains]] for details.

??? an-faq "Is a gas tank associated with one or more blockchain networks?"

      There can only be a single gas tank configured per blockchain network.

??? an-faq "Can the developer add a gas tank for any EVM-compatible chain that is configured in the **Chain Management** app settings?"

      No. 
      
      Refer to the [[concept-gasless-transactions#supported-chains|supported chains]] where gas tanks can be set up to enable gasless transactions.

??? an-faq "Does the user wallet address get impacted when the gasless feature is enabled?"

      Yes.  If the gasless feature is not enabled, each user account is only associated with the traditional EoA address. When gasless transactions are enabled for a blockchain, the user accounts are associated with an EoA and a SCW address.

??? an-faq "Does the user need to be aware of both the EoA address and SCW address for blockchain networks that have gasless enabled?"

      Yes.

      For all the whitelisted operations in the app, gas fees are paid for by the sponsor via the gas tank.  For non-whitelisted app operations, users need to select the SCW address and pay for the transaction as well as the gas fees. The EoA account associated with the user is not used for transactions other than signing personal messages or exporting the private key.

??? an-faq "What address is displayed in the {{config.extra.arcana.wallet_name}} UI in the case of gasless transactions?"

      By default, the {{config.extra.arcana.wallet_name}} displays the EoA address for a user. When gasless transactions are enabled for a specific blockchain, the user account is also associated with SCW address.  In this case, the {{config.extra.arcana.wallet_name}} UI displays the SCW address. Users can refer to the profile tab of the {{config.extra.arcana.wallet_name}} UI and refer to the EoA address. 

??? an-faq "Can the gasless feature be enabled later once an app is already deployed?"

      Developers can choose to configure the gasless feature later, after deploying the app on the Testnet or the Mainnet. The user wallet address will change for the blockchain where gas tanks are set up.

      Users will see a different wallet address when using the blockchain network for which gas tanks are set up by the app developer. For such networks, each user is assigned an additional address besides the EoA address. It is referred to as the SCW address. The SCW address is used for all the whitelisted app operations where the user does not have to pay any gas fees. The EoA account is used for exporting the user's private key and for signing messages on the blockchain. The SCW account is used for all other wallet operations and for automatically paying the gas fees.  

      Note that the user must ensure that the SCW wallet address is loaded with the requisite crypto assets before making a transaction such as transferring tokens to another user.  Only the gas fees for transferring the tokens are paid for via the gasless feature. The user must have requisite tokens or funds in the SCW wallet before a gasless operation can succeed. 

??? an-faq "Can the gasless feature be disabled?"

      No. Once a gas tank is set up for a blockchain network, all the user accounts for the app using this gasless-enabled network will have an EoA and an SCW type of address associated with them. If the gas tanks run out of crypto assets, or if the developer removes all whitelisted operations, then the gasless transactions will not happen but the feature is still enabled. It is a one time setting for the app which cannot be reverted.

??? an-faq "Can the gas tanks be paused if required?"

      Yes. Developers can change the **Enable** toggle setting in the {{config.extra.arcana.dashboard_name}} and pause/resume the gas tank operations for the selected blockchain network in the context of an app.

??? an-faq "When using the gasless transactions in an app that integrates with the {{config.extra.arcana.dashboard_name}}, which user address does the developer refer to, EoA or SCW or both?"

      When the gasless feature is enabled for a specified blockchain network, the user accounts are associated with the default traditional EoA address and also an SCW address. 
      
      Gasless follows the [ERC-4337 account abstraction](https://eips.ethereum.org/EIPS/eip-4337) specification and [ERC-1291 Signature Validation methods](https://eips.ethereum.org/EIPS/eip-1271) for contract addresses.  
      
      The app developers must use EoA addresses for messages that require personal signing. For all whitelisted operations, the SCW account address is used by the {{config.extra.arcana.sdk_name}}. In the case of non-whitelisted operations, the gas fees are payable via the SCW address associated with the user account. If there are insufficient funds in that SCW wallet address, then the non-whitelisted operations may fail until the user tops up the SCW account.

## MFA

---

??? an-faq "Is the MFA feature supported with gasless transactions?"

      Yes.
      
      MFA feature uses the EoA account address of the user. When gasless transactions are enabled for a blockchain network, the user account is also associated with an SCW address.  The MFA feature continues to use the EoA address. 

## Global Keys

---

??? an-faq "Is the Global Keys feature supported along with gasless transactions?"

      Yes.

      For those apps that enable gasless transactions and global keys features, the users will have the same EoA as well as the SCW addresses when using other apps integrated with the {{config.extra.arcana.sdk_name}} that have global keys enabled.

## Private Keys

---

??? an-faq "Do private keys use EoA or SCW address in the case of gasless?"

      The user's private keys are always associated with EoA, whether the gasless feature is enabled or not.