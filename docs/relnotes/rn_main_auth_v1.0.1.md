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

In the previous release, v1.0.0 of the Auth SDK, the default setting for `network` parameter (optional) in the `AuthProvider` constructor was 'mainnet'. But the Dashboard default setting was configured for 'testnet'. This was creating initialization issue whereby the dashboard configuration setting for Auth SDK usage was not corresponding to the default usage setting in the Auth SDK.  As a result, some of the new developers were facing issues in integrating with the social providers as the wallet UI would fail to display the correct configuration settings for onboarding the user.

As a workaround, the developer had to override the optional parameter `network` as 'testnet' to ensure correct functioning of the authentication feature.

The latest release v{% include "./text-snippets/latest_auth_sdk.md" %} of the Auth SDK fixes this issue.  Now, by default, the Auth SDK sets `network` parameter (optional) in the `AuthProvider` constructor as 'testnet'. If the user does not specify this parameter during `AuthProvider` creation, 'testnet' is selected.  This setting corresponds to the default dashboard configuration setting 'testnet' and the social authentication works as configured.

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
