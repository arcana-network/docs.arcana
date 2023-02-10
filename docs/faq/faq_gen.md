---
slug: /faq_gen
id: idfaqgen
title: General
sidebar_custom_props:
  cardIcon: 🙋
arcana:
  root_rel_path: ..
toc_depth: 2
---

# General

Frequently asked questions about Arcana Auth SDK usage.

## Integration

---

??? an-faq "How can developers enable Arcana Auth features in their Web3 applications?"
      Simply integrate your application with Arcana's client side SDK. It requires developers to configure Auth SDK usage settings using the Arcana Developer Dashboard before actually integrating the application.
      
??? an-faq "How can developers enable Arcana wallet in the context of their Web3 applications?"

      Simply configure your application settings using Arcana Dashboard and then integrate your application with the Arcana Auth SDK. Use SDK functions to onboard users and allow authenticated users to sign blockchain transactions. The Arcana wallet is enabled for all authenticated users. Developers can control whether it is always visible to the logged in users or shows up only when a blockchain transaction is triggered.

## Application Frameworks

---

??? an-faq "Does Auth SDK support Web3 application frameworks such as React, Vue?"

      Yes. You can integrate Arcana Auth SDK with any vanilla JS application or one that uses React, NextJS, Vue, and Remix. See [how to integrate Auth SDK]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) section in documentation.

## Wallet Connectors

---

### If an application uses wallet connector frameworks such as Wagmi or RainbowKit, can Arcana wallet be plugged into those wallet connectors?

Yes. Applications using Wagmi or RainbowKit can simply use the Auth SDK wrapper, 'Auth-wagmi' and enable Arcana wallet as one of the choices for application users besides the built-in wallets that are available with the wallet connect frameworks.

For more details, see [using Auth Wagmi Wallet Connector]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/integrate_wagmi.md) and [using RainbowKit Wallet Connector]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/integrate_rainbow.md).

## User Onboarding

---

??? an-faq "How do I enable the Web2 social authentication experience in my dApp to onboard new users?"

      You can enable one or more social authentication mechanisms in your dApp by configuring Auth settings using the dashboard and integrating with Arcana Auth SDK. For details, see [how to enable Google authentication Guide]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/build_social/wallet_google_oauth.md).

??? an-faq "How do I enable passwordless login in my dApp to easily onboard new users?"

      You can enable a passwordless login mechanism to onboard dApp users by simply calling the [`loginWithLink` API](https://authsdk-ref-guide.netlify.app/classes/authprovider#loginWithLink) in your dApp after integrating with the Arcana Auth SDK. For details, see [how to enable passwordless authentication Guide]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/wallet_pwdless_login.md).