
**Gather Error Data**

* **Collect Data**: Bring up the inspector in the web app context, click **Console** and select the exception to view exception details and gather error data. Note the **data** and **message** fields as highlighted in the screenshot below.

    ![Gasless Errors 1](/img/an_debug_exception_details.png){.an-screenshots}

* **Verify**: In the **Network** tab of the Inspector, you will also see that the Biconomy bundler API call has returned a failure response. This ensures that you are looking at the correct error details.

    ![Gasless Errors 2](/img/an_debug_network_details.png){.an-screenshots}

**Debug with Tenderly**

* Go to Tenderly and create a **New Simulation**. In addition to the error data gathered above, you will also need to provide the following details:

    ![Gasless Errors 3](/img/an_debug_tenderly_new_simulation.png){.an-screenshots}

* In the new simulation, specify the contract address as listed below:

    {==
      0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789
    ==}
  
    This is the address of the EntryPoint for the Biconomy bundler used by the Arcana Auth back-end subsystem that supports the gasless feature.

    ![Gasless Errors 4](/img/an_debug_tenderly_entrypoint_address.png){.an-screenshots}

* Select 'Enter raw input data' in the new simulation entry and provide the error data gathered earlier via the browser inspector *Console*.

    ![Gasless error input data](/img/an_debug_tenderly_input_data.png){.an-screenshots}
    ![Gasless copy input data](/img/an_debug_tenderly_copy_data.png){.an-screenshots}

* After providing the gathered error data, run the simulation.

    ![Gasless Errors 5](/img/an_debug_tenderly_run_simulation.png){.an-screenshots}

* At the end of the simulation run, you can access the simulation log. Refer to the overview tab. 

    ![Gasless Errors Overview log](/img/an_debug_tenderly_overview_log.png){.an-screenshots}

* Scroll down the content until you see the warning icon. This simulation run warning is most likely the reason why the gasless transaction failed. If you hover over the yellow warning sign, you will see the real reason for the Biconomy error displayed as the error message.  In this case it shows that there were insufficient funds in the wallet to carry out the send token gasless transaction.

    ![Gasless Errors 6](/img/an_debug_tenderly_real_reason_error.png){.an-screenshots}

*That is all!* :material-party-popper:

You can ask the Web3 app user to retry the transaction with sufficient funds using the app and the gasless transaction will go through!
