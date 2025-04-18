{{config.extra.arcana.company_name}}'s [[concept-ca|Chain Abstraction (CA)]] protocol manages balances across multiple chains and tokens in Web3 apps. It solves liquidity fragmentation by enabling a unified balance across supported chains. The {{config.extra.arcana.company_name}} Vault smart contracts on each supported chain and the solver ecosystem are two key parts of the {{config.extra.arcana.company_name}} CA protocol. There’s no auction; it’s a first-come, first-served system where the first solver to accept an intent gets to fulfill it.

The user's EOA state and intents are managed across multiple chains. Approved intents are published for 'solvers' to fulfill. Solvers compete to fulfill these intents and provide liquidity on the destination chain. The protocol handles state transitions and settles solver payments using transaction netting.

<figure markdown="span">
  <img alt="How {{config.extra.arcana.company_name}} CA works" src="{{config.extra.arcana.img_dir}}/an_ca_how_it_works.{{config.extra.arcana.img_png}}" class="an_screenshots width_85pc"/>
  <figcaption>How {{config.extra.arcana.company_name}} CA Works</figcaption>
</figure>