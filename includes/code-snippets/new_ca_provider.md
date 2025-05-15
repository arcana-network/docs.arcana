```js hl_lines="5 7 15 17"
    import { StrictMode } from "react";
    import { createRoot } from "react-dom/client";
    import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
    import { WagmiProvider } from 'wagmi'
    import { CAProvider } from '@arcana/ca-wagmi'
    import App from "./App.tsx";
    import { config } from "./utils/config";

    const queryClient = new QueryClient()

    createRoot(document.getElementById("root")!).render(
        <StrictMode>
            <WagmiProvider config={config}>
                <QueryClientProvider client={queryClient}>
                    <CAProvider>
                        <App />
                    </CAProvider>
                </QueryClientProvider>
            </WagmiProvider>
        </StrictMode>
    );

```