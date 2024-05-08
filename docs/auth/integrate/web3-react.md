---
alias: integrate-web3-react-app
title: 'Integrate Web3-React App'
description: 'Integrate Web3-React apps with the Arcana Auth SDK using the instructions listed here.'
arcana:
  root_rel_path: ../..
---

# Integrate Web3-React App

DApps using [Web3-React](https://www.npmjs.com/package/web3-react?activeTab=readmet) framework can enable user onboarding via social login and gasless transactions via {{config.extra.arcana.wallet_name}} by integrating with the {{config.extra.arcana.web3_react_sdk_name}}.

In this guide, you will learn how to integrate the app and access the custom Web3-React connector.

## Prerequisites

* **Register Web3 Application**: Log into the {{config.extra.arcana.dashboard_name}} {% include "./text-snippets/db_portal_url.md" %} to register and configure the app before they can use the {{config.extra.arcana.web3_react_sdk_name}} and enable the {{config.extra.arcana.wallet_name}} for authenticated app users.

* **Set up Authentication Providers**: Click on the *Social Auth* tab in the {{config.extra.arcana.dashboard_name}}. Configure and select one or more [[web3-stack-auth|supported authentication providers]] for onboarding the app users.

    !!! an-tip "Configure Authentication Providers"

          You may be required to configure additional provider details for different authentication providers. In the case of Google, the developer must use Google Developer Console to set up the app and generate a Google assigned [[config-auth-google|client ID for Google OAuth]]. This Google ClientID will be configured in the {{config.extra.arcana.dashboard_name}} **Social Auth** settings before integrating the app.

          For details, see [[index-configure-auth|how to configure authentication providers]].

* Save the **{{config.extra.arcana.app_address}}** assigned to the app and displayed in the {{config.extra.arcana.dashboard_name}}. It is required later during integrating with the {{config.extra.arcana.sdk_name}}.

## Steps

*Integrating Web3-React apps with the {{config.extra.arcana.web3_react_sdk_name}} is simple!*

Follow these three steps:

### Step 1: Install {{config.extra.arcana.sdk_name}} packages

{% include "./code-snippets/auth_web3_react_install.md" %}

### Step 2: Create `AuthProvider` and `ArcanaConnector`

Import `{{config.extra.arcana.auth_sdk_pkg_name}}` package and create `AuthProvider`. Then import `{{config.extra.arcana.wagmi_sdk_pkg_name}}` package and create an `ArcanaConnector`. 

Use the unique **{{config.extra.arcana.app_address}}** value assigned to the app after[[register-app-auth|registration]] to instantiate the `AuthProvider`. Call `initializeConnector` from the `web3-react/core` library and instantiate the `ArcanaConnector` by specifying the `AuthProvider` as shown in the sample code below.

{% include "./code-snippets/auth_web3_react_configure_pnp.md" %}

### Step 3: Use ArcanaConnector

In the Web3-React app, use the `ArcanaConnector` and set up the required hooks:

{% include "./code-snippets/auth_web3_react_use.md" %}

Now, you are all set to onboard users in the Web3-React app using the plug-and-play login UI and enable {{config.extra.arcana.wallet_name}} for the authenticated users.

{% include "./code-snippets/auth_web3_react_homepage.md" %}

That is all! :material-party-popper:

The Web3-React app is successfully integrated with the {{config.extra.arcana.sdk_name}}. Refer to the [Auth Examples](https://github.com/arcana-network/auth-examples) for working integration examples.
      
## What's Next?

After integrating with a Web3-React app with the {{config.extra.arcana.sdk_name}}, the developers can add code to onboard users. The example above shows the built-in plug-and-play login UI method. There are [[index-web3-react-onboard-users|two ways to onboard users]]: 

* Use built-in [[onboard-web3-react-app-pnp-ui|plug-and-play login UI]] with a single function call that displays all the configured authentication providers
* Use [[onboard-web3-react-app-custom-ui|custom login UI to onboard users]] and wire it to the {{config.extra.arcana.sdk_name}} passwordless onboarding functions `loginWithLink`(deprecated), `loginWithOTPStart`, `loginWithOTPComplete` or the social onboarding function `loginWithSocial` for calling the configured authentication providers.

{{config.extra.arcana.wallet_name}} can also be used in applications that integrate with other wallet connectors such as [Wagmi](https://wagmi.sh) and [Rainbow Kit](https://www.rainbowkit.com/). See [[index-integrate|how to enable {{config.extra.arcana.wallet_name}} for apps using Wagmi and Rainbow Kit]].

## See also

* [`{{config.extra.arcana.web3_react_sdk_pkg_name}}` README](https://github.com/arcana-network/auth-web3-react/blob/main/readme.md)
* [Web3-React app Integration Example](https://github.com/arcana-network/auth-web3-react/tree/main/example)
* [`sample-auth-web3-react` example](https://github.com/arcana-network/auth-examples)
* [[web-auth-error-msg|{{config.extra.arcana.sdk_name}} Errors]]
* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]
* {% include "./text-snippets/authsdkref_url.md" %}