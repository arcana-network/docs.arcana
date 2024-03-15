---
alias: sdk-installation
title: 'Install Auth SDK'
description: 'Multiple flavors of the Arcana Auth SDK depending upon the app type. Use the correct SDK package for installation. Choose from the basic Auth package to the wrapper SDK for React Apps, Wagmi, RainbowKit apps and more.'
arcana:
  root_rel_path: .
---

# Installing {{config.extra.arcana.company_name}} SDKs

## {{config.extra.arcana.sdk_name}}

Developers must install the appropriate {{config.extra.arcana.sdk_name}} package as per their application type and then integrate the app.

{% include "./text-snippets/auth_sdk_flavors.md" %}

### Web SDKs

#### Vanilla HTML/CSS/JS Apps

{% include "./code-snippets/auth_install.md" %}

#### React/Next.js Apps

{% include "./code-snippets/auth_react_install.md" %}

#### Wagmi/RainbowKit Apps

{% include "./code-snippets/auth_wagmi_install.md" %}

#### Web3-React Apps

{% include "./code-snippets/auth_web3_react_install.md" %}

### Mobile SDKs

#### Flutter Apps

{% include "./code-snippets/auth_flutter_install.md" %}

#### React-Native Apps

{% include "./code-snippets/auth_react_native_install.md" %}

### Gaming Apps

#### Unity Framework

{% include "./code-snippets/auth_unity_install.md" %}

## {{config.extra.arcana.gasless_sdk_name}}

{% include "./code-snippets/gasless_sdk_install.md" %}
