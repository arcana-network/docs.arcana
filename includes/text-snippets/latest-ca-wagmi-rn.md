**Release Date: {{config.extra.arcana.latest_ca_wagmi_sdk_release_date}}**  

**Version: v{{config.extra.arcana.latest_ca_wagmi_sdk_version}}**

**Download and Install [[ca-sdk-installation|CA Wagmi SDK]]**

## What is New?

---
 
This is a major release of the {{config.extra.arcana.ca_wagmi_sdk_name}} with 
usage changes.

- **Installation change:** In addition to the `ca-wagmi` SDK, also install `ca-sdk`.
- **`CAProvider` change:** The `CAProvider` requires `client` and `network` (optional) params. Create a new `CA` object and specify it as the `client` parameter when creating the `CAProvider` component.
- **New hook:** Use [`useGetMyIntent(page))`](https://ca-wagmi-sdk-ref-guide.netlify.app/functions/usegetmyintents) to get a list of intents created in response to user's requests for funds.

Check out the complete list of supported [[ca-stack#chains|chains]] and [[ca-stack#tokens|tokens]].

See {% include "./text-snippets/cawagmisdkref_url.md" %} for details.

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
