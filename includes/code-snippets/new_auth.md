```js
const clientId = '445007f942f9Ba718953094BbeeeeeB9484cAfd2' //get clientId via Arcana Dashboard
const auth = new AuthProvider(`${clientId}`, { //required
  network: 'testnet', //defaults to 'testnet'
  position: 'left', //defaults to right
  theme: 'light', //defaults to dark
  alwaysVisible: false, //defaults to true which is Full UI mode
  chainConfig: {
    chainId: CHAIN.POLYGON_MAINNET, //defaults to CHAIN.ETHEREUM_MAINNET
    rpcUrl: 'https://polygon-rpc.com', //defaults to 'https://rpc.ankr.com/eth'
  },
})
```
