```js
const clientId = 'xar_test_445007f942f9Ba718953094BbeeeeeB9484cAfd2' // Client ID Example

const auth = new AuthProvider(`${clientId}`, {
  position: 'left', // defaults to right
  theme: 'light', // defaults to dark
  alwaysVisible: false, // defaults to true which is Full UI mode
  chainConfig: {
    chainId: '8081', //Shardeum Liberty 2.X chain ID
    rpcUrl: 'https://liberty20.shardeum.org/', //Shardeum Liberty 2.X RPC URL
  },
})
```
