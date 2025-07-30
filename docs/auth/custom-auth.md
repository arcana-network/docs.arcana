---
alias: integrate-custom-auth
title: 'Integrate Custom Auth App'
description: 'Integrate Web3 apps that use custom user authentication. Securely assign keys to authenticated users via the Arcana Auth SDK and allow them to sign blockchain transactions.'
arcana:
  root_rel_path: ..
  app_type: "'Custom-Auth'"
  app_example_submodule: "`sample-auth-custom-oauth`"
---

# Integrate Custom Auth App

Integrate [[concept-custom-auth|{{page.meta.arcana.app_type}}]] apps with [{{config.extra.arcana.sdk_name}}]({{page.meta.arcana.root_rel_path}}/concepts/authsdk.md) and allow authenticated users to sign blockchain transactions with the in-app [[concept-index-arcana-wallet|{{config.extra.arcana.wallet_name}}]].

## Prerequisites

* The app should be [[config-custom-auth|registered and configured for using custom Auth]] using the {{config.extra.arcana.dashboard_name}}.

* You will require the following to integrate the app with the SDK:

    - Unique *{{config.extra.arcana.app_address}}* assigned to the app after registration.
    - *Provider identifier* value displayed in the registered app settings in the dashboard **after configuring and saving** the custom Auth settings.

## 1. Install

Depending upon the [[web3-stack-apps|app type]], you may need to [[sdk-installation|install one or more SDKs]] and the integration code may vary from one app type to another.
      
## 2. Integrate App

Select the app type and follow the instructions to integrate the app with the SDK.

{% include "./text-snippets/select_app_type_integrate.md" %}

!!! an-warning "No user onboarding"

      When using custom authentication, apps **do not onboard users** via the social login feature of the {{config.extra.arcana.sdk_name}}. Simply integrate with the SDK, access `AuthProvider` and call `loginWithCustomProvider` to provision the user's keys for signing blockchain transactions.

## 3. Call `loginWithCustomProvider`

After the user logs in successfully via custom authentication solutions, get the JWT and provide it as input to the {{config.extra.arcana.sdk_name}} method below:

```js
await auth.loginWithCustomProvider({
  token: params.token, //JWT Token
  userID: params.userID,  // Email or ID as configured in the Dashboard settings
  provider: "provider-id-name", //Custom Auth Provider identifier displayed in the Dashboard
});

```

Upon success, `loginWithCustomProvider` will ensure that the authenticated user's key shares are fetched locally and the user key is generated within the app/user context securely, with full privacy.  

!!! an-tip "Sample Code"

       Refer to [Custom Auth Frontend](https://github.com/arcana-network/custom-provider-fe-example) and [Custom Auth Server](https://github.com/arcana-network/custom-provider-server-example) for details. These are examples of a custom authentication server and a frontend that uses the `loginWithCustomProvider` method for fetching authenticated user's keys to perform blockchain transactions.

## What's Next?

{% include "./text-snippets/quick-start-sign-transactions.md" %}

## See also

{% include "./text-snippets/quick-start-common-examples.md" %}

* [[faq-gen| FAQ]]

* [[troubleshooting| Troubleshooting Guide]]

* [[web-auth-error-msg|{{config.extra.arcana.sdk_name}} Errors]]

* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]

{% include "./text-snippets/auth_sdk_quicklinks.md" %}
{% include "./text-snippets/demo/auth_sdk_demo.md" %}
