---
slug: /ansmartcdetails
id: idansmartcdetails
title: Contract Details
sidebar_custom_props:
  cardIcon: ▶️
---

# Contract Details

Arcana Network protocol is implemented using a bunch of smart contracts. This section lists down what each of these contract's role is and how it interacts with the other smart contracts.

## Arcana.sol

Arcana.sol contract is the most important core system contract for the Arcana Network protocol. It manages the UI configuration that controls the user experience for signing blockchain transactions. In future releases, this contract will also manage the decentralized data store functionality for providing dApp user data privacy and access control.

It is a beacon proxy type of upgradable smart contract. Arcana.sol shares some metadata with other contracts via pass-through data mechanisms. No dApp user file data is stored on this smart contract. 

## Factory.sol

When a new dApp chooses to register with Arcana Network, the Arcana factory smart contract is activated. This is a singleton, UUPS proxy type upgradable contract that implements the core system logic for generating per dApp specific ‘proxy’ contracts called BeaconProxy.sol.

## BeaconProxy.sol

At the time of dApp registration using the Arcana Dashboard, each dApp is associated with its own proxy upgradable smart contract called the BeaconProxy. The BeaconProxy is deployed by Arcana Factory.sol contract. Every BeaconProxy contract points to the latest version of Arcana.sol protocol. This is ensured by the ArcanaBeacon.sol contract.

## ArcanaBeacon.sol

ArcanaBeacon smart contract points to the latest version of Arcana’s core system logic contract. It could be V1 or V2 or Vn. It is a UUPS proxy upgradable smart contract. The sole purpose of this contract is to ensure that Arcana Protocol is upgradable.

## Forwarder.sol

This UUPS proxy upgradable smart contract is used to manage the meta transactions.  A meta transaction is a regular Ethereum transaction that contains another transaction, the actual transaction.  Meta transactions are a means of delegating payment of gas fees to an external entity such as Arcana Gateway. They are meant to facilitate the onboarding of first-time dApp users. Arcana uses meta-transactions to implement Arcana Auth related data and access operations. The Arcana Gateway module handles all the meta transactions. 

The forwarder smart contract is used in the context of meta transactions, together with an ERC-2771 compatible contract.  It forwards blockchain transaction calls from the Gateway, made on behalf of the dApp user  (proxy blockchain transactions) to the core system contract, Arcana.sol. 

## NodeList.sol

This smart contract is the key to managing Arcana's DKG protocol. It keeps track of the ADKG nodes and their epochs. Not all nodes are run and managed by Arcana. There are trusted third-party providers that run ADKG protocol nodes.
