Unified balance shows all the liquidity in a user's EOA account across multiple chains in one view. It lets users transact seamlessly on any chain without needing bridges or pre-provisioning gas for token swaps. Chain abstraction handles all the complexity involved in a cross-chain transaction while enabling better UX through a single intent approval.

For instance, let us take the case where a user intends to spend 18 USDC on Scroll and does not have any balance on Scroll. On other source chains there is fragmented liquidity in USDT tokens
to fund this transaction.

* Optimism: 0.1 ETH, O USDT, 0 USDC
* Arbitrum: 0 ETH, 12 USDT, 0 USDC
* Base: 0 ETH, 10 USDT, 0 USDC
* Scroll: 0 ETH, 0 USDT, 0 USDC

To spend 18 USDC on Scroll (destination chain) with the given liquidity fragmentation, it would typically require multiple clicks and steps for swapping or bridging different assets available on the source chains, so that user can convert the assets to the desired token balance on Scroll. 

Through chain abstraction and the enhanced [[concept-xcs|ability to swap cross-chain]], users have the convenience to view the consolidated token balance across supported tokens and chains. This simplifies the process of sending 18 USDC on Scroll, as users can sign the intent without the need for bridging, swapping, or considering the optimal routes. 

<figure markdown="span">
  <img alt="With CA" src="{{config.extra.arcana.img_dir}}/ca_unified_balance.{{config.extra.arcana.img_png}}"/>
  <figcaption>Single chain liquidity vs. Unified Balance with Chain Abstraction</figcaption>
</figure>

