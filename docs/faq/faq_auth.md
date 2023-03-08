---
slug: /faq_auth
id: idfaqauth
title: Auth SDK
sidebar_custom_props:
  cardIcon: 🙋
arcana:
  root_rel_path: ..
toc_depth: 2
---

# Auth SDK

Frequently asked questions about user onboarding, social authentication, signing blockchain transactions, and Auth SDK usage.

## Authentication

---

??? an-faq "Can an application use the Auth SDK only for user authentication and disable the Arcana wallet feature altogether?"

      Yes, if the application **does not perform any blockchain transactions**, the wallet feature can be disabled by setting the [wallet visibility mode]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/walletuimodes.md) to `false` in the Auth SDK. In this case, the wallet screen will not be visible to the authenticated user as long as no blockchain transaction is triggered. 

      If the application does need to perform blockchain transactions, the wallet screen will appear to request user approval for these transactions, even if the wallet visibility mode is set to false. 

      If you need to completely disable the Arcana wallet feature in your application, you can request a private build of the Auth SDK by [contacting Arcana]({{page.meta.arcana.root_rel_path}}/support.md) with your use case details."

??? an-faq "Will the Arcana Network's decentralized key generation algorithm be affected if a node with a key share becomes temporarily inaccessible?"

      No, Arcana's [DKG]({{page.meta.arcana.root_rel_path}}/concepts/dkg/index.md) algorithm can still generate the key using the key shares from the other nodes that are accessible. The algorithm is designed to tolerate a certain number of nodes being inaccessible, depending on the total number of participating nodes.

??? an-faq "Does the authenticated user see the same wallet address if they use different social providers to log into a Web3 app integrated with the Auth SDK?"

      Yes. This is made possible by the [aggregate login]({{page.meta.arcana.root_rel_path}}/concepts/authtype/aggregatelogin.md) feature. 
      
      *For this feature to work, the user* **must** *have the same email ID registered with the different social providers.*
      
      Arcana Auth uses the email ID to uniquely identify the user even if the user uses different social providers or a passwordless email option to log in to a Web3 app. It associates a single key for such a user which results in the user seeing the same wallet address. If the user has different email IDs associated with different social providers then each login is treated as a unique, different user and the same user will see a different wallet address when logging into the same Web3 app.

??? an-faq "Does the authenticated user see the same wallet address across any Web3 applications that integrate with the Arcana Auth SDK?"

      Arcana Auth SDK allows Web3 application developers to tailor the wallet address experience for their users. It provides two options at the time of application registration:

      * App-Specific Keys
      * Global Keys

      If a developer selects the **Global Keys** option, then the user gets assigned the same key across all applications that integrate with the Auth SDK and choose the same **Global Keys** option. The same key means the wallet address of the user is the same across different Web3 apps that integrate with the Auth SDK.  This is true across apps that use EVM-compatible chains. If two apps use global keys but one of them is on an EVM-compatible chain but the other is using a non-EVM compatible chain, then the user will be assigned different keys on such apps by the ADKG subsystem resulting in different wallet addresses across such apps.

      For more details, see [app-specific vs. global keys]({{page.meta.arcana.root_rel_path}}/concepts/sharedkeys.md)

??? an-faq "Does the **global keys** feature work across EVM and non-EVM compatible chains?"

      **No**.

      The global keys feature enables an authenticated user to have the same wallet address across different Web3 apps in the Arcana ecosystem.  
      
      However, an authenticated user will see **different wallet addresses across various non-EVM compatible chains** configured in a single Web3 app. Also, the authenticated user's wallet address will not be the same across Web3 apps that use EVM and non-EVM compatible chains. 

      The Arcana Auth SDK currently supports only EVM-compatible chains. Support for non-EVM compatible chains will be provided in a future release.

## Arcana Wallet

---

??? an-faq "How does Arcana wallet allow application developers to manage user experience for signing blockchain transactions?"

      The Arcana Auth SDK enables an embedded Web3 Arcana wallet in all applications that integrate with the SDK.

      While instantiating the `AuthProvider` during Auth SDK integration, application developers can specify the kind of user experience they wish to provide for signing blockchain transactions. The input parameter `alwaysVisible` controls when the Arcana wallet is displayed and what functions are available to an application user.

      For details, see [Arcana wallet visibility modes]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/walletuimodes.md).

??? an-faq "How is the Arcana wallet different from self-custodial wallets?"

      Arcana wallet is a non-custodial wallet. Here is how it differs from the self-custodial wallets:

      | Self-custodial wallets | Arcana's non-custodial wallet |
      | :--- | :--- |
      | Users need to be responsible for and remember their passphrases.| Users do not require to remember any passphrase.|
      | Users need to manage keys themselves in case of self-custody wallets. | Arcana wallet offers a sweet spot, users don't have to manage keys as in the self-custody wallet and yet their keys can be generated in a decentralized manner via Arcana wallet, a non-custodial wallet.|
      | Users that are new to Web3 typically find self-custodial wallets very challenging to use. | Arcana wallet offers a really simple Web2-like onboarding experience for new Web3 users along with complete security and ownership.|
