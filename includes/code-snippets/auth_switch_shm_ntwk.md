This method is specified by [EIP-3326](https://eips.ethereum.org/EIPS/eip-3326)

```ts
try {
  await provider.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId: '0x1F91' }], // Decimal 8081 for Shardeum Liberty 2.x Network
  });
} catch(error) {
  ...
}
```

!!! tip "Network Switch Error"

       If the error code (error.code) is 4902, then the requested chain has not been added, and you have to request to add it via `wallet_addEthereumChain`.