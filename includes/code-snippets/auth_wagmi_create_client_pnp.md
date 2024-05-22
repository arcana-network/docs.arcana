=== "`auth-wagmi` v3.0.0"

    ```js title="auth-examples/sample-auth-wagmi-2/src/wagmi.ts" hl_lines="8 9 11-17 19-21 29"
    //
    // For apps using Wagmi versions v2.a.b and auth-wagmi v3.x.y
    //
 
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
    ...
    ```

=== "`auth-wagmi` v2.0.0"

    ```js title="auth-examples/sample-auth-wagmi-viem/src/App.js" hl_lines="6 8 19-24"
    //   
    // For apps using Wagmi versions v1.x.y and auth-wagmi v2.a.b
    //
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

=== "`auth-wagmi` v1.0.0"

    ```js title="auth-examples/sample-auth-wagmi/pages/_app.tsx" hl_lines="9 10 22-27"
    //
    // For apps using Wagmi versions  v0.x.y and auth-wagmi  v1.a.b
    //
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