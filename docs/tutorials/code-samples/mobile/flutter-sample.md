---
alias: flutter-code-sample
title: 'Flutter Code Sample'
description: 'Sample code to help developers that are building Flutter-based mobile apps to quickly integrate with the Arcana Auth SDK.'
arcana:
  root_rel_path: ../..
---

# Flutter Code Sample

Before integrating a Flutter Web3 app with the {{config.extra.arcana.sdk_name}}, address the pre-requisites first. Then install the `{{config.extra.arcana.mobile_flutter_sdk_pkg_name}}` package and integrate the SDK.

## Prerequisites

* Log in to the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}. Then[[register-app-auth|register and configure the required user onboarding options]]. For details, see [[index-configure-auth|how to configure authentication providers]].

<img class="an-screenshots-noeffects" alt="Dashboard Screenshot App Config Google, Twitch" src="/img/nextjs_app_db_setup_google_twitch.png"/>

* By default, a Testnet configuration profile is created after the app is registered. A unique **{{config.extra.arcana.app_address}}** is assigned to the Flutter app. Note this value, it will be required later during app integration.

<img class="an-screenshots-noeffects"  alt="Client ID for the app" src="/img/an_db_app_address.png"/>

## Install SDK

The {{config.extra.arcana.company_name}} [`{{config.extra.arcana.mobile_flutter_sdk_pkg_name}}` package](https://pub.dev/packages/arcana_auth_flutter) is offered as a ['Flutter Plugin'](https://docs.flutter.dev/packages-and-plugins/developing-packages). Set up the latest version using the app's pubspec.yaml file: 

{% include "./code-snippets/auth_flutter_install.md" %}

!!! an-note

      For a complete Flutter app integration example, see the [Auth Examples GitHub Repository](https://github.com/shaloo/sample-auth-flutter/).

## Integrate App

Refer to the Flutter sample code in the repository mentioned earlier. In the  `lib/main.dart` file, the `arcana_auth_flutter/arcana_sdk.dart` file is imported. Create a new instance of `AuthProvider` by specifying the **{{config.extra.arcana.app_address}}** assigned to the Flutter app during app registration.

```js title="sample-auth-flutter/lib/main.dart" hl_lines="3-4 9 19-20 38"
import 'dart:convert';
import 'dart:math';
import 'package:arcana_auth_flutter/common.dart';
import 'package:arcana_sdk_example/strings.dart';
import 'package:flutter/material.dart';
import 'dart:async';

import 'package:flutter/services.dart';
import 'package:arcana_auth_flutter/arcana_sdk.dart';

void main() {
  runApp(MaterialApp(home: const MyApp()));
}

...

class _MyAppState extends State<MyApp> {
  String _platformVersion = 'Unknown';
  final auth = AuthProvider(
      clientId: "xar_test_xxxxxxxxxxxxxxxx35e1811b0c2e33619f8");
  TextEditingController heightController = TextEditingController();
  TextEditingController widthController = TextEditingController();
  String logs = '';
  String action = '';
  @override
  void initState() {
    super.initState();
    initPlatformState();
  }

...

  // Platform messages are asynchronous, so we initialize in an async method.
  Future<void> initPlatformState() async {
    setState(() {
      logs = '';
    });
    auth.init(context: context); // Important!!! initialize before calling other methods
  }
```

Make sure to call the `init` method of the `AuthProvider` first before calling any other methods.

### Onboard Users

Next, add code to onboard users. In this example, we use the custom login UI option and use `loginWithSocial` method of the `AuthProvider` to onboard users via 'Google' as the social login provider.

```js title="sample-auth-flutter/lib/main.dart" hl_lines="7-10"
...
Row(
  children: [
    Expanded(
      child: ElevatedButton(
          onPressed: () {
            auth.loginWithSocial("google").then((_) {
              action = "login_complete";
              setState(() {});
            });
            logs = '';
            action = 'login_google';
            setState(() {});
          },
          child: Text("Login with google")),
    )
  ],
),
...
       
```

Once a user authenticates, the built-in {{config.extra.arcana.wallet_name}} is displayed in the app's context and can be used for signing blockchain transactions. See [[arcana-wallet-user-guide|{{config.extra.arcana.wallet_name}} User Guide]] for more Web3 wallet operation details.

<img alt="AuthProvider Flutter app Login" src="/img/auth_ex_flutter_ios.gif" width="25%"/>

### Use Web3 Wallet Operations

Developers can add code as required to programmatically call Web3 wallet operations for authenticated users. See [[index-arcana-wallet|{{config.extra.arcana.wallet_name}} Developer's Guide]] and the [[dashboard-user-guide|{{config.extra.arcana.dashboard_name}} User Guide]] for details on wallet configuration.

That's all! :material-party-popper:

The Flutter app is successfully integrated and ready to onboard Web3 users via social login, email using the configured providers. Authenticated users can instantly access the {{config.extra.arcana.wallet_name}} to sign blockchain transactions.

## See Also

* [[flutter-quick-start|Flutter Apps Integration Quick Start Guide]]
