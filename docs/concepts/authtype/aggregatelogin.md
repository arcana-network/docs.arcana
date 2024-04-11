---
alias: concept-aggregate-login
title: 'Aggregate Login'
description: 'The aggregate login feature can uniquely identify application users even if they use different social accounts to log in to the app.'
arcana:
  root_rel_path: ../..
---

# Aggregate login

<img src="/img/icons/i_data_xfer_owner_light.png#only-light" width="50"/>
<img src="/img/icons/i_data_xfer_owner_dark.png#only-dark" width="50"/>

Aggregate Login in [[concept-authsdk| {{config.extra.arcana.sdk_name}}]] identifies app users with the same email across social logins. If multiple logins share an email, they're seen as one user. Different emails mean different developer accounts.

For example, if a user logs in with Google and Twitter, both linked to the same email, they're treated as a single user. However, if different emails are used, separate {{config.extra.arcana.company_name}} developer accounts are created.

```mermaid
graph LR
  A\[[User]] -.-> B(Social Login Provider A) -.-> E{Email ID Same?} ==Yes==> F>User ID 1];
  E{Email ID Same?} ==No==> G>New unique User ID];
  A\[[User]] -.-> M(Social Login Provider B) -.-> E{Email ID Same?};
  A\[[User]] -.-> C(Passwordless Login) -.-> E{Email ID Same?};
```

Aggregate login in {{config.extra.arcana.dashboard_name}} groups developer accounts based on email. If different emails are used with multiple login options, they're treated as separate developer accounts, leading to different app configurations for each login. For instance, if a developer logs in with Google and Twitter, both using the same email, it's considered one developer account. However, if they use different emails, it creates separate developer accounts, affecting app configurations.

!!! an-caution "Not supported for all Auth Providers"

      Aggregate login feature does not work for the following providers:

      * Cognito
      * Firebase
      * Steam
      * Twitter

      If a user has the same email ID registered with these providers, logging into an app using either of them will create a new unique user account even if the user uses the same email as the one used with other social login provider or via the passwordless option.
