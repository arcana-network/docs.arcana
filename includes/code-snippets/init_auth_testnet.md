```js hl_lines="1 3-5"
import {AuthProvider, CHAIN} from "@arcana/auth";

const provider = new AuthProvider(
  "87f34a9c7879cd4b726ba36a99e164837d70143a", {  // testnet Client ID
  network: 'testnet',  //change it to 'mainnet' to use Arcana Mainnet
  chainConfig: {
    rpcUrl: 'https://rpc-mumbai.maticcvigil.com',  // RPC URL of the selected chain in the wallet network dropdown UI
    chainId: CHAIN.POLYGON_MUMBAI_TESTNET,      // selected chain in the wallet network dropdown UI
  },
  alwaysVisible: true,
  debug: true,
  position: 'right',
  theme: 'dark',
});
```