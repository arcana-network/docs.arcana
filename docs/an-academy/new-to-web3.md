---
alias: new-to-web3
title: 'The Complete Web3 Auth Tutorial: Protect Your Digital Assets'
description: 'Web3 Auth Tutorial: How to Safeguard Your Online Transactions and Protect Your Identity. Learn More Here'
arcana:
  root_rel_path: ..
---

# New to Web3?

![New to Web3 Diagram](/img/diagrams/d_new_2_web3_light.png#only-light)
![New to Web3 Diagram](/img/diagrams/d_new_2_web3_dark.png#only-dark)

{==

*Are you new to Web3?*

**DW, We have you covered, read on!**


==}

{{config.extra.arcana.sdk_name}} allows Web3 apps to onboard users seamlessly through supported authentication providers. Authenticated users instantly access the embedded Arcana wallet, enabling them to sign blockchain transactions. Developers can programmatically perform Web3 wallet operations, such as token transfers and checking balances, and standard Ethereum JSON-RPC calls for blockchain transactions, in the user's context.

!!! tip

      If you're experienced with Web3, including user onboarding, passwordless login, and Web3 wallet operations, feel free to skip the beginner's section and dive into the [[new-to-web3#step-1-understanding-arcana-auth|'Understanding {{config.extra.arcana.product_name}}']] section below.

## Beginners Journey

Get a firm grip on the topics listed under the prerequisites section. These will help you later while building your privacy-preserving Web3 apps by integrating with the {{config.extra.arcana.sdk_name}}.

## Prerequisites

* What is a [Web3 app or dApp](https://ethereum.org/en/developers/docs/dapps/#prerequisites)?

* How to build a Web3 app using [CreateReactApp](https://create-react-app.dev/)?

* How to build a Web3 app using the [Vue](https://vuejs.org/) starter kit?

* User onboarding and authentication methods:

    - Using popular Web2 [Social OAuth](https://auth0.com/learn/social-login/) and [passwordless login](https://auth0.com/passwordless)
    - Difference between Web2 and [Web3 authentication](https://blog.mycrypto.com/sign-in-with-ethereum-an-alternative-to-centralized-identity-providers)

* Blockchain basic topics:

    - What is a [blockchain](https://ethereum.org/en/developers/docs/intro-to-ethereum/#what-is-a-blockchain)?
    - What is [transaction signing](https://ethereum.org/en/developers/tutorials/sending-transactions-using-web3-and-alchemy/#why-do-i-need-to-sign-my-transactions) and why it is used in blockchain?
    - How to [sign blockchain transactions](https://ethereum.org/en/developers/tutorials/sending-transactions-using-web3-and-alchemy/)?
    - What is a [blockchain EIP-1193 standard provider](https://eips.ethereum.org/EIPS/eip-1193)?
    - What is a [wallet](https://ethereum.org/en/wallets/#main-content) and how it is used in the blockchain context?
    - Build a [decentralized Book Rental Web3 app](https://developers.tron.network/docs/build-a-web3-app), set up smart contracts, and more.

* Blockchain advanced topics:

    - [Gasless transactions](https://docs-gasless.biconomy.io/products/enable-gasless-transactions)

* Basic cryptography

    - [Role of cryptography in blockchain](https://consensys.net/blog/blockchain-explained/how-ethereum-works-part-1-cryptography-consensus-and-transactions/)
    - [Symmetric vs Asymmetric Encryption](https://www.ssl2buy.com/wiki/symmetric-vs-asymmetric-encryption-what-are-differences#:~:text=Symmetric%20encryption%20uses%20a%20single,and%20decrypt%20messages%20when%20communicating)
    - Decentralized [consensus mechanisms](https://ethereum.org/en/developers/docs/consensus-mechanisms/)
    - Sharding and reconstructing cryptography keys - [Shamir's secret sharing](https://medium.com/@keylesstech/a-beginners-guide-to-shamir-s-secret-sharing-e864efbf3648)

## Step 1: Understanding {{config.extra.arcana.product_name}}

Now that you are familiar with the basics, let us take a look at what {{config.extra.arcana.product_name}} is and what it can do for Web3 app developers.

* [[what-is-arcana-auth|What is {{config.extra.arcana.product_name}}?]]

* [[why-arcana-auth|Why should you use {{config.extra.arcana.sdk_name}}?]]

* [[how-to-use-auth|How to use the {{config.extra.arcana.sdk_name}} in Web3 apps?]]

* [[use-cases|Auth Use Cases]]

## Step 2: Getting Started with the {{config.extra.arcana.sdk_name}}

**Register App**: To use the {{config.extra.arcana.sdk_name}} in your application, you need to first [[configure-auth|register the application]] using the [{{config.extra.arcana.dashboard_name}}]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md). Configure [[index-config-social-providers|social providers]] to onboard users before you [[index-integrate-app|integrate your application]] and call any {{config.extra.arcana.sdk_name}} functions in your application.

**Install & Integrate App**: After configuring application settings using the {{config.extra.arcana.dashboard_name}}, you can install the {{config.extra.arcana.sdk_name}} and integrate your application. Once integrated, applications can access the `AuthProvider` interface to onboard users and enable authenticated users to sign blockchain transactions.

**Onboard Users**: There are two ways to add user onboarding functionality in an app using the {{config.extra.arcana.sdk_name}} by using built-in plug-and-play login UI or building a user login UI from scratch and adding code for enabling various supported authentication providers. For the new Web3 developers, we recommend the [[concept-plug-and-play-auth|{{config.extra.arcana.sdk_name}} plug-and-play feature]] that is quick and easy to use. Seasoned developers can build custom user authentication UI. See [[index-onboard-users|User Onboarding Guide]]. 

**Wallet Ops**: Developers can choose to enable the built-in {{config.extra.arcana.wallet_name}} UI or plug in a custom wallet UI when integrating an app with the {{config.extra.arcana.sdk_name}}. Once authenticated, an embedded, non-custodial wallet is instantly available to users for signing blockchain transactions. See the [[index-arcana-wallet|{{config.extra.arcana.wallet_name}} Developer's Guide]] for details. To learn about how the app users access the {{config.extra.arcana.wallet_name}} UI to perform Web3 operations and sign blockchain transactions, see the [[index-wallet-user-guide|{{config.extra.arcana.wallet_name}} User Guide]].

**Deploy App**: First deploy the integrated app on the Testnet and then migrate to the Mainnet. See [[deploy-app|Deployment Guide]] on how to deploy an app. Learn [[migrate-app-testnet-mainnet|how to migrate an app deployed on the Testnet to the Mainnet]].

*Now that you understand the {{config.extra.arcana.sdk_name}} usage better let's get into some sample applications and coding!*

## Step 3: Example Code

=== "Auth Example"

    This is a vanilla HTML/JS application that integrates with the {{config.extra.arcana.sdk_name}}, allows users to onboard via configured authentication providers and enables the authenticated users to sign blockchain transactions via the {{config.extra.arcana.wallet_name}}.

    [Auth Example (GitHub) :material-login:](https://github.com/arcana-network/auth/tree/main/examples){ .md-button }

=== "React Example"

    Learn how to integrate {{config.extra.arcana.sdk_name}} in a simple React Application.

    [[react-code-sample|React Example :material-react:]]{ .md-button }

!!! note "Milestone Achieved!"

      Congratulations!!! :material-party-popper:

      **You have now graduated to the next level - Web3 developer.**

## Step 4: Advanced Usage

For advanced options related to user onboarding and the {{config.extra.arcana.sdk_name}} usage, you can check out [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} usage]] and {% include "./text-snippets/authsdkref_url.md" %}. Refer to [Auth Examples on GitHub](https://github.com/arcana-network/auth-examples) to see how to integrate different types of apps with the {{config.extra.arcana.sdk_name}}.

## Troubleshooting

If you run into any new user usage issues, check out [{{config.extra.arcana.product_name}} FAQs]({{page.meta.arcana.root_rel_path}}/faq/index.md) and [Troubleshooting Guide]({{page.meta.arcana.root_rel_path}}/troubleshooting.md).

*Can't find what you are looking for?*

Reach out to us at {% include "./text-snippets/support_email_link.md" %}
