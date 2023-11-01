When an app is registered, by default, a 'Testnet' configuration profile is associated with every app, and a unique **{{config.extra.arcana.app_address}}** is assigned to this 'Testnet' profile. So the app can be deployed on the Testnet right away.

However, to deploy your app on the {{config.extra.arcana.company_name}} Mainnet, you need to first create a corresponding 'Mainnet' configuration profile. Also, you must update the {{config.extra.arcana.sdk_name}} integration code in your app to use the **new {{config.extra.arcana.app_address}}** assigned to the app's 'Mainnet' configuration profile before deploying it on the Mainnet.

You can deploy an app instance in active development on the Testnet. Simultaneously, you can deploy a stable version of the app, validated on the Testnet and ready for users, on the Mainnet.

See [[deploy-app|App Deployment Guide]] for details.

!!! tip "Testnet -> Mainnet"

      If you have deployed your Web3 app on Arcana Testnet and are looking to migrate it on the Mainnet, see [[migrate-app-testnet-mainnet|Testnet > Mainnet Migration Guide]].

**That is all!** :material-party-popper:
**Your {{page.meta.arcana.app_type}} app is now powered by {{config.extra.arcana.product_name}}!!!**