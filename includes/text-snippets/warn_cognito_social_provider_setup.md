!!! warning "Apps using IAM Providers"

      Apps typically integrate with {{config.extra.arcana.sdk_name}} for user onboarding and blockchain transaction signing. Authentication providers must be configured through the {{config.extra.arcana.dashboard_name}} before integrating with the SDK. 
      
      Some apps may use third-party IAM providers like AWS Cognito for authentication, but still integrate with {{config.extra.arcana.sdk_name}} for accessing {{config.extra.arcana.wallet_name}}. Configuration differs as the third-party IAM providers directly support authentication verifiers like Google. 
      
      Developers only need to configure the IAM provider via {{config.extra.arcana.dashboard_name}}, skipping configuration of authentication verifiers that integrate directly with the IAM providers. Use the respective IAM provider's console, such as Cognito Developer Console, for setting up authentication verifiers like Google and not the {{config.extra.arcana.dashboard_name}}.