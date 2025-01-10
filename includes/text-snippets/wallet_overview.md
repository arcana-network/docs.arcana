{% include "./text-snippets/wallet_intro.md" %}

**Key Functions**

* Check account balance
* Sign blockchain transactions
* Add, and modify the network configuration
* Switch to a different network
* Deploy smart contract to a specific network
* Add, send, and receive custom tokens (ERC-20) and NFTs (ERC-721 and ERC-1155)
* View account transaction activity such as how many native, custom tokens or NFTs were transacted or contracts deployed 
* View pending transactions in the activity tab
* Use the provider interface to call any [standard Ethereum JSON RPC specification](https://ethereum.github.io/execution-apis/api-documentation/) methods
* Export private key and use it to import {{config.extra.arcana.wallet_name}} account to a third-party Web3 provider
* Enable MFA for enhanced security

!!! an-caution "**Not Supported**"

    The {{config.extra.arcana.wallet_name}} does not allow an app user to import any blockchain account created using a third-party wallet provider. 

!!! an-note "User Profile Data"

    In the future, the {{config.extra.arcana.wallet_name}} may also allow application users to permit application developers and see their profile data such as email ID, profile picture, and user name.

**Wallet Configuration**

Wallet user experience can be configured at the time of registering the app via the dashboard.  The dashboard setting allows developers to specify whether they will use the built-in default wallet UI or use a custom wallet UI. Later, during app integration, developers can specify `alwaysVisible` to manage [[concept-wallet-visibility|wallet visibility]], wallet `position` parameters in `AuthProvider` and further fine tune the user experience.

**Adding Networks**

The in-app {{config.extra.arcana.wallet_name}} comes pre-configured with a subset of the [[web3-stack-chains|supported blockchain networks]]. This pre-configured list can be updated with other supported networks programmatically or via the wallet UI.

{% include "./text-snippets/warn-wallet-chain-edit-persistence.md" %}
