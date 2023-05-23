---
alias: faq-auth
title: 'FAQ: Arcana Auth SDK'
description: 'Frequently asked questions about integrating an app with the Arcana Auth SDK.'
arcana:
  root_rel_path: ..
toc_depth: 2
---

# {{config.extra.arcana.sdk_name}}

## Onboarding Users

---

??? an-faq "Can a Web3 app use the {{config.extra.arcana.sdk_name}} only for onboarding users and disable the {{config.extra.arcana.wallet_name}} feature altogether?"

      There is no way to selectively turn off the {{config.extra.arcana.wallet_name}} features.  However, if the application **does not perform any blockchain transactions**, the wallet feature can be disabled by setting the [wallet visibility mode]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/walletuimodes.md) to `false` while integrating the app with the {{config.extra.arcana.sdk_name}}. In this case, the {{config.extra.arcana.wallet_name}} will not be visible to the authenticated user as long as **no blockchain transaction is triggered**. 

      If you need to completely disable the {{config.extra.arcana.wallet_name}} feature in the app, you can request a private build of the {{config.extra.arcana.wallet_name}} by [contacting us]({{page.meta.arcana.root_rel_path}}/support.md) with the use case details."

??? an-faq "Will the Arcana Network's distributed key generation algorithm be affected if a node with a key share becomes temporarily inaccessible?"

      No, Arcana's [ADKG]({{page.meta.arcana.root_rel_path}}/concepts/dkg/index.md) algorithm can still generate the key using the key shares from the other nodes that are accessible. The algorithm is designed to tolerate a certain number of nodes being inaccessible, depending on the total number of participating nodes. For more details, see [Arcana's Technical Whitepaper](https://www.notion.so/Arcana-Technical-Docs-a1d7fd0d2970452586c693e4fee14d08).

??? an-faq "Does the authenticated user see the same wallet address if they use different authentication providers to log into a Web3 app integrated with the {{config.extra.arcana.wallet_name}}?"

      Yes. This is made possible by the [aggregate login]({{page.meta.arcana.root_rel_path}}/concepts/authtype/aggregatelogin.md) feature of the {{config.extra.arcana.sdk_name}}. 
      
      *For this feature to work, the user* **must** *have the same email ID registered with the different authentication providers.*
      
      {{config.extra.arcana.sdk_name}} uses the email ID to uniquely identify the user even if the user uses different social providers or a passwordless email option to log in to a Web3 app. It associates a single key for such a user which results in the user seeing the same wallet address. If the user has different email IDs associated with different social providers then each login is treated as a unique, different user and the same user will see a different wallet address when logging into the same Web3 app.

??? an-faq "Does the authenticated user see the same wallet address across multiple Web3 applications that integrate with the {{config.extra.arcana.sdk_name}}?"

      {{config.extra.arcana.sdk_name}} allows Web3 app developers to tailor the wallet address experience for their users. It provides two 'Keyspace' options at the time of application registration:

      * App-Specific Keys
      * Global Keys

      If a developer selects the **Global Keys** option, then the user gets assigned the same key across all applications that integrate with the {{config.extra.arcana.sdk_name}} and chooses the same **Global Keys** option. The same key means the wallet address of the user is the same across different Web3 apps that integrate with the {{config.extra.arcana.sdk_name}}.  This is true across apps that use EVM-compatible chains. If two apps use global keys but one of them is on an EVM-compatible chain and the other is not, then the keys will be different across such apps. The Arcana's ADKG subsystem will assign the user different sets of keys for such apps resulting in different wallet addresses across such apps.

      For more details, see [[concept-keyspace-type|app-specific vs. global keys]]

??? an-faq "Does the **global keys** feature work across EVM-compatible and not EVM-compatible chains?"

      **No**.

      The global keys feature enables an authenticated user to have the same wallet address across different Web3 apps in the Arcana ecosystem.  
      
      However, an authenticated user will see **different wallet addresses across two chains configured in a single Web3 app if one of them is EVM-compatible whereas the other is not. Also, in the case of two Web3 apps, one of which uses an EVM-compatible chain and the other that uses chains that are not EVM-compatible, the authenticated user's wallet address will be different for each app. 

## {{config.extra.arcana.wallet_name}}

---

??? an-faq "How does the {{config.extra.arcana.wallet_name}} allow app developers to manage user experience for signing blockchain transactions?"

      Apps can integrate with the {{config.extra.arcana.sdk_name}} to enable an embedded, non-custodial Web3 {{config.extra.arcana.wallet_name}} for every authenticated app user.

      To integrate an app, developers must register and configure the app with the Arcana network, and then install the `{{config.extra.arcana.auth_sdk_pkg_name}}` package and create a new `AuthProvider`. While instantiating the `AuthProvider` developers can manage the user experience for signing blockchain transactions through the input parameter `alwaysVisible`. This parameter controls whether the {{config.extra.arcana.wallet_name}} UI is automatically displayed in the application's context right after a user authenticates or it shows up only when the app triggers a blockchain transaction that requires the user's approval.

      For details, see [{{config.extra.arcana.wallet_name}} visibility modes]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/walletuimodes.md).

??? an-faq "Does the {{config.extra.arcana.sdk_name}} set `window.ethereum` value in the app's context?"

      By default, {{config.extra.arcana.wallet_name}} does not set the `window.ethereum` value in the app's context. To explicitly set this value, during the integration of the app with the {{config.extra.arcana.wallet_name}}, when `AuthProvider` is instantiated, developers must specify the `setWindowParameter=true`. For details, see the [[web-auth-usage-guide|{{config.extra.arcana.wallet_name}} Usage Guide]].

??? an-faq "How is the {{config.extra.arcana.wallet_name}} different from self-custodial wallets?"

      {{config.extra.arcana.wallet_name}} is a non-custodial wallet. Here is how it differs from the self-custodial wallets:

      | Self-custodial wallets | Arcana's non-custodial wallet |
      | :--- | :--- |
      | Users need to be responsible for and remember their passphrases.| Users do not require to remember any passphrase.|
      | Users need to manage keys themselves in case of self-custody wallets. | {{config.extra.arcana.wallet_name}} offers a sweet spot, users don't have to manage keys as in the self-custody wallet and yet their keys can be generated in a distributed manner via the {{config.extra.arcana.wallet_name}}, a non-custodial wallet.|
      | Users that are new to Web3 typically find self-custodial wallets very challenging to use. | {{config.extra.arcana.wallet_name}} offers a really simple Web2-like onboarding experience for new Web3 users without sacrificing security and ownership.|
