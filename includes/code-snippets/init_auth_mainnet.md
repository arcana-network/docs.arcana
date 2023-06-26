```js hl_lines="1 3-5"
import {AuthProvider} from "@arcana/auth";

const provider = new AuthProvider(
  "xar_live_d7c88d9b033d100e4200d21a5c4897b896e60063", {  //mainnet Client ID
  // network: 'mainnet',  // optional
  chainConfig: {
    chainId: '137',      // selected chain in the wallet network dropdown UI
    rpcUrl: 'https://polygon-rpc.com/',  // RPC URL of the selected chain in the wallet network dropdown UI
  },
  alwaysVisible: true,
  setWindowProvider: true,
  debug: true,
  position: 'right',
  theme: 'dark',
});
```

<!--
!!! note "`network` parameter"

      As of release v1.0.4 of the {{config.extra.arcana.sdk_name}}, it is not required to set the `network` parameter anymore.  Depending on which {{config.extra.arcana.app_address}} is specified (Testnet ID, Mainnet ID), the appropriate network is selected automatically.

-->