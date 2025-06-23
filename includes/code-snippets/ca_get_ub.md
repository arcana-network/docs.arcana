```ts
//total chain abstracted unified balance across all chains/tokens
const balances = await ca.getUnifiedBalances();
//total balance for a specific token across all chains 
const usdtBalance = await ca.getUnifiedBalance("usdt");
```