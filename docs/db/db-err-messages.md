---
alias: db-error-msg
title: 'Arcana Developer Dashboard Error Messages'
description: 'Error messages and their causes, how to fix.'
arcana:
  root_rel_path: ..
---

# Dashboard Usage Errors

The {{config.extra.arcana.dashboard_name}} is used to register the Web3 app, configure SDK usage before integrating with the  {{config.extra.arcana.company_name}} SDKs.

This guide lists common dashboard usage errors and potential causes.

## Error Messages

| Error | Description | 
| ---   | ---         |
| Login providers are disabled as you have chosen Global keys.| Developers are not required to specify social login provider configuration if global keyspace option is selected.|
| Error occurred while saving keyspace. Try again or contact support!| When switching between keyspace type there was some error in saving the current settings.|
| Error occurred while submitting the form. Try again or contact support!| Check the various form input fields and ensure all required fields are filled in appropriately.|
| Error occurred while saving the IAM auth credentials.| Error while saving the configuration settings for social auth configuration such as Cognito or Firebase.|
| Error occurred while saving the social auth. | Check social login provider settings. There may be an issue between dashboard and the backend while saving those settings.|
| Error occurred while saving the wallet configurations.| There may be some issue in saving the settings from the dashboard to the backend.|
| Unable to delete the app at the moment. Please try again or contact support.| The dashboard is not able to get a confirmation of app settings deletion from the backend.|
| Error occurred while creating mainnet app.| The dashboard is not able to communicate with the backend and get a success status for app creation request.
| No Card Added.| For billing, user must add payment details. After free MAU are exhausted, billing will resume on a monthly basis.|
| Unable to copy. Please try again or contact support.| Issue with the redirect UI setting in the dashboard. Either the setting was not provided or failed to be saved in app settings due to a backend issue.|
| Can't delete Default chain.| Chains that are pre-configured in the wallet cannot be deleted. New supported chains can be added and set as default. While deleting a default some error occurred while saving the settings at the backend.|