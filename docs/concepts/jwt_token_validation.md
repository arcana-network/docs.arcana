---
alias: concept-jwt-token-validation
title: 'How to validate Arcana JWT Token?'
description: 'Arcana Auth SDK verifies the token returned by the social login provider and then returns an Arcana JWT Token to the app. Use instructions here to verify the token in the app.'
arcana:
  root_rel_path: ..
---

# Verify Arcana JWT Token

Apps integrating with the {{config.extra.arcana.sdk_name}} receive a unique JWT token. This token is generated upon successful user authentication via these `AuthProvider` methods:

* Plug-and-play login UI: `connect()` 
* Custom login UI: `loginWithSocial()`, `loginWithLink()`(deprecated), `loginWithOTPStart`, `loginWithOTPComplete`, and `loginWithBearer()`

The {{config.extra.arcana.company_name}} JWT token is generated with an asymmetric key. What this means is that after a successful user login, the app developers must use the public key in order to verify the received token. 

Use the appropriate public key listed below to verify the token depending upon whether the app is deployed on the {{config.extra.arcana.company_name}}  Testnet or Mainnet.

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

```sh
-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE0UWoYfR6ii+6PTfWPDtY8jKLJtL1
8+Nu+qDkaMjFXVlWg6oVpHdBMBvsmia2aQsrjKrYHdmMz5bntsEAu+7QdA==
-----END PUBLIC KEY-----
```
