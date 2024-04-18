---
alias: concept-keyspace-type
title: 'Keyspace Types: App-Specific vs. Global Keys'
description: 'During app registration, developers have the option to choose the keyspace type based on the application requirements. However, changing the keyspace later may result in a change in user keys.'
arcana:
  root_rel_path: ..
---

# App-Specific vs. Global Keys

In Web2 applications, users often employ the same password for multiple applications. Similarly, in Web3 applications integrated with the {{config.extra.arcana.sdk_name}}, developers may choose to enable users to use a single wallet address across all integrated applications by configuring the **global keys** option instead of using the default 'app-specific' keys.

Global keys offer a streamlined user experience akin to Web2 applications by providing the same user keys/wallet address across Web3 apps. However, global keys also introduce a security risk, especially if there are financial implications in the app. If a malicious actor breaches one such app and gains access to a user's global keys, they could potentially access the user's digital assets across all other applications using global keys.

Based on the app-specific requirements for privacy, security, and ease of use, developers can change the default keyspace setting from app-specific to the global keys using the {{config.extra.arcana.dashboard_name}}. 

|**App-specific Keys**|**Global Keys**|
|:--- | :--- |
| Default.| Requires approval before this option can be enabled.|
| User sees a unique, different key/wallet address when they log into any app that is integrated with the {{config.extra.arcana.sdk_name}}.| User sees the same key/wallet address irrespective of which app they log in as long as they use the same onboarding mechanism and the app is integrated with the {{config.extra.arcana.sdk_name}}.|
| No known security vulnerability.| Potential vulnerability may arise in case a user's account is compromised in one app. It exposes all other apps linked to the same user due to the shared key/wallet address across applications.|

## Enabling Global Keys

By default, all apps are registered to use app-specific keys. Developers can change that by using the {{config.extra.arcana.dashboard_name}} and selecting global keys. To opt for global keys, developers must request activation via an online form and provide the required information. The global keys feature activation for an app may take a few hours for screening and verification. During the verification process, developers can continue using the 'app-specific' keys option.

## Global Keys: Wallet User Experience

When the global keys option is set for an application using the {{config.extra.arcana.sdk_name}}, it alters the user experience when interacting with the {{config.extra.arcana.wallet_name}}.

* If the app was earlier using app-specific keys, app users would have accessed the wallet address already. Once the developer switches to global keys, users will see a different wallet address for the same app.

* The blockchain transaction signing experience will change for the user. Earlier, using the default app-specific key setup, initiating a personal sign message request prompts the {{config.extra.arcana.wallet_name}} to display a pop-up within the same app context where the user needs to take action. After switching to global keys, the same personal sign message will appear in a new browser tab. Users can take necessary actions in this tab and subsequently close it.

<figure markdown="span"><img src="{{config.extra.arcana.img_dir}}/an_wallet_no_clickjacking.gif" alt="Wallet behavior (No clickjacking fix)" class="an-screenshots-noeffects width_50pc"/><figcaption>Wallet behavior (No clickjacking fix)</figcaption>

</figure><figure markdown="span"><img src="{{config.extra.arcana.img_dir}}/an_wallet_clickjacking.gif" alt="Wallet behavior (With clickjacking fix)" class="an-screenshots-noeffects width_50pc" /><figcaption>Wallet behavior (With clickjacking fix)</figcaption></figure>

## Global Keys Limitations

Global keys have some usage limitations:

### Custom Wallet UI

Global keys are **not supported** for apps using custom wallet UI.

Apps using the custom wallet UI are restricted to app-specific keys, resulting in users encountering different wallet addresses across apps. This applies even when the same authentication provider is used for logging into various apps integrated with {{config.extra.arcana.sdk_name}}.

The reason for this restriction is to reduce a potential [[concept-keyspace-type#security|security vulnerability]]. 

### Switching Keyspace

Initially, apps are set up to use app-specific keys by default. Developers have the option to later adjust the keyspace and transition to using global keys in the registered app. Switching the keyspace will lead to a modification in the app user's wallet address.

### Security

While {{config.extra.arcana.company_name}} rigorously follows a validation process to enable global keys for apps, the adoption of 'global keys' may introduce a potential security vulnerability in apps that switch keyspace to global keys. 

This vulnerability is a trade-off for the convenience provided by global keys. 

Global keys allow users to have a consistent wallet address across all apps integrated with the {{config.extra.arcana.sdk_name}}, providing seamless utilization of digital assets. However, in the event of one app turning malicious, the user's key is no longer confined to that app, allowing unauthorized access to the user's information across all apps using 'global keys'.
