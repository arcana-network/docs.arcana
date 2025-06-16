**Release Date: {{config.extra.arcana.latest_ca_sdk_release_date}}**  

**Version: v{{config.extra.arcana.latest_ca_sdk_version}}**

**Download and Install [[ca-sdk-installation|CA SDK]]**

## What is New?
 
This major SDK release contains refactored, optimized code and several usage improvements. It requires some changes to the  integration code that uses chain abstraction enabled `transfer`, `bridge` and `request` methods provided by the SDK. 

* [[rn-latest-ca#transfer|`transfer`]]
* [[rn-latest-ca#bridge|`bridge`]]
* [[rn-latest-ca#request|`request`]]

### `transfer`

Use `transfer` to issue a chain abstracted blockchain transaction and deposit funds to an EOA through the [[concept-unified-balance|unified balance]].

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

Use `bridge` to issue a chain abstracted blockchain transaction and bridge the [[concept-unified-balance|unified balance]] funds to a desired destination chain.

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

The new [[web-ca-usage-guide#getevemproviderwithca|`getEVMProviderWithCA`]] method retrieves the chain abstraction enabled EIP-1193 provider. Use this provider to call [[web-ca-usage-guide#request|`request`]] and issue `eth_sendTransaction` operation.

```ts

let provider = window.ethereum;

const ca = new CA();
ca.setEVMProvider(provider);
const providerWithCA = ca.getEVMProviderWithCA();  // Get EIP-1193 provider first
```

### `request`

The SDK now offers a better use model for `request` calls in a Web3 app that is easier to integrate. 

Web3 apps must use the `getEVMProviderWithCA` method to get a chain abstraction enabled EIP-1193 provider. This provider must be used to issue the standard `request` calls for Web3 wallet operations. 

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

Check out the complete list of supported [[ca-stack#chains|chains]] and [[ca-stack#tokens|tokens]].

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
