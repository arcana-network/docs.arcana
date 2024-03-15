!!! tip "Arcana Auth SDK Flavors"

      The Arcana Auth SDK comes in multiple flavors to support different Web3 app types. For some app types, developers may need to install and integrate the app with the `{{config.extra.arcana.auth_sdk_pkg_name}}` package in addition to the app-specific package listed below. 

      |  SDK Name  | Web3 Application Type |  Package Name | Requires companion SDK | 
      |   :---     | :---    |  :---   |  :--- | 
      | Auth SDK   | Basic SDK for Vanilla HTML/CSS/JS Apps, Vue Apps | `{{config.extra.arcana.auth_sdk_pkg_name}}` | None |
      | Auth React SDK | React Apps | `{{config.extra.arcana.react_sdk_pkg_name}}` | `{{config.extra.arcana.auth_sdk_pkg_name}}` |
      | Auth Wagmi SDK | Apps using wallet connectors such as Wagmi, RainbowKit | `{{config.extra.arcana.wagmi_sdk_pkg_name}}` | `{{config.extra.arcana.auth_sdk_pkg_name}}` |
      | Auth Web3-React SDK | Apps using Web3-React wallet connector | `{{config.extra.arcana.web3_react_sdk_pkg_name}}` | `{{config.extra.arcana.auth_sdk_pkg_name}}` |
      | Auth Flutter SDK | Mobile apps built using Flutter | `{{config.extra.arcana.mobile_flutter_sdk_pkg_name}}` | None |
      | Auth React Native SDK | Mobile apps built using React Native | `{{config.extra.arcana.mobile_react_native_sdk_pkg_name}}` | None |
      | Auth-Core SDK | Auth SDK for custom wallet UI and access to private keys | `{{config.extra.arcana.auth_core_sdk_pkg_name}}` | None |
     | Gasless SDK | Enables gasless transactions in third-party browser-based wallets. Operates independently of Auth SDK. | `{{config.extra.arcana.gasless_sdk_pkg_name}}` | None |
      | Auth Unity SDK | Gaming apps built using Unity |   `{{config.extra.arcana.gaming_sdk_pkg_name}}`| None |

