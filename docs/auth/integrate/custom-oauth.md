---
alias: integrate-custom-oauth
title: 'Integrate Custom OAuth App'
description: 'Integrate Web3 apps that use custom OAuth to onboard users and then assign users.'
arcana:
  root_rel_path: ../..
---

# Integrate Custom OAuth App

This guide shows how apps using [[concept-custom-oauth|custom OAuth]] for signing in users can integrate with the {{config.extra.arcana.sdk_name}} and easily allow authenticated users to sign blockchain transactions securely.

<!--
[Try Auth Example :material-rocket-launch:](https://9mt0h4.csb.app/){ .md-button .md-button--primary}
-->

## Prerequisites

* Make sure you have [[config-custom-oauth|configured the custom OAuth settings]] using the {{config.extra.arcana.dashboard_name}}.

* You will require the following to integrate the app with the SDK:

  - Unique *{{config.extra.arcana.app_address}}* assigned to the app after registration.
  - *Provider identifier* value displayed in the registered app settings in the dashboard **after configuring and saving** the custom OAuth settings.

### Step 1: Install `{{config.extra.arcana.auth_sdk_pkg_name}}` package

{% include "./code-snippets/auth_install.md" %}

### Step 2: Initialize the {{config.extra.arcana.sdk_name}}

After installing the SDK, add code to import `{{config.extra.arcana.auth_sdk_pkg_name}}`. Create an `AuthProvider` with the following inputs:

* **{{config.extra.arcana.app_address}}** Specify the unique identifier obtained after [[register-app-auth|registering]] the app through the {{config.extra.arcana.dashboard_name}}.

* **Wallet User Experience:** Use the `alwaysVisible` parameter to specify the [[concept-wallet-visibility|{{config.extra.arcana.wallet_name}} visibility mode]] that controls the user experience for the wallet.

* Call `AuthProvider.init()` method to initialize the SDK

```
import { AuthProvider } from "@arcana/auth";

let auth: AuthProvider | null = null;

if (!auth) {
  auth = new AuthProvider("Enter your app's Client Id");
}
await auth.init();
```

## Step 3: Call `loginWithCustomProvider`

After the user logs in successfully via custom OAuth, get the JWT and provide it as input to the {{config.extra.arcana.sdk_name}} method below:

```js
           await auth.loginWithCustomProvider({
              token: params.token, //JWT Token
              userID: params.userID,  // Email or ID as configured in the Dashboard settings
              provider: "provider-id-name", //Custom OAuth Provider identifier displayed in the Dashboard
            });

```

Upon success, `loginWithCustomProvider` will ensure that the authenticated user's key shares are fetched locally and the user key is generated within the app/user context securely, with full privacy.  

If you specify the `alwaysVisible` flag as `true` when creating the `AuthProvider` in the integration code above, the embedded {{config.extra.arcana.wallet_name}} UI is displayed instantly within the app's context after JWT claim verification via the `loginWithCustomProvider` method.

Next, developers can use the provider initialized earlier to allow authenticated users to sign the blockchain transactions via the wallet UI or JSON/RPC calls added in the integrated app code. 

!!! an-tip "Sample Code"

       Refer to [Custom OAuth Frontend](https://github.com/arcana-network/custom-provider-fe-example) and [Custom OAuth Server](https://github.com/arcana-network/custom-provider-server-example) for details. These are examples of a custom OAuth login server and a frontend that uses the `loginWithCustomProvider` method for fetching authenticated user's keys to perform blockchain transactions.

That is all! :material-party-popper:

## What's Next?

You can add [[index-arcana-wallet|enable Web3 wallet operations]] for authenticated users to sign blockchain transactions.

## See also

* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]
* {% include "./text-snippets/authsdkref_url.md" %}
