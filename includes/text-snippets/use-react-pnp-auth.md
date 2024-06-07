The built-in, plug-and-play login UI is enabled by default.

Update the `App.js` file by importing `Auth` from the `{{config.extra.arcana.react_sdk_pkg_name}}` package and render it in the `App` function to bring up the default login UI component. You can configure the wallet UI theme layout using `Auth` component props. Once the user clicks to log in, they will see the built-in, plug-and-play login UI pop up in the app context displaying all the configured authentication providers.

{% include "./code-snippets/auth_react_auth.md" %}

You can also use the `useAuth` hook and refer to the `Auth` component states.

{% include "./code-snippets/auth_react_useauth.md" %}

The figure below shows the built-in login UI plug-and-play pop-up authentication screen for a test app.

<figure markdown="span">
  ![Plug-and-Play Login UI]({{config.extra.arcana.img_dir}}/an_plug_n_play_auth.{{config.extra.arcana.img_png}}){.an-screenshots .width_35pc}
  <figcaption>Plug-and-play Login UI</figcaption>
</figure>

!!! an-tip "Compact Login UI"

      You can choose to [[concept-plug-and-play-auth#compact-plug-play-ui|use a **compact** form of the built-in login UI modal]] instead of the regular one.

      <figure markdown="span">
        <img src="{{config.extra.arcana.img_dir}}/relnote_1.0.8_compact_login.{{config.extra.arcana.img_png}}" alt="Login UI Options" class="an-screenshots width_50pc"/>
        <figcaption>Login UI Options</figcaption>
      </figure>

!!! an-warning "No plug-and-play support for Firebase authentication."

      {% include "./text-snippets/warn_firebase_no_pnp.md" %}
