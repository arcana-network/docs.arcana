---
alias: concept-how-adkg-works
title: 'How does ADKG work?'
description: 'How asynchronous distributed key generation works in the Arcana Network.'
arcana:
  root_rel_path: ..
---

# How does ADKG work?

<img src="{{config.extra.arcana.img_dir}}/icons/i_dkg_light.{{config.extra.arcana.img_png}}#only-light" width="50"/>
<img src="{{config.extra.arcana.img_dir}}/icons/i_dkg_dark.{{config.extra.arcana.img_png}}#only-dark" width="50"/>

{{config.extra.arcana.company_name}} employs ADKG algorithms to securely generate key shares, allowing authenticated users to easily sign Web3 blockchain transactions. Our implementation follows the [Practical Asynchronous Distributed Key Generation](https://eprint.iacr.org/2021/1591.pdf) protocol, providing non-custodial key pairs for SDK users to sign transactions. This approach guarantees security and robustness by preventing any single node from accessing a user's key.

## How is ADKG better?

ADKG improves upon {{config.extra.arcana.company_name}}'s previous DKG protocol by eliminating the need for a trusted dealer or third party, addressing issues such as key exposure and automating share regeneration. Unlike synchronous DKG protocols, ADKG is resilient to malicious adversaries and operates effectively in asynchronous network conditions.

## Assumptions

The ADKG protocol works under the assumption that in an asynchronous network of `n ≥ 3t + 1` nodes, where at most `t` nodes could be malicious.

The protocol can achieve an expected communication cost of O(`κ`n$^3$ ) and terminates in expected O(log n) rounds. Here `κ` is the security parameter. For example, if a collision-resistant hash function is used, in that case, `κ` denotes the size of the hash function's output.

## Implementation Notes

ADKG requires a set of at least 4 connected nodes at a minimum for accommodating a maximum of 1 malicious node.

At a very high level, the protocol requires each node to **independently generate secrets** and then share a part of that secret with the other nodes. Each node then **shares a proposed set of key shares** with other nodes. Asynchronous Binary Agreement (ABA) **voting** is done by the nodes for each proposed set. Only the accepted and agreed-upon set is used to derive the key shares and then those key shares are combined to **arrive at the final key pair**. None of the nodes have full access to the secret key.

<figure markdown="span">
  <img alt="How does ADKG work?" src="{{config.extra.arcana.img_dir}}/diagrams/d_concept_how_adkg_works_light.{{config.extra.arcana.img_png}}#only-light" class="an-screenshots with_50pc"/>
  <img alt="How does ADKG work?" src="{{config.extra.arcana.img_dir}}/diagrams/d_concept_how_adkg_works_dark.{{config.extra.arcana.img_png}}#only-dark" class="an-screenshots with_50pc"/>
  <figcaption>How does ADKG work?</figcaption>
</figure>

There are four key phases in the ADKG protocol:

1. Asynchronous Complete Secret Sharing (ACSS)
2. Keyset Proposal Broadcast Phase
3. Asynchronous Binary Agreement (ABA)
4. Key Derivation Phase

For more details on each of these ADKG phases, see [[security-adkg|here]].