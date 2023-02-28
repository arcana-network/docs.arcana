```js
//clientId : Arcana Unique App Identifier via Dashboard
const clientId = 'xar_test_445007f942f9Ba718953094BbeeeeeB9484cAfd2'
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
