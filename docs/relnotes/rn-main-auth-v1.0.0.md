---
alias: rn-main-auth-v1.0.0
title: 'Release Notes Arcana Auth v1.0.0'
description: 'Arcana Auth product release details for v1.0.0. What is new, what features have been added, optimizations and performance changes, and more.'
arcana:
  root_rel_path: ..
---

# Release Notes Arcana Auth (Mainnet)

{==

**Version: v1.0.0**

**Release Date: February 1st, 2023**

==}

This release of the {{config.extra.arcana.product_name}} product consists of the following components:

* [{{config.extra.arcana.sdk_name}} v1.0.0](https://www.npmjs.com/package/@arcana/auth/v/1.0.0)
* {{config.extra.arcana.dashboard_name}}
* {{config.extra.arcana.wallet_name}} UI

## New Product Features 

---

<img src="{{config.extra.arcana.img_dir}}/icon_new_light.{{config.extra.arcana.img_png}}#only-light" alt="New icon" width="3%" /><img src="{{config.extra.arcana.img_dir}}/icon_new_dark.{{config.extra.arcana.img_png}}#only-dark" alt="New icon" width="3%" /><img src="{{config.extra.arcana.img_dir}}/icons/i_an_authsdk_light.{{config.extra.arcana.img_png}}#only-light" alt="Auth SDK icon" width="3%0"/><img src="{{config.extra.arcana.img_dir}}/icons/i_an_authsdk_dark.{{config.extra.arcana.img_png}}#only-dark" alt="Auth SDK icon" width="3%" />

### Brand new look: {{config.extra.arcana.dashboard_name}} 

Check out the newly redesigned {{config.extra.arcana.dashboard_name}}. It allows Web3 app developers to register apps with {{config.extra.arcana.company_name}} , and configure user onboarding and wallet settings before integrating with the {{config.extra.arcana.sdk_name}}.

### Application Configuration Profiles

Developers can now choose to deploy applications on the {{config.extra.arcana.company_name}} Testnet or the Mainnet. You can start with the default 'Testnet' app configuration profile and once the application is tested and ready to deploy, deploy it on the Arcana Mainnet.

An under-development application can be deployed on the {{config.extra.arcana.company_name}} Testnet. At the same time, a tested and stable version can be deployed on the {{config.extra.arcana.company_name}} Mainnet where the app users can log in and utilize the app.

<figure markdown="span">
  ![Developer Dashboard]({{config.extra.arcana.img_dir}}/an_db_mulitiple_apps.{{config.extra.arcana.img_png}}){.an-screenshots-noeffects  .width_85pc }
  <figcaption>Developer Dashboard</figcaption>
</figure>

- Easily register and configure Web3 applications
- Create, delete, and manage application configurations for 'Testnet' and 'Mainnet'
    - Copy settings or create a fresh 'Mainnet' profile
    - While editing, easily toggle between 'Testnet' and 'Mainnet' configuration profiles
    - Each profile can be edited and managed independently
- A new unique **{{config.extra.arcana.app_address}}** is associated with the 'Mainnet' configuration profile

    !!! an-note
          Do remember to use the correct {{config.extra.arcana.app_address}} for integrating with the {{config.extra.arcana.sdk_name}}when you deploy your application on the Mainnet.

See [[configure-wallet-chains|how to pre-configure wallet chains via the dashboard]] for details. 

### App-specific and Global Keys

- App-specific keys are the default, developers can configure it to [[dashboard-user-guide#configure-keyspace|global keyspace type]]
- Developers must submit a verification form and seek approval for enabling global keys 
- Global keys enable a simpler user experience whereby users see the same wallet address across when they log into any app in the {{config.extra.arcana.company_name}} ecosystem. Users must ensure that they do not sign any malicious transactions of any fraudulent app. To mitigate this risk, {{config.extra.arcana.company_name}} requires developers to submit a verification form before the global keys feature is enabled for an app.

### Monitor Application Usage Metrics

- Both Testnet and Mainnet Usage are now tracked for monthly active users (MAU). The application dashboard screen displays usage metrics.
- 'Testnet' configuration profile screen displays Testnet usage
- 'Mainnet' configuration profile screen displays Mainnet usage
- No charges are levied for using {{config.extra.arcana.company_name}} Testnet. Billing for {{config.extra.arcana.company_name}} Mainnet usage will be calculated at the end of every month.
  
See [[dashboard-user-guide#monitor-usage|{{config.extra.arcana.dashboard_name}} User Guide]] for details.

<figure markdown="span">
  ![Dashboard Usage Metrics]({{config.extra.arcana.img_dir}}/an_db_usage_metrics.{{config.extra.arcana.img_png}}){.an-screenshots-noeffects.width_85pc }
  <figcaption>Usage Metrics</figcaption>
</figure>

### Wallet Enhancements 

Auto-refresh of the account balance amount is now supported.

### State-of-the-art DKG

- Secure, self-sovereign user identity management via asynchronous, distributed key generation protocol
- On the road to decentralized key generation: Two of the DKG nodes are run by Comdex and LugaNodes.

### Audits

{{config.extra.arcana.company_name}}  smart contracts and ADKG subsystem have been audited by Certik. See {% include "./text-snippets/audit_report_url.md" %} for details.

---

## Get Started

---

{==

*Ready to dive in?* 

==}

See {{config.extra.arcana.product_name}} Quick Start Guides for details. 

Check out the sample dApp integration example for apps using React, Next.js, and [Vue](https://github.com/arcana-network/basic-storage-wallet-integration) frameworks in [auth-examples](https://github.com/arcana-network/auth-examples) repository.

## Migrate to v1.0.0

---

Are you using an older version of the {{config.extra.arcana.product_name}}? Use the [[index-migration-guides|Migration Guides]] and upgrade to the latest version.

---

## Questions? 

---

Refer to the [[faq-gen| Arcana Auth FAQ]], [Troubleshooting Guide]({{page.meta.arcana.root_rel_path}}/troubleshooting.md), and other developer resources, or contact [{{config.extra.arcana.company_name}} Support]({{page.meta.arcana.root_rel_path}}/support/index.md).
