---
alias: vanilla-web-apps-quick-start
title: 'Quick Start: HTML/CSS/JS Apps'
description: 'Get Started quickly with the Arcana Auth product by using these step-by-step instructions for vanilla HTML/CSS/JS apps. Use Arcana Developer Dashboard to register the app, get a client ID and use this client ID to integrate the app with the Arcana Auth SDK.'
arcana:
  root_rel_path: ..
  app_type: "'Vanilla HTML/CSS/JS'"
  app_example_submodule: "'`sample-auth-html-css-js`'"
  custom_login_ui_tag: "index-custom-ui-onboard-users"
  firebase_custom_ui_tag: "build-iam-firebase-auth"
---

# Quick Start: Vanilla HTML/CSS/JS Apps

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

Next, integrate the app with the {{config.extra.arcana.sdk_name}} by instantiating the `AuthProvider`.

## Step 3: Integrate App

{% include "./text-snippets/quick-start-int-auth.md" %}

## Step 4: Onboard Users

{% include "./text-snippets/quick-start-auth-onboard.md" %}

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

Here are some other examples of {{config.extra.arcana.sdk_name}} {{page.meta.arcana.app_type}} app that demonstrate integrating with the {{config.extra.arcana.sdk_name}}.

[[google-social-auth|Onboard Users with Google]]{ .md-button }

[[configure-wallet-visibility|Manage blockchain signing user experience]]{ .md-button }

## See Also

{% include "./text-snippets/quick-start-see-also.md" %}

{% include "./text-snippets/prod_version_info.md" %}