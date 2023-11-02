```js title="App.js" hl_lines="1 4 13 22-28"
import { useAuth } from "@arcana/auth-react";

function App() {
  const { loading, isLoggedIn, loginWithLink } = useAuth()

  // Add UI code to accept user's email as input
  // userEmail <- string input
  // validate userEmail

  // custom login UI
  const onConnectClick = async () => {
    try {
      await loginWithLink(`${userEmail}`); 
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
        Connect with Email
      </button>
    );
  }
}

export default App
```