---
alias: concept-deployed-contracts
title: 'Deployed Contracts'
description: 'Learn about the various smart contracts implemented as part of the Arcana Network protocol.'
arcana:
  root_rel_path: ../..
---

# Deployed Contracts

## Summary

The table below lists various {{config.extra.arcana.company_name}} smart contracts based on the contract type and purpose.

|{{config.extra.arcana.company_name}} Contract | Type/Category | Purpose |
|:---| :--- | :------------|
| `Arcana.sol` [V1 or V2] | Beacon Proxy/Core System |  Main logic contract for {{config.extra.arcana.company_name}} Store operations primarily associated with managing user data privacy and access control. |
| `Factory.sol` | UUPS Proxy/Core System | Smart contract generator per app that registers with {{config.extra.arcana.company_name}}|
| `ArcanaBeacon.sol` | UUPS Proxy/Core System | Smart contract to manage the per app association between the latest `Arcana.sol` main logic contract and the app |
| `BeaconProxy.sol` | Beacon Proxy/dApp | This is a per app smart contract that stores the data related to the program state. It interacts with `ArcanaBeacon.sol` smart contract to refer to the latest {{config.extra.arcana.product_name}} product core logic contract. |
| `Forwarder.sol` | UUPS Proxy/Core System | Manages meta transactions for app users. Forwards Gateway proxy calls (on behalf of the app) to `Arcana.sol` main logic contract |
| `NodeList.sol` | Core System | Keeps track of ADKG nodes and their epochs.|

## Contract Details

### `Arcana.sol`

`Arcana.sol` contract is the most important core system contract for the {{config.extra.arcana.product_name}} protocol. It manages the UI configuration that controls the user experience for signing blockchain transactions. In future releases, this contract will also manage the decentralized data store functionality for providing app user data privacy and access control.

It is a beacon proxy type of upgradable smart contract. `Arcana.sol` shares some metadata with other contracts via pass-through data mechanisms. No app user file data is stored on this smart contract. 

### `Factory.sol`

When a new app chooses to register with {{config.extra.arcana.company_name}}, the {{config.extra.arcana.company_name}} factory smart contract is activated. This is a singleton, UUPS proxy type upgradable contract that implements the core system logic for generating per app specific ‘proxy’ contracts called BeaconProxy.sol.

### `BeaconProxy.sol`

At the time of app registration using the {{config.extra.arcana.dashboard_name}}, each app is associated with its own proxy upgradable smart contract called the BeaconProxy. The BeaconProxy is deployed by {{config.extra.arcana.company_name}} Factory.sol contract. Every BeaconProxy contract points to the latest version of `Arcana.sol` protocol. This is ensured by the `ArcanaBeacon.sol` contract.

### `ArcanaBeacon.sol`

ArcanaBeacon smart contract points to the latest version of {{config.extra.arcana.product_name}} core system logic contract. It could be V1 or V2 or Vn. It is a UUPS proxy upgradable smart contract. The sole purpose of this contract is to ensure that {{config.extra.arcana.product_name}} Protocol is upgradeable.

### `Forwarder.sol`

This UUPS proxy upgradable smart contract is used to manage the meta transactions.  A meta transaction is a regular Ethereum transaction that contains another transaction, the actual transaction.  Meta transactions are a means of delegating payment of gas fees to an external entity such as the {{config.extra.arcana.company_name}} Gateway. They are meant to facilitate the onboarding of first-time app users. {{config.extra.arcana.company_name}} Gateway component uses meta-transactions to implement the A{{config.extra.arcana.product_name}}related data and access operations. The {{config.extra.arcana.company_name}} Gateway module handles all the meta transactions. 

The forwarder smart contract is used in the context of meta transactions, together with an ERC-2771 compatible contract.  It forwards blockchain transaction calls from the Gateway, made on behalf of the app user  (proxy blockchain transactions) to the core system contract, `Arcana.sol``. 

### `NodeList.sol`

`NodeList.sol` contract is the key to managing the {{config.extra.arcana.product_name}} DKG protocol. It keeps track of public information related to ADKG nodes and the epoch details. Besides these, it manages the buffer size for controlling the number of ‘pre-generated’ keys and the information regarding whitelisting of validator nodes.

## Contract Flows

The interactions between various {{config.extra.arcana.company_name}} smart contracts to implement the logic for the {{config.extra.arcana.product_name}} protocol is captured by the following two workflows: 

1. Data access flow
2. New app registration flow

### Data Access Flow 

![Arcana Data Access Flow]({{config.extra.arcana.img_dir}}/diagrams/d_an_sc_stg_flow_light.{{config.extra.arcana.img_svg}}#only-light)
![Arcana Data Access Flow]({{config.extra.arcana.img_dir}}/diagrams/d_an_sc_stg_flow_dark.{{config.extra.arcana.img_svg}}#only-dark)

* All app user operation-related calls made via the client-side {{config.extra.arcana.sdk_name}} are intercepted by the {{config.extra.arcana.company_name}} Gateway.

* The Gateway executes meta transactions with relevant data and signatures.

* Forwarder forwards the transaction via the per-app `BeaconProxy.sol` smart contract. 

* The BeaconProxy requests the current {{config.extra.arcana.company_name}} core system contract, `Arcana.sol`, from the `ArcanaBeacon.sol` contract.

* After receiving the address of the latest {{config.extra.arcana.company_name}} core system contract from the `ArcanaBeacon` contract,  the BeaconProxy delegates the forwarded call to the {{config.extra.arcana.company_name}} system contract.

* {{config.extra.arcana.company_name}} contract actually executes the transaction.

### New App Registration Flow

![New app Registration Flow]({{config.extra.arcana.img_dir}}/diagrams/d_an_sc_newdapp_flow_light.{{config.extra.arcana.img_png}}#only-light)
![New app Registration Flow]({{config.extra.arcana.img_dir}}/diagrams/d_an_sc_newdapp_flow_dark.{{config.extra.arcana.img_png}}#only-dark)

* When a new app is registered at the {{config.extra.arcana.dashboard_name}}, it interacts with the {{config.extra.arcana.company_name}} Gateway to initialize the program state of the app.
* The `Factory.sol` smart contract is invoked to create a new `BeaconProxy.sol` contract that is solely associated with this newly registered app. Each app has its own BeaconProxy contract deployed.

* The `BeaconProxy.sol` contract stores the per-app data related to the program state.

* The BeaconProxy communicates with the `ArcanaBeacon` contract to obtain the address of the latest {{config.extra.arcana.company_name}} core system contract. This ensures that each app contract knows and utilizes the latest supported {{config.extra.arcana.product_name}} protocol.
