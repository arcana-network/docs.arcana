---
alias: concept-wallet-visibility
title: 'Wallet Visibility'
description: 'Is the wallet always visible in the app context or can it be displayed only when required by the app? learn more.'
arcana:
  root_rel_path: ../..
---

# Wallet Visibility

The [[concept-index-arcana-wallet|{{config.extra.arcana.wallet_name}}]] is an embedded, non-custodial Web3 wallet that is enabled for every user that logs into an app integrated with the {{config.extra.arcana.sdk_name}}. App developers can manage the wallet user experience by controlling the wallet's visibility in the app context.

To manage the {{config.extra.arcana.wallet_name}} visibility, the applications must [[index-integrate|integrate with the {{config.extra.arcana.sdk_name}}]], specify the appropriate `alwaysVisible` input parameter while instantiating the `AuthProvider`, and choose one of the wallet visibility modes:

* **Always visible mode**: Visible once the user logs into an app
* **Not always visible mode**: Visible only when a user is logged into an app and a blockchain transaction requires the user's approval

## `alwaysVisible=true`

By default, `alwaysVisible` is set to `true` and the wallet is displayed immediately after a user logs into the app that is integrated with the {{config.extra.arcana.sdk_name}}.

As the wallet is always visible in the context of the app, an authenticated user has full access to all the Web3 wallet operations supported by the {{config.extra.arcana.wallet_name}}. For example, checking the wallet account balance, adding or switching blockchain networks, and sending/receiving native/custom tokens. Users can choose to minimize/maximize the {{config.extra.arcana.wallet_name}} UI displayed on the application screen.

<figure markdown="span">
  <img alt="Wallet In-app Visibility: Enabled" src="{{config.extra.arcana.img_dir}}/an_wallet_full_ui_mode.{{config.extra.arcana.img_png}}" class="an-screenshots width_85pc"/>
  <figcaption>Wallet In-app Visibility: Enabled</figcaption>
</figure>

## `alwaysVisible=false`

If `alwaysVisible` is set to `false`, then the {{config.extra.arcana.wallet_name}} UI does not show up on the application window immediately after a user logs in. The {{config.extra.arcana.wallet_name}} UI is displayed only when a blockchain transaction is triggered that requires the user's approval.

Once the user takes action, the request disappears and the user cannot access the {{config.extra.arcana.wallet_name}} UI until another blockchain transaction is triggered.  Unlike the always visible mode, authenticated app users **cannot** access the {{config.extra.arcana.wallet_name}} UI on demand and add or switch networks, view the account balance or initiate send/receive of native/custom tokens, or maximize/minimize the {{config.extra.arcana.wallet_name}}.

<figure markdown="span">
  <img alt="Wallet In-app Visibility: Disabled" src="{{config.extra.arcana.img_dir}}/an_wallet_widget_mode.{{config.extra.arcana.img_png}}" class="an-screenshots width_85pc"/>
  <figcaption>Wallet In-app Visibility: Disabled</figcaption>
</figure>

## Summary

The table below summarizes how `alwaysVisible` parameter specified during the `AuthProvider` initialization in the application code controls the user experience. For step-by-step instructions see [[configure-wallet-visibility|how to configure the {{config.extra.arcana.wallet_name}} visibility mode]] guide.

| Wallet UI Mode | Flag | User Experience|
| :------ | :----- | :----------- |
| **Always visible** | `alwaysVisible = true` <br></br>(default)  | 1. {{config.extra.arcana.wallet_name}}is always visible on the application screen. |
|         |  | 2. Users can minimize the {{config.extra.arcana.wallet_name}} and it shows as a small widget on the application screen. |
|         |  | 3. Users can access any of the supported [[concept-arcana-wallet-overview| {{config.extra.arcana.wallet_name}} functions]] using the wallet UI at any point in time. |
|         |  | 4. When a user action triggers a blockchain transaction, a transaction notification is displayed, and the user can approve or reject the request or ignore it. If a user ignores the request, it is highlighted as a pending request. In the wallet minimized state, a red dot is shown to indicated a pending request. User can click on the wallet minimized state to bring up the wallet and act upon the notification. In the maximized wallet state, a red dot is displayed on the notification tab of the wallet indicating a pending transaction notification. Other transaction notifications queue up until the user takes action on the first one.|
| **Not always visible** | `alwaysVisible = false` | 1. {{config.extra.arcana.wallet_name}} is not visible in the app context by default. It is displayed only when a user action triggers a blockchain transaction or if the developer calls `showWallet()` function in the app logic. A blockchain transaction triggers notification. Once the user takes an action, the notification disappears.|
|       |  | 2. Users cannot minimize the {{config.extra.arcana.wallet_name}} if this mode is selected by the application.|
|       |  | 3. Users cannot access any of the supported [[concept-arcana-wallet-overview| {{config.extra.arcana.wallet_name}} functions]] through the wallet UI.|
|       |  | 4. When a user action triggers a blockchain transaction, the {{config.extra.arcana.wallet_name}} transaction notification pops up. It disappears after the user takes an action. If there are other blockchain transactions that show up while the user has not reviewed the current request, those will stay hidden and queue up. After the user action for the first action, subsequent transaction notifications will be displayed one by one for the other pending notifications.  For multiple blockchain transactions, the user will see a series of pop-ups, and then after a user action, those will disappear. In this mode, there is no way for the user to ignore the transaction notification or access the {{config.extra.arcana.wallet_name}} to perform other Web3 wallet operations before first acting upon the transaction notifications.|

