---
slug: /whatisan
id: idwhatisan
sidebar_custom_props:
  cardIcon: 📝
arcana:
  root_rel_path: .
---

# What is {{config.extra.arcana.product_name}}?

[{{config.extra.arcana.company_name}} Technical White Paper]: https://www.notion.so/Arcana-Technical-Docs-a1d7fd0d2970452586c693e4fee14d08

---

{{config.extra.arcana.company_name}} offers an infrastructure solution, a platform that allows Web3 app developers to quickly build **privacy-preserving Web3 applications**. Developers can onboard users through a simplified Web3 onboarding process. Our product, {{config.extra.arcana.product_name}}, makes it easy for developers to integrate their apps and allow authenticated users to sign blockchain transactions quickly.

The {{config.extra.arcana.product_name}} product consists of two key components:

* {{config.extra.arcana.dashboard_name}}
* {{config.extra.arcana.sdk_name}}

[Get Started :fontawesome-solid-paper-plane:]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_qs.md){ .md-button }

## Platform Components

=== "{{config.extra.arcana.dashboard_name}}"

       <p>
       <ul><p>🖥️ Use the <a href="{{page.meta.arcana.root_rel_path}}/concepts/dashboard.html">{{config.extra.arcana.dashboard_name}}</a> to register and configure an app before integrating it with the {{config.extra.arcana.sdk_name}}.</p><p> </p><p>🖥️ Select the user onboarding experience and the blockchain signing experience as per the use case.</p><p> </p></ul>
       </p>
   
=== "{{config.extra.arcana.sdk_name}}"

       <p>
       <ul><p>🔐 Address Web3 user onboarding, data privacy challenges faced by Web3 apps by integrating with the {{config.extra.arcana.sdk_name}}.</p><p> </p><p>🔐 Enable frictionless, familiar Web2 user onboarding experience via several supported authentication providers, and passwordless login.</p><p> </p><p> </p><p>🔐 Let app users securely sign blockchain transactions with the embedded, non-custodial <a href="./concepts/anwallet/">{{config.extra.arcana.wallet_name}}</a> and manage wallet visibility setting, for a seamless user experience.</p></ul> <blockquote><p>Developers can use the secure standard Ethereum provider interface exposed by the {{config.extra.arcana.wallet_name}} in the context of authenticated users to programmatically call Web3 wallet operations.</p></blockquote>
       </p>

## How is this documentation organized?

The primary audience for this documentation is Web3 application developers.

Seasoned Web3 developers can jump right in with the [{{config.extra.arcana.product_name}} Quick Start Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_qs.md), [{{config.extra.arcana.sdk_name}} Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md) and {% include "./text-snippets/authsdkref_url.md" %}.

Developers can refer to the [How To Guides]({{page.meta.arcana.root_rel_path}}/howto/index.md) to learn more about how to register and configure the Web3 applications before they can be integrated with the {{config.extra.arcana.wallet_name}}.

If you are new to the Web3 ecosystem, we recommend that you check out the [{{config.extra.arcana.company_name}} Academy]({{page.meta.arcana.root_rel_path}}/an_academy/index.md) section first before jumping into the [Tutorials]({{page.meta.arcana.root_rel_path}}/tutorials/index.md) and [code samples]({{page.meta.arcana.root_rel_path}}/tutorials/code_samples/index.md). 

Web3 application users can learn more about how to use the {{config.extra.arcana.wallet_name}} for performing Web3 operations by referring to the [{{config.extra.arcana.wallet_name}} User Guide]({{page.meta.arcana.root_rel_path}}/user_guides/wallet_ui/index.md).

Learn about new product features in the [Release Notes]({{page.meta.arcana.root_rel_path}}/relnotes/index.md) section. You can see the detailed changelog for the [{{config.extra.arcana.sdk_name}}](https://github.com/arcana-network/auth/releases/tag/v0.3.0) and [{{config.extra.arcana.dashboard_name}}(https://github.com/arcana-network/developer-dashboard/releases/tag/v0.2.0) to figure out what has changed.

If you do not find answers to your questions in our [FAQ]({{page.meta.arcana.root_rel_path}}/faq/index.md) section, drop us an [email](mailto://support@arcana.network) or contact us through the [support channels](#support--feedback).

## Support & Feedback

At {{config.extra.arcana.company_name}}, we are continuously working on improving the product and its documentation for an enhanced user experience. We would love to hear from you. :fontawesome-solid-signal:

If you find bugs, have questions, or want to share feedback, please contact us through these channels:

- :material-forum: {% include "./text-snippets/github_discussion_url.md" %}
- :fontawesome-brands-discord: [Developer Discord](https://discord.gg/6g7fQvEpdy)
- :fontawesome-solid-users: [Developer Relations](mailto:devrel@arcana.network)
- :material-checkbox-multiple-marked-circle-outline: [Contact Support Team](mailto:support@arcana.network)

!!! info

      The {{config.extra.arcana.sdk_name}} is currently available as an open-source, client-side, *JavaScript SDK*. Support for other languages will be added in a *future release*.

## References

* [{{config.extra.arcana.company_name}} Technical White Paper]
* [{{config.extra.arcana.sdk_name}} Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md)
* {% include "./text-snippets/authsdkref_url.md" %}
