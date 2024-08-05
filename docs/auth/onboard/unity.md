---
alias: unity-user-onboarding
title: 'Onboard users in Unity App'
description: 'Instructions on how to onboard users via social login in a Web3 Unity gaming app with the Arcana Auth Gaming SDK.'
arcana:
  root_rel_path: ../..
---

# Unity App: Onboard Users

Learn how to onboard users via [[concept-social-login|social login]] in a Web3 Unity gaming app integrated with the [{{config.extra.arcana.gaming_sdk_name}}]({{page.meta.arcana.root_rel_path}}/concepts/authsdk.md) and allow authenticated users to access the {{config.extra.arcana.wallet_name}} within the app context.

<!-- 
[Try Auth Example :material-rocket-launch:](https://9mt0h4.csb.app/){ .md-button .md-button--primary}
-->

## Prerequisites

* The Unity Web3 gaming App must be [[integrate-unity-app|integrated with the {{config.extra.arcana.gaming_sdk_name}}]].

## Onboarding Users

*Onboarding users in a Unity Web3 gaming app with the {{config.extra.arcana.gaming_sdk_name}} and allowing authenticated users to access the {{config.extra.arcana.wallet_name}} is simple!*

Call `LoginWithSocial` or `LoginWithOTP` to onboard the user. Choose one of the [[web3-stack-auth|supported user onboarding options]] such as Google, Steam, etc. 

{% include "./code-snippets/auth_unity_onboard.md" %}

That is all! :material-party-popper:

The Unity Web3 gaming app can now onboard users via the configured social login providers. 

## What's Next?

After adding code to onboard users in a Unity Web3 gaming app, developers can add code to [[unity-web3-wallet-ops|enable Web3 wallet operations]] for authenticated users to sign transactions.

## See also

* [Authentication Types]({{page.meta.arcana.root_rel_path}}/concepts/authtype/index.md)
* [[unity-quick-start|Unity Quick Start Guide]]