{% include "./code-snippets/import_ca.md" %}

{% include "./code-snippets/new_ca.md" %}

{% include "./code-snippets/init_ca.md" %}

!!! an-caution "`ca.init()`"

    Use `await` until the `init()` call is complete. Then call 
    any other `CA` method listed in the
    {% include "./text-snippets/casdkref_url.md" %}.
