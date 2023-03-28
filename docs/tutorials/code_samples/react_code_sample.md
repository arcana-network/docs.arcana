---
slug: /reactcodesample
id: idreactcodesample
sidebar_custom_props:
  cardIcon: 📃 
arcana:
  root_rel_path: ../..
---

# Using React Auth Wrapper

You need to first register your app using the {{config.extra.arcana.dashboard_name}} and obtain a unique {{config.extra.arcana.app_address}}. Next, configure user onboarding options for the app using the {{config.extra.arcana.dashboard_name}}. Then install the `{{config.extra.arcana.auth_sdk_pkg_name}}` package and the Auth React component wrapper `{{config.extra.arcana.react_sdk_pkg_name}}` package and integrate the app with the {{config.extra.arcana.sdk_name}} before adding code to onboard users.

To integrate the {{config.extra.arcana.sdk_name}} and use the Auth React Wrapper component, `ProvideAuth`, you need to update the `index.js` and `App.js` files as listed below:

```js title="index.js" hl_lines="5 6 11 15 17"
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const provider = new AuthProvider(process.env.REACT_APP_ARCANA_APP_ID); //See SDK Reference Guide for optional parameters

root.render(
  <StrictMode>
    <ProvideAuth provider={provider}>
      <App />
    </ProvideAuth>
  </StrictMode>
);
```

```js title="App.js" hl_lines="2 73"
import React from "react";
import { Auth } from "@arcana/auth-react";
import { Button } from "./components";
import styled from "styled-components";
import "./styles.css";

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px 20px;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  > * {
    &:not(:first-child) {
      margin-top: 20px;
    }
  }
`;

const LeftSection = styled.div`
  width: 20%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
    padding-bottom: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid white;
  }
`;

const RightSection = styled.div`
  width: 78%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Heading = styled.h2`
  color: white;
  font-family: "Sora", sans-serif;
  text-align: center;
`;

export default function App() {
  const [theme, setTheme] = React.useState("light");
  const [externalWallet, showExternalWallet] = React.useState(false);
  return (
    <Wrapper>
      <LeftSection>
        <Section>
          <Heading>Theme</Heading>
          <Button onClick={() => setTheme("light")}>Light mode</Button>
          <br />
          <Button onClick={() => setTheme("dark")}>Dark mode</Button>
        </Section>
        <Section>
          <Heading>External Wallet</Heading>
          <Button onClick={() => showExternalWallet(true)}>Show</Button>
          <br />
          <Button onClick={() => showExternalWallet(false)}>Hide</Button>
        </Section>
      </LeftSection>
      <RightSection>
        <Auth externalWallet={externalWallet} theme={theme} />
      </RightSection>
    </Wrapper>
  );
}
```

## See Also

* [{{config.extra.arcana.sdk_name}} Errors]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_err.md)
* [{{config.extra.arcana.sdk_name}} Usage Guide]({{page.meta.arcana.root_rel_path}}/walletsdk/wallet_usage.md)
* {% include "./text-snippets/authsdkref_url.md" %}