# Login Users via Passkeys

In this guide, you will learn how a Web3 app integrated with the {{config.extra.arcana.sdk_name}} can let users set up [[concept-auth-passkeys|passkeys]] as an [[concept-auth-passkeys#alternate-login|alternative login]] option.

## Prerequisites

* Make sure you can access the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}
* The app must be [[register-app-auth|registered using the {{config.extra.arcana.dashboard_name}}]]. A unique {{config.extra.arcana.app_address}} is assigned after app registration. It is required for integrating the app with the {{config.extra.arcana.sdk_name}}.
* [[config-auth-passkeys|Configure passkeys settings]] in the  {{config.extra.arcana.dashboard_name}}.
* Follow the instructions as per the app type and [[integrate-vanilla-app|integrate the app]] with the {{config.extra.arcana.sdk_name}}.

## Steps

*Follow these steps to enable passkeys as an alternative login for users in a Web3 app integrated with the {{config.extra.arcana.sdk_name}}.*

### 1. Authenticate User

Add code to onboard users via [[index-build-social-providers|social login]] or [[build-password-less-auth|passwordless]] options. Use `loginWithSocial` or `loginWithOTP` to onboard users for their first login without passkeys.

### 2. Link Passkeys

In the authenticated user's context, check if the browser supports logging in via passkey through the `IsPasskeyLoginSupported` function. If the app browser supports passkeys, call `linkPasskey` function in the authenticated user's context to bind the passkey with the app. 

{% include "./code-snippets/auth_passkey_is_supported.md" %}

The `linkPasskey` function invokes the device/browser specific passkey functionality. User will be prompted to create a passkey if none exist on the device. Or a list of available passkeys will be displayed for the user to choose from. Then the selected passkey can be linked or bound to the app for future login attempts. 

{% include "./code-snippets/auth_passkey_create_link.md" %}

After passkeys are set for the app, the `getMyPasskeys` can be called in the authenticated user's context to list all the user passkeys linked with the app on the device/browser.

{% include "./code-snippets/auth_passkey_getlist.md" %}

### Enable Passkey Login

Once passkeys are set up by the user, enable a 'login with passkey' option in the custom login UI of the app. When a user chooses this option to log in, call `loginWithPasskey`. This will bring up the device specific UI to display a list of passkeys and let the user select one to onboard the app.

{% include "./code-snippets/auth_passkey_login.md" %}

{% include "./text-snippets/passkey_others.md" %}

**That is all.**  :material-party-popper:

Your dApp is all set for onboarding users via the passkeys option.

## What's Next?

Authenticated users can instantly access the in-app {{config.extra.arcana.wallet_name}} UI for signing blockchain transactions. Use the `AuthProvider` EIP-1193 standard Ethereum provider to call JSON/RPC functions and Web3 wallet operations in the app. [[evm-web3-wallet-ops|Learn more...]]

## See also

* [Authentication Types]({{page.meta.arcana.root_rel_path}}/concepts/authtype/index.md)
* [[index-config-social-providers|Configure Social Providers]]
* [[web-auth-error-msg|{{config.extra.arcana.sdk_name}} Errors]]
* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]
* [Auth SDK Reference]({{config.extra.arcana.auth_sdk_ref_url}})
