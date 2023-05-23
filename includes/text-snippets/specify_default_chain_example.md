??? Example "Chain Configuration Example"

      **Example I**
      
      Dashboard setting for App A:  `Polygon, Ethereum, Shardeum, Arbitrum (default selection)`

      `chainConfig` option in the `AuthProvider`: `Shardeum`

      In this case, the {{config.extra.arcana.wallet_name}} UI will display `Shardeum` as the default and other chains in the dropdown list as Polygon, Ethereum, and Arbitrum. 

      **Example II**

      Dashboard setting for App A:  `Polygon, Ethereum, Shardeum, Arbitrum (default selection)`

      `chainConfig` option in the `AuthProvider`: `Avalanche`

      In this case, the {{config.extra.arcana.wallet_name}} UI will display `Arbitrum` as the default and other chains in the dropdown list as Polygon, Ethereum, and Shardeum. 