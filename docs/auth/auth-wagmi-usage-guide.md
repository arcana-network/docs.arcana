---
alias: web-auth-wagmi-usage-guide
title: 'Arcana Auth Wagmi SDK Usage Guide'
description: 'How to install and use the Arcana Auth Wagmi SDK with sample code and references.'
arcana:
  root_rel_path: ..
---

<!--
Note, this is a pure markdown file with no mkdocs related tags or keywords. It is a copy 
of the file in the `auth` repo: https://github.com/arcana-network/auth/blob/main/usage.md
-->

# {{config.extra.arcana.wagmi_sdk_name}} Usage

Use the {{config.extra.arcana.wagmi_sdk_name}} to onboard users in a Wagmi app via social login. Let users instantly access the in-app {{config.extra.arcana.wallet_name}} and sign blockchain transactions.

<!--
Latest auth-wagmi readme update PR not merged hence commenting https://wagmi-authsdk-ref-guide.netlify.app/ for now
-->

[:octicons-cross-reference-16:{ .icon-color } {% include "./text-snippets/wagmi_authsdkref_url.md" %}](https://deploy-preview-28--wagmi-authsdk-ref-guide.netlify.app/){ .md-button }

## Install

```sh
npm install --save @arcana/auth @arcana/auth-wagmi
```

## Usage

### With plug n play UI

```ts
import { ArcanaConnector } from "@arcana/auth-wagmi"
import { AuthProvider } from "@arcana/auth"

const auth = new AuthProvider(`${arcana_client_id}`)
const connector = ArcanaConnector({
  auth,
})
```

### With custom UI

```ts
import { ArcanaConnector } from "@arcana/auth-wagmi"
import { AuthProvider } from "@arcana/auth"

const auth = new AuthProvider(`${arcana_client_id}`)
const connector = ArcanaConnector({
  auth,
  loginType: {
    provider: "google"
  } 
})
```

For more details on connectors and integrating your app with Wagmi, see [Wagmi documentation](https://wagmi.sh/react/getting-started).