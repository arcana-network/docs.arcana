# Build Passwordless Auth

In this guide, you will learn how a {{page.meta.arcana.app_type}} can use the {{config.extra.arcana.product_name}} product and easily onboard users in a passwordless manner via a custom login UI.

## Prerequisites

* Make sure you can access the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}
* The app must be [[configure-auth|registered using the {{config.extra.arcana.dashboard_name}}]] and a unique {{config.extra.arcana.app_address}} must be already assigned to it. This {{config.extra.arcana.app_address}} is essential for integrating the app with the {{config.extra.arcana.sdk_name}}
* Follow the instructions to [[integrate-react-nextjs-app|integrate the React app]] with the {{config.extra.arcana.product_name}} product.

!!! info "Configuring App"

      Unlike other user onboarding options that require enabling authentication providers, passwordless login does **not** require any configuration setup through the {{config.extra.arcana.dashboard_name}}.

## Steps

*Enabling passwordless login in a React app is simple!*

Make sure that all the prerequisites listed above are met. The app should be successfully registered, configured, and integrated with the {{config.extra.arcana.sdk_name}}, before adding code to onboard users via the passwordless login option.

### Step 1: Use `loginWithLink`

After integrating the app, add the code to use `loginWithLink` through the `useAuth` hook offered by the {{config.extra.arcana.react_sdk_name}} and trigger passwordless login to onboard the users. App users are required to supply an email ID as input for passwordless login.

{% include "./code-snippets/auth_react_useauth_pwdless.md" %}

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
