When using the default, built-in {{config.extra.arcana.wallet_name}} UI, authenticated users can securely access and copy the private key via the user profile tab of the wallet.

Apps that choose to use a custom wallet UI instead, can build their own UI and enable authenticated users to securely access the private key via the `_arcana_getPrivateKey` method. Use `AuthProvider` to call `request` JSON/RPC call and supply `_arcana_getPrivateKey` method to obtain the key securely in the user's context.

!!! an-warning "Global Keys Option"

    If the app is configured through the {{config.extra.arcana.dashboard_name}} for using the default [[concept-keyspace-type|app specific keys option]], then `_arcana_getPrivateKey` can be used. Not available for Global Keys Keyspace configuration setting for security reason.
