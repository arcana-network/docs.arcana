```js title="index.js" hl_lines="3 4 9-12 16-18"
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const provider = new AuthProvider(
  "xar_dev_5fd5338ee82834d59eee58f37b676bdabdfa41e9", //required
); //See SDK Reference Guide for optional parameters

root.render(
  <StrictMode>
    <ProvideAuth provider={provider}>
      <App />
    </ProvideAuth>
  </StrictMode>
);
```