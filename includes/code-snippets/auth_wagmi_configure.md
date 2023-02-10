```js
import { mainnet, optimism, polygon } from '@wagmi/core/chains'
import { ArcanaConnector } from "@arcana/auth-wagmi"

const connector = new ArcanaConnector({
  chains: [mainnet, optimism, polygon],
  options: {
    appId: `${arcana_app_address}`,// appId = App Address
    theme: 'light',            // Defaults to 'dark'
    alwaysVisible: false,      // Defaults to true
    position: 'left'           // Defaults to 'right'
  },
})
```
