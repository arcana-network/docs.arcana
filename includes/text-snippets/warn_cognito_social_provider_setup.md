  Typically apps integrate with the {{config.extra.arcana.sdk_name}} for enabling:
  
    * User onboarding
    * Enabling authenticated users to sign blockchain transactions using the {{config.extra.arcana.wallet_name}}

    Apps use the {{config.extra.arcana.dashboard_name}} to configure these features before integrating with the {{config.extra.arcana.sdk_name}}. For e.g., to enable user onboarding via Google and Discord, the developers must first set up both these social providers using the {{config.extra.arcana.dashboard_name}}.
  
    Some apps may choose to **not use the {{config.extra.arcana.sdk_name}} for onboarding users** via social providers. Instead, they may use **custom IAM providers such as AWS Cognito**, for user authentication. These apps too may want to integrate with the {{config.extra.arcana.sdk_name}} to access the embedded {{config.extra.arcana.wallet_name}} and allow authenticated users to sign blockchain transactions. The configuration of the {{config.extra.arcana.sdk_name}} usage will be slightly different for such apps as the custom IAM providers such as AWS Cognito typically aggregate and directly support various authentication verifiers such as Google, Facebook, etc. 
  
    Before integrating {{config.extra.arcana.sdk_name}} with such Web3 apps, the developers need to only configure the custom IAM provider via the {{config.extra.arcana.dashboard_name}}. It is not required to configure the authentication verifiers used by the custom IAM providers in the {{config.extra.arcana.dashboard_name}}. Simply use the respective custom IAM provider's developer console, e.g., Cognito Developer Console to set up the user authentication verifiers, such as Google, directly and not through the {{config.extra.arcana.dashboard_name}}.