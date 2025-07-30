---
alias: concept-index-arcana-wallet
title: 'Overview'
description: 'Learn about the Arcana wallet features, customizations and supported chains and Web3 wallet operations.'
arcana:
  root_rel_path: ../..
---

# Overview

<img src="{{config.extra.arcana.img_dir}}/icons/i_an_wallet_light.{{config.extra.arcana.img_png}}#only-light" width="50"/>
<img src="{{config.extra.arcana.img_dir}}/icons/i_an_wallet_dark.{{config.extra.arcana.img_png}}#only-dark" width="50"/>

{{config.extra.arcana.wallet_name}} is an in-app, non-custodial wallet embedded in Web3 apps that use {{config.extra.arcana.sdk_name}}. No browser extension is needed. Authenticated users get instant, secure access to the wallet for blockchain transactions. Keys are generated locally via the asynchronous distributed key generation system, ensuring full control over key privacy without complex cryptography.

## Wallet Features

{% include "./text-snippets/wallet_features.md" %}

!!! an-warning "**Not Supported**"

    The {{config.extra.arcana.wallet_name}} does not allow an app user to import any blockchain account created using a third-party wallet provider. 

## Wallet Customization

{{config.extra.arcana.wallet_name}} offers great flexibility and customization options as per the app requirements. 

* **UX:** Developers can manage the users' blockchain signing experience by [[dashboard-user-guide#settings-overview|customizing branding, theme]], [wallet positioning](https://authsdk-ref-guide.netlify.app/interfaces/constructorparams) in the app, selecting the default active chain, [[arcana-wallet-user-guide#addselect-a-network|modifying pre-configured networks]], and using [[concept-wallet-visibility|visibility]] options.
* **Custom Wallet UI:** Replace the built-in, default wallet UI with a [[concept-custom-wallet-ui|custom wallet UI]].

## Supported Chains

{{config.extra.arcana.wallet_name}} comes pre-configured with a subset of the [[web3-stack-chains|supported blockchain networks]]. This pre-configured list can be updated with other supported networks [[evm-web3-wallet-ops#add-network|programmatically]] or via the [[arcana-wallet-user-guide|wallet UI]].

[[index-wallet-user-guide|Learn more...]]