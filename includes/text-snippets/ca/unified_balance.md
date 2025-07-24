Unified balance shows the total liquidity in a user's EOA account across multiple chains and tokens.

Chain abstraction lets users spend available liquidity on any destination chain. No bridges or pre-provisioned gas are needed. All cross-chain complexity is handled behind the scenes. Users approve just once for a seamless experience.

**Unified Balance Levels**

Balance unification works at two levels, depending on chain and token support:
- **Baseline Chain Cbstraction (CA):** Combines a single token type from source chains. Users spend the unified balance of that token on any destination chain.
- **Cross-Chain Swap (XCS):** Combines multiple token types from source chains. Users spend as any token on any destination chain. This advanced feature requires chains and tokens to support `permit/EIP-2612`.

!!! an-example "Example"

    | CA |  XCS |
    |:---|:---|
    | User wants to spend **18 USDT** on *Scroll*.| User wants to spend **18 USDC** on *Scroll*.|
    | The wallet balance is:| The wallet balance is:|
    |  | |
    | *Optimism:* 0.1 ETH, 0 USDT, 0 USDC | *Optimism:* 0.1 ETH, 0 USDT, 0 USDC |
    | *Arbitrum:* 0 ETH, 12 USDT, 0 USDC | *Arbitrum:* 0 ETH, 12 USDT, 0 USDC |
    | *Base:* 0 ETH, 10 USDT, 0 USDC | *Base:* 0 ETH, 10 USDT, 0 USDC |
    | *Scroll:* 0 ETH, 0 USDT, 0 USDC | *Scroll:* 0 ETH, 0 USDT, 0 USDC |
    | | |
    | CA allows user to use unified USDT balance on Arbitrum | XCS allows user to use unified USDT balance and 
    | and Base and spend 18 USDT on Scroll. | spend it as USDC on Scroll. |

Both types let users spend assets on any chain, even without prior liquidity on the destination chain. Cross-chain swap also allows combining multiple supported assets across chains, solving liquidity fragmentation.

<figure markdown="span">
  <img alt="With CA" src="{{config.extra.arcana.img_dir}}/ca_unified_balance.{{config.extra.arcana.img_png}}"/>
  <figcaption>Single chain liquidity vs. Unified Balance with Chain Abstraction</figcaption>
</figure>

