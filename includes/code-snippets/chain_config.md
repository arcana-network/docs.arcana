
```js hl_lines="6-9"
const auth = new AuthProvider('xar_test_87f34xxxxxxxxxxxxxxxxxxxxxxxxxxxß7d70143a', {
  network: "testnet", //defaults to 'testnet'
  position: "right", //defaults to right
  theme: "dark", //defaults to dark
  alwaysVisible: true, //defaults to true which is Full UI mode
  chainConfig: {
    chainId: "80001", //defaults to Ethereum 
    rpcUrl: "https://rpc.ankr.com/polygon_mumbai" //defaults to 'https://rpc.ankr.com/eth'
  }
});
```