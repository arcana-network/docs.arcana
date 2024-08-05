# Build Passwordless Auth

Learn how {{page.meta.arcana.app_type}} app can use custom login UI and allow users to onboard via passwordless login option.

## Prerequisites

* Make sure you can access the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}
* The app must be [[register-app-auth|registered using the {{config.extra.arcana.dashboard_name}}]] and a unique {{config.extra.arcana.app_address}} must be already assigned to it. This {{config.extra.arcana.app_address}} is essential for integrating the app with the {{config.extra.arcana.sdk_name}}
* Follow the instructions to [[integrate-react-nextjs-app|integrate the React app]] with the {{config.extra.arcana.sdk_name}} and initialize the `AuthProvider`.

!!! an-info "No Setup Required for Passwordless"

      Passwordless login does **not** require any configuration setup through the {{config.extra.arcana.dashboard_name}}. When prompted, app users must supply an email ID to receive the OTP for logging into the app. On receiving the OTP in email, user must provide the same in the app to authenticate and access the in-app {{config.extra.arcana.wallet_name}} to sign transactions.

## Steps

!!! an-tip "`useAuth() hook`"

     Use `loginWithLink` (deprecated) `loginWithOTPStart` and `loginWithOTPComplete` through the `useAuth` hook offered by the {{config.extra.arcana.react_sdk_name}} and trigger passwordless login to onboard the users. 

### Login with link

{% include "./code-snippets/auth_pwdless.md" %}

### Login with OTP

{% include "./code-snippets/auth_pwdless_otp.md" %}

{% include "./text-snippets/warn_otp_global_app_keys.md" %}

{% include "./text-snippets/warn_otp_mfa_enabled.md" %}

## What's Next?

Use the `AuthProvider` EIP-1193 standard Ethereum provider to call JSON/RPC functions and Web3 wallet operations in the app. [[evm-web3-wallet-ops|Learn more...]]

## See also

{% include "./text-snippets/quick-start-common-examples.md" %}

* [[faq-gen| FAQ]]

* [[troubleshooting| Troubleshooting Guide]]

* [[web-auth-error-msg|{{config.extra.arcana.sdk_name}} Errors]]

* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]

* [{{config.extra.arcana.react_sdk_name}} SDK Reference](https://auth-react-sdk-ref-guide.netlify.app/)

{% include "./text-snippets/auth_sdk_quicklinks.md" %}
{% include "./text-snippets/auth_react_sdk_quicklinks.md" %}
{% include "./text-snippets/demo/auth_sdk_demo.md" %}
