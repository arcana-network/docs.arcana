---
slug: /pwdlessauth
id: idpwdlessauth
sidebar_custom_props:
  cardIcon: 🤝
arcana:
  root_rel_path: ../..
---

# Build Passwordless Auth

In this guide, you will learn how to enable passwordless authentication and onboard dApp users.

## Prerequisites

* Make sure you can access Arcana Developer Dashboard: {% include "./text-snippets/db_portal_url.md" %}
* Install the `@arcana/auth` package. For details, see [Arcana Auth Quick Start Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_qs.md#install-auth-sdk).

## Steps

To set up passwordless authentication, you simply need to register your dApp using the Arcana Developer dashboard and then integrate and use the Arcana Auth SDK. No additional setup or configuration is required.

### Step 1: Register and Configure dApp

Go to the Arcana Dashboard: {% include "./text-snippets/db_portal_url.md" %}

If this is your first visit to the dashboard, create a new entry for your dApp to register it. Once the dApp is registered using the dashboard, Arcana Network assigns an **{{config.extra.arcana.app_address}}** for every dApp.

  ![Get Dashboard App identifier](/img/an_db_app_address.png)

!!! info

      You need to save this **{{config.extra.arcana.app_address}}**.

      After completing the dApp configuration at the dashboard, you will be required to specify this **{{config.extra.arcana.app_address}}** while integrating your dApp code with the Arcana Auth SDK.

      You can revisit the Arcana Dashboard later and reference the **{{config.extra.arcana.app_address}}** displayed on the top right of the dashboard. 

Optionally, you can use defaults for other dApp settings or choose to modify them as per your dApp use case. See [how to configure your dApp guide]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) for details.

!!! note

      You can enable more than one authentication mechanism for dApp end users. In addition to passwordless login, you can also allow dApp users to onboard using other [supported authentication mechanisms]({{page.meta.arcana.root_rel_path}}/howto/config_social_providers.md).

### Step 2: Integrate with Arcana Auth SDK

Use instructions here to [integrate with Arcana Auth SDK]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md)

Trigger passwordless to onboard users. Specify the email ID provided by the dApp user as the input.

{% include "./code-snippets/auth_pwdless.md" %}

Check if the user has logged in successfully:

{% include "./code-snippets/auth_isloggedin.md" %}

Use other Auth SDK functions in your dApp. See [Auth SDK Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md) for details.

Log out the dApp user when requested:
    
{% include "./code-snippets/auth_logout.md" %}

**That is all!**  :material-party-popper:

Your dApp is all set for onboarding users via the passwordless login mechanism.

## What's Next?

After enabling passwordless login in your dApp, you can allow authenticated users to access the Arcana wallet for signing blockchain transactions on any EVM-compatible network.

## See also

* [Arcana authentication concepts]({{page.meta.arcana.root_rel_path}}/concepts/authtype/arcanaauth.md).
* [Configure Social Logins]({{page.meta.arcana.root_rel_path}}/howto/config_social_providers.md)
* [Troubleshooting authentication errors]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_err.md)
* [Auth SDK Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md)
* {% include "./text-snippets/authsdkref_url.md" %}
