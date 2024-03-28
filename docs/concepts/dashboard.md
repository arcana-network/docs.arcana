---
alias: concept-arcana-dashboard
title: 'Arcana Developer Dashboard'
description: 'What is Arcana Developer Dashboard and what features does it offer for Web3 app developers.'
arcana:
  root_rel_path: ..
---

# {{config.extra.arcana.dashboard_name}}

<img src="/img/icons/i_an_dashboard_light.png#only-light" width="50"/>
<img src="/img/icons/i_an_dashboard_dark.png#only-dark" width="50"/>

Access the {{config.extra.arcana.dashboard_name}} at: {% include "./text-snippets/db_portal_url.md" %}

The {{config.extra.arcana.dashboard_name}} lets you register apps with {{config.extra.arcana.company_name}} and tailor them to your use cases and user onboarding preferences. It works alongside the {{config.extra.arcana.company_name}} Gateway for app configuration and usage tracking. The dashboard provides insights, such as monthly and daily active users (MAU) per app.

!!! important

    Before integrating any application with the {{config.extra.arcana.sdk_name}}, it must be [[register-app-auth|registered]] and [[index-configure-auth|configured for user onboarding]] through the {{config.extra.arcana.dashboard_name}}.

## Key Functions

### Register App

Before integrating the {{config.extra.arcana.sdk_name}}, developers must use the dashboard to register apps with {{config.extra.arcana.company_name}} and get a unique {{config.extra.arcana.app_address}}. Later, during integration, use {{config.extra.arcana.app_address}} to create a new `AuthProvider` instance for onboarding users and signing blockchain transactions.

### Configure Auth Usage

Use the dashboard to customize {{config.extra.arcana.sdk_name}} usage:

- **Wallet UI**: select built-in {{config.extra.arcana.sdk_name}} UI or custom wallet UI
- **Branding**: customize the look and feel of the {{config.extra.arcana.sdk_name}} UI
- **Authentication**: enable authentication providers for onboarding users
- **Chain Management**: add more chains to the default pre-configured list of supported chains
- **Global/App-Specific Keys**: select if app users see same wallet address across all apps deployed on {{config.extra.arcana.company_name}} ecosystem or app-specific unique addresses
- **Gasless**: enable gasless transactions for app users

<img src="/img/diagrams/d_an_dashboard_light.png#only-light" width="80%" height="80%"/>
<img src="/img/diagrams/d_an_dashboard_dark.png#only-dark" width="80%" height="80%"/>