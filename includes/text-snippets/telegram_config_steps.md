{% include "./text-snippets/config_common_steps_noglobal.md" %}

## App-specific Keys

Follow these steps to configure the **Social Auth** settings and enable user onboarding via Telegram. It requires developers to use the {{config.extra.arcana.dashboard_name}} and the [Telegram BotFather](https://telegram.me/BotFather).

### 1. Get Telegram Bot Token

Use Telegram app, go to [Telegram BotFather](https://telegram.me/BotFather). Use `/newbot` to create a bot corresponding to the Web3 app that you wish to integrate with the {{config.extra.arcana.sdk_name}}. Ignore bot creation if you already have one. Go to your Bot by selecting `/mybots`.

Use `/token` command to generate **Telegram token** for the selected bot. This token is used to access the HTTP API. Keep your token secure and store it safely, it can be used by anyone to control your bot.

<figure markdown="span">
  ![Add Bot Token]({{config.extra.arcana.img_dir}}/an_telegram_token.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>Add Bot Token</figcaption>
</figure>

Note the token value, it will be required in the next step while completing the app configuration using the {{config.extra.arcana.dashboard_name}}.

**Link App Domain to Bot**

Once you have chosen a bot, send the `/setdomain` command to @Botfather to link your website's domain to the bot. This is required for successful redirect to your app after the user logs in via Telegram. [Learn more...](https://core.telegram.org/widgets/login)

<figure markdown="span">
  ![Link App Domain]({{config.extra.arcana.img_dir}}/an_telegram_app_domain.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>Link App Domain</figcaption>
</figure>

### 2. Update Social Auth

Go to the {{config.extra.arcana.dashboard_name}}. Click **Configure > {{config.extra.arcana.dashboard_sections.social_auth}}** and select Telegram icon to update settings. Paste the **Token** assigned by @BotFather in the 'Bot Token field.

<figure markdown="span">
  ![Add Telegram Bot Token]({{config.extra.arcana.img_dir}}/an_dApp_telegram_config.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>Add Telegram Bot Token</figcaption>
</figure>

Save the **Social Auth** settings. 

*You are all set with the Telegram configuration!*

!!! an-warning "Plug-and-play login feature not supported for Telegram"

      {% include "./text-snippets/warn_telegram_no_pnp.md" %}
