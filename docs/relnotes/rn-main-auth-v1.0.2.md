---
alias: rn-main-auth-v1.0.2
title: 'Release Notes Arcana Auth Version v1.0.2'
description: 'Arcana Auth product release details for version v1.0.2. What is new, what features have been added, optimizations and performance changes, and more.'
arcana:
  root_rel_path: ..
---

# Release Notes Arcana Auth (Mainnet)

{==

**Version: v1.0.2**

**Release Date: February 21st, 2023**

==}

This release of the {{config.extra.arcana.product_name}} product consists of the following components:

* [{{config.extra.arcana.sdk_name}} v1.0.2](https://www.npmjs.com/package/@arcana/auth/v/1.0.2)
* {{config.extra.arcana.dashboard_name}}
* {{config.extra.arcana.wallet_name}} UI

## New Product Features

---

### Fiat On-ramp Providers

{{config.extra.arcana.wallet_name}} supports fiat on-ramping that allows wallet users to buy cryptocurrency (native and ERC20 tokens) easily from any of the supported providers:

{% include "./text-snippets/fiat_on_ramp_providers.md" %}

### App Address -> Client ID

Each registered Web3 app is associated with a unique {{config.extra.arcana.company_name}} identifier. Earlier, it was referred to as **App Address**. Now it is referred to as **{{config.extra.arcana.app_address}}** in the documentation and on the {{config.extra.arcana.dashboard_name}} screen.

The format of the **{{config.extra.arcana.app_address}}** has also changed but it does not impact {{config.extra.arcana.sdk_name}} usage. Developers can continue to use the existing **App Address** with the new {{config.extra.arcana.sdk_name}}. If the app is integrated using the following {{config.extra.arcana.sdk_name}} versions, there is **no need to re-register the app**: 

* v1.0.1
* v1.0.0

If the app is using an older version of the {{config.extra.arcana.sdk_name}}, refer to the migration guide and upgrade to the latest version. 

### Minimized Wallet Widget Update

The circular widget displayed when a wallet was minimized by clicking the 'x' icon on the top right of the wallet in its maximized state has changed. In the current release, the minimized wallet state is displayed in the form of a smaller widget. 

| Minimized Wallet Widget v1.0.1 | Minimized Wallet Widget v1.0.2 |
| :---: | :---:|
| <img class="an-screenshots-noeffects" src="/img/an_wallet_min.png" width="25%"/> | <img class="an-screenshots-noeffects" src="/img/an_wallet_min_light.png#only-light" width="25%"/> <img class="an-screenshots-noeffects" src="/img/an_wallet_min_dark.png#only-dark" width="25%"/> |

### {{config.extra.arcana.sdk_name}} package additions:  Wagmi & RainbowKit support

Typical React/NextJS apps <img alt="react logo" src="/img/react_logo.png" width="2%" /> <img alt="nextjs logo" src="/img/nextjs_logo.png" width="2%" /> integrate with the {{config.extra.arcana.sdk_name}} by installing the `auth` and `auth-react` npm packages and instantiating the `AuthProvider` and `ProviderAuth` before using them in the app. See [[integrate-react-nextjs-app|how to integrate a React app]] for details.

The React/NextJS apps that use [Wagmi](https://wagmi.sh/) <img alt="wagmi logo" src="/img/wagmi_logo.png" width="2%" /> can be integrated with the {{config.extra.arcana.sdk_name}} by simply installing the `auth-wagmi` package and instantiating the `ArcanaConnector` wrapper component. For details, see [[integrate-wagmi-app|how to integrate a React app that uses Wagmi]] guide. 

Similarly, for React apps using the [RainbowKit framework](https://www.rainbowkit.com/), <img alt="rainbowkit logo" src="/img/rainbowkit_logo.png" width="2%" /> see [[integrate-rainbow-app|how to integrate a React app that uses RainbowKit]] guide.

!!! tip "Using `auth-wagmi`"

      {% include "./text-snippets/warn_wagmi_noauth.md" %}

## Bug Fixes

---

**Securing Local/Session store partition**

In the previous release, the embedded wallet UI displayed for an authenticated user in the context of an application was also accessible in a different app's context, if the same tab was used to browse a different app. 

Once a user authenticates and logs in to an app, say **app A**, using a browser and then before logging out of **app A**, simply types a new app URL in the same browser tab for accessing **app B**, the user was able to access the wallet associated with **app A** in the context of **app B** without explicit sign-in into **app B**.

This issue is fixed in the current release. The user will have to log in to the new app before they can access the wallet UI.

---

## Get Started

---

{==

*Ready to dive in?* 

==}

See [[auth-quick-start|{{config.extra.arcana.product_name}} Quick Start Guide]] and the [how-to guides]({{page.meta.arcana.root_rel_path}}/howto/index.md) in the Getting Started section. 

Check out the sample dApp integration example for apps using [[react-code-sample|React ]], [[nextjs-code-sample|NextJS ]], and [Vue](https://github.com/arcana-network/basic-storage-wallet-integration) frameworks.

## Migrate to v1.0.2

---

Are you using an older version of the {{config.extra.arcana.product_name}}? Use the [[index-migration-guides|Migration Guides]] and upgrade to the latest version.

## Questions? 

---

Refer to the [[faq-gen| Arcana Auth FAQ]], [Troubleshooting Guide]({{page.meta.arcana.root_rel_path}}/troubleshooting.md), or contact [Arcana Support]({{page.meta.arcana.root_rel_path}}/support.md).
