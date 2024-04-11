---
alias: concept-arcana-auth
title: 'Web3 Authentication'
description: 'What is Web3 authentication and how is it different from Web2. Arcana Auth provides decentralized authentication to Web3 app developers.'
arcana:
  root_rel_path: ../..
---

# Web3 Authentication

Web3 authentication is complex. Users need private keys for blockchain interactions. Managing keys is hard, and there is no central authority for recovery if a key is lost. Web3 wallets are a new concept and burdensome for Web2 users. This challenges onboarding compared to Web2 apps.

**The [{{config.extra.arcana.sdk_name}}]({{page.meta.arcana.root_rel_path}}/concepts/authsdk.md) simplifies Web3 onboarding, letting users sign transactions securely without complex key management.** 

## Authentication Mechanisms

Web3 app developers can easily authenticate users by integrating with the {{config.extra.arcana.sdk_name}}. They can choose to use the built-in [[concept-plug-and-play-auth|plug-and-play login UI]] or use a custom login UI to onboard app users. One or more authentication mechanisms can be enabled by using the {{config.extra.arcana.dashboard_name}}. Only the configured authentication mechanisms are displayed in the login UI.

The following authentication mechanisms are supported:

* [Social Providers]({{page.meta.arcana.root_rel_path}}/concepts/authtype/socialauth.md)
* [Custom IAM Providers]({{page.meta.arcana.root_rel_path}}/concepts/authtype/customauth.md)
* [Passwordless Login]({{page.meta.arcana.root_rel_path}}/concepts/authtype/pwdless.md)

!!! an-note "Passwordless Login"

      Passwordless login is enabled by default for all apps that integrate with the {{config.extra.arcana.sdk_name}}. There is no way to disable it when using the built-in, plug and play login UI.

!!! an-note "Associating Web3 Keys with Authenticated Users"

    The {{config.extra.arcana.sdk_name}} works with the asynchronous distributed key generation subsystem in the {{config.extra.arcana.product_name}} product. It ensures that an authenticated user's social identifier is mapped to the public key at the very first successful login after verifying the JWT token returned by the authentication provider. For every successive login to the app, this mapping is used to return the correct key shares to the authenticated user. User's private key is generated using a subset of key shares on the client side in a secure manner. For additional security, app users can use MFA that adds additional factor for local key generation. For details, see [[faq-auth|user key privacy]] and [[concept-mfa|MFA]].