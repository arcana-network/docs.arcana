The Arcana chain abstraction protocol has evolved to a cross-chain swap
enabled unified balance.

**Unified Balance**

- Users could combine the same token type (e.g., USDT) held across
  multiple source chains into a single, unified balance.
- This allowed spending that token on any destination chain.
- **Limitation:** Users could only use the unified balance of a single
  token type. If they lacked enough of that token on all the source
  chains combined, or had no liquidity on the destination chain, they
  could not complete the transaction.

??? an-example "Example"

    User wallet balance: 
    0 USDT on Scroll, 
    0.25 USDC and 0.5 USDT on Arbitrum
    0.75 USDT on Base

    To spend 0.8 USDT on Scroll is not possible considering balance
    on Scroll.

    Unified balance (Arbitrum + Base) allows the chain
    abstracted transaction, but only with USDT.
    
    User cannot make a larger transaction, say 1.0 USDT and also
    utilize the 0.25 USDC available on Arbitrum.

**Unified Balance + XCS**

- The new improved unified balance approach allows cross-chain swaps. 
- Users can now spend any supported token (e.g., USDT, USDC) from 
  any supported source chain to pay on any destination chain.
- The protocol automatically combines multiple token types and 
  sources to fulfill the transaction, even if the user lacks
  sufficient balance in a single token or on the destination chain.
- This significantly increases the available liquidity and flexibility,
  enabling larger transactions and covers gas fee.

??? an-example "Example"

    User wallet balance: 
    0 USDT on Scroll, 
    0.25 USDC and 0.5 USDT on Arbitrum
    0.75 USDT on Base

    To spend 1.0 USDT on Scroll is not possible considering balance
    on Scroll.

    Unified balance (Arbitrum + Base, USDT+USDC) allows the chain
    abstracted transaction.

<figure markdown="span">
    ![Intent Explorer]({{config.extra.arcana.img_dir}}/an_ca_xcs_feature.{{config.extra.arcana.img_png}}){ .an-screenshots }
    <figcaption>Unified Balance with Cross-Chain Swap</figcaption>
</figure>