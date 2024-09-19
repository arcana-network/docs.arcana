=== "index.js"

    ```js
    window.onload = () => {
        const btn = document.getElementById("telegram-login");
        btn.onclick = () => {
            const url = new URL("/auth", "https://oauth.telegram.org");
            url.searchParams.append("bot_id", "7097916610");
            url.searchParams.append("scope", "profile");
            url.searchParams.append("origin", "https://zcnk5z-5000.csb.app");
            url.searchParams.append("return_to", "https://zcnk5z-5000.csb.app/redirect");
            setTimeout(() => (window.location.href = url.toString()), 50);
        };
    };
    ```

=== "redirect.js"

    ```js

    const { AuthProvider } = window.arcana.auth;
    
    window.onload = async () => {
        const auth = new AuthProvider( //Use ClientID to create AuthProvider
            "xar_dev_92ecc87db08e4c13b1fcd9b37ca9bf54fa874355"
        );
        await auth.init();  //Initialize the Auth Provider
        const u = new URL(window.location.href);
        if (u.hash) {
            const p = new URLSearchParams(u.hash.substring(1));
            const t = p.get("tgAuthResult");
            if (t) {
                cleanURL();
                //Initiate social login, must set app domain in Telegram bot for successful login
                await auth.loginWithBearer("telegram", { token: t }); 
            }
        }
    };

    function cleanURL() {
        const cleanUrl = window.location.origin + window.location.pathname;
        window.history.replaceState(null, "", cleanUrl);
    }
    ```