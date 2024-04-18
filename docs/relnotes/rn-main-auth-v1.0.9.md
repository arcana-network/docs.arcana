---
alias: rn-main-auth-v1.0.9
title: 'Arcana Auth: Release Notes'
description: 'Arcana Auth Release Notes (v1.0.9)'
arcana:
  root_rel_path: ..
---

# Arcana Auth: Release Notes

{==

**Release Date: Feb 5, 2024**  

Version: **v1.0.9**

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
<img src="{{config.extra.arcana.img_dir}}/icon_new_light.{{config.extra.arcana.img_png}}#only-light" alt="New icon" width="3%" /><img src="{{config.extra.arcana.img_dir}}/icon_new_dark.{{config.extra.arcana.img_png}}#only-dark" alt="New icon" width="3%" />

---

This is a major release that supports non-EVM blockchains (Solana). New product features include a brand new SDK that offers maximum customization. Also, there are some enhancements related to security besides bug fixes.

* Non-EVM Chain Support: Solana - See [[solana-quick-start|Solana Apps Quick Start Guide]].

* Passwordless Login with OTP: Use [`loginWithOTPStart`](https://authsdk-ref-guide.netlify.app/classes/authprovider#loginWithOTPStart), and [`loginWithOTPComplete`](https://authsdk-ref-guide.netlify.app/classes/authprovider#loginWithOTPComplete) instead of [`loginWithLink`](https://authsdk-ref-guide.netlify.app/classes/authprovider#loginWithLink) (deprecated)

* New SDK: {{config.extra.arcana.auth_core_sdk_name}} - See [[auth-core-quick-start|Auth Core SDK Quick Start Guide]].

* Security enhancements and bug fixes. See [[index-changelog|changelog]].

## What has changed?

---

### Global Keys

There are no usage changes for applications that use app-specific keys (default). 

If the app developer selects [[concept-keyspace-type| global keys]] while configuring the app via the {{config.extra.arcana.dashboard_name}}, the social auth settings for enabling the social login providers are **no longer** required.

Apps can choose to enable global keys on the Testnet as well as the Mainnet.

### New User Orientation

Earlier, when a user logged into the Web3 app integrated with the {{config.extra.arcana.sdk_name}}, the new user would instantly see the {{config.extra.arcana.wallet_name}} in the app context. Now, a new orientation wizard pops up for the very first user login. Newcomers to Web3 or those unfamiliar with wallets can find value in the orientation wizard. Upon logging into the app, users can opt to skip it or swiftly get familiar with the layout of {{config.extra.arcana.wallet_name}}, understanding where specific information is located.

<figure markdown="span">
  ![Wallet Starter Tips]({{config.extra.arcana.img_dir}}/an_wallet_orientation.gif){ .an-screenshots-noeffects .width_35pc }
  <figcaption>Wallet Starter Tips</figcaption>
</figure>

## Get Started

---

{==

*Ready to dive in?* 

==}

See [[auth-quick-start|{{config.extra.arcana.product_name}} Quick Start Guides]] in the Getting Started section.

Check out the [sample dApp integration examples](https://github.com/arcana-network/auth-examples) for various dApp types, wallet connectors and frameworks.

## Previous Releases

Using an older version of the {{config.extra.arcana.sdk_name}}?

Refer to the [[index-release-notes| release notes archive]] and [[index-migration-guides|Migration Guides]]. Upgrade to the latest version.

## Questions? 

---

Refer to the [[faq-gen| Arcana Auth FAQ]], [Troubleshooting Guide]({{page.meta.arcana.root_rel_path}}/troubleshooting.md), and other developer resources, or contact [Arcana Support]({{page.meta.arcana.root_rel_path}}/support/index.md).