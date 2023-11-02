```js title="index.js" hl_lines="3 4 10-22 26 28"
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const provider = new AuthProvider(
  "xar_live_d7c88d9b033d100e4200d21a5c4897b896e60063",
  {
    network: "mainnet",
    theme: "light",
    connectOptions: {
      compact: true,
    },
    chainConfig: {
      chainId: "80001"
    }
  }
); //See SDK Reference Guide for optional parameters

root.render(
  <StrictMode>
    <ProvideAuth provider={provider}>
      <App />
    </ProvideAuth>
  </StrictMode>
);
```


```js title="App.js" hl_lines="1 4 7"
import { Auth } from "@arcana/auth-react";

function App() {
  const [theme, setTheme] = React.useState("light");
  return (
    <div>
      <Auth theme={theme} />
    </div>
)}

export default App;
```
