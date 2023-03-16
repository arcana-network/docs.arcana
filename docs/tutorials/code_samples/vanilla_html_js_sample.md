---
slug: /htmljscodesample
id: idhtmljscodesample
sidebar_custom_props:
  cardIcon: 📃 
arcana:
  root_rel_path: ../..
---

# HTML/CSS/JS App Code Sample

You need to first [configure user onboarding options and other settings]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) using the {% include "./text-snippets/db_portal_url.md" %}. After that, install Arcana Auth SDK and integrate your HTML/CSS/JS app.

Here is a very basic vanilla HTML/CSS/JS app that uses Parcel. It integrates with Arcana Auth SDK and uses the plug-and-play feature to allow user onboarding and signing of blockchain transactions. 

Check out the code sandbox for the [sample vanilla HTML/CSS/JS app](https://codesandbox.io/s/simple-html-app-auth-integration-4gqf6q).

## Registration & Configuration

The following dashboard screen shows that a test deployment of an app is configured to onboard users via Google, Twitch, and passwordless login. Follow the instructions in the [how to configure your app]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) guide for details.

<img alt="NextJS App config" src="/img/nextjs_app_db_setup_google_twitch.png" width="75%" />

After configuring your app, copy and use the **{{config.extra.arcana.app_address}}** assigned to the app and displayed in the dashboard on the top RHS.

<img alt="Client ID for the app" src="/img/an_db_app_address.png" width="75%" />

## Integrate Auth SDK

In the sample code, refer to the  `src/index.js` file. It shows how `AuthProvider` is instantiated. Before you run this test app, you need to register your app and obtain the Arcana **{{config.extra.arcana.app_address}}** assigned to your app via the dashboard. This {{config.extra.arcana.app_address}} is used during the instantiation of the `AuthProvider`.

```js title="src/index.js" hl_lines="1 2 3"
let provider;
const clientId = "xar_test_11111111718953094BbeeeeeB9484cAfd2"; //replace with the app clientID via the Dashboard
const auth = new AuthProvider(`${clientId}`, {
  network: "testnet", //defaults to 'testnet'
  position: "right", //defaults to right
  theme: "light", //defaults to dark
  alwaysVisible: true, //defaults to true, wallet always visible after user logs in
  chainConfig: {
    chainId: CHAIN.POLYGON_MAINNET, //defaults to CHAIN.ETHEREUM_MAINNET
    rpcUrl: "https://polygon-rpc.com" //defaults to 'https://rpc.ankr.com/eth'
  }
});
...
```
Next, initialize the `AuthProvider`:

```js title="src/index.js" hl_lines="2"

try {
  await auth.init();
  console.log("Init auth complete!");
  console.log({ provider });
} catch (e) {
  console.log(e);
}

```

<img alt="Arcana Wallet HTML/CSS/JS app Init" src="/img/auth_ex_html_css_js_app1.png" width="75%"/>

### Use Auth Plug-&-Play User Authentication

After integrating the Auth SDK and instantiating the `AuthProvider`, plug in the user authentication and other Auth SDK functions in your HTML/CSS/JS app. Use the Arcana Auth SDK 'connect' method to bring up the user authentication plug-and-play UI. It will show up only those social authentication providers that the developer has configured earlier using the Arcana Developer dashboard.

```js title="src/indexp.js" hl_lines="2"
try {
  await auth.connect();
} catch (e) {
  console.log(e);
}
```

Once a user logs in to the HTML/CSS/JS app and authenticates, the Arcana wallet will show up.

<img alt="Arcana Wallet HTML/CSS/JS app Connect" src="/img/auth_ex_html_css_js_app2.png" width="75%"/>

Now the app user can access the wallet UI for various Web3 blockchain operations such as adding tokens, checking the wallet balance, switching networks, etc. See [Arcana Wallet User Guide]({{page.meta.arcana.root_rel_path}}/howto/wallet_ui.md) for more details.

Developers can plug in other Auth SDK features programmatically within the HTML/CSS/JS app as required. See [Arcana Wallet Developer's Guide]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md) and [Dashboard User Guide]({{page.meta.arcana.root_rel_path}}/db/config_dApp_with_db.md) for more details.

!!! caution "Use the latest Auth SDK"

      Check the package.json file in the code sandbox sources and ensure that you are using the latest Auth SDK npm release.
      The current release is: v{% include "./text-snippets/latest_auth_sdk.md" %}