=== "`auth-wagmi` version < v2.0.0"

    ```js title="App.js" hl_lines="9 10 22-27"
    // Note:  
    // This sample code is for 
    // wagmi versions <1.x.x and auth-wagmi <2.0.0

    import { WagmiConfig, configureChains, createClient, Chain } from "wagmi";
    import { goerli, mainnet, polygon, polygonMumbai } from "wagmi/chains";
    import { InjectedConnector } from "wagmi/connectors/injected";
    import { publicProvider } from "wagmi/providers/public";
    import { ArcanaConnector } from "@arcana/auth-wagmi";
    import { newAuthProvider } from "../utils/newArcanaAuth";

    import "../styles/globals.css";
    import type { AppProps } from "next/app";

    const { chains, provider, webSocketProvider } = configureChains(
      [mainnet, goerli, polygon, polygonMumbai],
      [publicProvider()],
      { targetQuorum: 1 }
    );

    const connectors = [
      new ArcanaConnector({
        chains,
        options: {
          auth: newAuthProvider(),
        },
      }),
      new InjectedConnector({
        chains,
        options: {
          name: "Browser Wallet",
          shimDisconnect: true,
        },
      }),
    ];

    const wagmiEntity = createClient({
      autoConnect: true,
      connectors,
      provider,
      webSocketProvider,
    });
    ...
    ```

=== "`auth-wagmi` version > v2.0.0"

    ```js title="App.js" hl_lines="6 8 19-24"
    // Note:  
    // This sample code is for 
    // wagmi versions 1.x.x and auth-wagmi 2.0.0
    import { configureChains, createConfig, WagmiConfig } from "wagmi";
    import { publicProvider } from "wagmi/providers/public";
    import { ArcanaConnector } from "@arcana/auth-wagmi";
    import { polygon, polygonMumbai } from "wagmi/chains";
    import { newAuthProvider } from "./utils/newArcanaAuth";
    import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi'
    import "../styles/globals.css";

    const { chains, provider, webSocketProvider } = configureChains(
      [mainnet, polygon, polygonMumbai],
      [publicProvider()],
      { targetQuorum: 1 }
    );

    export const connector = (chains: Chain[]) => {
      return new ArcanaConnector({
        chains,
        options: {
          auth: newAuthProvider(),
        },
      });
    };

    const { chains, publicClient } = configureChains(
      [polygon, polygonMumbai],
      [publicProvider()]
    );

    export const wagmiEntity = createConfig({
      autoConnect: true,
      connectors: [connector(chains)],
      publicClient,
    });
    ...
    ```