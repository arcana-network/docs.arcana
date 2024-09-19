### Prerequisites

* Log in to the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %} 

* [[register-app-auth|Register]] the app by creating a new app entry in the dashboard. 

!!! an-tip "{{config.extra.arcana.app_address}}"

      A default [[deploy-app|Testnet configuration profile]] is associated with every registered app. A unique **{{config.extra.arcana.app_address}}** is assigned for the Testnet profile. Only passwordless login is enabled by default.

      A newly registered app can be deployed at the {{config.extra.arcana.company_name}} Testnet. Developers must create a Mainnet configuration profile to [[migrate-app-testnet-mainnet|deploy it on the Mainnet]]. A new, unique {{config.extra.arcana.app_address}} is assigned to the Mainnet profile. 
      
      <figure markdown="span">
        ![App Identifier]({{config.extra.arcana.img_dir}}/an_db_app_address.{{config.extra.arcana.img_png}}){ .an-screenshots }
        <figcaption>Unique App Identifier: ClientID</figcaption>
      </figure>