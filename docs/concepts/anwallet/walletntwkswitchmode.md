---
alias: concept-wallet-switch-mode
title: 'Network Switching'
description: 'Learn how users can switch the wallet network through the UI, or how developers can configure it during Auth SDK setup via the dashboard.'
arcana:
  root_rel_path: ../..
---

# Network Switching

The {{config.extra.arcana.wallet_name}} UI shows a subset of supported blockchain networks. Users can switch the active wallet network by clicking the dropdown next to the network icon in the UI. They can also add to the network list or edit the entries.

Web3 app developers can programmatically modify the pre-configured network list and set a default network during app setup via {{config.extra.arcana.dashboard_name}}. This is done using the `wallet_addEthereumChain` and `wallet_switchEthereumChain` JSON/RPC methods supported by the {{config.extra.arcana.sdk_name}}.

The `wallet_switchEthereumChain` method switches the active chain only after the user approves the network switch transaction.

{% include "./text-snippets/warn-wallet-chain-edit-persistence.md" %}

!!! an-warning "Switching Blockchain Networks"
      
      Switching chains in the wallet typically doesn’t change the wallet address when switching to another EVM-compatible chain. However, switching to a non-EVM-compatible blockchain supported by {{config.extra.arcana.sdk_name}} will assign a new set of keys and a different wallet address.

