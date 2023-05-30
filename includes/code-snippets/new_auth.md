```js
//clientId : Arcana Unique App Identifier via Dashboard
const clientId = 'xar_test_445007f942xxxxxxxxxxxxxxxxxx484cAfd2'
const auth = new AuthProvider(`${clientId}`, { //required
  network: 'testnet', //defaults to 'testnet'
  position: 'left', //defaults to right
  theme: 'light', //defaults to dark
  alwaysVisible: false, //defaults to true, wallet always visible
  setWindowProvider: true, //defaults to false, window.ethereum not set
  chainConfig: {
    chainId: '137', //defaults to Ethereum
    rpcUrl: 'https://polygon-rpc.com', //defaults to 'https://rpc.ankr.com/eth'
  },
})
```
