---
alias: rn-main-auth-vOct12-23-gasless
title: 'Arcana Auth: Release Notes'
description: 'Arcana Auth Release Notes (vOct12-23-gasless Latest)'
arcana:
  root_rel_path: ..
---

# Arcana Auth: Release Notes

{==

**Release Date: Oct 12, 2023**  

Version: **{{config.extra.arcana.date_release_tag}}**

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

==}

## What's New?

<img src="/img/icon_new_light.png#only-light" alt="New icon" width="3%" /><img src="/img/icon_new_dark.png#only-dark" alt="New icon" width="3%" />

### Gasless Transactions

Developers can make it easier for Web3 app users to get started and encourage more people to use their apps by removing the Web3 gas fee obstacle with the {{config.extra.arcana.product_name}} gasless feature. Discover how [[concept-gasless-transactions|gasless transactions]] work, [[configure-gasless|how to configure gasless and set up gas tanks for an app]]. If you have any other queries regarding the gasless feature, refer to the [[faq-gasless|gasless FAQ]].

!!! caution "Debugging gasless issues"

      Apps that enable the gasless feature may sometimes find cryptic errors returned in case of the transaction failure. Refer to the error handling section on [[web-gasless-error-msg#debugging-gasless-errors|how to debug gasless issues]] and pinpoint the exact cause and fix it using Tenderly.

### Gasless Usage Changes

#### App Users

Gasless enabled apps will not require to pay any gas fees for any of the whitelisted blockchain operations. Besides zero gas fees, the app users will see a change in their wallet address when gasless is enabled for an app.

Earlier, there was only a single EoA wallet address associated with each authenticated app user. Apps with gasless feature will require to configure gas tank for one or more blockchain networks. For such apps the app user account will be associated with two types of wallet addresses: an EoA address and a SCW address. By default, all gasless transactions happen via the SCW account. Users can switch between EoA and SCW accounts using the wallet UI. For details, see [[rn-main-auth-v{{config.extra.arcana.date_release_tag}}|{{config.extra.arcana.product_name}} v{{config.extra.arcana.date_release_tag}} release notes]].

#### Developers

In addition to configuring the social provider and customizing wallet experience, chains, etc., developers must set up gas tanks for the blockchain net

**xyz**

TBD

---

## Get Started

---

{==

*Ready to dive in?* 

==}

Use [[auth-quick-start|{{config.extra.arcana.product_name}} Quick Start Guide]] to start using {{config.extra.arcana.product_name}}.

See [integration examples](https://github.com/arcana-network/auth-examples) for various dApp types, wallet connectors and frameworks.

## {{config.extra.arcana.sdk_name}}: No Changes

---

If you already using the previous version of the {{config.extra.arcana.sdk_name}} v{{config.extra.arcana.latest_version}}, you can continue to use the latest release of the product v{{config.extra.arcana.date_release_tag}}. There are no updates to the {{config.extra.arcana.sdk_name}} package.

Please note, in case are using an older version of the {{config.extra.arcana.sdk_name}} prior to v{{config.extra.arcana.previous_version}} then refer to the appropriate [[index-migration-guides|Migration Guides]] and upgrade to the latest version.

## Previous Releases

See the [[index-release-notes| release notes archive]] for details.

## Questions? 

---

Refer to the [[faq-gen| Arcana Auth FAQ]], [Troubleshooting Guide]({{page.meta.arcana.root_rel_path}}/troubleshooting.md), and other developer resources, or contact [Arcana Support]({{page.meta.arcana.root_rel_path}}/support.md).