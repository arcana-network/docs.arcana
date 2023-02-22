```js title="auth-wagmi-example/utils/wagmi_client.ts" hl_lines="1 2 7-15 19"
import { ArcanaConnector } from "@arcana/auth-wagmi";
import { polygon, polygonMumbai } from "wagmi/chains";
import { configureChains, createClient, Chain } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

export const connector = (chains: Chain[]) => {
  return new ArcanaConnector({
    chains,
    options: { // appId = Client ID from the Arcana Developer Dashboard
      appId: `9e0c6715d9ea7aab73535c8c359d8b45ac2587bc`, 
      theme: 'light',            // optional; Defaults to 'dark'
      alwaysVisible: false,      // optional; Defaults to true
      position: 'left'           // optional; Defaults to 'right'
    },
  });
};

const { chains, provider } = configureChains(
  [polygon, polygonMumbai],
  [publicProvider()]
);
```
