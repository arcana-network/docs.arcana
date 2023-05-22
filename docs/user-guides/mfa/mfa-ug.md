---
alias: mfa-user-guide
title: 'MFA User Guide'
description: 'Web3 app users can enable enhanced wallet security by using Arcana Auth MFA feature.'
arcana:
  root_rel_path: ../..
---

# MFA Setup

In this guide users of Web3 apps that integrate with the {{config.extra.arcana.sdk_name}} will learn how to enable multi-factor authentication, MFA, for enhanced wallet security. 

See [how MFA works]({{page.meta.arcana.root_rel_path}}/concepts/mfa.md) for more details.

## Enabling MFA at Login

Log in to an app that is integrated with the {{config.extra.arcana.sdk_name}} using one of the available authentication providers. At the very first login user is prompted to set up enhanced wallet security by configuring two-factor authentication:

<img src="/img/an_mfa_setup_firstlogin.gif" alt="MFA first login setup prompt" class="an-screenshots-noeffects" width="25%"/>

Click **Proceed** to set up MFA.

User must provide answers to five security questions and create a recovery PIN. 

### Security Questions

You can use the security questions already listed in the drop-down list or create custom questions by clicking in the question field and editing them.

<img src="/img/an_mfa_setup_qa.png" alt="MFA qa setup" class="an-screenshots-noeffects" width="30%"/>

### Recovery PIN 

The MFA setup also requires the user to provide a 6-digit alphanumeric PIN which is an additional recovery method for the user. 

<img src="/img/an_mfa_pin.png" alt="MFA PIN" class="an-screenshots-noeffects" width="30%"/>

That is all! 
After saving the PIN, MFA Setup is complete, and enhanced wallet security is enabled.

<img src="/img/an_mfa_complete.png" alt="MFA PIN" class="an-screenshots-noeffects" width="30%"/>

!!! note 

      Save the responses to the security questions and the PIN carefully as you will need to provide either the answers or the PIN for multi-factor authentication when logging into the app from a new device or browser.

## Enabling MFA Later

If the user chose to not enable MFA at the first login into the app, it can be enabled later. Note that once enabled, MFA cannot be disabled for a user account.

To enable MFA, log into the app that is integrated with the {{config.extra.arcana.sdk_name}}. Access the {{config.extra.arcana.wallet_name}} and click on the **User Profile** tab. Click **Setup Now** and then choose **Proceed** to set up security questions, and answers and specify the recovery PIN as described in the previous section.

<img src="/img/an_mfa_enable_later_tab.png" alt="Enable later" class="an-screenshots-noeffects" width="20%"/>

## MFA Recovery

If the user logs into an app using a different device or a different browser, then the local component of the MFA needs to be regenerated. This is required to prove the user's identity for wallet access. At login, the MFA prompt will guide the user to choose one of the options to recover the encrypted MFA component on the new device or the browser. The user can choose the recovery options:

* Enter the MFA recovery PIN stored during the MFA setup earlier
* Answer three security questions correctly

<img src="/img/an_mfa_recover_options.png" alt="Recovery Options" class="an-screenshots-noeffects" width="35%"/>

Once the user provides one of these options, the local MFA factor is regenerated and the user will not be asked for it again on the same device or the browser app unless local storage is cleared for some reason.

## MFA Errors


| MFA Phase | Error Message | Cause  | Corrective Action |
| :--- | :--- | :--- | :--- |
| MFA Setup | **Share expired. Please log in again to continue.**| If a user logs into the app and chooses to enable MFA, but fails to complete the MFA setup within 24 hours of login initiation, you will see this error.| This error can be resolved by making sure that once initiated, the user completes the MFA setup a few minutes before the session expires.|
| MFA Setup | **Security questionnaire errors.** | These errors are displayed when the user is setting up MFA and specifying the security questions and answers.| User must answer all the required questions, each question should be unique and not repeated, an empty string is not allowed for a security question.|
| MFA Setup | **PIN validation errors.** | These errors are displayed when the user is setting up the MFA PIN with invalid characters.| Make sure that a 6-digit alphanumeric PIN is provided during MFA setup. The PIN cannot have a space character and should have a minimum of 6 characters and a maximum of 25 characters.|
| MFA Recovery | **Incorrect security answer.** | This error is displayed during MFA secret recovery process if the user fails to provide the correct answer to any of the three security questions.| Provide the correct answer or choose a different question for which you remember the answer. Alternatively, try using the correct PIN for completing the MFA secret recovery process.|
| MFA Recovery | **Incorrect PIN.** | During MFA recovery, if the user chooses to use the PIN and enters an incorrect PIN, this error is displayed.| Use the correct PIN or try an alternative method of MFA recovery by answering the security questions correctly.|
| MFA Recovery | **Computed address did not match the actual address** | This error occurs when the address computed on the user's local device does not match the one that is decrypted locally after retrieving it from the {{config.extra.arcana.company_name}} encrypted store. It can happen when somehow the local address component is tampered with or corrupted. | Simply clearing the app's local storage in the browser should allow the user to verify their identity via MFA and use the app.|