**Release Date: {{config.extra.arcana.latest_ca_wagmi_sdk_release_date}}**  

**Version: v{{config.extra.arcana.latest_ca_wagmi_sdk_version}}**

**Download and Install [[ca-sdk-installation|CA Wagmi SDK]]**

## What is New?

---
 
This major release of {{config.extra.arcana.ca_wagmi_sdk_name}}.
Web3 apps integrated with the SDK must update the integration code.

- **Installation change:** In addition to the `ca-wagmi` SDK, install `ca-sdk` also.
- **`CAProvider` change:** The `CAProvider` component can be configured now with `client` and `network` (optional) params. Create a new `CA` object and specify it as the `client` parameter when creating the `CAProvider` component.
- New hook: Use `useGetMyIntent())` to get a list of intents created in response to user's requests for funds. These requests are fulfilled as part of the chain abstraction protocol.
- Added `transfer` and `bridge` functions to the hook `useCAFn()` for enabling chain abstracted functionality.

Check out the complete list of supported [[ca-stack#chains|chains]] and [[ca-stack#tokens|tokens]].

[Changelog](https://github.com/arcana-network/ca-wagmi/releases/latest){ .md-button }

## Get Started

---

* [[ca-wagmi-quick-start|{{config.extra.arcana.ca_wagmi_sdk_name}} Quick Start Guide]]
* [Integration example](https://github.com/arcana-network/ca-wagmi-example)
* {% include "./text-snippets/cawagmisdkref_url.md" %}

## Previous Releases

Are you using an older version of the {{config.extra.arcana.ca_wagmi_sdk_name}}?

Refer to the [[ca-index-release-notes| release notes archive]]. Upgrade to the latest version.

## Questions? 

---

Can't find what you are looking for? Contact [{{config.extra.arcana.company_name}} Support]({{page.meta.arcana.root_rel_path}}/support/index.md).
