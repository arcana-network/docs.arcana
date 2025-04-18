
1. Developer sets up {{config.extra.arcana.company_name}} Chain Abstraction settings enabling cross chain transactions on selected chain types and required [[concept-allowances|allowances]].
2. App users are required to permit the allowance values or reconfigure them if the app allows. Allowances enable {{config.extra.arcana.company_name}} Vault to collect required funds from the EOA account on one or more source chains, as per the user's intent.
3. User submits an intent to spend `n` tokens on a destination chain Y and transact via a Web3 app.
4. {{config.extra.arcana.company_name}} verifies that user has sufficient funds across the source chains in the user's EOA account and adequate allowances are pre-configured to enable chain abstraction, pay gas fees.
5. Funds are moved to the {{config.extra.arcana.company_name}} Vault and user's intent is announced to all listening solvers.
6. The assumption is that one of the available solvers in the system will agree to service the user's intent. As of today, only {{config.extra.arcana.company_name}} solver is supported. We are working with partners to onboard trusted third-party solvers into the ecosystem.
7. Once the solver services the intent and provides the necessary liquidity on the desired destination chain into the user's EOA, the user can instantly spend it.
8. {{config.extra.arcana.company_name}} takes care of managing the settlement at the agreed upon periodicity with the successful solvers. The settlement does not happen after every user transaction but after netting and verification process.
9. In case a transaction fails, or times out waiting for a solver, user's funds deposited from the source chain are refunded within a stipulated time period after verification.