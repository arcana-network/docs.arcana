---
slug: /rn_main_auth_v1_0_1
id: idrnmainauthv101
sidebar_custom_props:
  cardIcon: 🏁
arcana:
  root_rel_path: ..
---

# Release Notes Arcana Auth (Mainnet)

{==

**Version: v1.0.1**

**Release Date: February 10th, 2023**

==}

## Feature Updates

There are no changes in the Auth SDK Features in this release.

## Bug Fixes

In the previous release, v1.0.0 of the Auth SDK, the default setting for the `network` parameter (optional) in the `AuthProvider` constructor was 'mainnet'. 

By default, when a developer registers an application using the Arcana Developer Dashboard, only the 'Testnet' configuration profile is created. The **{{config.extra.arcana.app_address}}** available on the dashboard corresponds to Arcana Testnet. There is **no 'Mainnet' configuration profile available by default** unless the developer explicitly creates it. 

This was creating an initialization mismatch issue in cases where **developers chose to not create a 'Mainnet' configuration profile** using the Arcana Developer Dashboard but simply continue to deploy the app on Arcana Testnet. 

In this use case, the default 'Testnet' configuration settings specified via the Arcana Developer Dashboard were not compatible with the default `network` setting in the Auth SDK, which pointed to 'mainnet'.  As a result, some of the new developers were facing issues while integrating with the Auth SDK v1.0.0 as they tried to deploy the app on the Arcana Testnet. The configured social providers did not show up in the Auth UI when they created the `AuthProvider` and specified the Arcana Testnet **{{config.extra.arcana.app_address}}** without any `network` setting. This caused mismatched default `network`` value, 'mainnet', to take effect for the Auth SDK usage.

As a workaround, the developer had to override the optional parameter `network` as 'testnet' to ensure the correct functioning of the authentication feature when only the 'Testnet' configuration profile was available for a registered application.

The latest release v1.0.1 of the Auth SDK handles this use case by setting the default value of the optional `network` parameter in the `AuthProvider` constructor as 'testnet'. 

---

## Get Started

{==

*Ready to dive in?* 

==}

See [Auth SDK Quick Start Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_qs.md). 

For step-by-step instructions, see [how to integrate with Auth SDK]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) guide. 

Check out the sample dApp integration example with the Arcana SDKs for [React]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/integrate_wallet_react.md) and [Vue](https://github.com/arcana-network/basic-storage-wallet-integration) dApps.

---

## Migrate to v1.0.1

Are you using an older version of the Arcana Auth SDK? Refer to the [Migration Guides]({{page.meta.arcana.root_rel_path}}/migration/index.md) and upgrade to the latest version.

---

## Questions? 

Refer to [FAQ]({{page.meta.arcana.root_rel_path}}/faq/faq_gen.md), [Troubleshooting Guide]({{page.meta.arcana.root_rel_path}}/troubleshooting.md), and other developer resources, or contact [Arcana]({{page.meta.arcana.root_rel_path}}/support.md) Support]({{page.meta.arcana.root_rel_path}}/support.md).
