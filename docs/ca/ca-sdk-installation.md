---
alias: ca-sdk-installation
title: 'Arcana CA SDKs'
description: 'Multiple flavors of the Arcana CA SDK depending upon the app type. Use the correct SDK package for installation. For Web apps, use the CA SDK. For Wagmi apps, use the CA Wagmi SDK.'
arcana:
  root_rel_path: ..
---

# Chain Abstraction SDKs

Enable [[concept-unified-balance|unified balance]] and [[concept-ca|chain abstracted]] transactions for Web3 app users.

You may need to install one or more {{config.extra.arcana.company_name}} SDK packages
according to the app type.

{% include "./text-snippets/ca_sdk_flavors.md" %}

## Install SDKs

### Web Apps

{% include "./code-snippets/casdk_install.md" %}

### Wagmi Apps

{% include "./code-snippets/ca_wagmi_sdk_install.md" %}
