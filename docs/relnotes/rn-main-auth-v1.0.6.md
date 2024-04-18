---
alias: rn-main-auth-v1.0.6
title: 'Arcana Auth: Release Notes'
description: 'Arcana Auth Release Notes (v1.0.6)'
arcana:
  root_rel_path: ..
---

# Arcana Auth: Release Notes

{==

**Release Date: July 12, 2023**  

The latest release of the {{config.extra.arcana.product_name}} product consists of the following components:

* {{config.extra.arcana.sdk_name}}
      - [`{{config.extra.arcana.auth_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth) 
      - [`{{config.extra.arcana.react_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-react)
      - [`{{config.extra.arcana.wagmi_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-wagmi) 
      - [`{{config.extra.arcana.web3_react_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-web3-react)
      
* [{{config.extra.arcana.dashboard_name}}](https://dashboard.arcana.network/)

* [{{config.extra.arcana.wallet_name}} UI](https://github.com/arcana-network/wallet-ui)

==}

## Enhancements
---

### Third-party Cookies

Earlier, the {{config.extra.arcana.sdk_name}} had issues if the browser incognito mode was used or if third-party cookies were disabled in the browser settings. The latest enhancements include support for both these cases.

Also, it is no longer required for a user to re-login in case the browser is refreshed in a 30-minute window since the last login. Developers can use the `canReconnect` and `reconnect` methods of the `AuthProvider` to enable this automatic re-login for the user, in a secure manner.

See [[web-auth-usage-guide#auth-apis|usage guide]] for more details.

### Support for Wagmi 1.x.y and Viem

The [`{{config.extra.arcana.wagmi_sdk_pkg_name}}` package](https://www.npmjs.com/package/@arcana/auth-wagmi) is now upgraded to version 2.0.0 and supports the latest Wagmi release v1.3.9 which uses Viem. For details, see [Wagmi 1.x.x migration guide](https://wagmi.sh/core/guides/migrate-from-v1-to-v2) and [sample integration code 'sample-auth-rainbow-viem'](https://github.com/arcana-network/auth-examples).

### Wagmi/RainbowKit App Connect

When using the `{{config.extra.arcana.wagmi_sdk_pkg_name}}` package for RainbowKit apps, it is recommended that developers specify the `name` field as 'Login with Email/Social' and put the Arcana logo as shown in the code below.

```js title="utils/getArcanaAuth.js" hl_lines="1 7-9"
import { AuthProvider } from "@arcana/auth";

let auth = null;

export const getAuthProvider = () => {
  if (!auth) {
    auth = new AuthProvider(
      "xar_dev_19527cdf585cd31d0bd06bfc1b008accea781404"
    );
  }
  return auth;
};

```

```js title="utils/wallet.js" hl_lines="1-3 8-9"
import { getAuthProvider } from "./getArcanaAuth";
import { ArcanaConnector } from "@arcana/auth-wagmi";
import { newArcanaLogo } from "./logo";

export const ArcanaRainbowConnector = ({ chains }) => {
  return {
    id: "arcana-auth",
    name: "Login with Email/Social",
    iconUrl: newArcanaLogo,
    iconBackground: "#101010",
    createConnector: () => {
      const connector = new ArcanaConnector({
        chains,
        options: {
	  auth: getAuthProvider(),
        }
      });
      return {
        connector,
      };
    },
  };
};

```
<figure markdown="span">
  ![Sample App: RainbowKit]({{config.extra.arcana.img_dir}}/rainbow-sample-app-text-logo.gif){ .an-screenshots .width_85pc}
  <figcaption>Sample App: RainbowKit</figcaption>
</figure>

For more details, see [sample RainbowKit app integration with Auth](https://github.com/arcana-network/auth-wagmi/tree/main/examples/rainbowkit-integration).


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

To enable Steam or Firebase authentication, you must upgrade to the release v1.0.5 or higher. Upgrading is easy, simply follow the [[migration-guide-v1.0.6|migration guide]] for a swift upgrade.

Please note, in case are using an older version of the {{config.extra.arcana.sdk_name}} prior to v{{config.extra.arcana.previous_version}} then refer to the appropriate [[index-migration-guides|Migration Guides]] and upgrade to the latest version.

## Previous Releases

See the [[index-release-notes| release notes archive]] for details.

## Questions? 

---

Refer to the [[faq-gen| Arcana Auth FAQ]], [Troubleshooting Guide]({{page.meta.arcana.root_rel_path}}/troubleshooting.md), and other developer resources, or contact [Arcana Support]({{page.meta.arcana.root_rel_path}}/support/index.md).