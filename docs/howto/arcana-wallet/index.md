---
alias: index-arcana-wallet
title: 'Enable Arcana Wallet'
description: 'How to call the Arcana wallet and Web3 wallet operations in an app integrated with the Arcana Auth SDK for performing wallet operations programmatically.'
arcana:
  root_rel_path: ../..
---

# Enable {{config.extra.arcana.wallet_name}}

Application developers can enable the authenticated users in a Web3 app to sign blockchain transactions using the {{config.extra.arcana.wallet_name}}. Authenticated users can access the wallet UI and perform various Web3 wallet operations such as adding/switching blockchain networks, checking their wallet balance, managing crypto assets, and [more]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md).

To enable the {{config.extra.arcana.wallet_name}} in the context of a Web3 application, first the developer must [[configure-auth|register the app]] by using the {{config.extra.arcana.dashboard_name}}. Then they must [[index-configure-auth|configure authentication providers]] for onboarding the app users. Lastly, developers need to select the appropriate integration method as per the app type and [[index-integrate-app|integrate the app]] with the {{config.extra.arcana.sdk_name}}. During integration, developers can configure the wallet visibility parameter to manage the user experience for signing blockchain transactions.

Once the app is integrated with the {{config.extra.arcana.sdk_name}}, developers can access the standard Ethereum provider `AuthProvider` and add code to use various Web3 wallet functions programmatically for the authenticated users. 

The guides below describe how to configure the {{config.extra.arcana.wallet_name}} while integrating the app with the {{config.extra.arcana.sdk_name}} and then add code to call Web3 wallet operations in the context of the authenticated users.

[[configure-wallet-visibility|Configure {{config.extra.arcana.wallet_name}} :material-tools:]]{ .md-button }

[[index-web3-wallet-ops|Web3 Wallet Ops :material-wallet:]]{ .md-button }

<!--
[[index-build-iam-providers|Apps using Custom IAM Providers :fontawesome-brands-aws:]]{ .md-button }
-->