First import `AuthProvider` from the `{{config.extra.arcana.auth_sdk_pkg_name}}` package.

{% include "./code-snippets/import_auth.md" %}

Create a new `AuthProvider`, specify the unique **{{config.extra.arcana.app_address}}** obtained earlier during app registration.

{% include "./code-snippets/new_auth.md" %}

After creating, make sure you initialize the newly instantiated `AuthProvider`.

{% include "./code-snippets/init_auth.md" %}

!!! caution "Initialize First!"

    The app must use `await` until the `init()` call is complete, before invoking any of the other {{config.extra.arcana.sdk_name}} functions.

{% include "./text-snippets/quick-start-authprovider-optional.md" %}

After initializing the `AuthProvider`, you can call any of its exported functions. For example, the code below shows how to access the standard EIP-1193 Ethereum provider:

{% include "./code-snippets/provider.md" %}

Next, add code to facilitate user onboarding in the app.