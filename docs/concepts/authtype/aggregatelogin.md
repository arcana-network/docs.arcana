---
slug: /aggregatelogin
id: idaggregatelogin
sidebar_custom_props:
  cardIcon: 💠
arcana:
  root_rel_path: ../..
---

# Aggregate login

<img src="/img/icons/i_data_xfer_owner_light.png#only-light" width="50"/>
<img src="/img/icons/i_data_xfer_owner_dark.png#only-dark" width="50"/>

Aggregate Login refers to a feature in the [{{config.extra.arcana.sdk_name}}]({{page.meta.arcana.root_rel_path}}/concepts/authsdk.md) that can uniquely identify application users even if they use different social accounts to log in. This feature works **only** if the user has the same email ID associated with multiple social accounts.

What this means is that if an application user logs into an application integrated with the {{config.extra.arcana.sdk_name}} say, using Google, Twitter, or Twitch where each of these accounts belonging to the same developer is linked with a single email ID, then all these multiple login accounts will be treated as a single user. If the social accounts use different email IDs then these accounts may belong to the same user but {{config.extra.arcana.product_name}} will consider subsequent user login via a different onboarding option as a unique *new {{config.extra.arcana.company_name}} developer account*. 

``` mermaid
graph LR
  A[[User]] -.-> B(Social Provider A) -.-> E{Email ID Same?} ==Yes==> F>User ID 1];
  E{Email ID Same?} ==No==> G>New unique User ID];
  A[[User]] -.-> M(Social Provider B) -.-> E{Email ID Same?};
  A[[User]] -.-> C(Passwordless Login) -.-> E{Email ID Same?};
```

Aggregate login also works in the case of developers logging into the {{config.extra.arcana.dashboard_name}} to register and configure their applications. If a developer uses multiple login options to log into the {{config.extra.arcana.dashboard_name}} and the email ID is not the same across the selected authentication providers, then each login by the same developer is considered as a different unique developer account. In this case, any applications configured by the developer using say, provider **A** to log into the {{config.extra.arcana.dashboard_name}}, will not be visible to the same developer when using provider **B** to log into the {{config.extra.arcana.dashboard_name}}.