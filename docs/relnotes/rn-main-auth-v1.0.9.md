---
alias: rn-main-auth-v1.0.9-rc.1
title: 'Arcana Auth: Release Notes'
description: 'Arcana Auth Release Notes (v1.0.9-rc.1 Latest)'
arcana:
  root_rel_path: ..
---

# Arcana Auth: Release Notes

{==

**Release Date: Jan 22, 2024**  

Version: **{{config.extra.arcana.latest_version}}**

The {{config.extra.arcana.product_name}} product consists of the following components:

* {{config.extra.arcana.sdk_name}} 
      - Web Apps 
        - [`{{config.extra.arcana.auth_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth) 
        - [`{{config.extra.arcana.react_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-react)
        - [`{{config.extra.arcana.wagmi_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-wagmi) 
        - [`{{config.extra.arcana.web3_react_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-web3-react)
      - Mobile Apps
        - [`{{config.extra.arcana.mobile_flutter_sdk_pkg_name}}`](https://pub.dev/packages/arcana_auth_flutter)
        - [`{{config.extra.arcana.mobile_react_native_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-react-native)

* [{{config.extra.arcana.dashboard_name}}](https://dashboard.arcana.network/)

* [{{config.extra.arcana.wallet_name}} UI](https://github.com/arcana-network/wallet-ui)

In addition to the {{config.extra.arcana.sdk_name}}, now we also provide {{config.extra.arcana.auth_core_sdk_name}} for greater flexibility in using authentication features and custom wallet UI support.

* [{{config.extra.arcana.auth_core_sdk_name}}](https://www.npmjs.com/package/@arcana/auth-core)

==}

## What is New?

---

This is a major release that supports non-EVM blockchains (Solana). New product features include a brand new SDK that offers maximum customization. Also, there are some enhancements related to security besides bug fixes.

* Non-EVM Chain Support: Solana - See [[solana-quick-start|Solana Apps Quick Start Guide]].
* New SDK: {{config.extra.arcana.auth_core_sdk_name}} - See [[auth-core-quick-start|Auth Core SDK Quick Start Guide]].
* Security enhancements and bug fixes. See [[index-changelog|changelog]].

## What has changed?

---

### Global Keys

There are no usage changes for applications that use app-specific keys (default). 

If the app developer selects [[concept-keyspace-type| global keys]] while configuring the app via the {{config.extra.arcana.dashboard_name}}, the social auth settings for enabling the social login providers are **no longer** required**.

### New User Orientation

Earlier, when a user logged into the Web3 app integrated with the {{config.extra.arcana.sdk_name}}, the new user would instantly see the {{config.extra.arcana.wallet_name}} in the app context. Now, a new orientation wizard pops up for the very first user login. Newcomers to Web3 or those unfamiliar with wallets can find value in the orientation wizard. Upon logging into the app, users can opt to skip it or swiftly get familiar with the layout of {{config.extra.arcana.wallet_name}}, understanding where specific information is located.

![Wallet Orientation](/img/an_wallet_orientation.gif){.an_screenshots .width_35pc}

## Get Started

---

{==

*Ready to dive in?* 

==}

See [[auth-quick-start|{{config.extra.arcana.product_name}} Quick Start Guides]] in the Getting Started section.

Check out the [sample dApp integration examples](https://github.com/arcana-network/auth-examples) for various dApp types, wallet connectors and frameworks.

## Upgrade to the Latest {{config.extra.arcana.sdk_name}} 

---

If you have integrated the app with the {{config.extra.arcana.sdk_name}} v{{config.extra.arcana.previous_version}} package you can continue to use it with the latest {{config.extra.arcana.product_name}} product release.

Please note, in case are using an older version of the {{config.extra.arcana.sdk_name}} prior to v{{config.extra.arcana.previous_version}} then refer to the appropriate [[index-migration-guides|Migration Guides]] and upgrade to the latest version.

## Previous Releases

See the [[index-release-notes| release notes archive]] for details.

## Questions? 

---

Refer to the [[faq-gen| Arcana Auth FAQ]], [Troubleshooting Guide]({{page.meta.arcana.root_rel_path}}/troubleshooting.md), and other developer resources, or contact [Arcana Support]({{page.meta.arcana.root_rel_path}}/support.md).
