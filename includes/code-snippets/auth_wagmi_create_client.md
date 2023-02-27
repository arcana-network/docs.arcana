```js title="auth-wagmi-example/pages/_app.js" hl_lines="8 15-19"
import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import { configureChains, createClient, WagmiConfig } from "wagmi";
import { polygon, mainnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { connectors } from "../utils/wallet";

const { chains, provider } = configureChains(
  [mainnet, polygon],
  [publicProvider()]
);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: connectors(chains),
  provider,
});
...
```
