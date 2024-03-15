  ```c#
  // After initializing the SDK

  if (loginMethod == LoginMethod.Passwordless)
    arcanaSDK.LoginWithOTP(email);
  else
    arcanaSDK.LoginWithSocial(loginMethod);
  ```