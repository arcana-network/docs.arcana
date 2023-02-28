The `wallet_addEthereumChain` method is specified by [EIP-3085](https://eips.ethereum.org/EIPS/eip-3085).

```ts
try {
  await provider.request({
    method: 'wallet_addEthereumChain',
    params: [{
      chainId: '0x1F91',  // Decimal 8081
      chainName: 'Shardeum Liberty 2.X',
      nativeCurrency: {
        name: 'Shardeum',
        symbol: 'SHM',
        decimals: 18,
      }
      rpcUrls: ['https://liberty20.shardeum.org/'],
      blockExplorerUrls: ['https://explorer-liberty20.shardeum.org/']
    }]
  })
} catch(error) {
  ...
}

```
