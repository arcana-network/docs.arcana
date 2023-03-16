---
slug: /reactnextjs
id: idreactnextjs
sidebar_custom_props:
  cardIcon: 🏁
arcana:
  root_rel_path: ../../..
---

# React/NextJS Apps

Depending upon whether your React Web3 app is a simple React app, or a React app that uses [Wagmi](https://wagmi.sh/), you may need to install one or more of the following Arcana Auth SDK packages - `auth`, `auth-react` and `auth-wagmi`.

* If your application is built using the React framework, you need to install both the [`auth`](https://www.npmjs.com/package/@arcana/auth) package and the [`auth-react`](https://www.npmjs.com/package/@arcana/auth-react) package. Next, you must integrate the app with the Auth SDK `AuthProvider` and also use the React component, `ProvideAuth`. 
* If your application uses Wagmi or RainbowKit, you need to install and integrate the app only with the [`auth-wagmi`](https://www.npmjs.com/package/@arcana/auth-wagmi) wrapper package and create an `ArcanaConnector` to enable user onboarding and signing of blockchain transactions using the Arcana wallet.

For detailed instructions, select **one of the options below** as per your application type.

[Integrate React/NextJS  :fontawesome-brands-react: :simple-nextdotjs:]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/integrate_wallet_react.md){ .md-button } 

[Integrate Wagmi Connector :material-card-account-mail:]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/integrate_wagmi.md){ .md-button } 

[RainbowKit Connector :material-card-account-mail:]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth//integrate_rainbow.md){ .md-button }
