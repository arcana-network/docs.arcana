!!! an-note "MFA Enabled / Disabled"

      During passwordless login via OTP, apps configured for MFA and those using overlays must hide it to enable OTP input. Use the `isMFARequired` callback in the `loginWithOTPComplete` method to hide the overlay.