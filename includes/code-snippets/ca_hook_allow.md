```js
ca.setOnAllowanceHook(async ({ allow, deny, sources }) => {
    // This is a hook for the dev to show user the allowances that need to be setup for the current tx to happen

    // sources: an array of objects with minAllowance, chainID, token symbol etc
    // allow(allowances): allowances is an array with allowance for each source (len(sources) == len(allowances))
    // deny(): stop the flow
})
```