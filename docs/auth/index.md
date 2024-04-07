---
alias: auth-overview
title: 'Arcana Auth SDK'
description: 'Introducing Arcana Auth, how to use it, features.'
arcana:
  root_rel_path: ..
---

# Arcana Auth SDK

[{{config.extra.arcana.sdk_name}}]({{page.meta.arcana.root_rel_path}}/concepts/authsdk.md) provides easy user onboarding to Web3 apps via social login. Authenticated users can access the in-app, non-custodial [[concept-index-arcana-wallet|{{config.extra.arcana.wallet_name}}]] instantly to sign blockchain transactions. Developers can enable gasless transactions and whitelist app operations to incentivize users. {{config.extra.arcana.sdk_name}} is a [client-side library](https://www.npmjs.com/package/@arcana/auth) that integrates with [[web3-stack-apps|various kinds of Web3 apps]].

[[auth-quick-start|Auth Quick Start :fontawesome-solid-paper-plane:]]{.md-button}

## Usage

=== "**Developers**"
  
    1. Use [[concept-arcana-dashboard|{{config.extra.arcana.dashboard_name}}]] to [[register-app-auth|register the app]] and [[index-configure-auth|configure]] social login, wallet UX, and gasless settings.
    2. Install SDK and integrate the app.
    3. Call SDK methods to onboard users via the configured social login providers, call JSON/RPC Web3 wallet operations via the {{config.extra.arcana.wallet_name}}, enable gasless transactions through the {{config.extra.arcana.wallet_name}}.
    4. [[deploy-app|Deploy Apps]] on Testnet/Mainnet.

    ![Dashboard lots of apps](/img/an_db_all_app_card.png){ .width_85pc .an-screenshots}

=== "**Users**"

    1. Log into the app, access in-app {{config.extra.arcana.wallet_name}} and sign blockchain transactions.
    2. Web3 wallet operations: Use wallet UI to check wallet balance, send and receive tokens/NFTs, add/switch blockchain networks, etc.

    ![Arcana wallet Token Tab](/img/an_wallet_home.png){ .width_35pc .an-screenshots}

## Key Features

<div class="grid card_container" markdown>
  <div class="card" markdown><h4><b>:fontawesome-solid-users-line: Onboard Users</b></h4><hr><p ><ul><li>Quick user onboarding with minimal code.</li><li>Supports diverse Web3 app types: HTML/CSS/JS, React, Next.js, Vue, Wagmi, RainbowKit, Web3-React, Mobile, Gaming and more.</li><li>Customizable onboarding: social login, IAM providers, or passwordless options.</li></ul></p></div>
  <div class="card" markdown><h4><b>:fontawesome-brands-ethereum: Web3 Wallet Transactions</b></h4><hr><p><ul><li>Authenticated users get instant access to an in-app wallet to sign blockchain transactions.</li><li>Manage wallet UX with easy customization and pre-configured <a href="{{page.meta.arcana.root_rel_path}}/web3-stack/chains.html">blockchain networks</a>.</li><li>Web3 wallet operations: send/receive tokens, manage NFTs, deploy/interact with contracts, etc.</li></ul></p></div>
  <div class="card" markdown><h4><b>:simple-letsencrypt: Secure</b></h4><hr><p><ul><li>Authenticated Web3 app users can securely sign blockchain transactions.</li><li>Powered by state-of-the-art asynchronous distributed key generation protocol for robust, scalable, key share generation and access security.</li></ul></p></div>
  <div class="card" markdown><h4><b>:material-gas-station: Gasless Transactions</b></h4><hr><p><ul><li>Developers can specify which app operations are gasless.</li><li>Easy to set up gas tanks and deposit gas fees.</li><li>Users don't pay gas fees for gasless transactions; third-party sponsors or app developers pay gas fees.</li></ul></p></div>
  <div class="card" markdown><h4><b>:material-gesture-tap-button: Easy to Use</b></h4><hr><p><ul><li>In-app, non-custodial wallet available instantly after a user logs in.</li><li>Users don't need to install any browser extensions.<li>Requires no seed phrase.</li><li>Global keyspace option allows wallet sharing across apps integrated with the SDK.</li><li>Wallet is pre-configured with a subset of supported chains.</li></ul></p></div>
</div>

<!--

[[quick-start|Let's begin! ++enter++]]{ .md-button .md-button--primary}

Git: {{ git.short_commit}}

-->
