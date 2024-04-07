---
alias: index-build-iam-providers
title: 'IAM Auth'
description: 'List of IAM Providers that are supported by Arcana Auth and how to build user authentication for onboarding Vanilla HTML/CSS/JS Web3 app users in apps integrated with the Arcana SDK.'
arcana:
  root_rel_path: ../../../../..
---

# IAM Providers: Custom Login UI

Developers can choose to **not** use {{config.extra.arcana.company_name}}'s  plug-and-play login UI for third-party IAM providers and instead build a custom login UI to onboard users.

In this case, developers must build the custom login UI themselves after configuring the IAM providers in the {{config.extra.arcana.dashboard_name}} . This custom login UI must call appropriate user onboarding functions offered by the {{config.extra.arcana.sdk_name}} for the third-party IAM providers.

[[build-iam-cognito-auth|Cognito :fontawesome-brands-aws:]]{ .md-button }

[[build-iam-firebase-auth|Firebase :material-firebase:]]{ .md-button }