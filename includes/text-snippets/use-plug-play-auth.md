# Plug-and-Play Login UI

In this guide, you will learn how {{page.meta.arcana.app_type}} Web3 apps can integrate with the [{{config.extra.arcana.sdk_name}}]({{page.meta.arcana.root_rel_path}}/concepts/authsdk.md) and use the [[concept-plug-and-play-auth|plug-and-play ]] feature to onboard users with the built-in login UI.

## Prerequisites

* Make sure you can access the {{config.extra.arcana.dashboard_name}}: {% include "./text-snippets/db_portal_url.md" %}

* Use the [{{config.extra.arcana.dashboard_name}}]({{page.meta.arcana.root_rel_path}}/concepts/dashboard.md) to [[index-configure-auth|register and configure the app]]. The plug-and-play pop-up UI screen will display only those authentication providers that are configured using the {{config.extra.arcana.dashboard_name}}.  If no authentication providers are configured in the {{config.extra.arcana.dashboard_name}}, then users can only onboard the app via the passwordless login option. See [[index-configure-auth|how to configure authentication providers]] for details.
  
* Follow the instructions as per the app type and [[index-integrate|integrate the app]] with the {{config.extra.arcana.sdk_name}} before accessing user onboarding functions of the {{config.extra.arcana.sdk_name}}. During integration, you can choose the [[concept-plug-and-play-auth#compact-plug-play-ui|compact mode (optional)]] for the plug-and-play login UI.

## Steps

*Using the plug-and-play authentication feature is simple!*

Just a single line of code!

### Step 1: Call User Onboarding Function: `connect`

After successfully integrating the app with the {{config.extra.arcana.sdk_name}}, make sure the `AuthProvider` is successfully initialized. Then simply add a single line of code, call to the `connect` function of the {{config.extra.arcana.sdk_name}} and enable the built-in plug-and-play login UI in the app when a user clicks a button to log in:

{% include "./code-snippets/auth_plugnplay.md" %}

The `connect()` function will bring up the plug-and-play pop-up modal in the app context and display the available options for user onboarding. Only those options are displayed that were earlier configured by the developer using the {{config.extra.arcana.dashboard_name}}.

The figure below shows the built-in, plug-and-play login UI screen for a test app. All the authentication providers configured by the developer are displayed as the onboarding options in this login UI. The passwordless login option is automatically enabled and requires no dashboard set up.

![Plug-and-Play Login UI](/img/an_plug_n_play_auth.png){.an-screenshots-noeffects width="30%"}

!!! an-tip "Arcana JWT Token"

     {% include "./text-snippets/jwt_token.md" %}

That is all! :material-party-popper:

The plug-and-play user onboarding feature is successfully enabled in an app integrated with the {{config.extra.arcana.sdk_name}}.

!!! an-warning "No plug-and-play support for Firebase authentication."

      {% include "./text-snippets/warn_firebase_no_pnp.md" %}

## What's Next?

After enabling the plug-and-play user onboarding feature in the app, developers can use other {{config.extra.arcana.sdk_name}} functions and enable Web3 wallet operations for authenticated users. See [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]], [[index-arcana-wallet|how to enable the {{config.extra.arcana.wallet_name}}]] for details.

## See also

* [[index-configure-auth|Configure authentication providers]]
* [[index-build-social-providers|Build custom login UI]]
* [[web-auth-error-msg|{{config.extra.arcana.sdk_name}} Errors]]
* [[web-auth-usage-guide|{{config.extra.arcana.sdk_name}} Usage Guide]]
* {% include "./text-snippets/authsdkref_url.md" %}
