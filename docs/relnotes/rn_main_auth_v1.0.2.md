---
slug: /rn_main_auth_v1_0_2
id: idrnmainauthv102
sidebar_custom_props:
  cardIcon: 🏁
arcana:
  root_rel_path: ..
---

# Release Notes Arcana Auth (Mainnet)

{==

**Version: v{% include "./text-snippets/latest_auth_sdk.md" %}**

**Release Date: February 17th, 2022**

==}

## Feature Updates

**Fiat On-ramp Providers**

Arcana wallet supports fiat on-ramping that allows wallet users to buy cryptocurrency (native and ERC20 tokens) easily from any of the supported providers:

{% include "./text-snippets/fiat_on_ramp_providers.md" %}

**App Address -> Client ID**

Each registered Web3 app is associated with a unique Arcana Network identifier. Earlier, it was referred to as **App Address**. Now it is referred to as **{{config.extra.arcana.app_address}}** in the documentation and on the Arcana Developer Dashboard screen.

The format of the **{{config.extra.arcana.app_address}}** has also changed but it does not impact Auth SDK usage. Developers can continue to use the existing **App Address** with the new Auth SDK as well. No need to re-register the app if you were using the following Auth SDKs: 
* v1.0.1
* v1.0.0

**Minimized Wallet Widget**

The circular widget displayed when a wallet was minimized by clicking the 'x' icon on the top right of the wallet screen has changed. In the current release, the minimized wallet state is displayed in the form of a smaller widget. 

| Minimized Wallet Widget v1.0.1 | Minimized Wallet Widget v1.0.2 |
| :---: | :---:|
| <img src="/img/an_wallet_min.png" width="75"/> | <img src="/img/an_wallet_min_light.png#only-light" width="75"/> <img src="/img/an_wallet_min_dark.png#only-dark" width="75"/> |

## Bug Fixes

**Securing Localstore/Sessionstore partition**

In the previous release, the embedded wallet UI displayed for an authenticated user in the context of an application was also accessible in a different app's context, if the same tab was used to browse a different app. 

Once a user authenticates and logs in to an app, say **app A**, using a browser and then before logging out of **app A**, simply types a new app URL in the same browser tab for accessing **app B**, the user was able to access the wallet associated with **app A** in the context of **app B** without explicit sign-in into **app B**.

This issue is fixed in the current release. The user will have to log in to the new app before they can access the wallet UI.

---

## Get Started

{==

*New to Auth SDK and ready to dive in?* 

==}

See [Auth SDK Quick Start Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_qs.md). 

For step-by-step instructions, see [how to integrate with Auth SDK]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) guide. 

Check out the sample dApp integration example with the Arcana SDKs for [React]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/integrate_wallet_react.md),[Vue](https://github.com/arcana-network/basic-storage-wallet-integration) dApps.

---

## Migrate to v{% include "./text-snippets/latest_auth_sdk.md" %}

Are you using an older version of the Arcana Auth SDK? Refer to the [Migration Guides]({{page.meta.arcana.root_rel_path}}/migration/index.md) and upgrade to the latest version.

## Questions? 

Refer to [FAQ]({{page.meta.arcana.root_rel_path}}/faq/faq_gen.md), [Troubleshooting Guide]({{page.meta.arcana.root_rel_path}}/troubleshooting.md) and other developer resources or contact [Arcana Support]({{page.meta.arcana.root_rel_path}}/support.md).
