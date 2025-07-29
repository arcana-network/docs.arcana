# Login Users via Passkeys

In this guide, you will learn how a Web3 app integrated with the {{config.extra.arcana.sdk_name}} let users  [[concept-auth-passkeys#sign-up-login|sign-up and login]] into the app via [[concept-auth-passkeys|passkeys]] as the only app onboarding.

## Prerequisites

* Make sure you can access the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}
* The app must be [[register-app-auth|registered using the {{config.extra.arcana.dashboard_name}}]]. A unique {{config.extra.arcana.app_address}} is assigned after app registration. It is required for integrating the app with the {{config.extra.arcana.sdk_name}}.
* [[config-auth-passkeys|Configure passkeys settings]] in the  {{config.extra.arcana.dashboard_name}}.
* Follow the instructions as per the app type and [[integrate-vanilla-app|integrate the app]] with the {{config.extra.arcana.sdk_name}}.

## Steps

*Follow these steps to enable sign-up & login via passkeys in a Web3 app that is integrated with the {{config.extra.arcana.sdk_name}}.*


 ### 1. Register Passkey

Add code to sign-up and create new user account via `registerWithPasskey()`. This will let the user create a new passkey and link it with the app in one shot. The newly created user will be assigned a blockchain wallet address as well. Once user has created the passkeys, enable the `Login with Passkey` option in the app UI.

 ### 2. Enable Passkey Login

Once passkeys are set up by the user, enable a 'login with passkey' option in the custom login UI of the app. When a user chooses this option to log in, call `loginWithPasskey`. This will bring up the device specific UI to display a list of passkeys linked with the app and let the user select one to onboard the app.

{% include "./code-snippets/auth_passkey_login.md" %}

{% include "./text-snippets/passkey_others.md" %}

**That is all.**  :material-party-popper:

Your dApp is all set for letting users sign-in and login via passkeys.

## What's Next?

Authenticated users can instantly access the in-app {{config.extra.arcana.wallet_name}} UI for signing blockchain transactions. Use the `AuthProvider` EIP-1193 standard Ethereum provider to call JSON/RPC functions and Web3 wallet operations in the app. [[evm-web3-wallet-ops|Learn more...]]

## See also

* [Authentication Types]({{page.meta.arcana.root_rel_path}}/concepts/authtype/index.md)
* [[index-config-social-providers|Configure Social Providers]]
* [[web-auth-error-msg|{{config.extra.arcana.sdk_name}} Errors]]
* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]
* [Auth SDK Reference]({{config.extra.arcana.auth_sdk_ref_url}})
