**Release Date: {{config.extra.arcana.latest_ca_sdk_release_date}}**  

**Version: v{{config.extra.arcana.latest_ca_sdk_version}}**

**Download and Install [[ca-sdk-installation|CA SDK]]**

## What is New?
 
This major SDK release supports chain abstracted transaction for the following chains:

* BSC chain,  BNB token
* Fuel chain

Web3 apps integrating with the SDK do not need any integration code changes if they are using BSC chain for chain abstracted transactions.

For Fuel, the integration code will need some updates.

Refer to the code below for details on how to enable Fuel in a Web3 app 
and utilize the [Fuel connector](https://github.com/FuelLabs/fuel-connectors/wiki)
for chain abstracted transactions.

```ts
import { CA } from '@arcana/ca-sdk';
const provider = window.ethereum;
const ca = new CA();
//Set the EVM provider  
ca.setEVMProvider(provider);

//Initialize ca
await ca.init();

//connector refers to https://github.com/FuelLabs/fuel-connectors/wiki
await ca.setFuelConnector(connector);
const { provider, connector: CAconnector } = await ca.getFuelWithCA();

const address = CAconnector.currentAccount()!;
const account = new Account(address, provider, CAconnector);

//chain abstraction enabled transfer
await account.transfer(
    "0xE78655DfAd552fc3658c01bfb427b9EAb0c628F54e60b54fDA16c95aaAdE797A",
    1000000,
    "0xa0265fb5c32f6e8db3197af3c7eb05c48ae373605b8165b6f4a51c5b0ba4812e",
);
```

Check out the complete list of supported [[ca-stack#chains|chains]] and [[ca-stack#tokens|tokens]].

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
