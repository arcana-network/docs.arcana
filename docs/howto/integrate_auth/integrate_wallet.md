---
slug: /setupwallet
id: idsetupwallet
sidebar_custom_props:
  cardIcon: 🔐 
arcana:
  root_rel_path: ../..
---

# Integrate Vanilla JS application

In this tutorial, you will learn how to integrate a vanilla JS application with the [Arcana Auth SDK]({{page.meta.arcana.root_rel_path}}/concepts/authsdk.md) to enable user onboarding and signing of blockchain transactions via the embedded Web3 [Arcana wallet]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md).

{% include "./text-snippets/sample_int_app_src.md" %}

[Try Auth Example :material-rocket-launch:](https://9mt0h4.csb.app/){ .md-button .md-button--primary}

## Prerequisites

* Developers must first log into the Arcana Developer Dashboard: {% include "./text-snippets/db_portal_url.md" %}

* Use the dashboard to [register and configure application settings]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) for using the Auth SDK. Click on the *Auth* tab in the dashboard. Configure the application settings as per the required user onboarding experience.  Choose and configure from a list of supported authentication mechanisms:

    {% include "./text-snippets/auth_supported.md" %}

    !!! tip

        You may be required to configure additional details depending on the choice of authentication mechanisms. For example, if the application wants to enable users to onboard using the Google social authentication then the developer must set up and specify the [clientID for Google OAuth]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/build_social/wallet_google_oauth.md).

        For details, see [how to configure one or more social logins]({{page.meta.arcana.root_rel_path}}/howto/config_social_providers.md).

* Save the **{{config.extra.arcana.app_address}}** assigned to the application. It is displayed on the dashboard application page and required to instantiate the `AuthProvider` while integrating the application. 

## Steps

*Integrating your application with the Auth SDK is simple!*

Follow these two steps:

### Step 1: Install Auth SDK

{% include "./code-snippets/auth_install.md" %}

### Step 2: Initialize the Auth SDK

Import Arcana Auth SDK and create a 'new' `AuthProvider`. During instantiation of the `AuthProvider`, specify the unique **{{config.extra.arcana.app_address}}** value assigned to your application after [registering and configuring]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) using the dashboard. Also, specify the [Arcana wallet visibility mode]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/walletuimodes.md) via the `alwaysVisible` parameter.

{% include "./code-snippets/import_auth.md" %}

{% include "./code-snippets/new_auth.md" %}

Initialize the newly instantiated `AuthProvider`. 

{% include "./code-snippets/init_auth.md" %}

Before you call any other Auth SDK functions, make sure initialization function is successful. 

{% include "./code-snippets/provider.md" %}

!!! caution

    The application must wait until the initialization is complete, before invoking any of the other Auth SDK functions such as triggering user login, encryption/decryption, obtaining public keys, etc.

That is all! :material-party-popper:

You have successfully integrated your application with the Auth SDK and can invoke any supported functions.

## What's Next?

After integrating with the Arcana Auth SDK, an application can onboard users through social authentication and passwordless login. The application users can utilize the embedded Arcana wallet to sign blockchain transactions, transfer or send blockchain tokens, etc.

## See also

* Access Ethereum providers [web3.js, ethers.js]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md#quick-start-with-ethersjs)
* Using Auth SDK to enable [Google]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/build_social/wallet_google_oauth.md) based social authentication
* [Passwordless authentication using Auth SDK]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/wallet_pwdless_login.md)
* [Auth SDK Errors]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_err.md)
* [Auth SDK Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md)
* {% include "./text-snippets/authsdkref_url.md" %}
