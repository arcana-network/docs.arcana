---
alias: faq-db
title: 'FAQ: Arcana Developer Dashboard'
description: 'Frequently asked questions about how developers can use the Arcana Dashboard to register their apps, get a unique clientId, configure the app auth providers and other usage settings before integrating the app with the Arcana Auth SDK.'
arcana:
  root_rel_path: ..
toc_depth: 2
---

# {{config.extra.arcana.dashboard_name}}

## General

---

??? an-faq "How do I delete the application configuration and start afresh?"

      To delete an application from {{config.extra.arcana.company_name}} ecosystem, follow these instructions:

      * Log into the {{config.extra.arcana.dashboard_name}}.
      * In the **Manage Apps** screen, select the card displayed there for the registered application you wish to delete.
      * Click the trash icon on the top right and delete the app entry.
      * The application registration will be canceled and the **{{config.extra.arcana.app_address}}** assigned to your application will no longer work.

      ![Delete App Entry](/img/an_db_delete_app_anim.gif){.an-screenshots}

??? an-faq "How do I migrate an application from using {{config.extra.arcana.company_name}} Testnet to Mainnet?"

      To migrate an application from using the {{config.extra.arcana.company_name}} Testnet to Mainnet, follow these steps:

      1. Use the {{config.extra.arcana.dashboard_name}}, visit the 'Manage App' page, and select the application entry. By default, when you register any application, a 'Testnet' configuration profile is created for the application. Click on the app card to see the application configuration screen.

      2. On the application configuration screen, switch the network from 'Testnet' to 'Mainnet' on the top right to create a 'Mainnet' configuration profile. You will be asked to approve the creation of the 'Mainnet' configuration profile. To begin with, you can use a copy of the 'Testnet' profile to generate the 'Mainnet' profile. Later, you can edit and manage it independently. Note that a new **{{config.extra.arcana.app_address}}** is assigned to the 'Mainnet' profile.

      3. Use the 'Mainnet' profile **{{config.extra.arcana.app_address}}** and update it in the app integration code instead of the earlier value which corresponds to 'Testnet'. You will need to restart your application after this change. This is important to ensure that the app uses the 'Mainnet' configuration settings.

    !!! caution

          To migrate an app from using Testnet to Mainnet, the developers must ensure that the new **{{config.extra.arcana.app_address}}** corresponding to the application's 'Mainnet' profile is used to initialize the `AuthProvider` while integrating the app with the {{config.extra.arcana.sdk_name}}. After that, the app must be restarted to switch over from using {{config.extra.arcana.company_name}} Testnet to the Mainnet. 

??? an-faq "Can a developer run one instance of the app, say dev version on Testnet while publishing the release instance to use the {{config.extra.arcana.company_name}} Mainnet?"

      Yes, developers can run two instances of the app simultaneously, one on the {{config.extra.arcana.company_name}} Testnet and the other on the Mainnet as each app instance is assigned a unique **{{config.extra.arcana.app_address}}**. 
      
      Use the 'Mainnet' configuration profile **{{config.extra.arcana.app_address}}** in your app's integration code and instantiate the `AuthProvider`. Then deploy this app instance to use {{config.extra.arcana.company_name}} Mainnet. 
      
      Similarly, use the 'Testnet' configuration profile **{{config.extra.arcana.app_address}}** in another copy (branch / different version of the code) of your app where {{config.extra.arcana.sdk_name}} is integrated and instantiate the `AuthProvider`. Then deploy this app instance to run it using the {{config.extra.arcana.company_name}} Testnet.

??? an-faq "How do I delete Mainnet configuration settings and run my application using {{config.extra.arcana.company_name}} Testnet only?"

      Once you have enabled 'Mainnet' for an application, you cannot delete the 'Mainnet' configuration profile independently in the current release.  You can [[dashboard-user-guide#switch-profiles|switch your application from 'Mainnet' to 'Testnet']] by using the dropdown button in the application configuration screen to edit or modify it. 

      The only way to delete Mainnet settings is to deregister the app and delete the app entry altogether.  This removes both Testnet and Mainnet configuration profiles. You will need to re-register the application.  This will create a new **{{config.extra.arcana.app_address}}** and you will be required to specify this new {{config.extra.arcana.app_address}} when integrating your application with the {{config.extra.arcana.sdk_name}}.  As a result, when you deploy your app and the users log in, they will see brand-new wallet addresses. 
      
      If you wish to ensure that the user wallet address does not change, you must register your application and request for the ['Shared Key Space']({{page.meta.arcana.root_rel_path}}/concepts/sharedkeys.md) option at the very start. In that case, users will be allowed to use the same wallet address across all applications in the {{config.extra.arcana.company_name}} ecosystem and even if an application is de-registered and re-registered.

## Branding Settings

??? an-faq "Why do I see an error when uploading the logo file?"

      Make sure the file is less than the {% include "./text-snippets/limit_branding_img_size.md" %} limit for a successful upload.

??? an-faq "How do I change the logo file that I uploaded earlier?"

      Click on the 'x' icon next to the uploaded logo file. You will see a notification about the successful deletion of the file. Click on the upload icon and upload a new logo file.

## Social Auth Settings

---

??? an-faq "Is it mandatory to specify all configurations in the {{config.extra.arcana.dashboard_name}} *Configure* section?"

      No.
      
      If you do not configure any authentication providers in your 'Testnet' or 'Mainnet' configuration profile settings in the {{config.extra.arcana.dashboard_name}}d, then your app can only onboard users via the passwordless option that is enabled by default. You can use the plug-and-play UI via the `connect` method or build your own auth UI and use the `loginWithLink` method to onboard users via the passwordless login option.
      
      To enable any authentication providers for app onboarding you must configure them using the {{config.extra.arcana.dashboard_name}}. See the [how to configure authentication providers]({{page.meta.arcana.root_rel_path}}/howto/config_social/index.md) guide for more details.

??? an-faq "Can an application enable more than one authentication provider to onboard users?"  

      Yes. The application developer can enable one or more authentication providers and passwordless login. The application users can choose any one of the supported authentication mechanisms to log in easily, similar to Web2 app onboarding.

??? an-faq "Is there a way to control when, which position in the application window, and what type of the {{config.extra.arcana.wallet_name}}is displayed by the {{config.extra.arcana.sdk_name}}?"

      When integrating with the {{config.extra.arcana.sdk_name}}, the application developer can use the `alwaysVisible` setting to control whether the {{config.extra.arcana.wallet_name}} UI is automatically displayed once the user has authenticated (default) or it shows up only when a blockchain transaction is triggered that requires the user's approval.

      If `alwaysVisible = false` when `AuthProvider` is instantiated during app integration with the {{config.extra.arcana.sdk_name}}, the wallet will **only** appear when a blockchain transaction is triggered. The wallet screen will pop up, requesting the user's approval or signature. Once the user takes the appropriate action, the wallet screen will disappear.

      For more details, see [{{config.extra.arcana.wallet_name}} visibility modes]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/walletuimodes.md)

## Wallet Settings

---

??? an-faq "Why do I need to specify Wallet Website Domain setting?"

      This is an optional setting for additional security. If specified, the {{config.extra.arcana.product_name}} subsystem uses this setting to restrict the {{config.extra.arcana.wallet_name}} from loading anywhere else other than the application website domain that a developer specifies. for restricted domains, the [frame-ancestor Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/web/http/headers/content-security-policy#frame-ancestors) is used.
