# Build Custom Passwordless Auth

In this guide, you will learn how to integrate {{page.meta.arcana.app_type}} app with the {{config.extra.arcana.sdk_name}} and then onboard users through custom login UI and passwordless login option.

## Prerequisites

* Make sure you can access the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}
* The app must be [[register-app-auth|registered using the {{config.extra.arcana.dashboard_name}}]]. A unique {{config.extra.arcana.app_address}} is assigned after app registration. It is required for integrating the app with the {{config.extra.arcana.sdk_name}}
* Follow the instructions as per the app type and [[integrate-vanilla-app|integrate the app]] with the {{config.extra.arcana.sdk_name}}.

!!! an-info "Configuring App"

      Unlike other user onboarding options that require enabling authentication providers, passwordless login can be enabled without any configuration setup using the {{config.extra.arcana.dashboard_name}}.

      Developers can optionally choose to modify the default settings for branding and the {{config.extra.arcana.wallet_name}} settings in the {{config.extra.arcana.dashboard_name}}.

## Steps

*Follow these steps for enabling passwordless login in a Web3 app that is integrated with the {{config.extra.arcana.sdk_name}}.*

After integrating the app, add the code to onboard users in a passwordless manner using the SDK method listed below. 

App users must supply an email ID to receive the OTP for logging into the app. An OTP is sent to the specified email ID. When the user provides the same OTP in the app context, authentication is complete and a wallet address is assigned to the user.

### Login with link

{% include "./code-snippets/auth_pwdless.md" %}

### Login with OTP

{% include "./code-snippets/auth_pwdless_otp.md" %}

{% include "./text-snippets/warn_otp_global_app_keys.md" %}

{% include "./text-snippets/warn_otp_mfa_enabled.md" %}

Check if the user has logged in successfully:

{% include "./code-snippets/auth_isloggedin.md" %}

Log out the dApp user when requested:
    
{% include "./code-snippets/auth_logout.md" %}

**That is all.**  :material-party-popper:

Your dApp is all set for onboarding users via the passwordless login option.

## What's Next?

Authenticated users can instantly access the in-app {{config.extra.arcana.wallet_name}} UI for signing blockchain transactions. Use the `AuthProvider` EIP-1193 standard Ethereum provider to call JSON/RPC functions and Web3 wallet operations in the app. [[evm-web3-wallet-ops|Learn more...]]

## See also

* [Authentication Types]({{page.meta.arcana.root_rel_path}}/concepts/authtype/index.md)
* [[index-config-social-providers|Configure Social Providers]]
* [[web-auth-error-msg|{{config.extra.arcana.sdk_name}} Errors]]
* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]
* [Auth SDK Reference]({{config.extra.arcana.auth_sdk_ref_url}})
