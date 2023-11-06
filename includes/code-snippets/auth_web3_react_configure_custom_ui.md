```js title="example/connectors/arcanaWallet.ts" hl_lines="2-3 6 8-16 22-27 29"
// custom ui onboarding - google
import { ArcanaConnector } from "@arcana/auth-web3-react"
import { AuthProvider } from "@arcana/auth"
import { initializeConnector } from "@web3-react/core"

const auth = new AuthProvider(`${arcana_client_id}`) // Singleton

export const [authConnect, hooks] = initializeConnector(
  (actions) =>
    new ArcanaConnector(auth, {
      actions,
      login: {
        provider: 'google',
      } // either add here or in setLogin function
    })
)

// Custom UI Alternative 
// Use setLogin function after creating the connector.

/*
export const [authConnect, hooks] = initializeConnector(
  (actions) =>
    new ArcanaConnector(auth, {
      actions,
    })
)

authConnect.setLogin({ provider: 'google' })

*/
...
```