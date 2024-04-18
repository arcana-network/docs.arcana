```js
await auth.loginWithLink(`${email}`)
```

!!! an-caution "Deprecated"

      `loginWithLink` is deprecated.

      Use `loginWithOTPStart`, `loginWithOTPComplete` for passwordless login with OTP. The OTP will be received via email supplied in `loginWithOTPStart` call.

