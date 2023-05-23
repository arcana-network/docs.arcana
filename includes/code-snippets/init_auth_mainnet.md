```js hl_lines="1 3-5"
import {AuthProvider, CHAIN} from "@arcana/auth";

const provider = new AuthProvider(
  "d7c88d9b033d100e4200d21a5c4897b896e60063", {  //mainnet Client ID
  network: 'mainnet',  // change it to 'testnet' to use Arcana Testnet
  chainConfig: {
    rpcUrl: 'https://polygon-rpc.com/',  // RPC URL of the selected chain in the wallet network dropdown UI
    chainId: CHAIN.POLYGON_MAINNET,      // selected chain in the wallet network dropdown UI
  },
  alwaysVisible: true,
  setWindowProvider: true,
  debug: true,
  position: 'right',
  theme: 'dark',
});
```