
**Gather Error Data**

* **Collect Data**: Bring up the inspector in the web app context, click **Console** and select the exception to view exception details and gather error data. Note the **data** and **message** fields as highlighted in the screenshot below.
    <figure markdown="span">
      ![Observe the Data and Message]({{config.extra.arcana.img_dir}}/an_debug_exception_details.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
      <figcaption>Observe the Data and Message</figcaption>
    </figure>

* **Verify**: In the **Network** tab of the Inspector, you will also see that the Biconomy bundler API call has returned a failure response. This ensures that you are looking at the correct error details.

    <figure markdown="span">
      ![Biconomy Bundler API Call]({{config.extra.arcana.img_dir}}/an_debug_network_details.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
      <figcaption>Biconomy Bundler API Call</figcaption>
    </figure>

**Debug with Tenderly**

* Go to Tenderly and create a **New Simulation**. In addition to the error data gathered above, you will also need to provide the following details:

    <figure markdown="span">
      ![Tenderly Simulation Details]({{config.extra.arcana.img_dir}}/an_debug_tenderly_new_simulation.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
      <figcaption>Tenderly Simulation Details</figcaption>
    </figure>

* In the new simulation, specify the contract address as listed below:

    {==
      0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789
    ==}
  
    This is the address of the EntryPoint for the Biconomy bundler used by the Arcana Auth backend subsystem that supports the gasless feature.

    <figure markdown="span">
      ![Arcana Entrypoint]({{config.extra.arcana.img_dir}}/an_debug_tenderly_entrypoint_address.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
      <figcaption>Arcana Entrypoint</figcaption>
    </figure>

* Select 'Enter raw input data' in the new simulation entry and provide the error data gathered earlier via the browser inspector *Console*.

    <figure markdown="span">
      ![Gasless error input data]({{config.extra.arcana.img_dir}}/an_debug_tenderly_input_data.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
      ![Gasless copy input data]({{config.extra.arcana.img_dir}}/an_debug_tenderly_copy_data.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
      <figcaption>Provide Gasless Error Data</figcaption>
    </figure>

* After providing the gathered error data, run the simulation.

    <figure markdown="span">
      ![Run Simulation]({{config.extra.arcana.img_dir}}/an_debug_tenderly_run_simulation.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
      <figcaption>Run Simulation</figcaption>
    </figure>

* At the end of the simulation run, you can access the simulation log. Refer to the overview tab. 

    <figure markdown="span">
      ![Simulation Log]({{config.extra.arcana.img_dir}}/an_debug_tenderly_overview_log.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
      <figcaption>Simulation Log</figcaption>
    </figure>

* Scroll down the content until you see the warning icon. This simulation run warning is most likely the reason why the gasless transaction failed. If you hover over the yellow warning sign, you will see the real reason for the Biconomy error displayed as the error message.  In this case, it shows that there were insufficient funds in the wallet to carry out the send token gasless transaction.

    <figure markdown="span">
      ![Check Warnings/Errors]({{config.extra.arcana.img_dir}}/an_debug_tenderly_real_reason_error.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc }
      <figcaption>Check Warnings/Errors</figcaption>
    </figure>

*That is all!* :material-party-popper:{ .icon-color }

You can ask the Web3 app user to retry the transaction with sufficient funds using the app and the gasless transaction will go through!