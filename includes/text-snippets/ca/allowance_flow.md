Here is how the allowances enables chain abstracted transactions:

1. User approves the protocol to access funds from two or more source chains.
2. Protocol unifies user balance across these chains.
3. Unified funds go into protocol vaults.
4. The protocol presents the user with an intent to transact on the destination
   along with amount and fee details.
5. The user signs the intent. Solvers then supply liquidity in the user's EOA
   to transact on the destination chain.
6. User can now transact on any destination chain and pay gas fee.
7. The protocol settles transactions with the solvers using the funds collected
   on the source chains.