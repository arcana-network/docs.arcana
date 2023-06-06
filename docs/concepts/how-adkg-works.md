---
alias: concept-how-adkg-works
title: 'How does ADKG work?'
description: 'How asynchronous distributed key generation works in the Arcana Network.'
arcana:
  root_rel_path: ..
---

# How does ADKG work?

<img src="/img/icons/i_dkg_light.png#only-light" width="50"/>
<img src="/img/icons/i_dkg_dark.png#only-dark" width="50"/>

Web3 blockchain transactions need user signing or approval before they can be processed. To sign transactions, users need secrets or keys. Arcana Network uses ADKG algorithms for securely generating key shares and enabling authenticated users to sign blockchain transactions easily.

Arcana Network implements the [Practical Asynchronous Distributed Key Generation](https://eprint.iacr.org/2021/1591.pdf) protocol for generating non-custodial keys meant for the SDK users that can be used to sign blockchain transactions. Our implementation is used for non-custodial key pair generation and onboard the Web3 app users to sign blockchain transactions. It is a simple and effective mechanism that ensures no single node has access to the user’s key ensuring security and robustness.

## How is ADKG better?

Earlier, the Arcana Network protocol used DKG with a trusted dealer mechanism which had its shortcomings such as:

- Dealer has access to all keys as they are the ones generating the keys.
- Regeneration of lost shares by a node going down or exiting the network was not automated

The new ADKG implementation is more robust than Arcana Network’s previous DKG implementation as it does not involve any trusted dealer or a third party.

Also, unlike the other synchronous DKG protocol models, ADKG protocol is immune to any underlying synchronous network assumptions. By asynchronous network, we mean a network where the presence of a malicious adversary can corrupt a threshold of nodes and delay message sharing but must eventually deliver all messages sent between honest nodes.

## Assumptions

The ADKG protocol works under the assumption that in an asynchronous network of `n ≥ 3t + 1` nodes, where at most `t` nodes could be malicious.

The protocol can achieve an expected communication cost of O(`κ`n$^3$ ) and terminates in expected O(log n) rounds. Here `κ` is the security parameter. For example, if a collision-resistant hash function is used, in that case, `κ` denotes the size of the hash function's output.

## Implementation Notes

ADKG requires a set of at least 4 connected nodes at a minimum for accommodating a maximum of 1 malicious node.

At a very high level, the protocol requires each node to **independently generate secrets** and then share a part of that secret with the other nodes. Each node then **shares a proposed set of key shares** with other nodes. Asynchronous Binary Agreement (ABA) **voting** is done by the nodes for each proposed set. Only the accepted and agreed-upon set is used to derive the key shares and then those key shares are combined to **arrive at the final key pair**. None of the nodes have full access to the secret key.

<img alt="How ADKG works" src="/img/diagrams/d_concept_how_adkg_works_light.png#only-light"/>
<img alt="How ADKG works" src="/img/diagrams/d_concept_how_adkg_works_dark.png#only-dark"/>

There are four key phases in the ADKG protocol:

1. Asynchronous Complete Secret Sharing (ACSS)
2. Keyset Proposal Broadcast Phase
3. Asynchronous Binary Agreement (ABA)
4. Key Derivation Phase

For more details on each of these ADKG phases, see [here](https://www.notion.so/arcananetwork/ADKG-Implementation-Note-c3ea5a7dd16a451e927dbc0c38707ec2?pvs=4)