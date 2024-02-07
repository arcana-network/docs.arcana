---
alias: concept-non-evm-chains
title: 'Non-EVM Chains'
description: 'Blockchain networks supported by Arcana Auth that are not EVM-compatible.'
arcana:
  root_rel_path: ..
---

# Non-EVM Chains

{{config.extra.arcana.product_name}} supports both EVM-compatible chains as well as non-EVM chains such as Solana and MultiversX. Other non-EVM chains will be added in the future. 

The {{config.extra.arcana.sdk_name}} offers a selection of EVM as well as non-EVM chains as the [[state-of-the-arcana-auth#supported-blockchains|pre-configured]] blockchain networks. Once users log into an app integrated with the {{config.extra.arcana.sdk_name}}, these pre-configured chains are available out of the box to the {{config.extra.arcana.wallet_name}} users.

{% include "./text-snippets/non-evm-warning.md" %}

## Web3 Wallet Operations

The built-in, embedded, non-custodial wallet offered by the {{config.extra.arcana.sdk_name}}, the {{config.extra.arcana.wallet_name}} supports JSON/RPC calls. For non-EVM chains, the list of supported calls may vary.

### Solana

{% include "./text-snippets/solana_web3_ops.md" %}

### MultiversX

{% include "./text-snippets/mvx_web3_ops.md" %}

## Adding Chains

When a non-EVM chain is selected for an app, developers and users cannot arbitrarily add any other supported chain types (other non-EVM chains, EVM chains) in the {{config.extra.arcana.wallet_name}}. This is because there is **no uniform standard for wallet addresses across non-EVM chains** and switching chain type may cause the wallet address to change.

For details refer to the [[dashboard-user-guide#non-evm-chains|'Non-EVM chains']] section in the {{config.extra.arcana.dashboard_name}} User's Guide.

## Keyspace User Experience

Developers can tailor the user's wallet experience by using the [[concept-keyspace-type|default app-specific keys or configure global keys]] for the app via the {{config.extra.arcana.dashboard_name}}.

In the case of app-specific keyspace configuration, users will have unique keys assigned for every app irrespective of whether the app is registered for an EVM or non-EVM chain type.

For global keyspace configuration, app users will see the same wallet address across the apps that are configured to use global keys and an EVM-compatible chain.

However, apps that are configured for global keyspace and a non-EVM chain type will have a different user experience. Users will not see the same wallet address across such apps. Each non-EVM chain type will result in a different wallet address for the same user. The reason for this is the difference in the non-EVM chains cryptography algorithms.

## Non-EVM Key Cryptography

For EVM chains, authenticated user keys are based on the secp256k1 curve. If developers enable the global keys option, users will have the same wallet address. This is true only across all global keys-enabled apps that are using any supported EVM-compatible chain with {{config.extra.arcana.sdk_name}}.

Non-EVM chains use different cryptographic algorithms. Solana uses [ED 25519 curve](https://en.wikipedia.org/wiki/EdDSA#Ed25519). MultiversX uses BLS multi-signatures. Therefore, if two apps are configured for global keys, one of them using an EVM chain and the other using a non-EVM chain, or two different non-EVM chains, then users will see different wallet addresses across such apps.
