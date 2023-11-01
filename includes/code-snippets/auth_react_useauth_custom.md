```js title="App.js" hl_lines="1 4 8 18-24"
import { useAuth } from "@arcana/auth-react";

function App() {
  const { loading, isLoggedIn, connect, user, loginWithSocial } = useAuth()

  const onConnectClick = async () => {
    try {
      await loginWithSocial('google');
    } catch (err) {
      console.log({ err });
      // Handle error
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (!isLoggedIn) {
    return (
      <button onClick={onConnectClick}>
        Connect with Google
      </button>
    );
  }
}

export default App
```