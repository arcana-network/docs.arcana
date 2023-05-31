!!! info "No Aggregate Login with Cognito "

      The [[concept-aggregate-login|aggregate login feature]] does not work for the custom IAM providers such as Cognito.

      If a user has the same email ID registered with say a social provider and with Cognito, logging into an app using Cognito will create a new unique user account even if the user uses the same email as the one used with a social provider or via the passwordless option. What this means is that the wallet address for the same user will be different when Cognito is used to log in and subsequently a social provider or passwordless login is used by the same user having the same email ID.