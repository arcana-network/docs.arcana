---
slug: /whyan
id: idwhyan
title: Why Arcana Network?
sidebar_custom_props:
  cardIcon: 📝
arcana:
  root_rel_path: .
---

# Why Arcana Network?

{% include "./text-snippets/sdk_version_info.md" %}

Arcana Network is on a mission to build an ecosystem of components that enables developers to build Web3 applications quickly, securely and with complete data privacy and ownership for application users.

This is totally unlike Web2, where user data is owned by the applications and corporations and users have no control over who sees or accesses their data.

{% include "./text-snippets/tut_mission_url.md" %}

## Privacy-Preserving Applications

If you are building Web3 applications or dApps that require complete data privacy, and security, the Arcana Network Platform does the heavy lifting for you to onboard users using popular social providers and passwordless options. Onboard your dApp users easily and quickly enable them to sign blockchain transactions, manage tokens and more without having to bother about the Web3 secret key management.

At Arcana, we take security, privacy, and ownership seriously. We are actively working towards tracking and plugging in any vulnerabilities in our solution.

Take a quick look at the overview of the [architecture and key components]({{page.meta.arcana.root_rel_path}}/howitworks.md) of the Arcana network platform and see [Arcana Network Technical White Paper v1.0](https://www.notion.so/arcananetwork/Arcana-Technical-Docs-a1d7fd0d2970452586c693e4fee14d08) for implementation details.

!!! tip

     If you prefer to immediately jump into integrating your dApp with the Arcana Network right away, see the Arcana [Quick Start Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_qs.md). :material-rocket-launch:

## Build dApps faster

As a Web3 application developer, you can focus on core application logic while delegating essential tasks related to end-user onboarding, signing blockchain transactions, and data management to Arcana.

### 1. Onboard dApp users effortlessly

Developers can easily plug in popular Web2 sign up/login mechanisms in your Web3 applications and lower the barrier to entry for users. 

The Arcana Auth SDK allows developers to choose the default, built-in plug-and-play user authentication UI via `connect` function of the Auth SDK. Or, they can customize and build their own user authentication UI and call `loginWithSocial` and `loginWithLink` functions to allow users to use the configured social providers and passwordless option for onboarding the app. 

Read more about the [plug-and-play auth]({{page.meta.arcana.root_rel_path}}/concepts/plugnplayauth.md) feature, [how to enable plug and play in your application]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/wallet_plugnplay.md). Learn how to configure and enable [social providers]({{page.meta.arcana.root_rel_path}}/concepts/authtype/arcanaauth.md) and [how to build custom UX for authenticating users via these configured social providers]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/build_social/index.md) in your app.

### 2. Sign blockchain transactions securely

Allow authenticated Web3 application users to securely sign blockchain operations without bothering about managing secrets and keys. No centralized authority manages user keys in the Arcana Auth DKG subsystem. Use the embedded Arcana wallet provided by the Auth SDK to let the authenticated users easily review and sign blockchain transactions. 

Read more about the [Arcana wallet features]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md) and [how to programmatically use Arcana wallet in Web3 applications]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md). Check out the [Arcana wallet User Guide]({{page.meta.arcana.root_rel_path}}/user_guides/wallet_ui/index.md) to learn more about various Web3 wallet operations that can be accessed by the application users.

## Flexibility & Choice

Tailor the user experience for your Web3 applications as per your use case and target audience. See [use cases guide]({{page.meta.arcana.root_rel_path}}/use_cases.md).

## See Also

* [Code Samples]({{page.meta.arcana.root_rel_path}}/tutorials/code_samples/index.md)
* [Auth SDK Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md)
* {% include "./text-snippets/authsdkref_url.md" %}
