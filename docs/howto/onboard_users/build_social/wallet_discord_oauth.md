---
slug: /discordoauth
id: iddiscordoauth
title: Discord
sidebar_custom_props:
  cardIcon:  🤝
arcana:
  root_rel_path: ../../..
  social_provider: "'discord'"
---

# Discord

In this guide, you will learn how to enable Discord authentication and onboard dApp users.

## Prerequisites

* Make sure you can access Arcana Developer Dashboard: {% include "./text-snippets/db_portal_url.md" %}
* Install the `@arcana/auth` package. For details, see [Arcana Auth Quick Start Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_qs.md).

Note that some of the configuration steps are performed using [Discord Developer Portal](https://discord.com/developers/applications), and others using the Arcana Dashboard. After configuring Discord simply integrate the app with the Arcana Auth SDK and trigger user authentication via Discord.

{% include "./text-snippets/discord_config_steps.md" %}

!!! tip

      The **{{config.extra.arcana.app_address}}** is displayed on the top right of your dashboard.

      You can revisit the Arcana Dashboard later to view and modify configuration settings. 
      
## Step 4: Integrate and Use Arcana Auth SDK 

Use the instructions here to [integrate with Arcana Auth SDK]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md). After integration, use the following code to trigger Discord login to onboard users:

{% include "./code-snippets/auth_social_login.md" %}

Check if a user is logged in:

{% include "./code-snippets/auth_isloggedin.md" %}

Use other Auth SDK functions in your dApp. See [Auth SDK Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md) for details.

Add code in the application to log out an authenticated user:

{% include "./code-snippets/auth_logout.md" %}

**That is all!**  :material-party-popper:

Your dApp is all set for onboarding users via the Discord authentication mechanism.

## What's Next?

After enabling user sign-in via Discord, you can allow authenticated users to access the Arcana wallet for signing blockchain transactions on any EVM-compatible network. 

## See also

* [Arcana authentication concepts]({{page.meta.arcana.root_rel_path}}/concepts/authtype/arcanaauth.md).
* [How to integrate with Arcana Auth SDK]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md)
* [Handling authentication errors]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_err.md)