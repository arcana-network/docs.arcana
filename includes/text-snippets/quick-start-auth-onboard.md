The built-in, [[concept-plug-and-play-auth|plug-and-play login UI]] is enabled by default. To use it, just add a single line of code in the app, call the `connect` function of the `AuthProvider`.

{% include "./code-snippets/auth_plugnplay.md" %}

This will bring up the login modal displaying the onboarding options configured for the app in addition to the passwordless option.

![Plug-and-Play Login UI](/img/an_plug_n_play_auth.png){.an-screenshots-noeffects width="30%"}

!!! tip "Compact Login UI"

      You can choose to [[concept-plug-and-play-auth#compact-plug-play-ui|use a **compact** form of the built-in login UI modal]] instead of the regular one displayed above.

      <img src="/img/relnote_1.0.8_compact_login.png" alt="Compact UI login mode" class="an-screenshots-noeffects"/>

!!! warning "No plug-and-play support for Firebase authentication."

      {% include "./text-snippets/warn_firebase_no_pnp.md" %}

{% include "./text-snippets/quick-start-auth-onboard-custom-login.md" %}
