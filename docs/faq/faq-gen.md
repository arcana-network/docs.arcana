---
alias: faq-gen 
title: 'General'
description: 'Frequently asked questions about getting started with the Auth SDK, which application frameworks are supported, how can user onboarding be customized and more.'
arcana:
  root_rel_path: ..
toc_depth: 2
---

# General

??? an-faq "Can any Web3 app user access the in-app {{config.extra.arcana.wallet_name}}?"

    No. 
      
    The in-app {{config.extra.arcana.wallet_name}} is accessible by the 
    authenticated users only for Web3 apps that integrate with the 
    {{config.extra.arcana.sdk_name}}. 

    Web3 users cannot download and install the in-app {{config.extra.arcana.wallet_name}},
    unlike other standalone, browser-based third-party wallets.

    !!! an-note "CA wallet"

        {{config.extra.arcana.company_name}} also offers a standalone 
        [[concept-ca|CA wallet]]. This is a limited feature wallet. It 
        is used for showcasing chain abstracted transactions in a 
        [[ca-stack-wallet|select set of supported apps]].

??? an-faq "How can a Web3 user access in-app {{config.extra.arcana.wallet_name}}?"

      Web3 developers must integrate apps with the 
      {{config.extra.arcana.sdk_name}} to enable the in-app {{config.extra.arcana.wallet_name}}.
      
      To integrate:

      * [[register-app-auth|Register the app]] and [[index-configure-auth|configure (optional)]]
      the SDK usage settings through the {{config.extra.arcana.dashboard_name}}.
      * Download and install the [{{config.extra.arcana.sdk_name}}]({{config.extra.arcana.auth_sdk_download_url}}).
      * Use the unique {{config.extra.arcana.app_address}} assigned to the
      registered app in the dashboard in the integration code. 
      * Initialize the SDK and use the {{config.extra.arcana.sdk_name}} functions
      to [[use-plug-play-auth|onboard users]]. 
      
      Developers can control the user experience for signing blockchain transactions.
      Use the appropriate [[concept-wallet-visibility|wallet visibility]] settings
      during SDK integration. You can also display/hide the wallet 
      with `showWallet()`.

## Integrating Auth SDK

??? an-faq "How can Web3 developers enable [[concept-social-login|social login]]?"

      Follow these steps:
            
      * Login to the {{config.extra.arcana.dashboard_name}} using familiar Web2 login.
      * Register the Web3 app in the dashboard.
      * Configure or use the default user onboarding SDK settings in the dashboard.
      * [Download](https://www.npmjs.com/package/@arcana/auth) and install the SDK
      * [[integrate-wagmi-app|Integrate the Web3 app]] with the SDK. Process may 
            vary depending upon the app type.

??? an-faq "How can Web3 apps access the standard EIP-1193 provider from the `AuthProvider`?"

      The Web3 app integration code must:
      
      * First create an `AuthProvider` object.
      * Initialize it with `init()` method.
      * Call `Web3Provider` if using the `ethers` library or call `provider`, if using the `web3.js` library.


      ```js
      // ethers
      const provider = new ethers.providers.Web3Provider(auth.provider)
      // web3js
      const provider = new Web3(auth.provider)
      ```

## Application Frameworks

??? an-faq "What application frameworks are supported by the {{config.extra.arcana.sdk_name}}?"

      Developers can integrate the {{config.extra.arcana.sdk_name}} with any Web3 
      app built using vanilla HTML/CSS and Javascript or any of these frameworks:

      * React 
      * Next.js
      * Vite
      * Vue
      
      [[integrate-vanilla-app|Learn more...]]

## Wallet Connectors

??? an-faq "Which wallet connector frameworks are supported for {{config.extra.arcana.wallet_name}}?"
     
     {{config.extra.arcana.wallet_name}} supports Wagmi, RainbowKit,
     WalletConnect, Web3-React wallet connect frameworks.

??? an-faq "How can developers enable {{config.extra.arcana.wallet_name}} for wallet connectors?"
     
     To enable, developers must integrate the Web3 app with the {{config.extra.arcana.sdk_name}}.
     
     Install the specific packages required for the wallet connector. Then integrate the app 
     with the SDK. 
     
     * Web3 apps using Wagmi, RainbowKit or WalletConnect must install and 
      integrate with the `{{config.extra.arcana.auth_sdk_pkg_name}}`, `{{config.extra.arcana.wagmi_sdk_pkg_name}}` packages. 
     * Apps using Web3-React must install and integrate with the 
      `{{config.extra.arcana.auth_sdk_pkg_name}}`, `{{config.extra.arcana.web3_react_sdk_pkg_name}}` packages.
     
     * How to [[integrate-wagmi-app|integrate Wagmi apps]]?
     * How to [[integrate-rainbow-app| integrate RainbowKit apps]]?
     * How to [[integrate-walletconnect-app|integrate WalletConnect apps]],
     * How to [[integrate-web3-react-app| integrate Web3-React apps]].

## User Onboarding

??? an-faq "How do I onboard users via social login in a Web3 app?"

      1. Login to the {{config.extra.arcana.dashboard_name}}.
      
      2. Register the Web3 app with {{config.extra.arcana.company_name}}. 
      
      3. Use default SDK user onboarding settings or configure authentication providers 
            in the **Social Auth** section. 
      
      4. Install and integrate the app with the {{config.extra.arcana.sdk_name}}.
      
      5. Add code to onboard users. For example, see how to onboard users via [[google-social-auth|Google]].

??? an-faq "Is there a passwordless login option to onboard the users?"

      The option to onboard users in a Web3 app via passwordless login
      works without any configuration.
      
      Developers can register the Web3 app via the {{config.extra.arcana.dashboard_name}}. 
      Then install and integrate the app with the {{config.extra.arcana.sdk_name}}. 
      
      Initialize the {{config.extra.arcana.sdk_name}}, use the `connect` method.
      This will bring up the built-in, [[use-plug-play-auth|plug-and-play login UI]].
      This default login UI allows passwordless login. 
      
      Alternatively, developers can also add custom login UI and call the
      {{config.extra.arcana.sdk_name}} methods for passwordless login. 
      
      See [[build-password-less-auth|how to enable passwordless login]] for details.

## Deployment

??? an-faq "Does each registered app have a single unique {{config.extra.arcana.app_address}}?"

      No. 

      Two unique {{config.extra.arcana.app_address}}s are assigned for every registered app.
      
      One is for the Testnet configuration profile and another for the Mainnet configuration profile.

??? an-faq "What is the difference between Testnet and Mainnet?"

      Arcana Testnet and Mainnet are two **different** blockchain networks. 
      
      The features offered by the {{config.extra.arcana.sdk_name}} available on 
      Testnet may be different from the ones available on the Mainnet.  

      Following are the key differences between Arcana Testnet and Mainnet:

      * **{{config.extra.arcana.app_address}}**: To deploy the app on Testnet, 
      the developer must specify the {{config.extra.arcana.app_address}} assigned 
      to the Testnet configuration profile after app registration, when creating 
      the `AuthProvider`. Similarly, for Mainnet deployment, the 
      {{config.extra.arcana.app_address}} assigned to the Mainnet
      configuration profile should be used.

      * **Key/Wallet Address**: The authenticated user is assigned a unique
      key/wallet address for Testnet app deployment. The same user 
      is assigned a different key/wallet address when this app is deployed
      on the Mainnet.

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