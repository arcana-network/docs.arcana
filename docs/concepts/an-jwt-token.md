---
alias: concept-arcana-jwt-token
title: 'Arcana JWT Token?'
description: 'Arcana Auth SDK verifies the token returned by the social login provider and then returns an Arcana JWT Token to the app. Learn more.'
arcana:
  root_rel_path: ..
---

# {{config.extra.arcana.company_name}} JWT Token

Upon successful authentication, {{config.extra.arcana.sdk_name}} returns a unique JWT token to the app. This token is generated upon successful authentication via any of the supported methods of the `AuthProvider`:

* Plug-and-play login `connect()` 
* Custom login UI methods such as `loginWithSocial()`, `loginWithLink()` (deprecated), `loginWithOTPStart`,`loginWithOTPComplete` and `loginWithBearer()`

After the user selects a social login provider and authenticates with the provider, the {{config.extra.arcana.sdk_name}} receives the JWT token from the selected provider. The {{config.extra.arcana.sdk_name}} verifies the user via this token first and then creates and returns a new {{config.extra.arcana.company_name}} JWT token to the app. The app must verify the token returned by the {{config.extra.arcana.sdk_name}}.

## Verify {{config.extra.arcana.company_name}} JWT Token 

The JWT token returned by the {{config.extra.arcana.sdk_name}} expires after 3 minutes. 

It is recommended that the app developer must first [[concept-jwt-token-validation|verify the token returned by {{config.extra.arcana.company_name}}]] before generating an app-specific JWT token for further use within the app context.

Developers can use `getUser()` method to access the JWT token returned by the {{config.extra.arcana.sdk_name}} via the [`UserInfo`](https://authsdk-ref-guide.netlify.app/interfaces/userinfo) return value. 

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
## App-specific JWT Token

After verification of the JWT token returned by the {{config.extra.arcana.sdk_name}}, developers must create another app-specific JWT token, if required, and use the subsequent token in the app.

For example, if the app developer needs to implement *Role Based Access Control (RBAC)* and authorize the authenticated user for some specific actions, they can first [[concept-jwt-token-validation|verify the token returned by {{config.extra.arcana.company_name}}]]. Upon verification, they can issue a new app-specific JWT that enables RBAC and authorization. 
      
Alternately, for RBAC, developers can use Sign-In with Ethereum ([SIWE](https://www.npmjs.com/package/siwe)) by signing a standard message format parameterized by scope, session details, and security mechanisms (for example, a nonce).
      
SIWE allows users to log in to applications using their Ethereum wallet and ENS (Ethereum Name Service) profile. 