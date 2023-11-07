=== "`auth-wagmi` version < v2.0.0"

    ```js title="pages/App.js" hl_lines="12 20"

    // Note:  
    // This sample code is for 
    // wagmi versions <1.x.x and auth-wagmi <2.0.0

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

    const wagmiEntity = createClient({
      connectors: connectors(chains),
      autoConnect: true,
      provider,
    });
    ...
    ```

=== "`auth-wagmi` version > v2.0.0"

    ```js title="pages/App.js" hl_lines="8 12"
    // Note:  
    // This sample code is for 
    // wagmi versions 1.x.x and auth-wagmi 2.0.0

    import { configureChains, createConfig, WagmiConfig } from "wagmi";
    import { polygon, mainnet, optimism, arbitrum } from "wagmi/chains";
    import { publicProvider } from "wagmi/providers/public";
    import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
    import { connectors } from "./wallet";
    import { useAccount, useConnect } from 'wagmi'
    import { Connect } from "./Connect";

    const { chains, publicClient } = configureChains(
      [mainnet, polygon, optimism, arbitrum],
      [publicProvider()]
    );

    const wagmiEntity = createConfig({
      connectors: connectors(chains),
      autoConnect: true,
      publicClient,
    });
    ...

    ```
