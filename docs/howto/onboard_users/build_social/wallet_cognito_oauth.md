---
slug: /cognitooauth
id: idcognitooauth
title: Cognito
sidebar_custom_props:
  cardIcon: 🤝
arcana:
  root_rel_path: ../../..
  social_provider: "'cognito'"
---

# AWS Cognito

In this guide, you will learn how to enable AWS Cognito authentication and onboard dApp users.

## Prerequisites

* Make sure you can access Arcana Developer Dashboard: {% include "./text-snippets/db_portal_url.md" %}
* Install the `@arcana/auth` package. For details, see [Arcana Auth Quick Start Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_qs.md).

Note that some steps are performed using [AWS Management Console](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-app-idp-settings.html), others using Arcana Dashboard. After that simply integrate your dApp with the Arcana Auth SDK to trigger AWS Cognito login and onboard users.

{% include "./text-snippets/cognito_config_steps.md" %}

!!! tip

      The **App Address** is displayed on the top right of your dashboard.

      You can revisit the Arcana Dashboard later to view and modify configuration settings. 

## Step 4: Integrate with Arcana Auth SDK and trigger Cognito login

Use instructions here to [integrate with Arcana Auth SDK]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md)

After integration, use the following code to trigger Cognito login to onboard users:

{% include "./code-snippets/auth_social_login.md" %}

Check if a user is logged in:

{% include "./code-snippets/auth_isloggedin.md" %}

Use other Auth SDK functions in your dApp. See [Auth SDK Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md) for details.

Add code in the application to log out an authenticated user:

{% include "./code-snippets/auth_logout.md" %}

**That is all!**  :material-party-popper:

Your dApp is all set for onboarding users via Cognito.

## What's Next?

After enabling user sign-in via Cognito, you can allow authenticated users to access the Arcana wallet for signing blockchain transactions on any EVM-compatible network.

## See also

* [Arcana authentication concepts]({{page.meta.arcana.root_rel_path}}/concepts/authtype/arcanaauth.md).
* [How to integrate with Arcana Auth SDK]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md)
* [Handling authentication errors]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_err.md)
