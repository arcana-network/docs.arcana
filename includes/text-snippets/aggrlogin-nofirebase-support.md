!!! info "No Aggregate Login with Firebase "

      The [[concept-aggregate-login|aggregate login feature]] does not work for the third-party IAM providers such as Firebase.

      If a user has the same email ID registered with say a social OAuth provider and with Firebase, logging into an app using Firebase will create a new unique user account even if the user uses the same email as the one used with a social OAuth provider or via the passwordless option. What this means is that the wallet address for the same user will be different when Firebase is used to log in and subsequently a social OAuth provider or passwordless login is used by the same user having the same email ID.