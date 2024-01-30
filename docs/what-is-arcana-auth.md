---
alias: what-is-arcana-auth
title: 'What is Arcana Auth?'
description: 'About Arcana Auth, what are the key constituents of Arcana Auth and how is it documented? How is the Arcana Auth documentation organized?'
arcana:
  root_rel_path: .
---

# What is {{config.extra.arcana.product_name}}?

[{{config.extra.arcana.company_name}} Technical White Paper]: https://www.notion.so/Arcana-Technical-Docs-a1d7fd0d2970452586c693e4fee14d08

---

{{config.extra.arcana.company_name}} offers an infrastructure solution, a platform that allows Web3 app developers to quickly build **privacy-preserving Web3 applications**. Developers can onboard users through a simplified Web3 onboarding process. Our product, {{config.extra.arcana.product_name}}, makes it easy for developers to integrate their apps and allow authenticated users to sign blockchain transactions quickly.

The {{config.extra.arcana.product_name}} product consists of two key components:

* {{config.extra.arcana.sdk_name}}
* {{config.extra.arcana.dashboard_name}}


[[quick-start|Get Started :fontawesome-solid-paper-plane:]]{ .md-button }

## {{config.extra.arcana.product_name}} Components

=== "{{config.extra.arcana.sdk_name}}"

       <p>
       <ul><p>🔐 Address Web3 user onboarding, data privacy challenges faced by Web3 apps by integrating with the {{config.extra.arcana.sdk_name}}.</p><p> </p><p>🔐 Enable frictionless, familiar Web2 user onboarding experience via several supported authentication providers, and passwordless login.</p><p> </p><p> </p><p>🔐 Let app users securely sign blockchain transactions with the embedded, non-custodial <a href="./concepts/anwallet/">{{config.extra.arcana.wallet_name}}</a> and manage wallet visibility setting, for a seamless user experience.</p></ul> <blockquote><p>Developers can use the secure standard Ethereum provider interface exposed by the {{config.extra.arcana.wallet_name}} in the context of authenticated users to programmatically call Web3 wallet operations.</p></blockquote>
       </p>

=== "{{config.extra.arcana.dashboard_name}}"

       <p>
       <ul><p>🖥️ Use the <a href="{{page.meta.arcana.root_rel_path}}/concepts/dashboard.html">{{config.extra.arcana.dashboard_name}}</a> to register and configure an app before integrating it with the {{config.extra.arcana.sdk_name}}.</p><p> </p><p>🖥️ Select the user onboarding experience and the blockchain signing experience as per the use case.</p><p> </p></ul>
       </p>

## How is this documentation organized?

The primary audience for this documentation is Web3 application developers.

Seasoned developers can jump into the [[quick-start|quick start guides]] to enable social login and gasless transactions for the app users. Refer to the [[|index-dev-resources|'Developer Resources' section]] for SDK reference and usage guides.

See [[index-howto-guides|'Get Started']] section for step-by-step instructions on how to register and configure the social login and gasless usage before starting with the installation of the SDKs and integrating apps to enable {{config.extra.arcana.wallet_name}} for authenticated app users and allow gasless transactions.

For those new to the Web3 ecosystem, we recommend the [[index-arcana-academy|'{{config.extra.arcana.company_name}} Academy']] section followed by the [[index-tutorials| 'Tutorials']] and [[index-code-samples|' Code Samples']] sections.

The {{config.extra.arcana.wallet_name}} users can check out the wallet UX, setting up multi-factor security and available features in the [[index-wallet-user-guide|'User Guide']] section.

The {{config.extra.arcana.company_name}} SDKs are rapidly evolving. Stay tuned to the [[index-release-notes|Release Notes]] for details. Detailed changelog for the [{{config.extra.arcana.sdk_name}}](https://github.com/arcana-network/auth/compare/v{{config.extra.arcana.previous_version}}...v{{config.extra.arcana.latest_version}}) and [{{config.extra.arcana.dashboard_name}}](https://github.com/arcana-network/developer-dashboard/compare/v{{config.extra.arcana.previous_version_dashboard}}...v{{config.extra.arcana.latest_version_dashboard}}) has the full change history.

If you do not find answers to your questions in our [[index-faq| FAQ]], or the [[troubleshooting|troubleshooting guide]], drop us an [email](mailto://support@arcana.network) or contact us through the [support channels](#support--feedback).

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
* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]
* {% include "./text-snippets/authsdkref_url.md" %}
