---
alias: ca-index-docs
template: ca-style.html
title: 'Unify Balance'
description: 'Get Unified balance to spend on any chain in Web3 apps with Arcana Network Chain Abstraction.'
arcana:
  root_rel_path: .
timetoread: False
hide: 
    - toc
---

# Unify Balance Across Chains

=== "Web3 Developers"

    Let users spend any supported crypto asset on [[ca-stack| any blockchain]] instantly - no chain switching, no bridging, no cross-chain swaps necessary. 
        
    No hassle. Seamless transaction experience.
    
    Integrate Web3 app with the {{config.extra.arcana.company_name}}'s [[concept-ca|Chain Abstraction ]](CA) SDK. Enable app users to access [[concept-unified-balance|unified balance]] from all chains in one place.

    {==

    <div class="tx-hero-container">
      <div class="tx-hero-content">
         <span markdown="span">
           **TL;DR** | [[ca-sdk-installation| Install]] | [Quick Start](#quick-start) | [[ca-examples|Examples]] | [[web-ca-usage-guide|Usage]]
         </span>
      </div>
      <div class="tx-hero-content">
        <img style="height: 45px" src="{{config.extra.arcana.img_dir}}/CA_Wordmark.{{config.extra.arcana.img_png}}" alt="CA SDK Word Logo"></img>
      </div>
    </div>

    ==}

    ## Quick Start

    What kind of Web3 app do you have? 
    
    Select the appropriate app type and get started with integrating the {{config.extra.arcana.ca_sdk_name}}.

    <div class="tx-hero-container">
      <div class="tx-hero-content">
        <span markdown="span">
        [[ca-quick-start|Web Apps]]{ .md-button } [[ca-wagmi-quick-start|Wagmi Apps]]{ .md-button }
        </span>
      </div>
    </div>

    !!! an-tip "Advanced Usage"
    
        {% include "./text-snippets/adv_auth_ca_integration.md" %}

    ## Demo

    Would you like to experience chain abstraction and how unified balance works before integrating a Web3 app with the {{config.extra.arcana.ca_sdk_name}}? Try the SDK integration demo app.

    <div class="tx-hero-container">
      <div class="tx-hero-content">
        <a href="https://sdk.arcana.network">
          <div class="tx-try-now-button-purple a-link-items">
              <h3 style="color: var(--md-an-gray-light-color)">SDK Integration Demo</h3>
          </div>
        </a>
      </div>
    </div>

    ## CA Playground

    <figure markdown="span">
      <img alt="With CA" src="{{config.extra.arcana.img_dir}}/an_ca_landing.{{config.extra.arcana.img_png}}" class="an_screenshots"/>
      <figcaption>Seamless UX with unified balance across assets and chains</figcaption>
    </figure>

    <div class="tx-hero-container">
      <div class="tx-hero-content">
        <a href="https://codesandbox.io/p/github/arcana-network/ca-wagmi-example/main">
          <div class="tx-try-now-button-purple a-link-items">
              <h3 style="color: var(--md-an-gray-light-color)">Try Now</h3>
          </div>
        </a>
      </div>
    </div> 

## Spend on Any Chain

Chain abstracted transactions are a game changer for Web3 app adoption. Integrate with {{config.extra.arcana.ca_sdk_name}} to enable unified balance in Web3 apps.

<div class="grid cards" markdown>

-   :material-account-group:{ .lg .middle .icon-color} __Unified Balance__

    ---

    Spend on any chain with unified balance of funds on the source chains and sign transactions on any destination chain with a third-party browser-based wallet.

    [:octicons-arrow-right-24: Learn More...]({{page.meta.arcana.root_rel_path}}/concepts/ca/unified-balance.md)

-   :material-clock-check-outline:{ .lg .middle .icon-color} __Track Status__

    ---

    Use {{config.extra.arcana.company_name}} Intent Explorer to track status of chain abstracted transactions.

    [:octicons-arrow-right-24: Learn More...]({{page.meta.arcana.root_rel_path}}/concepts/ca/intent-explorer.md)

-   :material-run-fast:{ .lg .middle .icon-color} __Integration Examples__

    ---

    Get up and running quickly with integration examples: 
    
    [:octicons-arrow-right-24: `ca-sdk`](https://github.com/arcana-network/ca-sdk-example)
    
    [:octicons-arrow-right-24: `ca-wagmi`](https://github.com/shaloo/sample-arcana-ca-wagmi-sdk)

-   :material-run-fast:{ .lg .middle .icon-color} __Resources__

    ---

    Release notes, FAQ, audit reports, whitepaper and more.

    [:octicons-arrow-right-24: Learn more...](https://docs.arcana.network/relnotes/latest-ca-release-note/)

</div>

[[why-ca-sdk|Learn more...]]

## Need Help?

{% include "./text-snippets/need_help.md" %}
