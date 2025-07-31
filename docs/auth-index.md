---
alias: index-docs
template: auth-style.html
title: 'Auth: Social Login for Web3'
description: 'Fast, secure social login to enable Web3 app blockchain transactions.'
arcana:
  root_rel_path: .
timetoread: False
hide: 
    - toc
---

# Auth: Social Login for Web3

<!---

!!! quote "Don't Panic!"

      All you really need to know for the moment is that the universe is a lot more complicated than you might think, even if you start from a position of thinking it’s pretty damn complicated in the first place.

      -- Douglas Adams (The Hitchhiker's Guide to the Galaxy)

{==

This documentation contains everything you need to get started using [[introduction|{{config.extra.arcana.sdk_name}}]].

==}
-->

=== "Web3 Developers"

    Speed up user onboarding to Web3 apps by eliminating the complex setting up and connecting a Web3 wallet for login and authentication. 
    
    Onboard users to Web3 apps via familiar Web2 login providers. Let authenticated users instantly access the in-app, non-custodial {{config.extra.arcana.wallet_name}} to sign blockchain transactions.

    Integrate Web3 apps with the {{config.extra.arcana.sdk_name}} to enable [[concept-social-login|social login]].


    {==

    <div class="tx-hero-container">
        <div class="tx-hero-content">
            <span markdown="span">
                **TL;DR** | [[register-app-auth| Setup]] | [[sdk-installation|Install]] | [Quick Start](#quick-start)  | [Examples](https://github.com/arcana-network/auth-examples) | [[introduction|Usage]]
            </span>
        </div>
        <div class="tx-hero-content">
            <img style="height: 40px" src="{{config.extra.arcana.img_dir}}/Auth_Wordmark.{{config.extra.arcana.img_png}}" alt="Auth SDK Word Logo"></img>
        </div>
    </div>

    ==}

    ## Quick Start

    What kind of Web3 app do you have? 
    
    Select the appropriate app type and get started with integrating the {{config.extra.arcana.sdk_name}}.

    === "Web Apps"

        [[wagmi-quick-start| Wagmi ]]{ .md-button } [[rainbowkit-quick-start| RainbowKit ]]{ .md-button } [[web3-react-quick-start| Web3-React ]]{ .md-button } [[walletconnect-quick-start| WalletConnect ]]{ .md-button } [[vanilla-web-apps-quick-start| HTML/CSS/JS ]]{ .md-button } [[react-nextjs-quick-start| React/NextJS ]]{ .md-button } [[vue-quick-start| Vue ]]{ .md-button }

    === "Non-EVM Apps"

        [[solana-quick-start| Solana ]]{ .md-button } [[mvx-quick-start| MultiversX ]]{ .md-button } [[near-quick-start| Near ]]{ .md-button }

    === "Mobile Apps"

        [[react-native-quick-start| React-Native ]]{ .md-button } [[flutter-quick-start| Flutter ]]{ .md-button }

    === "Gaming Apps"

        [[unity-quick-start| Unity ]]{ .md-button }

    !!! an-tip "Advanced Usage"
    
        {% include "./text-snippets/adv_auth_ca_integration.md" %}

    ## Demo

    Would you like to experience how social login works without actually integrating your Web3 app with the {{config.extra.arcana.sdk_name}}? Try the SDK integration demo app.
    
    <div class="tx-hero-container">
      <div class="tx-hero-content">
        <a href="https://demo.arcana.network">
          <div class="tx-try-now-button-blue a-link-items">
              <h3 style="color: var(--md-an-gray-light-color)">SDK Integration Demo</h3>
          </div>
        </a>
      </div>
    </div>

    ## Auth Playground

    <div class="tx-hero-container">
        <img src="{{config.extra.arcana.img_dir}}/escape_velocity_arcana_ca.{{config.extra.arcana.img_png}}" alt="Web3 Escape Velocity"></img>
    </div>

    <div class="tx-hero-container">
        <div class="tx-hero-content">
            <a href="https://codesandbox.io/p/github/shaloo/auth-sdk-example-vite-vue/main?import=true">
            <div class="tx-try-now-button-blue a-link-items">
                <h3 style="color: var(--md-an-gray-light-color)">Try Now</h3>
            </div>
            </a>
        </div>
    </div>

## Onboard with Zero Friction

Let users log into your Web3 app securely without having to deal with Web3 specific complexities. Integrate with {{config.extra.arcana.sdk_name}} to enable social login.

<div class="grid cards" markdown>

-   :material-account-group:{ .lg .middle .icon-color} __Social Login__

    ---

    Enable Web2-like login in Web3 apps with {{config.extra.arcana.sdk_name}} and enable in-app {{config.extra.arcana.wallet_name}}.

    [:octicons-arrow-right-24: Learn More...]({{page.meta.arcana.root_rel_path}}/concepts/social-login.md)

-   :material-clock-check-outline:{ .lg .middle .icon-color} __Set up in 2m__

    ---

    Use {{config.extra.arcana.dashboard_name}} to register app, configure settings and manage user experience.

    [:octicons-arrow-right-24: Configure]({{page.meta.arcana.root_rel_path}}/setup/config-dApp-with-db.md)

-   :material-run-fast:{ .lg .middle .icon-color} __Integration Examples__

    ---

    Get up and running quickly with these integration examples for various supported Web3 apps.

    [:octicons-arrow-right-24: Integration Examples](https://github.com/arcana-network/auth-examples)

-   :material-run-fast:{ .lg .middle .icon-color} __Resources__

    ---

    Release notes, migration guides, Dashboard Settings Guide, FAQ, integration checklists and more.

    [:octicons-arrow-right-24: Resources](https://docs.arcana.network/relnotes/latest-auth-release-note/)

</div>

## Need Help?

{% include "./text-snippets/need_help.md" %}

[[integration-checklist| Integration Checklist ]]{ .md-button }
