```js title="utils/wallet.js" hl_lines="5-6 17-25 32 34 36-39"
//This example uses Arcana Rainbow connector and MetaMask

import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import { metaMaskWallet } from "@rainbow-me/rainbowkit/wallets";
import { getAuthProvider } from "./getArcanaAuth";
import { ArcanaConnector } from "@arcana/auth-wagmi";

import { sequenceLogo } from "./logo";

export const ArcanaRainbowConnector = ({ chains }) => {
  return {
    id: "arcana-auth",
    name: "Login with Email/Social",
    iconUrl: sequenceLogo,
    iconBackground: "#101010",
    createConnector: () => {
      const connector = new ArcanaConnector({
        chains,
        options: {
          auth: getAuthProvider(),
          login: {
            provider: "google",
          }, // Optional, specify login details here or during ArcanaConnector instantiation or in the setLogin function
        }
      });

      ...
      // Custom UI Alternative 
      // Use setLogin function after creating the connector.

      /*
      const auth = new AuthProvider(`${arcana_client_id}`) // Singleton

      ...

      connector.setLogin({
        provider: 'passwordless',
        email: 'abc@example.com' //optional
      })
      */

      return {
        connector
      };
    }
  };
};

const connectors = (chains) =>
  connectorsForWallets([
    {
      groupName: "Recommended",
      wallets: [ArcanaRainbowConnector({ chains }), metaMaskWallet({ chains })]
    }
  ]);

export { connectors };
```
