---
alias: latest-migration-guide
title: 'Arcana Auth SDK v1.0.3 -> v1.0.4 Migration'
description: 'How to migrate to Arcana Auth Web SDK v1.0.4'
arcana:
  root_rel_path: ..
---

# Arcana Auth SDK v1.0.3 -> v1.0.4 Migration

This guide is meant for developers who have already integrated apps with v1.0.3 of the {{config.extra.arcana.sdk_name}} and deploy them using {{config.extra.arcana.company_name}} Testnet or Mainnet. 

If you are new to Arcana Network, please visit [[auth-quick-start|{{config.extra.arcana.product_name}} Quick Start Guide]] to get started.


## Backward Compatibility

The latest release of the {{config.extra.arcana.product_name}} product does not cause any breaking changes for most of the Web3 apps that may have integrated with the earlier release v1.0.3 of the {{config.extra.arcana.sdk_name}}. Those apps should continue to work with no changes to the app code. There may be some changes required in the {{config.extra.arcana.dashboard_name}} settings to ensure smooth operation. If the app has explicitly specified a default chain via the `chainConfig` option in the `AuthProvider` then make sure the chain appears in the list of blockchains configured in the {{config.extra.arcana.dashboard_name}}. If the chain does not show up, it can be manually added via the [[dashboard-user-guide#configure-application|chain management configuration settings]] in the dashboard.  See the chain management section below for details.

### Same Wallet Address

Apps using {{config.extra.arcana.product_name}} v1.0.3 or the latest v1.0.4 should see **no change** in the user wallet address. This is true for all types of apps and supported frameworks, irrespective of whether they are using the global or app-specific keys. Apps deployed earlier will continue to work on the Arcana Testnet and Mainnet. 

## New Release: What has Changed?

### Wagmi or RainbowKit Apps

Earlier, apps using `{{config.extra.arcana.wagmi_sdk_pkg_name}}` package v0.0.4 were **not** required to install the `{{config.extra.arcana.auth_sdk_pkg_name}}` package v1.0.3 but this has changed in the current release.

Now Wagmi / RainbowKit Apps need to install both the packages and then as part of integrating with the {{config.extra.arcana.product_name}} product, first create `AuthProvider` using the {{config.extra.arcana.app_address}}. Then use the `AuthProvider` to create the `ArcanaConnector`. 

For details, see how to onboard users in Web3 apps using [[integrate-wagmi-app| Wagmi]] or [[integrate-rainbow-app| RainbowKit]] wallet connectors.

### Chain Management

The latest release allows developers more flexibility as they can configure blockchains displayed in the {{config.extra.arcana.wallet_name}} dropdown list and set one of them as the default chain by either using the {{config.extra.arcana.dashboard_name}} or programmatically through `chainConfig` setting and JSON-RPC calls to add and switch chains. 

Earlier, developers could programmatically manage chains only via the add/switch chain functions and the default chain setting was done via the `chainConfig` option of the `AuthProvider`. Now this can also be managed using the dashboard. For details, see [[dashboard-user-guide#configure-application| how to configure app settings]]. 

In the latest release v1.0.4, developers can use the {{config.extra.arcana.dashboard_name}} to configure blockchains and specify a default chain. Later, in the app integration code, they can override the default chain programmatically using the `chainConfig` parameter. The default chain configuration setting in the {{config.extra.arcana.dashboard_name}} can be overridden with the `chainConfig` option while instantiating the `AuthProvider` **only if** the default chain selected in the `chainConfig` option is one of the list of chains configured through the {{config.extra.arcana.dashboard_name}}. If the selected chain is not part of the {{config.extra.arcana.dashboard_name}} blockchain settings then the default chain configured in the {{config.extra.arcana.dashboard_name}} setting takes precedence and is displayed in the wallet UI. The rest of the dashboard configured ones show in the dropdown list.

{% include "./text-snippets/specify_default_chain_example.md" %}

### Transaction Summary View

When a blockchain transaction is triggered either by the app programmatically or via a wallet user action, a transaction notification pops up in the wallet context displaying the transaction summary along with the option to approve or reject the request. Only when the user clicks 'v' icon on the top right, the notification details are displayed. Earlier, the notification details were displayed by default.

## How to Migrate to v1.0.4?

We highly recommend that Web3 apps that are integrated with v1.0.3 releases of the {{config.extra.arcana.sdk_name}} migrate to the latest {{config.extra.arcana.sdk_name}} v1.0.4 release.

For vanilla HTML/CSS/JS apps or simple React apps that do not use `window.ethereum` setting, no code changes are required. Just install and upgrade to the latest v1.0.4 release and redeploy the app. 

However, if the apps use `window.ethereum` browser setting or wallet connectors such as Wagmi or RainbowKit then migrating to the latest release may require some integration code changes. In the case of Wagmi or RainbowKit apps, it requires not only upgrading the `{{config.extra.arcana.wagmi_sdk_pkg_name}}` package but also installing an additional SDK package and some new code to use the SDK.  

### Apps using `windows.ethereum`

Previously, Web3 desktop apps could integrate with the {{config.extra.arcana.sdk_name}} and directly access the [standard ERC-1193 Ethereum provider](https://eips.ethereum.org/EIPS/eip-1193) via `window.ethereum` in the web browser. In the latest release of the {{config.extra.arcana.sdk_name}}, `window.ethereum` is not automatically set to the provider. To enable this feature, specify `setWindowProvider=true` when creating the `AuthProvider`.
     
For details, see [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]].

### Wagmi or RainbowKit Apps

For Wagmi or RainbowKit Apps, see how to onboard users in Web3 apps using [[integrate-wagmi-app| Wagmi]] or [[integrate-rainbow-app| RainbowKit]] wallet connectors. 

### Apps using `chainConfig` setting in `AuthProvider`

Apps using the `chainConfig` setting to set the default chain in the {{config.extra.arcana.wallet_name}} dropdown list must ensure that it is included in the list of configured blockchains in the {{config.extra.arcana.dashboard_name}}. The `chainConfig` parameter in the `AuthProvider` setting will only work if the chain is part of the configured chains in the {{config.extra.arcana.dashboard_name}}. Otherwise, the wallet user may see a different default chain according to the {{config.extra.arcana.dashboard_name}} settings. To ensure the `chainConfig` setting takes effect, the specified chain can be manually added through the {{config.extra.arcana.dashboard_name}} interface. For details, see the chain management section above and refer to the [[state-of-the-arcana-auth#supported-blockchains|list of supported chains for the wallet]].

## What's New?

<img src="/img/icon_new_light.png#only-light" alt="New icon" width="3%" /><img src="/img/icon_new_dark.png#only-dark" alt="New icon" width="3%" />

See [[rn-main-auth-v1.0.4|{{config.extra.arcana.product_name}} v1.0.4 release notes]] and [[state-of-the-arcana-auth|State of the {{config.extra.arcana.product_name}}]].
