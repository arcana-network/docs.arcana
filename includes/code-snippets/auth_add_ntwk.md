!!! an-warning "Only EVM Chains"

      Apps can programmatically add only the EVM-compatible chains to the preconfigured chain list if not already present.

The `wallet_addEthereumChain` method is specified by [EIP-3085](https://eips.ethereum.org/EIPS/eip-3085).

```ts hl_lines="3"
try {
  await provider.request({
    method: 'wallet_addEthereumChain',
    params: [{
      chainId: '0xABCDEF',
      chainName: 'My Custom Chain',
      rpcUrls: ['...']
    }]
  })
} catch(error) {
  ...
}

// Parameters
// wallet_addEthereumChain accepts a single object parameter, 
// specified by the AddEthereumChainParameter TypeScript interface

interface AddEthereumChainParameter {
  chainId: string; // A 0x-prefixed hexadecimal string
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string; // 2-6 characters long
    decimals: 18;
  };
  rpcUrls: string[];
  blockExplorerUrls?: string[];
}

```
