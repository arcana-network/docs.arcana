Managing multiple chains, tokens, and accounts fragments wallet liquidity for Web3 users. Even with enough assets overall, funds scattered across chains make transacting difficult and require complex, time-consuming conversions.

Chain abstraction lets users access a [[concept-unified-balance|unified balance]] across all wallet-linked chains, enabling transactions anywhere. Instead of converting funds first, users specify a [[concept-intent|clear intent]]. The protocol collects funds from source chains, shows intent and fees for confirmation, then publishes the intent to solvers. Solvers compete to provide liquidity on the destination chain, and once available, users confirm the transaction. Settlement with solvers happens asynchronously using the collected funds.

As part of setup, devs configure [[concept-allowances|allowances]] per chain and token. Users approve or reject these allowances. For [[ca-stack#tokens|supported tokens]] on [[ca-stack#chains|source chains]], the protocol uses these allowances to deposit required funds for transactions on the destination chain.

<figure markdown="span">
  <img alt="With CA" src="{{config.extra.arcana.img_dir}}/an_ca_landing.{{config.extra.arcana.img_png}}"/>
  <figcaption>{{config.extra.arcana.company_name}}'s Chain Abstraction</figcaption>
</figure>

## Why Chain Abstraction?

Chain abstraction enables unified balance to simplify and streamline Web3 transactions. It offers: 

* **Faster Intent Processing:** Enables quick and seamless transaction execution across chains.
* **Unified Liquidity:** Provides a consolidated view of user assets across wallet-linked chains with no asset bridging.
* **Simplified UX:** Removes multi-step hurdles for a seamless experience, making transactions easy for all users.
* **Streamlined DX:** Developers can add unified balances to dApps with minimal changes and no smart contract updates for new chains.
