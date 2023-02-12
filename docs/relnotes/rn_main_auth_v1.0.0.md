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

## What's New 

<img src="/img/icon_new_light.png#only-light" alt="New icon" width="50" /><img src="/img/icon_new_dark.png#only-dark" alt="New icon" width="50" /><img src="/img/icons/i_an_authsdk_light.png#only-light" alt="Auth SDK icon" width="50"/><img src="/img/icons/i_an_authsdk_dark.png#only-dark" alt="Auth SDK icon" width="50" />

### Brand new look: Arcana Developer Dashboard

Our design team has used their magic wand to spruce up the developer dashboard for better productivity.

### Application Configuration Profiles

We have made it super easy for developers to migrate their Web3 applications from Testnet to Mainnet. You can start with the default testnet profile and once the application is tested and ready to deploy, simply toggle to Mainnet settings.

![Dashboard with multiple Apps](/img/an_db_mulitiple_apps.png)

- Easily register and configure Web3 applications
- Create, delete and manage application configurations for 'Testnet' and 'Mainnet'
- Copy settings or create a fresh 'Mainnet' profile
- Toggle between 'Testnet' and 'Mainnet' easily
- Both profiles can be edited and managed independently
- A new unique **App Address** is associated with 'Mainnet' application configuration profile

    !!! note
          Do remember to use the correct App Address for integrating with the Auth SDK when you deploy your application on the Mainnet.

See [manage application profiles]({{page.meta.arcana.root_rel_path}}/db/config_dApp_with_db.md#manage-testnet-and-mainnet-configurations) for details. 

### App-specific and Global Keys

- Mainnet configuration settings requires [configuring keyspace]({{page.meta.arcana.root_rel_path}}/db/config_dApp_with_db.md#configure-mainnet-keyspace)
- App-specific keys are the default
- Global keys require submitting a verification form and approval
- Global keys are less secure but allow user experience of same wallet address across apps in the Arcana ecosystem

### Monitor Application Usage Metrics

- Usage tracking per application is now enabled. Application dashboard screen displays usage metrics.
- Monthly Active Users (MAU) is calculated for every unique user that logs in to an application during the month.
- Billing for 'Mainnet' use will be calculated at the end of every month.
  
See [Arcana Developer Dashboard User Guide]({{page.meta.arcana.root_rel_path}}/db/config_dApp_with_db.md#monitor-usage) for details.

![Dashboard Usage Metrics](/img/an_db_usage_metrics.png)

### Wallet Enhancements 

- Auto-refresh of balance amount is now supported

### State-of-the-art DKG

- Secure, self-sovereign user identity management via asynchronous, distributed key generation protocol
- Decentralized: Two of the DKG nodes are run by Comdex and LugaNodes.

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

## Questions? 

Refer to [FAQ]({{page.meta.arcana.root_rel_path}}/faq/faq_gen.md), [Troubleshooting Guide]({{page.meta.arcana.root_rel_path}}/troubleshooting.md) and other developer resources or contact [Arcana Support]({{page.meta.arcana.root_rel_path}}/support.md).
