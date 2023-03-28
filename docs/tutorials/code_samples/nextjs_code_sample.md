---
slug: /nextjscodesample
id: idnextjscodesample
sidebar_custom_props:
  cardIcon: 📃 
arcana:
  root_rel_path: ../..
---

# NextJS App Code Sample

You need to first [register the app]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) using the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}. Then [configure authentication providers]() for onboarding users. After that, install the `{{config.extra.arcana.auth_sdk_pkg_name}}` and the `{{config.extra.arcana.react_sdk_pkg_name}}` packages and integrate the NextJS app.

See [sample NextJS app source](https://github.com/arcana-network/auth-next-js) at GitHub. This is a very basic NextJS app that is created using the [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) template. It integrates with the {{config.extra.arcana.sdk_name}} and uses the built-in, [plug-and-play]({{page.meta.arcana.root_rel_path}}/concepts/plugnplayauth.md) login UI to onboard users and allow them to sign blockchain transactions using the {{config.extra.arcana.wallet_name}}. 

## Registration & Configuration

The following {{config.extra.arcana.dashboard_name}} screen shows the 'Testnet' configuration settings for the NextJS app such that users can onboard it via Google, Twitch, and passwordless login. See [how to configure app]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) for details.

![NextJS App config](/img/nextjs_app_db_setup_google_twitch.png){.an-screenshots}

After configuring the app, copy and use the **{{config.extra.arcana.app_address}}** assigned to the app and displayed in the dashboard on the top right of the {{config.extra.arcana.dashboard_name}} screen. It will be used during the app integration with the {{config.extra.arcana.sdk_name}}.

## Integrate App

In the sample code, refer to the  `auth/getArcanaAuth.js` file. It shows how `AuthProvider` is instantiated. Use the **{{config.extra.arcana.app_address}}** assigned to the app earlier.

```js title="auth/getArcanaAuth.js" hl_lines="1 3-5"
import { AuthProvider } from "@arcana/auth";

const auth = new AuthProvider(process.env.NEXT_PUBLIC_ARCANA_APP_ID, { //assigned during app registration, see dashboard
  theme: "light", //Check SDK Reference Guide for other optional parameters
});

const getAuth = () => {
  return auth;
};
```

## Update NextJS App Context

### `pages/app.js` 

After integrating the {{config.extra.arcana.sdk_name}} and instantiating the `AuthProvider`, update `_app.js` to plug in the `AuthProvider` context `ProvideAuth` into the NextJS app. 

```js title="pages/_app.js" hl_lines="1 2 8 12 16"
import { getAuth } from "../auth/getArcanaAuth";
import { ProvideAuth } from "../auth/useArcanaAuth";
import Layout from "../components/layout";
import { Sora } from "@next/font/google";

const sora = Sora();

const auth = getAuth();

export default function App({ Component, pageProps }) {
  return (
    <ProvideAuth provider={auth}>
      <Layout className={sora.className}>
        <Component {...pageProps} />
      </Layout>
    </ProvideAuth>
  );
}
```

The Auth context provider `ProvideAuth` is implemented in `auth/useArcanaAuth.js`.  Refer to the code to see how other `AuthProvider` methods besides the plug-and-play `connect` method can be used to access functions such as logout.

### `pages/index.js`

Next, update `index.js` and add code to onboard users via the built-in, plug-and-play login UI and call the `connect` function when the app user chooses to click **Connect** in the app UI. 

```js title="index.js" hl_lines="2 8-25 31"
import React from "react";
import { useArcanaAuth } from "../auth/useArcanaAuth";
import Loader from "../components/loader";
import { Info } from "../components/info";
import styles from "./index.module.css";

export default function IndexPage() {
  const { user, connect, isLoggedIn, loading, loginWithSocial, provider } =
    useArcanaAuth();
  const onConnectClick = async () => {
    try {
      await connect();
    } catch (e) {
      console.log(e);
    }
  };
  const onConnect = () => {
    console.log("connected");
  };
  React.useEffect(() => {
    provider.on("connect", onConnect);
    return () => {
      provider.removeListener("connect", onConnect);
    };
  }, [provider]);
  return (
    <>
      {loading && <Loader secondaryColor="#101010" strokeColor="#101010" />}
      {!loading && !isLoggedIn && (
        <button className={styles.Btn} onClick={onConnectClick}>
          Connect
        </button>
      )}
      {!loading && isLoggedIn && <Info info={user} />}
    </>
  );
}
```

## Deploy Sample App

After registering, configuring, integrating the app with the {{config.extra.arcana.sdk_name}}, and adding code to onboard users, it is time to run the sample NextJS app. Here is what you will see when you run the NextJS sample app:

![NextJS App UI Connect](/img/nextjs_connectauth.png){.an-screenshots}

On clicking connect, the NextJS sample app user will see the plug-and-play login screen with options to use Google and Twitch and log into the app. Passwordless authentication is enabled by default. 

!!! note

      In the NextJS sample app, the login options displayed in the "plug-and-play pop-up UI" will only be the ones that have been set up by the developer through the {{config.extra.arcana.dashboard_name}}.

![App login plug and play](/img/nextjs_applogin.png){.an-screenshots}

After successful authentication, an app user will see a minimized wallet. On clicking the wallet icon, the full {{config.extra.arcana.wallet_name}} UI is displayed. The logo displayed on the minimized wallet screen and the top left logo in the maximized wallet can be configured by the app developer using the Arcana dashboard.

![Wallet Display NextJS App](/img/nextjs_wallet_display.png){.an-screenshots}

See [{{config.extra.arcana.wallet_name}} User Guide]({{page.meta.arcana.root_rel_path}}/howto/wallet_ui.md), [{{config.extra.arcana.wallet_name}} Developer's Guide]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md), and the [{{config.extra.arcana.dashboard_name}} User Guide]({{page.meta.arcana.root_rel_path}}/db/config_dApp_with_db.md) for more details.

!!! caution "Use the latest {{config.extra.arcana.sdk_name}}"

      Check the package.json file in the sample NextJS sources and ensure that you are using the latest {{config.extra.arcana.sdk_name}} npm release.

      The current release is: v{% include "./text-snippets/latest_auth_sdk.md" %}