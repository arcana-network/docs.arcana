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

??? an-faq "Can app users onboard app only via social login or do they have the flexibility to use any third-party Web3 wallets to connect to an app integrated with the {{config.extra.arcana.sdk_name}}?"

      Yes. 

      Besides social login, {{config.extra.arcana.sdk_name}} allows Web3 app users to log in to a Web3 app via any supported third-party browser-based Web3 wallets. 
      
      Apps using wallet connectors, [[wagmi-quick-start|Wagmi]], and [[rainbowkit-quick-start|RainbowKit]], [[web3-react-quick-start|Web3-React]], and [[walletconnect-quick-start|WalletConnect]] SDKs can enable {{config.extra.arcana.wallet_name}} to sign blockchain transactions.

??? an-faq "Is social login via a Microsoft account or Hotmail supported?"

      No.

      {{config.extra.arcana.sdk_name}} does not support passwordless login through a Hotmail account. Also users cannot log in using Microsoft accounts.
      
??? an-faq "Can a Web3 app use the {{config.extra.arcana.sdk_name}} only for onboarding users and disable the {{config.extra.arcana.wallet_name}} feature altogether?"

      There is no way to selectively turn off the {{config.extra.arcana.wallet_name}} features.  However, if the application **does not perform any blockchain transactions**, the wallet feature can be disabled by setting the [[concept-wallet-visibility|wallet visibility mode]] to `false` while integrating the app with the {{config.extra.arcana.sdk_name}}. In this case, the {{config.extra.arcana.wallet_name}} will not be visible to the authenticated user as long as **no blockchain transaction is triggered**. 

      If you need to completely disable the {{config.extra.arcana.wallet_name}} feature in the app, you can request a private build of the {{config.extra.arcana.wallet_name}} by [contacting {{config.extra.arcana.company_name}}]({{page.meta.arcana.root_rel_path}}/support/index.md) with the use case details.

