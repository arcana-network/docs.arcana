---
alias: concept-mfa
title: 'Multi-Factor Authentication'
description: 'Arcana Auth offers enhanced Arcana wallet security via the MFA feature. Learn more.'
arcana:
  root_rel_path: ..
---

# Multi-Factor Authentication

{{config.extra.arcana.product_name}} provides enhanced wallet security for the user with multi-factor authentication (MFA). 

MFA requires an app user to pass one more level of verification when accessing their wallet from a new browser or device. It is a more secure method of identity management and recovery. This is done partly by storing a local share of the private key on the user's machine. If this local share is lost then the user will have to recover it by either answering the security questions (any 3 of the 5 questions) or by entering their recovery pin at the time of login as an additional security measure to access their wallet. Once the share is recovered locally, user will not be asked to provide this information again on the same device or browser.

In the context of the {{config.extra.arcana.product_name}}, MFA makes user verification more robust and secure. With MFA, even if a malicious actor gains access to a user's email they will not be able to log in to that user's wallet on another device unless they answer that user's security questions or provide the recovery pin. Apart from the enhanced wallet security, enabling MFA also has the added advantage of allowing the user's keys to be accessible regardless of the existence of {{config.extra.arcana.company_name}}. 

## How does MFA work?

The MFA feature is enabled by default for all apps that integrate with the {{config.extra.arcana.sdk_name}}. Developers are not required to configure anything to use this feature. App users have complete control over whether they wish to enable MFA for their wallet or not.  

The figure below shows a high-level overview of how {{config.extra.arcana.company_name}} MFA works as part of the user login process.

![Concept MFA](/img/concept_mfa_light.png#only-light){.an-screenshots}
![Concept MFA](/img/concept_mfa_dark.png#only-dark){.an-screenshots}

### Security Questions

At the very first login, the user is prompted to set up MFA. The first step is to configure recovery method 1 - security questions. Users must choose 5 security questions either from the existing question bank or by adding their custom questions. The combination of questions and answers is used as a seed to generate one of the shares of the user's private key. 


### Recovery Pin

The final step in the MFA setup requires the user to provide an alphanumeric PIN of at least 6 digits. This pin is used to encrypt and store one of the multiple factors used by MFA to verify the user's identity. This is the backup component that is encrypted and stored with {{config.extra.arcana.company_name}} and utilized in case the user changes the device or the local encrypted component is lost/erased from the browser's cache.

## MFA Configuration Options

There are only two options:

* User authentication with no MFA
* User authentication with MFA

Web3 app developers have no control over enabling or disabling MFA for an app that is integrated with the {{config.extra.arcana.sdk_name}}. The app users choose to enable or disable it at the very first login. If they choose to skip configuring it on the first login they will be prompted on every 3rd login whether they would like to configure MFA. They can also enable MFA at a later point in time by using the {{config.extra.arcana.wallet_name}} UI. If they choose "Don't Ask Again" then they will not be prompted on that device. 

!!! caution "Cannot disable MFA once enabled"

      For security reasons, once the app user has enabled MFA for their account, it cannot be disabled.

## MFA User Experience

### No MFA

* A user logs into the app integrated with the {{config.extra.arcana.sdk_name}} for the first time. The user chooses to not use MFA. In this case, the user is **never** prompted to set up MFA on subsequent logins into the same browser on that device.  However, the user can choose at a later point in time to enable MFA. The user can log into the app, access the {{config.extra.arcana.wallet_name}}, and then enable MFA using the **User Profile** tab.

### With MFA

* At the very first login to an app that is integrated with the {{config.extra.arcana.sdk_name}}, the user is prompted for enabling MFA. The user goes through the steps of enabling MFA as described above. Once enabled, MFA cannot be disabled for a user account. Subsequently, every time the user logs into the app using the same browser and same device, MFA will be active & no additional verification steps will be required.  

* As part of MFA, there is some encrypted information stored on the user's local device. If this information is lost or if a user logs into the same Web3 app using a different device or uses a different browser then the {{config.extra.arcana.company_name}} MFA algorithm is capable of detecting this scenario and reconstructing the missing information by asking the user to regenerate this information. The user must supply **one** of the following pieces of information to regenerate the local MFA factor:

    - Answer three of the five MFA security questions that were stored earlier during the MFA setup. 
    - Provide the recovery pin.
  
    Based on the user's recovery choice, either the user's answers or the PIN will be used to verify the user's identity.

* The recovery of the local MFA factor is per device. Meaning, once an app user answers the MFA security question for an MFA-enabled app they will not be prompted to answer the questions again for any other app on the same device as long as they are logging into the same wallet.