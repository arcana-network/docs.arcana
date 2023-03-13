---
slug: /config_social
id: idconfigdsocial
sidebar_custom_props:
  cardIcon: ⚒️
arcana:
  root_rel_path: ..
---

# Social Logins

In this tutorial, you will learn how to use the [Arcana Developer Dashboard]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md) and configure Auth SDK usage settings to onboard users via social authentication before integrating a Web3 application with the [Auth SDK]({{page.meta.arcana.root_rel_path}}/concepts/authsdk.md).

## Prerequisites

{% include "./text-snippets/db_prerequisites.md" %}

## Choose Onboarding Options

Developers can enable one or more social authentication providers in Web3 applications and configure them using the Arcana dashboard. 

!!! tip "Passwordless Login"

          By default, passwordless login is always available for any application that integrates with the Arcana Auth SDK.  Unlike social authentication, passwordless login does not require any additional setup via the Arcana developer dashboard.

!!! warning "Using Cognito with other social providers"

      {% include "./text-snippets/warn_cognito_social_provider_setup.md" %}          
 
## Setup Social Logins

Setting up OAuth may vary from one social login provider to another.  Refer to the provider-specific configuration instructions listed below:

[Cognito :fontawesome-brands-aws:]({{page.meta.arcana.root_rel_path}}/howto/config_social_login/cognito_oauth.md){ .md-button }

[Discord :fontawesome-brands-discord:]({{page.meta.arcana.root_rel_path}}/howto/config_social_login/discord_oauth.md){ .md-button }

[GitHub :fontawesome-brands-github:]({{page.meta.arcana.root_rel_path}}/howto/config_social_login/github_oauth.md){ .md-button }

[Google :fontawesome-brands-google:]({{page.meta.arcana.root_rel_path}}/howto/config_social_login/google_oauth.md){ .md-button }

[Twitch :fontawesome-brands-twitch:]({{page.meta.arcana.root_rel_path}}/howto/config_social_login/twitch_oauth.md){ .md-button }

[Twitter :fontawesome-brands-twitter:]({{page.meta.arcana.root_rel_path}}/howto/config_social_login/twitter_oauth.md){ .md-button }

!!! tip

      You can reconfigure application settings later anytime by visiting the Arcana Developer Dashboard and clicking on the **Configure** menu item on the top right of the screen.

## What's next?

After configuring the social authentication providers, the developers can install Auth SDK and [integrate the application]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) for user authentication and other supported functions.

## See Also

* [Auth Quick Start]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_qs.md)
* [Auth SDK Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md)
* [Arcana Academy]({{page.meta.arcana.root_rel_path}}/tutorials/videos/an_academy.md)