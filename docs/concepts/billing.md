---
arcana:
  root_rel_path: ..
---

# Usage & Billing

{{config.extra.arcana.product_name}} tracks app usage in terms of 'Monthly Active Users (MAU) across all the apps registered with {{config.extra.arcana.company_name}} for a developer account. 

![Application Usage Stats Mainnet](/img/an_db_billing_allapps_MAU.png){.an-screenshots}

Developers can monitor registered app usage for both the {{config.extra.arcana.company_name}} Testnet as well as Mainnet by using the {{config.extra.arcana.dashboard_name}}. Only {{config.extra.arcana.company_name}} Mainnet usage is billed. 

There is a promotional free usage tier available for each developer account. Once this free tier is used up, usage is chargeable for all the apps registered with {{config.extra.arcana.company_name}} for a developer account and billed via a single invoice. See [{{config.extra.arcana.company_name}} Pricing](https://www.arcana.network/pricing) for the latest billing charges and available free tier limits.

### Billing Cycle

Beyond the free tier, the {{config.extra.arcana.company_name}} Mainnet usage for all the registered apps in the developer account is charged. The billing cycle is **monthly**.

A single invoice is raised for every developer account on the last day of every calendar month. It contains the aggregate app usage and billing details for all the apps in that account put together.  Developers can use the {{config.extra.arcana.dashboard_name}} to view the invoice and usage details.

### Outstanding Dues

All pending dues must be paid in one shot and there is no part-payment allowed. 

The invoice for a developer account is generated taking into consideration all the promotional, and free-tier usage in terms of MAU across all the registered apps for that account. 

The amount is due once the monthly invoice is raised. A notification is sent to the developer. The invoice amount is automatically deducted based on the payment method configured by the developer. If the selected payment method fails, there is a grace period of 21 days during which automatic payment is retried once in 7 days. During the grace period, the registered apps continue to work as normal and users are allowed to log into the apps. Once the grace period ends and the payment is not successful, then the developer account is suspended and no users are allowed to log into the registered apps.

After 3 months of inactivity and non-payment of pending dues, all the apps registered for the defaulter account are deleted and the developer account will no longer be accessible.

## Billing Setup

Developers can use the {{config.extra.arcana.dashboard_name}} to set up their {{config.extra.arcana.company_name}} account and provide the following details. The address and payment method details are required for billing.

* Organization
* Billing Address Details
* Payment Method

!!! caution "Adding Payment Method"

      It is mandatory to add a valid address and save it in the developer account **before** adding the payment method specifics using the {{config.extra.arcana.dashboard_name}}. 

Developers can view the billing history and the current outstanding invoice once the invoice is generated.

!!! tip "Payment method not required for free tier usage"

     It is not mandatory to enter the details in the developer's account profile to use the {{config.extra.arcana.sdk_name}}. Once the free tier usage is consumed, the developer is required to add these details in the profile section and ensure uninterrupted user onboarding for the registered, active Web3 apps that are using the {{config.extra.arcana.company_name}} Mainnet.

## Notifications

The {{config.extra.arcana.dashboard_name}} displays a bell icon on the top right of the screen. 

<img class="an-screenshots-noeffects" src="/img/an_db_notifications_list.png" alt="Dashboard bell icon notifications list" width="40%"/>

The following billing notifications are displayed:

| Event  | Notification | Notes |
| :---  | :--- | :--- |
| Billing | Add card details for processing the payment. | The first time a developer logins, this message is displayed in the notifications section. |
| Billing | Invoice for the current month has been generated. | Once the free-tier is over, at the end of every billing cycle, the dues are computed and an invoice is created. Developer is notified of the same.|
| Billing | Payment successfully processed for this month. | Once the free-tier is over, monthly invoices are raised and payment automatically deducted from the specified payment method. |
| Billing | Payment has been declined.| This notification will be displayed if he specified payment method fails when the invoice dues are processed, or if there are any payment errors due to insufficient funds. |

<!-- 
## Billing Errors and Troubleshooting

TBD
Link the billing errors list here and also link the Troubleshooting guide section on Billing errors.

-->