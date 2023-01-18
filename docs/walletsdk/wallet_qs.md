---
slug: /auth_qs
id: idwallet_qs
sidebar_custom_props:
  cardIcon: 🛫
arcana:
  root_rel_path: ..
---

# Quick Start

In this guide, you will learn how you can quickly integrate your application with the [Arcana Auth SDK]({{page.meta.arcana.root_rel_path}}/concepts/authsdk.md) to:

* [onboard users]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/index.md) easily by configuring one or more [authentication mechanisms]({{page.meta.arcana.root_rel_path}}/concepts/authtype/arcanaauth.md#supported-authentication-mechanisms).
* [use Arcana wallet]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md) to sign blockchain transactions, manage tokens and [more]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md).

{% include "./text-snippets/sdk_version_info.md" %}

## Overview

To integrate an application with the Auth SDK, developers must:

1. Use the Arcana Developer Dashboard to register their application and obtain a unique **App Address**.
2. Configure user onboarding settings for the application using the dashboard. Application users will only see the onboarding options that are configured by the developer.
3. Install and integrate the application with the Auth SDK.

To enable the embedded Arcana wallet in an application, the application developers need to integrate with the Auth SDK and use the `AuthProvider` interface. The `AuthProvider` is a standard Ethereum Web3 provider that allows the application users to sign blockchain transactions after they have been authenticated. For more information on `AuthProvider`, see [Auth SDK Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md) and {% include "./text-snippets/authsdkref_url.md" %}.

## Register & Configure

First [register and configure]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) your application using the Arcana dashboard. As part of registration, a unique value, **App Address**, is assigned to each application. This is required for integrating the application with the Auth SDK.

Developers must choose one or more options to onboard users and [configure social login]({{page.meta.arcana.root_rel_path}}/howto/config_social_providers.md). This ensures that only the configured onboarding options are enabled in the Auth SDK. 

!!! note "Enable multiple login options"

    Web3 application developers can configure [one or more authentication mechanisms]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/index.md) using the dashboard and allow users to pick one of the available options to log in.

!!! caution "User Onboarding options"

    If the application is registered but not configured for any social login providers, by default, [passwordless login]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/wallet_pwdless_login.md) is the only option that is enabled for the application users.

## Install Auth SDK

{% include "./code-snippets/auth_install.md" %}

## Integrate Application

Follow these instructions [to integrate your application]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) with the Arcana Auth SDK. 

!!! tip "AuthProvider"

      Once you have installed and integrated your application, you can use the standard Ethereum Web3 Provider, `AuthProvider` in your application and call SDK functions for onboarding users and signing blockchain transactions. See [how to enable and use Arcana wallet]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md) for more details.

### Onboard Users

After installing and integrating with the Auth SDK, application developers can add code to onboard users. Two options are available depending on how much customization is needed for your use case.

1. Use [plug-and-play]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/wallet_plugnplay.md) feature to quickly enable the default pop-up user login interface. Developers are not required to build any user login UI. Application users can choose one of the authentication mechanisms configured by developers when the plug and play default UI offered by the Auth SDK shows up in the context of the application.

2. Build custom UI for your application and call Auth SDK functions for enabling [social authentication]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/build_social/index.md) and the [passwordless option]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/wallet_pwdless_login.md) for the application users.

### Sign Blockchain Transactions

Use the `AuthProvider` in your application and call standard JSON RPC Web3 wallet functions programmatically. Manage user experience for signing blockchain transactions with [wallet visibility settings]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/walletuimodes.md). Enable authenticated users to [sign blockchain transactions]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/wallet_sign.md), send and receive tokens, NFTs and [more]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md) using the Arcana Web3 wallet.

## Examples

Here are some examples of Auth SDK usage:

1. Check out how to integrate your application with Auth SDK and enable Web2-like familiar user onboarding via [Google]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/build_social/wallet_google_oauth.md), [passwordless login]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/wallet_pwdless_login.md).

2. Manage Web3 user experience for signing blockchain transactions with the Arcana wallet:

     - Enable authenticated users [to sign blockchain transactions]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/wallet_sign.md) by setting the Arcana wallet visibility parameter while instantiating the `AuthProvider`. 
     - Use pre-configured, supported blockchains or [add other EVM-compatible networks programmatically]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/wallet_add_switch_ntwk.md) as per your application requirements.
     - Enable application users to check account balances, send or receive ERC-20, ERC-721 and ERC-1155 tokens, deploy smart contracts, interact with smart contracts, switch networks, manage NFT collections, and [more]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md).  
  
## Developer & User Guides

  For more details on how users interact with the Arcana wallet, see [Arcana wallet User Guide]({{page.meta.arcana.root_rel_path}}/howto/wallet_ui.md). 
  
  Developers can refer to the [Auth SDK Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md) and the {% include "./text-snippets/authsdkref_url.md" %} for SDK usage details.

## See also

* [User Authentication]({{page.meta.arcana.root_rel_path}}/concepts/authtype/arcanaauth.md)
* [Video Tutorials]({{page.meta.arcana.root_rel_path}}/tutorials/videos/an_academy.md)
* [Configuring Arcana wallet visibility modes]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/config_wallet_modes.md)
* [Handling Auth SDK error messages]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_err.md)
* [Auth SDK Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md)
* {% include "./text-snippets/authsdkref_url.md" %}
