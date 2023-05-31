!!! info "No Aggregate Login with Steam OAuth "

      The [[concept-aggregate-login|aggregate login feature]] does not work for the Steam OAuth login mechanism.

      If a user has the same email ID registered with say a social provider and with Steam OAuth, logging into an app using Steam will create a new unique user account even if the user uses the same email as the one used with a social provider or via the passwordless option. What this means is that the wallet address for the same user will be different when Steam is used to log in and subsequently a social provider or passwordless login is used by the same user having the same email ID.