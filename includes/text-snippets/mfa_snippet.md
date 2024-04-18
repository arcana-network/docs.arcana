{{config.extra.arcana.product_name}} offers heightened wallet security through MFA.

MFA adds an extra layer of verification when accessing the wallet from a new browser or device. It involves storing a local share of the private key on the user's device. If lost, the user can recover it by answering security questions or entering a recovery pin during login. Once recovered, this information isn't required again on the same device or browser.

MFA enhances user verification, making it resilient even if an attacker gains access to the user's email / social identifier. Without the security questions or recovery pin, unauthorized access remains thwarted. Also, MFA ensures if the key share generation ADKG subsystem is compromised, the user's keys remain secure and any attempt to reconstruct user's key via hacked shares fails.

## How does MFA work?

MFA is automatically enabled for all {{config.extra.arcana.sdk_name}} integrated apps, requiring no developer configuration. Users can choose to enable or disable MFA for their wallets.

The figure below provides a high-level overview of the {{config.extra.arcana.company_name}} MFA in the user login process.

<figure markdown="span">
  ![Concept MFA]({{config.extra.arcana.img_dir}}/concept_mfa_light.{{config.extra.arcana.img_png}}#only-light){ .an-screenshots }
  ![Concept MFA]({{config.extra.arcana.img_dir}}/concept_mfa_dark.{{config.extra.arcana.img_png}}#only-dark){ .an-screenshots }
  <figcaption>MFA: Under the Hood</figcaption>
</figure>

### Security Questions

At the initial login, users are asked to optionally set up MFA. The first step involves configuring the first recovery method: security questions. Users select 5 security questions from the provided options or create custom questions. These questions and answers together serve as a seed to generate a share of the user's private key.


### Recovery Pin

The last step in the MFA setup involves the user creating a 6-digit or longer alphanumeric PIN. This PIN encrypts and stores one of the multiple verification factors used by MFA. It serves as a backup, stored securely with {{config.extra.arcana.company_name}}, in case the user changes devices or loses the locally stored encrypted component in their browser's cache.

## MFA Configuration Options

Users have two options:

* User authentication without MFA
* User authentication with MFA

Web3 app developers cannot control MFA activation for an app integrated with {{config.extra.arcana.sdk_name}}. Users decide to enable or disable it at their first login. If they skip configuration initially, they will be prompted every third login to set up MFA. Users can also enable MFA later using the {{config.extra.arcana.wallet_name}} UI. Selecting 'Don't Ask Again' will disable future prompts on that device

!!! an-caution "Cannot disable MFA once enabled"

      Once enabled, MFA cannot be disabled for security reasons.

## MFA User Experience

### No MFA

On their first login to an app integrated with {{config.extra.arcana.sdk_name}}, users can opt not to use MFA. They will **not be asked** to set it up on subsequent logins with the same browser and device. However, they can enable MFA later via the **User Profile** tab in the {{config.extra.arcana.wallet_name}} UI.

### With MFA

* During their initial login to an app integrated with {{config.extra.arcana.sdk_name}}, users are prompted to enable MFA. Once activated, it cannot be disabled for that account. On subsequent logins with the same browser and device, MFA will be in effect, requiring no additional verification steps.  

* MFA stores encrypted data on the user's local device. If this data is lost or if the user logs in from a different device or browser, {{config.extra.arcana.company_name}}'s MFA system can detect this and prompt the user to regenerate the missing data. Regeneration requires either answering three of five security questions from the MFA setup or providing the recovery pin, depending on the user's choice.

* The local MFA factor recovery is device-specific. Once users answer security questions for an MFA-enabled app on a device, they won't be asked to answer them again for any other app on the same device, as long as it's the same wallet.