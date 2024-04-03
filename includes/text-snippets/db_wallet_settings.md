* **Domain URL:** Set the website domain used by the server, to secure and restrict {{config.extra.arcana.wallet_name}} from loading anywhere else other than the specified domain. {{config.extra.arcana.company_name}} uses the frame-ancestor CSP for restricted domains.<br></br><img class="an-screenshots" alt="Social Login" src="/img/an_db_configure_wallet.png"></img>

!!! note  "Wallet UI Mode"

      The *Wallet UI Mode* field displays the setting that controls whether the app developer has chosen to use the built-in wallet UI or a [[concept-custom-wallet-ui|custom wallet UI]].

      This setting is selected at the time of [[register-app-auth| app registration]] and cannot be changed later. See [[custom-wallet-ui|how to enable custom wallet UI]] for details.

!!! tip "Other Wallet Customizations"

      There are other {{config.extra.arcana.dashboard_name}} settings in the branding tab that control the {{config.extra.arcana.wallet_name}} theme and logos. Also, during app integration with the {{config.extra.arcana.sdk_name}}, developers can customize the built-in {{config.extra.arcana.wallet_name}} by specifying `position` (string: *left*|*r*ight*), `theme` (string: *light*|*dark*), and `alwaysVisible` (boolean) parameters. See {% include "./text-snippets/authsdkref_url.md" %}  for details.