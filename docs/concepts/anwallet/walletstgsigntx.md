---
slug: /walletsigntx
id: idwalletsigntx
sidebar_custom_props:
  cardIcon: 📤
arcana:
  root_rel_path: ../..
---

# Blockchain Sign Transaction Messages

In this guide, you will learn about the different types of blockchain sign transaction messages that are displayed by the {{config.extra.arcana.wallet_name}} when a Web3 wallet operation is triggered.  

Each type of *sign transaction* message must be reviewed by the user. Users need to carefully verify the message details and make an informed decision before approving or rejecting the transaction request message displayed by the wallet.

---

## Personal Sign

Personal sign transaction messages can be used by the app to ensure that the authenticated user has agreed to the terms of usage and privacy policy. After successful login, the application can issue a personal sign transaction and the {{config.extra.arcana.wallet_name}} will up the sign transaction request for the user's approval. 

<img alt="personal sign message" src="/img/an_wallet_signtx_psign.png" width="35%"></img>

## Switch Chain

If an application requires to switch to a specific network programmatically, a switch chain request needs to be approved by the user before the wallet chain actually changes.

<img alt="switch chain sign message" src="/img/an_wallet_signtx_swchain.png" width="35%"></img>

## Send Transaction

<img alt="send tx" src="/img/an_wallet_signtx_send.png" width="35%"></img>
<img alt="send tx" src="/img/an_wallet_signtx_send_2.png" width="35%"></img>


## Deploy Contract

<img alt="deploy contract sign message" src="/img/an_wallet_signtx_deploy_ctr.png" width="35%"></img>