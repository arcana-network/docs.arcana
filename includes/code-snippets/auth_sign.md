```js
async function signMessage() {

  const { sig } = await provider.request({
    method: 'eth_sign',
    params: [
      {
        from, // sender account address
        data: 'some message data',
      },
    ],
  })
  console.log({ sig })
}
```
