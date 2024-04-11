!!! an-tip "Global vs. App Specific Keys"

      Apps using app-specific keys must add custom UI code that allows users to input the OTP at login. In this case, the `isCompleteRequired` boolean returns `true` after initiating login with OTP.

      Apps using global keys are not required to add custom UI. A built-in login UI to enter the OTP is displayed automatically. Users must enter the OTP received via email in this UI.