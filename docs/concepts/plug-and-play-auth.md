---
alias: concept-plug-and-play-auth
title: 'Plug & Play Auth'
description: 'Onboard Web3 app users with a single line of code via the built-in plug-and-play UI pop-up that displays various configured authentication providers.'
arcana:
  root_rel_path: ..
---

# Plug & Play Auth

In earlier beta releases, apps were required to integrate with the {{config.extra.arcana.sdk_name}} in order to onboard users with a custom login UI. For instance, the custom login UI code was required to call the `loginWithSocial('google')` method to onboard users via Google. Similarly, the passwordless login option was required to provision an email input field and call `loginWithLink` in the SDK.

Now, the latest Arcana Auth SDK offers a 'plug-and-play' feature, with a built-in login UI, eliminating the need for custom UI code, unless preferred. This feature is referred to as 'plug-and-play auth'. 

Developers can now choose to use the [`connect`](https://authsdk-ref-guide.netlify.app/classes/authprovider#connect) method to bring up the built-in login UI, displaying [[configure-auth|configured onboarding options]] as setup using the [{{config.extra.arcana.dashboard_name}}]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md).

After successful authentication, users instantly access the {{config.extra.arcana.wallet_name}} for blockchain transactions. 

## Compact Plug & Play UI

When using the built-in plug-and-play login UI, developers can choose to use the standard login modal or a compact one by specifying the `compact: true` setting in the `connectOptions` while instantiating the `AuthProvider`. For details, see [`AuthProvider` constructor parameters](https://authsdk-ref-guide.netlify.app/interfaces/constructorparams).

{% include "./code-snippets/auth_plugnplay_compact.md" %}

<img src="/img/relnote_1.0.8_compact_login.png" alt="Compact UI login mode" class="an-screenshots-noeffects" width="85%"/>

!!! tip "Arcana JWT Token"

     {% include "./text-snippets/jwt_token.md" %}