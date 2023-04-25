---
alias: onboard-validators
title: 'Onboard Arcana ADKG Validators'
description: 'Validator onboarding guide contains instructions for the trusted partners on how to become a validator by setting up an Arcana ADKG node, how to install, upgrade, bring it up, restart and more.'
arcana:
  root_rel_path: .
---

# Validator Onboarding

This DKG validator onboarding guide is meant for trusted partners, the *'validators'*, who wish to set up DKG [[concept-validator-nodes|validator nodes]]. 

Validators in the Arcana distributed key generation [(DKG)]({{page.meta.arcana.root_rel_path}}/concepts/dkg/index.md) subsystem play a crucial role in decentralizing the system by setting up and managing validator nodes. To qualify as a validator, you must be a trusted partner of Arcana and operate a DKG node. In return for participating in the DKG protocol and providing this service, validators earn rewards based on various factors such as the uptime of their node and the output of their key generation work.

## Validator Entry/ Exit

Initially, Arcana Network will only work with a select group of trusted partners as validators. In the future, we will establish a process for validators to join and leave the network. At mainnet launch, the Arcana DKG subsystem will include seven nodes in the key generation process, with four nodes operated by Arcana and three by our partners.

## Validator Node Setup

Arcana DKG is a permissioned system that only allows a trusted group of partners to join. To become an external validator node in the DKG subsystem, partners must be whitelisted by Arcana. This process involves providing an Ethereum address, which will be associated with a private key that verifies the node's identity and grants it access to the Arcana Network DKG subsystem.

### Prerequisites

