This method is specified by [EIP-3326](https://eips.ethereum.org/EIPS/eip-3326)

```ts
try {
  setRequest("wallet_switchEthereumChain");
  const response = await provider.request({
    method: "wallet_switchEthereumChain",
    params: [
      {
        chainId: "8081"
      }
    ]
  });
  setResult(response);
} catch (e) {
  console.log({ e });
}
```

!!! an-tip "Network Switch Error"

       If the error code (error.code) is 4902, then the requested chain has not been added, and you have to request to add it via `wallet_addEthereumChain`.