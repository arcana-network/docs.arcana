You have two options to onboard users:

* Enable [[concept-plug-and-play-auth|plug-and-play authentication]] through the built-in login UI
* Use [[concept-custom-login-ui|custom login UI]]

The built-in login UI is enabled by default. To use it, just add a single line of code, call the `connect` function of the `AuthProvider`.

{% include "./code-snippets/auth_plugnplay.md" %}

This will will bring up the login modal displaying the configured social providers. Passwordless login option is enabled by default.

The figure below shows the built-in login UI plug-and-play pop-up authentication screen for a test app. In this example the app is configured to use Google as the social provider for authentication.

![Plug-and-Play Login UI](/img/an_plug_n_play_auth.png){.an-screenshots-noeffects width="30%"}

You can choose to use a **compact** form of the built-in login UI modal instead of the regular one displayed above. To enable compact login UI modal, instantiate the `AuthProvider` with `compact` parameter of `connectOptions` set to `true` as shown below:

{% include "./code-snippets/auth_plugnplay_compact.md" %}

<img src="/img/relnote_1.0.8_compact_login.png" alt="Compact UI login mode" class="an-screenshots-noeffects"/>

!!! warning "No plug-and-play support for Firebase authentication."

      {% include "./text-snippets/warn_firebase_no_pnp.md" %}

Instead of onboarding users through the built-in plug-and-play login UI, you can instead use a custom login UI. Simply use the following functions instead of `connect`. Note, you need to call different functions depending upon the [[concept-index-auth-type|type of the authentication providers]] that you wish to enable for user onboarding:

* Social Providers: `loginWithSocial`
* Custom IAM Providers: `loginWithBearer`
* Passwordless Login:  `loginWithLink`

For sample code and details on how to onboard users in a {{page.meta.arcana.app_type}} app via a custom login UI, see [[index-custom-ui-onboard-users|how to enable configured providers when using a custom login UI]].

!!! tip "Arcana JWT Token"

      {% include "./text-snippets/jwt_token.md" %}

Next, enable authenticated users to sign blockchain transactions.