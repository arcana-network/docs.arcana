---
slug: /nextjscodesample
id: idnextjscodesample
sidebar_custom_props:
  cardIcon: 📃 
arcana:
  root_rel_path: ../..
---

# NextJS App Code Sample

You need to first [configure user onboarding options and other settings]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) using the {% include "./text-snippets/db_portal_url.md" %}. After that, install Arcana Auth SDK and integrate your NextJS app.

Here is a very basic NextJS app that is created using the [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) template. It integrates with Arcana Auth SDK and uses the [plug and play]({{page.meta.arcana.root_rel_path}}/concepts/plugnplayauth.md) feature to allow user onboarding and signing of blockchain transactions. 

See [sample NextJS app source](https://github.com/arcana-network/auth-next-js) at GitHub.

## Registration & Configuration

The following dashboard screen shows that a test deployment of NextJS app is configured to onboard users via Google, Twitch, and passwordless login. Follow the instructions in the [how to configure your app]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) guide for details.

![NextJS App config](/img/nextjs_app_db_setup_google_twitch.png)

After configuring your app, copy and use the **App Address** assigned to it.

## Integrate Auth SDK

In the sample code, refer to the  `auth/getArcanaAuth.js` file. It shows how `AuthProvider` is instantiated. Before you run this test app, you need to provide the **App Address** obtained after registering your app via the dashboard during the instantiation of the `AuthProvider`.

```js title="auth/getArcanaAuth.js" hl_lines="1 3-5"
import { AuthProvider } from "@arcana/auth";

const auth = new AuthProvider(process.env.NEXT_PUBLIC_ARCANA_APP_ID, {
  theme: "light",
});

const getAuth = () => {
  return auth;
};
```

## Update NextJS App Context

### `pages/app.js` 

After integrating the Auth SDK and instantiating the `AuthProvider`, update `_app.js` to plug in the Arcana `AuthProvider`  context `ProvideAuth` into the NextJS app. 

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

The Auth context provider `ProvideAuth` is implemented in `auth/useArcanaAuth.js`.  Refer to the code to see how other `AuthProvider` methods besides the plug and play `connect` method can be used to access login, logout and other supported functionality.

### `pages/index.js`

Next, update `index.js` to use plug-and-play authentication provided by the Arcana Auth SDK with a single line of code that calls the `connect` method when the app user chooses to click **Connect** in the app UI. 

See highlighted code to understand how Auth SDK plug-and-play authentication via `connect` is built in the user interface. 

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

## Sample App Usage

Alright, now that you have configured Auth SDK usage via the dashboard and plugged in all the code in the basic create-next-app template, it is time to run the sample NextJS app. Here is what you will see when you run the NextJS sample app:

![NextJS App UI Connect](/img/nextjs_connectauth.png)

On clicking connect, the NextJS sample app user will see the plug-and-play login screen which was configured by the developer using the Arcana dashboard for Google and Twitch login. Passwordless authentication is enabled by default. 

!!! note

      In the NextJS sample app, the login options displayed in the "plug and play pop-up authentication screen" will only be the ones that have been set up by the developer through the "developer dashboard.

![App login plug and play](/img/nextjs_applogin.png)

After successful authentication, app user will see a minimized wallet. On clicking the wallet icon, the full Arcana wallet UI is displayed. The logo displayed on the minimized wallet screen and the top left logo in the maximized wallet can be configured by the app developer using the Arcana dashboard.

![Wallet Display NextJS App](/img/nextjs_wallet_display.png)

See [Arcana Wallet User Guide]({{page.meta.arcana.root_rel_path}}/howto/wallet_ui.md), [Arcana Wallet Developer's Guide]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md) and [Dashboard User Guide]({{page.meta.arcana.root_rel_path}}/db/config_dApp_with_db.md) for more details.

!!! caution "Use latest Auth SDK"

      Check the package.json file in the sample NextJS sources and ensure that you are using the latest Auth SDK npm release.
      The current release is: v{% include "./text-snippets/latest_auth_sdk.md" %}