---
slug: /setupwalletreact
id: idsetupwalletreact
sidebar_custom_props:
  cardIcon: 🔐 
arcana:
  root_rel_path: ../..
---

# React/NextJS App Integration

In this tutorial, you will learn how to integrate a React/NextJS application with the [Arcana Auth SDK]({{page.meta.arcana.root_rel_path}}/concepts/authsdk.md) by leveraging the Auth React wrapper. The Auth React wrapper utilizes React Hooks for setting the Auth component props with requisite initialization values for configuring the Auth SDK and the Arcana wallet.

{% include "./text-snippets/sample_int_app_src.md" %}

## Prerequisites

* Developers must first log into the Arcana Developer Dashboard: {% include "./text-snippets/db_portal_url.md" %}

* Use the dashboard to [register and configure dApp settings]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md) for using the Auth SDK. Configure the dApp settings as per the required user onboarding experience. Click on the *Auth* tab in the dashboard. Choose and configure from a list of supported authentication mechanisms:

    {% include "./text-snippets/auth_supported.md" %}

    !!! note "Configure Authentication Mechanism"

          You may be required to configure additional details depending on the choice of authentication mechanisms. For example, if the dApp wants to enable users to onboard using the Google social authentication then the developer must set up and specify the [clientID for Google OAuth]({{page.meta.arcana.root_rel_path}}/howto/config_social_login/google_oauth.md) in the Arcana Dashboard before integrating the application.

          For details, see [how to configure one or more social logins]({{page.meta.arcana.root_rel_path}}/howto/config_social_providers.md).

* Save the **App Address** assigned to the dApp by the dashboard. It is required to instantiate the `AuthProvider` while integrating the dApp. 

## Steps

*Enabling user onboarding and signing of blockchain transactions in your React/NextJS application is simple!*

Typical React application has `index.js` and `App.js` files. To integrate Arcana Auth React components, install the Auth SDK and the Auth React component wrapper. Next, update the `index.js` file and import, instantiate `AuthProvider` from the Auth SDK. Import the `ProviderAuth` component from the Auth React library and render it using Web3 provider as props.

Lastly, update the `App.js` file by importing Auth component and rendering it in the `App` function. Provide authentication initialization values as props. Once the user logs in successfully, set the route to the post login page in your application.

### Step 1: Install Auth SDK

{% include "./code-snippets/auth_install.md" %}

### Step 2: Install Auth-React Wrapper

{% include "./code-snippets/auth_react_install.md" %}

### Step 3: Update `index.js`

```js title="index.js"
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";

const provider = new AuthProvider(`${appId}`)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProvideAuth provider={provider}>
      <App />
    </ProvideAuth>
  </React.StrictMode>
);
```

### Step 4: Update `App.js`

```js title="App.js"
import { Auth, useAuth } from "@arcana/auth-react";

const onLogin = () => {
  // Route to authenticated page
}
function App() {
  const auth = useAuth();
  return (
    <div>
      {auth.loading ? (
        "Loading"
      ) : auth.isLoggedIn ? (
        <p>Logged In</p>
      ) : (
        <div>
          <Auth externalWallet={true} theme={"light"} onLogin={onLogin}/>
        </div>
      )}
    </div>
  );
}

export default App;
```

That is all! :tada:

You have successfully integrated your React/Next.js application with the Arcana Auth SDK using the Auth-React wrapper. Checkout another example with source code demonstrating [React application integration]({{page.meta.arcana.root_rel_path}}/tutorials/code_samples/react_code_sample.md).

## What's Next?

Once the login component is used in the application to onboard users, authenticated users can utilize the Arcana wallet to sign blockchain transactions, transfer or send blockchain tokens, etc.

## See also

* Social authentication using Auth SDK and [Google]({{page.meta.arcana.root_rel_path}}/howto/config_social_providers.md)
* [Passwordless authentication using Auth SDK]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/wallet_pwdless_login.md)
* [Auth SDK Errors]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_err.md)
* [Auth SDK Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md)
* {% include "./text-snippets/authsdkref_url.md" %}
