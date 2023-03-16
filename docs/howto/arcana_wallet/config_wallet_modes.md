---
slug: /configwalletmodes
id: idconfigwalletmodes
title: Configure Arcana Wallet
sidebar_custom_props:
  cardIcon: ⚒️
arcana:
  root_rel_path: ../..
---

# Configure Wallet Visibility

In this tutorial, you will learn how to integrate an app with the [Arcana Auth SDK]({{page.meta.arcana.root_rel_path}}/concepts/authsdk.md) and control the user's experience of signing blockchain transactions via the [Arcana Wallet]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/index.md). 

## Prerequisites

* Make sure you can access Arcana Developer Dashboard: {% include "./text-snippets/db_portal_url.md" %}
* Register and configure your application.  

## Integrate and Initialize Auth SDK

Follow the instructions to [integrate Auth SDK]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md) in your dApp. During `AuthProvider` instantiation, make sure you set the `alwaysVisible` input parameter to one of the following values as per the required dApp user experience for signing blockchain transactions:

* `alwaysVisible = true`(default): The wallet UI is always visible once the user logs in.
* `alwaysVisible = false`: The wallet UI is displayed only when a blockchain transaction requires the user's approval.

For more details, see [how wallet visibility works]({{page.meta.arcana.root_rel_path}}/concepts/anwallet/walletuimodes.md).

The sample code here shows how to enable Widget mode while initializing the Auth SDK:

{% include "./code-snippets/import_auth.md" %}
{% include "./code-snippets/new_auth.md" %}
{% include "./code-snippets/init_auth.md" %}

**That's it!**

You are all set with the Arcana wallet visibility mode configuration to manage the user blockchain signing experience.

## What's Next?

Once you have configured the Auth SDK wallet visibility, you can allow authenticated users to access the Arcana wallet for signing blockchain transactions on any supported blockchain network.

## See also

* [Auth SDK Errors]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_err.md)
* [Auth SDK Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md)
* {% include "./text-snippets/authsdkref_url.md" %}
