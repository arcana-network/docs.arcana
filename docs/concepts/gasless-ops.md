---
alias: concept-gasless-transactions
title: 'Gasless Transactions'
description: "Gasless transactions allow developers to enable app users to use the app without paying any gas fees for blockchain transactions associated with the app operations. The gas fees are paid by the developer or the sponsors through the gas tanks set up for the app."
arcana:
  root_rel_path: ..
---

# Gasless 

When a user operates a Web3 app, such as for sending ERC20 tokens to another user or buying a crypto asset, the blockchain networks charge a fee called the 'gas fee'. Users are required to pay these fees for completing the blockchain transaction to send ERC20 tokens or for buying a crypto asset. With gasless, users are not required to pay these gas fees. Those are funded by third parties or sponsors.

## Gasless Transactions

Developers can simplify user onboarding, reduce the Web3 gas-fees barrier to entry and drive up the app adoption through the gasless transactions feature in the {{config.extra.arcana.product_name}} product.  Besides adding gas tanks and setting up paymasters, developers are also required to whitelist one or more app functions. When the user invokes any of the whitelisted app functions, they do not pay any gas fee for the corresponding blockchain transactions. The gas fees for such gasless transactions are actually paid via the gas tanks or the paymaster accounts set up by the app developer.

## User Experience

Apps that integrate with {{config.extra.arcana.sdk_name}} can seamlessly offer gasless operations for the app users.

The authenticated users gain instant access to {{config.extra.arcana.wallet_name}} and can sign blockchain transactions without having to pay for the gas fees. Note that the users still need to have requisite crypto assets in the wallet or tokens to pay for whatever operation they are performing using the app, only gas fees for such operations are waived off.

If the gas tanks are depleted or empty, the user will have to pay gas fees for the transaction from their Smart Contract Wallets.

## Gasless User Accounts

In the context of gasless transactions set up for apps, the user accounts for such apps are not the typical traditional 'Externally Owned Accounts' (EoA). The users of gasless-enabled apps are assigned 'Smart Contract Wallet' (SCW) accounts based on Ethereum account abstraction smart contract specification [ERC-4337](https://www.erc4337.io/docs).

## How does Gasless Work?

### Gas Available

Developers set up gas tanks and deposit crypto assets specific to the blockchain for which the tank is set up. One or more app functions can be marked for gasless transactions by whitelisting. When users call app functions that are whitelisted, they do not need to pay any gas fees.

<img src="/img/an_gasless_howitworks.png" alt="Set up Gas Tanks" class="an-screenshots"/>

### Gas Not Available

If there are no gas tanks set up by the app developer or if either the developer withdraws funds depleting the gas tanks or if they run dry via usage, then even if the app functions are whitelisted, the users are required to pay gas fees for them.

<img src="/img/an_gasless_howitworks_empty.png" alt="Set up Gas Tanks" class="an-screenshots"/>

## Gasless Configuration

The Gasless feature can only be configured once. It is a one-time setting. Once enabled, it cannot be reverted. The app developers must configure the following details:

1. Add one or more Gas Tanks. Only one gas tank can be set up per blockchain network.
2. Deposit crypto assets in the Gas Tanks
3. Whitelist App operations by specifying verified contracts or providing the ABI of the contracts and selecting which functions to whitelist.
4. Optionally, developers can also choose to pause and resume gas tanks configured for an app.

Once gas tanks are set up, developers can integrate the app with the {{config.extra.arcana.sdk_name}}, add code to onboard users and deploy the app on the Testnet or the Mainnet.

!!! warning "Withdrawing funds"

      Developers can deposit funds in the gas tanks to bear the gas costs on behalf of the app users. For this, developers or sponsors need to connect their wallets and ensure that it has the balance of native tokens of the selected chain. Depositors can also withdraw any remaining funds deposited in the gas tanks. 
      
      Note that the address that was used to deposit funds into the gas tank is **the only address that is allowed to withdraw funds** from the same gas tank.

!!! caution "Gasless: One Time Setting"

      Gasless is enabled at the time of app configuration. Once a developer sets up one or more gas tanks for an app, the app is marked for the ERC-34337 type SCW gasless user accounts even if the gas tanks are empty or depleted. What this means is, there is no way to revert to the plain EOA-type user accounts in such apps. 

      If an app operation is whitelisted by the developer, the gas fees for such transactions are paid for via the paymaster or the gas tank. If the app operation is not whitelisted or if the gas tanks are empty, the user must ensure there are sufficient funds in their SCW wallet accounts to pay for the transaction gas fees, otherwise, the transaction will fail. 

!!! info "Public Keys"

      The `getPublicKey()` method of the `AuthProvider` in the {{config.extra.arcana.sdk_name}} returns the key associated with the user's EoA.  The {{config.extra.arcana.product_name}} maintains the association of each user's SCW and EoA address for apps where the gasless feature is enabled.

## Supported Chains

The {{config.extra.arcana.product_name}} product gasless feature is powered by [Biconomy Gasless SDK v2](https://docs.biconomy.io/docs/overview). Web3 app developers can set up gas tanks using the {{config.extra.arcana.dashboard_name}} and enable gasless operations in the app for one or more of the [supported chains](https://docs.biconomy.io/docs/supportedchains/).