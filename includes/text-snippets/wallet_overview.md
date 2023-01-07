In addition to user onboarding, the [Arcana Auth SDK](/docs/conceptauthsdk) also offers an embedded Web3 wallet. The Arcana wallet is a *simple, lightweight, non-custodial, configurable wallet*. It allows application developers to manage user experience for signing transactions. It also supports typical Web3 wallet functionality such as sending and receiving tokens, NFTs using any EVM-compatible blockchain and enabling standard JSON RPC calls in applications.

**Supported Web3 Wallet Functions**

* Check account balance
* Sign blockchain transactions
* Add, and modify the network configuration
* Switch to a different network
* Deploy smart contract to a specific network
* Add, send, and receive custom tokens (ERC-20) and NFTs (ERC-721 and ERC-1155)
* View account transaction activity such as how many native, custom tokens or NFTs were transacted or contracts deployed 
* Use the provider interface to call any [standard Ethereum JSON RPC specification](https://ethereum.github.io/execution-apis/api-documentation/) methods
* Export private key and use it to import Arcana wallet account to a third-party Web3 provider

!!! note

    In the future, the Arcana wallet may also allow application users to permit application developers and see their profile data such as email ID, profile picture, and user name.

!!! caution "**Not Supported**"

    The Arcana wallet does not allow a application user to import any blockchain account created using a third-party wallet provider. 

**Wallet Usage Configuration**

Arcana wallet can be configured at the time of integrating the application with the Auth SDK. While instantiating a new `AuthProvider`, the developer can choose one of the available wallet user experiences for signing blockchain transactions through the `alwaysVisible` input parameter. See [Arcana wallet visibility mode]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/walletuimodes.md) and the [Arcana wallet configuration guide]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/config_wallet_modes.md) for details.

{% include "./text-snippets/wallet_ntwk_switch_warning.md" %}

**Adding Networks**

The Arcana wallet comes pre-configured with some of the popular blockchain networks such as Ethereum and Polygon. Other EVM-compatible blockchain network configurations can be added programmatically to the wallet by application developers. 
        
These additional network settings are stored and retained across user login sessions. If the developer has configured the Arcana wallet visibility mode to **Full UI**, then the users can also add new network settings to the Arcana wallet using the wallet UI. 

{% include "./text-snippets/add_wallet_config_warning.md" %}
