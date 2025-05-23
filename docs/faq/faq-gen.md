---
alias: faq-gen 
title: 'General'
description: 'Frequently asked questions about getting started with the Auth SDK, which application frameworks are supported, how can user onboarding be customized and more.'
arcana:
  root_rel_path: ..
toc_depth: 2
---

??? an-faq "Can any Web3 app user access the in-app {{config.extra.arcana.wallet_name}}?"

      No. The in-app {{config.extra.arcana.wallet_name}} is accessible by the authenticated users only if the app is integrated with the {{config.extra.arcana.sdk_name}}. Web3 users cannot download and install the in-app wallet like other standalone, browser-based third-party wallets. 

## Integrating Web3 Apps

---

??? an-faq "How can I enable the [[concept-social-login|social login]] in a Web3 app?"

      Web3 developers can simply download and integrate dApps with the {{config.extra.arcana.sdk_name}}. 
      
      Login to the {{config.extra.arcana.dashboard_name}} to configure {{config.extra.arcana.sdk_name}} usage settings before actually integrating the application.
      
??? an-faq "How can I access in-app {{config.extra.arcana.wallet_name}} in the context of a Web3 applications?"

      App users can access the in-app {{config.extra.arcana.wallet_name}} in the context of a Web3 application only if the app developer has integrated it with the {{config.extra.arcana.sdk_name}}.

      Web3 app developers can enable the in-app {{config.extra.arcana.wallet_name}} by:

      1. [[register-app-auth|Registering the app]] and [[index-configure-auth|configuring the app settings]] using the {{config.extra.arcana.dashboard_name}}. 
      2. Download and install the [{{config.extra.arcana.sdk_name}}]({{config.extra.arcana.auth_sdk_download_url}}) and then use the unique {{config.extra.arcana.app_address}} assigned to the registered app in the dashboard to [[integrate-vanilla-app|integrate the app]] with the {{config.extra.arcana.sdk_name}}. 
      3. Add code in the app to use the {{config.extra.arcana.sdk_name}} functions and [[use-plug-play-auth|onboard users]]. 
      
      The authenticated users can instantly access the {{config.extra.arcana.wallet_name}} in the app context and sign blockchain transactions. Developers can control the user experience for signing blockchain transactions with the appropriate [[concept-wallet-visibility|wallet visibility]] specification. 
      
      The in-app wallet can be displayed for the authenticated users in the app context always or the app can be configured to display blockchain transaction request notifications for approval by the user only when a transaction is triggered. Developers can display the wallet as per the application logic using the `showWallet()` function.

??? an-faq "How can developers access the standard EIP-1193 provider from the `AuthProvider` object once the {{config.extra.arcana.sdk_name}} is integrated with the Web3 app?"

      In the case of EVM chains, developers can access the EIP-1193 provider once an `AuthProvider` object is created and the `init` function is successful. See code snippets below for details:

      ```js
      // ethers
      const provider = new ethers.providers.Web3Provider(auth.provider)
      // web3js
      const provider = new Web3(auth.provider)
      ```

## Application Frameworks

---

??? an-faq "Does the {{config.extra.arcana.sdk_name}} support Web3 application frameworks such as React, Next.js, Vue?"

      Yes. You can integrate the {{config.extra.arcana.sdk_name}} with any vanilla HTML/CSS/JS app or an app that uses React, Next.js, and Vue frameworks. [[integrate-vanilla-app|Learn more...]]

## Wallet Connectors

---

??? an-faq "If an application uses wallet connector frameworks such as Wagmi, RainbowKit, WalletConnect or Web3-React, can the in-app {{config.extra.arcana.wallet_name}} be plugged into those wallet connectors?"

     Yes. 
     
     * Applications using Wagmi, RainbowKit or WalletConnect must install and integrate with the `{{config.extra.arcana.auth_sdk_pkg_name}}`, `{{config.extra.arcana.wagmi_sdk_pkg_name}}` packages. 
     * Applications using Web3-React framework can install and integrate with the `{{config.extra.arcana.auth_sdk_pkg_name}}`, `{{config.extra.arcana.web3_react_sdk_pkg_name}}` packages.

     As part of the integration, these applications can enable the {{config.extra.arcana.wallet_name}} as one of the wallet choices for the app users in addition to the built-in wallets available in the wallet connect frameworks.
     
     For step-by-step integration instructions for these wallet connector frameworks, see how to [[integrate-wagmi-app|integrate Wagmi apps]], how to [[integrate-rainbow-app| integrate RainbowKit apps]], how to [[integrate-walletconnect-app|integrate WalletConnect apps]], and [[integrate-web3-react-app| how to integrate Web3-React apps]].

## User Onboarding

---

??? an-faq "How do I enable the Web2-like social login experience in a Web3 app to onboard users?"

      1. Register the app with the Arcana Network. 
      
      2. Configure one or more authentication providers for onboarding app users by configuring the **Social Auth** settings using the {{config.extra.arcana.dashboard_name}}. 
      
      3. Integrate the app with the {{config.extra.arcana.sdk_name}} and add code to onboard users. For example, see [[google-social-auth|how to onboard users via Google]].

??? an-faq "Is there a passwordless login option to onboard the users?"

      The passwordless login option to onboard app users is enabled once the app registers through the {{config.extra.arcana.dashboard_name}} and then integrates with the {{config.extra.arcana.sdk_name}}. 
      
      Initialize the {{config.extra.arcana.sdk_name}} and use the `connect` method to bring up the built-in, [[use-plug-play-auth|plug-and-play login UI]] that allows passwordless login. Alternatively, add custom login UI and call the {{config.extra.arcana.sdk_name}} methods for passwordless login. See [[build-password-less-auth|how to enable passwordless login]] for details.

