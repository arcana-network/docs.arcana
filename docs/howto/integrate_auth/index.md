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

!!! danger

      {% include "./text-snippets/warn_latest_sdk_version.md" %}

**Prerequisites**

1. Go to the Arcana Dashboard and [register your application]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md).
2. Configure the Auth SDK for your user onboarding needs. See [how to enable user onboarding guide]({{page.meta.arcana.root_rel_path}}/howto/config_social_providers.md).

**Select Integration Method**

* If your application is built with vanilla JavaScript, you can directly integrate the Auth SDK.
* If your application is built using React framework, you need to install the Auth SDK and the Auth React library and then integrate with the Auth React component, a wrapper around the Auth SDK. 
* If your application uses Wagmi or RainbowKit, you can use Auth Wagmi library and create an `ArcanaConnector` to enable user onboarding and signing of blockchain transactions using the Arcana wallet.

For detailed step-by-step instructions, select **one of the options below** as per your application type.

[Vanilla JS Apps :material-language-javascript:](./integrate_wallet.md){ .md-button }

[React/NextJS Apps :fontawesome-brands-react: :simple-nextdotjs:](./react/index.md){ .md-button }

[Vue dApp :material-vuejs:](./integrate_wallet_vue.md){ .md-button }