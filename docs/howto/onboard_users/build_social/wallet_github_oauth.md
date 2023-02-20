---
slug: /githuboauth
id: idgithuboauth
title: GitHub
sidebar_custom_props:
  cardIcon: 🤝
arcana:
  root_rel_path: ../../..
  social_provider: "'github'"
---

# GitHub

In this guide, you will learn how to enable GitHub authentication and onboard users.

## Prerequisites

* Make sure you can access Arcana Developer Dashboard: {% include "./text-snippets/db_portal_url.md" %}
* Install the `@arcana/auth` package. For details, see [Arcana Auth Quick Start Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_qs.md).

Note that some steps are performed using [GitHub Developer Settings Dashboard](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app), and others using Arcana Dashboard. After that simply integrate your dApp with the Arcana Auth SDK to trigger GitHub login and onboard users.

{% include "./text-snippets/github_config_steps.md" %}

!!! tip

      The **{{config.extra.arcana.app_address}}** is displayed on the top right of your dashboard.

      You can revisit the Arcana Dashboard later to view and modify configuration settings. 

## Step 4: Integrate and Use Arcana Auth SDK

Use the instructions here to [integrate with Arcana Auth SDK]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md). After integration, use the following code to trigger social login for GitHub:

{% include "./code-snippets/auth_social_login.md" %}

Check if a user is logged in:

{% include "./code-snippets/auth_isloggedin.md" %}

Use other Auth SDK functions in your dApp. See [Auth SDK Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md) for details.

Add code in the application to log out an authenticated user:

{% include "./code-snippets/auth_logout.md" %}

**That is all!**  :material-party-popper:

Your dApp is all set for onboarding users via the GitHub OAuth authentication mechanism.

## What's Next?

After enabling user sign-in via GitHub, you can allow authenticated users to access the Arcana wallet for signing blockchain transactions on any EVM-compatible network.

## See also

* [Arcana authentication concepts]({{page.meta.arcana.root_rel_path}}/concepts/authtype/arcanaauth.md).
* [How to integrate with Arcana Auth SDK]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md)
* [Handling authentication errors]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_err.md)
