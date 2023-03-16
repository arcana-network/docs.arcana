---
slug: /setupwalletvue
id: idsetupwalletvue
sidebar_custom_props:
  cardIcon: 🔐 
arcana:
  root_rel_path: ../..
---

# Integrate Vue application

In this tutorial, you will learn how to integrate a Vue application with the [Arcana Auth SDK]({{page.meta.arcana.root_rel_path}}/concepts/authsdk.md) to enable user onboarding and signing of blockchain transactions via the embedded Web3 [Arcana wallet]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md).

[Try Auth Example :material-rocket-launch:](https://9mt0h4.csb.app/){ .md-button .md-button--primary}

## Prerequisites

* Developers must first log into the Arcana Developer Dashboard: {% include "./text-snippets/db_portal_url.md" %}

* Use the dashboard to [register and configure]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) your Vue application settings for using the Auth SDK. Click on the *Auth* tab in the dashboard. Configure the application settings as per the required user onboarding experience.  Choose and configure from a list of supported authentication mechanisms:

    {% include "./text-snippets/auth_supported.md" %}

    !!! tip

          You may be required to configure additional details depending on the choice of social providers for user authentication. For example, to enable user onboarding via the social provider, Google, the developer must set up and specify the [client ID for Google OAuth]({{page.meta.arcana.root_rel_path}}/howto/config_social/google_oauth.md) in the Arcana Dashboard before integrating the application.

          For details, refer to the [social provider configuration guides]({{page.meta.arcana.root_rel_path}}/howto/config_social/index.md).

* The **{{config.extra.arcana.app_address}}** assigned to the application is displayed on the dashboard application screen. Save the **{{config.extra.arcana.app_address}}** as it will be required for instantiating the `AuthProvider` while integrating the app with the Auth SDK. 

## Steps

*Integrating your application with the Auth SDK is simple!*

Follow these two steps:

### Step 1: Install Auth SDK

{% include "./code-snippets/auth_install.md" %}

### Step 2: Initialize the Auth SDK

To integrate the application, first, you need to import Arcana Auth SDK and create a 'new' `AuthProvider`. During instantiation of the `AuthProvider`, specify the unique **{{config.extra.arcana.app_address}}** value assigned to your application after [registering and configuring]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) using the dashboard. Also, specify the [Arcana wallet visibility mode]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/walletuimodes.md) via the `alwaysVisible` parameter.

You can club all the Auth SDK integration code in a file `src/lib/auth.js` and export the function that instantiates the `AuthProvider`.

{% include "./code-snippets/vue_auth_js.md" %}

Next, import and call this exported function in the `App.vue` file as shown below:

{% include "./code-snippets/vue_app_js.md" %}

That is all! :material-party-popper:

You have successfully integrated your Vue application with the Auth SDK and can invoke any supported functions.

## What's Next?

After integrating with the Arcana Auth SDK, an application can onboard users through social authentication and passwordless login. The application users can utilize the embedded Arcana wallet to sign blockchain transactions, transfer or send blockchain tokens, etc.

## See also

* Using Auth SDK to enable social authentication via [Google]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/build_social/wallet_google_oauth.md)
* [Passwordless authentication using Auth SDK]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/wallet_pwdless_login.md)
* [Auth SDK Errors]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_err.md)
* [Auth SDK Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md)
* {% include "./text-snippets/authsdkref_url.md" %}
