Apps that require [[concept-keyspace-type|global keys]] feature **do not need to configure the Social Auth settings** in the {{config.extra.arcana.dashboard_name}}.

User onboarding via {{page.meta.arcana.social_provider}} is automatically turned on for the app when global keys are enabled.

<figure markdown="span">
  ![Global Keys Setting]({{config.extra.arcana.img_dir}}/an_config_global_key_setting.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>Global Keys Setting</figcaption>
</figure>

!!! an-caution "Global Keys Configuration Change"

      In the earlier versions of the {{config.extra.arcana.sdk_name}}, apps using **global keys** were required to configure **Social Auth** settings for the providers. This behavior has changed in the latest release of the {{config.extra.arcana.sdk_name}}. 

      If an app was configured for any social login providers and switches over from app-specific to global keyspace later, the **Social Auth** settings will be disabled altogether.

      <figure markdown="span">
        ![Global Keys, Social Auth Settings Disabled]({{config.extra.arcana.img_dir}}/an_config_global_key_social_auth_disabled.{{config.extra.arcana.img_png}}){ .an-screenshots }
        <figcaption>Global Keys: Social Auth Settings Disabled</figcaption>
      </figure>

