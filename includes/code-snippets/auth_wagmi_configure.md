```js title="auth-wagmi-example/utils/wagmi_client.ts" hl_lines="5 7-25 28-33"
//This example shows both MetaMask and Arcana Wallet as RainbowKit wallet options
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import { metaMaskWallet } from "@rainbow-me/rainbowkit/wallets";

import { ArcanaConnector } from "@arcana/auth-wagmi";

export const ArcanaRainbowConnector = ({ chains }) => {
  return {
    id: "arcana-auth",
    name: "Arcana Wallet",
    iconUrl: "",
    iconBackground: "#101010",
    createConnector: () => {
      const connector = new ArcanaConnector({
        chains,
        options: {
          //clientId : Arcana Unique App Identifier via Dashboard
          clientId: "xar_test_b2dde12aad64eb35d72b2c80926338e178b1fa3f",
        },
      });
      return {
        connector,
      };
    },
  };
};

const connectors = (chains) =>
  connectorsForWallets([
    {
      groupName: "Recommended",
      wallets: [ArcanaRainbowConnector({ chains }), metaMaskWallet({ chains })],
    },
  ]);

export { connectors };
```
