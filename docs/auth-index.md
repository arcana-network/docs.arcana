---
alias: index-docs
template: newintro.html
title: 'Welcome'
description: 'Fast, secure social login to enable Web3 app blockchain transactions.'
arcana:
  root_rel_path: .
timetoread: False
hide: 
    - toc
---

# Web3 Made Effortless

<div>
    <img style="height: 75px" src="{{config.extra.arcana.img_dir}}/Auth_Wordmark.{{config.extra.arcana.img_png}}" alt="Auth SDK Word Logo"></img>
</div>

<!---

!!! quote "Don't Panic!"

      All you really need to know for the moment is that the universe is a lot more complicated than you might think, even if you start from a position of thinking it’s pretty damn complicated in the first place.

      -- Douglas Adams (The Hitchhiker's Guide to the Galaxy)

{==

This documentation contains everything you need to get started using [[introduction|{{config.extra.arcana.company_name}} SDKs]].

==}
-->

## Welcome!

<!--
=== "Web3 Users"

    Arcana Wallet displays your [[concept-unified-balance|unified balance]] across several blockchains and tokens by combining fragmented liquidity in your account. You can now spend on any chain by leveraging Arcana's chain abstraction protocol. [Learn more...](https://arcana.network/chain-abstraction)

    {==
    
      **TL;DR**

      Simply [download](https://chromewebstore.google.com/detail/arcana-wallet/nieddmedbnibfkfokcionggafcmcgkpi) the standalone Arcana Wallet browser extension and get started! 

    ==}

    See Arcana Wallet in action...
    
    <iframe align="left" src="https://www.youtube.com/embed/PvS_zltnDyQ" allowfullscreen></iframe>
-->

=== "Web3 Developers"

    Integrate Web3 apps with Arcana SDKs to onboard users quickly via [[concept-social-login|social login]].
    

    {==

    **TL;DR**

    Head to the [Quick start](#quick-start) section. You can also try the [SDK Playground](#sdk-playground).

    ==}

    <div class="grid cards" markdown>

    -   :material-account-group:{ .lg .middle .icon-color} __Social Login__

        ---

        Enable Web2-like login in Web3 apps with {{config.extra.arcana.sdk_name}} and enable in-app {{config.extra.arcana.wallet_name}}

        [:octicons-arrow-right-24: Learn More...]({{page.meta.arcana.root_rel_path}}/concepts/social-login.md)

    -   :material-clock-check-outline:{ .lg .middle .icon-color} __Set up in 2 min!__

        ---

        Use {{config.extra.arcana.dashboard_name}} to register app, configure settings and manage user experience

        [:octicons-arrow-right-24: Configure]({{page.meta.arcana.root_rel_path}}/setup/config-dApp-with-db.md)

    -   :material-run-fast:{ .lg .middle .icon-color} __Integration Examples__

        ---

        Get up and running quickly with these integration examples for various supported Web3 apps!

        [:octicons-arrow-right-24: Integration Examples](https://github.com/arcana-network/auth-examples)

    -   :material-run-fast:{ .lg .middle .icon-color} __Resources__

        ---

        Release notes, migration guides, Dashboard Settings Guide, FAQ, integration checklists amd more!

        [:octicons-arrow-right-24: Resources](https://docs.arcana.network/relnotes/latest-auth-release-note/)


    </div>

    ## SDK Playground

    <div class="tx-hero-container">
        <img src="{{config.extra.arcana.img_dir}}/escape_velocity_arcana_ca.{{config.extra.arcana.img_png}}" alt="Web3 Escape Velocity"></img>
    </div>

    <div class="tx-hero-container">
        <div class="tx-hero-content">
            <a href="/auth/auth-try-now/">
            <div class="tx-try-now-button-blue a-link-items">
                <h3 style="color: var(--md-an-gray-light-color)">Try Auth</h3>
            </div>
            </a>
        </div>
    </div>

    ## Quick Start

    === "Web Apps"

        **Auth**

        <hr>

        [[wagmi-quick-start| Wagmi ]]{ .md-button } [[rainbowkit-quick-start| RainbowKit ]]{ .md-button } [[web3-react-quick-start| Web3-React ]]{ .md-button } [[walletconnect-quick-start| WalletConnect ]]{ .md-button } [[vanilla-web-apps-quick-start| HTML/CSS/JS ]]{ .md-button } [[react-nextjs-quick-start| React/NextJS ]]{ .md-button } [[vue-quick-start| Vue ]]{ .md-button }

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