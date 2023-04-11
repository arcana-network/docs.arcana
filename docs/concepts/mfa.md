---
slug: /mfa
id: idmfa
sidebar_custom_props:
  cardIcon: 💠
arcana:
  root_rel_path: ..
---

# Multi-Factor Authentication (MFA)

Multi-factor authentication requires an app user to pass one more level of verification when accessing their wallet from a new browser or device. It is a more secure method of identity management and recovery. This is done partly by storing a local share of the private key on the user's machine and if that share is lost then they will have to either answer security questions (any 3 of the 5 questions) or enter their recovery pin to access their wallet.

In the context of the Arcana Auth, MFA makes user verification more robust and secure. With MFA, even if a malicious actor gains access to a user's email they will not be able to log in to that user's wallet on another device unless they answer that user's security questions or provide recovery pin. Apart from that enabling MFA also has the added advantage allowing the user's keys to be accessible regardless of the existence of Arcana. 

## How does MFA work?

The MFA feature of the Arcana Auth SDK is enabled by default for all apps that integrate with the Auth SDK. Developers are not required to configure anything to use this feature. App users have complete control over whether they wish to enable MFA for their wallet or not.  

The figure below shows a high-level overview of how Arcana MFA works as part of the user login process.

![Concept no MFA](/img/concept_mfa.png){.an-screenshots}

### Security Questions

At the very first login, the user is prompted to set up MFA. The first step is to configure recovery method 1 - security questions. Users must choose 5 security questions either from the existing question bank or by adding their own custom questions. The combination of questions and answers are used as a seed to generate one of the shares of the user's private key. 


### Recovery Pin

The final step in the MFA setup requires the user to provide an alphanumeric PIN of at least 6 digits. This pin is used to encrypt and store one of the multiple factors used by MFA to verify the user's identity. This is the backup component that is encrypted and stored on the Arcana Network and utilized in case the user changes the device or the local encrypted component is lost/erased from the browser's cache.

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

* The recovery of the local MFA factor is per device. Once an app user answers the MFA security question for an MFA-enabled app, those same answers will work for other MFA apps too when the same device is used to log into those apps deployed in the Arcana ecosystem.