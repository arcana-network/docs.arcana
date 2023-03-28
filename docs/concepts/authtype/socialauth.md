---
slug: /socialauth
id: idsocialauth
sidebar_custom_props:
  cardIcon: ▶️
arcana:
  root_rel_path: ../..
---

# Social Providers

<img src="/img/icons/i_an_socialauth_light.png#only-light" width="50"/>
<img src="/img/icons/i_an_socialauth_dark.png#only-dark" width="50"/>

Social authentication providers are popular Web2 user identity providers that allow apps to onboard users and validate the user identity. The {{config.extra.arcana.sdk_name}} supports user authentication in Web3 applications via the following social providers:

{% include "./text-snippets/auth_supported.md" %}

In Web2 applications, user authentication is typically triggered by a pop-up or via a redirect to a selected provider's web page. This is a familiar and comfortable way for users to onboard a new application without bothering to manage multiple identities. However, this is a centralized authentication system controlled by the social provider. 

In the Web3 ecosystem, distributed systems of actors use trustless protocols and cryptography to verify user identity in a decentralized manner. These systems use encrypted, key shares that are not stored with any single entity, but users are required to generate, manage and secure their secret keys. This complexity is a big barrier to entry into the Web3 app ecosystem. 

The {{config.extra.arcana.sdk_name}} lowers this barrier to entry into the Web3 app ecosystem by providing a convenient yet fully secure and privacy-preserving way for users to onboard Web3 apps and sign blockchain transactions.