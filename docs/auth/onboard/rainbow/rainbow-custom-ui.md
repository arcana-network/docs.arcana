---
alias: onboard-rainbow-app-custom-ui
title: 'RainbowKit App: Build Custom Login UI'
description: 'Onboard Users via Custom Login UI in Web3 RainbowKit apps integrated with the Arcana Auth SDK using the instructions listed here.'
arcana:
  root_rel_path: ../..
  app_type: "'RainbowKit'"
  app_example_submodule: "`sample-auth-rainbowkit-viem`, `sample-auth-rainbowkit"
  social_provider: "'google'"
  pnp_login_ui_tag: "onboard-rainbow-app-pnp-ui"
---

# Custom Login UI

Onboard users in a {{page.meta.arcana.app_type}} app integrated with the {{config.extra.arcana.sdk_name}} through a custom login UI.

{% include "./text-snippets/info-alternative-onboard-pnp-login.md" %}

## Prerequisites

* [[register-app-auth|Register]] the Wagmi app and configure SDK usage [[index-config-social-providers|settings for social login]] providers, [[configure-wallet-chains|manage app chains]] and [[index-setup-wallet|wallet user experience]].

* Install the [[sdk-installation|required SDK packages]] for {{page.meta.arcana.app_type}}.

* [[integrate-wagmi-app|Integrate]] {{page.meta.arcana.app_type}} app and create `AuthProvider`, `ArcanaConnector`.

## Steps

### 1. Configure `ArcanaConnector`

`ArcanaConnector` is created earlier as part of SDK integration. When using a custom login UI to onboard users, configure `ArcanaConnector` differently.

Add code in the custom UI for onboarding via social login and passwordless options by using the `setLogin` function. 

_Enable Authentication Provider_

{% include "./code-snippets/auth_wagmi_configure_custom_ui.md" %}

_Enable Passwordless Login_

{% include "./code-snippets/auth_wagmi_configure_custom_ui_pwdless.md" %}

!!! an-tip "Single Provider Optimization"

      When using a single social login provider, specify it when creating ArcanaConnector to optimize onboarding. There's no need to use setLogin later in the custom login UI code.

      For multiple social login providers, create ArcanaConnector without specifying a provider. Use the setLogin function later based on the user's choice.

### 2. Set up `WagmiConfig`

Use the `ArcanaConnector` and set up [Wagmi config](https://wagmi.sh/react/getting-started).

{% include "./code-snippets/auth_rainbow_create_client.md" %}

### 3. Initialize RainbowKit App Components

{% include "./code-snippets/auth_rainbow_use.md" %}

## What's Next?

{% include "./text-snippets/quick-start-sign-transactions.md" %}

## See also

* [[web-auth-error-msg|{{config.extra.arcana.sdk_name}} Errors]]
* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]
* [Auth SDK Reference]({{config.extra.arcana.auth_sdk_ref_url}})
* [Auth Wagmi SDK Reference]({{config.extra.arcana.wagmi_sdk_ref_url}})