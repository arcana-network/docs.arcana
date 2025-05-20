{==

**Product Update Date: Oct 28, 2024**  

**Version: {{config.extra.arcana.latest_version}}**

**Download and Install [[sdk-installation|Auth SDK]]**

The product consists of:

1. {{config.extra.arcana.sdk_name}} 
  
    === "Web Apps"

        - [`{{config.extra.arcana.auth_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth) Version: **{{config.extra.arcana.latest_version}}** Release Date: **{{config.extra.arcana.latest_sdk_release_date}}** 
        - [`{{config.extra.arcana.react_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-react)
        - [`{{config.extra.arcana.wagmi_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-wagmi) 
        - [`{{config.extra.arcana.web3_react_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-web3-react)

    === "Mobile Apps"

        - [`{{config.extra.arcana.mobile_flutter_sdk_pkg_name}}`](https://pub.dev/packages/arcana_auth_flutter)
        - [`{{config.extra.arcana.mobile_react_native_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-react-native)

    === "Gaming Apps (Unity)"

        - [`{{config.extra.arcana.gaming_sdk_pkg_name}}`](https://npm-registry.arcana.network/)

2. [{{config.extra.arcana.dashboard_name}}](https://dashboard.arcana.network/)

3. [{{config.extra.arcana.wallet_name}} UI](https://github.com/arcana-network/wallet-ui)

4. [{{config.extra.arcana.auth_core_sdk_name}}](https://www.npmjs.com/package/@arcana/auth-core)

==}


## What is New?

---
 
* **New Onboarding Options:** Apps integrating with the {{config.extra.arcana.sdk_name}} can now allow users to onboard via [[concept-auth-passkeys|Passkey]] or via new [[web3-stack-auth|supported social login providers]]: Telegram and Apple. See how to [[onboard-passkey-auth|onboard users via passkeys]] for details. Developers must first [[config-auth-passkeys|set up Passkeys]], and configure Telegram, Apple Settings through the dashboard before adding code in the app to onboard the user via these mechanisms. [[index-config-social-providers|Learn more...]]

* **Additional branding Customizations:** Apps can now customize the wallet UI with more theme options. You can also rebrand the OTP email for passwordless onboarding. [[configure-wallet-branding|Learn more...]]

* Bug fixes and performance enhancements related to user login.

## What has changed?

---


To migrate to the latest release, re-install the SDK. This release does not require you to pay any **usage fee**.

[Changelog](https://github.com/arcana-network/auth/releases/latest){ .md-button }

## Get Started

---

* [[wagmi-quick-start|{{config.extra.arcana.sdk_name}} Quick Start Guides]]
* {% include "./text-snippets/unity_sample_url.md" %} 
* [Integration examples](https://github.com/arcana-network/auth-examples)

## Previous Releases

Are you using an older version of the {{config.extra.arcana.sdk_name}}?

Refer to the [[index-release-notes| release notes archive]] and [[index-migration-guides|Migration Guides]]. Upgrade to the latest version.

## Questions? 

---

Refer to the [[faq-gen| Arcana Auth FAQ]], [Troubleshooting Guide]({{page.meta.arcana.root_rel_path}}/troubleshooting.md), and other developer resources.

Can't find what you are looking for? Contact [Arcana Support]({{page.meta.arcana.root_rel_path}}/support/index.md).
