---
alias: concept-plug-and-play-auth
title: 'Plug & Play Auth'
description: 'Onboard Web3 app users with a single line of code via the built-in plug-and-play UI pop-up that displays various configured authentication providers.'
arcana:
  root_rel_path: ..
---

# Plug & Play Auth

Plug & Play Auth is the default login UI in {{config.extra.arcana.sdk_name}}. Web3 apps can use the [`connect`](https://authsdk-ref-guide.netlify.app/classes/authprovider#connect) method to show this built-in UI with the configured onboarding options from [{{config.extra.arcana.dashboard_name}}]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md).  Developers can use this ready-made UI instead of creating a [[concept-custom-login-ui|custom login UI]].

<figure markdown="span">
  <img src="{{config.extra.arcana.img_dir}}/an_pnp_login.{{config.extra.arcana.img_png}}" alt="Plug and Play Login UI" class="an-screenshots-noeffects width_35pc"/>
  <figcaption>Plug & Play Login UI</figcaption>
</figure>

```mermaid
flowchart LR 
    subgraph A [Plug & Play vs. Custom Login UI]
    direction LR
        A1(((Developer))) -- 1.Register App --> B1(Dashboard Login)
        B1  --> C1[Get Client ID] --> E1[Initialize <code>AuthProvider</code>]
        A1 -- 2.Integrate App --> D1[Install Auth SDK] --> E1 --> O[Onboard Users]
    end
classDef an-highlight stroke:#3169b3,stroke-width:0.25rem;
class F1 an-highlight
```

```mermaid
flowchart LR
    subgraph B [Onboard Users]
    direction LR
        O[Onboard Users] -- Plug-and-Play Login UI--> F1[<code>connect</code>]
        O -- Custom Login UI --> P1{Provider Type} -- Social Providers --> G1[<code>loginWithSocial</code>]
        P1 -- IAM Provider Firebase --> H1[<code>loginWithBearer</code>]
    end

classDef an-highlight stroke:#3169b3,stroke-width:0.25rem;
class F1 an-highlight
```

## Compact Modal

The built-in plug-and-play login UI includes a compact modal and a normal-sized modal. Choose the compact modal by setting `compact: true` in `connectOptions` when instantiating `AuthProvider`. For more details, see [`AuthProvider` constructor parameters](https://authsdk-ref-guide.netlify.app/interfaces/constructorparams).

{% include "./code-snippets/auth_plugnplay_compact.md" %}

<figure markdown="span">
  <img src="{{config.extra.arcana.img_dir}}/relnote_1.0.8_compact_login.{{config.extra.arcana.img_png}}" alt="Login UI Types" class="an-screenshots-noeffects width_85pc"/>
  <figcaption>Plug & Play Login UI Types</figcaption>
</figure>

{% include "./text-snippets/jwt_token.md" %}
