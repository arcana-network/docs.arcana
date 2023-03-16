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
2. Configure the Auth SDK usage settings based on the required user onboarding experience and the Arcana wallet usage for signing blockchain transactions. See [how to configure auth]({{page.meta.arcana.root_rel_path}}/howto/config_auth/index.md) section for details.

**Select Integration Method**

Depending upon whether your Web3 app is a vanilla HTML/CSS/JS app, a React app, or a React app that uses [Wagmi](https://wagmi.sh/), you may need to install one or more of the following Arcana Auth SDK packages - `auth`, `auth-react` and `auth-wagmi`.

* If your application is built with vanilla HTML/CSS and JavaScript, you can directly install and integrate the app with the Arcana [`auth`](https://www.npmjs.com/package/@arcana/auth) package.
* If your application is built using the React framework, you need to install both the [`auth`](https://www.npmjs.com/package/@arcana/auth) package and the [`auth-react`](https://www.npmjs.com/package/@arcana/auth-react) package. Next, you must integrate the app with the Auth SDK `AuthProvider` and also use the React component, `ProvideAuth`. 
* If your application uses Wagmi or RainbowKit, you need to install and integrate the app only with the [`auth-wagmi`](https://www.npmjs.com/package/@arcana/auth-wagmi) wrapper package and create an `ArcanaConnector` to enable user onboarding and signing of blockchain transactions using the Arcana wallet.

For detailed step-by-step instructions, select **one of the options below** as per your application type.

[Integrate Vanilla JS Apps :material-language-javascript:](./integrate_wallet.md){ .md-button }

[Integrate React/NextJS Apps :fontawesome-brands-react: :simple-nextdotjs:](./react/index.md){ .md-button }

[Integrate Vue dApp :material-vuejs:](./integrate_wallet_vue.md){ .md-button }