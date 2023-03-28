---
slug: /ansmartcdetails
id: idansmartcdetails
title: Contract Details
sidebar_custom_props:
  cardIcon: ▶️
---

# {{config.extra.arcana.company_name}} Contract Details

{{config.extra.arcana.product_name}} protocol is implemented using a bunch of smart contracts that are deployed on the Polygon blockchain network. This section lists what each of the {{config.extra.arcana.company_name}} contract does and how it interacts with the other smart contracts.

## `Arcana.sol`

`Arcana.sol` contract is the most important core system contract for the {{config.extra.arcana.product_name}} protocol. It manages the UI configuration that controls the user experience for signing blockchain transactions. In future releases, this contract will also manage the decentralized data store functionality for providing app user data privacy and access control.

It is a beacon proxy type of upgradable smart contract. `Arcana.sol` shares some metadata with other contracts via pass-through data mechanisms. No app user file data is stored on this smart contract. 

## `Factory.sol`

When a new app chooses to register with {{config.extra.arcana.company_name}}, the {{config.extra.arcana.company_name}} factory smart contract is activated. This is a singleton, UUPS proxy type upgradable contract that implements the core system logic for generating per app specific ‘proxy’ contracts called BeaconProxy.sol.

## `BeaconProxy.sol`

At the time of app registration using the {{config.extra.arcana.dashboard_name}}, each app is associated with its own proxy upgradable smart contract called the BeaconProxy. The BeaconProxy is deployed by {{config.extra.arcana.company_name}} Factory.sol contract. Every BeaconProxy contract points to the latest version of `Arcana.sol` protocol. This is ensured by the `ArcanaBeacon.sol` contract.

## `ArcanaBeacon.sol`

ArcanaBeacon smart contract points to the latest version of {{config.extra.arcana.product_name}} core system logic contract. It could be V1 or V2 or Vn. It is a UUPS proxy upgradable smart contract. The sole purpose of this contract is to ensure that {{config.extra.arcana.product_name}} Protocol is upgradeable.

## `Forwarder.sol`

This UUPS proxy upgradable smart contract is used to manage the meta transactions.  A meta transaction is a regular Ethereum transaction that contains another transaction, the actual transaction.  Meta transactions are a means of delegating payment of gas fees to an external entity such as the {{config.extra.arcana.company_name}} Gateway. They are meant to facilitate the onboarding of first-time app users. {{config.extra.arcana.company_name}} Gateway component uses meta-transactions to implement the A{{config.extra.arcana.product_name}}related data and access operations. The {{config.extra.arcana.company_name}} Gateway module handles all the meta transactions. 

The forwarder smart contract is used in the context of meta transactions, together with an ERC-2771 compatible contract.  It forwards blockchain transaction calls from the Gateway, made on behalf of the app user  (proxy blockchain transactions) to the core system contract, `Arcana.sol``. 

## `NodeList.sol`

`NodeList.sol` contract is the key to managing the {{config.extra.arcana.product_name}} DKG protocol. It keeps track of public information related to ADKG nodes and the epoch details. Besides these, it manages the buffer size for controlling the number of ‘pre-generated’ keys and the information regarding whitelisting of validator nodes.
