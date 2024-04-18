Import `AuthProvider` from the `{{config.extra.arcana.auth_sdk_pkg_name}}` package.

{% include "./code-snippets/import_auth.md" %}

Create a new `AuthProvider` and specify the unique **{{config.extra.arcana.app_address}}** obtained earlier during app registration.

{% include "./code-snippets/new_auth.md" %}

Initialize the newly instantiated `AuthProvider`.

{% include "./code-snippets/init_auth.md" %}

!!! an-caution "Initialize First!"

    The app must use `await` until the `init()` call is complete, before invoking any of the other {{config.extra.arcana.sdk_name}} functions.

{% include "./text-snippets/quick-start-authprovider-optional.md" %}

After initializing the `AuthProvider`, you can call any of its exported functions. See {% include "./text-snippets/authsdkref_url.md" %} for details.
