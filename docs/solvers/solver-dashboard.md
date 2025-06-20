---
alias: solver-dashboard-ug
title: 'Solver Dashboard'
description: 'Solvers can use the Arcana Solver Dashboard to view the solvers associated with the EOA, configure chain abstraction solver routes, fees and thresholds, view fees earned and earnings charts.'
arcana:
  root_rel_path: ..
---

# Solver Dashboard

Solver Dashboard helps solver administrators in setting up solver profiles. They
can track and manage solver funds for the configured solver profiles.

??? an-tip "What is a Solver?"

    A [[concept-solver| solver]] is a third-party market maker that runs the
    {{config.extra.arcana.company_name}} provided solver executable. Solvers
    play a key role in the {{config.extra.arcana.company_name}} chain abstraction
    (CA) protocol. They provide liquidity and enable users to spend any asset on
    any destination chain. 

    The protocol converts user intents into requests for funds (RFF). It publishes
    these requests on a specified channel. Only a permitted set of solvers can
    interact with the protocol.

    Solvers watch the channel for new requests. They compete to provide the desired
    liquidity and fulfill user requests.

Solver admins can perform the following actions:

{% include "./text-snippets/solver_actions.md" %}

<figure markdown="span">
    <img alt="Solver Dashbaord" class="an-screenshots " src="{{config.extra.arcana.img_dir}}/solver_db_login.{{config.extra.arcana.img_png}}"/>
    <figcaption>Solver Dashboard</figcaption>
</figure>

## Prerequisites

To access the Solver Dashboard, the solver admin must:

1. Own an EOA, wallet address
2. Register the EOA with the {{config.extra.arcana.company_name}} protocol
3. Make sure the solver is accessible at a URL such as `ws://ip:port/api/v1/admin-api`

!!! an-caution "Running a Solver"

    To run a solver:
    
    * Get the solver executable from {{config.extra.arcana.company_name}}
    * [[solver-config|Configure the solver]] settings
    * Run the executable on a server; it should be accessible via WebSocket 
      `ws:` or WebSocket with TLS `wss:`
      
    Once the executable runs, the solver is active and participates in the 
    {{config.extra.arcana.company_name}} CA protocol. **The solver admin will
    require the `wss` URL to set up and manage the solver profile in the solver 
    dashboard.**

## Connect Wallet

To access the dashboard, visit [https://solver.arcana.network/](https://solver.arcana.network/).

At the initial access, the admin must set up a solver profile by specifying:

* Solver name
* Solver URL

### Solver URL

Solver URL refers to the WebSocket communication channel specified as:
 `wss://ip:port/api/v1/admin-api` or `ws://ip:port/api/v1/admin-api`

<figure markdown="span">
    <img alt="Solver URL" class="an-screenshots " src="{{config.extra.arcana.img_dir}}/solver_db_url.{{config.extra.arcana.img_png}}"/>
    <figcaption>Solver Profiles</figcaption>
</figure>

Next, solver admins must use a registered EOA to connect the wallet to the solver 
dashboard and log in.

<figure markdown="span">
    <img alt="Solver Dashbaord" class="an-screenshots " src="{{config.extra.arcana.img_dir}}/solver_db_connect.{{config.extra.arcana.img_png}}"/>
    <figcaption>Connect Wallet</figcaption>
</figure>

After the wallet connects, the admin can view the total available solver funds. The dashboard also shows thresholds for various supported tokens. Admins can view and configure fees for the supported liquidity routes.

## EOA Addresses

The top RHS on the landing page shows:

* EVM and non-EVM addresses for the connected wallet
* Option to disconnect the wallet

<figure markdown="span">
    <img alt="Solver EOA Addresses" class="an-screenshots " src="{{config.extra.arcana.img_dir}}/solver_db_eoa_addr.{{config.extra.arcana.img_png}}"/>
    <figcaption>Solver EOA Addresses</figcaption>
</figure>

## Select Solver

Manage one or more solvers registered for the EOA account. Choose the solver 
profile via the dropdown list at the top RHS.

The selected solver page shows:

* Wallet balances: total balance, per token balance
* Token threshold setting

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
the protocol displays all fee details, including solver fees. This ensures 
transparency when building the request for funds.

If the admin modifies the fees via the solver dashboard, the solver turns it
into a Cosmos SDK transaction. It submits the transaction on chain. The updated 
fee becomes effective from the next block.

<figure markdown="span">
    <img alt="Solver Route Filters" class="an-screenshots " src="{{config.extra.arcana.img_dir}}/solver_db_filters.{{config.extra.arcana.img_png}}"/>
    <figcaption>Solver Route Filters</figcaption>
</figure>

### Route Earnings

You can see the earnings for each route next to the fees field.

<figure markdown="span">
    <img alt="Solver Earnings" class="an-screenshots " src="{{config.extra.arcana.img_dir}}/solver_db_earnings.{{config.extra.arcana.img_png}}"/>
    <figcaption>Solver Earnings</figcaption>
</figure>

<!---
### Earnings Chart

Find the chart icon next to the earnings field. Click it to see a historical 
view of earnings for that route.

<figure markdown="span">
    <img alt="Earnings Chart" class="an-screenshots " src="{{config.extra.arcana.img_dir}}/solver_db_earnings_details.{{config.extra.arcana.img_png}}"/>
    <figcaption>Earnings Chart</figcaption>
</figure>

NOT IMPLEMENTED YET
--->

## Profile

The solver profile page displays all configured solvers. The connected admin EOA 
manages these solvers. They can edit or delete the configured solver profiles.

<figure markdown="span">
    <img alt="Solver Profile" class="an-screenshots " src="{{config.extra.arcana.img_dir}}/solver_db_profile.{{config.extra.arcana.img_png}}"/>
    <figcaption>Solver Profiles</figcaption>
</figure>

## Disconnect

Click on the account icon in the top right corner. Then select the option to 
disconnect your wallet from the Solver Dashboard.