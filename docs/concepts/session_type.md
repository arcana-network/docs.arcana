---
alias: concept-session-type
title: 'Arcana Session Type'
description: 'Arcana Auth SDK allows app users to configure authenticated user session timeout and re-login behavior to manage user experience. Learn more.'
arcana:
  root_rel_path: ..
---

# Arcana Session Types

Session management settings allow Web3 app developers to decide if a user session persists after the browser window or tab is closed and reopened. Session cookies control how long an authenticated user session remains active without requiring the user to log in again.

{{config.extra.arcana.wallet_name}} supports two types of sessions:

* Persistent
* Non-Persistent

!!! an-note "Session Cookies"

    In both these cases, the session cookies are immediately invalidated once the user logs out of the app.

## Persistent Session

The authenticated session remains valid within a specified time, so users don't need to log in again after closing and reopening the browser. 

Use the 'Require Log-in After' setting to specify how long a session is persisted once the browser is closed. The 'Require Log-in After' setting does not impact any active user session. The user is not forcefully logged out after the time expires. It is only used to track session persistence in case the user closes the browser without explicitly logging out.

Session cookies are used to manage session persistence. After the specified timeout, the cookies are deleted.

A persistent session is convenient for app users but carries some risk since it automatically logs the user in when the app is reopened. Ensure the re-login time aligns with the app's security and risk management profile.

!!! an-warning "Not supported for Global Keyspace Setting"

      The persistent session type is enabled only for the default [[concept-keyspace-type|app-specific keyspace]] setting. For security reasons, it is disabled for apps using global keyspace.

!!! an-tip "Incognito/Private Browser Mode"

      If the session cookies are disabled in incognito or private browsing mode, then there is no user session persistence when the browser is closed. The behavior is the same as the non-persistent mode.

## Non-Persistent Session

If the browser is closed, the authenticated session is invalidated immediately. Users must log in again to continue using the app. By default, a newly registered app is configured to use a non-persistent session type. 
