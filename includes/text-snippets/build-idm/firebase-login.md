# User Login with Firebase

In this guide, you will learn how a {{page.meta.arcana.app_type}} app integrated with the {{config.extra.arcana.sdk_name}} and Firebase SDK can easily onboard users via custom login UI and Firebase as the authentication provider.

## Prerequisites

* Make sure you can access the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}

* Use the [[concept-arcana-dashboard| {{config.extra.arcana.dashboard_name}}]] to [[register-app-auth|register the app]] and obtain a unique {{config.extra.arcana.app_address}} required for integrating the app with the {{config.extra.arcana.sdk_name}}.

* Carefully [[config-auth-firebase|follow the instructions to configure Firebase]] as the authentication provider.

* Install the Firebase SDK and integrate the app as explained in the Firebase documentation for [iOS apps](https://firebase.google.com/docs/ios/setup), [Android apps](https://firebase.google.com/docs/android/setup) and [web apps](https://firebase.google.com/docs/web/setup). Use [Firebase authentication](https://firebase.google.com/docs/auth) as per the Web3 app type, mobile or web app. Once a user is authenticated by Firebase, the developer must obtain the token and user identifier and provide it as input to the `loginWithBearer` function of the {{config.extra.arcana.sdk_name}} for onboarding users to Web3.
  
* Install the {{config.extra.arcana.sdk_name}} and [[index-integrate|integrate the app]] with the {{config.extra.arcana.sdk_name}} by using the appropriate integration method as per the app type. After that follow the steps listed below and add code to onboard users to Web3 and enable them to sign blockchain transactions.
    
## Steps

*Using Firebase to onboard users in a Web3 app that is integrated with the {{config.extra.arcana.sdk_name}} is simple!*

Just a single line of code!

### Call `loginWithBearer` function

Make sure that all the prerequisites listed above are met. The app should be successfully registered, configured, and integrated with both the Firebase SDK as well as the {{config.extra.arcana.sdk_name}}, before adding code to onboard users via Firebase.

{% include "./code-snippets/auth_firebase_login.md" %}

Refer to the [Sample Firebase Vue app integration example](https://github.com/arcana-network/auth-examples) to see how the `loginWithBearer` function is used.

After onboarding users, developers can add code to access the other {{config.extra.arcana.sdk_name}} functions in the app. See [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]] for details.

**That is all!**  :material-party-popper:

Your app is all set for authenticating users via Firebase. Authenticated users can instantly access the {{config.extra.arcana.wallet_name}} to sign blockchain transactions.

{% include "./text-snippets/aggrlogin-nofirebase-support.md" %}

!!! an-tip "Arcana JWT Token"

     {% include "./text-snippets/jwt_token.md" %}
     
## What's Next?

To know more about how to use Web3 wallet operations programmatically in your app, see [[index-arcana-wallet|{{config.extra.arcana.wallet_name}} Developer's Guide]]. Refer to the [[arcana-wallet-user-guide|{{config.extra.arcana.wallet_name}} User's Guide]] for more information on how authenticated app users can access the wallet UI.

## See also

* [{{config.extra.arcana.company_name}} authentication concepts]({{page.meta.arcana.root_rel_path}}/concepts/authtype/arcanaauth.md).
* [[index-integrate|How to integrate with the {{config.extra.arcana.sdk_name}}]]
* [[web-auth-error-msg|Handing authentication errors]]
* [Get Firebase User token](https://firebase.google.com/docs/reference/js/auth.user.md#usergetidtoken)
* [Using Firebase Auth](https://firebase.google.com/docs/auth)
* [Auth Examples](https://github.com/arcana-network/auth-examples)
