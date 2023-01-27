---
arcana:
  root_rel_path: ../..
---

# Enable Arcana Wallet

To enable Arcana wallet in a Web3 application that is using Shardeum, you need to first register the application with Arcana Network, then install the Arcana Auth SDK and integrate it with the application. All authenticated users can instantly access the Arcana wallet. Developers simply need to add the code for Web3 wallet operations as per their business logic.

Follow these three steps to enable Arcana wallet in any application:

## Step 1

Use Arcana Developer Dashboard to register and configure Web3 applications. Each registered application is assigned a unique **App Address**. Follow the instructions in the [How to Register and Configure Applications Guide]({{page.meta.arcana.root_rel_path}}/howto/config_dapp.md).

## Step 2

Install the Arcana Auth SDK and use the **App Address** obtained in the previous step to integrate your application and initialize the `AuthProvider`. Follow the instructions in the [How to Integrate an Application with the Auth SDK Guide]({{page.meta.arcana.root_rel_path}}/howto/integrate_auth/index.md).

## Step 3

After initializing the `AuthProvider`, use the social authentication or passwordless login features to onboard users. See [How to Onboard Users Guide]({{page.meta.arcana.root_rel_path}}/howto/onboard_users/index.md) for details. Authenticated users can instantly access the Arcana wallet in the application context. Developers can plug in requisite code to enable Web3 wallet operations programmatically and allow authenticated users to sign blockchain transactions, view account balance etc. 

For detailed instructions on how to add 'sign transaction' or 'send token' or 'add/switch network' features programmatically in your application, see [Arcana Wallet Developer's Guide]({{page.meta.arcana.root_rel_path}}/howto/arcana_wallet/index.md).

Developers can programmatically configure Shardeum Network in the Arcana wallet and enable authenticated users to send SHM using the Arcana wallet.