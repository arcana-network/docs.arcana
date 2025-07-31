---
alias: concept-aggregate-login
title: 'Aggregate Login'
description: 'The aggregate login feature can uniquely identify application users even if they use different social accounts to log in to the app.'
arcana:
  root_rel_path: ../..
---

# Aggregate login

<img src="{{config.extra.arcana.img_dir}}/icons/i_data_xfer_owner_light.{{config.extra.arcana.img_png}}#only-light" width="50"/>
<img src="{{config.extra.arcana.img_dir}}/icons/i_data_xfer_owner_dark.{{config.extra.arcana.img_png}}#only-dark" width="50"/>

Aggregate Login in {{config.extra.arcana.sdk_name}} links users with the same email across social logins as one user. Different emails create separate developer accounts.

For example, logging in with Google and Twitter using the same email counts as one account, while different emails create separate accounts.

```mermaid
graph LR
  A\[[User]] -.-> B(Social Login Provider A) -.-> E{Email ID Same?} ==Yes==> F>User ID 1];
  E{Email ID Same?} ==No==> G>New unique User ID];
  A\[[User]] -.-> M(Social Login Provider B) -.-> E{Email ID Same?};
  A\[[User]] -.-> C(Passwordless Login) -.-> E{Email ID Same?};
```

!!! an-warning "Limited Auth Provider Support"

      Aggregate login feature does not work for the following providers:

      * Cognito
      * Firebase
      * Steam
      * Telegram
      * Twitter
