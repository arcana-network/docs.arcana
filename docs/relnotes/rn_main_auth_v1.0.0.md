---
slug: /rn_main_auth_v1_0_0
id: idrnmainauthv100
sidebar_custom_props:
  cardIcon: 🏁
arcana:
  root_rel_path: ..
---

# Release Notes Arcana Auth (Mainnet)

{==

**Version: v1.0.0**

**Release Date: February 1st, 2022**

==}

## Feature Updates 

<img src="/img/icon_new_light.png#only-light" alt="New icon" width="50" /><img src="/img/icon_new_dark.png#only-dark" alt="New icon" width="50" /><img src="/img/icons/i_an_authsdk_light.png#only-light" alt="Auth SDK icon" width="50"/><img src="/img/icons/i_an_authsdk_dark.png#only-dark" alt="Auth SDK icon" width="50" />

### Brand new look: Arcana Developer Dashboard

Check out the newly redesigned Arcana Developer Dashboard. It allows Web3 app developers to register apps with the Arcana network, and configure user onboarding and wallet settings before integrating with the Auth SDK.

### Application Configuration Profiles

Developers can now choose to deploy applications on the Arcana Testnet or the Mainnet. You can start with the default 'Testnet' app configuration profile and once the application is tested and ready to deploy, deploy it on the Arcana Mainnet.

An under-development application can be deployed on the Arcana Testnet. At the same time, a tested and stable version can be deployed on the Arcana Mainnet where user's log in and utilize the app.

![Dashboard with multiple Apps](/img/an_db_mulitiple_apps.png)

- Easily register and configure Web3 applications
- Create, delete, and manage application configurations for 'Testnet' and 'Mainnet'
    - Copy settings or create a fresh 'Mainnet' profile
    - While editing, easily toggle between 'Testnet' and 'Mainnet' configuration profiles
    - Each profile can be edited and managed independently
- A new unique **App Address** is associated with the 'Mainnet' configuration profile

    !!! note
          Do remember to use the correct App Address for integrating with the Auth SDK when you deploy your application on the Mainnet.

See [how to manage application profiles]({{page.meta.arcana.root_rel_path}}/db/config_dApp_with_db.md#manage-testnet-and-mainnet-configurations) for details. 

### App-specific and Global Keys

- Mainnet configuration settings require [configuring keyspace]({{page.meta.arcana.root_rel_path}}/db/config_dApp_with_db.md#configure-mainnet-keyspace)
- App-specific keys are the default
- Developers must submit a verification form and seek approval for enabling global keys 
- Global keys are less secure but enable simpler user experience whereby users see the same wallet address across when they log into any app in the Arcana ecosystem

### Monitor Application Usage Metrics

- Both Testnet and Mainnet Usage are now tracked for monthly active users (MAU). The application dashboard screen displays usage metrics.
- 'Testnet' configuration profile screen displays Testnet usage
- 'Mainnet' configuration profile screen displays Mainnet usage
- No charges are levied for using Arcana Testnet. Billing for Arcana Mainnet usage will be calculated at the end of every month.
  
See [Arcana Developer Dashboard User Guide]({{page.meta.arcana.root_rel_path}}/db/config_dApp_with_db.md#monitor-usage) for details.

![Dashboard Usage Metrics](/img/an_db_usage_metrics.png)

### Wallet Enhancements 

Auto-refresh of the account balance amount is now supported.

### State-of-the-art DKG

- Secure, self-sovereign user identity management via asynchronous, distributed key generation protocol
- On the road to decentralized key generation: Two of the DKG nodes are run by Comdex and LugaNodes.

### Audits

Arcana smart contracts and ADKG subsystem have been audited by Certik. See [Audit Reports]({{page.meta.arcana.root_rel_path}}/audit/index.md) for details.

---

## Get Started

{==

*Ready to dive in?* 

==}

See [Auth SDK Quick Start Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_qs.md). 

For step-by-step instructions, see [how to integrate with Auth SDK]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) guide. 

Check out the sample dApp integration example with the Arcana SDKs for [React]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/integrate_wallet_react.md),[Vue](https://github.com/arcana-network/basic-storage-wallet-integration) dApps.

---

## Migrate to v1.0.0

Are you using an older version of the Arcana Auth SDK? Refer to the [Migration Guides]({{page.meta.arcana.root_rel_path}}/migration/index.md) and upgrade to the latest version.

---

## Questions? 

Refer to [FAQ]({{page.meta.arcana.root_rel_path}}/faq/faq_gen.md), [Troubleshooting Guide]({{page.meta.arcana.root_rel_path}}/troubleshooting.md) and other developer resources or contact [Arcana Support]({{page.meta.arcana.root_rel_path}}/support.md).
