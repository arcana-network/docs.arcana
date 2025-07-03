The {{config.extra.arcana.company_name}} CA SDKs requires allowances. 

Through allowances, a user permits the use of EOA funds in the source chains.
The protocol uses these funds to pay the gas fee and the transaction amount
on the destination chain.

The default allowance limit set in the CA SDK for each supported chain is `unlimited`.

Developers can change the allowance for each chain abstracted transaction.
They can do this using the `setOnAllowanceHook` hook.

Users can review the chain abstracted transaction details via [[concept-intent|intent]]. 
The intent details list the amounts collected per source chain to transact on the
destination chain. Users can choose to accept or reject a chain abstracted transaction.
They cannot change allowances specified by the developers.

Until a user **permits** allowance, the {{config.extra.arcana.company_name}}
Vault contracts on the source chains cannot collect the user funds.

By approving allowances for chain abstraction on the source chains, users can:

* Spend anywhere with funds from two or more source chains.
* Bypass bridging to enable liquidity on the destination chain.
* Transact on newer chains with zero or insufficient liquidity.

Users must pay a **gas fee to set up the allowance**. This is besides the
gas fee payable for the transaction on the destination chain.

In some cases, {{config.extra.arcana.company_name}} may sponsor this gas fee for
setting up the allowances.