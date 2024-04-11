---
alias: concept-arcana-jwt-token
title: 'Arcana JWT Token?'
description: 'Arcana Auth SDK verifies the token returned by the social login provider and then returns an Arcana JWT Token to the app. Learn more.'
arcana:
  root_rel_path: ..
---

# Arcana JWT Token

Upon successful authentication, {{config.extra.arcana.sdk_name}} returns a unique JWT token to the app. This token is generated upon successful authentication via any of the supported methods of the `AuthProvider`:

* Plug-and-play login `connect()` 
* Custom login UI methods such as `loginWithSocial()`, `loginWithLink()` (deprecated), `loginWithOTPStart`,`loginWithOTPComplete` and `loginWithBearer()`

Developers can use `getUser()` method to access the JWT token via the [`UserInfo`](https://authsdk-ref-guide.netlify.app/interfaces/userinfo) return value. This token expires after 3 minutes. The app developer must first [[concept-jwt-token-validation|verify the token returned by Arcana]] and then post-verification, create newer app-specific JWT token, if required, and use them for subsequent calls.

```js
/* Make sure
   1. AuthProvider is created and initialized via .init() call
   2. User is onboarded via plug and play login UI .connect() call 
      or 
      with custom login UI loginWithSocial, loginWithLink (deprecated), `loginWithOTPStart` and `loginWithOTPComplete`, loginWithBearer calls
*/
try {
  const userInfo = await auth.getUser();
  const jwtToken = userInfo.loginToken;
  console.log("Arcana JWT Token: ", jwtToken);
} catch (e) {
  console.log(e);
}
```

!!! an-note "User validation"

      Note that the {{config.extra.arcana.sdk_name}} uses the JWT token returned by the social login provider, after user authentication, to verify the user internally before creating its own Arcana JWT token and returning it to the app.
