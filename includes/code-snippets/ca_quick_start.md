```ts 
/* File: main.tsx */

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "./config";
import { CAProvider } from "@arcana/ca-wagmi";
import { CA } from "@arcana/ca-sdk";
import { App } from "./App";

const ca = new CA();
const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <CAProvider client={ca}>
          <App />
        </CAProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
```