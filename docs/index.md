---
alias: index-docs
template: newintro.html
title: 'Welcome'
description: 'Fast, secure social login and gasless transactions in Web3 apps.'
arcana:
  root_rel_path: .
timetoread: False
hide: 
    - toc
---

# Web3 Made Effortless

!!! quote "Don't Panic!"

      All you really need to know for the moment is that the universe is a lot more complicated than you might think, even if you start from a position of thinking it’s pretty damn complicated in the first place.

      -- Douglas Adams (The Hitchhiker's Guide to the Galaxy)

      {==

      This documentation contains everything you need to get started using [[introduction|{{config.extra.arcana.company_name}} SDKs]].

      ==}

## Welcome!

Onboard Web3 app users effortlessly via [[concept-social-login|social login]].

Enable [[concept-gasless-transactions|account abstraction]] to sponsor gas fees and incentivize users.

Users get instant access to the in-app [[concept-index-arcana-wallet|Arcana Wallet]]. 

{==

**TL;DR**

Head to [Auth Playground](#auth-playground) or [Quick start](#quick-start) sections!

==}

<div class="grid cards" markdown>

-   :material-account-group:{ .lg .middle .icon-color} __Social Login__

    ---

    Enable Web2-like login in Web3 apps with {{config.extra.arcana.sdk_name}} and enable in-app {{config.extra.arcana.wallet_name}}

    [:octicons-arrow-right-24: Learn More...]({{page.meta.arcana.root_rel_path}}/concepts/social-login.md)

-   :material-gas-station-off:{ .lg .middle .icon-color} __Account Abstraction__

    ---

    Enables gasless transactions via {{config.extra.arcana.wallet_name}} / third-party browser-based wallets

    [:octicons-arrow-right-24: Learn More...]({{page.meta.arcana.root_rel_path}}/concepts/gasless-ops.md)

-   :material-clock-check-outline:{ .lg .middle .icon-color} __Set up in 2 min!__

    ---

    Use {{config.extra.arcana.dashboard_name}} to register app, configure settings and manage user experience

    [:octicons-arrow-right-24: Configure]({{page.meta.arcana.root_rel_path}}/setup/config-dApp-with-db.md)

-   :material-run-fast:{ .lg .middle .icon-color} __Integrate App__

    ---

    Get up and running quickly with these integration examples for various supported Web3 apps!

    [:octicons-arrow-right-24: Integration Examples](https://github.com/arcana-network/auth-examples)

</div>

## Auth Playground

<div class="tx-hero-container">
    <img src="{{config.extra.arcana.img_dir}}/escape_velocity_arcana_ca.{{config.extra.arcana.img_png}}" alt="Auth and Gasless Playground Escape Velocity"></img>
</div>

<div class="tx-hero-container">
    <div class="tx-hero-content">
        <a href="/auth/auth-try-now/">
        <div class="tx-try-now-button-blue a-link-items">
            <h3 style="color: var(--md-an-gray-light-color)">Try Auth</h3>
        </div>
        </a>
    </div>
    <div class="tx-hero-content">
        <a href="/gasless/gl-try-now/">
            <div class="tx-try-now-button-green a-link-items">
                <h3 style="color: var(--md-an-gray-light-color)">Try Gasless</h3>
            </div>
        </a>
    </div>
</div>

## Quick Start

=== "Web Apps"

    [[vanilla-web-apps-quick-start| HTML/CSS/JS ]]{ .md-button } [[wagmi-quick-start| Wagmi ]]{ .md-button } [[rainbowkit-quick-start| RainbowKit ]]{ .md-button } [[react-nextjs-quick-start| React/NextJS ]]{ .md-button } [[vue-quick-start| Vue ]]{ .md-button } [[web3-react-quick-start| Web3-React ]]{ .md-button }  [[walletconnect-quick-start| WalletConnect ]]{ .md-button } [[gasless-quick-start| Gasless ]]{ .md-button } [[gasless-standalone-quick-start| Gasless(3rd Party Wallets) ]]{ .md-button }

=== "Non-EVM Apps"

    [[solana-quick-start| Solana ]]{ .md-button } [[mvx-quick-start| MultiversX ]]{ .md-button } [[near-quick-start| Near ]]{ .md-button }

=== "Mobile Apps"

     [[react-native-quick-start| React-Native ]]{ .md-button } [[flutter-quick-start| Flutter ]]{ .md-button }

=== "Gaming Apps"

    [[unity-quick-start| Unity ]]{ .md-button }

## Need Help?

</br>
</br>

Contact us at 📨 [Arcana Support](mailto:support@arcana.network). 

Be a part of [[index-support|Arcana communities]] and stay informed!

</br>
</br>

[[integration-checklist| Integration Checklist ]]{ .md-button }