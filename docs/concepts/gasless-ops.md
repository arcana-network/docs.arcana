---
alias: concept-gasless-transactions
title: 'Gasless Transactions'
description: "Gasless transactions allow developers to enable app users to use the app without paying any gas fees for blockchain transactions associated with the app operations. The gas fees are paid by the developer or the sponsors through the gas tanks set up for the app."
arcana:
  root_rel_path: ..
---

# Gasless Transactions

When a user operates a Web3 app, such as for sending ERC20 tokens to another user or buying a crypto asset, the blockchain networks charge a fee called the 'gas fee'. Users are required to pay these fees for completing the blockchain transaction to send ERC20 tokens or for buying a crypto asset. With gasless, users are not required to pay these gas fees. Those are funded by third parties or sponsors.

Developers can simplify user onboarding, reduce the Web3 gas-fees barrier to entry and drive up the app adoption through the gasless transactions feature in the {{config.extra.arcana.product_name}} product. 

## Gasless Configuration

Developers can use the *Gasless** configuration section in the {{config.extra.arcana.dashboard_name}} to configure gas tanks as follows:

1. Add one or more Gas Tanks. Only one gas tank can be set up per blockchain network.
2. Deposit crypto assets in the Gas Tanks or withdraw them. Withdrawal can happen only by the [[concept-gasless-transactions#gas-tank-owner|gas tank owner]].
3. [[concept-gasless-transactions#whitelisting-app-operations|Whitelist App operations]] by specifying verified smart contracts or specifying the ABI of the contracts and then whitelisting one or more functions of the contract.
4. Optionally, developers can also pause and resume gas tanks that are already configured for an app.

After configuring the gas tanks,  developers can integrate the app with the {{config.extra.arcana.sdk_name}}, add code to onboard users and deploy the app on the Testnet or the Mainnet.

### Gas Tank Owner

A developer who adds the gas tank for an app is **the owner** of that gas tank. To set up gas tanks, developers are required to have a MetaMask wallet account or any other browser-enabled wallet account that sets the `windows.enabled` browser variable. This wallet account is referred to as the **owner account** as it is used to set up the gas tank.

### Gas Tank Deposit

After creating the gas tank, developers can fuel the tank by adding crypto assets. They can also allow other sponsors to deposit gas in the tank.

### Withdraw Gas Tank Deposit

Provisioned gas tanks can be funded with the required crypto assets by any depositor. This could be the owner of the gas tank (app developer) or any third-party sponsor. However, funds **can only be withdrawn from a gas tank by the gas tank owner.

### Whitelisting App Operations

Besides adding gas tanks and depositing funds in the tank, setting up a gas tank also requires whitelisting one or more app operations. These app operations can be fulfilled via one or more smart contracts and the functions associated with the contract. When the user invokes any of the whitelisted app operations, they do not pay any gas fee for the corresponding blockchain transactions. Those are paid via the gas tanks.

### Pause / Enable Gas Tank

After provisioning gas tanks, developers can use the **Gasless** configuration section in the {{config.extra.arcana.dashboard_name}} any time later to pause or resume the gas tank operations.  When the gas tank is paused, the gas fees have to be borne by the app users themselves.

## How does Gasless Work?

### Gas Available

Developers set up gas tanks and deposit crypto assets specific to the blockchain for which the tank is set up. One or more app functions can be marked for gasless transactions by whitelisting. These app functions can be related to one or more smart contracts that are part of the app. When users call app functions that are whitelisted, they do not need to pay any gas fees.

<img src="/img/an_gasless_howitworks.png" alt="Set up Gas Tanks" class="an-screenshots"/>

### Gas Not Available

Waiving gas fees for app operations does not happen when:

* App developer does not set up any gas tanks for the app
* Gas tanks are set up and funded but disabled by the developer
* Gas tanks are set up but no funds are deposited to pay for the gas fees
* Gas tanks are depleted and all the funds spent, are not refueled
* Gas tank owner withdraws the deposited funds depleting the tanks

In such situations, even if the app functions are whitelisted, there is no resource available to pay gas fees. In this case, the user has to bear the gas costs.

<img src="/img/an_gasless_howitworks_empty.png" alt="Set up Gas Tanks" class="an-screenshots"/>

### Supported Chains

The {{config.extra.arcana.product_name}} product gasless feature is powered by [Biconomy Gasless SDK v2](https://docs.biconomy.io/docs/overview). Web3 app developers can set up gas tanks using the {{config.extra.arcana.dashboard_name}} and enable gasless operations in the app for one or more of the [supported chains](https://docs.biconomy.io/docs/supportedchains/).

## User Experience

Apps that integrate with {{config.extra.arcana.sdk_name}} can seamlessly offer gasless operations for the app users.

The authenticated users gain instant access to {{config.extra.arcana.wallet_name}} and can sign blockchain transactions without having to pay for the gas fees, provided the app developer has whitelisted the app operation invoked by the user. Note that the users still need to have requisite crypto assets in the wallet or tokens to pay for whatever operation they are performing using the app, only gas fees for such operations are waived.

If the gas tanks are depleted, empty or paused, the user will have to bear the gas fees for the transaction.

### Gasless User Accounts

When the app developer sets up gasless transactions for the app, the user accounts for such apps are not the typical traditional 'Externally Owned Accounts' (EoA). Each user is also assigned a 'Smart Contract Wallet' (SCW) account address in addition to the traditional EoA account address. This switch to EoA plus SCW accounts happens when the app developer adds a gas tank for a blockchain network. The user will see and can switch between EoA/SCW wallet accounts using the wallet UI. Until a gas tank is added users will only see the typical EoA wallet account in the wallet UI. The moment a gas tank is provisioned by the developer, the users will see EoA and SCW accounts in the wallet UI.

This two wallet addresses approach per user is based on Ethereum account abstraction smart contract specification [ERC-4337](https://www.erc4337.io/docs).

### Managing EoA and SCW Addresses

By provisioning a gas tank the gasless feature gets triggered and the association of EoA and an additional SCW account happens for every app user. Each user will see two wallet addresses for the chain where at least one gas tank is enabled. Users can switch between EoA and SCW addresses.

By default, gasless apps will have the SCW address active in the user's wallet UI. The user can switch it to the EoA address. Only the active wallet address is used to perform the blockchain transactions. The gasless capability is only associated with the SCW address. If a user switches the wallet to EoA, then the EoA wallet address is used to perform the blockchain transaction. This will result in incurring gas fees via the user's EoA wallet even if the gas tanks are set up and available.

If the gas tank is depleted, empty or paused then by default the EoA wallet address becomes active for the user and is displayed in the wallet. If the user switches it to the SCW address then that is used for any blockchain transactions. In this case, since the gas tank is not available, the user will have to bear the gas fees via the SCW wallet address. So the user needs to make sure that the SCW account has sufficient funds.

!!! caution "Removing Gasless Capability"

      The moment a gas tank is provisioned by the developer for any supported blockchain, the gasless feature is enabled for the {{config.extra.arcana.sdk_name}} for that blockchain.  This cannot be removed but gas tank functioning can be paused and resumed. What this means is each user using this blockchain with a gas tank set up will see two wallet addresses associated with their account - EoA and SCW address. Once enabled, this two-address scheme for users cannot be reverted, even if the gas tanks are depleted, empty or paused. Users will continue to see two wallet addresses and can switch between the two when the blockchain network with gas tanks configured is selected in the wallet UI.

### User Keys

     Developers can use the `getPublicKey()` method of the `AuthProvider` in the {{config.extra.arcana.sdk_name}} to fetch a user's **public key**. Users can export their **private key** by using the {{config.extra.arcana.wallet_name}} UI.
     
     In the case of apps that have gas tanks enabled for blockchain networks, the **public key** returned by the `getPublicKey()` method, irrespective of which wallet account is active in the {{config.extra.arcana.wallet_name}} UI, is always associated with the user's EoA. There is no public key for the SCW address associated with the user's account.

     Similarly, when a user exports **private key** via the {{config.extra.arcana.wallet_name}} UI, irrespective of which wallet account is active in the {{config.extra.arcana.wallet_name}} UI, the key that is returned is the one associated with the user's EoA account. There is no private key for the SCW address associated with the user's account.