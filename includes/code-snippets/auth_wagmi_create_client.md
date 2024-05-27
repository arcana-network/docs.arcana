=== "`auth-wagmi` version >= v3.0.0"
    ```js title="wagmi.ts" hl_lines="4-17 25"
    import { http, createConfig } from 'wagmi'
    import { mainnet, sepolia } from 'wagmi/chains'
    import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'
    import { AuthProvider } from '@arcana/auth';
    import { ArcanaConnector } from "@arcana/auth-wagmi"

    let auth: AuthProvider | null;

    if (!auth) {
      auth = new AuthProvider(
        "xar_dev_c2fb7be163754e57d384e24257ea2c8d2a5dd31a"
      );
    }

    export const connector = () => {
      return new ArcanaConnector({auth,})
    };

    export const config = createConfig({
      chains: [mainnet, sepolia],
      connectors: [
        injected(),
        coinbaseWallet({ appName: 'Create Wagmi' }),
        walletConnect({ projectId: import.meta.env.VITE_WC_PROJECT_ID }),
        connector(),
      ],
      transports: {
        [mainnet.id]: http(),
        [sepolia.id]: http(),
      },
    })

    declare module 'wagmi' {
      interface Register {
        config: typeof config
      }
    }
    ```
=== "`auth-wagmi` version >= v2.0.0"

    ```js title="App.js" hl_lines="6 8 19-24 34"
    // Note:  
    // This sample code is for 
    // wagmi versions 1.x.y and auth-wagmi 2.a.b
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
          login: {
            provider: "google",
          },
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
=== "`auth-wagmi` version >= v1.0.0"

    ```js title="App.js" hl_lines="9 10 22-30 39 40"
    // Note:  
    // This sample code is for 
    // wagmi versions 0.x.y and auth-wagmi 1.a.b

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
          login: {
            provider: "google",
          },
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