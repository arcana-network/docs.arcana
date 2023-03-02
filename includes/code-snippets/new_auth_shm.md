```js
const clientId = '9b74fe1913101eec12b06fb9b8fa579ced8b91f9' // Client ID Example

let provider;
const auth = new AuthProvider(`${clientId}`, {
  network: "testnet",
  alwaysVisible: true,
  position: "right",
  theme: "dark"
});
provider = auth.provider;
```
