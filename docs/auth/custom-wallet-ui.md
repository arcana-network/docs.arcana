---
alias: custom-wallet-ui
title: 'Custom Wallet UI'
description: 'Step-by-step instructions on how to use the white-labeled auth feature and disable Arcana wallet to use custom wallet UI in a Web3 app.'
arcana:
  root_rel_path: ..
---

# Custom Wallet UI

Learn how a Web3 app can use a custom wallet UI instead of the default, built-in, [[concept-index-arcana-wallet|{{config.extra.arcana.wallet_name}}]] UI and integrate with the [[concept-authsdk|{{config.extra.arcana.wallet_name}}]] to enable [[concept-social-login|social login]] and allow users to sign blockchain transactions.

## Prerequisites

{% include "./text-snippets/db_prerequisites.md" %}

## 1. Dashboard Login

{% include "./text-snippets/db_login.md" %}

## 2. Register App

Use the dashboard to create a new app entry and [[register-app-auth|register the app]]. While specifying the new app name and other details, specify the  **Wallet UI Mode** setting as 'Custom UI'. By default, it is set to use the built-in, {{config.extra.arcana.wallet_name}} UI. Then click the 'Create' button to confirm app registration. Once registered, you cannot change the  **Wallet UI Mode** setting.

<figure markdown="span">
  ![Choose Custom Wallet UI]({{config.extra.arcana.img_dir}}/an_db_select_custom_wallet_ui.{{config.extra.arcana.img_gif}}){ .an-screenshots .width_85pc }
  <figcaption>Choose Custom Wallet UI</figcaption>
</figure>

## 3. Configure Social Login

Follow the instructions to [[index-config-social-providers|configure social login]] and [[index-config-iam-providers|custom IAM providers]] if required, before integrating the app with the {{config.extra.arcana.sdk_name}}.

## 4. Integrate App

Select the app type and follow the instructions to integrate the app with the SDK.

{% include "./text-snippets/select_app_type_integrate.md" %}

## 5. Onboard Users

Apps that are integrated with the {{config.extra.arcana.sdk_name}} can choose the built-in [[concept-plug-and-play-auth|plug-and-play login UI]] or use custom login ui to onboard users. 

{% include "./text-snippets/non-evm-common-onboard-steps.md" %}

{% include "./text-snippets/non-evm-common-onboard-adv.md" %}

## 6. Plug in Custom Wallet UI

Once user onboarding logic is in place, add code to wire your custom wallet UI to enable wallet operations. 

* Issue Wallet Ops
* Manage User Control
* Export Private Key

###  Issue Wallet Ops

During app integration with {{config.extra.arcana.sdk_name}}, an `AuthProvider` is created. This provider is a standard Ethereum EIP-1193 provider. It facilitates wallet interactions with the blockchain. Use `AuthProvider` to call the [JSON-RPC APIs](https://ethereum.org/en/developers/docs/apis/json-rpc/) and handle [[evm-web3-wallet-ops|Web3 wallet operations for the selected chains]]. Add code to trigger wallet actions like sending transactions, signing messages, and executing contract calls.

??? an-info "Sample Code"

    The following code snippet shows how an HTML/CSS/JS app can integrate with the {{config.extra.arcana.sdk_name}}, onboard users via plug-and-play login UI and use the standard EIP-1193 Ethereum provider for issuing blockchain transactions through a custom wallet UI.

    ```js

    import { AuthProvider } from "@arcana/auth";
    import { ethers } from 'ethers';

    let provider;
    const auth = new AuthProvider('xar_live_nnnnnnnnnnnnnnncdddddddd')  //Use registered app client Id

    // initialize the Arcana AuthProvider before calling any AuthProvider functions
    ...
    await auth.init()
    ...

    // onboard users - for e.g. using plug-and-play ui

    const arcanaProvider = await auth.connect()

    // alternatively, onboard users by calling loginWithLink(deprecated), `loginWithOTPStart`, `loginWithOTPComplete`, loginWithSocial, loginWithBearer for passwordless, social or IAM providers.
    ...

    const provider = new ethers.providers.Web3Provider(arcanaProvider)

    // Call ethers provider APIs see https://docs.ethers.org/v5/api/providers/provider/ for details
    await provider.getBlockNumber()

    // Use the Arcana provider to sign a message using JSON RPC calls

    async function signMessage() {

      // Display a notification in custom wallet UI  showing the message details and seeking user's approval

      ...

      // Once user approves, issue the request via the Arcana Auth SDK to sign transaction

      const { sig } = await arcanaProvider.request({
        method: 'eth_sign',
        params: [
          {
            from, // sender account address
            data: 'Some message data',
          },
        ],
      })
      console.log({ sig })
    }

    ...

    // You can send tokens or use eth_sendtransaction functionality in custom wallet UI 
    // Show a UI notification displaying the transaction details and ask for user's approval

    ...

    // Use the Arcana provider to issue the send transaction

    async function sendTransaction() {
      const hash = await arcanaProvider.request({
        method: 'eth_sendTransaction',
          params: [{
          from,
          gasPrice: 0,
          to: '0xE28F01Cf69f27Ee17e552bFDFB7ff301ca07e780', // receiver account address
          value: '0x0de0b6b3a7640000',
        },],
      })
      console.log({ hash })
    }

    ...
    ```

### Manage User Control

For a smooth user experience, ensure your custom UI displays clear approval/rejection prompts when blockchain requests are made. Users should be able to easily accept or reject these actions. 

### Export Key Option

When using the default {{config.extra.arcana.wallet_name}} UI, authenticated users can access and copy their private key from the profile tab. For custom wallet UIs, developers should include secure options for users to export their private key. Use the `AuthProvider` to access the private key and make a JSON/RPC `request` call with the `_arcana_getPrivateKey` method to retrieve the key securely in the user's context.

??? an-info "Sample Code"

    ```js

    // Only valid when custom wallet UI is selected in the dashboard
    // during app registration

    async function onClickGetUserPrivateKey() {
      const authProvider = window.ethereum //assuming setWindowProvider is set when AuthProvider was instantiated 
      try {
        const userPkey = await authProvider.request({
          method: '_arcana_getPrivateKey',
          params: []
        });
        // Do something with the key in custom wallet UI
        // For e.g., display it in the app context, allow user to copy it
      } catch(error) {
            console.log(error);
      };
    }
    ```
    
!!! an-caution "Access Limitation"

    If the app is configured through the {{config.extra.arcana.dashboard_name}} for using the default [[concept-keyspace-type|app specific keys option]], then `_arcana_getPrivateKey` can be used. Not available for the Global Keys [[concept-keyspace-type|Keyspace configuration setting]] for security reason.
## What's Next?

Add code to use the `AuthProvider` and issue blockchain transactions in the context of the authenticated user and seek the user's approval, if required. The JSON/RPC functions and Web3 wallet operations supported by the {{config.extra.arcana.sdk_name}} for [[evm-web3-wallet-ops| EVM chains]] may differ from those supported for the non-EVM chains. [[concept-non-evm-chains|Learn more...]]

## See also

* [[faq-gen| FAQ]]

* [[troubleshooting| Troubleshooting Guide]]

* [[web-auth-error-msg|{{config.extra.arcana.sdk_name}} Errors]]

* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]

{% include "./text-snippets/auth_sdk_quicklinks.md" %}
