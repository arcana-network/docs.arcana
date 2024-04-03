---
alias: web3-stack-auth
title: 'Auth Providers'
description: 'Learn about the user authentication providers that are supported by the the Arcana Auth SDK for user onboarding.'
arcana:
  root_rel_path: ..
---
  
# Auth Providers

You can enable [[concept-social-login|social login]] and onboard users in Web3 apps by configuring one or more supported authentication providers and integrating the app with the [[concept-authsdk| {{config.extra.arcana.sdk_name}}]].  

App users can simply pick one of the log in options configured by the app developers to authenticate. After authentication, app users can instantly access the {{config.extra.arcana.wallet_name}} from within the app context and sign blockchain transactions.

## Social Login Providers

{% include "./text-snippets/socialauth_supported.md" %}

## IAM Providers

{% include "./text-snippets/custom_idm_supported.md" %}

!!! abstract "Coming soon!" 

      We are working on supporting additional authentication providers in the upcoming {{config.extra.arcana.sdk_name}} releases:

      - Telegram
      - LINE
      - Wechat
      - Kakaotalk

!!! info "Passwordless Login"

    Besides these providers, a [[concept-pwdless-auth|passwordless login option]] is always available as a login option for app users. It does not require any configuration or enabling.

## Dashboard Login Options

The Web3 app developers can log into the [{{config.extra.arcana.dashboard_name}}]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md) via one of these social login providers, IAM providers or use the passwordless login option:

{% include "./text-snippets/db_supported_oauth.md" %}