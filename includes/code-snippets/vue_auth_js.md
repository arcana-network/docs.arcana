```js
import { AuthProvider } from '@arcana/auth'

let authInstance

export async function getAuthInstance () {
  if (authInstance == null) {
    // Client ID is a required parameter
    // Check SDK Reference Guide for optional parameters
    authInstance = new AuthProvider(process.env.VUE_APP_ARCANA_CLIENT_ID, {
      network: process.env.VUE_APP_ARCANA_NETWORK ?? 'testnet',
      alwaysVisible: true,
      theme: 'light',
      position: 'right'
    })
    await authInstance.init()

    // once auth instance is initialized, you can call Auth SDK functions

    // call plug and play function in the Auth SDK
    await authInstance.connect()

    // check if a user is logged in , check account balance and more...
  }
  return authInstance
}
```