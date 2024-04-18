---
alias: concept-ansc-types
title: 'Arcana Smart Contract Types'
description: 'Learn about the various smart contracts used in implementing the Arcana Network protocol.'
arcana:
  root_rel_path: ../..
---

# Arcana Smart Contract Types

{{config.extra.arcana.product_name}} is built using various kinds of smart contracts that work together to achieve user data privacy and access control. Some of these contracts are deployed by default while others are deployed when apps register with {{config.extra.arcana.company_name}}. Upgradable proxy contract pattern is used to implement the {{config.extra.arcana.product_name}}  protocol.

## Proxy Contract Patterns

There are multiple [upgradable proxy contract](https://docs.openzeppelin.com/contracts/3.x/api/proxy#UpgradeableProxy) patterns that are available. For example, [diamond proxy](https://blog.logrocket.com/using-uups-proxy-pattern-upgrade-smart-contracts/#what-is-a-diamond-pattern), [transparent proxy](https://blog.logrocket.com/using-uups-proxy-pattern-upgrade-smart-contracts/#what-is-a-transparent-proxy-pattern), [beacon proxy](https://docs.openzeppelin.com/contracts/3.x/api/proxy#beacon), and [UUPS proxy](https://blog.logrocket.com/using-uups-proxy-pattern-upgrade-smart-contracts/#what-is-a-uups-proxy-pattern). 

{{config.extra.arcana.product_name}} uses the following proxy contract patterns:

- UUPS proxy
- Beacon proxy

<figure markdown="span">
  ![Proxy Contract Patterns]({{config.extra.arcana.img_dir}}/diagrams/d_an_proxy_pattern_light.{{config.extra.arcana.img_png}}#only-light){ .an-screenshots .width_50pc }
  ![Proxy Contract Patterns]({{config.extra.arcana.img_dir}}/diagrams/d_an_proxy_pattern_dark.{{config.extra.arcana.img_png}}#only-dark){ .an-screenshots .width_50pc }
  <figcaption>Proxy Contract Patterns</figcaption>
</figure>

## {{config.extra.arcana.company_name}} Contract Types

The smart contracts deployed as part of the {{config.extra.arcana.product_name}} product implementation belongs to two categories based on whether their primary function context is an app or the {{config.extra.arcana.product_name}} protocol in general:

1. **Core System Contracts:** These contracts are used to implement the core {{config.extra.arcana.product_name}}  protocol, and are singleton in nature. All of the system contracts implement the protocol logic but not all of them store data (program state).

2. **dApp Contracts:** These contracts are deployed per app. The deployment happens after an app is registered with the {{config.extra.arcana.dashboard_name}}. Only registered apps can integrate with the {{config.extra.arcana.sdk_name}}. 

<figure markdown="span">
  ![Arcana Contract Types]({{config.extra.arcana.img_dir}}/diagrams/d_an_contract_types_light.{{config.extra.arcana.img_png}}#only-light){ .an-screenshots .width_50pc }
  ![Arcana Contract Types]({{config.extra.arcana.img_dir}}/diagrams/d_an_contract_types_dark.{{config.extra.arcana.img_png}}#only-dark){ .an-screenshots .width_50pc }
  <figcaption>Arcana Contract Types</figcaption>
</figure>

<!---

:::note

None of the {{config.extra.arcana.company_name}} smart contracts store any app user data.  All app user data resides in the distributed, decentralized {{config.extra.arcana.company_name}}  Store in a geographical region configured by the app. Uploading, downloading, and accessing data residing in the {{config.extra.arcana.company_name}}  Store requires interaction with {{config.extra.arcana.company_name}}  smart contracts and other platform components.

:::

--->
