Unified balance shows the total liquidity in a user's EOA account. It
combines the token balance across multiple chains. This lets users spend 
the available liquidity on any destination chain via chain
abstracted transactions. 

No bridges or pre-provisioned gas are needed. All cross-chain complexity is handled behind the scenes. Users approve their intent to spend just once for a seamless experience.

!!! an-example "Example"

    Consider a wallet balance:
      
    - *Optimism:* 0.1 ETH, 0 USDT, 0 USDC 
    - *Arbitrum:* 0 ETH, 12 USDT, 0 USDC 
    - *Base:* 0 ETH, 10 USDT, 0 USDC 
    - *Scroll:* 0 ETH, 0 USDT, 0 USDC 

    With no unified balance or chain abstraction, user *cannot spend any USDT on Scroll* unless
    they use a bridge to convert tokens.

    With basic unified balance and chain abstracted transaction, user **can spend 18 USDT on Scroll**.

    | Intent | No Unified Balance / CA | Unified Balance  | 
    |:---|:---|:---| 
    | Spend 18 **USDT** on Scroll | ❌ | ✅ | 

<figure markdown="span">
  <img alt="With CA" src="{{config.extra.arcana.img_dir}}/ca_unified_balance.{{config.extra.arcana.img_png}}"/>
  <figcaption>Basic Unified Balance with Chain Abstraction</figcaption>
</figure>

**Cross Chain Swap (XCS)**

Balance unification works at two levels, depending upon whether single token type is combined from source chains or can multiple token types be combined from source chains. The capability is subject to whether the chain and tokens supports `permit/EIP-2612':

* Unified Balance (Basic)
* Unified Balance with Cross-Chain Swap (XCS)

{% include "./text-snippets/ca/xcs_feature.md" %}




