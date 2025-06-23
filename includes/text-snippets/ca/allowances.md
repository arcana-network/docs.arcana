Allowances activate Arcana Network's Chain Abstraction feature. 

Allowances must be set up to enable a chain abstracted transaction that involves multiple source chains. With allowance setup, users can unlock the fragmented liquidity across multiple chains in their EOA. Effectively, this lets the user spend on any destination chain—even with insufficient balance on the destination chain.

By approving allowances for chain abstraction on the source chains, users can:

* Spend anywhere with funds from multiple chains.
* Bypass bridging to enable liquidity on the destination chain.
* Transact seamlessly across chains.
* Setup once, use repeatedly.

As part of allowance setup, users **permit {{config.extra.arcana.company_name}} Vault contracts on the source chains to collect the funds required** to execute the transaction seamlessly on the destination chain. 

Note that the allowance set up transaction itself requires gas fee. This gas fee is payable by the user. In some cases, {{config.extra.arcana.company_name}} may sponsor gas fee for the allowance setup.

By default, the allowance limit for each supported chain is set to `unlimited`. This default setting ensure that all the supported tokens on the chain can be utilized as the unified balance available to spend. The protocol can collect the required funds according to the allowance limit and pay for the chain abstracted transactions on any destination chain. Developers can choose to modify the default allowance limits via the `setOnAllowanceHook`.