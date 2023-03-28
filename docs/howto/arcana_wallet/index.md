---
slug: /indexwalletdev
id: idindexwalletdev
title: Enable Arcana Wallet
sidebar_custom_props:
  cardIcon: 📺
arcana:
  root_rel_path: ../..
---

# Enable {{config.extra.arcana.wallet_name}}

Application developers can enable the authenticated users in a Web3 app to sign blockchain transactions using the {{config.extra.arcana.wallet_name}}. Authenticated users can access the wallet UI and perform various Web3 wallet operations such as adding/switching blockchain networks, checking their wallet balance, managing crypto assets, and [more]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md).

To enable the {{config.extra.arcana.wallet_name}} in the context of a Web3 application, first the developer must [register the app]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) by using the {{config.extra.arcana.dashboard_name}}. Then they must [configure authentication providers]({{page.meta.arcana.root_rel_path}}/howto/config_social/index.md) for onboarding the app users. Lastly, developers need to select the appropriate integration method as per the app type and [integrate the app]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) with the {{config.extra.arcana.sdk_name}}. During integration, developers can configure the wallet visibility parameter to manage the user experience for signing blockchain transactions.

Once the app is integrated with the {{config.extra.arcana.sdk_name}}, developers can access the standard Ethereum provider `AuthProvider` and add code to use various Web3 wallet functions programmatically for the authenticated users. 

The guides below describe how to configure the {{config.extra.arcana.wallet_name}} while integrating the app with the {{config.extra.arcana.sdk_name}} and then add code to call Web3 wallet operations in the context of the authenticated users.

[Configure {{config.extra.arcana.wallet_name}} :material-tools:](./config_walletvisibility.md){ .md-button }

[Web3 Wallet Ops :material-wallet:](./web3ops/index.md){ .md-button }

[Apps using Custom IAM Providers :fontawesome-brands-aws:](../plug_idm/index.md){ .md-button }
