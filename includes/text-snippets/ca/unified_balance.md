Unified balance shows all the liquidity in a user's EOA account across multiple chains in one view. It lets users transact seamlessly on any chain without needing bridges or pre-provisioning gas for token swaps.

For instance, let us take the case where a user has 0 USDC , 4 ETH on Optimism, 10 USDC on Arbitrum, and 15 USDC on Base but intends to send 16 USDC on Optimism. This would typically require multiple clicks and steps including swapping or bridging assets available on the source chains to get the tokens required for spending on the destination chain. With chain abstraction, user can view the unified token balance across Arbitrum, Base and just sign the intent to send 16 USDC on Optimism. 

Chain abstraction handles all the complexity involved in multi-chain transaction while enabling better UX through a single intent approval.

<figure markdown="span">
  <img alt="With CA" src="{{config.extra.arcana.img_dir}}/ca_unified_balance.{{config.extra.arcana.img_png}}"/>
  <figcaption>Single chain liquidity vs. Unified Balance with Chain Abstraction</figcaption>
</figure>