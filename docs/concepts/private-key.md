---
alias: concept-private-key
title: 'Private Key'
description: 'Private key refers to the secret associated with a wallet address required for signing blockchain transactions.'
arcana:
  root_rel_path: ..
---

# Private Key 

A Private key is a secret associated with the user's {{config.extra.arcana.wallet_name}}. The private key is generated using a distributed key generator ([DKG]({{page.meta.arcana.root_rel_path}}/concepts/dkg/index.md)) component of the {{config.extra.arcana.product_name}} product. It cannot be accessed by anyone other than the user. The {{config.extra.arcana.wallet_name}} UI allows users to export their private key if they want to access their data or assets using a different wallet. However, the private key is not removed from the Arcana Network after it is exported.
