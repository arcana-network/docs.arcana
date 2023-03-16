---
slug: /indexuserauth
id: idindexuserauth
sidebar_custom_props:
  cardIcon: 📺
arcana:
  root_rel_path: ../..
---
# Onboard Users

User onboarding requires developers to first register their applications and configure the social providers using the Arcana Developer Dashboard. Next, install and integrate the registered and configured app with the Auth SDK.

Developers can choose to enable user onboarding in their applications by either using the default, built-in UI offered by the Auth SDK through the [plug-and-play authentication feature]({{page.meta.arcana.root_rel_path}}/concepts/plugnplayauth.md). Or they can build customized UI and simply call the Auth SDK functions to onboard users.

[How to use 'Plug & Play' Auth for user onboarding? :fontawesome-solid-plug:](./wallet_plugnplay.md){ .md-button }

[How to build custom Auth for user onboarding? :fontawesome-solid-users:](./build_social/index.md){ .md-button } 

[How to use 'Passwordless' login? :material-email-open-outline:](./wallet_plugnplay.md){ .md-button }

!!! note

    Arcana supports the [aggregate login]({{page.meta.arcana.root_rel_path}}/concepts/authtype/aggregatelogin.md) feature that can identify application users even if they use different authentication mechanisms to log in. Aggregate login ensures there are no duplicate user identities or Arcana Web3 wallet addresses assigned to the same user.  

    Aggregate login feature works **only if** the user specifies the **same** email ID to register with different social authentication providers and passwordless login.
