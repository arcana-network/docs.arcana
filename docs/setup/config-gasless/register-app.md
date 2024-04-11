---
alias: register-app-gasless
title: 'Register App'
description: 'Register the app using the dashboard and obtain a unique clientId. Use clientId to integrate the app with the Arcana SDKs.'
arcana:
  root_rel_path: ../..
---

# Register App

In this tutorial, you will learn how to register a Web3 app and get a unique client identifier required for integrating with the {{config.extra.arcana.gasless_sdk_name}}.

## Prerequisites

{% include "./text-snippets/db_prerequisites.md" %}

## Steps

### 1. Log into Dashboard

{% include "./text-snippets/db_login.md" %}

### 2. Register App

{% include "./text-snippets/db_register_dapp.md" %}

That is all! 🎉

!!! an-info "Save {{config.extra.arcana.app_address}}"

    A unique **{{config.extra.arcana.app_address}}** assigned to the registered apps is displayed on the top right of the dashboard screen. 
    
    Use it to integrate the app with the {{config.extra.arcana.company_name}} SDKs.

    ![App unique identifier](/img/an_db_app_address.png){.an-screenshots}

## What's next?

After registering the app, [[configure-gasless|configure gasless settings]] first. Then install the {{config.extra.arcana.gasless_sdk_name}} and [[web-gasless-integrate|integrate the app]].

## See Also

* [[dashboard-user-guide#delete-application|Deleting Application Entry]]
* [[dashboard-user-guide#manage-testnet-and-mainnet-configurations|Managing Testnet and Mainnet Configurations]]
* [[gasless-sdk-usage-guide|{{config.extra.arcana.gasless_sdk_name}} Usage Guide]]