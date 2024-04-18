---
alias: faq-db
title: 'FAQ: Arcana Developer Dashboard'
description: 'Frequently asked questions about using the Arcana Dashboard to register their apps, get a unique clientId, configure the app auth providers etc.'
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

      <figure markdown="span">
        ![Delete App Entry]({{config.extra.arcana.img_dir}}/an_db_delete_app_anim.gif){ .an-screenshots .width_85pc }
        <figcaption>De-register & Delete App</figcaption>
      </figure>

??? an-faq "How do I migrate an application from using {{config.extra.arcana.company_name}} Testnet to Mainnet?"

      To migrate an application from using the {{config.extra.arcana.company_name}} Testnet to Mainnet, follow these steps:

      1. Use the {{config.extra.arcana.dashboard_name}}, visit the 'Manage App' page, and select the application entry. By default, when you register any application, a 'Testnet' configuration profile is created for the application. Click on the app card to see the application configuration screen.

      2. On the application configuration screen, switch the network from 'Testnet' to 'Mainnet' on the top right to create a 'Mainnet' configuration profile. You will be asked to approve the creation of the 'Mainnet' configuration profile. To begin with, you can use a copy of the 'Testnet' profile to generate the 'Mainnet' profile. Later, you can edit and manage it independently. Note that a new **{{config.extra.arcana.app_address}}** is assigned to the 'Mainnet' profile.

      3. Use the 'Mainnet' profile **{{config.extra.arcana.app_address}}** and update it in the app integration code instead of the earlier value which corresponds to 'Testnet'. You will need to restart your application after this change. This is important to ensure that the app uses the 'Mainnet' configuration settings.

    !!! an-caution

          To migrate an app from using Testnet to Mainnet, the developers must ensure that the new **{{config.extra.arcana.app_address}}** corresponding to the application's 'Mainnet' profile is used to initialize the `AuthProvider` while integrating the app with the {{config.extra.arcana.sdk_name}}. After that, the app must be restarted to switch over from using {{config.extra.arcana.company_name}} Testnet to the Mainnet. 

??? an-faq "Can a developer run one instance of the app, say dev version on Testnet while publishing the release instance to use the {{config.extra.arcana.company_name}} Mainnet?"

      Yes, developers can run two instances of the app simultaneously, one on the {{config.extra.arcana.company_name}} Testnet and the other on the Mainnet as each app instance is assigned a unique **{{config.extra.arcana.app_address}}**. 
      
      Use the 'Mainnet' configuration profile **{{config.extra.arcana.app_address}}** in your app's integration code and instantiate the `AuthProvider`. Then deploy this app instance to use {{config.extra.arcana.company_name}} Mainnet. 
      
      Similarly, use the 'Testnet' configuration profile **{{config.extra.arcana.app_address}}** in another copy (branch / different version of the code) of your app where {{config.extra.arcana.sdk_name}} is integrated and instantiate the `AuthProvider`. Then deploy this app instance to run it using the {{config.extra.arcana.company_name}} Testnet.

??? an-faq "How do I delete Mainnet configuration settings and run my application using {{config.extra.arcana.company_name}} Testnet only?"

      Once you have enabled 'Mainnet' for an application, you cannot delete the 'Mainnet' configuration profile independently in the current release.  You can [[dashboard-user-guide#switch-profiles|switch your application from 'Mainnet' to 'Testnet']] by using the dropdown button in the application configuration screen to edit or modify it. 

      The only way to delete Mainnet settings is to deregister the app and delete the app entry altogether.  This removes both Testnet and Mainnet configuration profiles. You will need to re-register the application.  This will create a new **{{config.extra.arcana.app_address}}** and you will be required to specify this new {{config.extra.arcana.app_address}} when integrating your application with the {{config.extra.arcana.sdk_name}}.  As a result, when you deploy your app and the users log in, they will see brand-new wallet addresses. 
      
      If you wish to ensure that the user wallet address does not change, you must register your application and request for the [[concept-keyspace-type|Shared Key Space]] option at the very start. In that case, users will be allowed to use the same wallet address across all applications in the {{config.extra.arcana.company_name}} ecosystem and even if an application is de-registered and re-registered.

## Branding Settings

??? an-faq "Why do I see an error when uploading the logo file?"

      Make sure the file is less than the {% include "./text-snippets/limit_branding_img_size.md" %} limit for a successful upload.

??? an-faq "How do I change the logo file that I uploaded earlier?"

      Click on the 'x' icon next to the uploaded logo file. You will see a notification about the successful deletion of the file. Click on the upload icon and upload a new logo file.

## Social Auth Settings

---

??? an-faq "Is it mandatory to specify all configurations in the {{config.extra.arcana.dashboard_name}} *Configure* section?"

      No.

      If no authentication provider is configured via the {{config.extra.arcana.dashboard_name}}, the app users can log in through the default passwordless option that requires no configuration. Developers can use the `connect` method to bring up plug-and-play login UI or build a custom login UI. When using the custom login UI, call the `loginWithLink` method (deprecated), `loginWithOTPStart` and `loginWithOTPComplete` methods to onboard users. 
      
      Besides the default passwordless login option, developers can choose to enable one or more authentication providers as the onboarding options for users. That requires configuring authentication providers through the {{config.extra.arcana.dashboard_name}}. For details, check out [[index-config-social-providers|how to configure authentication providers]].

??? an-faq "Can an application enable more than one authentication provider to onboard users?"  

      Yes. Developers can configure one or more authentication providers as additional onboarding options besides the default passwordless login option. Users can choose any one of the supported authentication mechanisms to onboard the app.


## Wallet Settings

---

??? an-faq "Why do I need to specify Wallet Website Domain setting?"

      This is an optional setting for additional security. If specified, the {{config.extra.arcana.product_name}} subsystem uses this setting to restrict the {{config.extra.arcana.wallet_name}} from loading anywhere else other than the application website domain that a developer specifies. for restricted domains, the [frame-ancestor Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/web/http/headers/content-security-policy#frame-ancestors) is used.

??? an-faq "Is there a way to control when, which position in the application window, and what kind of theme is used for displaying the {{config.extra.arcana.wallet_name}} in the apps' context?"

      **Wallet Display Controls**

      1. **Visibility** 
      
           The application developer can use the `alwaysVisible` parameter in the `AuthProvider` to control whether the {{config.extra.arcana.wallet_name}} UI is automatically displayed once the user has authenticated (default) or it shows up only when a blockchain transaction is triggered that requires the user's approval.

           If `AuthProvider` is instantiated with `alwaysVisible = false` then the wallet UI will not be displayed by default in the app's context. However, when a blockchain transaction is triggered by the app, a transaction notification is displayed in the app's context, requesting the user's approval for the transaction. Once the user takes the appropriate action, the transaction notification will disappear.

           For more details, see [[concept-wallet-visibility|{{config.extra.arcana.wallet_name}} visibility modes]].

      2. **Position**

           The `position` parameter in the `AuthProvider` controls whether the wallet is displayed on the left or the right side of the Web3 app UI window.

      3. **Light/Dark Theme**

           The `theme` parameter in the `AuthProvider` controls whether the wallet is displayed using the light theme or the dark theme.  Developers can set the theme via the {{config.extra.arcana.dashboard_name}} by using the 'Branding' tab on the LHS.
