---
alias: solver-dashboard-ug
title: 'Solver Dashboard'
description: 'Solvers can use the Arcana Solver Dashboard to view the solvers associated with the EOA, configure chain abstraction solver routes, fees and thresholds, view fees earned and earnings charts.'
arcana:
  root_rel_path: ..
---

# Solver Dashboard

Solvers play a key role in enabling the users to spend any asset on any
destination chain. A [[concept-solver| solver]] is a third-party market
maker that runs the {{config.extra.arcana.company_name}} provided solver
executable. 

Only a permitted set of solvers can interact with the 
{{config.extra.arcana.company_name}} chain abstraction (CA) protocol.

The protocol converts user intents into requests for funds (RFF). It publishes
these requests on a specified channel. Solvers watch the channel for new
requests. They compete to provide the desired liquidity and fulfill each
request.

The Solver Dashboard allows an administrator to manage one or more solvers.
It allows the admin to perform the following actions:

{% include "./text-snippets/solver_actions.md" %}

## Prerequisites

To access the Solver Dashboard, you need two things:

1. An EOA wallet address
2. Registration with the {{config.extra.arcana.company_name}} protocol

Solver administrators have to set up authorized EOA addresses when
configuring a solver. The same admin address be authorized to 
manage more than one solver. The dashboard displays details in the
context of a single solver at a time.

To run a solver, you need to:

* [[solver-config|Configure the solver]] with the required settings
* Run the executable on a server

Once running, the solver takes part in the {{config.extra.arcana.company_name}}
CA protocol.

## Connect Wallet

To access the dashboard, visit [https://solver.arcana.network/](https://solver.arcana.network/).

Solver administrators must connect the wallet by using the same EOA address
that was registered earlier. Sign the message displayed in the wallet UI
asking for permission to connect to the dashboard and view the landing page.

<figure markdown="span">
    <img alt="Solver Dashbaord" class="an-screenshots " src="{{config.extra.arcana.img_dir}}/solver_db_login.{{config.extra.arcana.img_png}}"/>
    <figcaption>Solver Dashboard</figcaption>
</figure>

### EOA Addresses

The landing page shows:

* EVM and non-EVM addresses for your connected wallet
* A dropdown list of solvers you can manage

<figure markdown="span">
    <img alt="Solver EOA Addresses" class="an-screenshots " src="{{config.extra.arcana.img_dir}}/solver_db_eoa_addr.{{config.extra.arcana.img_png}}"/>
    <figcaption>Solver EOA Addresses</figcaption>
</figure>

### Select Solver

You can manage one or more solvers with your registered EOA account. Select 
the solver you want to view or configure by clicking on the dropdown on the
top right next to the address.

The landing page shows the settings and solver usage data for the selected solver.

<figure markdown="span">
    <img alt="Solver Selection" class="an-screenshots " src="{{config.extra.arcana.img_dir}}/solver_db_solverinfo.{{config.extra.arcana.img_png}}"/>
    <figcaption>Solver Selection</figcaption>
</figure>

## Wallet Balances

Go to the *Wallet Balance* screen in the left navigation panel. Here you can:

* View chains and tokens configured for the solver
* Check balances and thresholds
* Filter by chain or token type

### Total Balance

The top right of the wallet balance screen shows your total balance. This is
the combined liquidity across all chains and tokens in your solver account.

### Chain,Token Balance

Each row displays the token balance for each configured chain and token type.

### Chain,Token Threshold

For each chain, you can view and edit the token thresholds.

<figure markdown="span">
    <img alt="Token Threshold" class="an-screenshots " src="{{config.extra.arcana.img_dir}}/solver_db_threshold.{{config.extra.arcana.img_png}}"/>
    <figcaption>Token Threshold</figcaption>
</figure>

## Fees

Go to the left side navigation panel. Click on *Fees* to view and edit the fees
configured for each route and the earnings data per route.

Configuring fees for each specified route serviced by the solver is part
of the solver setup. This is the fee charged by solver per route for providing
liquidity to {{config.extra.arcana.company_name}} protocol users. 

Each solver route shows the following details:

* Source Chain
* Destination Chain
* Token
* Fees

<figure markdown="span">
    <img alt="Solver Fees" class="an-screenshots " src="{{config.extra.arcana.img_dir}}/solver_db_fees.{{config.extra.arcana.img_png}}"/>
    <figcaption>Solver Fees</figcaption>
</figure>

### Filters

You can filter the fees using these fields:

* Source chain
* Destination chain
* Token

The *Fees* field on the right is editable and solvers can change them as needed.
The protocol uses the fees you set in the dashboard. When a user creates an intent,
the protocol displays fee details including solver fees, when building the 
request for funds ensuring fee transparency.

If the admin modifies the fees via the solver dashboard, the UI submits the
updated fee information to the solver. The solver turns it into a Cosmos transaction
and submits on chain. The updated fee value becomes effective from the next block.

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

### Earnings Chart

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