The process for integrating the SDK differs for dApps that need to support both EVM and non-EVM chains, such as Fuel.


{% include "./code-snippets/int_ca_sdk.md" %}

!!! an-caution "`ca.init()`"

    Use `await` until the `init()` call is complete. Then call 
    any other `CA` method listed in the
    {% include "./text-snippets/casdkref_url.md" %}.
