??? an-example "`AuthProvider` Optional Parameters"

      Besides {{config.extra.arcana.app_address}} input parameter, you can optionally customize these settings in the `AuthProvider` constructor:

      ---

      **`position`:**  wallet position within the app context - `left`|`right`

      **`theme`:** wallet theme - `light`|`dark`

      **`connectOptions`:** built-in login UI compact mode - `true`|`false`

      ---

      See [`AuthProvider` constructor parameters](https://authsdk-ref-guide.netlify.app/interfaces/constructorparams) for details.

<!-----
      **`setWindowProvider`:** set `window.ethereum` in the app context with the standard EIP-1193 Ethereum provider value

      **`alwaysVisible`:** [[concept-wallet-visibility|{{config.extra.arcana.wallet_name}} visibility mode]] - always visible in the app context or only if a blockchain transaction is triggered by the app

      **`chainConfig`:**  use `chainId` to specify the chain identifier for the active chain in the wallet and `rpcUrl` for specifying the RPC Url for that chain identifier
---->