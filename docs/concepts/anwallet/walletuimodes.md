---
slug: /walletuimodes
id: idwalletuimodes
title: Wallet Visibility
sidebar_custom_props:
  cardIcon: ▶️
arcana:
  root_rel_path: ../..
---

The Arcana wallet is an embedded, non-custodial Web3 wallet that is enabled for every user that logs into an app integrated with the Auth SDK. App developers can manage the wallet user experience by controlling the wallet's visibility in the app context.

To manage the [Arcana wallet]({{page.meta.arcana.root_rel_path}}/concepts/anwallet) visibility, the applications must [integrate with the Arcana Auth SDK]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md), specify the appropriate `alwaysVisible` input parameter while instantiating the `AuthProvider`, and choose one of the wallet visibility modes:

* **Always visible mode**: Visible once the user logs into an app
* **Not always visible mode**: Visible only when a user is logged into an app and a blockchain transaction requires the user's approval

## Wallet Visibility: `alwaysVisible=true`

By default, `alwaysVisible` is set to `true` and the wallet is displayed immediately after a user logs into the app that is integrated with the Auth SDK.

As the wallet is always visible in the context of the app, an authenticated user has full access to all the Web3 wallet operations supported by the Arcana wallet. For example, checking the wallet account balance, adding or switching blockchain networks, and sending/receiving native/custom tokens. Users can choose to minimize/maximize the wallet UI displayed on the application screen.

<img alt="wallet alwaysVisible true mode" src="/img/an_wallet_full_ui_mode.png" width="85%"></img>

## Wallet Visibility: `alwaysVisible=false`

If `alwaysVisible` is set to `false`, then the wallet screen does not show up on the application window immediately after a user logs in. The wallet UI is displayed only when a blockchain transaction is triggered that requires the user's approval.

Once the user takes action, the request disappears and the user cannot access the wallet screen until another blockchain transaction is triggered.  Unlike the always visible mode, authenticated app users **cannot** access the wallet UI on demand and add or switch networks, view their wallet balance or initiate send/receive of native/custom tokens, or maximize/minimize the wallet.

<img alt="wallet widget mode" src="/img/an_wallet_widget_mode.png" width="85%"></img>

## Summary

The table below summarizes how `alwaysVisible` parameter specified during Auth SDK initialization in the application code controls the user experience. For step-by-step instructions see [how to configure Arcana wallet visibility mode]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/config_wallet_modes.md) guide.

| Wallet UI Mode | Flag | User Experience|
| :------ | :----- | :----------- |
| **Always visible** | `alwaysVisible = true` <br></br>(default)  | 1. Arcana Wallet is always visible on the application screen. |
|         |  | 2. Users can minimize the wallet and it shows as a small widget on the application screen. |
|         |  | 3. Users can access any of the supported [wallet features]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/walletfeatures.md) using the Arcana wallet screen at any point in time. |
|         |  | 4. When a user action triggers a blockchain transaction, the wallet screen switches to the notification screen, and the user can approve or reject the request. If the wallet is minimized, a red dot is shown and when the user selects it, the wallet notification screen comes up. It displays the current blockchain request waiting for user action. If the user was using the wallet screen to perform other operations such as switching the network, when a notification arrives, in that case, a red dot shows on the notification tab of the wallet. Other requests queue up until the user takes action on the first one.|
| **Not always visible** | `alwaysVisible = false` | 1. Arcana wallet is not visible on the application screen by default. It shows up only when a user action triggers a blockchain transaction. The user request notification screen is displayed for user action. Once the user takes an action, the wallet screen disappears.|
|       |  | 2. Users cannot minimize the wallet if this mode is selected by the application.|
|       |  | 3. Users cannot access any of the supported [wallet features]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/walletfeatures.md) through the wallet.|
|       |  | 4. When a user action triggers a blockchain transaction, the Arcana wallet screen pops up. It disappears after the user takes an action. If there are other blockchain transactions that show up while the user has not reviewed the current request, those will stay hidden and queued up. After the user action for the first action, subsequent actions will result in the Arcana wallet screen showing up for other requests one by one.  For multiple blockchain transactions, the user will see a series of pop-ups, and then after a user action, those will disappear. There is no way for the user to ignore them or perform another action on the application.|

