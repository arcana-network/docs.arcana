---
alias: solver-config
title: 'Solver Setup'
description: 'Solver configuration and how to run the solver executable.'
arcana:
  root_rel_path: ..
---

# Solver Setup

This guide explains how to become a Solver. It shows how third parties can join 
the {{config.extra.arcana.company_name}} Network Chain Abstraction (CA) protocol.

[[concept-solver|Solvers]] are entities within the {{config.extra.arcana.company_name}} CA Protocol system that compete to fill up user intents for cross-chain transactions.

Only permitted third parties can participate in the Arcana Chain Abstraction Protocol as a solver. To become a solver, you need a basic system to run the Arcana Solver software.

## System Requirements

You will need to set up the following software once your hardware node is available:

- Linux [Ubuntu 22.04.5 LTS](https://releases.ubuntu.com/jammy/)
- Arcana Solver Binary and configuration files

## Configuration Settings

Create a configuration file config.toml with the following settings.

```toml

# This is a sample solver-config.toml

EVMPrivateKey = '...'
P2PPrivateKey = "..."
P2PListenAddrs = ['/ip6/::/tcp/40001']
P2PDataPath = '/data/solver-p2pdata'
P2PRendezvousPoint = 'ARCANA_CA_P2P_MEETINGHOUSE'
RebalanceOnStart = true
ArcanaChainGRPCURL = "localhost:9090"
ArcanaChainTendermintURL = "http://localhost:26657"
ArcanaChainEventsURL = "ws://localhost:26657/websocket"
[ArcanaChainKeyConfig]
UID = "0"
PrivateKey = "..."
Algorithm = "secp256k1"

[RPCURLMap]
137 = "wss://polygon-mainnet.g.alchemy.com/v2/PfaswrKq0rjOrfYWHfE9uLQKhiD4JCdq"
42161 = "wss://arb-mainnet.g.alchemy.com/v2/PfaswrKq0rjOrfYWHfE9uLQKhiD4JCdq"
10 = "wss://opt-mainnet.g.alchemy.com/v2/PfaswrKq0rjOrfYWHfE9uLQKhiD4JCdq"
8453 = "wss://base-mainnet.g.alchemy.com/v2/PfaswrKq0rjOrfYWHfE9uLQKhiD4JCdq"

RebalanceConfigs = [ { CurrencyID = 1, CurrencyID = 2 }]

RebalanceConfigs.Chainwise = [
    {
        ChainID = 42161,
        Target = 15,
        MinimumTransfer = 1,
    }
],
[
    {
        ChainID = 21144,
        Target = 12,
        MinimumTransfer = 1,
    }
]
```

!!! an-tip "Settings"

    You can either provide the `config.toml` file in the current directory when
    you run the solver executable or specify the `config.toml` file path via the
    `CAS_CONFIG_PATH` environment variable before you run the VSC Service.

## Running a Solver

You can run the solver on a physical/virtual server or a Docker container.
Click appropriate dropdown below to see detailed instructions.

=== "Server/VM"

    After providing configuration settings, run the solver by:

    ```sh
    ./solver
    ```
=== "Docker Container"

    1. Update `docker-compose.yml` (or something similar) with the service, example details listed below:

        ```yml
        solver:
        image: ca-solver
        init: true
        restart: unless-stopped
        environment:
        - CAS_CONFIG_PATH=/etc/cas.toml
        ports:
        - 40001:40001
        - "40001:40001/udp"
        volumes:
        - ./config.toml:/etc/cas.toml:ro
        - ./data/solver:/p2pdata``
        ```

    2. Use the `config.toml` file example listed in the configuration settings section. Provide all the required configuration settings.

    3. Use `docker compose up` to bring up the Arcana Solver service inside a docker container.

        !!! an-caution

                Update the image path in the `docker compose` file for the `image` tag: `ca-solver`. This path depends upon whether you are accessing it locally from an installed binary or via an image published via a registry. ([Docker Hub](https://hub.docker.com/) / [GithHub Container Registry](https://codefresh.io/docs/docs/integrations/docker-registries/github-container-registry/) (GHCR) )

## Troubleshooting

- Solver health check
    - Connect on the solver socket 40001 (default) or the value specified in the configuration file.
    - If the connection fails, the solver is not up and running
- System resources used
    - Check system resource usage using the solver process.
        
        `ps -aef | grep solver`