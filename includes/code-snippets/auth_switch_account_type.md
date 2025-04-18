```js

/* Get current account type */
const accountType = await auth.provider.request({
  method: "_arcana_getAccountType",
});

console.log(accountType);

/* If account Type is not eoa then switch to eoa */
/* Before switching to scw accounts ensure that scw is enabled for that chain 8?
/* SCW accounts are enabled for users in addition to EOA only if gas tank is set up for supported chains*/

if (accountType != "eoa"){
  const output = await auth.provider.request({
    method: "_arcana_switchAccountType",
    params: {
      type: "eoa",
    },
  });

  console.log(output);
}
```
