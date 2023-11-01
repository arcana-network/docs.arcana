```js title="App.js"
import { Auth, useAuth } from "@arcana/auth-react";

const onLogin = () => {
  // Route to authentication page
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