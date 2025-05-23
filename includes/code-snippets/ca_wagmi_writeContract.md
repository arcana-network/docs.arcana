```js
import {
    useWriteContract
} from "@arcana/ca-wagmi";

const { writeContract } = useWriteContract();

...

writeContract(
    {
        address: s,
        abi: erc20Abi,
        functionName: "transfer",
        args: [to, BigInt(amount.mul(new Decimal(10).pow(6)).toString())],
    },
    {
        onSuccess(hash) {
            createSuccessToast(chain, hash);
            form.reset();
            setLoading(false);
            console.log("success");
        },
        onError(error) {
            form.reset();
            setLoading(false);
            console.log({ error });
        },
    }
);

...
```