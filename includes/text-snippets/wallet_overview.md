{% include "./text-snippets/wallet_intro.md" %}

**Key Functions**

* Check account balance
* Sign blockchain transactions
* Add, and modify the network configuration
* Switch to a different network
<!--
* Switch betweeen EOA/SCW accounts (Gasless)
-->
* Deploy smart contract to a specific network
* Add, send, and receive custom tokens (ERC-20) and NFTs (ERC-721 and ERC-1155)
* View account transaction activity such as how many native, custom tokens or NFTs were transacted or contracts deployed 
* Use the provider interface to call any [standard Ethereum JSON RPC specification](https://ethereum.github.io/execution-apis/api-documentation/) methods
* Export private key and use it to import {{config.extra.arcana.wallet_name}} account to a third-party Web3 provider
* Enable MFA for enhanced security

!!! an-note "User Profile Data"

    In the future, the {{config.extra.arcana.wallet_name}} may also allow application users to permit application developers and see their profile data such as email ID, profile picture, and user name.

!!! an-caution "**Not Supported**"

    The {{config.extra.arcana.wallet_name}} does not allow an app user to import any blockchain account created using a third-party wallet provider. 

**Wallet Configuration**

Developers can select the built-in {{config.extra.arcana.wallet_name}} UI (default) or a custom wallet UI via the {{config.extra.arcana.dashboard_name}} at the time of registering the app with the {{config.extra.arcana.company_name}}. Later, during app integration, when creating a new `AuthProvider`, the developer can choose one of the available wallet user experiences for signing blockchain transactions through the `alwaysVisible` input parameter. See [[concept-wallet-visibility|{{config.extra.arcana.wallet_name}} visibility mode]] and the [[configure-wallet-visibility|{{config.extra.arcana.wallet_name}} configuration guide]] for details.

{% include "./text-snippets/wallet_ntwk_switch_warning.md" %}

**Adding Networks**

The {{config.extra.arcana.sdk_name}} supports EVM-compatible blockchains. It comes pre-configured with some of the popular blockchain networks such as Ethereum and Polygon. See [[web3-stack-chains|supported blockchain networks]] for the complete list. In addition to the networks in the pre-configured list, new networks can be added programmatically to the wallet by application developers. Also, authenticated users can add new networks via the wallet UI if the developer has configured the wallet to be always visible in the app context.
        
Only the developer configured additional network settings are stored and retained across user login sessions. For more details, see [[concept-wallet-visibility|{{config.extra.arcana.wallet_name}} visibility modes]] and [[concept-wallet-switch-mode|network switching behavior]].

{% include "./text-snippets/add_wallet_config_warning.md" %}
