# Build Passwordless Auth

In this guide, you will learn how {{page.meta.arcana.app_type}} app can use the {{config.extra.arcana.product_name}} product to easily onboard users through the passwordless login option in a custom login UI.

## Prerequisites

* Make sure you can access the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}
* The app must be [[configure-auth|registered using the {{config.extra.arcana.dashboard_name}}]] and a unique {{config.extra.arcana.app_address}} must be already assigned to it. This {{config.extra.arcana.app_address}} is essential for integrating the app with the {{config.extra.arcana.sdk_name}}
* Follow the instructions to [[integrate-react-nextjs-app|integrate the React app]] with the {{config.extra.arcana.product_name}} product.

!!! info "Configuring App"

      Unlike other user onboarding options that require enabling authentication providers, passwordless login does **not** require any configuration setup through the {{config.extra.arcana.dashboard_name}}.

## Steps

*Enabling passwordless login in a React app is simple!*

After integrating the app, add the code to onboard users in a passwordless manner using the SDK method listed below. 

!!! tip "`useAuth() hook`"

     Use `loginWithLink` (deprecated) `loginWithOTPStart` and `loginWithOTPComplete` through the `useAuth` hook offered by the {{config.extra.arcana.react_sdk_name}} and trigger passwordless login to onboard the users. 

App users must supply an email ID to receive the OTP for logging into the app. An OTP is sent to the specified email ID. When the user provides the same OTP in the app context, authentication is complete and a wallet address is assigned to the user.

### Login with link

{% include "./code-snippets/auth_pwdless.md" %}

### Login with OTP

!!! tip "Global vs. App Specific Keys"

      Apps using global keys are not required to add custom UI so that users can enter the OTP during log in. A built-in UI is automatically displayed in the UI context. User must enter the OTP received via email in this UI.

      Apps using app-specific keys must add custom UI code that allows users to input the OTP during log in. The `isCompleteRequired` boolean returns `true` for apps using app-specific keys.

!!! note "MFA Enabled / Disabled"

      During passwordless login via OTP, apps that configured for MFA and those using overlays are required to hide it to enable OTP input. Use `isMFARequired` callback in the `loginWithOTPComplete` method to hide the overlay.

{% include "./code-snippets/auth_pwdless_otp.md" %}

**That is all!**  :material-party-popper:

Your React app is all set for onboarding users via the passwordless login option.

## What's Next?

After enabling passwordless login in the app, developers can enable Web3 wallet operations for authenticated users. See [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]], [[index-arcana-wallet|how to enable the {{config.extra.arcana.wallet_name}}]] for details.

## See also

* [{{config.extra.arcana.company_name}} authentication concepts]({{page.meta.arcana.root_rel_path}}/concepts/authtype/arcanaauth.md).
* [[index-config-social-providers|Configure Social Providers]]
* [[web-auth-error-msg|{{config.extra.arcana.sdk_name}} Errors]]
* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]
* {% include "./text-snippets/authsdkref_url.md" %}
