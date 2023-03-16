---
slug: /faq_db
id: idfaqdb
title: Dashboard
sidebar_custom_props:
  cardIcon: 🙋
arcana:
  root_rel_path: ..
toc_depth: 2
---

# Dashboard

Frequently asked questions about using the [Arcana Developer Dashboard]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md) to configure authentication settings before integrating an app with the Auth SDK.

## General

---

??? an-faq "How do I delete the application configuration and start afresh?"

      To delete an application in the Arcana Developer Dashboard:

      * You need to be logged into the dashboard.
      * In the **Manage Apps** dashboard screen, select the card displayed for your registered application.
      * Click the trash icon on the top right to delete the app entry.
      * Your application registration will be canceled and the **{{config.extra.arcana.app_address}}** assigned to your application will no longer work

      ![Delete App Entry](/img/an_db_delete_app.png)

??? an-faq "How do I migrate an application from Testnet to Mainnet?"

      To migrate an application from Arcana Testnet to Mainnet, follow these steps:

      1. Use the Arcana Developer Dashboard, visit the 'Manage App' dashboard page, and select the application entry. By default, when you register any application, a 'Testnet' configuration profile is created for the application. Click on the app card to see the application configuration dashboard screen.

      2. On the application configuration dashboard screen, switch the network from 'Testnet' to 'Mainnet' on the top right to create a 'Mainnet' configuration profile. You will be asked to approve the creation of the 'Mainnet' configuration profile. To begin with, this is a copy of the 'Testnet' profile but you can edit and manage it independently. Note that a new **{{config.extra.arcana.app_address}}** is assigned to the 'Mainnet' profile.

      3. Use the 'Mainnet' profile **{{config.extra.arcana.app_address}}** in your integration code instead of the earlier one which corresponds to 'Testnet'. You will need to restart your application after this change. This is important. If you fail to make this change, even if you have switched the profile in the dashboard, your application will continue to use the 'Testnet' configuration settings.

    !!! caution

          To migrate an app from using Testnet to Mainnet, the developers must ensure that the new **{{config.extra.arcana.app_address}}** corresponding to the application's 'Mainnet' profile is used to initialize the `AuthProvider` while integrating the app with the Auth SDK. After that, the app must be restarted to switch over from using Arcana Testnet to the Mainnet. 

??? an-faq "Can a developer run one instance of the app, say dev version on Testnet while publishing the release instance to use the Arcana Mainnet?"

      Yes, developers can run two instances of the app simultaneously, one on the Arcana Testnet and the other on the Mainnet as each app instance is assigned a unique **{{config.extra.arcana.app_address}}**. 
      
      Use the 'Mainnet' configuration profile **{{config.extra.arcana.app_address}}** in your app's Auth SDK integration code and instantiate the `AuthProvider`. Then deploy this app instance to use Arcana Mainnet. 
      
      Similarly, use the 'Testnet' configuration profile **{{config.extra.arcana.app_address}}** in another copy (branch / different version of the code) of your app where Auth SDK is integrated and instantiate the `AuthProvider`. Then deploy this app instance to run it using the Arcana Testnet.

??? an-faq "How do I delete Mainnet configuration settings and run my application using Arcana Testnet only?"

      Once you have enabled 'Mainnet' for an application, you cannot delete the 'Mainnet' configuration profile independently in the current release.  You can [switch your application from 'Mainnet' to 'Testnet']({{page.meta.arcana.root_rel_path}}/db/config_dApp_with_db.md#switch-profiles) by using the dropdown button in the application configuration screen to edit or modify it. 

      The only way to delete Mainnet settings is to deregister the app and delete the app entry altogether.  This removes both Testnet and Mainnet configuration profiles. You will need to re-register the application.  This will create a totally new **{{config.extra.arcana.app_address}}** and you will be required to specify this new {{config.extra.arcana.app_address}} when integrating your application with the Auth SDK.  As a result, when you deploy your app and the users log in, they will see brand-new wallet addresses. 
      
      If you wish to ensure that the user wallet address does not change, you must register your application and request for the ['Shared Key Space']({{page.meta.arcana.root_rel_path}}/concepts/sharedkeys.md) option at the very start. In that case, users will be allowed to use the same wallet address across all applications in the Arcana ecosystem and even if an application is de-registered and re-registered.

## Branding Settings

??? an-faq "Why do I see an error when uploading the logo file?"

      Make sure the file is less than the {% include "./text-snippets/limit_branding_img_size.md" %} limit for a successful upload.

??? an-faq "How do I change the logo file that I uploaded earlier?"

      Click on the 'x' icon next to the uploaded logo file. You will see a notification about the successful deletion of the file. Click on the upload icon and upload a new logo file.

## Social Auth Settings

---

??? an-faq "Is it mandatory to specify all configurations in the Auth section?"

      If you do not specify any social authentication configurations in your 'Testnet' or 'Mainnet' configuration profile settings in the Arcana Developer dashboard, then your app can only onboard users via the passwordless option that is enabled by default. You can use the plug-and-play UI via the `connect` method or build your own auth UI and use the `loginWithLink` method to onboard users via the passwordless login option.
      
      To enable any social providers for app onboarding you must configure them using the dashboard. See the [how to configure social providers]({{page.meta.arcana.root_rel_path}}/howto/config_social/index.md) guide for more details.

??? an-faq "Can an application enable more than one authentication mechanism?"  

      Yes. The application developer can enable one or more social authentication mechanisms and passwordless login. The application users can choose any one of the supported authentication mechanisms to log in easily similar to Web2 app onboarding.

??? an-faq "Is there a way to control when, which position in the application window, and what type of Arcana wallet is displayed by the Auth SDK?"

      When integrating with the Arcana Auth SDK, the application developer can use the `alwaysVisible` setting to control whether the Arcana wallet UI is automatically displayed once the user has authenticated (default) or whether it shows up only when a blockchain transaction is triggered that requires the user's approval.

      If `alwaysVisible = false` during `AuthProvider` instantiation and Auth SDK integration with the app, the wallet will **only** appear when a blockchain transaction is triggered. The wallet screen will pop up, requesting the user's approval or signature. Once the user takes the appropriate action, the wallet screen will disappear.

      For more details, see [Arcana wallet visibility modes]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/walletuimodes.md)

## Wallet Settings

---

??? an-faq "Why do I need to specify Wallet Website Domain setting?"

      This is an optional setting for additional security. If specified, the Arcana Network Auth subsystem uses this setting to restrict the Arcana wallet from loading anywhere else other than the application website domain that a developer specifies. for restricted domains, the [frame-ancestor Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/web/http/headers/content-security-policy#frame-ancestors) is used.
