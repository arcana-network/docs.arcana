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

{% include "./text-snippets/quick-start-overview.md" %}

## Step 1: Register & Configure App

{% include "./text-snippets/quick-start-reg-config.md" %}

## Step 2: Install SDK

For {{page.meta.arcana.app_type}} app, install the following packages:

* [`{{config.extra.arcana.auth_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth)
* [`{{config.extra.arcana.react_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth-react)

{% include "./code-snippets/auth_install.md" %}

{% include "./code-snippets/auth_react_install.md" %}

{% include "./text-snippets/watch_auth_github_repo.md" %}

{% include "./text-snippets/watch_auth_react_github_repo.md" %}

Next, integrate the app with the {{config.extra.arcana.product_name}} product.

## Step 3: Integrate App

First, add code to import `AuthProvider` from the `{{config.extra.arcana.auth_sdk_pkg_name}}` and get a Web3 provider.

{% include "./code-snippets/import_auth.md" %}

Create a new `AuthProvider`, specify the unique **{{config.extra.arcana.app_address}}** obtained earlier during to the app registration. 

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

Next, in the app `index.js` file, import the `ProvideAuth` component from the `{{config.extra.arcana.react_sdk_pkg_name}}` package. Then use the Web3 provider instantiated via the `AuthProvider` earlier to render the `ProvideAuth` component:

{% include "./code-snippets/auth_react_provideauth.md" %}

## Step 4: Onboard Users

To onboard users, update the `App.js` file by importing `Auth` and `useAuth` components from the `{{config.extra.arcana.react_sdk_pkg_name}}` package. Then render them in the `App` function. You can configure the wallet UI layout settings using `Auth` component props. Plug it to the user login route. Once the user chooses to log in, they will see the built-in, plug-and-play login UI pop up in the app context and allow the users to log in.

{% include "./code-snippets/auth_react_useauth.md" %}

## Step 5: Enable Wallet Operations

{% include "./text-snippets/quick-start-enable-wallet.md" %}

## Step 6: Deploy App

{% include "./text-snippets/quick-start-deploy.md" %}

## Examples

{% include "./text-snippets/quick-start-common-examples.md" %}

## See Also

{% include "./text-snippets/quick-start-see-also.md" %}

{% include "./text-snippets/prod_version_info.md" %}
