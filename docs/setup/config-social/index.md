---
alias: index-config-social-providers
title: 'Social Login Setup'
description: 'List of social login providers that are supported by Arcana Auth for onboarding Web3 app users in apps integrated with the Arcana SDK.'
arcana:
  root_rel_path: ../..
---

# Social Login Setup  

## Social Providers   

[[config-auth-apple|:material-apple:{ .icon-color} Apple]]{ .md-button }
[[config-auth-discord|:fontawesome-brands-discord:{ .icon-color} Discord]]{ .md-button }
[[config-auth-github|:fontawesome-brands-github:{ .icon-color} GitHub]]{ .md-button }
[[config-auth-google|:fontawesome-brands-google:{ .icon-color} Google]]{ .md-button }
[[config-auth-steam|:material-steam:{ .icon-color} Steam]]{ .md-button }
[[config-auth-telegram|:simple-telegram:{ .icon-color} Telegram]]{ .md-button }
[[config-auth-twitch|:fontawesome-brands-twitch:{ .icon-color} Twitch ]]{ .md-button }
[[config-auth-twitter|:fontawesome-brands-twitter:{ .icon-color} Twitter]]{ .md-button }

## IAM Providers 

[[config-auth-cognito|:fontawesome-brands-aws:{ .icon-color } Cognito ]]{ .md-button }
[[config-auth-firebase|:material-firebase:{ .icon-color } Firebase ]]{ .md-button }

{% include "./text-snippets/warn_cognito_social_provider_setup.md" %}   

!!! an-info "Passwordless Login"

      By default, passwordless login is always available for any application that integrates with the {{config.extra.arcana.sdk_name}}.  Unlike social login providers, the passwordless option is enabled by default and requires no configuration. 
