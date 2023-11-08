```js hl_lines="2"
const auth = new AuthProvider(
  "xar_test_445007f942xxxxxxxxxxxxxxxxxx484cAfd2", // App client ID
  { 
    position: 'left',         // default: right
    theme: 'light',           // default: dark
    alwaysVisible: false,     // default: true, wallet always visible
    setWindowProvider: true,  // default: false, window.ethereum not set
    connectOptions: {
      compact: true           // default: false, regular plug-and-play login UI
    },
    chainConfig: {
      chainId: '137',                    // defaults to Ethereum
      rpcUrl: 'https://polygon-rpc.com', // defaults to 'https://rpc.ankr.com/eth'
    },
})
```
