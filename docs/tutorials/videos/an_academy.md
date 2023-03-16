---
slug: /anacademy
id: idanacademy
title: Get Started
sidebar_custom_props:
  cardIcon: 🎓
arcana:
  root_rel_path: ../..
---

# Get Started

Everything you need to get started with Arcana Auth is lined up here!

## Arcana Network (60 seconds)

{% include "./text-snippets/tut_getstarted_arcana_url.md" %}

---

## Arcana Network Overview (6 Minutes)

{% include "./text-snippets/tut_mission_url.md" %}

---

## Using Arcana Auth SDK

To use the [Arcana Auth SDK]({{page.meta.arcana.root_rel_path}}/concepts/authsdk.md), you must first register your dApp using the [Arcana Developer Dashboard]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md) and then integrate your dApp for:

* **User authentication:** Onboarding new users via the familiar Web2 social authentication, passwordless login options

* **Enabling Blockchain transactions:** Securely signing blockchain transactions using standard EIP-1193 Ethereum provider, send blockchain transactions, send and receive custom tokens, switching blockchain network, and [more]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md).

## Dashboard

The dApp developers can use the dashboard to [configure Arcana Auth SDK usage]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md). Developers must register their dApp with Arcana Network using the dashboard before using Auth SDK.

{% include "./text-snippets/tut_comingsoontut_url.md" %}

---

## Auth SDK

Arcana Auth SDK uses modern distributed key generation, symmetric key cryptography, and decentralized storage of asymmetric key shares meant for user identity and access management. It allows dApps to onboard users for Web3 applications without necessarily having to set up and manage a wallet. The Auth SDK also enables signing blockchain transactions and executing send transactions through the embedded Web3 wallet called the Arcana wallet.  

### Integrating with the Auth SDK

Web3 developers can [integrate their dApp with Arcana Auth SDK]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) for one or more of the following reasons:

* Onboard dApp users via social authentication, Passwordless login
* Obtain an EIP-1193 standard Ethereum provider for enabling Web3 operations
* Use the Auth SDKs embedded Web3 wallet provider for allowing users to sign blockchain transactions


Check out this video to see how to integrate your dApp with the Auth SDK.

{% include "./text-snippets/tut_comingsoontut_url.md" %}

### Onboard dApp Users

Check out this video to see Arcana Auth SDK in action when integrated with a sample dApp. It shows how a dApp user can seamlessly onboard a dApp using Google OAuth. 

{% include "./text-snippets/tut_comingsoontut_url.md" %}


### Sign Blockchain Transactions

Arcana Auth SDK also offers blockchain transaction signing ability for any operations issued for any EVM-compatible blockchain network. This is provided by the embedded Web3 Arcana wallet. Besides the Arcana Network, the wallet also supports other networks and allows users to switch between networks. It allows dApps to enable blockchain `send` transactions, sign transactions and create custom tokens, send or receive them.  See [here]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md) for more details about Arcana wallet features.

The dApp developers can [configure Arcana wallet visibility mode]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/config_wallet_modes.md) to manage the user's blockchain signing experience. See [wallet visibility modes]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/walletuimodes.md) for details.

Check out this video to see Arcana wallet in action for signing blockchain transactions, checking wallet balances, switching blockchain networks, and more.

{% include "./text-snippets/tut_comingsoontut_url.md" %}

!!! tip

      See [Auth SDK Use cases]({{page.meta.arcana.root_rel_path}}/use_cases.md).

---

## Questions?

*Can't find what you are looking for?*

Reach out to us at: {% include "./text-snippets/support_email_link.md" %}
