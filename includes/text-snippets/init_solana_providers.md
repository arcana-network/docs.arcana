Apps using Solana blockchain can use the `auth.provider` to initialize the provider for making standard JSON RPC calls in the context of an authenticated user.

{% include "./code-snippets/solana_auth_provider.md" %}

Next, initialize the Solana Web3 wallet operation access provider for issuing Solana Web3 wallet operations later, once the user has onboarded. Use the `auth.solana` method as shown below.

{% include "./code-snippets/solana_auth_solana.md" %}

Next, add code to facilitate user onboarding in the app.