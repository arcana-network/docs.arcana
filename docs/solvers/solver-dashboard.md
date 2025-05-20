---
alias: solver-dashboard-ug
title: 'Solver Dashboard'
description: 'Solvers can use the Arcana Solver Dashboard to view the solvers associated with the EOA, configure chain abstraction solver routes, fees and thresholds, view fees earned and earnings charts.'
arcana:
  root_rel_path: ..
---

# Solver Dashboard

Solvers play a key role in enabling the users to spend any asset on any
destination chain.

A [[concept-solver| solver]] is a third-party market maker that runs the
{{config.extra.arcana.company_name}} provided solver executable. Only a permitted
set of solvers can interact with the {{config.extra.arcana.company_name}} chain
abstraction (CA) protocol. The protocol converts user intents into requests for
funds (RFF). It publishes these requests on a specified channel. Solvers
watch the channel for new requests. They compete to provide the desired
liquidity and fulfill each request.

The Solver Dashboard lets the Solver Admin manage their service. They can:

{% include "./text-snippets/solver_actions.md" %}

## Prerequisites

To access the Solver Dashboard, third party solvers must register with the
{{config.extra.arcana.company_name}} protocol and provide an EOA wallet address.

In addition, solvers must get the solver executable from
{{config.extra.arcana.company_name}}. They must set up the executable on a 
server. Once running, they can take part in the protocol. 

## Connect Wallet

To access the dashboard, visit https://solver-dashboard.netlify.app/. Connect 
using the same EOA wallet address that you used to set up the solver executable. 
[Learn more...](https://arcananetwork.notion.site/Solver-Setup-Guide-15af11ed08048064839ed576751386f3)

Sign the message and confirm wallet connection. The dashboard landing page will 
appear.

<figure markdown="span">
    <img alt="Solver Dashbaord" class="an-screenshots " src="{{config.extra.arcana.img_dir}}/solver_db_login.{{config.extra.arcana.img_png}}"/>
    <figcaption>Solver Dashboard</figcaption>
</figure>

### EOA Addresses

Look at the top right of the landing page. You will see two types of addresses:
EVM and non-EVM chain addresses. These addresses belong to your solver admin 
account.

<figure markdown="span">
    <img alt="Solver EOA Addresses" class="an-screenshots " src="{{config.extra.arcana.img_dir}}/solver_db_eoa_addr.{{config.extra.arcana.img_png}}"/>
    <figcaption>Solver EOA Addresses</figcaption>
</figure>

### Select Solver

There can be one or more solvers configured to run using the same wallet account. You can view the solvers associated with the wallet account on the top right. If there are multiple solvers, make sure you select the one you need to view or configure.

The landing page shows the settings and usage data for the selected solver.

<figure markdown="span">
    <img alt="Solver Selection" class="an-screenshots " src="{{config.extra.arcana.img_dir}}/solver_db_solverinfo.{{config.extra.arcana.img_png}}"/>
    <figcaption>Solver Selection</figcaption>
</figure>

## Wallet Balances

Refer to the left hand navigation panel. The *Wallet Balance* screen shows all 
routes for the selected solver.

### Available Liquidity

The wallet balance screen shows each available liquidity in terms of total unified
balance across all chains and tokens. It also shows liquidity available per chain
in the wallet.

### Total Balance

You will see the total balance for your connected wallet on the top right of the
wallet balance screen.

### Chain Thresholds

The Wallet Balances screen shows all chains configured for your solver. For each 
chain, you can see the current token thresholds.

* Token
* Balance
* Threshold

You can filter these details by chain or token type. The dashboard allows you to 
edit the token threshold for the chains.

<figure markdown="span">
    <img alt="Token Threshold" class="an-screenshots " src="{{config.extra.arcana.img_dir}}/solver_db_threshold.{{config.extra.arcana.img_png}}"/>
    <figcaption>Token Threshold</figcaption>
</figure>


## Fees

Solver setup includes configuring fees for each specified route serviced 
by the solver for providing the liquidity to {{config.extra.arcana.company_name}}
protocol users. Each route is comprised of the following fields:

* Source Chain
* Destination Chain
* Token
* Fees

Go to the left side navigation panel. Click on *Fees* to view and edit the fees
configured for each route and the earnings data per route.

<figure markdown="span">
    <img alt="Solver Fees" class="an-screenshots " src="{{config.extra.arcana.img_dir}}/solver_db_fees.{{config.extra.arcana.img_png}}"/>
    <figcaption>Solver Fees</figcaption>
</figure>

### Filters

You can filter the fees using these fields:

* Source chain
* Destination chain

The *Fees* field on the right is editable and solvers can change them as needed.
The protocol uses the fees you set in the dashboard. When a user creates an intent, 
the protocol shows these fees to them when building the request for funds. 
This ensures transparency in the process.

<figure markdown="span">
    <img alt="Solver Route Filters" class="an-screenshots " src="{{config.extra.arcana.img_dir}}/solver_db_filters.{{config.extra.arcana.img_png}}"/>
    <figcaption>Solver Route Filters</figcaption>
</figure>

### Route Earnings

You can see the earnings for each route next to the fees field. A miniature 
earnings chart appears next to it.

<figure markdown="span">
    <img alt="Solver Earnings" class="an-screenshots " src="{{config.extra.arcana.img_dir}}/solver_db_earnings.{{config.extra.arcana.img_png}}"/>
    <figcaption>Solver Earnings</figcaption>
</figure>

## Earnings Chart

Find the chart icon next to the earnings field. Click it to see a historical 
view of earnings for that route.

<figure markdown="span">
    <img alt="Earnings Chart" class="an-screenshots " src="{{config.extra.arcana.img_dir}}/solver_db_earnings_details.{{config.extra.arcana.img_png}}"/>
    <figcaption>Earnings Chart</figcaption>
</figure>

## Disconnect

Click on the account icon in the top right corner to display the solver 
selection drop down menu. Select 'log out' to disconnect your wallet from the 
Solver Dashboard.