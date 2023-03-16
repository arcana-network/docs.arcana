---
slug: /cognitooauth
id: idcognitooauth
title: Cognito
sidebar_custom_props:
  cardIcon: 🤝
arcana:
  root_rel_path: ../..
  social_provider: "'aws'"
---

# AWS Cognito

In this guide, you will learn how to configure AWS Cognito and integrate the Arcana Auth SDK with a Web3 app that uses AWS Cognito for onboarding users. After integrating with the Auth SDK, the developers can enable the authenticated users to access the embedded, non-custodial Arcana wallet.

## Prerequisites

* Make sure you can access the Arcana Developer Dashboard: {% include "./text-snippets/db_portal_url.md" %}
* Install the `@arcana/auth` package. For details, see [Arcana Auth Quick Start Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_qs.md).

Note that some steps are performed using [AWS Management Console](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-app-idp-settings.html), others using Arcana Dashboard. Once the users are authenticated using AWS Cognito, the developer can call Auth SDK functions to access Web3 wallet operations offered by the embedded Arcana wallet from within the app context.

{% include "./text-snippets/cognito_config_steps.md" %}

!!! tip

      The **Client ID** is displayed on the top right of your dashboard.

      You can revisit the Arcana Dashboard later to view and modify configuration settings. 

## Step 4: Integrate with Arcana Auth SDK

Use the instructions here to [integrate with the Arcana Auth SDK]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md)

After integration, use the following code to trigger Cognito login to onboard users:

{% include "./code-snippets/auth_social_login.md" %}

Check if a user is logged in:

{% include "./code-snippets/auth_isloggedin.md" %}

Use other Auth SDK functions in your dApp. See [Auth SDK Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md) for details.

Add code in the application to log out an authenticated user:

{% include "./code-snippets/auth_logout.md" %}

**That is all!**  :material-party-popper:

Your app is all set for authenticating users via AWS Cognito. Authenticated users can instantly access the Arcana wallet to sign blockchain transactions.

!!! warning "Apps using Federated Identity Providers"

      {% include "./text-snippets/warn_cognito_social_provider_setup.md" %}

## What's Next?

To know more about how to use Web3 wallet operations programmatically in your app, see [Arcana Wallet Developer's Guide]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md). Refer to the [Arcana Wallet User's Guide]({{page.meta.arcana.root_rel_path}}/howto/wallet_ui.md) for more information on how authenticated app users can access the wallet UI.
## See also

* [Arcana authentication concepts]({{page.meta.arcana.root_rel_path}}/concepts/authtype/arcanaauth.md).
* [How to integrate with the Arcana Auth SDK]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md)
* [Handling authentication errors]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_err.md)
