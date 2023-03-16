---
slug: /authplugnplay
id: idauthplugnplay
sidebar_custom_props:
  cardIcon: 🔐 
arcana:
  root_rel_path: ../..
---

# Plug and Play Auth

In this tutorial, you will learn how dApps can integrate with the [Arcana Auth SDK]({{page.meta.arcana.root_rel_path}}/concepts/authsdk.md) and use the ['plug and play']({{page.meta.arcana.root_rel_path}}/concepts/plugnplayauth.md)' authentication feature. 

The Auth SDK's plug-and-play authentication simplifies and speeds up the addition of user onboarding functionality in a Web3 application. The developer can configure the user onboarding options on this plug-and-play UI screen using the Arcana Dashboard.

## Prerequisites

* Make sure you can access Arcana Developer Dashboard: {% include "./text-snippets/db_portal_url.md" %}
* Use the [Arcana Dashboard]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md) to [register and configure dApp]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md). 

!!! caution  "Configure Social Providers"
    
      During dApp configuration, make sure you follow steps 1-3 listed for each of the supported social providers and set up the Auth **ClientID** and **Secret** values obtained from the social providers in the Arcana Developer Dashboard.  For details, see [how to configure social providers]({{page.meta.arcana.root_rel_path}}/howto/config_social/index.md).

      Only the configured providers will show up in the plug-and-play pop-up screen as the available onboarding options.  If no providers are configured, only the passwordless login option is enabled by default.
  
* Install the `@arcana/auth` package and [integrate the dApp with Auth SDK]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md)

## Steps

*Using the plug-and-play authentication feature is simple!*

Just a single line of code!

Ensure that you have successfully integrated with the Auth SDK, as listed in the prerequisites section, and initialized the `AuthProvider`. After integrating your dApp with the Auth SDK, simply use the `connect` method to plug built-in user authentication into your application:

{% include "./code-snippets/auth_plugnplay.md" %}

This will bring up the plug-and-play pop-up modal on the dApp window and display the available options for user onboarding. Only those options are displayed that are configured by the dApp developer using the Arcana Developer Dashboard.

The figure below shows the plug-and-play pop-up authentication screen for Arcana wallet for a sample dApp that allowed only Google social authentication and passwordless login.

<img src="/img/an_plug_n_play_auth.png" width="300"/>

That is all! :material-party-popper:

You have successfully enabled the plug-and-play authentication feature to onboard the app users.

## What's Next?

Besides onboarding the dApp users via plug-and-play authentication, the Auth SDK can be utilized for enabling [Arcana wallet]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md) to sign blockchain transactions.

Once the Auth SDK is integrated with a dApp, authenticated users can access the Arcana wallet for signing blockchain transactions on any EVM-compatible network. 

## See also

* Onboarding users via [Google]({{page.meta.arcana.root_rel_path}}/howto/config_social/google_oauth.md)
* [Passwordless authentication using Auth SDK]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/wallet_pwdless_login.md)
* [Auth SDK Errors]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_err.md)
* [Auth SDK Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md)
* {% include "./text-snippets/authsdkref_url.md" %}
