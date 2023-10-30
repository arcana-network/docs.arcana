When utilizing the default {{config.extra.arcana.wallet_name}} UI, authenticated users can securely access and copy their private key if needed.

    For custom wallet UIs, developers have the freedom to create a similar feature for authenticated users. To enable users to view their private key, developers can use the `_arcana_getPrivateKey` call to safely retrieve the authenticated user's key share and display the locally generated private key within the app's context.

    ```js

    // Only valid when custom wallet UI is selected in the dashboard
    // during app registration

    async function onClickGetUserPrivateKey() {
      const authProvider = window.ethereum //assuming setWindowProvider is set when AuthProvider was instantiated 
      try {
        const userPkey = await authProvider.request({
          method: '_arcana_getPrivateKey',
          params: []
        });
        // Do something with the key in custom wallet UI
        // For e.g., display it in the app context, allow user to copy it
      } catch(error) {
            console.log(error);
      };
    }
    ```