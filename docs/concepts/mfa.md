---
slug: /mfa
id: idmfa
sidebar_custom_props:
  cardIcon: 💠
arcana:
  root_rel_path: ..
---

# Multi-Factor Authentication (MFA)

Multi-factor authentication requires an app user to provide two or more verification factors to prove their identity. It is a more secure method of identity management and recovery. 

In the context of the Arcana Auth SDK, MFA makes user verification more robust and secure. With MFA, access to the user's identity or keys is no longer solely dependent upon the state-of-the-art asynchronous distributed key generation ([ADKG]({{page.meta.arcana.root_rel_path}}/concepts/dkg/index.md)) subsystem. The user's keys are generated at the client end using ADKG key shares and other factors including answers to security questions and random encrypted key shares.

## How does MFA work?

To leverage the MFA feature of the Arcana Auth SDK, developers need to integrate the app with the Auth SDK and also configure appropriate MFA settings using the Arcana Developer Dashboard. Besides that, once MFA is enabled for an app, the app users must answer security questions. These are required to create one of the 'multi-factor' components that are used to verify the user's identity.

Arcana Network does not store the user's security questions/answers. The app users are responsible for saving or securing their MFA answers.

![Concept no MFA](/img/concept_mfa.png)

## MFA Configuration Options

* **No MFA**: Authenticated users can access their key assembled locally on the client side using ADKG key shares without additional protection offered by the MFA feature. (Default setting)
* **Optional**: App developers can make MFA optional for user accounts and let the user decide and enable MFA for their individual identity. Users will be allowed to log into an app even if they choose to not answer or skip security questions. If a user chooses to not answer security questions and set up MFA for their account, they will be reminded after 'n' login attempts to secure their access by answering MFA security questions.
* **Mandatory**: In this case, the app user will not be allowed to log into an application until they answer the security questions for enabling MFA.

!!! caution "Cannot disable MFA once enabled"

      For security reasons, once the developers have enabled MFA via optional/mandatory setting using the Arcana Developer Dashboard, neither the developers themselves nor the app users (in case of optional MFA setting) can revert to the non-MFA configuration setting.

## MFA User Experience

* If a developer enables MFA for an app and makes it mandatory, users will be required to answer MFA security questions at the first login. Otherwise, users will not be able to log into the app.
* If a developer enables MFA and makes it optional, users can choose whether or not they would like to answer MFA security questions and enable MFA for their identity management and make it more secure. They will keep receiving periodic reminders to set up MFA and bolster security.
* Once enabled, MFA cannot be rolled back.
* If an app developer decides to change the MFA configuration setting for an app from no-MFA to 'MFA enabled' at a later point in time after users have started using the app and obtained keys (wallet address), those user keys or the wallet address assigned for the authenticated users will not change if the MFA configuration is changed.
* If an app developer decides to change the MFA configuration settings for an app from no-MFA to 'MFA enabled' at a later point in time and also switches the app blockchain network from an EVM-compatible chain to one that is not EVM-compatible, then new key assignments happen for that chain and this will cause a change in the user's wallet address.
* As part of MFA, there is some encrypted information stored on the user's local device. If a user logs into an app using a different device then the Arcana MFA algorithm is capable of detecting this scenario and reconstructing the missing information by asking the user to answer the MFA security questions stored earlier during the MFA setup. Those answers are used to identify the user on a new device and reconstruct the local MFA component on the new device.
* Once an app user answers the MFA security question for an MFA-enabled app, those same answers will work for other MFA apps that are deployed in the Arcana ecosystem.