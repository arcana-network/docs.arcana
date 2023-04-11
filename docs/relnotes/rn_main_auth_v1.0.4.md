---
slug: /rn_main_auth_v1_0_4
id: idrnmainauthv104
sidebar_custom_props:
  cardIcon: 🏁
arcana:
  root_rel_path: ..
---

# Release Notes Arcana Auth (Mainnet)

{==

**Version: v1.0.4**

**Release Date: April 4th, 2023**

==}

## Feature Updates

---

### Billing & Invoices

{{config.extra.arcana.sdk_name}} now supports [billing and invoicing features]({{page.meta.arcana.root_rel_path}}/concepts/billing.md) for Arcana Mainnet usage. Developers can use {{config.extra.arcana.dashboard_name}} to enter billing information and payment methods and to see any pending invoices or past payment details.

### Multi-Factor Authentication (MFA)

The latest {{config.extra.arcana.sdk_name}} provides enhanced wallet security for more robust user authentication through multi-factor authentication. Web3 app users can choose to enable it when they log into an app. Once enabled, it cannot be turned off. For details, see [how Arcana MFA]({{page.meta.arcana.root_rel_path}}/concepts/mfa.md) works in apps that integrate with the {{config.extra.arcana.sdk_name}}.

App users can set up MFA individually for their app accounts and enable enhanced wallet security. See the [MFA user's guide]({{page.meta.arcana.root_rel_path}}/user_guides/mfa/mfa_ug.md) for details.

## Enhancements

---

### Better Login Performance

Users can now log in to Web3 apps even quicker than before with the latest speed boost in the {{config.extra.arcana.sdk_name}}. 

### Wallet Balance

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

*New to Auth SDK and ready to dive in?* 

==}

See [Auth SDK Quick Start Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_qs.md). 

For step-by-step instructions, see [how to integrate with Auth SDK]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) guide. 

Check out the sample dApp integration example with the Arcana SDKs for [React/NextJS]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/integrate_wallet_react.md), and [Vue](https://github.com/arcana-network/basic-storage-wallet-integration) frameworks based dApps.

---

## Migrate to v1.0.4

---

Are you using an older version of the Arcana Auth SDK? Refer to the [Migration Guides]({{page.meta.arcana.root_rel_path}}/migration/index.md) and upgrade to the latest version.

## Questions? 

---

Refer to [FAQ]({{page.meta.arcana.root_rel_path}}/faq/faq_gen.md), [Troubleshooting Guide]({{page.meta.arcana.root_rel_path}}/troubleshooting.md), and other developer resources, or contact [Arcana Support]({{page.meta.arcana.root_rel_path}}/support.md).
