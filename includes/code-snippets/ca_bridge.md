```ts
const handler = await ca.bridge({
  token: "usdt",
  amount: 10,
  chainID: 137,
});

// Execute the bridge
await handler.exec();

// Simulate the bridge, returns intent data and token info
const response = await handler.simulate();
```