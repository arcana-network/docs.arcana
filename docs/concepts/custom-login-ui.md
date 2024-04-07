---
alias: concept-custom-login-ui
title: 'Custom Login UI'
description: 'Custom Login UI'
arcana:
  root_rel_path: ..
---

# Custom Login UI

Developers have two user onboarding options:

* You can use the built-in, ready-to-use authentication provided by {{config.extra.arcana.sdk_name}} referred to as [[concept-plug-and-play-auth|plug-and-play authentication]].

* Alternatively, you have the choice to create a custom login user interface.

You can decide to implement the custom login UI instead of the built-in, plug-and-play login UI at the time of SDK integration. This choice is not governed by any settings made via the {{config.extra.arcana.dashboard_name}}.

After installing and integrating with the {{config.extra.arcana.sdk_name}}, create the `AuthProvider`, use `init` function to initialize the provider, create the necessary user interface hooks and call the `loginWithSocial` function with the desired social login provider to onboard users. For email-based onboarding, utilize the `loginWithOTP`(deprecated), `loginWithOTPStart` and `loginWithOTPComplete` functions, which sends users a verification link on the specified user email.

Here is an example of [[google-social-auth|how to onboard users via 'Google' as the social login provider and a custom login UI]]. See {% include "./text-snippets/authsdkref_url.md" %} for more details.
