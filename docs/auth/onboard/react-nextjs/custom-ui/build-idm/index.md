---
alias: index-react-nextjs-build-iam-providers
title: 'IAM Provider: Custom Login UI'
description: 'List of IAM Providers that are supported by Arcana Auth and how to build user authentication for onboarding React/Next.js Web3 app users in apps integrated with the Arcana SDK.'
arcana:
  root_rel_path: ../../../../..
---

# IAM Provider: Custom Login UI

Developers can choose to **not** use the plug-and-play login UI and instead build a custom login UI to onboard users.

In this case, developers must build custom login UI themselves after configuring the IAM Providers in the {{config.extra.arcana.dashboard_name}}. This custom login UI must call appropriate user onboarding functions offered by the {{config.extra.arcana.sdk_name}} for every configured IAM provider.

[[react-nextjs-build-iam-cognito-auth|Cognito :fontawesome-brands-aws:]]{ .md-button }

[[react-nextjs-build-iam-firebase-auth|Firebase :material-firebase:]]{ .md-button }