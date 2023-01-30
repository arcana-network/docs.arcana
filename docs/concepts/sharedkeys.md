---
slug: /conceptsharedkeys
id: idconceptsharedkeys
sidebar_custom_props:
  cardIcon: 💠
arcana:
  root_rel_path: ..
---

# App-Specific vs. Global Keys

Arcana Network allows Web3 application developers to have the flexibility of choosing the desired levels of data security and ease of use as per the application requirements.

In the case of Web2 applications it is common to use the same password across different applications.  If you translate this user behavior in Web3 applications, developers may want to allow the application users to use the same wallet address across different applications that use the Arcana Network. Similar to the Web2 application behavior of allowing same password across diverse applications, the option of allowing Web3 authenticated users to have the same user keys or the same wallet address across Web3 applications may result in simpler user experience but at the risk of reduced security. Any malicious actor that is able to hack into one of the applications could potentially do so for all the other applications that are relying on the same user password or wallet address. 

Arcana Auth associates cryptographic key pair with every authenticated user. Keys are associated with the user's wallet address. User's keys are the gateway to accessing Web3 applications, signing blockchain transactions, and managing wallet assets. You can equate keys to 'passwords' in the Web2 applications but they are more secure. User's self-sovereign identity is realized through these secure keys that are not stored anywhere in the Arcana ecosystem. To construct a key, multiple key shares are required. These shares are split across multiple DKG participating nodes and no single node has access to user's keys.

By default, every application is configured to use the highly secure **App-specific Keys** whereby user's application keys or the wallet address is unique across different applications that integrate with the Auth SDK and are part of the Arcana Network ecosystem. As a result, an authenticated user will be assigned a unique set of keys and a different wallet address for every application.

To facilitate same wallet address for an authenticated user across different applications in the Arcana ecosystem, developers must select the **Global Keys** option. Global keys enable a Web2-like user experience in Web3 applications but it requires developers to be whitelisted via a manual verification process for security reasons.

## Enabling Global Keys

To enable the user experience of having the same wallet address across different applications, developers must use the Arcana Developer Dashboard and select the **Global Keys** option. To whitelist an application, developer must get themselves verified from Arcana by filling an online form. It may take a couple of hours to get the feature enabled after verification. Refer to the verification status in the dashboard and once it is approved, the **Global Keys** are enabled for the application. 

!!! caution

      This feature is **only** available for applications deployed on Arcana Mainnet.
      
      Developers can register their application and choose to opt for the 'Global Keys' feature. It may take some time for manual verification.  Meanwhile, if developers continue to integrate their application with the Auth SDK while waiting for the global keys approval, and allow application users to log in, the users will be assigned unique wallet addresses. These wallet address may change later once the request for using shared keys feature is granted.