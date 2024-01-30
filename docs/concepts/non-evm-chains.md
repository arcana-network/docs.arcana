---
alias: concept-non-evm-chains
title: 'Non-EVM Chains'
description: 'Blockchain networks supported by Arcana Auth that are not EVM-compatible.'
arcana:
  root_rel_path: ..
---

# Non-EVM Chains

{{config.extra.arcana.product_name}} supports EVM-compatible chains and Solana, a non-EVM chain, with plans to add more non-EVM chains later. Some, like Solana, are part of the [[state-of-the-arcana-auth#supported-blockchains|pre-configured]] ones among the supported chains.

!!! warning "Mixing of Chain Types"

      Currently, if a developer uses the {{config.extra.arcana.dashboard_name}} and configures non-EVM blockchain networks such as Solana for the app, then other EVM-compatible blockchain networks cannot be supported in the same app.

!!! info "Solana: Web3 Wallet Ops"

      {% include "./text-snippets/solana_web3_ops.md" %}

## Adding Chains

When using non-EVM chains such as Solana, the developers and users cannot arbitrarily add any of the supported non-EVM chains in the {{config.extra.arcana.wallet_name}}. This is because, unlike the EVM-compatible chains, there is **no uniform standard across non-EVM chains**.

For details on how to add Solana and other non-EVM chains, refer to the [[dashboard-user-guide#non-evm-chains|'Non-EVM chains' section in the]] {{config.extra.arcana.dashboard_name}} User's Guide.

## Keyspace Support

Developers can tailor the user's wallet experience by using the [[concept-keyspace-type|default app-specific keys or configure global keys]] for the app via the {{config.extra.arcana.dashboard_name}}. 

When using global keys, app users will see the same wallet address or key-pair assigned to them for all the apps that are configured to use global keys. In the case of app-specific keyspace configuration, users will have unique keys assigned for every app.

## Non-EVM Key Cryptography

When using non-EVM chains such as Solana, note that the keys assigned to authenticated users are based on [ED 25519 curve](https://en.wikipedia.org/wiki/EdDSA#Ed25519).
