---
alias: react-nextjs-quick-start
title: 'Quick Start: React/NextJS Apps'
description: 'Get Started quickly using these step-by-step instructions for using the Arcana Auth product in React/NextJS apps. Use Arcana Developer dashboard to first register the app, get a client ID and use this client ID to integrate the app with the Arcana Auth SDK.'
arcana:
  root_rel_path: ..
  app_type: "'React/NextJS'"
  app_example_submodule: "'`sample-auth-react`,`sample-auth-nextjs`'"
  social_provider: "'google'"
  custom_login_ui_tag: "index-react-nextjs-custom-ui-onboard-users"
  firebase_custom_ui_tag: "react-nextjs-build-iam-firebase-auth"
---

# Quick Start: React Apps

!!! note "Already using {{config.extra.arcana.sdk_name}}?"
  
      {% include "./text-snippets/warn_latest_sdk_version.md" %}

!!! warning "React Apps"

      {% include "./text-snippets/warn_latest_react_sdk_version.md" %}

## Overview

To implement {{config.extra.arcana.product_name}} in a {{page.meta.arcana.app_type}} app, start by registering your app and configuring usage settings through {{config.extra.arcana.dashboard_name}}. After that, install {{config.extra.arcana.sdk_name}} and {{config.extra.arcana.react_sdk_name}}, integrate the app, initialize the `AuthProvider`. You'll need to add code to facilitate user onboarding via `ProvideAuth` app wrapper and `useAuth` React hooks. Then call {{config.extra.arcana.sdk_name}} functions and allow users to sign blockchain transactions. Finally, deploy your app on the Testnet or Mainnet.

<img class="an-screenshots" src="/img/an_auth_usage_overview_light.png#only-light" alt="uth Usage Overview"/>
<img class="an-screenshots" src="/img/an_auth_usage_overview_dark.png#only-dark" alt="Auth Usage Overview"/>

## Step 1: Register & Configure App

{% include "./text-snippets/quick-start-reg-config.md" %}

## Step 2: Install SDKs

For {{page.meta.arcana.app_type}} app, install the following packages:

* [`{{config.extra.arcana.auth_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth)
* [`{{config.extra.arcana.react_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-react)

### {{config.extra.arcana.sdk_name}}

{% include "./code-snippets/auth_install.md" %}

{% include "./text-snippets/watch_auth_github_repo.md" %}

### {{config.extra.arcana.react_sdk_name}}

{% include "./code-snippets/auth_react_install.md" %}

{% include "./text-snippets/watch_auth_react_github_repo.md" %}

Next, integrate the app with the installed SDKs.

## Step 3: Integrate App

Begin app integration by importing `AuthProvider` from the `{{config.extra.arcana.auth_sdk_pkg_name}}` package.

{% include "./code-snippets/import_auth.md" %}

Create a new `AuthProvider` instance. Specify the unique **{{config.extra.arcana.app_address}}** obtained during the app registration. This gives you access to a Web3 provider.

{% include "./code-snippets/new_auth.md" %}

{% include "./text-snippets/quick-start-authprovider-optional.md" %}
      
Next, in the app `index.js` file, import the `ProvideAuth` component from the `{{config.extra.arcana.react_sdk_pkg_name}}` package. Then use the Web3 provider from `AuthProvider` as props to render the `ProvideAuth` component:

{% include "./code-snippets/auth_react_provideauth.md" %}

The app is now integrated with the {{config.extra.arcana.sdk_name}} and the {{config.extra.arcana.react_sdk_name}}. Next, add code to onboard users.

## Step 4: Onboard Users

{% include "./text-snippets/use-react-pnp-auth.md" %}

See [Auth React SDK Reference Guide](https://auth-react-sdk-ref-guide.netlify.app/) for {{config.extra.arcana.react_sdk_name}} usage details.

{% include "./text-snippets/quick-start-auth-onboard-custom-login.md" %}

!!! tip "Arcana JWT Token"

      {% include "./text-snippets/jwt_token.md" %}

**That's all!!!** :material-party-popper:

{==

Your {{page.meta.arcana.app_type}} app is now powered by {{config.extra.arcana.product_name}}.

==}

Authenticated users can log in and instantly access a Web3 wallet from within the app's context.

## Next Steps

{% include "./text-snippets/quick-start-next-steps.md" %}

## Examples

{% include "./text-snippets/quick-start-common-examples.md" %}

## See Also

{% include "./text-snippets/quick-start-see-also.md" %}

{% include "./text-snippets/prod_version_info.md" %}
