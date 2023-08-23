---
alias: concept-jwt-token-validation
title: 'How to validate Arcana JWT Token?'
description: 'Arcana Auth SDK verifies the token returned by the social provider and then returns an Arcana JWT Token to the app. Use instructions here to verify the token in the app.'
arcana:
  root_rel_path: ..
---

# Verify Arcana JWT Token

Upon successful authentication, {{config.extra.arcana.sdk_name}} returns a unique JWT token to the app. This token is generated upon successful authentication via any of the supported methods of the `AuthProvider`:

    * Plug-and-play login `connect()` 
    * Custom login UI methods such as `loginWithSocial()`, `loginWithLink()` and `loginWithBearer()`

The Arcana JWT token is generated with an asymmetric key so the app developers need to use the public key in order to verify the token after a successful user login in the app. Use the appropriate public key listed below to verify the token depending upon whether the app is deployed on the Arcana Testnet or Mainnet.

## Token Verification: Dev

```sh
-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAES2oy0bmXvYh1dIVU017/WW17Wdet
Clx9+8HxPvGHegrBaoZadbeKhfBSfQbxBcdzpDe+3EqUVwvwH3hMIoqa3A==
-----END PUBLIC KEY-----
```

## Token Verification: Testnet 

```sh
-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAETjlG1BIL2x0LwJH5iIxXXfJaokUb
5EyhK8/TCwlQbVPFy6N40kD4Bnbs4JRJOEssp5/YSgUnrR8JrB0QgC+NpA==
-----END PUBLIC KEY-----
```

## Token Verification: Mainnet

We will update this section soon! Stay tuned.
