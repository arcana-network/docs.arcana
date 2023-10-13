---
alias: index-may3-23-release-note
title: 'Arcana Auth: Release Notes'
description: 'Arcana Auth Release Notes May 3rd, 23 Release'
arcana:
  root_rel_path: ..
---

# Arcana Auth: Release Notes

{==

**Release Date: Apr 19th, 2023**  

(*Mainnet Update on May 3rd, 2023*)

The latest release of the {{config.extra.arcana.product_name}} product consists of the following components:

* [{{config.extra.arcana.sdk_name}} v1.0.3](https://www.npmjs.com/package/@arcana/auth/v/1.0.3)
* [{{config.extra.arcana.dashboard_name}}](https://dashboard.arcana.network/)
* {{config.extra.arcana.wallet_name}} UI 

==}

!!! tip "No {{config.extra.arcana.sdk_name}} upgrade required"

      Note, in the latest {{config.extra.arcana.product_name}} product release, there is **no change** in the {{config.extra.arcana.sdk_name}} package. Developers can continue to use {{config.extra.arcana.sdk_name}} v1.0.3 release.

## New Product Features

---

### Multi-Factor Authentication (MFA)

The latest {{config.extra.arcana.product_name}} provides enhanced wallet security for more robust user authentication through multi-factor authentication. Web3 app users can choose to enable it when they log into an app. Once enabled, it cannot be turned off. For details, see [how Arcana MFA]({{page.meta.arcana.root_rel_path}}/concepts/mfa.md) works in apps that integrate with the {{config.extra.arcana.sdk_name}}.

See the [[mfa-user-guide|MFA user's guide]] to learn more about how the app users can enable MFA for their app accounts and use the enhanced wallet security.

### Billing & Invoices

{{config.extra.arcana.product_name}} now supports [billing and invoicing features]({{page.meta.arcana.root_rel_path}}/concepts/billing.md) for Arcana Mainnet usage. Developers can use {{config.extra.arcana.dashboard_name}} to enter billing information and payment methods and to see any pending invoices or past payment details.

## Product Enhancements

---

### Better Login Performance

Users can now log in to Web3 apps even quicker than before with the recent speed boost in the latest {{config.extra.arcana.product_name}} product release. 

### Wallet Balance Precision

The {{config.extra.arcana.wallet_name}} UI now displays the wallet balance numeric value with the precision of 4 decimal places instead of 2 earlier.

## Bug Fixes

---

* The specified RPC URL for the wallet blockchain was not getting used when `AuthProvider` was instantiated. It is fixed and the specified `chainConfig` values are used instead of the default ones.

    ```ts hl_lines="6-7"
    const auth = new AuthProvider(
      "xar_dev_2cbfe3fc82840d8f4191935e1811b0c2e33619f8",
      {
        network: "dev",
        chainConfig: {
          chainId: CHAIN.ETHEREUM_GOERLI,
          rpcUrl: "https://goerli.blockpi.network/v1/rpc/public "
        },
        alwaysVisible: true,
        position: "right",
        theme: "dark"
      }
    );
    ```

* While deleting an app from the {{config.extra.arcana.dashboard_name}}, the developer can now see the app name in the text before confirming the delete operation.

* An issue with creating the Arcana Mainnet configuration profile by copying the Testnet profile due to logo copy failure has been fixed.

* An issue with updating and saving a new blockchain configuration using the wallet UI has been fixed.

* Deleted apps continued to show up in the 'Manage Apps' screen of the {{config.extra.arcana.dashboard_name}}. This issue is now fixed.


## Get Started

---

{==

*Ready to dive in?* 

==}

See [[auth-quick-start|{{config.extra.arcana.product_name}} Quick Start Guide]] in the Getting Started section. 

Check out the sample dApp integration example for apps using [[react-code-sample|React ]], [[nextjs-code-sample|NextJS ]], and [Vue](https://github.com/arcana-network/basic-storage-wallet-integration) frameworks.


## Use Latest {{config.extra.arcana.sdk_name}} 

---

If you have integrated the app with the {{config.extra.arcana.sdk_name}} v1.0.3 package already, then **you are all set!**

But if you are using an older version of the {{config.extra.arcana.sdk_name}} prior to v1.0.3 then refer to the [[index-migration-guides|Migration Guides]] and upgrade to the {{config.extra.arcana.sdk_name}} v1.0.3 release.

## Questions? 

---

Refer to the [[faq-gen| Arcana Auth FAQ]], [Troubleshooting Guide]({{page.meta.arcana.root_rel_path}}/troubleshooting.md), and other developer resources, or contact [Arcana Support]({{page.meta.arcana.root_rel_path}}/support.md).

