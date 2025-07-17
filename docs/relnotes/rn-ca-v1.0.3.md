---
alias: rn-ca-v1.0.3
title: 'CA SDK Release Note'
description: 'Arcana CA SDK Release Note'
arcana:
  root_rel_path: ..
---

# CA SDK Release Note

**Release Date: 30 Jun 2025 10:16:25 UTC**  

**Version: v1.0.3**

**Download and Install [[ca-sdk-installation|CA SDK]]**

## What is New?
 
This major SDK release contains refactored, optimized code and several usage improvements. It requires some changes to the  integration code that uses the following SDK methods. 

* [[rn-ca-v1.0.3#transfer|`transfer`]]
* [[rn-ca-v1.0.3#bridge|`bridge`]]
* [[rn-ca-v1.0.3#request|`request`]]

### `transfer`

Use `transfer` to issue a chain abstracted blockchain transaction. 
Get the handler to simulate the transfer execution for intent details.

=== "New"

    ```ts
    const handler = await ca.transfer({
    to: "0x...",
    amount: 5,
    chainID: 10,
    token: "eth",
    });

    // Execute the transfer
    const hash = await handler.exec();

    // Simulate the transfer, returns intent data and token info
    const response = await handler.simulate();
    ```

=== "Old"

    ```js
    await ca.transfer().to("0x...").amount(5).chain(10).token("eth").exec()
    ```

### `bridge`

Use `bridge` to issue a chain abstracted blockchain transaction.
Get the handler to simulate the bridge execution for intent details.

=== "New"

    ```ts
    const handler = await ca.bridge({
    token: "usdt",
    amount: 10,
    chainID: 137,
    });

    // Execute the bridge
    await handler.exec();

    // Simulate the bridge, returns intent data and token info
    const response = await handler.simulate();
    ```

=== "Old"

    ```js
    await ca.bridge().token("usdt").amount(10).chain(137).exec();
    ```

### `getEVMProviderWithCA`

The new [`getEVMProviderWithCA`](https://ca-sdk-ref-guide.netlify.app/#quick-start) method 
retrieves the chain abstraction enabled EIP-1193 provider. Use this provider to
issue `request`] with `eth_sendTransaction` for chain abstracted transactions.

```ts

let provider = window.ethereum;

const ca = new CA();
ca.setEVMProvider(provider);
const providerWithCA = ca.getEVMProviderWithCA();  // Get EIP-1193 provider first
```

### `request`

Get a chain abstraction enabled EIP-1193 provider with `getEVMProviderWithCA`.
Use this provider to issue chain abstracted `request` with `eth_sendTransaction`. 

=== "New"

    ```ts

    let provider = window.ethereum;

    const ca = new CA();
    ca.setEVMProvider(provider);
    const providerWithCA = ca.getEVMProviderWithCA();  // Get EIP-1193 provider first

    await providerWithCA.request({   // Then use EIP-1193 provider to issue request
        method: "eth_sendTransaction",
        params: [{
            to: "0xEa46Fb4b4Dc7755BA29D09Ef2a57C67bab383A2f", 
            from: "0x7f521A827Ce5e93f0C6D773525c0282a21466f8d",
            value: "0x001"
        }],
    })
    ```

=== "Old"

    ```ts
    let provider = window.ethereum;

    const ca = new CA();
    ca.setEVMProvider(provider);

    await ca.request({  //This has changed, there is no request method implemented for CA class
        method: "eth_sendTransaction",
        params: [{
            to: "0xEa46Fb4b4Dc7755BA29D09Ef2a57C67bab383A2f", 
            from: "0x7f521A827Ce5e93f0C6D773525c0282a21466f8d",
            value: "0x001"
        }],
    })
    ```

Check out the complete list of supported [[ca-stack|chains and tokens]].

See {% include "./text-snippets/casdkref_url.md" %} for details.

[Changelog](https://github.com/arcana-network/ca-sdk/releases/latest){ .md-button } 

## Get Started

* [[ca-quick-start|{{config.extra.arcana.ca_sdk_name}} Quick Start Guide]]
* [Integration example](https://github.com/arcana-network/ca-sdk/tree/main/example)
* {% include "./text-snippets/casdkref_url.md" %}

## Previous Releases

Are you using an older version of the {{config.extra.arcana.ca_sdk_name}}?

Refer to the [[ca-index-release-notes| release notes archive]]. Upgrade to the latest version.

## Questions? 

Can't find what you are looking for? Contact [{{config.extra.arcana.company_name}} Support]({{page.meta.arcana.root_rel_path}}/support/index.md).
