{% include "./text-snippets/wallet_intro.md" %}

**Supported Web3 Wallet Operations**

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

    The Arcana wallet does not allow an application user to import any blockchain account created using a third-party wallet provider. 

**Wallet Usage Configuration**

Arcana wallet can be configured at the time of integrating the application with the Auth SDK. While instantiating a new `AuthProvider`, the developer can choose one of the available wallet user experiences for signing blockchain transactions through the `alwaysVisible` input parameter. See [Arcana wallet visibility mode]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/walletuimodes.md) and the [Arcana wallet configuration guide]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/config_wallet_modes.md) for details.

{% include "./text-snippets/wallet_ntwk_switch_warning.md" %}

**Adding Networks**

The Arcana wallet comes pre-configured with some of the popular blockchain networks such as Ethereum and Polygon. Other EVM-compatible blockchain network configurations can be added programmatically to the wallet by application developers. 
        
These additional network settings are stored and retained across user login sessions. If the developer has configured the Arcana wallet visibility mode to `alwaysVisible=true`, then the wallet is always visible in the applications' context. Users can use the wallet UI to add new network configurations and switch to a different network than the one that the developer has provided by default. This is not possible if the `alwaysVisible=false` setting is used during Auth SDK integration. In this case, the wallet shows up only when a user has to approve a blockchain transaction and disappears after a user action. For more details, see [Arcana wallet visibility modes]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/walletuimodes.md) and [network switching behavior]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/walletntwkswitchmode.md).

{% include "./text-snippets/add_wallet_config_warning.md" %}
