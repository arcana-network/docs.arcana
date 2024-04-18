---
alias: concept-wallet-transaction-messages
title: 'Blockchain Sign Transaction Messages'
description: 'Various types of user sign approval messages that are displayed via the Arcana wallet.'
arcana:
  root_rel_path: ../..
---

# Blockchain Sign Transaction Messages

In this guide, you will learn about the different types of blockchain sign transaction messages that are displayed by the {{config.extra.arcana.wallet_name}} when a Web3 wallet operation is triggered.  

Each type of *sign transaction* message must be reviewed by the user. Users need to carefully verify the message details and make an informed decision before approving or rejecting the transaction request message displayed by the wallet.

---

## Personal Sign

Personal sign transaction messages can be used by the app to ensure that the authenticated user has agreed to the terms of usage and privacy policy. After successful login, the application can issue a personal sign transaction and the {{config.extra.arcana.wallet_name}} will up the sign transaction request for the user's approval. 

<figure markdown="span">
  <img alt="Personal Sign Message" src="{{config.extra.arcana.img_dir}}/an_wallet_signtx_psign.{{config.extra.arcana.img_png}}" class="an-screenshots-noeffects width_35pc"/>
  <figcaption>Personal Sign Message</figcaption>
</figure>

## Switch Chain

If an application requires to switch to a specific network programmatically, a switch chain request needs to be approved by the user before the wallet chain actually changes.

<figure markdown="span">
  <img alt="Switch Chain Transaction" src="{{config.extra.arcana.img_dir}}/an_wallet_signtx_swchain.{{config.extra.arcana.img_png}}" class="an-screenshots-noeffects width_35pc"/>
  <figcaption>Switch Chain Transaction</figcaption>
</figure>

## Send Transaction

<figure markdown="span">
  <img alt="send tx" src="{{config.extra.arcana.img_dir}}/an_wallet_signtx_send.{{config.extra.arcana.img_png}}" class="an-screenshots-noeffects width_35pc"/>
  <img alt="send tx" src="{{config.extra.arcana.img_dir}}/an_wallet_signtx_send_2.{{config.extra.arcana.img_png}}" class="an-screenshots-noeffects width_35pc"/>
  <figcaption>Send Transaction</figcaption>
</figure>


## Deploy Contract

<figure markdown="span">
  <img alt="Deploy Contract Sign Message" src="{{config.extra.arcana.img_dir}}/an_wallet_signtx_deploy_ctr.{{config.extra.arcana.img_png}}" class="an-screenshots-noeffects width_35pc"/>
  <figcaption>Deploy Contract Sign Message</figcaption>
</figure>