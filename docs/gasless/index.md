---
alias: gasless-overview
title: 'Arcana Gasless SDK'
description: 'Arcana Gasless SDK extends the gasless transactions feature of Arcana wallet to third-party wallets.'
arcana:
  root_rel_path: ..
---

# Arcana Gasless SDK

When Web3 wallets enable gasless transactions, users don't need to pay transaction gas fees. The gas fees are paid by either the developer via a gas tank that is funded with requisite cryptocurrency or via a third-party sponsor. 

{{config.extra.arcana.gasless_sdk_name}} enables gasless transactions for third-party, browser-based wallets. Before installing and integrating with the SDK, developers must configure gasless usage through the {{config.extra.arcana.dashboard_name}}. 

[[gasless-standalone-quick-start| :fontawesome-solid-paper-plane:{ .icon-color } Gasless Quick Start]]{.md-button}

<!--- Embed Gasless sandbox - this was done prior to Sandpack upgrade --->
<!---
<iframe src="https://codesandbox.io/p/github/shaloo/sample-gasless-metamask-only/main?embed=1&file=%2Findex.js"
     style="width:100%; height: 500px; border: 1px; border-radius: 5px; overflow:hidden;"
     title="shaloo/sample-gasless-metamask-only/main"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
-->

## Enabling Gasless

Developers must use the {{config.extra.arcana.dashboard_name}} to first configure gasless usage. After that, install the {{config.extra.arcana.gasless_sdk_name}} and integrate the Web3 app to enable gasless transactions in third-party wallets.

!!! an-note "Gasless Transactions via {{config.extra.arcana.wallet_name}}"

      To enable gasless transactions via {{config.extra.arcana.wallet_name}}, developers must install and use the built-in gasless feature of the {{config.extra.arcana.sdk_name}}. The {{config.extra.arcana.gasless_sdk_name}} is only needed for enabling gasless in third-party wallets.

### {{config.extra.arcana.gasless_sdk_name}}

{{config.extra.arcana.gasless_sdk_name}} is a [client-side library](https://www.npmjs.com/package/@arcana/scw) for enabling gasless transactions in third-party browser-based wallets. Different types of Web3 apps are supported by this SDK:

* Web Apps: _Vanilla JS app_, _React, Next.js_, _Vue_
* Wallet Connector Framework Apps: _Wagmi_, _RainbowKit_, and _Web3-React_
* Mobile Apps: _Flutter_, _React-Native_ (<span class="an-marker-text-highlight">Coming soon!</span>)
* Gaming Apps: _Unity_ (<span class="an-marker-text-highlight">Coming soon!</span>) 

[Learn more...]({{page.meta.arcana.root_rel_path}}/concepts/gasless-ops.md)

!!! an-note "Built-in Gasless vs Standalone Gasless Feature"

      Apps that do not require user onboarding and only use third-party wallets can directly integrate with the {{config.extra.arcana.gasless_sdk_name}}. Multi-wallet apps that require to support third-party wallets as well as the {{config.extra.arcana.wallet_name}} and enable gasless transactions must integrate with both the {{config.extra.arcana.sdk_name}} and the {{config.extra.arcana.gasless_sdk_name}}.

### {{config.extra.arcana.dashboard_name}}

[{{config.extra.arcana.dashboard_name}}](https://dashboard.arcana.network) helps to register and configure gasless usage in Web3 apps before integrating them with the {{config.extra.arcana.gasless_sdk_name}}.

Registering the app with {{config.extra.arcana.company_name}} associates a unique {{config.extra.arcana.app_address}} for each app. Developers **must** use this {{config.extra.arcana.app_address}} to integrate the app with the {{config.extra.arcana.gasless_sdk_name}}. 

![Dashboard lots of apps](/img/an_db_all_app_card.png){ .width_85pc .an-screenshots}

[Learn more...]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md)

## Usage

  Gasless transactions can help incentivize users and boost user onboarding.

=== ":fontawesome-regular-user:{ .icon-color } **Developers**"

    1. Register & Configure App for gasless transactions via third-party wallets
    2. Install SDK & Integrate App
    3. Add custom code to onboard users and integrate third-party wallets
    4. Deploy App on Testnet/Mainnet

=== ":fontawesome-solid-users:{ .icon-color } **Users**"

    1. Log into the app, access the third-party wallets, sign blockchain transactions, and pay zero gas fees for the whitelisted app operations automatically.

## Key Features

<div class="grid card_container" markdown>
  <div class="card" markdown><h4><b>:fontawesome-solid-users-line:{ .icon-color } No Auth</b></h4><hr><p ><ul><li>There is no user authentication feature in the {{config.extra.arcana.gasless_sdk_name}} .</li><li>It can work without the {{config.extra.arcana.sdk_name}}.</li><li>In multi-wallet apps that use both {{config.extra.arcana.wallet_name}} and third-party wallets, both {{config.extra.arcana.sdk_name}} and {{config.extra.arcana.gasless_sdk_name}} are required.</li></ul></p></div>
  <div class="card" markdown><h4><b>:fontawesome-brands-ethereum:{ .icon-color } Powered by Biconomy</b></h4><hr><p><ul><li>The gasless transactions leverage the account abstraction and gasless features offered by Biconomy.</li><li>Arcana uses its own custom Paymaster.</li></ul></p></div>
  <div class="card" markdown><h4><b>:material-gas-station:{ .icon-color } Gasless Transactions</b></h4><hr><p><ul><li>Developers can specify which app operations are gasless.</li><li>Easy to set up gas tanks and deposit gas fees.</li><li>Users don't pay gas fees for gasless transactions; third-party sponsors or app developers pay gas fees.</li></ul></p></div>
</div>

<!--

[[quick-start|Let's begin! ++enter++]]{ .md-button .md-button--primary}

Git: {{ git.short_commit}}

-->
