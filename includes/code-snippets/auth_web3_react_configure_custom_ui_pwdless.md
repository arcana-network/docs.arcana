```js title="example/connectors/arcanaWallet.ts" hl_lines="2-3 68 10 13 24 29"
//custom ui onboarding - passwordless
import { ArcanaConnector } from "@arcana/auth-web3-react"
import { AuthProvider } from "@arcana/auth"
import { initializeConnector } from "@web3-react/core"

const auth = new AuthProvider(`${arcana_client_id}`) // Singleton

export const [authConnect, hooks] = initializeConnector(
  (actions) =>
    new ArcanaConnector(auth, {
      actions,
      login: {
        provider: 'passwordless',
        email: 'abc@example.com'
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

authConnect.setLogin({ provider: 'passwordless', email: 'abc@example.com' })

*/
...
```