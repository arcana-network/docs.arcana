```js
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { polygon, mainnet } from "@wagmi/core/chains";
import { publicProvider } from "wagmi/providers/public";
import { ArcanaConnector } from "@arcana/auth-wagmi"

const connector = new ArcanaConnector({
  chains: [mainnet, optimism, polygon],
  options: {
    appId: `${arcana_app_address}`, // appId = Client ID from Arcana Dashboard
    theme: 'light',            // Defaults to 'dark'
    alwaysVisible: false,      // Defaults to true
    position: 'left'           // Defaults to 'right'
  },
})

const { chains, provider } = configureChains(
  [mainnet, polygon],
  [publicProvider()]
);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: connector(chains),
  provider,
});
```
