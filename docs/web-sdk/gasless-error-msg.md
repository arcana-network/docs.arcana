---
alias: web-gasless-error-msg
title: 'Gasless Transaction Errors'
description: 'List of error messages, the cause of errors, description and how to handle them for gasless transactions in Web3 apps integrated with the Arcana Auth SDK.'
arcana:
  root_rel_path: ..
---

# Gasless Transaction Errors

Web3 apps integrated with the {{config.extra.arcana.sdk_name}} and using the [[concept-gasless-transactions|gasless transactions]] might encounter errors related to the gasless feature. Some of these errors may appear cryptic and the reason is not clear or enough for a speedy redressal by the app developers.

This guide contains a list of common errors encountered during gasless app operations. It also provides guidance on how Web3 app developers can debug gasless issues, identify the root cause and fix it. Alternately, they must gather all the required debugging data mentioned below, before reporting any gasless transaction issue to the {{config.extra.arcana.company_name}} support team.

## Error Messages

| Error | Description | 
| ---  | --- |
| user0p execution failed | Insufficient funds in the wallet address |
| user0p execution failed | Contract execution error |

Refer to [Biconomy Errors](https://docs.biconomy.io/docs/troubleshooting/commonerrors) for a complete list of errors.

## Debugging Gasless Errors

Arcana Network's gasless feature leverages the Biconomy SDK under the covers. The error handling for gasless transactions in the {{config.extra.arcana.sdk_name}} is [limited by the error handling offered by the Biconomy SDK](https://docs.biconomy.io/docs/category/troubleshooting). 

For example, you may see the following error for a gasless transaction:

{==
Transaction reverted in simulation with reason: user0p execution failed. Use handle0psCallData to simulate transaction to check transaction execution steps.
==}

The same error may be returned for more than one error conditions.

Sometimes, the error mentioned above occurs even if the developer has properly set up gas tanks, whitelisted contracts/functions, and there's enough gas for gasless transactions. In these cases, the issue is often that the user didn't have enough tokens in their wallet to complete the gasless token transfer, although the error message doesn't clarify this specific cause.

### The Solution

When encountering cryptic errors in Arcana Auth gasless transactions, developers should follow these steps to capture error data. Use Tenderly for simulating transactions to pinpoint the actual cause of failure.

!!! caution "Reporting Gasless Transaction Issues"

      When reporting gasless transaction errors in the app, developers should follow these steps to capture and share the error data using a browser inspector tool. You can use Tenderly for debugging or share the basic error data with us, which is crucial for resolving gasless transaction issues caused by Biconomy error handling limitations.

{% include "./text-snippets/debug_gasless_errors.md" %}