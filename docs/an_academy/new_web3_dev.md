---
slug: /newdevweb3
id: idnewdevweb3
title: New to Web3
sidebar_custom_props:
  cardIcon: ✨
arcana:
  root_rel_path: ..
---

# Are you new to Web3?

![New to Web3 Diagram](/img/diagrams/d_new_2_web3_light.png#only-light)
![New to Web3 Diagram](/img/diagrams/d_new_2_web3_dark.png#only-dark)

**We have you covered!**

Simply **follow this guide** and quickly get started with building a foundation before integrating a Web3 application with the {{config.extra.arcana.sdk_name}}.

{{config.extra.arcana.sdk_name}} enables Web3 applications to add user onboarding functions easily through several supported authentication providers. The authenticated users can instantly access the embedded Web3 {{config.extra.arcana.wallet_name}} in the context of the integrated application and sign blockchain transactions. Developers can add code to perform Web3 wallet operations programmatically in the context of an authenticated user, e.g., sending tokens, checking wallet balance, standard Ethereum JSON-RPC calls for blockchain transactions, etc.

!!! tip

      If you are already familiar with how Web3 works, using authentication providers to onboard users, passwordless login, using Web3 wallet provider to sign blockchain transactions, etc., then you can skip the beginners' section and jump right into the [{{config.extra.arcana.product_name}} Quick Start Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_qs.md).

After the foundation, your next stop is to figure out when and how to use {{config.extra.arcana.sdk_name}} and build a basic Web3 app that integrates with it for onboarding users and allowing authenticated users to sign blockchain transactions.

## Beginners Journey

Get a firm grip on the topics listed under the prerequisites section. These will help you later while building your privacy-preserving Web3 apps by integrating with the {{config.extra.arcana.sdk_name}}.

## Prerequisites

* What is a [Web3 app or dApp](https://ethereum.org/en/developers/docs/dapps/#prerequisites)?

* How to build a Web3 app using [CreateReactApp](https://create-react-app.dev/)?

* How to build a Web3 app using the [Vue](https://vuejs.org/) starter kit?

* User onboarding and authentication methods:

    - Using popular Web2 [Social OAuth](https://auth0.com/learn/social-login/) and [passwordless login](https://auth0.com/passwordless)
    - Difference between Web2 and [Web3 authentication](https://blog.mycrypto.com/sign-in-with-ethereum-an-alternative-to-centralized-identity-providers)

* Blockchain basics

    - What is a [blockchain](https://ethereum.org/en/developers/docs/intro-to-ethereum/#what-is-a-blockchain)?
    - What is [transaction signing](https://ethereum.org/en/developers/tutorials/sending-transactions-using-web3-and-alchemy/#why-do-i-need-to-sign-my-transactions) and why it is used in blockchain?
    - How to [sign blockchain transactions](https://ethereum.org/en/developers/tutorials/sending-transactions-using-web3-and-alchemy/)?
    - What is a [blockchain EIP-1193 standard provider](https://eips.ethereum.org/EIPS/eip-1193)?
    - What is a [wallet](https://ethereum.org/en/wallets/#main-content) and how it is used in the blockchain context?
    - Build a [decentralized Book Rental Web3 app](https://developers.tron.network/docs/build-a-web3-app), set up smart contracts, and more.

* Basic cryptography

    - [Role of cryptography in blockchain](https://consensys.net/blog/blockchain-explained/how-ethereum-works-part-1-cryptography-consensus-and-transactions/)
    - [Symmetric vs Asymmetric Encryption](https://www.ssl2buy.com/wiki/symmetric-vs-asymmetric-encryption-what-are-differences#:~:text=Symmetric%20encryption%20uses%20a%20single,and%20decrypt%20messages%20when%20communicating)
    - Decentralized [consensus mechanisms](https://ethereum.org/en/developers/docs/consensus-mechanisms/)
    - Sharding and reconstructing cryptography keys - [Shamir's secret sharing](https://medium.com/@keylesstech/a-beginners-guide-to-shamir-s-secret-sharing-e864efbf3648)

## Step 1: Understanding {{config.extra.arcana.product_name}}

Now that you are familiar with the basics, let us take a look at what {{config.extra.arcana.product_name}} is and what it can do for Web3 app developers.

* [What is {{config.extra.arcana.product_name}}?]({{page.meta.arcana.root_rel_path}}/whatisan.md)

* [Why should you use {{config.extra.arcana.sdk_name}}?]({{page.meta.arcana.root_rel_path}}/whyan.md)

* [Auth Use Cases]({{page.meta.arcana.root_rel_path}}/use_cases.md)

* [How to integrate with the {{config.extra.arcana.sdk_name}}?]({{page.meta.arcana.root_rel_path}}/howdoiuse.md)

## Step 2: Getting Started with the {{config.extra.arcana.sdk_name}}

To use the {{config.extra.arcana.sdk_name}} in your application, you need to first [register the application]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) using the [{{config.extra.arcana.dashboard_name}}]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md). Configure [social providers]({{page.meta.arcana.root_rel_path}}/howto/config_social/index.md) to onboard users before you [integrate your application]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) and call any {{config.extra.arcana.sdk_name}} functions in your application.

After configuring application settings using the {{config.extra.arcana.dashboard_name}}, you can install the {{config.extra.arcana.sdk_name}} and integrate your application. Once integrated, applications can access the `AuthProvider` interface to onboard users and enable authenticated users to sign blockchain transactions.

There are two ways to add user onboarding functionality in an app using the {{config.extra.arcana.sdk_name}} by using built-in plug-and-play login UI or building a user login UI from scratch and adding code for enabling various supported authentication providers. For the new Web3 developers, we recommend the [{{config.extra.arcana.sdk_name}} plug-and-play feature]({{page.meta.arcana.root_rel_path}}/concepts/plugnplayauth.md) that is quick and easy to use. Seasoned developers can build custom user authentication UI. See [User Onboarding Guide]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/index.md). 

With the {{config.extra.arcana.sdk_name}}, developers can easily enable the embedded, non-custodial {{config.extra.arcana.wallet_name}} for authenticated users and allow them to sign blockchain transactions. See the [{{config.extra.arcana.wallet_name}} Developer's Guide]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md) for details.

To learn about how the users access the {{config.extra.arcana.wallet_name}} UI to perform Web3 operations and sign blockchain transactions, see the [{{config.extra.arcana.wallet_name}} User Guide]({{page.meta.arcana.root_rel_path}}/user_guides/wallet_ui/index.md).

*Now that you understand the {{config.extra.arcana.sdk_name}} usage better let's get into some sample applications and coding!*

## Step 3a: Auth Example

This is a vanilla HTML/JS application that integrates with the {{config.extra.arcana.sdk_name}}, allows users to onboard via configured authentication providers and enables the authenticated users to sign blockchain transactions via the {{config.extra.arcana.wallet_name}}.

[Auth Example (GitHub) :material-login:](https://github.com/arcana-network/auth/tree/main/examples){ .md-button }

## Step 3b: React Example

Learn how to integrate {{config.extra.arcana.sdk_name}} in a simple React Application.

[React Example :material-react:]({{page.meta.arcana.root_rel_path}}/tutorials/code_samples/react_code_sample.md){ .md-button }

!!! note "Milestone Achieved!"

      Congratulations!!! :material-party-popper:

      **You have now graduated to the next level - Web3 developer.**

## Step 4: Advanced Usage

For advanced options related to user onboarding and the {{config.extra.arcana.sdk_name}} usage, you can check out [{{config.extra.arcana.sdk_name}} usage]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md) and {% include "./text-snippets/authsdkref_url.md" %}.

## Troubleshooting

If you run into any new user usage issues, check out [{{config.extra.arcana.product_name}} FAQs]({{page.meta.arcana.root_rel_path}}/faq/index.md) and [Troubleshooting Guide]({{page.meta.arcana.root_rel_path}}/troubleshooting.md).

*Can't find what you are looking for?*

Reach out to us at {% include "./text-snippets/support_email_link.md" %}
