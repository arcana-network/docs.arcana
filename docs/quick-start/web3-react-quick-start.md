---
alias: web3-react-quick-start
title: 'Quick Start: Web3-React Apps'
description: 'Get Started quickly using these step-by-step instructions for using the Arcana Auth product in Web3-React apps. Use Arcana Developer dashboard to first register the app, get a client ID and use this client ID to integrate the app with the Arcana Auth SDK.'
arcana:
  root_rel_path: ..
  app_type: "'Web3-React'"
  app_example_submodule: "'`sample-auth-web3-react`'"
  social_provider: "'google'"
  custom_login_ui_tag: "onboard-web3-react-app-custom-ui"
---

# Quick Start: Web3-React Apps

!!! note "Already using {{config.extra.arcana.sdk_name}}?"
  
      {% include "./text-snippets/warn_latest_sdk_version.md" %}

!!! warning "Web3-React Apps"

      {% include "./text-snippets/warn_latest_web3_react_sdk_version.md" %}

## Overview

To implement {{config.extra.arcana.product_name}} in a {{page.meta.arcana.app_type}} app, start by registering your app and configuring usage settings through {{config.extra.arcana.dashboard_name}}. After that, install {{config.extra.arcana.sdk_name}} and {{config.extra.arcana.web3_react_sdk_name}}, integrate the app, and initialize the `AuthProvider`. You'll need to add code to initialize the `ArcanaConnector` and specify the `AuthProvider`. Next, use appropriate React hooks and call {{config.extra.arcana.sdk_name}} function to onboard users and allow authenticated users to sign blockchain transactions. Finally, deploy your app on the Testnet or Mainnet.

<img class="an-screenshots" src="/img/an_auth_usage_overview_light.png#only-light" alt="uth Usage Overview"/>
<img class="an-screenshots" src="/img/an_auth_usage_overview_dark.png#only-dark" alt="Auth Usage Overview"/>

## Step 1: Register & Configure App

{% include "./text-snippets/quick-start-reg-config.md" %}

## Step 2: Install SDKs

For {{page.meta.arcana.app_type}} app, install the following packages:

* [`{{config.extra.arcana.auth_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth)
* [`{{config.extra.arcana.web3_react_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-web3-react)

{% include "./code-snippets/auth_web3_react_install.md" %}

{% include "./text-snippets/watch_auth_github_repo.md" %}

{% include "./text-snippets/watch_web3_react_github_repo.md" %}

Next, integrate the app with the installed SDKs.

## Step 3: Integrate App

Begin app integration by importing `AuthProvider` from the `{{config.extra.arcana.auth_sdk_pkg_name}}` package.

{% include "./code-snippets/import_auth.md" %}

Create a new `AuthProvider` instance. Specify the unique **{{config.extra.arcana.app_address}}** obtained during the app registration. 

{% include "./code-snippets/new_auth.md" %}

{% include "./text-snippets/quick-start-authprovider-optional.md" %}

Next, import the `ArcanaConnector` from the `{{config.extra.arcana.web3_react_sdk_pkg_name}}` package.

Initialize the `ArcanaConnector` by specifying the `AuthProvider` created earlier:

{% include "./code-snippets/auth_web3_react_configure_pnp.md" %}

The app is now integrated with the {{config.extra.arcana.sdk_name}} and the {{config.extra.arcana.web3_react_sdk_name}}. Next, add code to onboard users. You will need to use React hooks to enable `AuthProvider` functions via the `ArcanaConnector`.

{% include "./code-snippets/auth_web3_react_use.md" %}

## Step 4: Onboard Users

{% include "./code-snippets/auth_web3_react_configure_pnp.md" %}

<!--
For usage details, see [Auth Web3 React SDK Reference Guide](https://auth-react-sdk-ref-guide.netlify.app/).
-->

See [sample Web3-React app](https://github.com/arcana-network/auth-web3-react/tree/main/example) for details.

{% include "./text-snippets/quick-start-auth-onboard-custom-login.md" %}

!!! tip "Arcana JWT Token"

      {% include "./text-snippets/jwt_token.md" %}

**That's all!!!** :material-party-popper:

{==

Your {{page.meta.arcana.app_type}} app is now powered by {{config.extra.arcana.product_name}}.

==}

## Next Steps

{% include "./text-snippets/quick-start-next-steps.md" %}

## Examples

{% include "./text-snippets/quick-start-common-examples.md" %}

## See Also

{% include "./text-snippets/quick-start-see-also.md" %}

{% include "./text-snippets/prod_version_info.md" %}