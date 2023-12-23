# Build Passwordless Auth

In this guide, you will learn how to integrate {{page.meta.arcana.app_type}} app with the {{config.extra.arcana.sdk_name}} and then onboard users through custom login UI and passwordless login option.

## Prerequisites

* Make sure you can access the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}
* The app must be [[configure-auth|registered using the {{config.extra.arcana.dashboard_name}}]] and a unique {{config.extra.arcana.app_address}} must be already assigned to it. This {{config.extra.arcana.app_address}} is essential for integrating the app with the {{config.extra.arcana.sdk_name}}
* Follow the instructions as per the app type and [[index-integrate-app|integrate the app]] with the {{config.extra.arcana.sdk_name}}.

!!! info "Configuring App"

      Unlike other user onboarding options that require enabling authentication providers, passwordless login can be enabled without any configuration setup using the {{config.extra.arcana.dashboard_name}}.

      Developers can optionally choose to modify the default settings for branding and the {{config.extra.arcana.wallet_name}} settings in the {{config.extra.arcana.dashboard_name}}.

## Steps

*Enabling passwordless login in a Web3 app that is integrated with the {{config.extra.arcana.sdk_name}} is simple!*

Make sure that all the prerequisites listed above are met. The app should be successfully registered, configured, and integrated with the {{config.extra.arcana.sdk_name}}, before adding code to onboard users via the passwordless login option.

### Step 1: Call User Onboarding Function: `loginWithLink`

After integrating the app, add the code to use `loginWithLink` function of the {{config.extra.arcana.sdk_name}} and trigger passwordless login to onboard the users. App users are required to supply an email ID as input for passwordless login. An OTP is sent to the specified email ID. When the user provides the same OTP in the app context, authentication is complete and a wallet address is assigned to the user.

{% include "./code-snippets/auth_pwdless.md" %}

Check if the user has logged in successfully:

{% include "./code-snippets/auth_isloggedin.md" %}

Log out the dApp user when requested:
    
{% include "./code-snippets/auth_logout.md" %}

**That is all!**  :material-party-popper:

Your dApp is all set for onboarding users via the passwordless login option.

## What's Next?

After enabling passwordless login in the app, developers can use other {{config.extra.arcana.sdk_name}} functions and enable Web3 wallet operations for authenticated users. See [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]], [[index-arcana-wallet|how to enable the {{config.extra.arcana.wallet_name}}]] for details.

## See also

* [{{config.extra.arcana.company_name}} authentication concepts]({{page.meta.arcana.root_rel_path}}/concepts/authtype/arcanaauth.md).
* [[index-config-social-providers|Configure Social Providers]]
* [[web-auth-error-msg|{{config.extra.arcana.sdk_name}} Errors]]
* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]
* {% include "./text-snippets/authsdkref_url.md" %}
