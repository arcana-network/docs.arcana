---
alias: build-iam-firebase-auth
title: 'User Login with Firebase'
description: 'How to custom build user authentication UI and onboard users via the Firebase, in a Web3 app that is integrated with the Arcana Auth SDK.'
arcana:
  root_rel_path: ../../..
  social_provider: "'aws'"
---

# User Login with Firebase

In this guide, you will learn how to configure Firebase and integrate the Firebase SDK and the {{config.extra.arcana.sdk_name}} with a Web3 app and onboard users with custom login UI. After integrating with the {{config.extra.arcana.sdk_name}}, developers can allow authenticated users to sign blockchain transactions using the embedded, non-custodial {{config.extra.arcana.wallet_name}}.

## Prerequisites

* Make sure you can access the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}

* Use the [{{config.extra.arcana.dashboard_name}}]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md) to [[configure-auth|register the app]] and obtain a unique {{config.extra.arcana.app_address}} required for integrating the app with the {{config.extra.arcana.sdk_name}}.

* Carefully [[config-auth-firebase|follow the instructions to configure Firebase]] as the authentication provider.

* Install the Firebase SDK and integrate the app as explained in the Firebase documentation for [iOS apps](https://firebase.google.com/docs/ios/setup), [Android apps](https://firebase.google.com/docs/android/setup) and [web apps](https://firebase.google.com/docs/web/setup). Use [Firebase authentication](https://firebase.google.com/docs/auth) as per the Web3 app type, mobile, gaming or web app. Once a user is authenticated by Firebase, the developer must obtain the token and user identifier and provide it as input to the `loginWithBearer` function of the {{config.extra.arcana.sdk_name}} for onboarding users to Web3.
  
* Install the {{config.extra.arcana.sdk_name}} and [[index-integrate-app|integrate the app]] with the {{config.extra.arcana.sdk_name}} by using the appropriate integration method as per the app type. After that follow the steps listed below and add code to onboard users to Web3 and enable them to sign blockchain transactions.
    
## Steps

*Using Firebase to onboard users in a Web3 app that is integrated with the {{config.extra.arcana.sdk_name}} is simple!*

Just a single line of code!

## Step 1: Call `loginWithBearer` function

Make sure that all the prerequisites listed above are met. The app should be successfully registered, configured, and integrated with both the Firebase SDK as well as the {{config.extra.arcana.sdk_name}}, before adding code to onboard users via Firebase.

{% include "./code-snippets/auth_firebase_login.md" %}

Refer to the [Sample Firebase Vue application](https://github.com/arcana-network/auth-firebase-test) to see the `loginWithBearer` function usage.

After onboarding users, developers can add code to access the other {{config.extra.arcana.sdk_name}} functions in the app. See [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]] for details.

**That is all!**  :material-party-popper:

Your app is all set for authenticating users via Firebase. Authenticated users can instantly access the {{config.extra.arcana.wallet_name}} to sign blockchain transactions.

{% include "./text-snippets/aggrlogin-nofirebase-support.md" %}

## What's Next?

To know more about how to use Web3 wallet operations programmatically in your app, see [[index-arcana-wallet|{{config.extra.arcana.wallet_name}} Developer's Guide]]. Refer to the [[arcana-wallet-user-guide|{{config.extra.arcana.wallet_name}} User's Guide]] for more information on how authenticated app users can access the wallet UI.

## See also

* [{{config.extra.arcana.company_name}} authentication concepts]({{page.meta.arcana.root_rel_path}}/concepts/authtype/arcanaauth.md).
* [[index-integrate-app|How to integrate with the {{config.extra.arcana.sdk_name}}]]
* [[web-auth-error-msg|Handing authentication errors]]
* [Get Firebase User token](https://firebase.google.com/docs/reference/js/auth.user.md#usergetidtoken)
* [Using Firebase Auth](https://firebase.google.com/docs/auth)
