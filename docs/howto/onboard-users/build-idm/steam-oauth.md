---
alias: build-iam-steam-auth
title: 'User Login with Steam OAuth'
description: 'How to custom build user authentication UI and onboard users via the IAM provider, Steam OAuth, in a Web3 app that is integrated with the Arcana Auth SDK.'
arcana:
  root_rel_path: ../../..
  social_provider: "'steam'"
---

# User Login with Steam OAuth

In this guide, you will learn how to integrate the {{config.extra.arcana.sdk_name}} with a Web3 app that builds custom UI for authenticating users via Steam OAuth. After integrating with the {{config.extra.arcana.sdk_name}}, developers can allow authenticated users to sign blockchain transactions using the embedded, non-custodial {{config.extra.arcana.wallet_name}}.

## Prerequisites

* Make sure you can access the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}

* Use the [{{config.extra.arcana.dashboard_name}}]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md) to [[configure-auth|register the app]] and obtain a unique {{config.extra.arcana.app_address}} required for integrating the app with the {{config.extra.arcana.sdk_name}}.

* Carefully [[config-auth-steam|follow the instructions to obtain Steam API key and set it up in the dashboard]] for user authentication.
  
* Use the appropriate integration method as per the app type and [[index-integrate-app|integrate the app]] with the {{config.extra.arcana.sdk_name}} before accessing the user onboarding function of the {{config.extra.arcana.sdk_name}}.
    
## Steps

*Using Steam to onboard users in a Web3 app that is integrated with the {{config.extra.arcana.sdk_name}} is simple!*

Just a single line of code!

## Step 1: Call `loginWithSocial` function

Make sure that all the prerequisites listed above are met. The app should be successfully registered, configured, and integrated with the {{config.extra.arcana.sdk_name}}, before adding code to onboard users via Steam OAuth.

{% include "./code-snippets/auth_social_login.md" %}

Check if a user is logged in:

{% include "./code-snippets/auth_isloggedin.md" %}

After onboarding users, developers can add code to access the other {{config.extra.arcana.sdk_name}} functions in the app. See [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]] for details.

Add code in the application to log out an authenticated user:

{% include "./code-snippets/auth_logout.md" %}

**That is all!**  :material-party-popper:

Your app is all set for authenticating users via Steam OAuth. Authenticated users can instantly access the {{config.extra.arcana.wallet_name}} to sign blockchain transactions.

{% include "./text-snippets/aggrlogin-nosteam-support.md" %}

## What's Next?

To know more about how to use Web3 wallet operations programmatically in your app, see [[index-arcana-wallet|{{config.extra.arcana.wallet_name}} Developer's Guide]]. Refer to the [[arcana-wallet-user-guide|{{config.extra.arcana.wallet_name}} User's Guide]] for more information on how authenticated app users can access the wallet UI.
## See also

* [{{config.extra.arcana.company_name}} authentication concepts]({{page.meta.arcana.root_rel_path}}/concepts/authtype/arcanaauth.md).
* [[index-integrate-app|How to integrate with the {{config.extra.arcana.sdk_name}}]]
* [[web-auth-error-msg|Handing authentication errors]]
