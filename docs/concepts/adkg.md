---
alias: concept-adkg
title: 'ADKG'
description: 'Asynchronous Distributed Key Generation'
arcana:
  root_rel_path: ..
---

# ADKG

Asynchronous Distributed Key Generation (ADKG) is a cryptographic protocol that enables multiple parties to cooperatively generate a public-private key pair without requiring a trusted third party or any form of synchronization between the parties.

In ADKG, each party generates a partial private key and broadcasts it to the other parties, who use these partial private keys to collaboratively derive the final private key. The final private key is then used to generate a public key, which can be used for secure communication.

<figure markdown="span">
  <img alt="ADKG concept" src="{{config.extra.arcana.img_dir}}/diagrams/d_concept_adkg_light.{{config.extra.arcana.img_png}}#only-light" class="an-screenshots-noeffects width_50pc"/>
  <img alt="ADKG concept" src="{{config.extra.arcana.img_dir}}/diagrams/d_concept_adkg_dark.{{config.extra.arcana.img_png}}#only-dark" class="an-screenshots-noeffects width_50pc"/>
  <figcaption>Asynchronous Distributed Key Generation (ADKG)</figcaption>
</figure>

*[Reference: ADKG Paper](https://eprint.iacr.org/2022/1389.pdf)*

The main benefit of ADKG over traditional key generation methods is that it allows multiple parties to securely and collaboratively generate a shared key without the need for a trusted third party or a synchronized communication channel. This can be particularly useful in scenarios where the parties involved are geographically dispersed or have limited connectivity, making traditional key generation methods impractical. Additionally, because ADKG relies on distributed trust, it can be more resistant to attacks and compromise than traditional methods that rely on a single centralized authority.

## Using ADKG for Web3 Keys

Web3 blockchain transactions need user signing or approval before they can be processed. To sign transactions, users need cryptographic secrets or keys. This is where ADKG is applied. 

The {{config.extra.arcana.product_name}} implements an asynchronous distributed key generation subsystem for efficiently and securely generating key shares for authenticated Web3 app users. The {{config.extra.arcana.sdk_name}} allows authenticated users to access key shares and generate their keys securely on the client side in the context of the Web3 app. Users do not need to bother about the security and privacy of their key shares and they can easily sign blockchain transactions using the embedded, non-custodial {{config.extra.arcana.wallet_name}}. 

The key shares generated through ADKG are ECDSA keys on the [secp256k1](https://www.secg.org/sec2-v2.pdf) curve and are compatible with all EVM-compatible chains. In a future release, {{config.extra.arcana.company_name}} will also support other curves and blockchains that are not EVM-compatible. Also, key regeneration and repair algorithms will be supported in the upcoming releases.

See [[concept-how-adkg-works|how the {{config.extra.arcana.product_name}} ADKG works]] for implementation details. 