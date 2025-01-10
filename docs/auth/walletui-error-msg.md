---
alias: walletui-error-msg
title: 'Arcana Wallet UI Error Messages'
description: 'List of error messages displayed by the Arcana Wallet UI and notes on how to handle them.'
arcana:
  root_rel_path: ..
---

# Wallet UI Errors

The {{config.extra.arcana.wallet_name}} users may encounter the following run-time errors when using the wallet to sign blockchain transactions or while using other wallet UI features such as adding or switching networks, setting up enhanced security via [[concept-mfa| MFA]], etc.

## Error Messages

| Error  |  Description |
| ---    |  ---  |
| W-101: RPC URL <url name> is already specified in <chain config> profile.| Cannot add this RPC URL more than once. |
| W-102: Chain Id <ID> already exists in <chain config> profile. | Cannot add same chain ID more than once. |
| W-103: This network is currently active. Select a different to make it active. | You may be trying to switch to a network which is already selected as the active network. Try again. |
| W-104: Enter the pin to continue. | For enhanced security via MFA, you need to enter the pin to authorize access. |
| Wallet address copied. | The wallet address is copied successfully to the clipboard. |
| W-105: Please enter a valid wallet address. | Check the specified wallet address for the blockchain transaction. |
| Answer all the questions to recover the key.| You must answer at least 3 security questions correctly in order to authorize access. |
| Each questions must be unique! | You cannot specify the same security question more than once during MFA setup or recovery. |
| W-106: Please provide the gas fee. | You have not specified the required gas fees for this transaction. |
| W-107: Insufficient balance to pay for the gas fee. | Top up your account to pay for the gas fee, otherwise the transaction will fail due to insufficient balance. |
| W-108: Cannot estimate gas fee. Please try again later. | For some unknown reason, we are not able to estimate the gas fees for this transaction. The network may not be responding or loaded so try again after some time. |
| W-109: Gas limit cannot be set to a value less than the required gas fee for this transaction. | You have set up a gas limit which is insufficient to cover the gas fees for this transaction, change the gas limit. |
| W-110: Enter all the details to continue. | You need to provide all the required details before this transaction can occur. |
| Token Added successfully. | - |
| Token already added. | This token is already available in the wallet, you cannot add it more than once. |
| Token belongs to Ethereum Mainnet. | This token is not available on the current selected network but on the Mainnet, try switching network. |
| Token sent successfully. | - |
| W-111: Insufficient balance for specified transfer amount. | The account balance is insufficient for this transaction. Try topping up the balance before performing this transaction. |
| W-112: Amount cannot be greater than the maximum available balance. | The amount of tokens specified should be less than or equal to the balance available in the current account. |
| NFT Added. | - |
| NFT already added. | This NFT is already added to the wallet, cannot add an NFT more than once. |
| W-112: Unsupported NFT. | The wallet supports only these NFT types: ERC-721, ERC-1155. |
| W-113: You don't have ownership for this NFT. | Cannot add NFT to the current wallet as this wallet address does not own the specified NFT. |
| NFT Deleted. | - |
| W-114: Insufficient NFTs. At most, you can send <available nnn> NFTs. | The quantity of NFTs specified in the transaction is more than available NFTs, fix and resubmit the transaction. |
| W-116: Error creating NFT. Please try again.| - |
| W-115: Invalid contract address. | - |
| MFA setup completed. | - |
| W-116: Incorrect answers. | MFA recovery answers are not correct, recovery failed. |
| W-117: Incorrect pin. | MFA recovery failed due to incorrect pin. |
| W-118: Please fill in all the questionnaires.| - |
| W-119: Questions cannot be repeated. | - |
| W-120: Questions cannot be empty. | - |
| W-121: User cancelled the setup. | MFA setup was cancelled by the user, no enhanced security is set up for this account.|
| W-122: Incorrect combination of chain Id and RPC URL. | Check RPC URL does not match with the specified chain Id.|
| W-123: Invalid RPC URL! | Check the RPC URL and provide the correct one for the blockchain. |
| W-124: Failed to copy. | Could not copy the selected item in the wallet UI. |
| W-125: Failed to copy wallet address. | The wallet address could not be copied to the local clipboard. |
| W-126: Failed to get balance. | Could not retrieve the balance for the current wallet address. It could be an intermittent error due to network issues.|
| W-148: No valid wallet is associated for the given address. | The specified address does not belong to a valid wallet.|
| W-127: Invalid token Id.| Check the token Id specified while manually adding a token asset through the wallet UI. |
| W-128: Error occurred while setting up MFA. Please try again! | Retry MFA Setup. |
| W-129: Please enter a valid quantity. | Check the number of tokens specified in the transaction. It should be less than or equal to the balance available. |
| W-130: Please make the request again. | For some unknown reason the request failed, try again. | 
| W-131: Something went wrong, please try again. | Unknown error, try again. |
| W-132: Please fill all values! | All input values must be specified, they are not optional in this case. |
| W-133: Failed to initialize one or more on-ramps. | Transak encountered an error while initializing the on-ramp provider, try again. |
| W-134: Could not get token. | Login failure as the token is not available. |
| W-136: Failed to add <xyz transaction> to activities list. | Due to some unknown reason, the activity tab was not updated for this current transaction. |
| W-137: Could not verify credentials. | Passwordless login failed as the OTP/email link credentials could not be verified successfully. |
| W-138: Could not contact parent page causing login failure. Retry login. | Redirect to the specified URL failed causing a failed login. Check auth settings. |
| W-139: Could not log in, an unexpected error occurred. | Login failed unexpectedly, try again and report error if it persists. |
| W-140: Local or session storage doesn't work, falling back to in-memory storage. | There is some unknown issue in the local or session storage of the browser, falling back to in-memory storage. Your changes may not be saved across browser sessions. |
| W-141: Required params missing. | Token validation error, expected input parameters are missing. |
| W-142: Token already added. | The token already exists in the wallet, cannot be added more than once. |
| W-143: Token belongs to Ethereum Mainnet. | You can use the Mainnet Token only when using the Mainnet App Client ID. Check the integration code. |
| W-144: Invalid contract address. | The specified contract address for the transaction is invalid, check again. |
| W-145: You do not own this token. | Token can be added to the wallet or transacted only if it is owned by the wallet address. |
| W-146: Invalid token. | Invalid JWT Token specified for accessing keys. |
| W-147: Failed to fetch details. | Token validation failed as details could not be fetched and verified. |