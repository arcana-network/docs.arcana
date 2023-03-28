```js title="auth-wagmi-example/utils/wagmi_client.ts" hl_lines="1 6-13"

import { ArcanaConnector } from "@arcana/auth-wagmi";
import { polygon, polygonMumbai } from "wagmi/chains";
import { configureChains, createClient, Chain } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

export const connector = (chains: Chain[]) => {
  return new ArcanaConnector({
    chains,
    options: {
      clientId: `xar_live_d7c88d9b033d100e4200d21a5c4897b896e60063`,
    },
  });
};
...
```
