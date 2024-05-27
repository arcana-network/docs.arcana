---
alias: rn-main-auth-v1.0.11
title: 'Arcana Auth: Release Notes'
description: 'Arcana Auth Release Notes (v1.0.11 Latest)'
arcana:
  root_rel_path: ..
---

# Arcana Auth: Release Notes

{==

**Release Date: May 16, 2024**  

Version: **{{config.extra.arcana.latest_version}}**

* {{config.extra.arcana.sdk_name}} 
      - Web Apps 
        - [`{{config.extra.arcana.auth_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth) 
        - [`{{config.extra.arcana.react_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-react)
        - [`{{config.extra.arcana.wagmi_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-wagmi) 
        - [`{{config.extra.arcana.web3_react_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-web3-react)
      - Mobile Apps
        - [`{{config.extra.arcana.mobile_flutter_sdk_pkg_name}}`](https://pub.dev/packages/arcana_auth_flutter)
        - [`{{config.extra.arcana.mobile_react_native_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-react-native)
      - Gaming Apps
        - [`{{config.extra.arcana.gaming_sdk_pkg_name}}`](https://npm-registry.arcana.network/)

* [{{config.extra.arcana.dashboard_name}}](https://dashboard.arcana.network/)

* [{{config.extra.arcana.wallet_name}} UI](https://github.com/arcana-network/wallet-ui)

In addition to the {{config.extra.arcana.sdk_name}}, now we also provide {{config.extra.arcana.auth_core_sdk_name}} for greater flexibility in using authentication features and custom wallet UI support.

* [{{config.extra.arcana.auth_core_sdk_name}}](https://www.npmjs.com/package/@arcana/auth-core)

==}


## What is New?

---
 
* Support for [[concept-custom-oauth|custom OAuth]]. See [[config-custom-oauth|how to configure custom OAuth settings in the {{config.extra.arcana.dashboard_name}}]] and [[integrate-custom-oauth|how to integrate an app that uses a custom authentication server]] but requires assigning keys to authenticated users for signing blockchain transactions.

* New **off-ramping** feature in the {{config.extra.arcana.wallet_name}} allows users to sell crypto or convert blockchain assets to Fiat via selected supported off-ramping providers. See [[dashboard-user-guide#buysell-crypto|how to buy/sell crypto through Fiat]] for details.

* Minor enhancements and bug fixes in {{config.extra.arcana.gasless_sdk_name}}. See [[index-changelog|changelog]].

## What has changed?

---

There are **no usage changes** in this release. To migrate to the latest release, re-install and upgrade to the latest SDKs.

## Get Started

---

{==

*Ready to dive in?* 

==}

Check out:

* [[auth-quick-start|{{config.extra.arcana.product_name}} Quick Start Guides]]
* {% include "./text-snippets/unity_sample_url.md" %} 
* [Integration examples](https://github.com/arcana-network/auth-examples)

## Previous Releases

Are you using an older version of the {{config.extra.arcana.sdk_name}}?

Refer to the [[index-release-notes| release notes archive]] and [[index-migration-guides|Migration Guides]]. Upgrade to the latest version.

## Questions? 

---

Refer to the [[faq-gen| Arcana Auth FAQ]], [Troubleshooting Guide]({{page.meta.arcana.root_rel_path}}/troubleshooting.md), and other developer resources, or contact [Arcana Support]({{page.meta.arcana.root_rel_path}}/support/index.md).