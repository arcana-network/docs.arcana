---
alias: react-nextjs-use-plug-play-auth
title: 'React/Next.js Apps: Plug-and-Play Login UI'
description: 'Use the Arcana Auth SDK plug-and-play feature to quickly add code in the React/Next.js app for onboarding users via the configured options.'
arcana:
  root_rel_path: ../../..
  app_type: "'React/Next.js'"
  app_example_submodule: "`sample-auth-react`,`sample-auth-nextjs`"
  social_provider: "'google'"
  custom_login_ui_tag: "index-react-nextjs-custom-ui-onboard-users"
  firebase_custom_ui_tag: "react-nextjs-build-iam-firebase-auth"
---

# Plug-and-Play Login UI

Use the built-in, [[concept-plug-and-play-auth|plug-and-play login UI modal]] to quickly onboard users in a {{page.meta.arcana.app_type}} app integrated with the {{config.extra.arcana.wagmi_sdk_name}}. 

{% include "./text-snippets/quick-start-auth-onboard-custom-login.md" %}

## Prerequisites

* [[register-app-auth|Register]] the Wagmi app and configure SDK usage [[index-config-social-providers|settings for social login]] providers, [[configure-wallet-chains|manage app chains]] and [[index-setup-wallet|wallet user experience]].

* Install the [[sdk-installation|required SDK packages]] for {{page.meta.arcana.app_type}}.

* [[integrate-react-nextjs-app|Integrate]] {{page.meta.arcana.app_type}} app, create and initialize the `AuthProvider`.

## Steps

{% include "./code-snippets/auth_react_auth.md" %}

{% include "./code-snippets/auth_react_useauth.md" %}

The figure below shows the built-in login UI plug-and-play pop-up authentication screen for a test app.

<figure markdown="span">
  ![Plug-and-Play Login UI]({{config.extra.arcana.img_dir}}/an_plug_n_play_auth.{{config.extra.arcana.img_png}}){.an-screenshots .width_35pc}
  <figcaption>Plug-and-play Login UI</figcaption>
</figure>

{% include "./text-snippets/pnp-compact-mode.md" %}

!!! an-warning "No plug-and-play support for Firebase authentication."

      {% include "./text-snippets/warn_firebase_no_pnp.md" %}

## What's Next?

{% include "./text-snippets/quick-start-sign-transactions.md" %}

## See also

{% include "./text-snippets/quick-start-common-examples.md" %}

* [[faq-gen| FAQ]]

* [[troubleshooting| Troubleshooting Guide]]

* [[web-auth-error-msg|{{config.extra.arcana.sdk_name}} Errors]]

{% include "./text-snippets/auth_sdk_quicklinks.md" %}
{% include "./text-snippets/auth_wagmi_sdk_quicklinks.md" %}
{% include "./text-snippets/demo/auth_sdk_demo.md" %}

