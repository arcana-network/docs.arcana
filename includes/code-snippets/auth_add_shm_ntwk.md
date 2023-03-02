The `wallet_addEthereumChain` method is specified by [EIP-3085](https://eips.ethereum.org/EIPS/eip-3085).

```ts
try {
  setRequest("wallet_addEthereumChain");
  const response = await provider.request({
    method: "wallet_addEthereumChain",
    params: [
    {
      chainId: "8081",
      chainName: "Shardeum",
      blockExplorerUrls: ["https://explorer-liberty20.shardeum.org/"],
      rpcUrls: ["https://liberty20.shardeum.org/"],
      nativeCurrency: {
      symbol: "	SHM"
      }
     }
    ]
  });
  setResult(response);
} catch (e) {
  console.log({ e });
  ...
}

```
