!!! an-tip "Using Transfer vs. Request"

    |*Send to EOA*|*Send ERC20 Tokens / Deposit to SC*
    |:---|:---|
    |Use chain abstraction enabled `transfer` method.|Get CA enabled EIP-1193 provider with `getEVMProviderWithCA`. Use it to issue `request` calls with `eth_sendTransaction` operation.|