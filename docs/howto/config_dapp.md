---
slug: /config_dapp
id: idconfigdapp
sidebar_custom_props:
  cardIcon: ⚒️
arcana:
  root_rel_path: ..
---

# Register & Configure Application

In this tutorial, you will learn how to register and configure an application before integrating it with the Auth SDK. 

!!! note "Configure first, integrate later"

    The [Arcana Developer Dashboard]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md) allows developers to customize the user onboarding experience and the blockchain transaction signing experience. 
    
    Developers can register and configure their apps using the dashboard. Each registered app is assigned a unique identifier called the **{{config.extra.arcana.app_address}}**. This is used to [integrate an application]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) with the Arcana Auth SDK.

## Prerequisites

{% include "./text-snippets/db_prerequisites.md" %}

## Step 1: Developer Dashboard Login

{% include "./text-snippets/db_login.md" %}

## Step 2: Register Application

{% include "./text-snippets/db_register_dapp.md" %}

## Step 3: Configure Application

{% include "./text-snippets/db_settings.md" %}

---

That is all! 🎉

You have successfully registered and configured your application. 

## What's next?

After registering and configuring the application, install the Auth SDK and then [integrate it with the application]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) to enable user authentication and signing of Web3 blockchain transactions.

!!! note

    You can copy the assigned **{{config.extra.arcana.app_address}}** once an application is registered and configured using the dashboard. It will be required when you integrate the application with the Auth SDK.

    ![App unique identifier](/img/an_db_app_address.png)

You can reconfigure application settings for Auth SDK usage later anytime by visiting the Arcana Developer Dashboard. Simply log in, select your app entry, and double-click on it to view the **Configure** screen.

## See Also

* [Configure wallet visibility mode]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/config_wallet_modes.md)
* [Deleting Application Entry]({{page.meta.arcana.root_rel_path}}/db/config_dApp_with_db.md#delete-application)
* [Managing Testnet and Mainnet Configurations]({{page.meta.arcana.root_rel_path}}/db/config_dApp_with_db.md#manage-testnet-and-mainnet-configurations)
* [Auth Quick Start Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_qs.md)
* [Auth SDK Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md)
* {% include "./text-snippets/authsdkref_url.md" %}