---
slug: /ansmartcdeployed
id: idansmartcdeployed
title: Deployed Contracts
sidebar_custom_props:
  cardIcon: ▶️
---

# Deployed Contracts

The following table lists each Arcana contract, its type, category, and purpose.


|Arcana Contract | Type/Category | Purpose |
|:---| :--- | :------------|
| Arcana.sol [V1 or V2] | Beacon Proxy/Core System |  Main logic contract for Arcana Store operations primarily associated with managing user data privacy and access control. |
| Factory.sol | UUPS Proxy/Core System | Smart contract generator per dApp that registers with Arcana Network|
| ArcanaBeacon.sol | UUPS Proxy/Core System | Smart contract to manage the per dApp association between the latest *Arcana.sol* main logic contract and the dApp |
| BeaconProxy.sol | Beacon Proxy/dApp | This is a per dApp smart contract that stores the data related to the program state. It interacts with ArcanaBeacon smart contract to refer to the latest Arcana core logic contract. |
| Forwarder.sol | UUPS Proxy/Core System | Manages meta transactions for dApp users. Forwards Gateway proxy calls (on behalf of dApp) to *Arcana.sol* main logic contract |
| NodeList.sol | Core System | Keeps track of ADKG nodes and their epochs.|
