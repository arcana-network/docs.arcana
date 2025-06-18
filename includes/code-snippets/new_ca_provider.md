```js hl_lines="5 6 8 10 17 19"
    import { StrictMode } from "react";
    import { createRoot } from "react-dom/client";
    import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
    import { WagmiProvider } from 'wagmi'
    import { CA } from "@arcana/ca-sdk";
    import { CAProvider } from '@arcana/ca-wagmi'
    import App from "./App.tsx";
    import { config } from "./utils/config";

    const ca = new CA();
    const queryClient = new QueryClient()

    createRoot(document.getElementById("root")!).render(
        <StrictMode>
            <WagmiProvider config={config}>
                <QueryClientProvider client={queryClient}>
                    <CAProvider client={ca}>
                        <App />
                    </CAProvider>
                </QueryClientProvider>
            </WagmiProvider>
        </StrictMode>
    );

```