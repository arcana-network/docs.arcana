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

**Version: v{% include "./text-snippets/latest_auth_sdk.md" %}**

**Release Date: February 10th, 2022**

==}

## Fixes

In the previous release, v1.0.0 of the Auth SDK, the default setting for the `network` parameter (optional) in the `AuthProvider` constructor was 'mainnet'. By default, when a developer registers an application using the Arcana Developer Dashboard, only the 'Testnet' configuration profile is created. The **App Address** available on the dashboard corresponds to Arcana Testnet. There is **no** 'Mainnet' configuration profile available unless the developer explicitly creates it. 

This was creating an initialization issue in cases where developers chose to not create a 'Mainnet' configuration profile and deploy the app on Arcana Testnet. In this use case, the default 'Testnet' configuration settings for Auth SDK usage was not compatible with the default `network` setting in the Auth SDK, 'mainnet'.  As a result, some of the new developers were facing issues while integrating with the Auth SDK v1.0.0. The configured social providers did not show up in the Auth UI as the Arcana Testnet **App Address** was specified in `AuthProvider` with no explicit network setting.  When the `network` parameter was not specified, the default network 'mainnet' came into effect and that did not have any corresponding 'Mainnet' profile set up in the dashboard.

As a workaround, the developer had to override the optional parameter `network` as 'testnet' to ensure the correct functioning of the authentication feature when only the 'Testnet' configuration profile was available for a registered application.

The latest release v{% include "./text-snippets/latest_auth_sdk.md" %} of the Auth SDK handles this use case.  Now, by default, the Auth SDK sets the `network` parameter (optional) in the `AuthProvider` constructor as 'testnet'. If the developer uses the default dashboard configuration profile 'Testnet' and does not specify the `network` parameter during `AuthProvider` creation, 'testnet' is selected.  When the Auth UI comes up, it can find the corresponding 'Testnet' configuration profile and display the correct social providers for onboarding users.

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
