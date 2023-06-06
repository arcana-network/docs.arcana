---
alias: rn-main-auth-v1.0.5
title: 'Arcana Auth: Release Notes'
description: 'Arcana Auth Release Notes (Latest)'
arcana:
  root_rel_path: ..
---

# Arcana Auth: Release Notes

{==

**Release Date: June 6, 2023**  

The latest release of the {{config.extra.arcana.product_name}} product consists of the following components:

* {{config.extra.arcana.sdk_name}}
      - [`{{config.extra.arcana.auth_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth) 
      - [`{{config.extra.arcana.react_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-react)
      - [`{{config.extra.arcana.wagmi_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-wagmi) 
      - [`{{config.extra.arcana.web3_react_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-web3-react)
      
* [{{config.extra.arcana.dashboard_name}}](https://dashboard.arcana.network/)

* [{{config.extra.arcana.wallet_name}} UI](https://github.com/arcana-network/wallet-ui)

==}

## New Product Features

---

### Steam OAuth Support

Web3 applications that integrate with the {{config.extra.arcana.sdk_name}} can now onboard users via [Steam OAuth](https://partner.steamgames.com/doc/webapi_overview/oauth). See [[config-auth-steam|how to configure Steam as an onboarding option]] section for more details. After configuring one or more authentication providers through the {{config.extra.arcana.dashboard_name}}, applications can onboard users with a single line of code using `loginWithSocial` call. Developers can use the built-in plug-and-play login UI feature of the the {{config.extra.arcana.sdk_name}} or use a custom login UI and allow users to onboard the app using Steam. See [[index-onboard-users|how to onboard users]] section and choose the app type for instructions on how to onboard users with Steam.

### Firebase Auth Support

In addition to Cognito, now {{config.extra.arcana.sdk_name}} also allows applications to onboard users via Firebase. In the case of Firebase, in addition to [[config-auth-firebase|configuring Firebase in the {{config.extra.arcana.dashboard_name}}]], integrating the app with the {{config.extra.arcana.sdk_name}} and calling the appropriate {{config.extra.arcana.sdk_name}} function to [[build-iam-firebase-auth|onboard Firebase users]], the developers must also integrate the app with the Firebase SDKs and configure the requisite Firebase services and listen for user authentication success. Once a user authenticates, the developers must pass the Firebase token and requisite details to the {{config.extra.arcana.sdk_name}} user onboarding function. Refer to the [Firebase auth integration demo app](https://github.com/arcana-network/auth-firebase-test) for code samples.

---

## Get Started

---

{==

*Ready to dive in?* 

==}

See [[auth-quick-start|{{config.extra.arcana.product_name}} Quick Start Guide]] in the Getting Started section. 

Check out the sample dApp integration example for apps using [[react-code-sample|React ]], [[nextjs-code-sample|NextJS ]], and [Vue](https://github.com/arcana-network/basic-storage-wallet-integration) frameworks.

## Upgrade to the Latest {{config.extra.arcana.sdk_name}} 

---

If you have integrated the app with the {{config.extra.arcana.sdk_name}} v{{config.extra.arcana.previous_version}} package you can choose to either continue to use it with the latest {{config.extra.arcana.product_name}} product release.

To enable Steam or Firebase authentication, you must upgrade to the v{{config.extra.arcana.latest_version}}. Upgrading is easy, simply follow the [[migration-guide-v1.0.5|migration guide]] for a swift upgrade.

Please note, in case are using an older version of the {{config.extra.arcana.sdk_name}} prior to v{{config.extra.arcana.previous_version}} then refer to the appropriate [[index-migration-guides|Migration Guides]] and upgrade to the latest version.

## Previous Releases

See the [[index-release-notes| release notes archive]] for details.

## Questions? 

---

Refer to the [[faq-gen| Arcana Auth FAQ]], [Troubleshooting Guide]({{page.meta.arcana.root_rel_path}}/troubleshooting.md), and other developer resources, or contact [Arcana Support]({{page.meta.arcana.root_rel_path}}/support.md).

