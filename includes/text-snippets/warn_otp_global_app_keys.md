??? an-warning "Global vs. App Specific Keys"

      Apps using app-specific keys must use a custom login UI that allows users to input the OTP. In this case, the `isCompleteRequired` boolean returns `true` after initiating login with OTP.

      Apps using global keys are not required to use a custom login UI. A built-in login UI is automatically displayed for the user for OTP. Users must enter the OTP received via email in this UI.