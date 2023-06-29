---
alias: migrate-app-testnet-mainnet
title: 'Migrate App Deployment: Testnet -> Mainnet'
description: 'Learn how developers can deploy the apps integrated with the Arcana Auth on the Arcana Testnet/Mainnet.'
arcana:
  root_rel_path: ..
---

# Migrate App Deployment: Testnet -> Mainnet

In this guide, you will learn how developers can migrate the apps deployed on Arcana Testnet to Arcana Mainnet.

## Prerequisites

* The app must be [[deploy-app|deployed on Arcana Testnet already]].

## Steps

### Step 1: Configure Mainnet Profile

Browse the 'Manage Apps' page on the {{config.extra.arcana.dashboard_name}}. Select the app that you wish to deploy on Mainnet. By default, the 'Mainnet' configuration button is disabled. Click on the 'Testnet' configuration profile.

In the app configuration dashboard, refer to the 'Testnet' dropdown on the top right. Click and choose the 'Mainnet' option. You can either copy the Testnet profile as Mainnet or create a fresh one. 

<img alt="Testnet client Id" src="/img/an_testnet_mainnet_config_create.gif" width="85%"/>

In both cases, the Mainnet configuration profile is created and has a **new** {{config.extra.arcana.app_address}} assigned to it. After the Mainnet profile is created successfully, you will see 'Mainnet' selected in the top RHS dropdown.

<img alt="Testnet client Id" src="/img/an_deploy_mainnet_dashboard.png" width="85%"/>

Copy the newly assigned {{config.extra.arcana.app_address}} in the Mainnet settings. It will be of the format `xar_live_nnnnnnnnnnn...nnn`.

!!! caution "Copying Testnet Profile"

      If the developer chooses to create the 'Mainnet' profile by copying the 'Testnet' profile, there is an additional setup required to update the configuration of the social provider settings. Once the 'Mainnet' profile is created, click the application configuration social login section in the LHS navigation of the {{config.extra.arcana.dashboard_name}} and copy the `Redirect URI' displayed for the 'Mainnet' profile. You need to update this `Redirect URI` value from the Testnet ones to the Mainnet ones for the respective social provider. To do this, use the social provider-specific developer console or dashboard.

### Step 2: Update Integration Code

Refer to the app integration code where you created a new `AuthProvider`. Replace the Testnet {{config.extra.arcana.app_address}} with the newly created Mainnet one with `xar_live_nnnnn` format and recompile the app. The app is ready to be deployed on Arcana Mainnet.

Refer to the example below:

{% include "./code-snippets/init_auth_mainnet.md" %}

Next, call the `init` function to initialize the newly created `AuthProvider` before calling any other SDK functions.  

{% include "./code-snippets/init_auth.md" %}

### Step 3: Deploy on Mainnet

Bring up the app. When a user authenticates, they will be assigned a new wallet address corresponding to the Arcana Mainnet.

??? example "Verify Testnet/Mainnet Deployment"

      If you miss updating the {{config.extra.arcana.app_address}} in the integration code for Mainnet deployment, the app will get deployed on Arcana Testnet. The authenticated users will see a warning informing them that the app is deployed on Testnet.

      <img alt="Testnet Wallet" src="/img/an_deploy_testnet_wallet.png" width="35%"/> 

If there is no Testnet warning displayed on the {{config.extra.arcana.wallet_name}}, then the app is successfully deployed on Arcana Mainnet.

That is all!!! :tada:

## See Also

* [[deploy-app| How to deploy on Testnet/Mainnet]]
* [[web-auth-error-msg|{{config.extra.arcana.sdk_name}} Errors]]
* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]
* {% include "./text-snippets/authsdkref_url.md" %}
