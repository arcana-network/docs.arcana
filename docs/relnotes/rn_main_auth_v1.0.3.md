---
slug: /rn_main_auth_v1_0_3
id: idrnmainauthv103
sidebar_custom_props:
  cardIcon: 🏁
arcana:
  root_rel_path: ..
---

# Release Notes Arcana Auth (Mainnet)

{==

**Version: v1.0.3**

**Release Date: March 8th, 2023**

==}

## Feature Updates

### Social Provider: AWS Cognito

Arcana Auth SDK now allows Web3 apps to configure AWS Cognito as the social provider for user authentication. See [how to onboard users via Cognito]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/build_social/wallet_cognito_oauth.md) for details.

### New API: showWallet()

Developers can use `showWallet()` function to display the in-built Arcana wallet UI in the context of an app integrated with the Auth SDK. The `showWallet()` function can be called in the application context after the `AuthProvider` is created and initialized using the `init` function. Once the app is deployed and the user logs in, the `showWallet` function call brings up the wallet UI. For details, see [Arcana Wallet Developer's Guide]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md).

## Enhancements

### Better Login Performance

The Auth SDK has been updated for better login performance powered by an improved [ADKG subsystem](https://github.com/arcana-network/adkg/releases).

---

## Get Started

{==

*New to Auth SDK and ready to dive in?* 

==}

See [Auth SDK Quick Start Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_qs.md). 

For step-by-step instructions, see [how to integrate with Auth SDK]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) guide. 

Check out the sample dApp integration example with the Arcana SDKs for [React]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/integrate_wallet_react.md),[Vue](https://github.com/arcana-network/basic-storage-wallet-integration) dApps.

---

## Migrate to v1.0.3

Are you using an older version of the Arcana Auth SDK? Refer to the [Migration Guides]({{page.meta.arcana.root_rel_path}}/migration/index.md) and upgrade to the latest version.

## Questions? 

Refer to [FAQ]({{page.meta.arcana.root_rel_path}}/faq/faq_gen.md), [Troubleshooting Guide]({{page.meta.arcana.root_rel_path}}/troubleshooting.md), and other developer resources or contact [Arcana Support]({{page.meta.arcana.root_rel_path}}/support.md).
