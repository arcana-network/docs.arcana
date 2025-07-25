!!! an-note "Unified Balance (XCS)"

    [[concept-xcs|Cross-Chain Support (XCS)]] enhances unified balance by allowing users to spend any supported token (e.g., USDT, USDC) from any source chain on any destination chain—provided the chain and token contract support the EIP-2612 `permit` function.

    For chains or tokens without `permit/EIP-2612`, the protocol reverts to the basic unified balance, which only combines the same token type across source chains.

### Ethereum

=== "Mainnet"

      | Coral | Unified Balance | Unified Balance (XCS) |
      | :--- | :---| :---|
      | ETH  | ✅  | ❌ |
      | USDC | ✅  | ✅ |
      | USDT | ✅  | ❌ |
      | DAI  | ❓  | ✅ |

=== "Sepolia"

      | Folly | Unified Balance | Unified Balance (XCS) |
      | :--- | :--- | :--- |
      | ETH  |  ✅  | ❌ |
      | USDC |  ✅  | ❓ |

### Optimism

=== "Mainnet"

      | Coral | Unified Balance | Unified Balance (XCS) |
      | :--- | :--- | :--- |
      | ETH |  ✅  | ❌ |
      | USDC | ✅  | ✅ |
      | USDT | ✅  | ❌ |
      | DAI  | ❓  | ✅ |

=== "OP Sepolia"

      | Folly | Unified Balance | Unified Balance (XCS) |
      | :--- | :--- | :--- |
      | ETH |  ✅  | ❌ |   
      | USDC | ✅  | ❓ |
      | USDT | ✅  | ❌ |
      | DAI  | ❓  | ✅ |

### BSC

=== "Mainnet"

      | Coral | Unified Balance | Unified Balance (XCS) |
      | :--- | :--- | :--- |
      | ETH | ✅  | ❌ |  
      | USDC | ✅  | ❌ |
      | USDT | ✅  | ❌ |
      | BNB | ✅  | ❌ |

### Polygon

!!! an-note "Polygon EMT, Polygon DAI"

    In the case of Polygon, the XCS feature uses `Polygon EMT` or `Polygon DAI` as the intermediary token for swaps.

=== "Mainnet"

      | Coral | Unified Balance | Unified Balance (XCS) |
      | :--- | :--- | :--- |
      | USDC |  ✅  | ✅  |
      | USDT | ✅  | ✅  |
      | POL | ✅  | ❌ |
      | WETH | ❓  | ✅  |
      | DAI | ❓  | ✅  |

=== "Polygon Amoy"

      | Folly | Unified Balance | Unified Balance (XCS) |
      | :--- | :--- | :--- |
      | USDC | ✅  | ❌ |
      | POL | ✅  | ❌ |


<!--- Commenting out HyperEVM July 21 casdk update

### HyperEVM

=== "Mainnet"

      | Coral | Unified Balance |
      | :--- | :--- | 
      | USDT | ✅  |
      | HYPE | ✅  |
-->

### Kaia

=== "Mainnet"

      | Coral | Unified Balance | Unified Balance (XCS) |
      | :--- | :--- | :--- | 
      | USDT | ✅  | ✅ | 
      | KAIA | ✅  | ❌ |

### Base

=== "Mainnet"

      | Coral | Unified Balance | Unified Balance (XCS) |
      | :--- | :--- | :--- |
      | ETH | ✅  | ❌ | 
      | USDC | ✅  | ✅  | 
      | USDT | ✅  | ❌ |
      | WETH | ❓  | ❌ |

=== "Base Sepolia"

      | Folly | Unified Balance | Unified Balance (XCS) |
      | :--- | :--- | :--- |
      | ETH | ✅  | ❌ |
      | USDC | ✅  | ❌ |

### Fuel

=== "Mainnet"

      | Coral | Unified Balance | Unified Balance (XCS) |
      | :--- | :--- | :--- |
      | ETH | ✅  | ❌ | 
      | USDC | ✅  | ❌ |
      | USDT | ✅  | ❌ |

{% include "./text-snippets/warn_no_fuel_support_ca_wagmi.md" %}

### Arbitrum

=== "Mainnet"

      | Coral | Unified Balance | Unified Balance (XCS) |
      | :--- | :--- | :--- |
      | ETH | ✅  | ❌ | 
      | USDC | ✅  | ✅  |
      | USDT | ✅  | ✅  |
      | WETH | ❓ | ✅  |
      | DAI | ❓  |✅  |

=== "Arbitrum Sepolia"

      | Folly | Unified Balance | Unified Balance (XCS) |
      | :--- | :---| :--- |
      | ETH |  ✅ | ❌ |
      | USDC |  ✅  | ❌ |
      | USDT |  ✅  | ❌ |

### Avalanche

=== "Mainnet"

      | Coral | Unified Balance | Unified Balance (XCS) |
      | :--- | :--- | :--- |
      | USDC | ✅  | ✅  |
      | USDT | ✅  | ✅  |
      | AVAX | ✅  | ❌ |
      | DAI | ❓  |  ❌ |

### Sophon

=== "Mainnet"

      | Coral | Unified Balance | Unified Balance (XCS) |
      | :--- | :--- | :--- |
      | ETH | ✅  | ❓  |
      | USDC | ✅  | ❓  |
      | USDT | ✅  | ❓  |
      | SOPH | ✅  | ❓  |

### Scroll

=== "Mainnet"

      | Coral | Unified Balance | Unified Balance (XCS) |
      | :--- | :--- | :--- | 
      | ETH | ✅  | ❌ |
      | USDC | ✅  | ✅  |
      | USDT | ✅  | ✅  |
      | WETH | ❓  |✅  |
