---
alias: introduction
title: 'Overview'
description: 'Introducing Arcana Auth SDK.'
arcana:
  root_rel_path: ..
---

# Overview

**{{config.extra.arcana.company_name}}** offers **{{config.extra.arcana.auth_sdk}}** that integrates with Web3 apps to enable user onboarding via [[concept-social-login|social login]]. It allows authenticated users to sign blockchain transactions through the in-app, embedded, non-custodial {{config.extra.arcana.wallet_name}}.

## Get Started

=== "Register App"

    ```mermaid
    flowchart LR
        subgraph Register [1.Register App]
        direction LR
          A0(((Step 1))) --> B0([Dashboard])
          B0 --> C0[Register App] --> E0[Client ID] 
          C0 -- Configure App --> D0[SDK Settings]   
        end

    classDef an-pink stroke:#ff4e9f,stroke-width:0.25rem;
    class E0 an-pink
    ```

=== "Install & Integrate"
    ```mermaid
    flowchart LR
        subgraph Integrate [2.Integrate SDK with App]
        direction LR
          A00(((Step 2))) --> F00[Install SDK]
          F00 -- Integrate App --> G00[Initialize SDK]
          E00[ClientID] --> G00
          G00 --> H00(Call SDK Fns)
        end

    classDef an-pink stroke:#ff4e9f,stroke-width:0.25rem;
    class E00 an-pink
    ```

## Usage

=== "{{config.extra.arcana.sdk_name}}"

    ```mermaid

    flowchart LR 
        subgraph Step1 [{{config.extra.arcana.sdk_name}} Usage]
        direction LR
            A1(((Start))) -- 1.Register App --> B1(Dashboard Login)
            B1  --> C1[Get Client ID] --> E1
            A1 -- 2.Integrate App --> D1[Install Auth SDK] --> E1[Initialize <code>AuthProvider</code>] --> F1[Social Login Fns]
            E1 --> G1[Web3 Wallet Ops]
        end

    classDef an-pink stroke:#ff4e9f,stroke-width:0.25rem;
    class C1 an-pink
    ```

    **Key Features**

    * Onboard users quickly, at scale, via popular [[web3-stack-auth|social login providers]]. 
    * Provide instant access to use the in-app, non-custodial {{config.extra.arcana.wallet_name}}. 
    * Easy to customize and integrate with various [[sdk-installation|Web3 app types]].

    {% include "./text-snippets/warn_latest_sdk_version.md" %}


## See Also

* [[index-wallet-user-guide|Wallet User Guide]]
* [[dashboard-user-guide|Dashboard User Guide]]
* [[concept-authsdk|Auth SDK]]