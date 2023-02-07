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

Simply **follow this guide** to quickly get started and build your foundation before you get into building a Web3 application that is integrated with the Arcana Auth SDK.

Arcana Auth SDK allows Web3 application developers to quickly plug in user onboarding functions via social and passwordless login. It also provides authenticated users to access the embedded Web3 Arcana wallet in the application and sign blockchain transactions.

!!! tip

      If you are already familiar with how Web3 works, typical social authentication mechanisms, passwordless login, using Web3 wallet provider to sign blockchain transactions in your dApp, you can jump right into the [Arcana Quick Start Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_qs.md) and start integrating with the Auth SDK.

After the foundation, your next stop is to figure out when and how to use Arcana Auth SDK and build a basic dApp that utilizes Arcana SDKs.

## Beginners Journey

Get a firm grip on the topics listed under the prerequisites section. These will help you later while building your privacy-preserving dApps using Arcana SDKs.

## Prerequisites

* What is a [dApp](https://ethereum.org/en/developers/docs/dapps/#prerequisites)?
* How to build a dApp using [CreateReactApp](https://create-react-app.dev/)?
* How to build a dApp using [Vue](https://vuejs.org/) starter kit?
* User onboarding and authentication methods:
   - Using popular Web2 [Social OAuth](https://auth0.com/learn/social-login/) and [passwordless login](https://auth0.com/passwordless)
   - Difference between Web2 and [Web3 authentication](https://blog.mycrypto.com/sign-in-with-ethereum-an-alternative-to-centralized-identity-providers)
* Blockchain basics
  - What is a [blockchain](https://ethereum.org/en/developers/docs/intro-to-ethereum/#what-is-a-blockchain)?
  - What is [transaction signing](https://ethereum.org/en/developers/tutorials/sending-transactions-using-web3-and-alchemy/#why-do-i-need-to-sign-my-transactions) and why it is used in blockchain?
  - How to [sign blockchain transactions](https://ethereum.org/en/developers/tutorials/sending-transactions-using-web3-and-alchemy/)?
  - What is a [blockchain EIP-1193 standard provider](https://eips.ethereum.org/EIPS/eip-1193)?
  - What is a [wallet](https://ethereum.org/en/wallets/#main-content) and how it is used in the blockchain context?
  - Build a [decentralized Book Rental Web3 dApp](https://developers.tron.network/docs/build-a-web3-app), set up smart contracts, and more.
* Basic cryptography
  - [Role of cryptography in blockchain](https://consensys.net/blog/blockchain-explained/how-ethereum-works-part-1-cryptography-consensus-and-transactions/)
  - [Symmetric vs Asymmetric Encryption](https://www.ssl2buy.com/wiki/symmetric-vs-asymmetric-encryption-what-are-differences#:~:text=Symmetric%20encryption%20uses%20a%20single,and%20decrypt%20messages%20when%20communicating)
  - Decentralized [consensus mechanisms](https://ethereum.org/en/developers/docs/consensus-mechanisms/)
  - Sharding and reconstructing cryptography keys - [Shamir's secret sharing](https://medium.com/@keylesstech/a-beginners-guide-to-shamir-s-secret-sharing-e864efbf3648)

## Step 1: Understanding Arcana Network

Now that you are familiar with the basics, let us take a look at what Arcana Network is and what it can do for you.

* [What is Arcana Auth?]({{page.meta.arcana.root_rel_path}}/whatisan.md)

* [Why should you use Auth SDK?]({{page.meta.arcana.root_rel_path}}/whyan.md)

* [Auth Use Cases]({{page.meta.arcana.root_rel_path}}/use_cases.md)

* [How to integrate your dApp with the Auth SDK?]({{page.meta.arcana.root_rel_path}}/howdoiuse.md)

## Step 2: Getting Started with Auth SDK

To use Arcana Auth SDK in your application, you need to first [register the application]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) using the [Arcana Developer Dashboard]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md). Configure [application settings for social login]({{page.meta.arcana.root_rel_path}}/howto/config_social_providers.md) before you [integrate your application]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) and call social login functions or any Arcana wallet functions in your application.

After configuring application settings using the dashboard, you can install the Auth SDK and integrate your application. Once integrated, applications can access `AuthProvider` interface to onboard users and enable authenticated users to sign blockchain transactions.

There are two options enable user onboarding in the applications. For new Web3 developers, we recommend that you use the [Arcana Auth SDK plug and play feature]({{page.meta.arcana.root_rel_path}}/concepts/plugnplayauth.md) and use the built in UI to onboard users. Later you can build your own UI and call social login functions as required. For details, see [developer's guide for onboarding users]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/index.md). 

Developers can easily enable Arcana wallet for authenticated users and allow them to sign blockchain transactions. See [developer's guide for enabling Web3 operations using Arcana wallet]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md).

To learn about how the users access Arcana wallet UI to perform Web3 operations and sign blockchain transactions, see [Arcana wallet User's Guide]({{page.meta.arcana.root_rel_path}}/user_guides/wallet_ui/index.md).

*Now that you understand Arcana Auth better let's get into some sample applications and coding!*

## Step 3a: Auth Example

This is a vanilla HTML/JS application that integrates with the Auth SDK, onboards users and allows authenticated users to sign blockchain transactions using the Arcana wallet.

[Auth Example (GitHub) :material-login:](https://github.com/arcana-network/auth/tree/main/examples){ .md-button }

## Step 3b: React Example

Learn how to integrate Arcana Auth SDK in a simple React Application.

[React Example :material-react:]({{page.meta.arcana.root_rel_path}}/tutorials/code_samples/react_code_sample.md){ .md-button }

!!! note "Milestone Achieved!""

      Congratulations!!! :material-party-popper:

      **You have now graduated to the next level - Web3 developer.**

## Step 4: Advanced Usage

For advanced options related to user onboarding and Auth SDK usage, you can check out [Auth SDK usage]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md) and {% include "./text-snippets/authsdkref_url.md" %}.

## Troubleshooting

If you run into any new user usage issues, check out Arcana [FAQs]({{page.meta.arcana.root_rel_path}}/faq/index.md) and [Troubleshooting Guide]({{page.meta.arcana.root_rel_path}}/troubleshooting.md).

*Can't find what you are looking for?*

Reach out to us at {% include "./text-snippets/support_email_link.md" %}
