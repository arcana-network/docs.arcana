---
alias: ca-faq
title: 'CA FAQ'
description: 'Frequently Asked Questions about the Arcana CA SDK.'
arcana:
  root_rel_path: ..
---


??? an-faq "How do I fix the polyfilling issues right after import statement when integrating React and Vite app with the {{config.extra.arcana.ca_sdk_name}}?"

    To fix polyfilling issues, make sure `vite.config.ts` has the polyfilling options configured.

    ```ts
    import { defineConfig, Plugin } from "vite";
    import react from "@vitejs/plugin-react";
    import { nodePolyfills, PolyfillOptions } from "vite-plugin-node-polyfills";
    import tailwindcss from "@tailwindcss/vite";

    const nodePolyfillsFix = (options?: PolyfillOptions | undefined): Plugin => {
    return {
        ...nodePolyfills(options),
        resolveId(source: string) {
        const m =
            /^vite-plugin-node-polyfills\/shims\/(buffer|global|process)$/.exec(
            source
            );
        if (m) {
            return `node_modules/vite-plugin-node-polyfills/shims/${m[1]}/dist/index.cjs`;
        }
        },
    };
    };

    // https://vite.dev/config/
    export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        nodePolyfillsFix({
        include: ["buffer"],
        globals: {
            Buffer: true,
            global: true,
            process: true,
        },
        }),
    ],
    define: {
        "process.env": {},
    },
    });
    ```

??? an-faq "Is there a refund if a chain abstracted transaction fails after funds have been pulled out of the source chains in the user's EOA?"

    For chain abstracted transaction safety, follow these guidelines:
    
    1. **Failed transactions?** *Don't panic* - you'll get your tokens back automatically in the next settlement cycle (usually within 15 minutes but it may take an hour in some cases).
   
    2. **Before transacting:** Always check the transaction details including the gas fee requirements, before issuing a transaction. 
   
    3. **During transacting:** The status of the chain abstracted transaction is displayed in the app's context. Click on 'View Intent' details link and **save** the unique intent identifier associated with the transaction. You'll need the **intent identifier** if something goes wrong.
   
    4. **Track your transaction:** Use the [{{config.extra.arcana.ca_intent_explorer_name}}]({{config.extra.arcana.ca_intent_explorer}}) with your intent ID to monitor status. **Critical:** Keep your app/wallet open and logged in if you encounter a failed transaction—refunds require an active session and typically complete within 15 minutes.
   
    5. **No refund after 1 hour:** The protocol auto-retries, but you must stay logged in. If you closed the app/wallet, reopen and log back in to enable refund processing. Did not get a refund? Contact {{config.extra.arcana.company_name}} team via the [[index-support|support]] channels and make sure you mention the **intent identifier** that failed to refund or your wallet address with date / time of the transaction.

    **Bottom line:** Your funds are protected - failed transactions always get refunded, either automatically or with the team's assistance.

    !!! an-caution "Viewing Refund"

        To view the refund, the user must open or log into the app and access the wallet that was used to sign the intent and confirm the chain abstracted transaction.

??? an-faq "Why is liquidity fragmentation an issue and how does chain abstraction solve it?"
    
    Liquidity fragmentation is an issue because it makes it difficult for users to spend their assets on any chain. 
    
    Let us take a simple case of a user's wallet that contains 3 USDC on Arbitrum and 2 USDC on Optimism. If the user intends to send 4 USDC on Base, it is not possible to do so through a traditional wallet because there is liquidity fragmentation for USDC in the wallet across Arbitrum and Optimism. To be able to send USDC on Base, there are multiple complex steps for the user. 
    
    First, there is no USDC on Base to be sent. The user cannot directly spend USDC on Base even though there are enough USDC tokens when put together on the other two chains in the same wallet account. To spend on Base, the user has to bridge tokens from one or more source chains. That is a complex, multi-step, multi-click, time-consuming process. It also needs non-trivial knowhow about secure bridging and getting the best token exchange deals. Next, the user is required to switch the network to Base and then send the tokens. 
    
    [[concept-ca|Chain Abstraction (CA)]] enables unified balance across source chains that can help the user spend 4 USDC on Base with a single click. The user is not required to manually convert the tokens on Optimism or Arbitrum to make this transaction on Base. With a unified balance, onboarding a new chain does not necessarily require the user to procure tokens on the new chain. The user can pledge or sign an intent to send tokens from any of the source chains to the destination chain.

