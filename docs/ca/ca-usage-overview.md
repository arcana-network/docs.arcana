---
alias: ca-usage-overview
title: 'Usage'
description: 'CA SDK Use Model.'
arcana:
  root_rel_path: ..
---

Chain Abstraction allows Web3 app users to spend assets on **any** chain through [[concept-unified-balance|unified balance]]. 

Web3 app developers can enable unified balance for app users by integrating the appropriate  **{{config.extra.arcana.company_name}}** CA SDK flavor.

## Integration Flow

=== "Select SDK"
    ```mermaid
    flowchart LR
        subgraph Integrate [Select SDK for App Type]
        direction LR
          A00(((Start))) --> F00[App Type]
          F00 -- Web App --> G00[{{config.extra.arcana.ca_sdk_name}}]
          F00 -- Wagmi App --> H00[{{config.extra.arcana.ca_wagmi_sdk_name}}]
          G00 & H00 --> I00(Install & Integrate)
        end

    classDef an-highlight stroke:#3169b3,stroke-width:0.25rem;
    class E00 an-highlight
    ```
=== "Install & Integrate"
    ```mermaid
    flowchart LR
        subgraph Integrate [Integrate SDK with App]
        direction LR
          A00(((Start))) --> F00[Install SDK]
          F00 -- Integrate App --> G00[Initialize SDK]
          G00 --> H00(Call SDK Functions)
        end

    classDef an-highlight stroke:#3169b3,stroke-width:0.25rem;
    class E00 an-highlight
    ```

## See Also

* [[concept-ca|Chain Abstraction]]
* [[concept-casdk|CA SDK]]
* [Download {{config.extra.arcana.ca_sdk_name}}]({{config.extra.arcana.ca_sdk_download_url}})