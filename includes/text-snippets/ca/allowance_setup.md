Users of the {{config.extra.arcana.company_name}} CA wallet
have two allowance setup choices that differ by:

* Which chains are included for chain abstraction allowance setup?
* Who pays the gas fees for the allowance transaction?

|Option|Chains included|ETH Balance Required|User Pays Gas Fee|Arcana Pays Gas Fee|
|:---|:--- |:---|:---|:---|
|1.|Ethereum Mainnet + Avalanche + L2 chains|Yes|`$1`-`$5` (as per current Ethereum Mainnet gas price)| Avalanche + L2 only|
|2.|Avalanche + L2 chains|No|Nothing|All gas sponsored|
|3.|Avalanche + L2 chains + BSC|No|Nothing|All gas sponsored^*^|

^*^ For BSC chain, the gas fee for the allowance setup transaction is capped at $0.05. If gas fees are high, the allowance setup transaction may fail.
