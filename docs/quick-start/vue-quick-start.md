---
alias: vue-quick-start
title: 'Quick Start: Vue Apps'
description: 'Get Started quickly with Arcana Auth product for Vue apps by using these step-by-step instructions. Use the Arcana Developer Dashboard to register the app, get a client ID and then use the client ID to integrate the app with the Arcana Auth SDK.'
arcana:
  root_rel_path: ..
  app_type: "'Vue'"
  app_example_submodule: "'`sample-auth-vue`'"
---

# Quick Start: Vue Apps

!!! note "Already using {{config.extra.arcana.sdk_name}}?"
  
      {% include "./text-snippets/warn_latest_sdk_version.md" %}

## Overview

{% include "./text-snippets/quick-start-overview.md" %}

## Step 1: Register & Configure App

{% include "./text-snippets/quick-start-reg-config.md" %}

## Step 2: Install SDK

For {{page.meta.arcana.app_type}} app, install the [`{{config.extra.arcana.auth_sdk_pkg_name}}`](https://www.npmjs.com/package/@arcana/auth) package.

{% include "./code-snippets/auth_install.md" %}

Next, integrate the app with the {{config.extra.arcana.sdk_name}} by instantiating and calling the requisite `AuthProvider` functions.

## Step 3: Integrate App

{% include "./text-snippets/quick-start-int-auth.md" %}

## Step 4: Onboard Users

{% include "./text-snippets/quick-start-auth-onboard.md" %}

## Step 5: Enable Wallet Operations

{% include "./text-snippets/quick-start-enable-wallet.md" %}

## Step 6: Deploy App

{% include "./text-snippets/quick-start-deploy.md" %}

## Examples

{% include "./text-snippets/quick-start-common-examples.md" %}

## See Also

{% include "./text-snippets/quick-start-see-also.md" %}