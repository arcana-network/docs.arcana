# User Login with {{page.meta.arcana.social_provider_name}}

In this guide, you will learn how a {{page.meta.arcana.app_type}} app integrated with the {{config.extra.arcana.sdk_name}} and  {{config.extra.arcana.react_sdk_name}} can onboard users with a custom login UI through {{page.meta.arcana.social_provider_name}} authentication.

## Prerequisites

* Make sure you can access the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}

* Use the [{{config.extra.arcana.dashboard_name}}]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md) to [[register-app-auth|register the app]] and obtain a unique {{config.extra.arcana.app_address}} required for integrating the app with the {{config.extra.arcana.sdk_name}}.

* Carefully [[config-auth-{{page.meta.arcana.social_provider_tag}}|follow the instructions to configure {{page.meta.arcana.social_provider_name}}]] as the authentication provider.
  
* Use the instructions and [[integrate-react-nextjs-app|integrate the React app]] with the {{config.extra.arcana.sdk_name}} and the {{config.extra.arcana.react_sdk_name}} before adding code to onboard users.
    
## Steps

*Using {{page.meta.arcana.social_provider_name}} to onboard users in a {{page.meta.arcana.app_type}} app requires a single line of code.*

## Step 1: Use `loginWithSocial`

{% include "./code-snippets/auth_react_useauth_custom.md" %}

**That is all.**  :material-party-popper:

The {{page.meta.arcana.app_type}} app is all set for onboarding users via {{page.meta.arcana.social_provider_name}}.

{% include "./text-snippets/jwt_token.md" %}

## What's Next?

Authenticated users can instantly access the in-app {{config.extra.arcana.wallet_name}} UI for signing blockchain transactions. Use the `AuthProvider` EIP-1193 standard Ethereum provider to call JSON/RPC functions and Web3 wallet operations in the app. [[evm-web3-wallet-ops|Learn more...]]

## See also

* [Authentication Types]({{page.meta.arcana.root_rel_path}}/concepts/authtype/index.md).
* [{{config.extra.arcana.react_sdk_name}} Reference Guide](https://auth-react-sdk-ref-guide.netlify.app/)
* [[web-auth-error-msg|Handling authentication errors]]
* [Auth Examples](https://github.com/arcana-network/auth-examples)