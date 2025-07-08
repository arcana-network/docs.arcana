[[concept-ca|Chain abstraction]] lets users spend *a single token type (like USDT)* across source chains using a [[concept-unified-balance|unified balance]]. They can then use that balance on any destination chain—still as USDT.

Cross-chain Chain Abstraction (CCA) takes it further. Users can now *combine multiple token types (like USDT, USDC)* into one unified balance across chains—and spend it as any supported token (USDT, USDC, etc.) on any destination chain.

The cross-chain chain abstraction is atomic in nature. It involves multiple source chains and token types and batches transactions. If any one sub-transaction fails, the entire cross-chain transaction fails.

There are no overheads for cross-chain CA transactions. These may be marginally faster than the basic chain abstracted transactions (single token type).

??? an-note "Pectra Support"

    By default, Cross-Chain Abstraction (CCA) kicks in automatically for transactions between source chains that support Pectra.

    If any source chain doesn’t support Pectra, the SDK falls back to basic chain abstraction. This means users can use unified token balance to spend only a single unified token type from the source chains.

    The SDK smartly picks between CCA and base chain abstraction based on the source chains in the transaction and their Pectra support. No extra setup is needed by Web3 apps or users.

??? an-tip "About Refunds"

    If a cross-chain CA transaction fails, the user gets a refund equal to the total deposits collected from their EOA across all source chains.

    Even if the deposits involved multiple token types, the refund is always in USDC.