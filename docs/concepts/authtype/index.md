---
arcana:
  root_rel_path: ../..
---

# Authentication Types

The {{config.extra.arcana.sdk_name}} supports the following authentication providers:

[Social Providers :fontawesome-solid-users-gear:](./socialauth.md){ .md-button }

[Custom IAM Providers :fontawesome-solid-users-gear:](./customauth.md){ .md-button }

[Passwordless Login :material-card-account-mail:](./pwdless.md){ .md-button }

!!! info  "Aggregate Logins"

    The {{config.extra.arcana.sdk_name}} supports [aggregate login]({{page.meta.arcana.root_rel_path}}/concepts/authtype/aggregatelogin.md) feature. With aggregate login, application users can be identified even if they use multiple authentication mechanisms to onboard an app. An authenticated user is identified and associated with the same key shares and does not have to juggle multiple wallet addresses. Aggregate login ensures there are no duplicate user identities or {{config.extra.arcana.wallet_name}} addresses assigned to the same user.  

    The aggregate login feature works **only if** the user specifies the **same** email ID to register with different authentication providers or via the passwordless login option.
