---
slug: /howdkgworks
id: idhowdkgworks
sidebar_custom_props:
  cardIcon: ▶️
description: How decentralized key generation works in the Arcana Network.
arcana:
  root_rel_path: ..
---

# How does DKG work?

<img src="/img/icons/i_dkg_light.png#only-light" width="50"/>
<img src="/img/icons/i_dkg_dark.png#only-dark" width="50"/>

Web3 blockchain transactions need user signing or approval before they can be processed. To sign transactions, users need secrets or keys. Arcana's DKG uses Shamir's secret sharing scheme[^1] to create and manage a decentralized, secure key infrastructure for users.

### Shamir's Secret Sharing (SSS)

The Arcana Network protocol uses the Asynchronous Verifiable Secret Sharing model, based on Shamir's Secret Sharing (SSS) approach[^1]. SSS is a way to store sensitive information, like private keys, in a distributed manner so that no one node has access to the whole key and a threshold number of nodes are required to reconstruct it. This prevents a single point of failure, such as if the node storing the key is compromised or becomes malicious. SSS was one of the first secret-sharing models proposed, and it allows a private key to be shared with a group of participants and reconstructed when a threshold number of participants present their shares. 

Shamir's secret sharing is based on the idea that $n + 1$ points are needed to reconstruct a polynomial of degree $n$. For example, two points are needed to reconstruct a line. SSS generates a polynomial of degree $t$ and uses the point where it intercepts the y-axis as the secret. Each participant is given the coordinates of a point on this polynomial (there are $m$ participants, where $t < m$). To reconstruct the polynomial and the secret (by finding the y-intercept of the reconstructed polynomial), $t$ shares from participants are needed. Once $t$ points on the polynomial are obtained, Lagrange Interpolation can be used to reconstruct the polynomial.

#### SSS Limitations

One drawback of SSS is that participants cannot verify if their shares are correct or if they are being lied to by the dealer. Verifiable Secret Sharing was developed to address this issue. In this model, participants share and complain to confirm that all shares are valid. If a participant finds that a share is invalid, they can raise a complaint.

Verifiable Secret Sharing assumes that participating nodes can communicate synchronously, but this assumption has practical problems. It's not possible to maintain a global clock that is consistently in sync for all participants in systems distributed over a large area. Even if there are phases where participants can synchronously send signals, delays in sending messages between phases will cause participants to go out of sync and break the synchronicity assumption for the entire system.

#### Using Asynchronous VSS

In the paper, *Asynchronous Verifiable Secret Sharing and Proactive Cryptosystems*[^2], Cachin et al. put forward a general & practically efficient asynchronous verifiable secret-sharing protocol. This is what has been implemented in this SDK. In AVSS, a single dealer generates and distributes bi-variate polynomials to participants, who use them to generate and store key shares. This protocol allows secrets to be shared with a message complexity of O($n^2$) and a communication complexity of O($kn^3$), where $k$ is a security parameter related to the size of the secret. The system remains secure as long as $t < n/3$. 

### Arcana's SSS Implementation

Arcana uses asynchronous distributed key generation that addresses some of the limitations of Shamir's secret-sharing scheme. When a user registers for an application, they are assigned a public-private key pair. A mapping is created between the `user identifier` assigned by the authentication protocol and the key pair. To avoid latency issues during registration, the DKG nodes generate and maintain a buffer of 200[^3] keys. When a new registration event occurs, one of these key pairs is assigned to the user. The [aggregate login]({{page.meta.arcana.root_rel_path}}/concepts/authtype/aggregatelogin.md) feature allows application users to sign in using different supported authentication mechanisms and use a single key pair account as long as the same email ID is associated with different authentication mechanisms.

[^1]: [How To Share A Secret](http://web.mit.edu/6.857/OldStuff/Fall03/ref/Shamir-HowToShareASecret.pdf)

[^2]: [Asynchronous Verifiable Secret Sharing and Proactive Cryptosystems](https://eprint.iacr.org/2002/134.pdf)

[^3]: The actual buffer size may vary in the testnet and mainnet deployments based on real-time needs.
