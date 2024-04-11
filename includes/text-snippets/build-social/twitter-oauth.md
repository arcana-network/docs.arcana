# User Login with Twitter

In this guide, you will learn how a {{page.meta.arcana.app_type}} app integrated with the {{config.extra.arcana.sdk_name}} can easily onboard users via custom login UI and Twitter as the authentication provider.

## Prerequisites

* Make sure you can access the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}

* Use the [{{config.extra.arcana.dashboard_name}}]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md) to [[register-app-auth|register the app]] and obtain a unique {{config.extra.arcana.app_address}} required for integrating the app with the {{config.extra.arcana.sdk_name}}.

* Carefully [[config-auth-twitter|follow the instructions to configure Twitter]] as the authentication provider.
  
* Use the appropriate integration method as per the app type and [[index-integrate|integrate the app]] with the {{config.extra.arcana.sdk_name}} before accessing the user onboarding function of the {{config.extra.arcana.sdk_name}}.
    
## Steps

*Using Twitter to onboard users in a Web3 app that is integrated with the {{config.extra.arcana.sdk_name}} is simple!*

Just a single line of code!

## Step 1: Call `loginWithSocial` function

Make sure that all the prerequisites listed above are met. The app should be successfully registered, configured, and integrated with the {{config.extra.arcana.sdk_name}}, before adding code to onboard users via Twitter.

{% include "./code-snippets/auth_social_login.md" %}

Check if a user is logged in:

{% include "./code-snippets/auth_isloggedin.md" %}

Add code in the application to log out an authenticated user:

{% include "./code-snippets/auth_logout.md" %}

**That is all!**  :material-party-popper:

The Web3 app is all set for onboarding users via Twitter. 

{% include "./text-snippets/aggrlogin-notwitter-support.md" %}

!!! an-tip "Arcana JWT Token"

     {% include "./text-snippets/jwt_token.md" %}
     
## What's Next?

After onboarding app users via Twitter, you can allow authenticated users to access the {{config.extra.arcana.wallet_name}} for signing blockchain transactions on any [[web3-stack-chains|supported blockchain network]]. Plug in other {{config.extra.arcana.sdk_name}} functions in the app code such as getting the authenticated user's account details, performing Web3 wallet operations, etc. See [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]] and [[index-arcana-wallet|{{config.extra.arcana.wallet_name}} Developer's Guide]] for details.

## See also

* [{{config.extra.arcana.company_name}} authentication concepts]({{page.meta.arcana.root_rel_path}}/concepts/authtype/arcanaauth.md).
* [[index-integrate|How to integrate with the {{config.extra.arcana.sdk_name}}]]
* [[web-auth-error-msg|Handling authentication errors]]
* [Auth Examples](https://github.com/arcana-network/auth-examples)
