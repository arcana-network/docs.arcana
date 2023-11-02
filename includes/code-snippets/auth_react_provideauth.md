```js title="index.js" hl_lines="3-4 10-12 16-18"
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const provider = new AuthProvider(
  "xar_live_d7c88d9b033d100e4200d21a5c4897b896e60063"
);

root.render(
  <StrictMode>
    <ProvideAuth provider={provider}>
      <App />
    </ProvideAuth>
  </StrictMode>
);
```

---
```js title="app.js" hl_lines="2 4 8"
import React from "react";
import { Auth } from "@arcana/auth-react";

export default function App() {
  return (
    <div className="App">
      <h1>Sample Auth React App</h1>
      <Auth />
    </div>
  );
```