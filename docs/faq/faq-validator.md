---
alias: faq-validator
title: 'FAQ: Validator Onboarding'
description: 'Frequently asked questions about setting up a validator node for the Arcana ADKG subsystem.'
arcana:
  root_rel_path: ..
toc_depth: 2
---

# Validator Onboarding

Frequently asked questions regarding setting up [[concept-validator-nodes|Arcana DKG validator nodes]].

## General

---

??? an-faq "What role do validators play in the Arcana Network?"

      Validator nodes refer to partner infrastructure that participates in the distributed key generation protocol (DKG). This is used to assign unique keys to authenticated users and manage them in a decentralized manner.

      Validators play a key role in achieving the decentralization goal thereby making Arcana Network more secure and truly open.

??? an-faq "Where do I get the DKG binaries from?"

      Refer to the [latest DKG release](https://github.com/arcana-network/adkg/releases) at GitHub.

??? an-faq "What is starting ceremony?"

      It is mandatory for all nodes in the Arcana DKG subsystem to start at the same time for the protocol to function correctly.  This is referred to as the starting ceremony aimed at synchronizing the start of DKG nodes.

??? an-faq "Node crashed at startup with 'tx fees exceed the configured cap' error"

      <figure markdown="span">
        ![DKG Node Start Error]({{config.extra.arcana.img_dir}}/dkg_node_start_tx_fee_error.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
        <figcaption>DKG Node Start Error</figcaption>
      </figure>

      You will see this error if you are not using the latest DKG binary. After the node crash, before restarting, please make sure that there is no `dkg.sock` file and that you are using the [latest DKG release](https://github.com/arcana-network/adkg/releases) before issuing the `dkg start` command. See [[onboard-validators#steps|restarting a node]] section in the Arcana Auth Validator Onboarding Guide.

??? an-faq "After starting up, I see this. Is this an error?"

      <figure markdown="span">
        ![CurrNodelist error]({{config.extra.arcana.img_dir}}/dkg_node_start_currnodelist_error.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
        <figcaption>Current Node List Error</figcaption>
      </figure>

      This is not an error. Your validator node is waiting and polling for the other nodes to start up and join in the DKG protocol.

