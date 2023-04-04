---
slug: /mfa
id: idmfa
sidebar_custom_props:
  cardIcon: 💠
arcana:
  root_rel_path: ..
---

# Multi-Factor Authentication (MFA)

Multi-factor authentication requires an app user to provide two or more verification factors to prove their identity. It is a more secure method of identity management and recovery. If a user loses the local verification component of the identity that is encrypted and stored securely in the browser in the app's context then it can be recovered. To recover the encrypted stored share in the Arcana ecosystem, the user must answer a minimum of three security questions correctly or they must provide the secret and decrypt the stored component in the Arcana ecosystem.

In the context of the Arcana Auth SDK, MFA makes user verification more robust and secure. With MFA, access to the user's identity or keys is no longer solely dependent upon the state-of-the-art asynchronous distributed key generation ([ADKG]({{page.meta.arcana.root_rel_path}}/concepts/dkg/index.md)) subsystem. The user's keys are generated at the client end using ADKG key shares and other factors including answers to security questions and random encrypted key shares.

## How does MFA work?

The MFA feature of the Arcana Auth SDK is enabled by default for all apps that integrate with the Auth SDK. Developers are not required to configure anything to use this feature. App users have complete control over whether they wish to enable MFA for their app account access or not.  

The figure below shows a high-level overview of how Arcana MFA works as part of the user login process.

![Concept no MFA](/img/concept_mfa.png){.an-screenshots}

### Security Questions

At the very first login, the user is prompted to set up MFA. Once MFA is selected, the app users must answer at least 5 pre-packaged security questions or create custom questions and store the answers. The answers to security questions are required to create one of the 'multi-factor' components that are used to verify the user's identity.

The Arcana ecosystem does not provide a means to retrieve or create a backup copy of these user-specified questions/answers. The app users are responsible for memorizing or securing their MFA questions/answers.

### Encryption Pin

The final step in the MFA setup requires the user to provide an alphanumeric PIN of at least 6 digits. This pin is used to encrypt and store one of the multiple factors used by MFA to verify the user's identity. This is the backup component that is encrypted and stored in the Arcana ecosystem and utilized in case the user changes the device or the local encrypted component is lost/erased from the browser's cache.

## MFA Configuration Options

There are only two options:

* User authentication with no MFA
* User authentication with MFA

Web3 app developers have no control over enabling or disabling MFA for an app that is integrated with the Auth SDK. The app users choose to enable or disable it at the very first login. They can enable MFA at a later point in time by using the Arcana wallet UI. 

!!! caution "Cannot disable MFA once enabled"

      For security reasons, once the app user has enabled MFA for their account, it cannot be disabled.

## MFA User Experience

### No MFA

* A user logs into the app integrated with the Auth SDK for the first time. The user chooses to not use MFA. In this case, the user is **never** prompted on subsequent logins to set up MFA.  However, the user can choose at a later point in time to enable MFA. The user can log into the app, access the Arcana wallet and then enable MFA using the **User Profile** tab.

### With MFA

* At the very first login to an app that is integrated with the Auth SDK, the user is prompted for choosing MFA. The user chooses to enable MFA. Once enabled, MFA cannot be disabled for a user account. Every time the user logs into the app subsequently, using the same browser and same device, there will be no prompt but MFA will be active.  

* As part of MFA, there is some encrypted information stored on the user's local device. If this information is lost or if a user logs into the same Web3 app using a different device or uses a different browser then the Arcana MFA algorithm is capable of detecting this scenario and reconstructing the missing information by asking the user to regenerate this information. The user must supply **one** of the following pieces of information to regenerate the local MFA factor:

  - Answer three of the five MFA security questions that were stored earlier during the MFA setup. 
  - Provide the encryption PIN that was used to encrypt and store the recovery information in the Arcana ecosystem.
  
  Based on the user's recovery choice, either the user's answers or the PIN input locally can be used to decrypt the backup MFA component stored in the Arcana ecosystem and verify the user's identity.

* Once an app user answers the MFA security question for an MFA-enabled app, those same answers will work for other MFA apps that are deployed in the Arcana ecosystem.