---
alias: index-onboard-users
title: 'Onboard Users'
description: 'Use these guides to add code in the app for onboarding users via the configured authentication mechanisms. Use plug-and-play UI or build custom UI to onboard users.'
arcana:
  root_rel_path: ../..
---

# Onboard Users

User onboarding requires developers to first register their applications and configure the authentication providers using the {{config.extra.arcana.dashboard_name}}. Next, install and integrate the app with the {{config.extra.arcana.sdk_name}}.

After integration, the Web3 apps can add code to onboard users via the configured authentication providers and passwordless by using built-in plug-and-play auth UI or custom login UI.

[[wagmi-quick-start| :material-wallet-plus:{ .icon-color} Wagmi Apps]]{ .md-button }
[[rainbowkit-quick-start| :material-wallet-outline:{ .icon-color} RainbowKit Apps ]]{ .md-button }
[[web3-react-quick-start| :material-transit-connection-variant:{ .icon-color} Web3-React Apps]]{ .md-button }
[[react-nextjs-quick-start| :material-react:{ .icon-color} :fontawesome-brands-js:{ .icon-color} React/Next.js Apps]]{ .md-button }
[[index-vanilla-onboard-users| :fontawesome-solid-plug:{ .icon-color} Vanilla HTML/CSS/JS App]]{ .md-button }
[[index-vue-onboard-users| :material-card-account-mail:{ .icon-color} Vue App]]{ .md-button }
[[gasless-user-onboarding| :material-gas-station-off:{ .icon-color} Gasless App]]{ .md-button }
[[solana-user-onboarding| :simple-solid:{ .icon-color} Solana App]]{ .md-button }
[[mvx-user-onboarding| :simple-infinity:{ .icon-color} MultiversX App ]]{ .md-button }
[[unity-user-onboarding| :simple-unity:{ .icon-color} Unity App ]]{ .md-button }

!!! an-tip  "Auto-Reconnect Enhancement"

     Earlier, the {{config.extra.arcana.dashboard_name}} SDK did not allow apps to use third-party cookies to facilitate easy user re-login. Now developers can use `canReconnect` and `reconnect` functions of the `AuthProvider` within a 30-min window of the user-logout action. This will allow users to automatically reconnect without re-authentication. See [`canReconnect`](https://authsdk-ref-guide.netlify.app/classes/authprovider#canReconnect) and [`reconnect`](https://authsdk-ref-guide.netlify.app/classes/authprovider#reconnect) for details.