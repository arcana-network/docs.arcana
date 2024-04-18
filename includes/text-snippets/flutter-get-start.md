{{page.meta.arcana.app_type}} Web3 apps can easily onboard users via social login by integrating with the {{config.extra.arcana.flutter_sdk_name}}!

## Prerequisites

* Flutter [v3.15.0](https://flutter-ko.dev/development/tools/sdk/releases) or higher

## 1. Register & Configure

{% include "./text-snippets/quick-start-reg-config-auth.md" %}

## 2. Install SDK

The {{config.extra.arcana.flutter_sdk_name}} is available at 'Pub.dev' as a [Flutter plugin](https://docs.flutter.dev/packages-and-plugins/developing-packages) package called [`{{config.extra.arcana.mobile_flutter_sdk_pkg_name}}`](https://pub.dev/packages/arcana_auth_flutter). 

Add the following line to the dependencies section in your app's `pubspec.yaml` file:

{% include "./code-snippets/auth_flutter_install.md" %}

!!! an-note "Use latest {{config.extra.arcana.flutter_sdk_name}}"
  
      {% include "./text-snippets/warn_latest_flutter_sdk_version.md" %}

## 3. Integrate

Once installed, integrate the app with the {{config.extra.arcana.flutter_sdk_name}}. Create an `AuthProvider` instance and specify the unique **client ID** assigned to the registered app.

```javascript
import 'package:arcana_sdk/arcana_sdk.dart';

final auth = AuthProvider(clientId:"xar_xxxx_...");
auth.init(context: context);
```

Next, add code to onboard users and allow authenticated users to sign blockchain transactions using {{config.extra.arcana.wallet_name}}.

### Onboard Users

Add code to onboard users through one of the configured social login providers or via OTP login option. 

!!! an-tip "Arcana JWT Token"

      {% include "./text-snippets/jwt_token.md" %}

=== "Login"

      **Social Login**

      ```js
      auth.loginWithSocial("google").then((_) => {
      // On login Success
      }).catchError(...);
      ```

      **OTP Login**

      ```js
      auth.loginWithOTP("${email_id}").then((_) => {
      // On login Success
      }).catchError(...);
      ```

      **Logout**

      Call the logout method in response to a user's choice to log out. The built-in {{config.extra.arcana.wallet_name}} UI has a **Logout** option in the user profile tab.

      ```js
      auth.logout().then((_) => {
      // On logout
      });
      ```

=== "User Info"

      **Get User Address**

      ```js
      auth.getAccount().then((account) => ...);
      ```

      **Get User Details**

      ```js
      auth.getUserInfo().then((UserInfo info) => ...);
      ```

=== "Wallet Visibility"

      **Show/Hide Wallet UI**

      Developers can choose to show or hide the wallet as per the app requirements. 

      ```js
      auth.showWallet();
      ```

      ```js
      auth.hideWallet();
      ```

      **Check Wallet Visibility**

      To determine in the Flutter app if the Arcana wallet is visible in the app's context, get the visibility status:

      ```js
      var isVisible = auth.isVisible();
      ```

=== "Cache"

      **Clear Cache**

      Flutter apps can use `clearCache` to clear the Webview cache:

      ```js
      auth.clearCache();
      ```

### Sign Transactions

The `AuthProvider` supports the JSON-RPC requests for the following Web3 operations:

=== "EIP-1193 Request"

    ```js
    auth.request(method: "...", params: [...]).then(() => ...);
    ```

=== "SendTransaction"

    ```js
    auth.sendTransaction({ to: "", value: "" }).then((hash) => ...);
    ```

## 4. Deploy

{% include "./text-snippets/quick-start-deploy.md" %}

{==

The {{page.meta.arcana.app_type}} mobile Web3 app is now powered by the {{config.extra.arcana.flutter_sdk_name}} to onboard users via social login and allow authenticated users to sign blockchain transactions using the {{config.extra.arcana.wallet_name}}.

==}

## See also

{% include "./text-snippets/quick-start-see-also.md" %}

{% include "./text-snippets/flutter_sdk_quicklinks.md" %}
