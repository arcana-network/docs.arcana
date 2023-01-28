---
arcana:
  root_rel_path: ../..
---

# Add/Switch Shardeum Network

Web3 applications that are integrated with Arcana Auth can add and switch to the Shardeum network and enable users to perform Web3 wallet operations.

Developers can use the appropriate Shardeum Network settings listed bdlow and follow the instructions in the [How to Add/Switch Network Guide]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/wallet_add_switch_ntwk.md) to add Shardeum Network to Arcana wallet programmatically and switch to it. 

## Liberty 2.X

| Field | Alphanet |
| :---  | :--- |
| Network Name | Shardeum Liberty 2.X |
| New RPC URL | https://liberty20.shardeum.org/ |
| Chain ID | 8081 |
| Currency Symbol (Optional)| SHM|
| Block Explorer URL | https://explorer-liberty20.shardeum.org/|

## Liberty 1.X

| Field | Alphanet |
| :---  | :--- |
| Network Name | Shardeum Liberty 1.X |
| New RPC URL | https://liberty10.shardeum.org/ |
| Chain ID | 8080 |
| Currency Symbol (Optional)| SHM|
| Block Explorer URL | https://explorer-liberty10.shardeum.org/ |

Web3 application users can add/switch Shardeum Network by accessing the wallet UI. Refer to the 'Add Network' and 'Switch Network'  sections of the [Arcana Wallet User Guide]({{page.meta.arcana.root_rel_path}}/howto/wallet_ui.md#addselect-a-network). 

!!! caution

      Only the developer-specified coded network additions to the Arcana wallet persist in the Arcana wallet UI.  The addition of new network by the application users via the wallet UI is not persisted across user login sessions.
