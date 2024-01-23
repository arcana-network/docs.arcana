---
alias: concept-keyspace-type
title: 'Keyspace Types: App-Specific vs. Global Keys'
description: 'During app registration, developers have the option to choose the keyspace type based on the application requirements. However, changing the keyspace later may result in a change in user keys.'
arcana:
  root_rel_path: ..
---

# App-Specific vs. Global Keys

To integrate with the {{config.extra.arcana.product_name}} product, developers can choose one of the key types option:

* App-specific keys
* Global keys

These key types enable Web3 application developers to tailor the user experience based on their specific requirements for privacy, security, and ease of use.

## User Experience

|**App-specific Keys**|**Global Keys**|
|:--- | :--- |
| Default.| Requires approval before this option can be enabled.|
| Available for both Testnet/Mainnet configuration profile and app deployments.| Available only in the Mainnet configuration and app deployment.|
| User sees a unique, different key/wallet address when they log into any app that is integrated with the {{config.extra.arcana.product_name}} product.| User sees the same key/wallet address irrespective of which app they log in as long as they use the same onboarding mechanism and the app is integrated with the {{config.extra.arcana.product_name}} product.|
| No known security vulnerability.| Potential vulnerability - if the user account in one app gets hacked, all the others are exposed as well due to the single key/wallet address that works across apps for a user.|

### Global Keys Trade-off

In Web2 applications, users commonly use the same password for multiple applications. Similarly, in Web3 applications integrated with the Arcana Auth product, developers may opt to allow users to use a single wallet address across all integrated applications.

This behavior mirrors the simplicity of Web2 applications, where users have the same password for different applications. While providing the same user keys/wallet address across Web3 apps simplifies the user experience, it also introduces a security risk. This vulnerability becomes significant if there are financial ramifications. If a malicious actor breaches one such app and gains access to a user's global keys, they could potentially access the user's digital assets across all other applications as well.

## Enabling Global Keys

To enable the same wallet address for a user across applications, developers can enable global keys via the {{config.extra.arcana.dashboard_name}} through the Mainnet configuration profile. After selecting the global keys option, developers must request activation via an online form; feature activation may take a few hours after verification.

!!! caution "Mainnet only feature"

      This feature is **only** available for applications deployed on the {{config.extra.arcana.company_name}} Mainnet.

### Submit Request

To enable the 'Global Keys' feature, developers can submit a request after registering their applications and creating the Mainnet configuration profile that has the 'global keys' option enabled. The request will undergo manual verification, which may take some time. Developers can check the verification status in the {{config.extra.arcana.dashboard_name}}. Once approved, the application will have 'Global Keys' enabled. During the verification process, developers can continue using the 'app-specific' keys option on Arcana Testnet.

Once the application is approved for global keys, it can be deployed on Mainnet, and users will notice a change in key/wallet address values when logging in with global keys.

!!! warning "Mainnet deployment before approval"

      Deploying the app on Mainnet with the 'app-specific' keys option before global keys approval results in **two** key/wallet address changes for users. The first change occurs during the transition from Testnet to Mainnet deployment using app-specific keys. The second change happens after the request is approved, thereby changing the app's keyspace type from 'app-specific' to 'global keys'.

## Global Keys: Wallet User Experience

When the global keys option is set for an application using the {{config.extra.arcana.sdk_name}}, it alters the user experience when interacting with the {{config.extra.arcana.wallet_name}}.

For instance, in the scenario of a personal sign transaction, with the default app-specific key setup, initiating a personal sign message request prompts the {{config.extra.arcana.wallet_name}} to display a pop-up within the same app context as the visible wallet. However, when configured with global keys, the personal sign message appears in a new browser tab. Users can take necessary actions in this tab and subsequently close it.

<img src="/img/an_wallet_no_clickjacking.gif" alt="Previous wallet behavior (No clickjacking fix)" class="an-screenshots-noeffects" width="50%"/><img src="/img/an_wallet_clickjacking.gif" alt="Wallet usage with clickjacking fix" class="an-screenshots-noeffects" width="50%"/>

## Global Keys Limitations

The 'Global Keys' option is exclusive to apps configured for 'Mainnet' usage. These apps are integrated with {{config.extra.arcana.company_name}} product using the 'Mainnet' {{config.extra.arcana.app_address}} and deployed on the Mainnet. Here are some limitations related to the use of global keys:

### Switching Keyspace

Initially, apps can be registered and configured to use app-specific keys (default). These apps can integrate with {{config.extra.arcana.product_name}} using the assigned {{config.extra.arcana.app_address}} for the 'Testnet' configuration profile and deploy on Testnet.

When apps are ready for Mainnet deployment, developers can create a Mainnet configuration profile and choose the global keys option. It is advisable to wait for the global keys request approval before deploying the app on Mainnet. This ensures that users will only experience a single change in keys/wallet addresses when migrating an app from the Testnet to Mainnet.

Please note that once an app deployed on Mainnet switches to the 'Global Keys' option, reverting back may have side effects. When switching back, the authenticated user's keys/wallet address will change to a different one.

### Custom Wallet UI

If a developer selects the custom wallet UI feature during app registration, the app can only have 'app-specific' keys.

This implies that users of Web3 apps configured with the custom wallet UI will have distinct wallet addresses, even if they use the same authentication provider to log in to another app integrated with the {{config.extra.arcana.product_name}} product within the {{config.extra.arcana.company_name}} ecosystem.

The reason for this restriction is to reduce a potential security vulnerability. See the security section below for details.

### Security

While {{config.extra.arcana.company_name}} follows a stringent validation process to enable global keys for apps, the usage of 'global keys' introduces a potential security vulnerability for the users of such apps.

This vulnerability is a trade-off for the convenience offered by global keys. Global keys allow users to have the same wallet address for the same onboarding provider across all apps integrated with the {{config.extra.arcana.product_name}} product. This unified wallet address allows users to seamlessly utilize digital assets across various apps. However, if one of these apps becomes malicious, the user's key is no longer confined to that particular app, granting unauthorized access to the user's information across all apps using 'global keys'.
