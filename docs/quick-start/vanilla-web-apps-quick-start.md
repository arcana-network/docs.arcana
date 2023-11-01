---
alias: vanilla-web-apps-quick-start
title: 'Quick Start: HTML/CSS/JS Apps'
description: 'Get Started quickly with the Arcana Auth product by using these step-by-step instructions for vanilla HTML/CSS/JS apps. Use Arcana Developer Dashboard to register the app, get a client ID and use this client ID to integrate the app with the Arcana Auth SDK.'
arcana:
  root_rel_path: ..
  app_type: "'Vanilla HTML/CSS/JS'"
  app_example_submodule: "'`sample-auth-html-css-js`'"
---

# Quick Start: HTML/CSS/JS Apps

!!! note "Already using {{config.extra.arcana.sdk_name}}?"
  
      {% include "./text-snippets/warn_latest_sdk_version.md" %}

## Overview

{% include "./text-snippets/quick-start-overview.md" %}

## Step 1: Register & Configure App

{% include "./text-snippets/quick-start-reg-config.md" %}

## Step 2: Install SDK

For {{page.meta.arcana.app_type}} app, install the [`{{config.extra.arcana.auth_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth) package.

{% include "./code-snippets/auth_install.md" %}

{% include "./text-snippets/watch_auth_github_repo.md" %}

Next, integrate the app with the {{config.extra.arcana.sdk_name}} by instantiating and calling the requisite `AuthProvider` functions.

## Step 3: Integrate App

{% include "./text-snippets/quick-start-int-auth.md" %}

## Step 4: Onboard Users

{% include "./text-snippets/quick-start-auth-onboard.md" %}

For sample code and details on how to onboard users in a {{page.meta.arcana.app_type}} app via a custom login UI, see [[index-custom-ui-onboard-users|how to enable configured providers when using a custom login UI]].

!!! tip "Arcana JWT Token"

      {% include "./text-snippets/jwt_token.md" %}

Next, enable authenticated users to sign blockchain transactions.

## Step 5: Enable Wallet Operations

{% include "./text-snippets/quick-start-enable-wallet.md" %}

## Step 6: Deploy App

{% include "./text-snippets/quick-start-deploy.md" %}

## Examples

{% include "./text-snippets/quick-start-common-examples.md" %}

Here are some other examples of {{config.extra.arcana.sdk_name}} {{page.meta.arcana.app_type}} app that demonstrate integrating with the {{config.extra.arcana.sdk_name}}.

[[google-social-auth|Onboard Users with Google]]{ .md-button }

[[configure-wallet-visibility|Manage blockchain signing user experience]]{ .md-button }

## See Also

{% include "./text-snippets/quick-start-see-also.md" %}

{% include "./text-snippets/prod_version_info.md" %}

