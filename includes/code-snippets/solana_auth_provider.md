```js hl_lines="27"
const { AuthProvider } = window.arcana.auth // From CDN
//or
import { AuthProvider } from '@arcana/auth' //From npm

const auth = new AuthProvider(
  "xar_live_445007f942xxxxxxxxxxxxxxxxxx484cAfd2", // App client ID
  { 
    position: 'left',         // default: right
    theme: 'light',           // default: dark
    alwaysVisible: false,     // default: true, wallet always visible
    setWindowProvider: true,  // default: false, window.ethereum not set
    connectOptions: {
      compact: true           // default: false, regular plug-and-play login UI
    },
    chainConfig: { // Note: These values override dashboard settings during app registration
      chainId: '1',                    // defaults to Solana Mainnet, use '2' for Testnet, '3' Devnet
      rpcUrl: 'https://api.mainnet-beta.solana.com', // defaults to 'https://api.mainnet-beta.solana.com'
      // Use 'https://api.testnet.solana.com' and https://api.devnet.solana.com' for Testnet, Devnet
    },
})

try {
  await auth.init()
} catch (e) {
  // Handle exception case
}

const provider = auth.provider;
```