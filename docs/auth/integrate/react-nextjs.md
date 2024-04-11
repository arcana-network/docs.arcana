---
alias: integrate-react-nextjs-app
title: 'Integrate React/Next.js App'
description: 'Integrate Web3 apps built using the React/Next.js frameworks with the Arcana Auth SDK using the instructions listed here.'
arcana:
  root_rel_path: ../..
  app_example_submodule: "`sample-auth-react-native`"
---

# Integrate React/Next.js App

In this guide, discover how to integrate a React/Next.js app with the {{config.extra.arcana.product_name}} product. Use the Auth React wrapper that provides React Hooks to set Auth component props with necessary initialization values for configuring the {{config.extra.arcana.sdk_name}} and the Arcana wallet.

## Prerequisites

* Log in to the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}

* Use the {{config.extra.arcana.dashboard_name}} to [[register-app-auth|register the app]] before configuring and integrating it with the {{config.extra.arcana.sdk_name}}. 

* Click on the *Social Auth* tab in the {{config.extra.arcana.dashboard_name}}. Configure and select one or more [[web3-stack-auth|supported authentication providers]] for onboarding the app users.

    !!! an-tip "Configure Authentication Providers"

          You may be required to configure additional provider details for different authentication providers. In the case of Google, the developer must use Google Developer Console to set up the app and generate a Google assigned [[config-auth-google|client ID for Google OAuth]]. This Google ClientID will be configured in the {{config.extra.arcana.dashboard_name}} **Social Auth** settings before integrating the app.

          For details, see [[index-configure-auth|how to configure authentication providers]].

* Save the **{{config.extra.arcana.app_address}}** assigned to the app displayed in the {{config.extra.arcana.dashboard_name}}. It is required while integrating the app with the {{config.extra.arcana.sdk_name}} and creating the `AuthProvider`.

## Steps

*Integrating a React/Next.js app with the {{config.extra.arcana.product_name}} product is simple!*

First install the {{config.extra.arcana.sdk_name}}: 

### Step 1: Install `{{config.extra.arcana.auth_sdk_pkg_name}}`

{% include "./code-snippets/auth_install.md" %}

### Step 2: Install `{{config.extra.arcana.react_sdk_pkg_name}}`

Next, install the {{config.extra.arcana.react_sdk_name}} to access the Auth React component wrapper:

{% include "./code-snippets/auth_react_install.md" %}

### Step 3: Initialize `AuthProvider`, Use `ProviderAuth`

A typical React application consists of `index.js` and `App.js` files. First update the `index.js` file and add code to import the `AuthProvider` from the `{{config.extra.arcana.auth_sdk_pkg_name}}` package. Instantiate the `AuthProvider` and get a Web3 provider.

Next, import the `ProviderAuth` component from the `{{config.extra.arcana.react_sdk_pkg_name}}` package and render it using the Web3 provider as props.

{% include "./code-snippets/auth_react_provideauth.md" %}

### Step 4: Use `useAuth` Hook

Use React hook `useAuth` from the `{{config.extra.arcana.react_sdk_pkg_name}}` package, rendering it in the `App` function. You can configure the wallet layout settings using `Auth` component props.

{% include "./code-snippets/auth_react_useauth.md" %}

That is all! :material-party-popper:

The React/Next.js app is now successfully integrated with the {{config.extra.arcana.product_name}} product. Refer to the [Auth Examples](https://github.com/arcana-network/auth-examples).

## What's Next?

After integrating an app developers can add code to [[index-onboard-users|onboard users]] and [[index-arcana-wallet|enable Web3 wallet operations]] for authenticated users to sign blockchain transactions.

## See also

* [[react-code-sample|React app integration]]
* [[index-onboard-users|Onboard Users]]
* [[web-auth-error-msg|{{config.extra.arcana.sdk_name}} Errors]]
* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]
* {% include "./text-snippets/authsdkref_url.md" %}
