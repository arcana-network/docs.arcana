---
alias: sdk-installation
title: 'Install SDK'
description: 'Multiple flavors of the Arcana Auth SDK depending upon the app type. Use the correct SDK package for installation. Choose from the basic Auth package to the wrapper SDK for React Apps, Wagmi, RainbowKit, WalletConnect, Web3-react apps, Unity apps.'
arcana:
  root_rel_path: ..
---

# Install {{config.extra.arcana.sdk_name}}

{{config.extra.arcana.sdk_name}} supports various [[web3-stack-apps|app types]]. You may be required to install one or more {{config.extra.arcana.sdk_name}} packages depending upon the app type.

For example, Vue apps, HTML/CSS/JS apps only require installation of the `{{config.extra.arcana.auth_sdk_pkg_name}}` package. For other app types, you may need to install app-type-specific packages along with the companion `{{config.extra.arcana.auth_sdk_pkg_name}}` package. See table for more details:

{% include "./text-snippets/auth_sdk_flavors.md" %}

## {{config.extra.arcana.sdk_name}}

### HTML/CSS/JS, Vue Apps

{% include "./code-snippets/auth_install.md" %}

### React/Next.js Apps

{% include "./code-snippets/auth_react_install.md" %}

### Wagmi/RainbowKit/WalletConnect Apps

{% include "./code-snippets/auth_wagmi_install.md" %}

### Web3-React Apps

{% include "./code-snippets/auth_web3_react_install.md" %}

### Unity Framework

{% include "./code-snippets/auth_unity_install.md" %}

!!! an-warning "Unity Settings"

      Developers must update the Unity Project settings in addition to installing the {{config.extra.arcana.gaming_sdk_name}}. This is required to enable SDK usage in Unity Apps. See [[unity-quick-start#1-unity-setup-auth-install| Unity Setup]].

## Mobile SDKs

### Flutter Apps

{% include "./code-snippets/auth_flutter_install.md" %}

### React-Native Apps

{% include "./code-snippets/auth_react_native_install.md" %}