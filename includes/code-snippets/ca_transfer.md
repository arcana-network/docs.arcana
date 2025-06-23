```ts
const handler = await ca.transfer({
  to: "0x...",
  amount: 5,
  chainID: 10,  //optional, defaults to current chain
  token: "eth",
});

// Execute the transfer
const hash = await handler.exec();

// Simulate the transfer, returns intent data and token info
const response = await handler.simulate();
```