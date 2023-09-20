---
alias: rn-main-auth-v1.0.8
title: 'Arcana Auth: Release Notes'
description: 'Arcana Auth Release Notes (v1.0.8 Latest)'
arcana:
  root_rel_path: ..
---

# Arcana Auth: Release Notes

{==

**Release Date: September 20, 2023**  

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

==}

## What has changed?

This is a minor release with enhancements and bug fixes only.

### Enhancements

**Arcana JWT Token**

The {{config.extra.arcana.sdk_name}} now returns an [[concept-arcana-jwt-token|Arcana JWT Token]] to the app after successful user login.

**Compact Login UI**

Developers can choose to select a more compact built-in login UI modal that displays all the available, configured login mechanisms for the user to choose from. Set `compact: true` as the `connectOptions` while creating a new `AuthProvider` as shown in the code snippet below:

```js hl_lines="13-15"
import { AuthProvider, CHAIN } from '@arcana/auth'

interface ChainConfig {
  chainId: CHAIN
  rpcUrl?: string
}

const auth = new AuthProvider(`${clientId}`, {
  position: 'left',        // default - right
  theme: 'light',          // default - dark
  alwaysVisible: false,    // default - true
  setWindowProvider: true, // default - false
  connectOptions: {
    compact: true // default - false
  },
  chainConfig: {
    chainId: CHAIN.POLYGON_MAINNET,
    rpcUrl: '',
  },
})

await auth.init()
```

<img src="/img/relnote_1.0.8_compact_login.png" alt="Compact UI login mode" class="an-screenshots-noeffects" width="85%"/>

For more details, see [`AuthProvider` constructor parameters](https://authsdk-ref-guide.netlify.app/interfaces/constructorparams).
<!--- AR-6971 
**Gasless Feature**

Developers can simplify user onboarding, reduce the Web3 gas-fees barrier to entry and drive up the app adoption through the gasless transactions feature (early beta) in the {{config.extra.arcana.product_name}} product. See [[concept-gasless-transactions|gasless transactions]] and [[configure-gasless|how to configure gasless]] and set up gas tanks.
-->

### Bug Fixes

**Email Validation**

The email entered by the user in the built-in login UI modal is now validated before initiating a user log in.

---

## Get Started

---

{==

*Ready to dive in?* 

==}

See [[auth-quick-start|{{config.extra.arcana.product_name}} Quick Start Guide]] in the Getting Started section. 

Check out the [sample dApp integration examples](https://github.com/arcana-network/auth-examples) for various dApp types, wallet connectors and frameworks.

## Upgrade to the Latest {{config.extra.arcana.sdk_name}} 

---

If you have integrated the app with the {{config.extra.arcana.sdk_name}} v{{config.extra.arcana.previous_version}} package you can choose to either continue to use it with the latest {{config.extra.arcana.product_name}} product release.

Please note, in case are using an older version of the {{config.extra.arcana.sdk_name}} prior to v{{config.extra.arcana.previous_version}} then refer to the appropriate [[index-migration-guides|Migration Guides]] and upgrade to the latest version.

## Previous Releases

See the [[index-release-notes| release notes archive]] for details.

## Questions? 

---

Refer to the [[faq-gen| Arcana Auth FAQ]], [Troubleshooting Guide]({{page.meta.arcana.root_rel_path}}/troubleshooting.md), and other developer resources, or contact [Arcana Support]({{page.meta.arcana.root_rel_path}}/support.md).