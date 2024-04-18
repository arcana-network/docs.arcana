There are two keyspace options: [[concept-keyspace-type|App-specific and Global Keys]].

You can either use the default, highly secure **App-specific** keyspace option or **Global** keyspace depending upon the desired level of security and user experience required for the application. 

<figure markdown="span">
  ![Mainnet Keyspace Options]({{config.extra.arcana.img_dir}}/an_db_keyspace_options.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc}
  <figcaption>Keyspace Options</figcaption>
</figure>

Select **Global Keyspace** and click **Verify**. This will bring up a verification form. Fill out the verification form, and click **Submit**. 

<figure markdown="span">
  <img class="an-screenshots width_35pc" alt="Request Global Keyspace" src="{{config.extra.arcana.img_dir}}/an_db_global_keys_verify.{{config.extra.arcana.img_png}}"/>
  <figcaption>Request Global Keyspace</figcaption>
</figure>

You can check the status of **Global Keyspace** verification by using the **Keyspace** screen. After submitting the form, you will see the status as **In Review**.

<figure markdown="span">
  ![Global Keyspace Request Status]({{config.extra.arcana.img_dir}}/an_db_global_keys_inreview.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc}
  <figcaption>Global Keyspace Request Status</figcaption>
</figure>

The status will change to **Approved** once verification is complete. You can integrate your application with the {{config.extra.arcana.sdk_name}} but do not deploy it until the verification is complete. Otherwise, users that log in before verification is complete may see different wallet addresses after the process is complete.

<figure markdown="span">
  ![Global Keyspace Request Approved]({{config.extra.arcana.img_dir}}/an_db_global_keys_approved.{{config.extra.arcana.img_png}}){ .an-screenshots .width_85pc}
  <figcaption>Global Keyspace Request Approved</figcaption>
</figure>
