---
alias: rn-ca-wagmi-v0.0.6
title: 'CA Wagmi SDK Release Note'
description: 'Arcana CA Wagmi SDK Release Note'
arcana:
  root_rel_path: ..
---

# CA Wagmi SDK Release Note

**Release Date: May 12, 2025**  

Version: **v0.0.6**

### What is New?

---
 
This release of {{config.extra.arcana.ca_wagmi_sdk_name}} includes enhancements, 
and bug fix. A few APIs have changed.

- Supports unified balance and chain abstraction through [`sendTransactionAsync`](https://wagmi.sh/react/api/hooks/useSendTransaction#mutate-async) and [`writeContractAsync`](https://wagmi.sh/react/api/hooks/useWriteContract#mutate-async) replacement functions.
- The `useBalance()` function is replaced by `useBalanceModal()`. See [usage details](https://docs.arcana.network/quick-start/ca-wagmi-quick-start/#usebalancemodal).
- New hook added:  `useBalance({ symbol: string })` to get the specified token balance across the supported chains.
- Added `transfer` and `bridge` functions to the hook `useCAFn()` for enabling chain abstracted functionality.
- Added checks to disable chain abstraction and allow regular behavior for wallet transactions if the user denies the sign in with Arcana at the start of the transaction.
- Other changes: UI enhancements, improved documentation. 

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