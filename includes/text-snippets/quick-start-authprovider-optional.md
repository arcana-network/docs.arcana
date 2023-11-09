??? example "`AuthProvider` Optional Parameters"

      You can optionally customize the following settings in the `AuthProvider` constructor:

      ---
      **`alwaysVisible`:** [[concept-wallet-visibility|{{config.extra.arcana.wallet_name}} visibility mode]] - always visible in the app context or only if a blockchain transaction is triggered by the app

      **`chainConfig`:**  use `chainId` to specify the chain identifier for the active chain in the wallet and `rpcUrl` for specifying the RPC Url for that chain identifier

      **`position`:**  wallet position within the app context - `left`|`right`

      **`theme`:** wallet theme - `light`|`dark`

      **`setWindowProvider`:** set `window.ethereum` in the app context with the standard EIP-1193 Ethereum provider value

      **`connectOptions`:** built-in login UI compact mode - `true`|`false`

      ---

      See [`AuthProvider` constructor parameters](https://authsdk-ref-guide.netlify.app/interfaces/constructorparams) for details.