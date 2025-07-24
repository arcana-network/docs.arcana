The Arcana chain abstraction protocol has evolved to a cross-chain swap
enabled unified balance.

**Basic Unified Balance**

- Users could combine the same token type (for example, USDT) held across
  multiple source chains into a single, unified balance.
- This allowed spending that token on any destination chain.
- **Limitation:** Users could only use the unified balance of a single
  token type. If they lacked enough of that token on all the source
  chains combined, or had no liquidity on the destination chain, they
  could not complete the transaction.

**Unified Balance with Cross-Chain Swap (XCS)**

- The new improved unified balance approach allows cross-chain swaps. 
- Users can now spend any supported token (for example, USDT, USDC) from 
  any supported source chain to pay on any destination chain.
- The protocol automatically combines multiple token types and 
  sources to fulfill the transaction, even if the user lacks
  sufficient balance in a single token or on the destination chain.
- This significantly increases the available liquidity and flexibility,
  enabling larger transactions and covers gas fee.
- This advanced feature requires chains and tokens to support `permit/EIP-2612`. 
- The chain abstraction protocol falls back to the basic unified balance if the chains
  and tokens do not support `permit/EIP-2612`.

!!! an-example "Example"

    Consider a wallet balance:
      
    - *Optimism:* 0.1 ETH, 0 USDT, 0 USDC 
    - *Arbitrum:* 0 ETH, 12 USDT, 0 USDC 
    - *Base:* 0 ETH, 10 USDT, 0 USDC 
    - *Scroll:* 0 ETH, 0 USDT, 0 USDC 

    With no unified balance or chain abstraction, user cannot spend any USDT on Scroll unless
    they use a bridge to convert tokens.

    With basic unified balance and chain abstracted transaction, user can spend 18 USDT on Scroll.
    XCS feature lets user spend 18 USDC on Scroll which is not possible with basic unified balance.

    | Intent | No Unified Balance / CA | Unified Balance  |  Unified Balance + XCS |
    |:---|:---|:---|:--- | 
    | Spend 18 **USDT** on Scroll | ❌ | ✅ | ✅ |
    | Spend 18 **USDC** on Scroll | ❌ | ❌ | ✅ |

<figure markdown="span">
    ![Intent Explorer]({{config.extra.arcana.img_dir}}/an_ca_xcs_feature.{{config.extra.arcana.img_png}}){ .an-screenshots }
    <figcaption>Unified Balance with Cross-Chain Swap</figcaption>
</figure>