## Deployment

---

??? an-faq "Does each registered app have a single unique {{config.extra.arcana.app_address}}?"

      No. 
      
      Each app registered with the {{config.extra.arcana.company_name}} using the {{config.extra.arcana.dashboard_name}} is assigned not one but two unique {{config.extra.arcana.app_address}}. 
      
      One for the Testnet configuration profile and a different {{config.extra.arcana.app_address}} for the Mainnet configuration profile.

??? an-faq "What is the difference between Testnet and Mainnet?"

      Arcana Testnet and Mainnet are two **different** blockchain networks. The features offered by the {{config.extra.arcana.sdk_name}} available on Testnet may be different from the ones available on the Mainnet.  

      Following are the key differences between Arcana Testnet and Mainnet:

      * **{{config.extra.arcana.app_address}}**: To deploy the app on Testnet, the developer must specify the {{config.extra.arcana.app_address}} assigned to the Testnet configuration profile after app registration, when creating the `AuthProvider`. Similarly, for Mainnet deployment, the {{config.extra.arcana.app_address}} assigned to the Mainnet configuration profile should be used.

      * **Key/Wallet Address**: The authenticated user is assigned a unique key/wallet address for Testnet app deployment. The same user is assigned a different key/wallet address when this app is deployed on the Mainnet.

      <!---
      * **Global Keys**: The 'Global Keys' feature is available only when the app is deployed on the Arcana Mainnet.
      --->

      * **Billing**: App usage is tracked for both the Arcana Testnet as well as the Mainnet.  However, only Mainnet usage is billed.

??? an-faq "What is the difference in the in-app {{config.extra.arcana.wallet_name}} behavior when an app is deployed on Testnet vs. the Mainnet?"

      If a user logs into the app that is integrated with the {{config.extra.arcana.sdk_name}} and deployed on the Arcana Testnet, they will see a warning on the main 'Token Assets' tab of the built-in {{config.extra.arcana.wallet_name}} UI. The warning indicates that the app is deployed on the Testnet.

      There is no such warning displayed in the {{config.extra.arcana.wallet_name}} UI when the app is deployed on the Mainnet.
 
      <!---
      Also, the 'Global Keys' feature is available only for the apps deployed on the Arcana Mainnet.  What this means is that for all the apps that are integrated with the {{config.extra.arcana.sdk_name}} and have selected the 'Global Keys' feature, the authenticated user will see the same key/wallet address across all such apps when logging in using the same social login or passwordless option.
      -->

??? an-faq "How does a developer migrate an app deployed on the Arcana Testnet to Mainnet?"

      See [[migrate-app-testnet-mainnet| how to migrate an app deployed on Testnet to Mainnet]] for details.

??? an-faq "Are there any configuration changes that must be done when migrating an app deployed on Testnet to the Mainnet?"

      Yes. Following are the configuration changes required for migrating app deployment from the Testnet to the Mainnet:
      
      **1. Create a Mainnet Configuration Profile**: To deploy the app on Mainnet, developers need to first create a Mainnet configuration profile by either copying the Testnet profile or creating a fresh one from scratch. 
            
      **2. Redirect URI**: After creating the 'Mainnet' profile, developers **must** also update the social login provider 'Redirect URI' settings via the respective provider developer consoles or dashboards. 

      Copy the 'Redirect URI' displayed for the 'Mainnet' profile and update this value in the social login provider's developer console. For e.g., for Google, update the Redirect URI in the Google Developer Console. [[config-auth-google|Learn more...]]

      **3. Update {{config.extra.arcana.app_address}}**: The {{config.extra.arcana.app_address}} specified as the input parameter while integrating the app with the {{config.extra.arcana.sdk_name}} is the one assigned to the default Arcana Testnet profile. This works fine when the app is deployed on the Testnet. For deploying the app on the Mainnet, the developer must create the Mainnet configuration profile and carefully copy the newly assigned Mainnet {{config.extra.arcana.app_address}}. Use the Mainnet {{config.extra.arcana.app_address}} as the input parameter while integrating the app with the {{config.extra.arcana.sdk_name}}. This will ensure that the app gets deployed on the Mainnet and not on the Testnet. For details, see [[migrate-app-testnet-mainnet|how to migrate an app deployed on the Testnet to the Mainnet.]]

      <!---
      **Global Keys**: (Optional) The Mainnet configuration profile has additional settings to allow the developers to choose the 'Global Keys' feature. This setting is not available when an app is deployed on the Testnet. When the developer creates the Mainnet configuration profile, either by copying the Testnet profile or creating a fresh one, they are presented with an option to either continue to use the 'app-specific' keys which are the default setting in the Testnet profile.  Or they can choose to enable the 'Global Keys'. Enabling this feature may take some time as it requires a manual, online request/approval process. The developer must submit the 'enable global keys' form when prompted and wait for approval from the {{config.extra.arcana.company_name}}. The status of the request is displayed in the {{config.extra.arcana.dashboard_name}} 'Keyspace' tab. Once the request is approved, the app can be deployed on the Mainnet and use the 'Global Keys' feature. To learn more about the 'Global Keys' feature,[[concept-keyspace-type| see here]].
      --->