---
alias: migration-guide-v1.0.2
title: 'Arcana Auth Web SDK Migration Guide v1.0.2'
description: 'How to migrate to Arcana Auth Web SDK v1.0.2'
arcana:
  root_rel_path: ..
---

# Arcana Auth SDK v1.0.1 -> v1.0.2 Migration

This guide is meant for developers who have already integrated apps with an older version of the {{config.extra.arcana.sdk_name}} and run them using {{config.extra.arcana.company_name}} Testnet. 

If you are new to Arcana Network, please visit [[auth-quick-start|{{config.extra.arcana.product_name}} Quick Start Guide]] to get started.

When you migrate from using the {{config.extra.arcana.sdk_name}}  v1.0.1 to the latest v1.0.2 release, there is no major update besides minor bug fixes and wallet UI updates.

## What has Changed?

The following section lists changes between {{config.extra.arcana.sdk_name}} v1.0.1 and v1.0.2. 

### {{config.extra.arcana.dashboard_name}} 

**App Address** is now referred to as **{{config.extra.arcana.app_address}}** in the dashboard. The format of the unique identifier associated with all registered apps has changed. 

### {{config.extra.arcana.sdk_name}} 

<img src="{{config.extra.arcana.img_dir}}/icons/i_an_authsdk_light.{{config.extra.arcana.img_png}}#only-light" alt="Auth SDK icon" width="50" />
<img src="{{config.extra.arcana.img_dir}}/icons/i_an_authsdk_dark.{{config.extra.arcana.img_png}}#only-dark" alt="Auth SDK icon" width="50" />

* {{config.extra.arcana.wallet_name}}  now supports fiat/on-ramp feature that allows users to buy cryptocurrency and tokens.
* The wallet UI has a new minimized widget.
* There was a bug that allowed users to log into a different app using the same tab where they had logged in without having to explicitly log in to a different app in the same tab. This is now fixed. For details, see the [[rn-main-auth-v1.0.2|release notes]].

## How to Migrate to v1.0.2?

Simply upgrade the {{config.extra.arcana.sdk_name}} to the latest package v1.0.2. No other change is required. You **do not** need to re-register your apps via the dashboard. Developers can continue to use the old **App Address** obtained for using v1.0.0/v1.0.1 with the latest {{config.extra.arcana.sdk_name}}.  However, if you re-register your app and get a new **{{config.extra.arcana.app_address}}**, you cannot use older versions of the {{config.extra.arcana.sdk_name}}  and are required to migrate to the latest {{config.extra.arcana.sdk_name}} v1.0.2 or higher.

!!! an-note "{{config.extra.arcana.app_address}}"

      Earlier, the documentation may have referred to the unique {{config.extra.arcana.company_name}} identifier assigned to each app after registration as **App Address**.  In the latest release, we refer to it as **{{config.extra.arcana.app_address}}**. 

## What's New?

<img src="{{config.extra.arcana.img_dir}}/icon_new_light.{{config.extra.arcana.img_png}}#only-light" alt="New icon" width="50" /><img src="{{config.extra.arcana.img_dir}}/icon_new_dark.{{config.extra.arcana.img_png}}#only-dark" alt="New icon" width="50" />

See [[rn-main-auth-v1.0.2|{{config.extra.arcana.product_name}} v1.0.2 release notes]] for details.
