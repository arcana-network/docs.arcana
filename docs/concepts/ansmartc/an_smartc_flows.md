---
slug: /ansmartcflows
id: idansmartcflows
sidebar_custom_props:
  cardIcon: ▶️
---

# {{config.extra.arcana.company_name}} Contract Flows

The interactions between various {{config.extra.arcana.company_name}} smart contracts to implement the logic for the {{config.extra.arcana.product_name}} protocol is captured by the following two workflows: 

1. Data access flow
2. New app registration flow

## Data Access Flow 

![Arcana Data Access Flow](/img/diagrams/d_an_sc_stg_flow_light.svg#only-light)
![Arcana Data Access Flow](/img/diagrams/d_an_sc_stg_flow_dark.svg#only-dark)

* All app user operation-related calls made via the client-side {{config.extra.arcana.sdk_name}} are intercepted by the {{config.extra.arcana.company_name}} Gateway.

* The Gateway executes meta transactions with relevant data and signatures.

* Forwarder forwards the transaction via the per-app `BeaconProxy.sol` smart contract. 

* The BeaconProxy requests the current {{config.extra.arcana.company_name}} core system contract, `Arcana.sol`, from the `ArcanaBeacon.sol` contract.

* After receiving the address of the latest {{config.extra.arcana.company_name}} core system contract from the `ArcanaBeacon` contract,  the BeaconProxy delegates the forwarded call to the {{config.extra.arcana.company_name}} system contract.

* {{config.extra.arcana.compay_name}} contract actually executes the transaction.

## New App Registration Flow

![New app Registration Flow](/img/diagrams/d_an_sc_newdapp_flow_light.png#only-light)
![New app Registration Flow](/img/diagrams/d_an_sc_newdapp_flow_dark.png#only-dark)

* When a new app is registered at the {{config.extra.arcana.dashboard_name}}, it interacts with the {{config.extra.arcana.company_name}} Gateway to initialize the program state of the app.
* The `Factory.sol` smart contract is invoked to create a new `BeaconProxy.sol` contract that is solely associated with this newly registered app. Each app has its own BeaconProxy contract deployed.

* The `BeaconProxy.sol` contract stores the per-app data related to the program state.

* The BeaconProxy communicates with the `ArcanaBeacon` contract to obtain the address of the latest {{config.extra.arcana.company_name}} core system contract. This ensures that each app contract knows and utilizes the latest supported {{config.extra.arcana.product_name}} protocol.
