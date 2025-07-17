---
alias: rn-ca-v0.0.7
title: 'CA SDK Release Note'
description: 'Arcana CA SDK Release Note'
arcana:
  root_rel_path: ..
---

# CA SDK Release Note

**Release Date: 14 May, 2025**  

**Version: v0.0.7**

## What is New?

---
 
This is a minor update release with support for the Avalanche chain and a few bug fixes, improvements.

```typescript
let provider = window.ethereum;

const ca = new CA();
ca.setEVMProvider(provider);
```

Check out the complete list of supported [[ca-stack|chains and tokens]].

[Changelog](https://github.com/arcana-network/ca-sdk/releases/latest){ .md-button } 

## Get Started

---

* [[ca-quick-start|{{config.extra.arcana.ca_sdk_name}} Quick Start Guide]]
* [Integration example](https://github.com/arcana-network/ca-sdk/tree/main/example)
* {% include "./text-snippets/casdkref_url.md" %}

## Previous Releases

Are you using an older version of the {{config.extra.arcana.ca_sdk_name}}?

Refer to the [[ca-index-release-notes| release notes archive]]. Upgrade to the latest version.

## Questions? 

---

Can't find what you are looking for? Contact [{{config.extra.arcana.company_name}} Support]({{page.meta.arcana.root_rel_path}}/support/index.md).

