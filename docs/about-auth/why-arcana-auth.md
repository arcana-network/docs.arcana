---
alias: why-arcana-auth
title: 'Why Arcana Auth'
description: 'Learn about why a Web3 app developer needs a solution like Arcana Auth and what problems in Web3 it solves?'
arcana:
  root_rel_path: ..
---

# Why {{config.extra.arcana.company_name}} SDKs?

At {{config.extra.arcana.company_name}}, our mission is to build an ecosystem of components that enables developers to build Web3 applications quickly, securely, and with complete data privacy and ownership for application users.

This is totally unlike Web2, where user data is owned by the applications and corporations. Web2 users have no control over who sees or accesses their data.

{% include "./text-snippets/tut_mission_url.md" %}

## Privacy-Preserving Applications

If you are building Web3 apps that require complete data privacy, and security, the {{config.extra.arcana.company_name}} SDKs does the heavy lifting for you to onboard users using popular authentication providers and passwordless options. It allows authenticated users to sign blockchain transactions, manage tokens, and more without having to bother about the Web3 secret and key management complexities.

At {{config.extra.arcana.company_name}}, we take security, privacy, and ownership seriously. We are actively working towards tracking and plugging in any vulnerabilities in our solution.

Take a quick look at the overview of the [[auth-architecture|architecture and key components]] of the {{config.extra.arcana.product_name}} and see [{{config.extra.arcana.company_name}} Network Technical White Paper v1.0](https://www.notion.so/arcananetwork/Arcana-Technical-Docs-a1d7fd0d2970452586c693e4fee14d08) for implementation details.

!!! an-tip

     If you prefer to immediately jump into integrating your app with the {{config.extra.arcana.sdk_name}} right away, see the [[quick-start|Quick Start Guides]]. :material-rocket-launch:

## Build Web3 Apps Faster

As a Web3 app developer, you can focus on core application logic while delegating essential tasks related to end-user onboarding, signing blockchain transactions, and managing the security and privacy of user access to the {{config.extra.arcana.product_name}} product.

### 1. Onboard App Users Effortlessly

Developers can easily plug in the popular Web2 sign-up/login mechanisms in the Web3 apps and lower the barrier to entry for Web3 users. 

To onboard users in a Web3 app, the {{config.extra.arcana.sdk_name}} allows developers to select and configure user authentication providers for the app. Developers can choose the default, built-in plug-and-play user authentication UI via `connect` function of the {{config.extra.arcana.sdk_name}}. Or, they can customize and build a custom user authentication UI, and simply add code to call `loginWithSocial`, `loginWithLink`(deprecated), `loginWithOTPStart` and `loginWithOTPComplete` functions to easily onboard users.

Read more about the [[concept-plug-and-play-auth|plug-and-play feature]], and [[index-onboard-users|how to onboard users]] via the built-in, plug-and-play login UI or custom login UI.

Before you can integrate an app with the {{config.extra.arcana.sdk_name}}, developers must use the {{config.extra.arcana.dashboard_name}} and configure onboarding options and user experience for signing blockchain transactions. Learn about [authentication providers]({{page.meta.arcana.root_rel_path}}/concepts/authtype/arcanaauth.md), and [[index-configure-auth|how to configure authentication providers]] using the {{config.extra.arcana.dashboard_name}}.

### 2. Sign blockchain transactions securely

Allow authenticated Web3 application users to securely sign blockchain operations without bothering about managing secrets and keys. No centralized authority manages user keys in the {{config.extra.arcana.product_name}} DKG subsystem. Use the embedded, non-custodial {{config.extra.arcana.wallet_name}} provided by the {{config.extra.arcana.sdk_name}} to let the authenticated users easily review and sign blockchain transactions. 

Read more about the [{{config.extra.arcana.wallet_name}} features]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md) and [[index-arcana-wallet|how to programmatically use the {{config.extra.arcana.wallet_name}} in Web3 applications]]. Check out the [[index-wallet-user-guide|{{config.extra.arcana.wallet_name}} User Guide]] to learn more about various Web3 wallet operations that can be accessed by the application users.

### 3. Enable Gasless Transactions

The {{config.extra.arcana.sdk_name}} has built-in gasless transaction feature supported for the {{config.extra.arcana.wallet_name}}. See [[gasless-quick-start|enabling gasless transactions]] for details.

Apps that use only third-party browser-based wallets and do not wish to use the social login feature can directly integrate with the {{config.extra.arcana.gasless_sdk_name}} to enable gasless transactions in third-party wallets such as MetaMask. See [[gasless-standalone-quick-start|Gasless (Standalone) Quick Start Guide]] for details.

## Flexibility & Choice

Tailor the user experience for your Web3 applications as per your use case and target audience. Learn more about the [[use-cases|{{config.extra.arcana.product_name}} Use Cases]].

## See Also

* [[index-code-samples|Integration Code Samples]]
* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]
* {% include "./text-snippets/authsdkref_url.md" %}

{% include "./text-snippets/auth_sdk_quicklinks.md" %}
