First import `AuthProvider` from the `{{config.extra.arcana.auth_sdk_pkg_name}}` package.

{% include "./code-snippets/import_auth.md" %}

Create a new `AuthProvider`, specify the unique **{{config.extra.arcana.app_address}}** obtained earlier during app registration.

{% include "./code-snippets/new_auth.md" %}

After creating, make sure you initialize the newly instantiated `AuthProvider`.

{% include "./code-snippets/init_auth.md" %}

!!! caution "Initialize First!"

    The app must use `await` until the `init()` call is complete, before invoking any of the other {{config.extra.arcana.sdk_name}} functions.

??? example "`AuthProvider` Optional Parameters"

      You can optionally customize the following settings in the `AuthProvider` constructor:

      ---
      **`alwaysVisible`:** [[concept-wallet-visibility|{{config.extra.arcana.wallet_name}} visibility mode]] - always visible in the app context or only if a blockchain transaction is triggered by the app

      ** `chainConfig`:**  use `chainId` to specify the chain identifier for the active chain in the wallet and `rpcUrl` for specifying the RPC Url for that chain identifier

      ** `position`:**  wallet position within the app context - `left`|`right`

      ** `theme`:** wallet theme - `light`|`dark`

      ** `setWindowProvider`:** set `window.ethereum` in the app context with the standard EIP-1193 Ethereum provider value

      ** `connectOptions`:** built-in login UI compact mode - `true`|`false`

      ---

      See [`AuthProvider` constructor parameters](https://authsdk-ref-guide.netlify.app/interfaces/constructorparams) for details.

After initializing the `AuthProvider`, you can call any of its exported functions. For example, the code below shows how to access the standard EIP-1193 Ethereum provider:

{% include "./code-snippets/provider.md" %}

Next, add code to facilitate user onboarding in the app.