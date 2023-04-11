---
slug: /mfa-user-guide
id: idmfauserguide
sidebar_custom_props:
  cardIcon: 📺
arcana:
  root_rel_path: ../..
---

# MFA Setup

In this guide users of Web3 apps that integrate with the {{config.extra.arcana.sdk_name}} will learn how to enable multi-factor authentication, MFA, and secure their blockchain access. 

See [how MFA works]({{page.meta.arcana.root_rel_path}}/concepts/mfa.md) for more details.

## Enabling MFA at Login

Log in to an app that is integrated with the {{config.extra.arcana.sdk_name}} using one of the available authentication providers. At the very first login to such an app, the user will see the following MFA setup prompt:

<img src="/img/an_mfa_setup_firstlogin.png" alt="MFA first login setup prompt" class="an-screenshots-noeffects" width="45%"/>

Click **Proceed** to the next step of the MFA setup. The user must provide answers to five security questions. You can use the security questions already listed there or create new ones by clicking in the question field and saving them.

<img src="/img/an_mfa_setup_qa.png" alt="MFA qa setup" class="an-screenshots-noeffects" width="55%"/>

As a user, make sure that the responses to the security questions are saved locally so that they are not forgotten when it comes time to recover access to the wallet. 

## Recovery PIN

The last step of MFA setup requires the user to provide a 6-digit alphanumeric PIN that is used to encrypt the backup of one of the MFA constituents and store it in the Arcana ecosystem. 

<img src="/img/an_mfa_pin.png" alt="MFA PIN" class="an-screenshots-noeffects" width="60%"/>

That is all! 
The MFA setup is complete and user's account is enabled for MFA use.

## Enabling MFA Later

If the user chose to not enable MFA at the first login into the app, it can be enabled later. Note that once enabled, MFA cannot be disabled for a user account.

To enable MFA, log into the app that is integrated with the {{config.extra.arcana.sdk_name}}. Access the {{config.extra.arcana.wallet_name}} and click on the **User Profile** tab to view the wallet screen. Choose **Setup Now** and then click **Proceed** to set up security questions, answers and specify the recovery PIN as described in the previous section.

<img src="/img/an_mfa_enable_later_tab.gif" alt="Enable later" class="an-screenshots-noeffects" width="35%"/>

## MFA Secret Recovery

If the user logs into an app using a different device or a different browser, then the local component of the MFA needs to be regenerated to prove the user's identity. At login, the MFA prompt will guide the user to choose one of the options to recover the encrypted MFA component on the new device or the browser. User can choose one of the options to recover:

* Enter the MFA recovery PIN stored during the MFA setup earlier
* Answer three security questions correctly

<img src="/img/an_mfa_recover_options.png" alt="Recovery Options" class="an-screenshots-noeffects" width="55%"/>

Once the user provides one of these options, the local MFA factor is regenerated and the user will not be asked for it again on the same device or the browser app unless local storage is cleared for some reason.

## MFA Errors


| MFA Phase | Error Message | Cause  | Corrective Action |
| :--- | :--- | :--- | :--- |
| MFA Setup | **Share expired. Please log in again to continue.**| If a user logs into the app and chooses to enable MFA, but fails to complete the MFA setup within 24 hours of login initiation, you will see this error.| This error can be resolved by making sure that once initiated, the user completes the MFA setup a few minutes before the session expires.|
| MFA Setup | **Security questionnaire errors.** | These errors are displayed when the user is setting up MFA and specifying the security questions and answers.| User must answer all the required questions, each question should be unique and not repeated, an empty string is not allowed for a security question.|
| MFA Setup | **PIN validation errors.** | These errors are displayed when the user is setting up the MFA PIN.| Make sure that a 6-digit alphanumeric PIN is provided during MFA setup. The PIN cannot have a space character and should have a minimum of 6 characters and a maximum of 25 characters.|
| MFA Recovery | **Incorrect security answer.** | This error is displayed during MFA secret recovery process if the user fails to provide the correct answer to any of the three security questions.| Provide the correct answer or choose a different question for which you remember the answer. Alternatively, try using the correct PIN for completing the MFA secret recovery process.|
| MFA Recovery | **Incorrect PIN.** | During MFA recovery, if the user chooses to use the PIN and enters an incorrect PIN, this error is displayed.| Use the correct PIN or try an alternative method of MFA recovery by answering the security questions correctly.|
| MFA Recovery | **Computed address did not match the actual address** | This error occurs when the address computed on the user's local device does not match the one that is decrypted locally after retrieving it from the Arcana encrypted store. It can happen when somehow the local address component is tampered with or corrupted. | Simply clearing the app's local storage in the browser should allow the user to verify their identity via MFA and use the app.|