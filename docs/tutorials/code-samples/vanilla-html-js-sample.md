---
alias: html-js-code-sample
title: 'HTML/CSS and JavaScript Code Sample'
description: 'Sample code to help developers that are building HTML/CSS and JavaScript-based apps to quickly integrate with the Arcana Auth SDK.'
arcana:
  root_rel_path: ../..
---

# HTML/CSS/JS App Code Sample

First of all, before adding any code to the Web3 app, [[register-app-auth|register the app and configure user onboarding options and other settings]] using the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}. 

Next, install the `{{ config.extra.arcana.auth_sdk_pkg_name }}` package, [[integrate-vanilla-app|integrate the HTML/CSS/JS app]], and then add code in the app to [[index-onboard-users|onboard users]]. Only authenticated users can access the {{config.extra.arcana.wallet_name}} and sign blockchain transactions.

Check out the code sandbox for the [sample vanilla HTML/CSS/JS app](https://codesandbox.io/s/simple-html-app-auth-integration-4gqf6q). This is a very basic vanilla HTML/CSS/JS app that uses Parcel. It integrates with the {{config.extra.arcana.sdk_name}} and uses the plug-and-play login UI for onboarding users.

## Registration & Configuration

The following {{config.extra.arcana.dashboard_name}} screen shows the app 'Testnet' configuration set up to onboard users via multiple authentication providers: Google, Twitch, and passwordless login. For details, see [[index-configure-auth|how to configure authentication providers]].

<figure markdown="span">
  <img class="an-screenshots width_85pc" alt="Configure Social Login" src="{{config.extra.arcana.img_dir}}/nextjs_app_db_setup_google_twitch.{{config.extra.arcana.img_png}}"/>
  <figcaption>Configure Social Login</figcaption>
</figure>

After configuring the app, copy the **{{config.extra.arcana.app_address}}** assigned to the app and displayed in the dashboard on the top right of the screen. It will be required during app integration with the {{config.extra.arcana.sdk_name}}.

<figure markdown="span">
  <img class="an-screenshots-noeffects width_85pc"  alt="Get Arcana Client ID" src="{{config.extra.arcana.img_dir}}/an_db_app_address.{{config.extra.arcana.img_png}}" width="50%" />
  <figcaption>Get Arcana Client ID</figcaption>
</figure>

## Integrate App

In the sample code, refer to the  `src/index.js` file. It shows how `AuthProvider` is instantiated. Before you deploy and run this test app, make sure it is registered and has a **{{config.extra.arcana.app_address}}** assigned to it. Use this {{config.extra.arcana.app_address}} when you create the `AuthProvider`.

```js title="src/index.js" hl_lines="1 2 3"
let provider;
const clientId = "xar_test_11111111718953094BbeeeeeB9484cAfd2"; //replace with the app clientID via the Dashboard
const auth = new AuthProvider(`${clientId}`, {
  network: "testnet", //defaults to 'testnet'
  position: "right", //defaults to right
  theme: "light", //defaults to dark
  alwaysVisible: true, //defaults to true, wallet always visible after user logs in
  chainConfig: {
    chainId: '137', //Polygon, defaults to 'Ethereum'
    rpcUrl: "https://rpc.ankr.com/polygon_mumbai" //defaults to 'https://rpc.ankr.com/eth'
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

<figure markdown="span">
  <img class="an-screenshots-noeffects width_50pc"  alt="Initialize and use SDK methods" src="{{config.extra.arcana.img_dir}}/auth_ex_html_css_js_app1.{{config.extra.arcana.img_png}}"/>
  <figcaption>Initialize and use SDK methods</figcaption>
</figure>

### Onboard Users

After integrating the app with the {{config.extra.arcana.sdk_name}}, instantiating the `AuthProvider`, add code to onboard users via the plug-and-play login UI offered by the {{config.extra.arcana.sdk_name}} in your HTML/CSS/JS app. Use the `connect` function to bring up the built-in, plug-and-play login UI. It will display only those authentication providers that the developer has configured earlier using the {{config.extra.arcana.dashboard_name}}.

```js title="src/indexp.js" hl_lines="2"
try {
  await auth.connect();
} catch (e) {
  console.log(e);
}
```

Once a user logs in to the HTML/CSS/JS app and authenticates, the {{config.extra.arcana.wallet_name}} will be accessible and can be used for signing blockchain transactions.

<figure markdown="span">
  <img class="an-screenshots width_85pc" alt="Login to access Arcana Wallet" src="{{config.extra.arcana.img_dir}}/auth_ex_html_css_js_app2.{{config.extra.arcana.img_png}}"/>
  <figcaption>Login to access Arcana Wallet</figcaption>
</figure>


An authenticated app user can access the {{config.extra.arcana.wallet_name}} UI to perform various Web3 blockchain operations such as adding tokens, checking the wallet balance, switching networks, etc. See [[arcana-wallet-user-guide|{{config.extra.arcana.wallet_name}} User Guide]] for more details.

### Use Web3 Wallet Operations

Developers can add code to programmatically call the Web3 wallet operations for authenticated users in the HTML/CSS/JS app, as required. See [[index-arcana-wallet|{{config.extra.arcana.wallet_name}} Developer's Guide]] and the [[dashboard-user-guide|{{config.extra.arcana.dashboard_name}} User Guide]] for more details.

!!! an-caution "Use the latest {{config.extra.arcana.sdk_name}}"

      Check the package.json file in the code sandbox sources and ensure that you are using the latest `{{config.extra.arcana.auth_sdk_pkg_name}}` package.

      The current {{config.extra.arcana.sdk_name}} release is: v{{config.extra.arcana.latest_version}}