??? an-faq "Will the {{config.extra.arcana.company_name}} Network's distributed key generation algorithm be affected if a node with a key share becomes temporarily inaccessible?"

      No.
      
      {{config.extra.arcana.company_name}}'s [ADKG]({{page.meta.arcana.root_rel_path}}/concepts/adkg.md) algorithm can still generate the key using the key shares from the other nodes that are accessible. The algorithm is designed to tolerate a certain number of nodes being inaccessible, depending on the total number of participating nodes. For more details, see [{{config.extra.arcana.company_name}}'s Technical Whitepaper](https://www.notion.so/Arcana-Technical-Docs-a1d7fd0d2970452586c693e4fee14d08).

??? an-faq "Does the authenticated user see the same wallet address if they use different authentication providers to log into a Web3 app integrated with the {{config.extra.arcana.wallet_name}}?"

      Yes. This is made possible by the [aggregate login]({{page.meta.arcana.root_rel_path}}/concepts/aggregatelogin.md) feature of the {{config.extra.arcana.sdk_name}}. 
      
      *For this feature to work, the user* **must** *have the same email ID registered with the different authentication providers.*
      
      {{config.extra.arcana.sdk_name}} uses the email ID to uniquely identify the user even if the user uses different social login providers or the passwordless email option to log in to a Web3 app. It associates a single key for such a user which results in the user seeing the same wallet address. If the user has different email IDs associated with different social login providers then each login is treated as a unique, different user and the same user will see a different wallet address when logging into the same Web3 app.

??? an-faq "Does the authenticated user see the same wallet address across multiple Web3 applications that integrate with the {{config.extra.arcana.sdk_name}}?"

      {{config.extra.arcana.sdk_name}} allows Web3 app developers to tailor the wallet address experience for their users. It provides two 'Keyspace' options at the time of application registration:

      * App-Specific Keys
      * Global Keys

      If a developer selects the **Global Keys** option, then the user gets assigned the same key across all applications that integrate with the {{config.extra.arcana.sdk_name}} and chooses the same **Global Keys** option. The same key means the wallet address of the user is the same across different Web3 apps that integrate with the {{config.extra.arcana.sdk_name}}.  This is true across apps that use EVM-compatible chains. If two apps use global keys but one of them is on an EVM-compatible chain and the other is not, then the keys will be different across such apps. The {{config.extra.arcana.company_name}}'s ADKG subsystem will assign the user different sets of keys for such apps resulting in different wallet addresses across such apps.

      For more details, see [[concept-keyspace-type|app-specific vs. global keys]]

??? an-faq "Does the **global keys** feature work across EVM-compatible and not EVM-compatible chains?"

      **No**.

      The global keys feature enables an authenticated user to have the same wallet address across different Web3 apps in the {{config.extra.arcana.company_name}} ecosystem.  
      
      However, an authenticated user will see **different wallet addresses across two chains configured in a single Web3 app if one of them is EVM-compatible whereas the other is not. Also, in the case of two Web3 apps, one of which uses an EVM-compatible chain and the other that uses chains that are not EVM-compatible, the authenticated user's wallet address will be different for each app.

??? an-faq "Why is the Global Keyspace option not enabled if I select the 'Custom Wallet UI' option during app registration in the {{config.extra.arcana.dashboard_name}}?"

      If a Web3 app developer chooses the 'Custom Wallet UI' instead of the built-in {{config.extra.arcana.wallet_name}} UI, during app registration via {{config.extra.arcana.dashboard_name}}, only 'app-specific keys' are allowed. This is for [[concept-keyspace-type#security|keyspace security]].
      
      Global keys allow users to have the same private key across all the apps that integrate with the {{config.extra.arcana.sdk_name}}. With custom wallet UI, global keys are disallowed to mitigate the security risk of a malicious app hacking into user keys and gaining access to not just one but all such apps with 'Global Keys' enabled.

??? an-faq "Are incognito/private windows in browsers and 'third-party cookies blocked' option supported by the {{config.extra.arcana.sdk_name}}?"

      Yes.

      The {{config.extra.arcana.wallet_name}} supports Chrome browser `Incognito Window` as well as `Private Window` in the case of Safari browsers. Earlier, if third-party cookies were disabled, the built-in, plug-and-play login pop-up modal did not show up in some cases.  These use cases are now addressed by the SDK.

      Developers can use the `canReconnect` and `reconnect` [functions of the `AuthProvider`](https://authsdk-ref-guide.netlify.app/classes/authprovider) to check before allowing users to reconnect whereby users do not need to re-login if they refresh the page or close the tab and re-open it again within a 30-minute window.

??? an-faq "Does {{config.extra.arcana.sdk_name}} return a JWT token to verify users post social login?"

      Yes. See [[concept-index-auth-type|{{config.extra.arcana.company_name}} JWT Token]] for details.

??? an-faq "How does the app access an authenticated user's information such as name, email, login token, the wallet address?"

      Apps can use the [`getUser()`](https://authsdk-ref-guide.netlify.app/classes/authprovider#getUser) method to obtain the user's name, email, login token ([[concept-arcana-jwt-token|{{config.extra.arcana.company_name}} JWT Token]], [[concept-did-token|DID Token]]), wallet address, etc. See {% include "./text-snippets/authsdkref_url.md" %} for details.

??? an-faq "For Twitter, the `getUser()` function of the `AuthProvider` does not always return the user's email?"

      You can create a Twitter account using your phone number without needing to provide an email address. If you do this, the getUser() function won't give you the user's email address.

      However, web3 app developers have the [option to configure settings on the Twitter developer dashboard](https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/manage-account-settings/api-reference/get-account-verify_credentials#:~:text=Request%20a%20User's%20Email%20Address,email%20address%20access%20to%20function) to request users' email addresses. If they do this, {{config.extra.arcana.sdk_name}} can access and retrieve the user's email through Twitter, and it will be included in the result when you use the getUser() function.    

??? an-faq "Does login via Passkey share any user or device information with the website or application?"

      No. 

      With [[concept-auth-passkeys|passkeys]], the user's biometric information, secrets, or private keys are never revealed to the website or the app where user is trying to sign in. User digital credentials do not leave the user's personal device. Also, the passkey protocols are carefully designed so that no information shared with sites can be used as a tracking vector.

      [See FIDO standard](https://fidoalliance.org/how-fido-works/), [Apple Passkeys security](https://support.apple.com/en-in/102195), [Microsoft Passkey Support](https://support.microsoft.com/en-us/account-billing/signing-in-with-a-passkey-09a49a86-ca47-406c-8acc-ed0e3c852c6d), [Google Passkey Security](https://developers.google.com/identity/passkeys/faq) for details.

??? an-faq "Is there any expiration limit on passkeys?"

      No.

      If required, users can delete passkeys associated with a website or application and create new ones.

??? an-faq "Can users create accounts with passkeys on {{config.extra.arcana.sdk_name}}?"

      Yes.

      Web3 apps using {{config.extra.arcana.sdk_name}} can use passkeys for signups and login or as an alternative login mechanism.
      
      Refer to [[concept-auth-passkeys| Passkey Support]] for details.

??? an-faq "Does the {{config.extra.arcana.sdk_name}} support role based access control (RBAC)?"

      Yes.

      After the user authenticates through the chosen [[concept-social-login|social login]] provider, the {{config.extra.arcana.sdk_name}} receives the JWT token from the provider. It verifies the user with this token, and then creates and returns an {{config.extra.arcana.company_name}} JWT token to the app.

      If the app developer needs to implement *Role Based Access Control (RBAC)* and authorize the authenticated user for some specific actions, they can first [[concept-jwt-token-validation|verify the JWT token returned by {{config.extra.arcana.company_name}}]]. Upon verification they can issue a new app-specific JWT that enables RBAC and authorization. 
      
      Alternately, developers can use Sign-In with Ethereum ([SIWE](https://www.npmjs.com/package/siwe)) by signing a standard message format parameterized by scope, session details, and security mechanisms (e.g., a nonce).
      
      SIWE allows users to log in to applications using their Ethereum wallet and ENS (Ethereum Name Service) profile.
      
## {{config.extra.arcana.wallet_name}}

---

??? an-faq "How does the in-app {{config.extra.arcana.wallet_name}} allow developers to manage UX for signing blockchain transactions?"

      Apps can integrate with the {{config.extra.arcana.sdk_name}} to enable an embedded, non-custodial Web3 {{config.extra.arcana.wallet_name}} for every authenticated app user.

      To integrate an app, developers must register and configure the app with {{config.extra.arcana.company_name}}, and then install the `{{config.extra.arcana.auth_sdk_pkg_name}}` package and create a new `AuthProvider`. While instantiating the `AuthProvider` developers can manage the user experience for signing blockchain transactions through the input parameter `alwaysVisible`. This parameter controls whether the {{config.extra.arcana.wallet_name}} UI is automatically displayed in the application's context right after a user authenticates or it shows up only when the app triggers a blockchain transaction that requires the user's approval.

      For details, see [[concept-wallet-visibility|{{config.extra.arcana.wallet_name}} visibility modes]].

??? an-faq "Does the {{config.extra.arcana.sdk_name}} set `window.ethereum` value in the app's context?"

      By default, {{config.extra.arcana.wallet_name}} does not set the `window.ethereum` value in the app's context. To explicitly set this value, during the integration of the app with the {{config.extra.arcana.wallet_name}}, when `AuthProvider` is instantiated, developers must specify the `setWindowParameter=true`. For details, see the [[web-auth-usage-guide|{{config.extra.arcana.wallet_name}} Usage Guide]].

??? an-faq "How is the in-app {{config.extra.arcana.wallet_name}} different from self-custodial wallets?"

      {{config.extra.arcana.wallet_name}} is a non-custodial wallet. Here is how it differs from the self-custodial wallets:

      | Self-custodial wallets | {{config.extra.arcana.company_name}}'s non-custodial wallet |
      | :--- | :--- |
      | Users need to be responsible for and remember their passphrases.| Users are not required to remember any passphrase.|
      | Users need to manage keys themselves in case of self-custody wallets. | {{config.extra.arcana.wallet_name}} offers a sweet spot, users don't have to manage keys as in the self-custody wallet and yet their keys can be generated in a distributed manner via the {{config.extra.arcana.wallet_name}}, a non-custodial wallet.|
      | Users who are new to Web3 typically find self-custodial wallets very challenging to use. | {{config.extra.arcana.wallet_name}} offers a really simple Web2-like onboarding experience for new Web3 users without sacrificing security and ownership.

## User Key Privacy

---

??? an-faq "If {{config.extra.arcana.company_name}} is storing nothing related to the user's private keys, how does {{config.extra.arcana.company_name}} provide the same wallet to a user when the user signs in for the second time?"

      The {{config.extra.arcana.sdk_name}} maintains a UserID -> Public Key mapping, that is how the user is identified across successive login sessions and the correct wallet is assigned for the authenticated user. This mapping is stored in the DKG nodes.

??? an-faq "How does the {{config.extra.arcana.sdk_name}} ensure that the key shares are fetched by the correct user only?"

      A user can log in only after the social login provider authenticates or if the user provides the OTP shared via email during passwordless onboarding. Providers share JWT/other identifiers with {{config.extra.arcana.sdk_name}} once the user authenticates. So unless the user themselves share their social ID / OTP, only an authenticated user will be allowed to access their key shares. The token (idToken) is verified with the DKG nodes before the key shares are sent back to the user. The token can be used only once per user login session.

??? an-faq "Can a malicious entity reconstruct the user's private key if they get all the requisite key shares?"

      There are several safeguards against this and we are continuously evolving the ADKG protocol to make it more robust and fast. 
      
      One of the methods is MFA. When the MFA feature is enabled, it further strengthens the security by using multiple factors to generate the private key besides the key shares. A local share is created for the user at the first login that lives on the user's device. This local key component stored on the user's device is required to get the actual private key. If a user changes the device, they are validated via PIN setup during MFA or security answers before the local share is re-created on the new device.
      
      Irrespective of whether MFA is enabled or not, the reconstruction of the private key happens only after ensuring that the user is:

      * authenticated through one of the configured social login providers,
      * verified by DKG before sharing the key shares. 
      
      The verification token ID changes for every user session so a malicious entity cannot reuse it. Also, note that the same set of key shares is not returned for every user session by the DKG nodes. Only a random subset of shares is needed to construct the private key. 

      In a future version of the ADKG protocol, the key shares will be periodically refreshed to safeguard against an eventuality if some of them are somehow stolen by a malicious user.
