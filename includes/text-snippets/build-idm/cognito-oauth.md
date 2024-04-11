# User Login with AWS Cognito

In this guide, you will learn how a {{page.meta.arcana.app_type}} app integrated with the {{config.extra.arcana.sdk_name}} can easily onboard users via custom login UI and AWS Cognito as the authentication provider.

## Prerequisites

* Make sure you can access the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}

* Use the [{{config.extra.arcana.dashboard_name}}]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md) to [[register-app-auth|register the app]] and obtain a unique {{config.extra.arcana.app_address}} required for integrating the app with the {{config.extra.arcana.sdk_name}}.

* Carefully [[config-auth-cognito|follow the instructions to configure AWS Cognito]] as the authentication provider.
  
* Use the appropriate integration method as per the app type and [[index-integrate|integrate the app]] with the {{config.extra.arcana.sdk_name}} before accessing the user onboarding function of the {{config.extra.arcana.sdk_name}}.
    
## Steps

*Using AWS Cognito to onboard users in a Web3 app that is integrated with the {{config.extra.arcana.sdk_name}} is simple!*

Just a single line of code!

### Call `loginWithSocial` function

Make sure that all the prerequisites listed above are met. The app should be successfully registered, configured, and integrated with the {{config.extra.arcana.sdk_name}}, before adding code to onboard users via AWS Cognito.

{% include "./code-snippets/auth_social_login.md" %}

Check if a user is logged in:

{% include "./code-snippets/auth_isloggedin.md" %}

After onboarding users, developers can add code to access the other {{config.extra.arcana.sdk_name}} functions in the app. See [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]] for details.

Add code in the application to log out an authenticated user:

{% include "./code-snippets/auth_logout.md" %}

**That is all!**  :material-party-popper:

Your app is all set for authenticating users via AWS Cognito. Authenticated users can instantly access the {{config.extra.arcana.wallet_name}} to sign blockchain transactions.

!!! an-warning "Apps using Custom IAM Providers"

      {% include "./text-snippets/warn_cognito_social_provider_setup.md" %}

{% include "./text-snippets/aggrlogin-nocognito-support.md" %}

!!! an-tip "Arcana JWT Token"

     {% include "./text-snippets/jwt_token.md" %}
     
## What's Next?

To know more about how to use Web3 wallet operations programmatically in your app, see [[index-arcana-wallet|{{config.extra.arcana.wallet_name}} Developer's Guide]]. Refer to the [[arcana-wallet-user-guide|{{config.extra.arcana.wallet_name}} User's Guide]] for more information on how authenticated app users can access the wallet UI.
## See also

* [{{config.extra.arcana.company_name}} authentication concepts]({{page.meta.arcana.root_rel_path}}/concepts/authtype/arcanaauth.md).
* [[index-integrate|How to integrate with the {{config.extra.arcana.sdk_name}}]]
* [[web-auth-error-msg|Handing authentication errors]]
* [Auth Examples](https://github.com/arcana-network/auth-examples)
