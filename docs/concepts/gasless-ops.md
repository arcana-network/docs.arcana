---
alias: concept-gasless-transactions
title: 'Gasless Transactions'
description: "Gasless transactions allow developers to enable app users to use the app without paying any gas fees for blockchain transactions associated with the app operations. The gas fees are paid by the developer or the sponsors through the gas tanks set up for the app."
arcana:
  root_rel_path: ..
---

# Gasless Transactions

In Web3 apps, when a user initiates a blockchain transaction, like sending ERC20 tokens or buying crypto assets, they typically incur a 'gas fee' charged by the blockchain network. However, gasless transactions eliminate the need for users to pay these fees, as developers or third-party sponsors cover the costs.

By leveraging the gasless transaction feature offered by the {{config.extra.arcana.company_name}} SDKs, developers can streamline user onboarding, lower the barrier of entry associated with Web3 gas fees, and boost app adoption.

## Gasless Configuration

Developers can set up gas tanks using the **Gasless** configuration section in {{config.extra.arcana.dashboard_name}} with the following steps:

1. Add one or more Gas Tanks (limited to one per blockchain network).
2. Deposit or withdraw crypto assets, with withdrawal restricted to the [[concept-gasless-transactions#gas-tank-owner|gas tank owner]].
3. [[concept-gasless-transactions#whitelisting-app-operations|Whitelist Web3 app operations]] by specifying verified smart contracts or providing contract ABIs and whitelisting specific functions.
4. Optionally, pause or resume configured gas tanks.

Once gas tanks are configured, developers can seamlessly integrate their app with the {{config.extra.arcana.sdk_name}}, onboard users, and deploy the app on either the Testnet or Mainnet. Users can enjoy gas fee waivers for supported blockchain networks with configured gas tanks.

### Supported Chains

The gasless transaction feature offered by the {{config.extra.arcana.company_name}} SDKs is powered by {% include "./text-snippets/biconomy/biconomy_sdk_docs.md" %}. Web3 app developers can set up gas tanks using the {{config.extra.arcana.dashboard_name}} and enable gasless operations in the app for one or more of the {% include "./text-snippets/biconomy/gasless_supported_networks.md" %}.

### Gas Tank Owner

A developer who adds the gas tank for an app is **the owner** of that gas tank. To set up gas tanks, developers are required to have a MetaMask wallet account or any other browser-enabled wallet account that sets the `windows.enabled` browser variable. This wallet account is referred to as the **owner account**.

### Gas Tank Deposit

After setting up the gas tank, developers can fuel it by depositing crypto assets for the respective blockchain network. These assets can include native tokens or any ERC-20/ERC-721 tokens native to that chain. Additionally, third-party wallets or sponsors can also contribute to the gas tank by making deposits.

### Withdraw Gas Tank Deposit

Gas tanks, once provisioned, can receive the necessary crypto assets from any depositor, whether it's the gas tank owner (app developer) or a third-party sponsor. However, it's important to note that funds can only be **withdrawn from a gas tank** into the **owner's account**.

### Whitelisting App Operations

In addition to creating gas tanks and depositing funds into them, setting up the gasless feature also involves whitelisting one or more app operations by the app developer. These operations can be executed through one or more smart contracts and their associated functions. When a user triggers any of the whitelisted app operations, they are not charged any gas fees for the associated blockchain transactions; instead, these fees are covered by the gas tanks.

### Pause / Enable Gas Tank

After provisioning gas tanks, developers can use the **Gasless** configuration section in the {{config.extra.arcana.dashboard_name}} any time later to pause or resume the gas tank operations.  When the gas tank is paused, the gas fees have to be borne by the app users themselves.

## How does Gasless Work?

### Gas Available

Developers set up gas tanks and deposit crypto assets specific to the blockchain for which the tank is set up. One or more app functions can be marked for gasless transactions by whitelisting. These app functions can be related to one or more smart contracts that are part of the app. When users call app functions that are whitelisted, they do not need to pay any gas fees.

<img src="/img/an_gasless_howitworks_light.png#only-light" alt="Set up Gas Tanks Light Theme" class="an-screenshots"/>
<img src="/img/an_gasless_howitworks_dark.png#only-dark" alt="Set up Gas Tanks" class="an-screenshots"/>

### Gas Not Available

Waiving gas fees for app operations does not happen when:

* App developer does not set up any gas tanks for any blockchain network
* Gas tanks are set up and funded but disabled by the developer
* Gas tanks are set up but no funds are deposited to pay for the gas fees
* Gas tanks are depleted and all the funds spent, are not refueled
* Gas tank owner withdraws the deposited funds depleting the tanks

In such situations, even if the app functions are whitelisted, gas tanks are not effective or available, so users have to bear the gas fees.

<img src="/img/an_gasless_howitworks_empty_light.png#only-light" alt="Set up Gas Tanks Light Theme" class="an-screenshots"/>
<img src="/img/an_gasless_howitworks_empty_dark.png#only-dark" alt="Set up Gas Tanks Light Theme" class="an-screenshots"/>

## User Experience

Apps using the {{config.extra.arcana.sdk_name}} provide seamless gasless operations. Gas tanks are configured and funded to cover gas fees, sparing users these costs unless operations aren't whitelisted or tanks are inactive. Users, on supported blockchain networks with gas tanks, are assigned gasless accounts. Each gasless account is associated with two **wallet addresses**.

### Gasless User Accounts

Gasless user accounts aren't just regular 'Externally Owned Accounts' (EoA). When developers add a gas tank for a blockchain network, each user is also given a 'Smart Contract Wallet' (SCW) address. Users can switch between EoA and SCW accounts using {{config.extra.arcana.wallet_name}} UI. Without a gas tank, users see only the EoA account, but once developers provision a gas tank, both EoA and SCW accounts appear in the {{config.extra.arcana.wallet_name}} UI.

This two address gasless user account model aligns with the Ethereum account abstraction smart contract specification [ERC-4337](https://www.erc4337.io/docs).

### Managing EoA and SCW Addresses

By default, gasless apps will have the SCW address active in the {{config.extra.arcana.wallet_name}} UI. Users can switch it back to the EoA address. Only the active wallet address is used to perform the blockchain transactions. Note that the gasless capability is associated only with the SCW address. If a user switches the wallet to EoA, then the EoA wallet address is used to perform the blockchain transaction. This will result in gas fees charged via the user's EoA wallet even if the gas tanks are set up and available for that blockchain network.

If the gas tank is depleted, empty or paused then by default the EoA wallet address becomes active for the user and is displayed in the wallet. If the user switches it to the SCW address then that is used for any blockchain transactions. In this case, since the gas tank is not available, the user will have to bear the gas fees via the SCW wallet address. So the user needs to make sure that the SCW account has sufficient funds.

!!! caution "Disabling Gasless Capability"

      Once a developer provisions a gas tank for any supported blockchain, the gasless feature becomes permanently active within {{config.extra.arcana.sdk_name}} for that blockchain. While the gas tank can be paused and resumed, the two-address gasless user accounts system, comprising EoA and SCW addresses, remains in effect.
      
      Even if the gas tanks are depleted, empty, or paused, this dual-address system for gas tank-enabled networks cannot be reverted. Users will continue to see both wallet addresses in the {{config.extra.arcana.wallet_name}} UI and can switch between them at will.

### User Keys

Web3 apps integrated with {{config.extra.arcana.sdk_name}} allow authenticated users to securely access their private keys. Developers can programmatically retrieve a user's public key using the `getPublicKey()` method of the `AuthProvider`. Only authenticated app users can export their **private key** through the {{config.extra.arcana.wallet_name}} UI.

For apps with gas tanks set up on one or more blockchain networks, users have gasless accounts with EoA and SCW addresses. Regardless of the active wallet account in {{config.extra.arcana.wallet_name}} UI, the getPublicKey() method always returns the public key associated with the EoA address. There is no public key for the SCW address.

Similarly, when a user exports the private key via {{config.extra.arcana.wallet_name}} UI, the returned key is always associated with the user's EoA account, regardless of the active wallet account in {{config.extra.arcana.wallet_name}} UI. There is no private key for the SCW address.
