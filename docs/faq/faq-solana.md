---
alias: faq-solana
title: 'FAQ: Solana Chain Support'
description: 'Frequently asked questions about using the Solana Chain (non-EVM) in an app integrated with the Arcana Auth SDK.'
arcana:
  root_rel_path: ..
toc_depth: 2
---

# Using Solana

## Configuration

---

??? an-faq "Is Solana the only non-EVM chain supported by the {{config.extra.arcana.product_name}} product?"

      Currently, yes. More coming soon!

??? an-faq "Can a developer choose to use some EVM-compatible chains along with Solana in an app?"

      No. Either EVM-compatible chain type or Solana (non-EVM-compatible chain type) chains can be used at a time in an app.  When a user logs into an app that is enabled for Solana the keys (wallet address) are different from the one assigned to the same user when EVM-compatible chain is selected.

## Keys

??? an-faq "Why are the Solana keys different from EVM-compatible chains?"

      The cryptographic keys used by Solana are based on [ED 25519 curve](https://en.wikipedia.org/wiki/EdDSA#Ed25519). This is different from the [secp256k1](https://www.secg.org/sec2-v2.pdf) curve used for EVM-compatible chains.