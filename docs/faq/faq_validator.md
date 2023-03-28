---
slug: /faq_validator
id: idfaqvalidator
sidebar_custom_props:
  cardIcon: 🙋
arcana:
  root_rel_path: ..
toc_depth: 2
---

# Validator Onboarding

Frequently asked questions regarding setting up [Arcana DKG validator nodes]({{page.meta.arcana.root_rel_path}}/concepts/validator_nodes.md).

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

      ![DKG Node Start Error](/img/dkg_node_start_tx_fee_error.png)

      You will see this error if you are not using the latest DKG binary. After node crash, before restart, please make sure that there is no `dkg.sock` file and you are using the [latest DKG release](https://github.com/arcana-network/adkg/releases) before issuing the `dkg start` command. See [restarting a node]({{page.meta.arcana.root_rel_path}}/validator_intro.md#re-starting-the-node) section in the validator documentation.

??? an-faq "After starting up, I see this. Is this an error?"

      ![CurrNodelist error](/img/dkg_node_start_currnodelist_error.png)

      This is not an error. Your validator node is waiting and polling for the other nodes to start up and join in the DKG protocol.

