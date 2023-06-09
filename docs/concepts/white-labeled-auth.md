---
alias: concept-white-labeled-auth
title: 'White-labeled SDK'
description: 'Use white-labeled SDK to use custom wallet UI instead of using the Arcana wallet UI.'
arcana:
  root_rel_path: ..
---

# White-labeled SDK 

The white-labeled feature of the {{config.extra.arcana.sdk_name}} allows Web3 app developers to disable the built-in, embedded {{config.extra.arcana.wallet_name}} and plug in a custom wallet UI instead for the app users.

To use a custom wallet UI, the developers must enable the white-labeled auth feature via the {{config.extra.arcana.dashboard_name}} at the time of registering the application. Once an app is registered so, it cannot be reconfigured to use the built-in {{config.extra.arcana.wallet_name}}.

Developers using the custom wallet UI have the onus to create wallet UI and also build the logic for displaying the notification screens to seek the user's approval before issuing a blockchain transaction via the custom wallet UI. In this configuration, there is no {{config.extra.arcana.wallet_name}} UI or notification screen displayed via the {{config.extra.arcana.sdk_name}}.

!!! warning "Global Keys Not supported"

      For security reasons, apps that choose to use a custom wallet UI by using the white-labeled auth can only use app-specific keys. There is no option to change the 'Keyspace type' if a custom wallet UI option is selected.
