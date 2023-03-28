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

## Integrating Web3 Apps

---

??? an-faq "How can developers enable the {{config.extra.arcana.product_name}} features in their Web3 applications?"

      Simply integrate the Web3 app with the {{config.extra.arcana.sdk_name}}. It requires developers to configure {{config.extra.arcana.sdk_name}} usage settings using the {{config.extra.arcana.dashboard_name}} before actually integrating the application.
      
??? an-faq "How can developers enable {{config.extra.arcana.wallet_name}} in the context of their Web3 applications?"

      First, [register the app and configure the app settings]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) using the {{config.extra.arcana.dashboard_name}}. Use the unique {{config.extra.arcana.app_address}} assigned by Arcana Network to [integrate the app]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) with the {{config.extra.arcana.sdk_name}}. Add code in the app to use the {{config.extra.arcana.sdk_name}} functions and [onboard users]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/index.md). The authenticated users can instantly access the {{config.extra.arcana.wallet_name}} in the app context and sign blockchain transactions. Developers can configure the wallet user experience with appropriate [wallet visibility settings]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/config_walletvisibility.md). It can be always visible to the authenticated users or it can be configured to show up only when a blockchain transaction is triggered.

## Application Frameworks

---

??? an-faq "Does the {{config.extra.arcana.sdk_name}} support Web3 application frameworks such as React, NextJS, Vue?"

      Yes. You can integrate the {{config.extra.arcana.sdk_name}} with any vanilla HTML/CSS/JS app or an app that uses React, NextJS, and Vue frameworks. See [how to integrate app with the {{config.extra.arcana.sdk_name}}]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md).

## Wallet Connectors

---

??? an-faq "If an application uses wallet connector frameworks such as Wagmi or RainbowKit, can the {{config.extra.arcana.wallet_name}} be plugged into those wallet connectors?"

     Yes. Applications using Wagmi or RainbowKit can simply use the {{config.extra.arcana.sdk_name}} Wagmi wrapper, `{{config.extra.arcana.wagmi_sdk_pkg_name}}` package, and enable the {{config.extra.arcana.wallet_name}} as one of the wallet choices for the app users in addition to the built-in wallets available in the wallet connect frameworks.

       For more details, see [integrating apps that use Wagmi ]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/integrate_wagmi.md), and [integrating apps that use the RainbowKit]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/integrate_rainbow.md) wallet connector.

## User Onboarding

---

??? an-faq "How do I enable the Web2-like social provider login experience in a Web3 app to onboard users?"

      First, register the app with the Arcana Network. Next, configure one or more authentication providers for onboarding app users by configuring the **Social Auth** settings using the {{config.extra.arcana.dashboard_name}}. Then integrate the app with the {{config.extra.arcana.sdk_name}} and add code to onboard users. For example, see [how to onboard users via Google]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/build_social/wallet_google_oauth.md).

??? an-faq "How do I enable passwordless login in an app to onboard new users?"

      You can enable passwordless login to onboard app users by first registering the app with Arcana Network, then integrating it with the {{config.extra.arcana.sdk_name}} and then simply calling the [`loginWithLink` function](https://authsdk-ref-guide.netlify.app/classes/authprovider#loginWithLink) in the app code to onboard users. For details, see [how to enable passwordless login]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/wallet_pwdless_login.md).