??? an-faq "I'm a Web3 dApp developer. how can I enable unified balance for dApp users?"

    Download and [[ca-sdk-installation|install the appropriate CA SDK flavor]] as per the app type. 
    
    * **Web3 apps**: Install the [{{config.extra.arcana.ca_sdk_name}}](https://www.npmjs.com/package/@arcana/ca-sdk). Check out the integration example in [codesandbox]({{config.extra.arcana.ca_sdk_sandbox_url}})
    * Web3 apps using the **Wagmi library**: Install the [{{config.extra.arcana.ca_wagmi_sdk_name}}](https://www.npmjs.com/package/@arcana/ca-wagmi). Try the [codesandbox]({{config.extra.arcana.ca_wagmi_sdk_codesandbox_url}}) integration example.
    
    Refer to the respective SDK quick start guide for integration details.

??? an-faq "I'm a Web3 wallet user, how can I enjoy unified balance with chain abstraction?"

    Web3 wallet users can unify assets across chains and spend on any chain. To do this, they must log into a Web3 app that is integrated with the {{config.extra.arcana.ca_sdk_name}} and supports any third-party browser-based wallet. 
    
    Alternatively, wallet users can [download]({{config.extra.arcana.ca_wallet_download_url}}) and install the {{config.extra.arcana.company_name}} Standalone CA wallet browser extension to try [[concept-unified-balance|unified balance]] in the context of some of the popular [[ca-stack#apps|Web3 apps]].

??? an-faq "Why do users need to pay gas fees to set up CA with Layer 1 chains?"

    When setting up {{config.extra.arcana.company_name}} chain abstraction to include Layer 1 chains, users need ETH to pay gas fees for signing the token allowance transaction with the {{config.extra.arcana.company_name}} vault smart contract. The {{config.extra.arcana.company_name}} standalone CA wallet doesn't cover these Layer 1 chain gas fees. As a result, users who choose to include Layer 1 chains in their CA scope must pay these gas fees themselves to set up the CA allowance.

??? an-faq "What is a CA allowance and why are allowances needed?"

    Allowance or 'Permit' in the blockchain context allows a third party, such as a smart contract, to perform transactions from a user's EOA for a specified amount — without accessing the user's private key. 
    
    In {{config.extra.arcana.company_name}} chain abstraction, [[concept-allowances|allowances]] enable unified balance. This lets users spend on any destination chain when they have enough funds and gas fees on their source chains.

??? an-faq "Which ERC20 tokens does the unified balance feature support?"

    Refer to the latest [[ca-stack#tokens|supported token list]].

??? an-faq "Which chains does the unified balance feature support?"

    {{config.extra.arcana.company_name}}'s chain abstraction and unified balance works for some select [[ca-stack#chains|chains ]] and [[ca-stack#tokens|tokens]]. We are working on adding support for more chains in the future. 
    
??? an-faq "Does dApp integration with the {{config.extra.arcana.company_name}} CA SDK enable an in-app wallet like the Auth SDK?"

    No there is no built-in in-app wallet offered by the {{config.extra.arcana.company_name}} SDKs. Web3 apps integrating with the {{config.extra.arcana.company_name}} CA SDK must use a third-party wallet for blockchain transactions.

??? an-faq "How does a dApp access unified balance for a user account?"

    The dApp must download and integrate with the CA-SDK and use the EIP-1193 provider to access the unified balance in the context of an authenticated user. See {% include "./text-snippets/casdkref_url.md" %} and [[web-ca-usage-guide|the usage guide]] for details.

??? an-faq "Does the {{config.extra.arcana.ca_sdk_name}} enable unified balance and chain abstracted transactions in a Web3 app built using Wagmi?"

    For Web3 app built using Wagmi, integrate with the {{config.extra.arcana.ca_wagmi_sdk_name}}.
   
??? an-faq "How do I enable unified balance and chain abstracted `sendTransaction`, `bridge` and `transfer` functions in a Web3 app that uses the Wagmi library?"

    To enable unified balance and chain abstraction in a Web3 app that uses the Wagmi library, integrate the app with the {{config.extra.arcana.ca_wagmi_sdk_name}}. This SDK replaces the Wagmi hooks: `useSendTransaction` and `useWriteContract`. Additionally, it provides hooks such as `useBalance`, `useBalanceModal` and `useCAFn` to enable unified balance plug-and-play popup modal and chain abstracted `bridge` and `transfer` functions. For details see [[ca-wagmi-quick-start|{{config.extra.arcana.ca_wagmi_sdk_name}} Quick Start Guide]] and the [{{config.extra.arcana.ca_wagmi_sdk_name}} Reference]({{config.extra.arcana.ca_wagmi_sdk_ref_url}}).

??? an-faq "Who is the target audience for the {{config.extra.arcana.company_name}} CA SDKs?"

    {{config.extra.arcana.company_name}} CA SDKs help Web3 dApp developers handle fragmented blockchain assets, letting users spend on any chain. These SDKs can integrates with dApps to offer unified balances across chains and chain abstracted transactions.
    
    For a complete list of real life applications of unified balance, see [[ca-usecases|use cases]] section.

??? an-faq "Who is the target audience for the standalone {{config.extra.arcana.company_name}} standalone CA wallet?"

    The standalone {{config.extra.arcana.company_name}} standalone CA wallet is meant for wallet users that want to try unified balance in the context of some of the popular [[ca-stack#apps|Web3 apps]]. 
    
    It enables unified balance and solves liquidity fragmentation when using any of the supported [[ca-stack#chains| chains]] and [[ca-stack#tokens|tokens]] in the context of these supported [[ca-stack#apps|Web3 apps]]. We will be adding support for newer Web3 apps soon.

    !!! an-tip "$100 limit"

        The standalone {{config.extra.arcana.company_name}} standalone CA wallet has a $100 limit for transactions needing chain abstraction. Transfers on the same chain have no limit.

??? an-faq "Can you give me an example of liquidity fragmentation and how the CA SDK solves it?"

    **Liquidity Fragmentation**

    Imagine a user with assets spread across chains:

    Arbitrum: 3 USDC
    Optimism: 4 USDC
    Base: 0 USDC
    Ethereum: 0.001 ETH

    If the user wants to send 5 USDC to Base, they can't because no single chain has enough funds. Liquidity fragmentation forces the user to make multiple transactions, complicating the process.

    **How unified balance through chain abstraction solves this?**

    With chain abstraction, users first set up allowances before issuing a multi-chain transaction intent.

    In this case, the user signs an intent to send 5 USDC to Base by pledging 3 USDC from Arbitrum and 2.2 USDC from Optimism (including gas and service fees). The intent specifies the amount to be deposited on source chains and the agreed amount received on the destination chain.

    {{config.extra.arcana.company_name}}'s Chain Abstraction protocol collects the pledged tokens and gas fees based on the user's allowances. Once the intent is signed, {{config.extra.arcana.company_name}} processes the 5 USDC transaction on Base and deducts the gas fee from the pledged USDC.

??? an-faq "Can I request gas tokens using ERC20 through {{config.extra.arcana.company_name}} Chain Abstraction??"

    Yes, you can request gas tokens using ERC20 via Chain Abstraction.

    For example, if you have 13 USDC and 0 ETH on Optimism but need to make a 15 USDC transaction requiring 0.0000001 ETH for gas, you'll need an extra 2 USDC plus the gas fee. 
    
    You can pledge or sign an intent to pay the additional USDC and gas fees using funds from other supported chains like Arbitrum or Base, assuming you have enough USDC to cover the deficit and fees.

    Once you sign the intent, {{config.extra.arcana.ca_sdk_name}} supplies the needed USDC and gas in a single transaction. Charges include the deficit amount, CA Gas Fees, protocol fees, and Solver fees.

    *Note: Fees are deducted from the main token requested, such as USDC. {{config.extra.arcana.ca_sdk_name}} supports ETH, USDC, and USDT.*

??? an-faq "Can a user review intent details before issuing a transaction that requires chain abstraction with two or more source chain tokens?"

    Yes, user's can review the intent details before issuing a CA transaction via the {{config.extra.arcana.company_name}} CA Wallet. Before submitting a transaction, click 'View Intent' to see the intent details. Once the transaction is successful, there are options to view the intent details as well as the transaction details.

    To view the intent details at a later point in time, you need to save the intent identifier displayed in the details during the transaction, before closing the wallet screen. 
    
    Use the {{config.extra.arcana.company_name}} Intent Explorer accessible at: [https://explorer.arcana.network/]({{config.extra.arcana.ca_intent_explorer}}) and enter the intent ID to view details at a later time.

    <figure markdown="span">
        ![View Intent Details]({{config.extra.arcana.img_dir}}/an_wallet_view_intent_details.{{config.extra.arcana.img_gif}}){ .an-screenshots }
        <figcaption>View Intent Details</figcaption>
    </figure>

??? an-faq "Can I use `transfer` function to deposit chain abstracted unified balance funds to a smart contract and update the blockchain state?"

    No. `transfer` does not support `data`. Use [`request` with `sendTransaction`](https://ca-sdk-ref-guide.netlify.app/#quick-start) to deposit funds to a smart contract and update the blockchain state.
    
??? an-faq "Sending 0.1 USDC from 0.3 USDC balance uses funds from other chains. Why isn't this a normal transaction since sufficient balance exists locally?"

    The transaction uses chain abstraction because you need both sufficient tokens AND gas fees for a normal transaction.
    
    Even though 0.1 USDC < 0.3 USDC balance, the remaining 0.2 USDC may not cover the gas fees. 
    
    When local funds can't cover transaction amount + gas fees, the system pulls from other chains' allowances to make up the difference, making it a chain-abstracted transaction instead of normal.