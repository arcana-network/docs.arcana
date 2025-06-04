In the [[concept-ca|chain abstraction]] context, an intent represents an objective to transact on a destination chain where user does not have sufficient funds available. 

An intent specifies what the user is willing to offer (tokens from various source chains) to cover the transaction amount, gas fees, solver fees, and the {{config.extra.arcana.company_name}} chain abstraction (CA) protocol service fee for receiving the desired liquidity on the destination chain.

By signing the intent, user agrees to perform the following in one shot:

* Allow the {{config.extra.arcana.company_name}} CA protocol to collect necessary assets available in the EOA across one or more source chains to pay for the transaction and the fees.
* Enable the available [[concept-solver|solvers]] in the ecosystem to provide the desired liquidity on the destination chain in the user's EOA.
* Let the {{config.extra.arcana.company_name}} CA protocol settle deposited funds and applicable fees with the solvers at regular intervals.

As part of the {{config.extra.arcana.company_name}} CA protocol setup, the user must complete a one-time set up of [[concept-allowances|allowances]] on every source chain. This is required before an intent can be raised for a chain abstracted transaction. Allowances are used to specify the limits of funds that can be deposited per source chain in order to receive the required funds on the destination chain.

Each intent specifies:

* **Source Chains:** The blockchains where the user has funds/tokens.
* **Destination Chain:** The blockchain where the transaction will occur (where the user lacks liquidity).
* **Tokens and Amounts:** Specifies which tokens and how much from each source chain will be used.
* **Fees:** Includes CA gas fee (for cross-chain operations), protocol fee (for the service), solver fee (for the liquidity provider), and any supplied gas.
* **Total Amount:** The full cost, combining the transaction amount and all fees.

The intent processing begins when the user signs an intent and authorizes a transaction. Once the intent is signed by the user and submitted to the protocol, each intent is assigned a unique identifier. For every chain abstracted transaction, users can click on the 'view intent' link to see the intent details or to note down the intent identifier for future references. [[concept-intent-explorer#arcana-ca-wallet|Learn more...]]

This intent identifier is used to track the intent status. Users can supply the intent identifier in the [{{config.extra.arcana.ca_intent_explorer_name}}]({{config.extra.arcana.ca_intent_explorer}}]) to check the intent’s status or details later. 

<figure markdown="span">
    ![Example Intent Details]({{config.extra.arcana.img_dir}}/an_intent_details_example.{{config.extra.arcana.img_png}}){ .an-screenshots }
    <figcaption>Intent Details</figcaption>
</figure>

