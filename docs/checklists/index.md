---
alias: integration-checklist
title: 'Integration Checklist'
description: 'App integration checklist: Social login, Gasless Transactions.'
arcana:
  root_rel_path: .
---

# Integration Checklist

Quickly integrate the {{config.extra.arcana.company_name}} SDKs to enable [[concept-social-login|social login]] and [[concept-gasless-transactions|gasless transactions]] in your Web3 apps. Use these checklists, organized by your app’s specific use case:

* [Chain Type](#chain-type): EVM or non-EVM
* [App Type](#app-type): Web, Wallet connector, Mobile, Gaming
* [Gasless](#gasless): {{config.extra.arcana.wallet_name}} or Third-party Wallets

## Chain Type

=== "EVM"

    Use this checklist for Web3 apps supported [[web3-stack-chains|EVM]] chains.

    - [ ] 1. [[dashboard-user-guide#register-application|Register Web3 app]], get {{config.extra.arcana.company_name}} {{config.extra.arcana.app_address}}. 

    - [ ] 2. Use the pre-configured chain list and [[configure-wallet-chains#evm-chains|select active chains]] displayed in the {{config.extra.arcana.wallet_name}}, set a chain as the default.

    - [ ] 3. [[index-config-social-providers|Configure Social Login providers]] through the dashboard (optional).

    - [ ] 4. [[configure-gasless|Configure Gasless]] Transactions (optional).

    - [ ] 5. [[sdk-installation|Install required SDKs]]. Depending upon the app type and usage, you may have to install one or more SDKs. 

    - [ ] 6. Integrate the app by following app-specific integration instructions: 
        * [[integrate-wagmi-app|Wagmi]] 
        * [[integrate-rainbow-app|RainbowKit]]
        * [[integrate-walletconnect-app|Walletconnect]]
        * [[integrate-web3-react-app|Web3-react]]
        * [[integrate-react-nextjs-app|React/Next]]
        * [[integrate-vanilla-app|Vanilla HTML/CSS/JS]]
        * [[integrate-vue-app|Vue]]
        * [[integrate-gasless-app|Gasless]]

    - [ ] 7. Onboard users as per the app type and onboarding options: 
        * [[onboard-wagmi-app-pnp-ui|Wagmi]]
        * [[onboard-rainbow-app-pnp-ui|RainbowKit]]
        * [[onboard-walletconnect-app-pnp-ui|Walletconnect]]
        * [[onboard-web3-react-app-pnp-ui|Web3-react]]
        * [[react-nextjs-use-plug-play-auth|React/Next]]
        * [[use-plug-play-auth|Vanilla HTML/CSS/JS]]
        * [[vue-use-plug-play-auth|Vue]]
        *[[gasless-user-onboarding|Gasless]]

    - [ ] 8. Add code to issue supported [[evm-web3-wallet-ops|Web3 wallet operations, JSON/RPC functions]] in the authenticated user's context.

=== "Non-EVM"

    Use this checklist for Web3 apps supported [[web3-stack-chains|non-EVM chains]].

    - [ ] 1. Register the app and configure non-EVM Chain settings as per the chain type:
        * [[solana-dashboard-user-guide|Solana]]
        * [[mvx-dashboard-user-guide|MultiversX]]
        * [[near-dashboard-user-guide|Near]]

    - [ ] 2. [[index-config-social-providers|Configure Social Login providers]] through the dashboard (optional).

    - [ ] 3. [[configure-gasless|Configure Gasless]] Transactions (optional).

    - [ ] 4. [[sdk-installation|Install required SDKs]]. Depending upon the app type and usage, you may have to install one or more SDKs. 

    - [ ] 5. Integrate the app by following app-specific integration instructions: 
        * [[integrate-wagmi-app|Wagmi]] 
        * [[integrate-rainbow-app|RainbowKit]]
        * [[integrate-walletconnect-app|Walletconnect]]
        * [[integrate-web3-react-app|Web3-react]]
        * [[integrate-react-nextjs-app|React/Next]]
        * [[integrate-vanilla-app|Vanilla HTML/CSS/JS]]
        * [[integrate-vue-app|Vue]]
        * [[integrate-gasless-app|Gasless]]

    - [ ] 6. Onboard users as per the app type and onboarding options: 
        * [[onboard-wagmi-app-pnp-ui|Wagmi]]
        * [[onboard-rainbow-app-pnp-ui|RainbowKit]]
        * [[onboard-walletconnect-app-pnp-ui|Walletconnect]]
        * [[onboard-web3-react-app-pnp-ui|Web3-react]]
        * [[react-nextjs-use-plug-play-auth|React/Next]]
        * [[use-plug-play-auth|Vanilla HTML/CSS/JS]]
        * [[vue-use-plug-play-auth|Vue]]
        * [[gasless-user-onboarding|Gasless]]

    - [ ] 7. Add code to issue supported Web3 wallet operations, and JSON/RPC functions in the authenticated user's context. Note that these supported functions may vary across chains:
        * [[solana-web3-wallet-ops|Solana]]
        * [[mvx-web3-wallet-ops|MultiversX]]
        * [[near-web3-wallet-ops|Near]]

## App Type

=== "Web"

    Use this checklist for vanilla HTML/CSS/JS apps, React/NextJS, and Vue Web3 apps.

    - [ ] 1. [[dashboard-user-guide#register-application|Register Web3 app]], choose EVM/non-EVM chain type as required during app registration and configure the active and default chains via the dashboard. Get {{config.extra.arcana.company_name}} {{config.extra.arcana.app_address}}. 

    - [ ] 2. [[index-config-social-providers|Configure Social Login providers]] through the dashboard (optional).

    - [ ] 3. [[configure-gasless|Configure Gasless]] Transactions (optional).

    - [ ] 4. [[sdk-installation|Install {{config.extra.arcana.sdk_name}}]]. For React/NextJS apps, also install the {{config.extra.arcana.react_sdk_name}}. 

    - [ ] 5. Integrate the app by following app-specific integration instructions: 
        * [[integrate-vanilla-app|Vanilla HTML/CSS/JS]]
        * [[integrate-vue-app|Vue]]
        * [[integrate-react-nextjs-app|React/Next]]

    - [ ] 6. Onboard users as per the app type and onboarding options: 
        * [[use-plug-play-auth|Vanilla HTML/CSS/JS]]
        * [[vue-use-plug-play-auth|Vue]]
        * [[react-nextjs-use-plug-play-auth|React/Next]]

    - [ ] 7. Add code to issue supported Web3 wallet operations, and JSON/RPC functions in the authenticated user's context. Note that the supported Web3 wallet operations may vary depending upon the chain type, [[evm-web3-wallet-ops|EVM]] or non-EVM.

=== "Wallet Connectors"

    Use this checklist for Web3 apps using wallet connectors such as Wagmi, RainbowKit, WalletConnect and Web3-React.

    - [ ] 1. [[dashboard-user-guide#register-application|Register Web3 app]], choose EVM/non-EVM chain type as required and configure the active and default chains via the dashboard. Get {{config.extra.arcana.company_name}} {{config.extra.arcana.app_address}}. 

    - [ ] 2. [[index-config-social-providers|Configure Social Login providers]] through the dashboard (optional).

    - [ ] 3. [[configure-gasless|Configure Gasless]] Transactions (optional).

    - [ ] 4. [[sdk-installation|Install {{config.extra.arcana.sdk_name}} and {{config.extra.arcana.wagmi_sdk_name}}]].

    - [ ] 5. Integrate the app by following app-specific integration instructions: 
        * [[integrate-wagmi-app|Wagmi]] 
        * [[integrate-rainbow-app|RainbowKit]]
        * [[integrate-walletconnect-app|Walletconnect]]
        * [[integrate-web3-react-app|Web3-react]]

    - [ ] 6. Onboard users as per the app type and onboarding options: 
        * [[onboard-wagmi-app-pnp-ui|Wagmi]]
        * [[onboard-rainbow-app-pnp-ui|RainbowKit]]
        * [[onboard-walletconnect-app-pnp-ui|Walletconnect]]
        * [[onboard-web3-react-app-pnp-ui|Web3-react]]

    - [ ] 7. Add code to issue supported [[evm-web3-wallet-ops|Web3 wallet operations, JSON/RPC functions]] in the authenticated user's context.

=== "Mobile"

    Use this checklist for Web3 mobile apps built using Flutter or React-Native frameworks.

    - [ ] 1. [[dashboard-user-guide#register-application|Register Web3 app]], choose EVM/non-EVM chain type as required during app registration and configure the active and default chains via the dashboard. Get {{config.extra.arcana.company_name}} {{config.extra.arcana.app_address}}. 

    - [ ] 2. [[index-config-social-providers|Configure Social Login providers]] through the dashboard (optional).

    - [ ] 3. [[configure-gasless|Configure Gasless]] Transactions (optional).

    - [ ] 4. [[sdk-installation|Install {{config.extra.arcana.flutter_sdk_name}} or {{config.extra.arcana.react_native_sdk_name}}]] depending upon the app type.

    - [ ] 5. Integrate the app and onboard users by following app-specific integration instructions: 
        * [[flutter-get-started|Flutter]]
        * [[react-native-get-started|React-Native]]

    - [ ] 6. Add code to issue supported Web3 wallet operations, and JSON/RPC functions in the authenticated user's context. Note that the supported Web3 wallet operations may vary depending upon the chain type, [[evm-web3-wallet-ops|EVM]] or non-EVM.

=== "Gaming"

    Use this checklist for Web3 Unity apps.

    - [ ] 1. [[unity-dashboard-user-guide|Set up Unity packages]] before using {{config.extra.arcana.company_name}} SDKs.

    - [ ] 2. [[dashboard-user-guide#register-application|Register Web3 app]], choose EVM/non-EVM chain type as required and configure the active and default chains via the dashboard. Get {{config.extra.arcana.company_name}} {{config.extra.arcana.app_address}}. 

    - [ ] 3. [[index-config-social-providers|Configure Social Login providers]] through the dashboard (optional).

    - [ ] 4. [[configure-gasless|Configure Gasless]] Transactions (optional).

    - [ ] 5. [[sdk-installation|Install {{config.extra.arcana.gaming_sdk_name}}]].

    - [ ] 6. [[integrate-unity-app|Integrate the Unity app]] with the SDK.

    - [ ] 7. [[unity-user-onboarding|Onboard users via a single line of code]] using the [[plug-and-play login UI]].

    - [ ] 8. Add code to issue supported Web3 wallet operations, JSON/RPC functions via the {{config.extra.arcana.wallet_name}} in the authenticated user's context. Note that the supported Web3 wallet operations may vary depending upon the chain type, [[evm-web3-wallet-ops|EVM]] or non-EVM.

## Gasless

=== "{{config.extra.arcana.company_name}} Wallet"

    Use this checklist to enable gasless transactions through the {{config.extra.arcana.wallet_name}} by using the built-in gasless feature in the {{config.extra.arcana.sdk_name}}.

    !!! an-warning "Wallet Operations"

          Note that the supported Web3 wallet operations may vary depending upon the chain type, [[evm-web3-wallet-ops|EVM]] or non-EVM. 

    !!! an-caution "Issuing Gasless Transactions"

          There is no special function to issue gasless operations through the {{config.extra.arcana.wallet_name}}. All app operations that were configured to be gasless by whitelisting them in the dashboard configuration settings will automatically happen in a gasless manner.

    - [ ] 1. [[dashboard-user-guide#register-application|Register Web3 app]], choose EVM/non-EVM chain types as required during app registration and configure the active and default chains via the dashboard. Get {{config.extra.arcana.company_name}} {{config.extra.arcana.app_address}}. Note that [[web3-stack-chains|only a subset of chains support gasless transactions]].

    - [ ] 2. [[index-config-social-providers|Configure Social Login providers]] through the dashboard (optional).

    - [ ] 3. [[configure-gasless|Configure Gasless]] Transactions through the dashboard by setting up the gas tanks, depositing funds in the tanks, and whitelisting app operations to make them gasless for the users.

    - [ ] 4. [[sdk-installation|Install {{config.extra.arcana.sdk_name}}]]. For React/NextJS apps, also install the {{config.extra.arcana.react_sdk_name}}. 

    - [ ] 5. [[integrate-gasless-app|Integrate the app]] by following app-specific integration instructions.

    - [ ] 6. [[gasless-user-onboarding|Onboard users]] as per the app type and the choice of onboarding option - built-in, plug-and-play login option or custom login UI option.

    - [ ] 7. Add code to issue supported Web3 wallet operations, and JSON/RPC functions in the authenticated user's context. 

=== "3<sup>rd</sup> party Wallet"

    Use this checklist to enable gasless transactions in third-party, browser-based wallets, by using the {{config.extra.arcana.gasless_sdk_name}} in Web3 apps.

    - [ ] 1. [[dashboard-user-guide#register-application|Register Web3 app]], choose EVM/non-EVM chain types as required during app registration and configure the active and default chains via the dashboard. Get {{config.extra.arcana.company_name}} {{config.extra.arcana.app_address}}. Note that [[web3-stack-chains|only a subset of chains support gasless transactions]].

    - [ ] 2. [[configure-gasless|Configure Gasless]] Transactions through the dashboard by setting up the gas tanks, depositing funds in the tanks, and whitelisting app operations to make them gasless for the users.

    - [ ] 3. [[web-gasless-install|Install {{config.extra.arcana.gasless_sdk_name}}]]. 

    - [ ] 4. [[web-gasless-integrate|Integrate the app]] by following app-specific integration instructions.

    - [ ] 5. [[web-gasless-transact|Add code to issue gasless transactions]] via the `doTx()` method. Optionally set up [[web-gasless-session|session keys]] to allow users to pre-approve the transactions issued through the smart contract wallet account by setting the time and transaction value limits.

??? an-note "Global Keys"

      *Global keys* automatically enable all supported social login providers for an app. No dashboard configuration is needed. When using *global keys* with a *custom login UI*, app developers can choose which providers to allow for user login. However, with the default plug-and-play login UI and global keys, disabling default social login providers is not possible.