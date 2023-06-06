---
alias: integrate-web3-react-app
title: 'Integrate Web3-React App'
description: 'Integrate Web3-React apps with the Arcana Auth SDK using the instructions listed here.'
arcana:
  root_rel_path: ../..
---

# Integrate Web3-React App

With [Web3-React](https://www.npmjs.com/package/web3-react?activeTab=readmet) wallet connector framework, developers can allow app users to easily switch between multiple wallets within a single application. The [[concept-authsdk| {{config.extra.arcana.sdk_name}}]] offers a custom Web3-React connector that enables the {{config.extra.arcana.wallet_name}} in apps using Web3-React.

In this guide, you will learn how to integrate the {{config.extra.arcana.sdk_name}} with apps that use Web3-React wallet connectors.

## Prerequisites

* **Register Web3 Application**: Log into the {{config.extra.arcana.dashboard_name}} {% include "./text-snippets/db_portal_url.md" %} to register and configure the app before they can use the {{config.extra.arcana.sdk_name}} and enable the {{config.extra.arcana.wallet_name}} for authenticated app users.

* **Set up Authentication Providers**: Click on the *Social Auth* tab in the {{config.extra.arcana.dashboard_name}}. Configure and select one or more [[state-of-the-arcana-auth#user-onboarding-options|supported authentication providers]] for onboarding the app users.

    !!! tip "Configure Authentication Providers"

          You may be required to configure additional provider details for different authentication providers. In the case of Google, the developer must use Google Developer Console to set up the app and generate a Google assigned [[config-auth-google|client ID for Google OAuth]]. This Google ClientID will be configured in the {{config.extra.arcana.dashboard_name}} **Social Auth** settings before integrating the app.

          For details, see [[index-configure-auth|how to configure authentication providers]].

* Save the **{{config.extra.arcana.app_address}}** assigned to the app and displayed in the {{config.extra.arcana.dashboard_name}}. It is required later during integrating with the {{config.extra.arcana.sdk_name}}.

## Steps

*Integrating Web3-React apps with the {{config.extra.arcana.sdk_name}} is simple!*

Follow these three steps:

### Step 1: Install {{config.extra.arcana.sdk_name}} packages

{% include "./code-snippets/auth_web3_react_install.md" %}

### Step 2: Create `AuthProvider` and `ArcanaConnector`

Import `{{config.extra.arcana.auth_sdk_pkg_name}}` package and create `AuthProvider`. Then import `{{config.extra.arcana.wagmi_sdk_pkg_name}}` package and create an `ArcanaConnector`. 

To instantiate the `AuthProvider`, specify the unique **{{config.extra.arcana.app_address}}** value assigned to the app after [[configure-auth|registering and configuring]] through the {{config.extra.arcana.dashboard_name}}. Call `initializeConnector` from the `web3-react/core` library and instantiate the `ArcanaConnector` by specifying the `AuthProvider` as shown in the sample code below.

{% include "./code-snippets/auth_web3_react_configure_pnp.md" %}

### Step 3: Use ArcanaConnector

In the Web3-React app, use the `ArcanaConnector` and set up the required hooks:

{% include "./code-snippets/auth_web3_react_use.md" %}

Now, you are all set to onboard users in the Web3-React app using the plug-and-play login UI and enable {{config.extra.arcana.wallet_name}} for the authenticated users.

{% include "./code-snippets/auth_web3_react_homepage.md" %}

That is all! :material-party-popper:

The Web3-React app is successfully integrated with the {{config.extra.arcana.sdk_name}}.

!!! tip "Example: Sample Web3-React App"

      See [sample Web3-React app](https://github.com/arcana-network/auth-web3-react/tree/main/example) for details.
      
## What's Next?

After integrating with a Web3-React app with the {{config.extra.arcana.sdk_name}}, the developers can add code to onboard users. There are two ways to onboard users: 

* Use built-in plug-and-play login UI with a single function call that displays all the configured authentication providers
* Use custom login UI to onboard users and wire it to the {{config.extra.arcana.sdk_name}} functions for calling the configured authentication providers.

See [[index-web3-react-onboard-users|for details.]]

{{config.extra.arcana.wallet_name}} can also be used in applications that integrate with other wallet connectors such as [Wagmi](https://wagmi.sh) and [Rainbow Kit](https://www.rainbowkit.com/). See [[index-integrate-react-app|how to enable {{config.extra.arcana.wallet_name}} for apps using Wagmi and Rainbow Kit]].

## See also

* [[web-auth-error-msg|{{config.extra.arcana.sdk_name}} Errors]]
* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]
* {% include "./text-snippets/authsdkref_url.md" %}
* [`{{config.extra.arcana.web3_react_sdk_pkg_name}}` README](https://github.com/arcana-network/auth-web3-react/blob/main/readme.md)