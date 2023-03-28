---
slug: /ansmartctypes
id: idansmartctypes
sidebar_custom_props:
  cardIcon: ▶️
---

# Types of Smart Contracts

{{config.extra.arcana.product_name}} uses multiple smart contracts that work together to achieve user data privacy and access control. Some of these contracts are deployed by default while others are deployed when apps register with {{config.extra.arcana.company_name}}.

{{config.extra.arcana.product_name}} uses upgradable proxy contracts to implement the {{config.extra.arcana.product_name}}  protocol.

## Proxy Contract Patterns

There are multiple [upgradable proxy contract](https://docs.openzeppelin.com/contracts/3.x/api/proxy#UpgradeableProxy) patterns that are available. For example, [diamond proxy](https://blog.logrocket.com/using-uups-proxy-pattern-upgrade-smart-contracts/#what-is-a-diamond-pattern), [transparent proxy](https://blog.logrocket.com/using-uups-proxy-pattern-upgrade-smart-contracts/#what-is-a-transparent-proxy-pattern), [beacon proxy](https://docs.openzeppelin.com/contracts/3.x/api/proxy#beacon), and [UUPS proxy](https://blog.logrocket.com/using-uups-proxy-pattern-upgrade-smart-contracts/#what-is-a-uups-proxy-pattern). 

{{config.extra.arcana.company_name}} uses the following proxy contract patterns while implementing the {{config.extra.arcana.product_name}}  protocol:

- UUPS proxy
- Beacon proxy

![Proxy Contract Patterns](/img/diagrams/d_an_proxy_pattern_light.png#only-light)
![Proxy Contract Patterns](/img/diagrams/d_an_proxy_pattern_dark.png#only-dark)

## {{config.extra.arcana.company_name}}  Contract Categories

{{config.extra.arcana.company_name}}  smart contracts can be categorized depending on whether their primary function context is an app or the {{config.extra.arcana.product_name}}  protocol as a whole. These two categories are:

1. **Core System Contracts:** These contracts are used to implement the core {{config.extra.arcana.product_name}}  protocol, and are singleton in nature. All of the system contracts implement the protocol logic but not all of them store data (program state).

2. **dApp Contracts:** These contracts are deployed per app. The deployment happens after an app is registered with the {{config.extra.arcana.dashboard_name}}. Only registered apps can integrate with the {{config.extra.arcana.sdk_name}}. 

![Proxy Contract Patterns](/img/diagrams/d_an_contract_types_light.png#only-light)
![Proxy Contract Patterns](/img/diagrams/d_an_contract_types_dark.png#only-dark)

<!---

:::note

None of the {{config.extra.arcana.company_name}} smart contracts store any app user data.  All app user data resides in the distributed, decentralized {{config.extra.arcana.company_name}}  Store in a geographical region configured by the app. Uploading, downloading, and accessing data residing in the {{config.extra.arcana.company_name}}  Store requires interaction with {{config.extra.arcana.company_name}}  smart contracts and other platform components.

:::

--->
