Upon successful authentication, {{config.extra.arcana.sdk_name}} returns a unique JWT token to the app. This token is generated upon successful authentication via any of the supported methods of the `AuthProvider`:

    * Plug-and-play login `connect()` 
    * Custom login UI methods such as `loginWithSocial()`, `loginWithLink()` and `loginWithBearer()`

    Developers can use `getUser()` method to access the JWT token via the [`UserInfo`](https://authsdk-ref-guide.netlify.app/interfaces/userinfo) return value. This token expires after 3 minutes. The app developer must first verify the token returned by Arcana and then post-verification, create newer app-specific JWT token, if required, and use them for subsequent calls.

    Note that the {{config.extra.arcana.sdk_name}} uses the JWT token returned by the social provider to verify the user internally before creating the Arcana JWT token and returning it to the app after successful authentication. See [[concept-jwt-token-validation|how to validate Arcana JWT token]] for details.