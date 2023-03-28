---
slug: /ansmartcdeployed
id: idansmartcdeployed
sidebar_custom_props:
  cardIcon: ▶️
---

# Deployed Contracts

The following table lists each {{config.extra.arcana.company_name}} smart contract, its type, category, and purpose.


|{{config.extra.arcana.company_name}} Contract | Type/Category | Purpose |
|:---| :--- | :------------|
| `Arcana.sol` [V1 or V2] | Beacon Proxy/Core System |  Main logic contract for {{config.extra.arcana.company_name}} Store operations primarily associated with managing user data privacy and access control. |
| `Factory.sol` | UUPS Proxy/Core System | Smart contract generator per app that registers with {{config.extra.arcana.company_name}}|
| `ArcanaBeacon.sol` | UUPS Proxy/Core System | Smart contract to manage the per app association between the latest `Arcana.sol` main logic contract and the app |
| `BeaconProxy.sol` | Beacon Proxy/dApp | This is a per app smart contract that stores the data related to the program state. It interacts with `ArcanaBeacon.sol` smart contract to refer to the latest {{config.extra.arcana.product_name}} product core logic contract. |
| `Forwarder.sol` | UUPS Proxy/Core System | Manages meta transactions for app users. Forwards Gateway proxy calls (on behalf of the app) to `Arcana.sol` main logic contract |
| `NodeList.sol` | Core System | Keeps track of ADKG nodes and their epochs.|
