---
alias: concept-custom-login-ui
title: 'Custom Login UI'
description: 'Custom Login UI'
arcana:
  root_rel_path: ..
---

# Custom Login UI

Apps using the {{config.extra.arcana.sdk_name}} can onboard users via one of the two options:

* Plug-and-play Login UI: A built-in, ready-to-use login UI for [[concept-plug-and-play-auth|plug-and-play authentication]].

* Custom Login UI: Build a custom login UI from scratch.

This decision is made at the time of SDK integration. This choice is not governed by any settings made via the {{config.extra.arcana.dashboard_name}}.

After installing and integrating with the {{config.extra.arcana.sdk_name}}, create the `AuthProvider`, use `init` function to initialize the provider, create the necessary user interface hooks and call the `loginWithSocial` function with the desired social login provider to onboard users. For email-based onboarding, utilize the `loginWithOTP`(deprecated), `loginWithOTPStart` and `loginWithOTPComplete` functions, which sends users a verification link on the specified user email.

Here is an example of [[google-social-auth|how to onboard users via 'Google' as the social login provider and a custom login UI]]. See [Auth SDK Reference]({{config.extra.arcana.auth_sdk_ref_url}}) for more details.
