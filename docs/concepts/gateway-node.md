---
alias: concept-gateway-node
title: 'Gateway node'
description: "Gateway communicates with the Arcana Developer Dashboard, the ADKG subsystem and the blockchain. Developers don't interact with it directly."
arcana:
  root_rel_path: ..
---

# Gateway Node

The gateway node is an important part of the {{config.extra.arcana.product_name}} blockchain protocol. It enables gasless transactions for the Web3 apps that register with {{config.extra.arcana.company_name}} through the {{config.extra.arcana.dashboard_name}} and integrate with the {{config.extra.arcana.sdk_name}}. The gateway node manages app configuration for using the {{config.extra.arcana.sdk_name}} and forwards blockchain requests from Web3 apps to the {{config.extra.arcana.product_name}} blockchain protocol. After a user authenticates and approves a transaction, the gateway node parses and sends it to the {{config.extra.arcana.company_name}} blockchain as a meta-transaction. A [meta transaction](http://www.arcana.network/blog/a-quick-guide-to-understand-meta-transactions) includes the actual initial transaction. Using this approach, signers don't have to pay transaction fees and the gateway node handles payment management.