1. Validator node
2. Monitoring tools
3. Have a Hashicorp cloud server (or self-hosted server)
4. Enable a [KV Secrets Engine](https://developer.hashicorp.com/vault/docs/secrets/kv) with path value set to `secret`. 

   ```sh
   vault secrets enable -path=secret kv
   ```

   ![kvsetup image](/img/validator_kv_engine_setup.png)

#### Hardware Requirements

| Minimum  |  Recommended |
| :--- | :--- |
| 4 GB RAM | 8-16 GB RAM |
| 500 GB SSD | 1 TB SSD |
| 4 core CPU | 8 core CPU |

### Step1: Configure Node

**Operating System**:

Preferably deploy Ubuntu Linux v20.04.4 LTS or higher.

<!---
* [Install Golang](https://go.dev/doc/install) v1.17
--->

**Ulimit Settings**

Use the following command to check the ulimit settings for open file descriptors (default):

```sh
ulimit -n
```

or

```sh
ulimit -aS
```

If the soft limit for **open files** is lower than 20,000 use the following instructions to update it:

* Edit the Linux Kernel parameter file `/etc/sysctl.conf`

```sh 
  vi /etc/sysctl.conf 
```

  Add " fs.file-max = 20000 " in the file. To apply the changes, execute:
  
```sh
sysctl -p
```

* Change the ulimit setting in the file `/etc/security/limits.conf`

```sh
vi /etc/security/limits.conf
```

  Specify the following limits in `/etc/security/limits.conf`

```sh
 * soft nofile 20000
 * hard nofile 20000
```

After making these changes to both the files, make sure that you reboot the ADKG node.

```sh
reboot
```

or

```sh
init 6
```

* Validate that ulimit for open files has been updated to 20000 by using the command:

```sh
ulimit -n
```

**Network Settings**:

1. Obtain a domain name for your server and set up associated SSL certificates. 

2. Keep the following ports open on the validator node:
     - 26656
     - 1080

**Setup DKG Software**

1. Copy the [DKG binary v1.0.1](https://github.com/arcana-network/adkg/releases/tag/v1.0.1) locally on your node.

2. Change the binary file permissions to 'executable'.

### Step 2: Initiate Validator Secrets

There are two parts to initiating validator secrets. First, you must initiate a secrets configuration manager. Then, you must generate secret keys for the validator node. Currently, only Hashicorp vault is supported.

#### Step 2a: Initiate Secrets Configuration Manager

Use Hashicorp to initiate the secret configuration manager. Make sure you have already enabled the KV secrets engine as listed in the prerequisites, before running the command listed below.

```sh
dkg secret generate --secret-config=<path> --token=<token> --server-url=<url> 
```
**Command Line Options**

`--secret-config`

Specify the `path` where the secret manager configuration will be written. Defaults to the `secretConfig.json` file in the current directory.

`--token`

The access token for the Hashicorp vault. The access token is used for accessing [the KV secret storage engine](https://developer.hashicorp.com/vault/docs/secrets).

`--server-url`

The API URL of the Hashicorp Vault server.

#### Step 2b: Generate Secret Keys

After initiating the secret configuration manager, generate keys for the validator node. **The following command will provide the Node Address, which should be shared with the Arcana Team**.

```sh
dkg secret init --secret-config=<path>
```

**Command Line Options**

`--secret-config`

The `path` specified in the previous step where the secret manager configuration will be written. Defaults to `secretConfig.json` file in the current directory.

!!! caution "Follow Start Ceremony"

      Start the node **only** when you have set up the validator secret and shared the Node Address with the Arcana Team.

### Step 3: Start Ceremony

Validator DKG nodes cannot be started individually; all participating nodes must start at the same time for the protocol to work properly. Keep an eye on this space for updates on when to start your DKG node as a validator.

The key generation begins only when **all** the nodes in the DKG subsystem, Arcana DKG nodes, and all validator DKG nodes, have joined in.

### Step 4: Start Validator Node

Before you start the validator node, make sure you have completed all the prerequisites and followed the steps defined in the **DKG Start Ceremony**.

!!! note "Node Start Command"

      You can run the `dkg start` command and specify validator node configuration details using **one** of ways listed below:
      
      * run `dkg start` with a JSON configuration file that contains all the configuration, or
      * run `dkg start` with various flags/parameter values on the command line itself 

      Registration of validator node happens automatically using the information that is provided in the configuration file or via the command line.

!!! caution "Restart"

      If this is not the first time you are starting the node, please make sure that you perform a clean re-start. Refer to the section [Re-starting the Node](#re-starting-the-node) to see how to perform a clean restart.

#### Option1: Use Configuration File

```sh
dkg start --config=/path/to/config.json
```

```json title="config.json"
{
  ipAddress: "172.23.22.231",      //Example value. Replace with public IP Addres of your node
  domain: "keyserver.example.com", // Example value. Do not specify https://
  dataDir: "/path/to/data",        // Ensure dataDir directory access permissions allow DKG binary to access it
  secretConfig: "/path/to/secret/config.json", //Use appropriate file access permissions for DKG binary to access it
  port: "3000",
}
```

#### Option 2: Use Command Line

```sh
dkg start --secret-config=/path/to/secret/config --data-dir=/path/to/data --domain=keyserver.example.com --ip-address=172.23.22.231  --server-port=3000
```

**Node Start Options**

`--secret-config`

The path to secret configuration. See ['Initiate Validator Secrets section'](#initiate-validator-secrets) for details.

`--data-dir`

The data directory where all the node specific and shared data will be stored, this data will have to be backed up regularly by the nodes to maintain some redundancy.

!!! caution "Keep your data directory strictly private!"

      The data directory specified above is used for storing multiple items that are secret. Besides initializing the directories for holding the [Tendermint](https://tendermint.com/) state and key share data, it also stores private keys on a file. 

      This directory should be secured and kept fully secret. If someone were to obtain access to this directory and the secrets, they could potentially impersonate you as a node in the network.

`--domain`

The domain name for the validator node that you are running. This is needed to enable users and other nodes to be able to access the validator node via RPC calls.

`--ip-address`

The IP Address of the validator node that is used by DKG nodes for communicating within themselves.

` --server-port=3000`

The port number at which the **http server** is listening for requests.

!!! caution "SSL Termination"

      The SSL termination can happen on an **Nginx** server which can then map the port 443 to the `--server-port` specified in the `dkg start` command above.

### Stop Validator Node

You need to kill the running DKG process to stop the validator node. 

### Re-starting the Node

We are working on providing a cleaner way to stop and restart the node.  Until then, follow these steps to cleanly restart your validator node:

1. Stop all nodes.
2. Replace the DKG binary with the [latest one](https://github.com/arcana-network/adkg/releases).
3. Remove `dkg.sock` file, if present.
4. DO NOT REMOVE the directory that your specified for `--data-dir`.
5. Start the nodes using the `dkg start` command.      

## Validator Responsibilities

* Perform all the required technical node operations done by each DKG node.

* Maintain a high uptime.

* Back up the validator node reliably.

* Always use the latest release of the DKG binaries.

* Check node-related services and processes daily and monitor health.

* Use node monitoring tools. We plan to support [Prometheus](https://prometheus.io/) in the future, which will allow partners to monitor their nodes using the Grafana dashboard.

* Communicate any issues with the Arcana team on the DKG Slack channel.

* Provide feedback and suggestions.

### Monitor Validator Metrics

At present, besides CPU and memory, we do not have any other specific metrics that need to be monitored for the validator node.  Watch out this section for updates!

## Rewards

We are working on providing more details regarding validator rewards that answer the following questions:

* What are the incentives for validator node providers?

* When are the rewards realized and how?

Check out [[faq-validator|Validator FAQ]] if you have any questions or write to us: {% include "./text-snippets/support_email_link.md" %}
