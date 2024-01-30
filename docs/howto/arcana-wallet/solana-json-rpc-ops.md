---
alias: solana-json-rpc-ops
title: 'Solana JSON-RPC Ops'
description: 'Apps that integrate with the Arcana Auth SDK and use Solana chains can perform JSON RPC blockchain operations using the request method'
arcana:
  root_rel_path: ../..
---

# Solana JSON-RPC Operations

Solana chain is a bit different from typical EVM chains in how it [supports Solana JSON-RPC calls](https://docs.solana.com/api/http) and [[solana-wallet-ops|Web3 wallet operations]]. 

First install the {{config.extra.arcana.sdk_name}}, [[integrate-solana-app|integrated the Solana app]] with the SDK and initialize the `auth.provider`. Then issue the JSON-RPC calls. See `getAccounts` call below as an example.

## Get Public Key

```js

const provider = auth.provider;

const publicKey = await provider.request({ 
  method: 'getAccounts', params: [""]
}); 
```

The `publicKey` is returned as a string: ["your-public-key-in-string-format"].