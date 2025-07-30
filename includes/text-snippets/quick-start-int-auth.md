{% include "./code-snippets/import_auth.md" %}

{% include "./code-snippets/new_auth.md" %}

{% include "./code-snippets/init_auth.md" %}

!!! an-warning "Initialize First!"

    The app must use `await` until the `init()` call is complete, before invoking any of the other {{config.extra.arcana.sdk_name}} functions listed in [Auth SDK Reference]({{config.extra.arcana.auth_sdk_ref_url}}).