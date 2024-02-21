<!---
=== "MFA Disabled"

    ```js
    try {
      const loginState = await auth.loginWithOTPStart("john.doe@somemail.com");
      await loginState.begin()
      if(loginState.isCompleteRequired) {
        // App is using default app-specific keys
        // App must ask the user to input a 6-digit code received in mail
        var userInput = prompt("Please enter a 6-digit code:", "111111");

        // Validate if the input is a 6-digit code
        if (userInput !== null && 
            userInput.length === 6 && 
            !isNaN(userInput)) {
          const complete = await auth.loginWithOTPComplete(userInput);
          console.log("complete:",complete);
        } else {
          console.log("Invalid input. Please enter a valid 6-digit code.");
        } 
      } else {
        // App is using global keys, built-in OTP input UI is displayed by the SDK
        // App is not required to add code for OTP input
      }
    } catch (e) {
      console.log(e);
    }
    ```

=== "MFA Enabled"

Note: Fix tab removal below in code when uncommenting the one above.
--->

```js
try {
  const loginState = await auth.loginWithOTPStart("john.doe@somemail.com");
  await loginState.begin()
  if(loginState.isCompleteRequired) {
    // App is using default app-specific keys
    // App must ask the user to input a 6-digit code received in mail
    var userInput = prompt("Please enter a 6-digit code:", "111111");

    // Validate if the input is a 6-digit code
    if (userInput !== null && 
        userInput.length === 6 && 
        !isNaN(userInput)) {
      const complete = await auth.loginWithOTPComplete(
        userInput, 
        onMFARequired() => {
        //Hide overlay, if used in the app
      });
      console.log("complete:",complete);
    } else {
      console.log("Invalid input. Please enter a valid 6-digit code.");
    } 
  } else {
    // App is using global keys, built-in OTP input UI is displayed by the SDK
    // App is not required to add code for OTP input
  }
} catch (e) {
  console.log(e);
}
```
