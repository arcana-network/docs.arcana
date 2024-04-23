---
alias: concept-plug-and-play-auth
title: 'Plug & Play Auth'
description: 'Onboard Web3 app users with a single line of code via the built-in plug-and-play UI pop-up that displays various configured authentication providers.'
arcana:
  root_rel_path: ..
---

# Plug & Play Auth

In earlier beta releases, apps were required to integrate with the {{config.extra.arcana.sdk_name}} in order to onboard users with a custom login UI. For instance, the custom login UI code was required to call the `loginWithSocial('google')` method to onboard users via Google. Similarly, the passwordless login option was required to provision an email input field and call `loginWithLink` (deprecated), `loginWithOTPStart` and `loginWithOTPComplete` functions to onboard users.

Now, the latest Arcana Auth SDK offers a 'plug-and-play' feature, with a built-in login UI. Developers can choose to use custom login UI or get started faster with the built-in user onboarding via the 'plug-and-play auth' feature. 

Developers can now choose to use the [`connect`](https://authsdk-ref-guide.netlify.app/classes/authprovider#connect) method to bring up the built-in login UI, displaying [[index-configure-auth|configured onboarding options]] as setup using the [{{config.extra.arcana.dashboard_name}}]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md).

After successful authentication, users instantly access the {{config.extra.arcana.wallet_name}} for blockchain transactions. 

```mermaid
flowchart LR 
    subgraph A [Plug & Play vs. Custom Login UI]
    direction LR
        A1(((Developer))) -- 1. Register App --> B1(Dashboard Login)
        B1  --> C1[Get Client ID] --> E1[Initialize <code>AuthProvider</code>]
        A1 -- 2. Integrate App --> D1[Install Auth SDK] --> E1 --> O[Onboard Users]
    end
classDef an-pink stroke:#ff4e9f,stroke-width:0.25rem;
class F1 an-pink
```

```mermaid
flowchart LR
    subgraph B [Onboard Users]
    direction LR
        O[Onboard Users] -- Plug-and-Play Login UI--> F1[<code>connect</code>]
        O -- Custom Login UI --> P1{Provider Type} -- Social Providers --> G1[<code>loginWithSocial</code>]
        P1 -- IAM Provider Firebase --> H1[<code>loginWithBearer</code>]
    end

classDef an-pink stroke:#ff4e9f,stroke-width:0.25rem;
class F1 an-pink
```

## Compact Plug & Play UI

When using the built-in plug-and-play login UI, developers can choose to use the standard login modal or a compact one by specifying the `compact: true` setting in the `connectOptions` while instantiating the `AuthProvider`. For details, see [`AuthProvider` constructor parameters](https://authsdk-ref-guide.netlify.app/interfaces/constructorparams).

{% include "./code-snippets/auth_plugnplay_compact.md" %}

<figure markdown="span">
  <img src="{{config.extra.arcana.img_dir}}/relnote_1.0.8_compact_login.{{config.extra.arcana.img_png}}" alt="Login UI Types" class="an-screenshots-noeffects width_85pc"/>
  <figcaption>Login UI Types</figcaption>
</figure>

!!! an-tip "Arcana JWT Token"

     {% include "./text-snippets/jwt_token.md" %}
