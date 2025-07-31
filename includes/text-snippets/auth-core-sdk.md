The {{config.extra.arcana.auth_core_sdk_name}} is a client-side tool for developers to assign Web3 keys to authenticated users for signing blockchain transactions. Use this SDK instead of the {{config.extra.arcana.sdk_name}} for key assignment or when building a completely whitelisted solution.

When initializing {{config.extra.arcana.auth_core_sdk_name}}, the developer sets the redirect URL. The SDK performs OAuth2 login with the chosen provider and returns the login token from the provider. At the specified redirect URL, the developer uses this token to fetch the user's private key.

!!! an-warning "Limited Feature SDK"

      The {{config.extra.arcana.auth_core_sdk_name}} has limited capabilities as compared to the {{config.extra.arcana.auth_core_sdk_name}}:

      * No built-in plug-and-play login UI feature
      * No built-in Arcana wallet UI
      * No support for Global keys, only app-specific keys (default) are allowed.
      * No support for enhanced wallet security via MFA.