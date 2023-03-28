---
slug: /arcanaauth
id: idarcanaauth
sidebar_custom_props:
  cardIcon: 💠
arcana:
  root_rel_path: ../..
---

# Authentication

Authentication in the Web3 ecosystem is more complex than in traditional Web2 applications. Users must have a private key to interact with the blockchain networks and cryptographic systems. This can be cumbersome for users, as generating and managing private keys can be difficult and there is no central authority for recovery if a key is lost. Web3 wallets can make this process easier, but they are a new concept for many Web2 users and managing secrets for the wallet can be an additional burden. This can make it difficult for new users to onboard Web3 applications and the onboarding experience is different from and more complex than that of Web2 applications.

**The [{{config.extra.arcana.sdk_name}}]({{page.meta.arcana.root_rel_path}}/concepts/authsdk.md) significantly reduces the barriers to Web3 user onboarding and enables authenticated app users to easily sign blockchain transactions by eliminating the need for complex key management without sacrificing security and privacy.** 

## Authentication Mechanisms

Web3 app developers can enable one or more of the supported authentication providers and onboard users.

To add user onboarding functionality, the developers can use one of the two ways to plug in the authentication provider code in the app. They can either use the default, built-in, [plug-and-play login UI]({{page.meta.arcana.root_rel_path}}/concepts/plugnplayauth.md) provided by the {{config.extra.arcana.sdk_name}} or choose to build a custom UI for user login and call the {{config.extra.arcana.sdk_name}} user onboarding functions.

The {{config.extra.arcana.sdk_name}} allows developers to configure multiple user authentication providers and onboard users. The following authentication mechanisms are supported:

* [Passwordless Login]({{page.meta.arcana.root_rel_path}}/concepts/authtype/pwdless.md)
* [Social Providers]({{page.meta.arcana.root_rel_path}}/concepts/authtype/socialauth.md)
* [Custom IAM Providers]({{page.meta.arcana.root_rel_path}}/concepts/authtype/customauth.md)

!!! note "Associating Web3 Keys with Authenticated Users"

    The {{config.extra.arcana.sdk_name}} allows developers to plug in user onboarding in the Web3 apps and enable authenticated users to sign blockchain transactions. 
      
      The [{{config.extra.arcana.wallet_name}}]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md), is part of the {{config.extra.arcana.sdk_name}} and available to all authenticated users. It is an embedded, non-custodial wallet that provides a standard Ethereum provider interface for securely enabling blockchain transactions in the context of the Web3 app. The distributed key generation protocol in the {{config.extra.arcana.product_name}} product ensures that there is no copy of user keys anywhere in the {{config.extra.arcana.product_name}} components. The key is generated locally at the user's client device once authenticated. The same is used for signing any blockchain transactions issued in the context of the authenticated app user.
