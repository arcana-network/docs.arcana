This method is specified by [EIP-3326](https://eips.ethereum.org/EIPS/eip-3326).

!!! an-warning "Chain Switching"

      Apps can programmatically switch to another chain as long as it is of the same chain type. If an app is configured to use EVM chains, you cannot switch to a non-EVM chain and vice-versa.

```ts hl_lines="3"
try {
  await provider.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId: '0xf00' }],
  });
} catch(error) {
  ...
}

interface SwitchEthereumChainParameter {
  chainId: string; // A 0x-prefixed hexadecimal string
}
```

!!! an-tip "Network Switch Error"

       If the error code (error.code) is 4902, then the requested chain has not been added, and you have to request to add it via `wallet_addEthereumChain`.