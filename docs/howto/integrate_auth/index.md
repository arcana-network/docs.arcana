---
slug: /indexintegrate
id: idindexintegrate
sidebar_custom_props:
  cardIcon: 📺
arcana:
  root_rel_path: ../..
---

# Integrate Auth SDK

To integrate your application the Auth SDK, ensure the pre-requisites are met and then follow the instructions based on your application type.

**Prerequisites**

1. Go to the Arcana Dashboard and [register your application]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md).
2. Configure the Auth SDK for your user onboarding needs. See [how to enable user onboarding guide]({{page.meta.arcana.root_rel_path}}/howto/config_social_providers.md).

**Select Integration Method**

* If your application is built with vanilla JavaScript, you can directly integrate the Auth SDK.
* If your application is built using React framework, you need to install the Auth SDK and the Auth React library and then integrate with the Auth React component, a wrapper around the Auth SDK. 
* If your application uses Wagmi or RainbowKit, you can use Auth Wagmi library and create an `ArcanaConnector` to enable user onboarding and signing of blockchain transactions using the Arcana wallet.

For detailed instructions, select the application type below:

[Vanilla JS Apps :material-language-javascript:](./integrate_wallet.md){ .md-button }

[React/NuxtJS Apps :fontawesome-brands-react: :simple-nuxtdotjs:](./react/index.md){ .md-button }

[Vue dApp :material-vuejs:](https://github.com/arcana-network/basic-storage-wallet-integration){ .md-button }