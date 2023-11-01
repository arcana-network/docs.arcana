After adding code to onboard users, you can use the standard JSON RPC Web3 wallet functions supported by the `AuthProvider` to issue blockchain transactions. The embedded, non-custodial {{config.extra.arcana.wallet_name}} is available in the app's context right after a user logs in. It allows authenticated users to [[sign-transaction|sign blockchain transactions]], send and receive tokens, NFTs, and [[index-arcana-wallet| more]].

The {{config.extra.arcana.wallet_name}} appears in a compact form within the app. Clicking on the wallet icon displays the maximized wallet UI.

<img src="/img/an_wallet_min_light_vanilla.gif#only-dark" width="50%"/><img src="/img/an_wallet_min_dark_vanilla.gif#only-light" width="50%"/> 

By default, users see the built-in {{config.extra.arcana.wallet_name}} UI displayed in the app's context. Developers can instead choose a custom wallet UI. The decision to choose a custom wallet UI must be made at the time of registering the app. When creating a new app, specify the **Wallet UI Mode** setting as `custom UI` instead of the default `Arcana UI`. See [[custom-wallet-ui|how to enable custom wallet UI]] for details. 

Refer to the {% include "./text-snippets/authsdkref_url.md" %}, and the [[index-arcana-wallet|{{config.extra.arcana.wallet_name}} Developer's Guide]].

After enabling the wallet, deploy the app.