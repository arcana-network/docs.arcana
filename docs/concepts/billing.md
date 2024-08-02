---
alias: concept-usage-billing
title: 'Usage & Billing'
description: 'Learn how app usage is tracked and billed for Arcana Mainnet, where to find the invoice, what is the billing cycle, how to set up a payment method and more.'
arcana:
  root_rel_path: ..
---

# Usage & Billing

This guide explains the payment model for using {{config.extra.arcana.product_name}} in Web3 apps. 

## Pricing

Testnet usage is free!

### Mainnet

Each developer account enjoys a promotional free usage tier. Beyond this free tier, usage costs apply to all apps registered with {{config.extra.arcana.company_name}} under a developer account and are invoiced together. 

<!---Refer to [{{config.extra.arcana.company_name}} Pricing](https://www.arcana.network/pricing) 
--->

For more details on the current billing rates and free tier limits contact [[index-support|{{config.extra.arcana.company_name}} support]].

## Billing Metrics

{{config.extra.arcana.product_name}} monitors app usage with the following metrics:

* **Aggregate App Usage**: This metric tracks the 'Monthly Active Users (MAU)' across all apps registered with {{config.extra.arcana.company_name}} per developer account on the Mainnet. Total MAU data includes free and paid usage.

    <figure markdown="span">
      ![Monthly Active Users (MAU)]({{config.extra.arcana.img_dir}}/an_db_billing_allapps_MAU.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
      <figcaption>Monthly Active Users (MAU)</figcaption>
    </figure>

* **Per App Usage**: This metric monitors the 'Daily Active Users (DAU)' and 'Monthly Active Users (MAU)' for individual apps on the Testnet. Data is also available for Mainnet usage per app.

    <figure markdown="span">
      ![Per Application Usage Stats Testnet]({{config.extra.arcana.img_dir}}/an_db_billing_perapp_MAU.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
      <figcaption>Monthly Active Users (MAU)</figcaption>
    </figure>

!!! an-note "Testnet Usage is Free"

      Billing applies only to {{config.extra.arcana.company_name}} Mainnet usage.

## Billing Setup

Using the {{config.extra.arcana.dashboard_name}}, developers can configure their {{config.extra.arcana.company_name}} account by providing essential information. Billing requires the following details:

* Organization
* Billing Address Details
* Payment Method

!!! an-caution "Adding Payment Method"

      It is a mandatory requirement to enter and save a valid address in your developer account prior to providing payment method details through the {{config.extra.arcana.dashboard_name}}. 

Once generated, developers can access their billing history and view the current outstanding invoice.

!!! an-tip "Testnet and Free Tier (Mainnet) Usage"

     Payment setup isn't needed for Testnet usage or for using the Mainnet's free tier. Web3 apps can integrate with {{config.extra.arcana.sdk_name}} for Testnet without it. However, after exhausting the free tier, setting up payment is essential for uninterrupted user onboarding on {{config.extra.arcana.company_name}} Mainnet.

## Billing Cycle

{{config.extra.arcana.company_name}} Mainnet usage beyond the free tier is billed **monthly**. Invoices are generated on the last day of each month, summarizing the collective app usage and charges for all apps under a developer account. Access invoice and usage specifics through {{config.extra.arcana.dashboard_name}} by clicking on the user icon on the top right and selecting **Invoices**.

<figure markdown="span">
  ![View Invoices]({{config.extra.arcana.img_dir}}/an_db_billing_invoices_nav.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
  <figcaption>View Invoices</figcaption>
</figure>

## Outstanding Dues

Outstanding dues must be paid in full; partial payments are not accepted.

Invoices factor in all promotional and free-tier MAU usage across registered apps for a developer account. Payment is due upon monthly invoice generation, with a notification sent to the developer. Payment is automatically deducted via the configured method. If payment fails, there's a 21-day grace period, with retry attempts every 7 days. During this period, registered apps function normally. After the grace period, if payment remains unsuccessful, the developer account is suspended, barring user access to registered apps.

Inactivity and non-payment for 3 months **may** result in app deletion and account termination."

## Billing Notifications

For billing notifications, refer to the bell icon on the top right of the {{config.extra.arcana.dashboard_name}} screen.

<figure markdown="span">
  <img class="an-screenshots-noeffects width_35pc" src="{{config.extra.arcana.img_dir}}/an_db_notifications_list.{{config.extra.arcana.img_png}}" alt="Billing Notifications"/>
   <figcaption>Billing Notifications</figcaption>
    </figure>

The following billing notifications are displayed:

| Event  | Notification | Notes |
| :---  | :--- | :--- |
| Billing | Add card details for processing the payment. | The first time a developer logins, this message is displayed in the notifications section. |
| Billing | Invoice for the current month has been generated. | Once the free-tier is over, at the end of every billing cycle, the dues are computed and an invoice is created. Developer is notified of the same.|
| Billing | Payment successfully processed for this month. | Once the free-tier is over, monthly invoices are raised and payment automatically deducted from the specified payment method. |
| Billing | Payment has been declined.| This notification will be displayed if the specified payment method fails when the invoice dues are processed, or if there are any payment errors due to insufficient funds. |

<!-- 
## Billing Errors and Troubleshooting

TBD
Link the billing errors list here and also link the Troubleshooting guide section on Billing errors.

-->
