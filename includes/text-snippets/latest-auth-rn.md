{==

**Release Date: May 27, 2024**  

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
 
* No change to the {{config.extra.arcana.sdk_name}}. See [[rn-main-auth-v1.0.10| previous Release notes]] for details.

* New updated [`{{config.extra.arcana.wagmi_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-wagmi) now supports the latest Wagmi 2.x.y SDK.

* New **off-ramping** feature in the {{config.extra.arcana.wallet_name}} allows users to sell crypto or convert blockchain assets to Fiat via selected supported off-ramping providers. See [[arcana-wallet-user-guide#buysell-crypto|how to buy/sell crypto through Fiat]] for details.

## What has changed?

---

There are **no usage changes** in this release for the {{config.extra.arcana.sdk_name}}. 

To use the latest {{config.extra.arcana.wallet_name}} off-ramp feature, users can simply refresh the wallet or re-login to the app. 

Apps using the Wagmi SDK need to migrate to the latest {{config.extra.arcana.wagmi_sdk_name}} release. Simply re-install and upgrade the [`{{config.extra.arcana.wagmi_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-wagmi) package and update the integration code to use the new config settings for the `WagmiProvider`. See [[wagmi-quick-start|Wagmi Quick Start Guide]] for details.

## Get Started

---

{==

*Ready to dive in?* 

==}

Check out:

* [[wagmi-quick-start|{{config.extra.arcana.product_name}} Quick Start Guides]]
* {% include "./text-snippets/unity_sample_url.md" %} 
* [`sample-auth-wagmi-2` integration example](https://github.com/arcana-network/auth-examples)
* [Other integration examples](https://github.com/arcana-network/auth-examples)

## Previous Releases

Are you using an older version of the {{config.extra.arcana.sdk_name}}?

Refer to the [[index-release-notes| release notes archive]] and [[index-migration-guides|Migration Guides]]. Upgrade to the latest version.

## Questions? 

---

See [[faq-gen| Arcana Auth FAQ]], [Troubleshooting Guide]({{page.meta.arcana.root_rel_path}}/troubleshooting.md), and other developer resources, or contact [Arcana Support]({{page.meta.arcana.root_rel_path}}/support/index.md).