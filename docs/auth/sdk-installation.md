---
alias: sdk-installation
title: 'Install Auth SDK'
description: 'Multiple flavors of the Arcana Auth SDK depending upon the app type. Use the correct SDK package for installation. Choose from the basic Auth package to the wrapper SDK for React Apps, Wagmi, RainbowKit, Web3-react apps, Unity apps.'
arcana:
  root_rel_path: ..
---

# Installing {{config.extra.arcana.sdk_name}}

Developers must install the appropriate {{config.extra.arcana.sdk_name}} package as per their application type and then integrate the app. Refer to the table below:

{% include "./text-snippets/auth_sdk_flavors.md" %}

## Web SDKs

### Vanilla HTML/CSS/JS Apps

{% include "./code-snippets/auth_install.md" %}

### React/Next.js Apps

{% include "./code-snippets/auth_react_install.md" %}

### Wagmi/RainbowKit Apps

{% include "./code-snippets/auth_wagmi_install.md" %}

### Web3-React Apps

{% include "./code-snippets/auth_web3_react_install.md" %}

### Unity Framework

{% include "./code-snippets/auth_unity_install.md" %}

!!! an-caution "Unity Settings"

      Developers must update the Unity Project settings in addition to installing the {{config.extra.arcana.gaming_sdk_name}}. This is required to enable SDK usage in Unity Apps. See [[unity-quick-start#2-unity-setup-auth-sdk-install| Unity Setup]].

## Mobile SDKs

### Flutter Apps

{% include "./code-snippets/auth_flutter_install.md" %}

### React-Native Apps

{% include "./code-snippets/auth_react_native_install.md" %}