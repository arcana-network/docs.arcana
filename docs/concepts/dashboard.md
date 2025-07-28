---
alias: concept-arcana-dashboard
title: 'Arcana Developer Dashboard'
description: 'What is Arcana Developer Dashboard and what features does it offer for Web3 app developers.'
arcana:
  root_rel_path: ..
---

# {{config.extra.arcana.dashboard_name}}

<img src="{{config.extra.arcana.img_dir}}/icons/i_an_dashboard_light.{{config.extra.arcana.img_png}}#only-light" width="50"/>
<img src="{{config.extra.arcana.img_dir}}/icons/i_an_dashboard_dark.{{config.extra.arcana.img_png}}#only-dark" width="50"/>

The {{config.extra.arcana.dashboard_name}} can be accessed at: {% include "./text-snippets/db_portal_url.md" %}

It lets Web3 developers register apps with {{config.extra.arcana.company_name}} and set SDK preferences. The dashboard manages app settings and usage through the Gateway node. It provides insights on {{config.extra.arcana.company_name}} protocol usage, including monthly and daily active users (MAU) per app. [[dashboard-user-guide|Learn more...]]

<figure markdown="span">
  <img src="{{config.extra.arcana.img_dir}}/diagrams/d_an_dashboard_light.{{config.extra.arcana.img_png}}#only-light" alt="Developer Dashboard" class="an-screenshots width_85pc"/>
  <img src="{{config.extra.arcana.img_dir}}/diagrams/d_an_dashboard_dark.{{config.extra.arcana.img_png}}#only-dark" alt="Developer Dashboard" class="an-screenshots width_85pc"/>
  <figcaption>Developer Dashboard</figcaption>
</figure>

!!! an-warning "Register, Configure then Integrate!"

    Before integrating any application with the {{config.extra.arcana.sdk_name}}, it must be [[register-app-auth|registered]] and [[index-configure-auth|configured for user onboarding]] through the {{config.extra.arcana.dashboard_name}}.