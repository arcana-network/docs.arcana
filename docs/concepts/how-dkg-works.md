---
alias: concept-how-dkg-works
title: 'How does DKG work?'
description: 'How SSS distributed key generation works.'
arcana:
  root_rel_path: ..
---

# How does DKG work?

<img src="/img/icons/i_dkg_light.png#only-light" width="50"/>
<img src="/img/icons/i_dkg_dark.png#only-dark" width="50"/>

Web3 blockchain transactions need user signing or approval before they can be processed. To sign transactions, users need secrets or keys. Arcana's DKG uses Shamir's secret sharing scheme[^1] to create and manage a distributed, secure key infrastructure for users.

!!! caution  "Deprecated"

      The {{config.extra.arcana.sdk_name}} SDK no longer uses SSS algorithm for key generation. From the beta release onwards, Arcana Networks supports the new improved asynchronous distributed key generation, ADKG protocol. For details, refer to [[concept-adkg|Asynchronous Distributed Key Generation]] and [[concept-how-adkg-works|how ADKG is implemented in the Arcana Network]].

### Shamir's Secret Sharing (SSS)

Shamir's Secret Sharing (SSS) approach[^1] is used to generate cryptographic keys. SSS is a way to store sensitive information, like private keys, in a distributed manner so that no one node has access to the whole key and a threshold number of nodes are required to reconstruct it. This prevents a single point of failure, such as if the node storing the key is compromised or becomes malicious. SSS was one of the first secret-sharing models proposed, and it allows a private key to be shared with a group of participants and reconstructed when a threshold number of participants present their shares. 

Shamir's secret sharing is based on the idea that $n + 1$ points are needed to reconstruct a polynomial of degree $n$. For example, two points are needed to reconstruct a line. SSS generates a polynomial of degree $t$ and uses the point where it intercepts the y-axis as the secret. Each participant is given the coordinates of a point on this polynomial (there are $m$ participants, where $t < m$). To reconstruct the polynomial and the secret (by finding the y-intercept of the reconstructed polynomial), $t$ shares from participants are needed. Once $t$ points on the polynomial are obtained, Lagrange Interpolation can be used to reconstruct the polynomial.

#### SSS Limitations

One drawback of SSS is that participants cannot verify if their shares are correct or if they are being lied to by the dealer. The requirement of a trusted dealer is a big limitation as it is a single point of failure. Other issues with SSS include share revocation, recovery, repair and poor audit-ability.

### Arcana's SSS Implementation (Early Releases)

Until its beta release, Arcana was using SSS for distributed key generation. Some of the limitations of SSS were addressed by the verifiable secret sharing (VSS) mechanism implemented in the {{config.extra.arcana.sdk_name}}. In VSS, the participants share and complain to confirm that all shares are valid. If a participant finds that a share is invalid, they can raise a complaint.

Verifiable Secret Sharing assumes that participating nodes can communicate synchronously, but this assumption has practical problems. It's not possible to maintain a global clock that is consistently in sync for all participants in systems distributed over a large area. Even if there are phases where participants can synchronously send signals, delays in sending messages between phases will cause participants to go out of sync and break the synchronicity assumption for the entire system.

### How Keys are Secured?

When a user logs into a Web3 app that is integrated with the {{config.extra.arcana.sdk_name}}, they are assigned key shares after authentication. The key shares are assembled into the user's key pair at the client-side within the application context and {{config.extra.arcana.sdk_name}} does not have any copy of user keys or can generate it outside the context of the Web3 application. 

The {{config.extra.arcana.sdk_name}} links the user's identity to key shares through the unique email ID used to authenticate with the Web3 application. To avoid latency issues during key share assignment, the DKG nodes generate and maintain a buffer of 200[^3] keys. Arcana Network can uniquely identify a Web3 app user based on the email ID used via the authentication provider. Even if a user uses different providers, the same key is assigned to the user.  The concept of global and app-specific keys ensures that Web3 app developers can manage whether the user has the same keys across applications or unique keys per application, as per the requirements.

[^1]: [How To Share A Secret](http://web.mit.edu/6.857/OldStuff/Fall03/ref/Shamir-HowToShareASecret.pdf)

[^2]: [Asynchronous Verifiable Secret Sharing and Proactive Cryptosystems](https://eprint.iacr.org/2002/134.pdf)

[^3]: The actual buffer size may vary in the Arcana Testnet and Mainnet deployments, based on real-time needs.
