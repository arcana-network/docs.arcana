---
slug: /configwalletmodes
id: idconfigwalletmodes
title: Configure Arcana Wallet
sidebar_custom_props:
  cardIcon: ⚒️
arcana:
  root_rel_path: ../..
---

# Configure Arcana Wallet

In this tutorial, you will learn about how to configure [Arcana Wallet]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md) and what are the available Arcana wallet customizations. 

If you wish to control when the integrated Arcana wallet shows up, see [how to configure wallet visibility modes]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/config_wallet_modes.md).

## Prerequisites

* Make sure you can access Arcana Developer Dashboard: {% include "./text-snippets/db_portal_url.md" %}
* Register and configure your application.  

## Integrate and Initialize Auth SDK

Follow the instructions here to [integrate Auth SDK]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) in your dApp. During `AuthProvider` instantiation, the following configuration parameters are available:

* alwaysVisible: by default, set to true, the wallet is always visible
* position: location of wallet on the application screen.  (default = right)
* theme: light or dark theme
* network: the Auth, Gateway, and Wallet UI URL
* chainConfig: the chainID and RPC URL of the blockchain network selected as the default

For a complete list of parameters see [Auth SDK Reference Guide](https://authsdk-ref-guide.netlify.app/interfaces/constructorparams).

First, install and import the Auth SDK:

{% include "./code-snippets/import_auth.md" %}

Next, while creating a new `AuthProvider` make sure you set the appropriate wallet parameter values for theme, position, network, etc.

{% include "./code-snippets/new_auth.md" %}
{% include "./code-snippets/init_auth.md" %}

**That's it!**

You are all set with customized Arcana wallet settings.

## What's Next?

You can also configure the Auth SDK wallet visibility to manage the blockchain signing user experience. See [how to configure wallet visibility modes]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/config_wallet_modes.md) for more details.

## See also

* [Auth SDK Errors]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_err.md)
* [Auth SDK Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md)
* {% include "./text-snippets/authsdkref_url.md" %}
