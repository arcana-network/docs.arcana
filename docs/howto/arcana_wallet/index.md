---
slug: /indexwalletdev
id: idindexwalletdev
sidebar_custom_props:
  cardIcon: 📺
arcana:
  root_rel_path: ../..
---

# Enable Arcana Wallet

Application developers can enable Arcana wallet into a dApp and allow authenticated users to sign blockchain transactions, switch networks, check balance, send tokens, watch assets and [more]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md).

To enable Arcana wallet in the context of a Web3 application, you need to first [register your Web3 application]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) and [configure user authentication mechanisms]({{page.meta.arcana.root_rel_path}}/howto/config_social_providers.md) using the Arcana Dashboard. After that you must install the `@arcana/auth` package and follow the [instructions to integrate your application]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md).

Once you have integrated your application with the Auth SDK, you can access the standard Ethereum provider `AuthProvider` and use various Web3 wallet functions programmatically in your application from the list below:

[Configure Arcana Wallet :material-tools:](./config_wallet_modes.md){ .md-button }

[Add/Switch Networks :material-wifi-cog:](./wallet_add_switch_ntwk.md){ .md-button }

[Check Wallet Balance :material-wallet:](./wallet_balance.md){ .md-button }

[Send Tokens :fontawesome-solid-coins:](./wallet_send.md){ .md-button }

[Sign Transactions :material-signature-freehand:](./wallet_sign.md){ .md-button }

[Show Wallet :material-wallet-plus:](./wallet_show.md){ .md-button }

[Watch Assets :fontawesome-solid-magnifying-glass-dollar:](./wallet_watchasset.md){ .md-button }