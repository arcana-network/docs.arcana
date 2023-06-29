---
alias: rn-main-auth-v1.0.5
title: 'Arcana Auth: Release Notes'
description: 'Arcana Auth Release Notes (Latest)'
arcana:
  root_rel_path: ..
---

# Arcana Auth: Release Notes

{==

**Release Date: June 12, 2023**  

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

### Auth for Mobile Apps

The {{config.extra.arcana.product_name}} product now allows mobile apps built using Flutter and React-Native frameworks to easily onboard users through the {{config.extra.arcana.sdk_name}} and sign blockchain transactions. 

Flutter app developers must install the `{{config.extra.arcana.mobile_flutter_sdk_pkg_name}}` package and refer to the [[flutter-quick-start|Arcana Auth Quick Start Guide for Flutter Apps]] to integrate Web3 Flutter apps with the {{config.extra.arcana.sdk_name}} SDK.

React-Native app developers must install the `{{config.extra.arcana.mobile_react_native_sdk_pkg_name}}` package and refer to the [[react-native-quick-start|Arcana Auth Quick Start Guide for React-Native Apps]] to integrate Web3 React-Native apps with the {{config.extra.arcana.sdk_name}} SDK.

### White-labeled Auth 

The new white-labeled auth feature allows Web3 app developers to configure the {{config.extra.arcana.sdk_name}} and disable the built-in {{config.extra.arcana.wallet_name}} UI. Developers can replace it with a custom wallet UI and build necessary interfaces to call the Web3 wallet operations themselves along with notification UI for requesting user approval for signing a blockchain transaction. See [[custom-wallet-ui|how to plug in a custom wallet UI]] and use the white-labeled auth feature. 

### Steam OAuth Support

Web3 applications that integrate with the {{config.extra.arcana.sdk_name}} can now onboard users via [Steam OAuth](https://partner.steamgames.com/doc/webapi_overview/oauth). See [[config-auth-steam|how to configure Steam as an onboarding option]] section for more details. After configuring one or more authentication providers through the {{config.extra.arcana.dashboard_name}}, applications can onboard users with a single line of code using `loginWithSocial` call. Developers can use the built-in plug-and-play login UI feature of the {{config.extra.arcana.sdk_name}} or use a custom login UI and allow users to onboard the app using Steam. See [[index-onboard-users|how to onboard users]] section and choose the app type for instructions on how to onboard users with Steam.

### Firebase Auth Support

Besides Cognito custom authentication, the {{config.extra.arcana.sdk_name}} now also allows apps to onboard users via Firebase. To enable Firebase, developers must:

* [[config-auth-firebase|Configure Firebase settings]] in the {{config.extra.arcana.dashboard_name}}
* [[index-integrate-app|Install and integrate the app]] with the {{config.extra.arcana.sdk_name}}
* Make sure that the app is also integrated with the Firebase SDKs and that the required Firebase services are configured. 
* Use a custom login UI to initiate Firebase login and listen for user authentication success event from Firebase.
* Pass on the Firebase token to the {{config.extra.arcana.sdk_name}} user onboarding function - `loginWithBearer` and allow authenticated users to sign blockchain transactions.

Refer to the [Firebase auth integration demo app](https://github.com/arcana-network/auth-firebase-test) for code samples.

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

