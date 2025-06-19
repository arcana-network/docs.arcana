=== "`main.tsx`"

    ```tsx
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

=== "App.tsx"

    ```tsx

    import "./App.css";
    import { useAccount } from "wagmi";

    import { Account } from "./account";
    import { WalletOptions } from "./wallet-options";

    function ConnectWallet() {
        const { isConnected } = useAccount();
        if (isConnected) return <Account />;
        return <WalletOptions />;
    }

    function App() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 flex">
        <div className=" align-center m-auto min-w-md max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <ConnectWallet />
        </div>
        </div>
    );
    }

    export default App;
    ```

=== "account.tsx"

    ```tsx
    import {
        useAccount,
        useDisconnect,
        useEnsName,
        useSwitchChain,
    // useSendTransaction //DO NOT use from the wagmi SDK
    } from "wagmi";
    import {
        useBalanceModal,
        useSendTransaction, //Note: Use from ca-wagmi SDK
        useWriteContract,
        useUnifiedBalance,
    } from "@arcana/ca-wagmi";

    import { useState } from "react";
    import Decimal from "decimal.js";
    import { erc20Abi } from "viem";

    export function Account() {
        const { sendTransaction } = useSendTransaction();
        const [allLoading, setLoading] = useState(false);
        const { address } = useAccount();
        const { disconnect } = useDisconnect();
        const { data: ensName } = useEnsName({ address });
        const { showModal, hideModal } = useBalanceModal();
        const { loading, getAssetBalance } = useUnifiedBalance();
        if (!loading) {
            console.log({ assetBalance: getAssetBalance("ETH") });
        }
        const { switchChainAsync } = useSwitchChain();
        const { writeContract } = useWriteContract();

        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setLoading(true);
            const form = e.currentTarget;
            try {
                const formData = new FormData(form);

                const toFV = formData.get("to");
                const chainFV = formData.get("chain");
                const assetFV = formData.get("asset");
                const amountFV = formData.get("amount");
                if (!toFV || !chainFV || !assetFV || !amountFV) {
                    throw new Error("missing params");
                }
                const to = toFV as `0x${string}`;
                const chain = Number(chainFV);
                const asset = assetFV as "usdc" | "usdt" | "eth";

                await switchChainAsync({ chainId: chain });

                let amount = new Decimal(amountFV as string);
                if (asset.toLowerCase() === "ETH".toLowerCase()) {
                    amount = amount.mul(new Decimal(10).pow(18));
                    const value = BigInt(amount.toString());
                    sendTransaction(
                        {
                            to,
                            value,
                        },
                        {
                            onSuccess(hash) {
                                createSuccessToast(chain, hash);
                                form.reset();
                                setLoading(false);
                                console.log("success");
                            },
                            onSettled() {
                                console.log("settled");
                            },
                            onError(error) {
                                console.log({ error });
                                form.reset();
                                setLoading(false);
                            },
                        }
                    );
                } else {
                    const chainData = chainToCurrency[chain];
                    const s = chainData[asset === "usdc" ? 0 : 1];
                    if (!s) {
                        throw new Error("asset not supported");
                    }
                    writeContract(
                        {
                            address: s,
                            abi: erc20Abi,
                            functionName: "transfer",
                            args: [to, BigInt(amount.mul(new Decimal(10).pow(6)).toString())],
                        },
                        {
                            onSuccess(hash) {
                                createSuccessToast(chain, hash);
                                form.reset();
                                setLoading(false);
                                console.log("success");
                            },
                            onError(error) {
                                form.reset();
                                setLoading(false);
                                console.log({ error });
                            },
                        }
                    );
                }
            } catch (e) {
                form.reset();
                console.log({ e });
                setLoading(false);
            }
        };

        return (
            <>
                {loading ? (
                    <div>
                        <p>Loading...</p>
                    </div>   
                ) : (
                    <>
                        <p>
                            {address && ensName ? `${ensName} (${address})` : address}
                        </p>
                        <div>
                            <button onClick={() => disconnect()}>
                                Disconnect
                            </button>
                            <button onClick={() => showModal()}> //Display Unified Balance
                                Show balances
                            </button>
                        </div>
                        <div className="mb-4 m-auto"></div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>
                                    To
                                </label>
                                <input
                                    name="to"
                                    type="text"
                                    placeholder="0x..."
                                    required
                                />
                            </div>
                            <div>
                                <label>
                                    Destination Chain
                                </label>
                                <select
                                    required
                                    name="chain"
                                    id="chain"
                                    defaultValue={""}
                                >
                                    <option value="" disabled>
                                        Select a chain
                                    </option>
                                    <option value="42161">Arbitrum One</option>
                                    <option value="59144">Linea</option>
                                    <option value="534352">Scroll</option>
                                    <option value="10">Optimism</option>
                                    <option value="8453">Base</option>
                                    <option value="1">Ethereum</option>
                                    <option value="137">Polygon POS</option>
                                </select>
                            </div>
                            <div>
                                <label>
                                    Asset
                                </label>
                                <select
                                    name="asset"
                                    id="asset"
                                    defaultValue={""}
                                >
                                    <option value="" disabled>
                                        Select an asset
                                    </option>
                                    <option value="usdt">USDT</option>
                                    <option value="usdc">USDC</option>
                                    <option value="eth">ETH</option>
                                </select>
                            </div>
                            <div className="mb-5">
                                <label>
                                    Amount
                                </label>
                                <input
                                    name="amount"
                                    type="text"
                                    id="amount"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={allLoading}
                            >
                                {allLoading ? "Loading..." : "Submit"}
                            </button>
                        </form>
                    </>
                )
            </>
        );
    }      
    ```
=== "utils/config.ts"

    ```ts
    import { http, createConfig } from "wagmi";
    import {
        mainnet,
        optimism,
        base,
        arbitrum,
        scroll,
        linea,
        polygon,
    } from "wagmi/chains";
    import { injected } from "wagmi/connectors";

    export const config = createConfig({
        chains: [mainnet, optimism, arbitrum, base, scroll, linea, polygon],
        connectors: [injected()],
        transports: {
            [mainnet.id]: http(),
            [optimism.id]: http(),
            [arbitrum.id]: http(),
            [base.id]: http(),
            [scroll.id]: http(),
            [linea.id]: http(),
            [polygon.id]: http(),
        },
    });
    ```

=== "wallet-options.ts"

    ```js
    import * as React from "react";
    import { Connector, useConnect } from "wagmi";

    export function WalletOptions() {
        const { connectors, connect } = useConnect();
        console.log({ connectors });
        return (
            <>
            <h3>Wallets</h3>
            <hr></hr>
            {connectors
                .filter((c) => c.id !== "injected")
                    .map((connector) => (
                        <WalletOption
                            key={connector.uid}
                            connector={connector}
                            onClick={() => connect({ connector })}/>
                    ))}
            </>
        );
    }

    function WalletOption({
        connector,
        onClick,
        }: {
        connector: Connector;
        onClick: () => void;
        }) {
        const [ready, setReady] = React.useState(false);

        React.useEffect(() => {
            (async () => {
            const provider = await connector.getProvider();
            setReady(!!provider);
            })();
        }, [connector]);

        return (
            <>
            <div>
                <button
                disabled={!ready}
                type="button"
                onClick={onClick}
                >
                <img
                    src={connector.icon}
                    className="w-4 h-4 me-2 -ms-1 text-[#626890]"
                    aria-hidden="true"
                />
                {connector.name}
                </button>
            </div>
            </>
        );
    }
    ```