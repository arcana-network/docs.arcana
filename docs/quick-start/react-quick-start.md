---
alias: react-quick-start
title: 'Quick Start: React Apps'
description: 'Get Started quickly using these step-by-step instructions for using the Arcana Auth product in React/NextJS apps. Use Arcana Developer dashboard to first register the app, get a client ID and use this client ID to integrate the app with the Arcana Auth SDK.'
arcana:
  root_rel_path: ..
  app_type: "'React'"
  app_example_submodule: "'`sample-auth-react`'"
---

# Quick Start: React Apps

!!! note "Already using {{config.extra.arcana.sdk_name}}?"
  
      {% include "./text-snippets/warn_latest_sdk_version.md" %}

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

### {{config.extra.arcana.react_sdk_name}}

{% include "./code-snippets/auth_react_install.md" %}

Next, integrate the app with the installed SDKs.

{% include "./text-snippets/watch_auth_github_repo.md" %}

{% include "./text-snippets/watch_auth_react_github_repo.md" %}

## Step 3: Integrate App

Begin app integration by importing `AuthProvider` from the `{{config.extra.arcana.auth_sdk_pkg_name}}` package.

{% include "./code-snippets/import_auth.md" %}

Create a new `AuthProvider` instance. Specify the unique **{{config.extra.arcana.app_address}}** obtained during the app registration. This gives you access to a Web3 provider.

{% include "./code-snippets/new_auth.md" %}

Initialize the newly instantiated `AuthProvider`.

{% include "./code-snippets/init_auth.md" %}

!!! caution "Initialize First!"

    The app must use `await` until the `init()` call is complete, before invoking any of the other {{config.extra.arcana.sdk_name}} functions.

You can optionally customize the following settings in the `AuthProvider` constructor:

---

* `alwaysVisible`: [[concept-wallet-visibility|{{config.extra.arcana.wallet_name}} visibility mode]] - always visible in the app context or only if a blockchain transaction is triggered by the app
* `chainConfig`:
      - `chainId`: chain identifier for the active chain in the wallet
      - `rpcUrl`: RPC Url for the specified chain identifier
* `position`:  wallet position within the app context - `left`|`right`
* `theme`: wallet theme - `light`|`dark`
* `setWindowProvider`: set `window.ethereum` in the app context with the standard EIP-1193 Ethereum provider value
* `connectOptions`: built-in login UI compact mode - `true`|`false`

---

See [`AuthProvider` constructor parameters](https://authsdk-ref-guide.netlify.app/interfaces/constructorparams) for details.

Next, in the app `index.js` file, import the `ProvideAuth` component from the `{{config.extra.arcana.react_sdk_pkg_name}}` package. Then use the Web3 provider from `AuthProvider` as props to render the `ProvideAuth` component:

{% include "./code-snippets/auth_react_provideauth.md" %}

The app is now integrated with the {{config.extra.arcana.sdk_name}} and the {{config.extra.arcana.react_sdk_name}}. Next, add code to onboard users.

## Step 4: Onboard Users

Choose one of the options below to enable configured authentication providers and facilitate user onboarding:

* Use[[concept-plug-and-play-auth|plug-and-play authentication]] through the built-in login UI
* Use [[concept-custom-login-ui|custom login UI]]

### Built-in Login UI

{% include "./text-snippets/use-react-pnp-auth.md" %}

### Custom Login UI

Instead of onboarding users through the built-in plug-and-play login UI, you can instead use a custom login UI. Simply use the following functions instead of `connect`. Note, you need to call different functions depending upon the [[concept-index-auth-type|type of the authentication providers]] that you wish to enable for user onboarding:

* Social Providers: `loginWithSocial`
* Custom IAM Providers: `loginWithBearer`
* Passwordless Login:  `loginWithLink`

For more details, see [Auth React SDK Reference Guide](https://auth-react-sdk-ref-guide.netlify.app/).

{% include "./code-snippets/auth_react_useauth_custom.md" %}

For sample code and details on how to onboard users in a {{page.meta.arcana.app_type}} app via a custom login UI, see [[index-react-nextjs-custom-ui-onboard-users|how to enable configured providers when using a custom login UI]].

!!! tip "Arcana JWT Token"

      {% include "./text-snippets/jwt_token.md" %}

Next, enable authenticated users to sign blockchain transactions.

## Step 5: Enable Wallet Operations

{% include "./text-snippets/quick-start-enable-wallet.md" %}

## Step 6: Deploy App

{% include "./text-snippets/quick-start-deploy.md" %}

## Examples

{% include "./text-snippets/quick-start-common-examples.md" %}

## See Also

{% include "./text-snippets/quick-start-see-also.md" %}

{% include "./text-snippets/prod_version_info.md" %}
