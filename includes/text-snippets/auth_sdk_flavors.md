!!! an-tip "Arcana Auth SDK Flavors"

      The Arcana Auth SDK comes in multiple flavors to support different Web3 app types. For some app types, developers may need to install and integrate the app with the `{{config.extra.arcana.auth_sdk_pkg_name}}` package in addition to the app-specific package listed below. 

      |  SDK Name  | Web3 Application Type |  Package Name | Requires companion SDK | 
      |   :---     | :---    |  :---   |  :--- | 
      | {{config.extra.arcana.sdk_name}}  | Basic SDK for user onboarding in Vanilla HTML/CSS/JS Apps, Vue Apps; Gasless transactions in {{config.extra.arcana.wallet_name}} | `{{config.extra.arcana.auth_sdk_pkg_name}}` | None |
      | {{config.extra.arcana.react_sdk_name}} | React Apps | `{{config.extra.arcana.react_sdk_pkg_name}}` | `{{config.extra.arcana.auth_sdk_pkg_name}}` |
      | {{config.extra.arcana.wagmi_sdk_name}} | Apps using wallet connectors such as Wagmi, RainbowKit | `{{config.extra.arcana.wagmi_sdk_pkg_name}}` | `{{config.extra.arcana.auth_sdk_pkg_name}}` |
      | {{config.extra.arcana.web3_react_sdk_name}} | Apps using Web3-React wallet connector | `{{config.extra.arcana.web3_react_sdk_pkg_name}}` | `{{config.extra.arcana.auth_sdk_pkg_name}}` |
      | {{config.extra.arcana.flutter_sdk_name}} | Mobile apps built using Flutter | `{{config.extra.arcana.mobile_flutter_sdk_pkg_name}}` | None |
      | {{config.extra.arcana.react_native_sdk_name}} | Mobile apps built using React Native | `{{config.extra.arcana.mobile_react_native_sdk_pkg_name}}` | None |
      | {{config.extra.arcana.auth_core_sdk_name}} | Auth SDK for user onboarding features usage only and ability to assign keys to authenticated users, with no embedded wallet feature | `{{config.extra.arcana.auth_core_sdk_pkg_name}}` | None |
      | {{config.extra.arcana.gasless_sdk_name}} | Enables gasless transactions in third-party browser-based wallets. Operates independently of Auth SDK. | `{{config.extra.arcana.gasless_sdk_pkg_name}}` | None |
      |{{config.extra.arcana.gaming_sdk_name}}  | Gaming apps built using Unity | `{{config.extra.arcana.gaming_sdk_pkg_name}}`| None |

