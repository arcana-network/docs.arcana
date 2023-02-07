---
slug: /whatisan
id: idwhatisan
title: What is Arcana Network?
sidebar_custom_props:
  cardIcon: 📝
arcana:
  root_rel_path: .
---

# What is Arcana Network?

[Arcana Technical White Paper]: https://www.notion.so/Arcana-Technical-Docs-a1d7fd0d2970452586c693e4fee14d08

---

Arcana Network is an **EVM-compatible platform** for developers to quickly build **privacy-preserving Web3 applications**. It enables developers to quickly onboard users by simplifying the Web3 onboarding process and making it easy for developers to allow authenticated users to sign blockchain transactions.

Arcana Network offering consists of two key components:

* Developer Dashboard
* Auth SDK

[Get Started :fontawesome-solid-paper-plane:]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_qs.md){ .md-button }

!!! caution

      Arcana Auth SDK and the Developer Dashboard are 🚫 **not recommended for production** usage.

## Platform Components

=== "Dashboard"

       <p>
       <ul><p>🖥️ Use the <a href="{{page.meta.arcana.root_rel_path}}/concepts/dashboard.html">Arcana Dashboard</a> to register and configure your dApp, before integrating dApps with the Arcana SDKs.</p><p> </p><p>🖥️ Select the type of user onboarding experience, blockchain signing experience as per the use case.</p><p> </p></ul>
       </p>
   
=== "Auth SDK"

       <p>
       <ul><p>🔐 Address Web3 user onboarding, data privacy challenges faced by dApps by integrating with Arcana Auth SDK.</p><p> </p><p>🔐 Enable frictionless, familiar Web2 user onboarding experience via social authentication, passwordless login.</p><p> </p><p>🔐 Secure user data, and ensure privacy with state-of-the-art data encryption offered by the Auth SDK.</p> <p> </p><p>🔐 Let dApp users securely sign blockchain transactions with <a href="./concepts/anwallet/">Arcana Wallet</a> visibility setting, for a seamless user experience.</p></ul> <blockquote><p>When developers integrate with <b>Arcana Auth SDK</b>, they can access secure standard Ethereum provider interface exposed by the SDK. Once users are authenticated, the dApp can utilize this provider and let dApp users sign/approve blockchain operations.</p></blockquote>
       </p>

## How is this documentation organized?

The primary audience for this documentation is Web3 application developers.

Seasoned Web3 developers can jump right in with the [Auth Quick Start Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_qs.md), [Auth SDK Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md) and {% include "./text-snippets/authsdkref_url.md" %}.

Developers can refer to the [How To Guides]({{page.meta.arcana.root_rel_path}}/howto/index.md) to learn more about how to register and configure the Web3 applications before they can be integrated with the Auth SDK.

If you are new to Web3 ecosystem, we recommend that you check out [Arcana Academy]({{page.meta.arcana.root_rel_path}}/an_academy/index.md) section first before jumping into the [Tutorials]({{page.meta.arcana.root_rel_path}}/tutorials/index.md) and [code samples]({{page.meta.arcana.root_rel_path}}/tutorials/code_samples/index.md). 

Web3 application users can learn more about how to use the Arcana wallet and various user interfaces for performing Web3 operations by referring to the [Arcana wallet User Guide]({{page.meta.arcana.root_rel_path}}/user_guides/wallet_ui/index.md).

Learn about new product features in the [Release Notes]({{page.meta.arcana.root_rel_path}}/relnotes/index.md) section. You can see detailed changelog for the [Auth SDK](https://github.com/arcana-network/auth/releases/tag/v0.3.0) and [Arcana Dashboard](https://github.com/arcana-network/developer-dashboard/releases/tag/v0.2.0) to figure out what has changed.

If you do not find answers to your questions in our [FAQ]({{page.meta.arcana.root_rel_path}}/faq/index.md) section, drop us an [email](mailto://support@arcana.network) or contact us through the [support channels](#support--feedback).

## Support & Feedback

At Arcana Network, we are continuously working on improving the product and its documentation for an enhanced user experience. We would love to hear from you. :fontawesome-solid-signal:

If you find bugs, have questions, or want to share feedback, please contact us through these channels:

- :material-forum: {% include "./text-snippets/github_discussion_url.md" %}
- :fontawesome-brands-discord: [Developer Discord](https://discord.gg/6g7fQvEpdy)
- :fontawesome-solid-users: [Developer Relations](mailto:devrel@arcana.network)
- :material-checkbox-multiple-marked-circle-outline: [Contact Support Team](mailto:support@arcana.network)

!!! info

      The Auth SDK is currently available as an open source *JavaScript SDK*. Support for other languages will be added in a *future release*.

## References

* [Arcana Technical White Paper]
* [Auth SDK Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md)
* {% include "./text-snippets/authsdkref_url.md" %}
